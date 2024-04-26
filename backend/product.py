from dotenv import load_dotenv
load_dotenv()

from fastapi import UploadFile, File, APIRouter, Depends, HTTPException, Form
from typing import Annotated, Optional
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal
import boto3
import os
from models import Products

ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")

router = APIRouter(
    prefix="/products",
    tags=["products"]
)

# will need to set to renai-prod later
S3_BUCKET = 'renai-dev'
s3 = boto3.client('s3', 
                    aws_access_key_id = ACCESS_KEY_ID,
                    aws_secret_access_key= SECRET_ACCESS_KEY,
                    )

# class CreateProductRequest(BaseModel):
#     name: str
#     price: int
#     description: str
#     skin_type: str
#     brand: str

# class ProductUpdateRequest(BaseModel):
#     name: Optional[str]
#     price: Optional[float]
#     description: Optional[str]
#     skin_type: Optional[str]
#     brand: Optional[str]

class ProductResponse(BaseModel):
    id: int
    name: str
    price: float
    description: str
    skin_type: str
    brand: str
    image_url: str

    class Config:
        from_attributes = True

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]



@router.get("/{product_id}")
async def get_product(product_id: int, db: Session = Depends(get_db)):
    db_product = db.query(Products).filter(Products.id == product_id).first()
    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")
    return db_product


@router.post('/create-products', response_model=ProductResponse, status_code=201)
async def create_product(
    name: Annotated[str, Form()],
    price: Annotated[float, Form()],
    description: Annotated[str, Form()],
    skin_type: Annotated[str, Form()],
    brand: Annotated[str, Form()],
    db: Session = Depends(get_db),
    file: UploadFile = File(...)
):
    if file:
        s3.upload_fileobj(file.file, S3_BUCKET, file.filename)
        image_url = f"https://s3.<region>.amazonaws.com/{S3_BUCKET}/{file.filename}"
        product_data = {
            "name": name,
            "price": price,
            "description": description,
            "skin_type": skin_type,
            "brand": brand,
            "image_url": image_url
        }
        db_product = Products(**product_data)
        db.add(db_product)
        db.commit()
        db.refresh(db_product)

        return db_product
    else:
        raise HTTPException(status_code=400, detail="Error creating new product")


@router.put("/update/{product_id}")
async def update_product(
    product_id: int, 
    name: Annotated[str, Form()],
    price: Annotated[float, Form()],
    description: Annotated[str, Form()],
    skin_type: Annotated[str, Form()],
    brand: Annotated[str, Form()],
    # file: Optional[UploadFile] = File(...), 
    db: Session = Depends(get_db),
):
    print("in the update product route~~~")
    
    print("product price: ", price) #None
    print("product name: ", name) 
    print("product description: ", description) 
    print("product skin_type: ", skin_type) 
    print("product brand: ", brand) 

    db_product = db.query(Products).filter(Products.id == product_id).first()
    

    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    update_data = {
        "name": name,
        "price": price,
        "description": description,
        "skin_type": skin_type,
        "brand": brand,
        # "file": file,
    }

    for key, value in update_data.items():
        if value is not None:
            setattr(db_product, key, value)

    db.commit()
    db.refresh(db_product)

    return db_product

@router.delete("/delete/{product_id}")
async def delete_product(product_id: int, db: Session = Depends(get_db)):
    print("product_id in the backend: ", product_id)
    print("in the delete product route~~~")
    db_product = db.query(Products).filter(Products.id == product_id).first()
    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")
    db.delete(db_product)
    db.commit()
    return {"message": "Product successfully deleted"}

@router.get("/")
async def get_products(db: db_dependency):
    """Fetch all products"""
    products = db.query(Products).all()
    return products
