from dotenv import load_dotenv
load_dotenv()

from fastapi import UploadFile, File, APIRouter, Depends, HTTPException
from typing import Annotated
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

class CreateProductRequest(BaseModel):
    name: str
    price: int
    description: str
    skin_type: str
    brand: str

class ProductResponse(BaseModel):
    id: int
    name: str
    price: int
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

# @router.post("/upload")
# async def create_product(file: UploadFile = File(...)):
#     if file:
#         print(file.filename)
#         s3.upload_fileobj(file.file, S3_BUCKET, file.filename)
#         return "file uploaded successfully"
#     else:
#         return "Error uploading file"

@router.post("/upload", response_model=CreateProductRequest, status_code=201)
async def create_product(
    product: CreateProductRequest,
    db: Session = Depends(get_db),
    file: UploadFile = File(...)
):
    if file and all(value is not None for value in product.model_dump().values()):
        print(file.filename)
        s3.upload_fileobj(file.file, S3_BUCKET, file.filename)
        image_url = f"https://s3.<region>.amazonaws.com/{S3_BUCKET}/{file.filename}"
        
        # Create new product
        db_product = Products(**product.model_dump(), image_url=image_url)
        db.add(db_product)
        db.commit()
        db.refresh(db_product)
        
        return db_product
    else:
        raise HTTPException(status_code=400, detail="Error uploading file")
    

@router.get("/")
async def get_products(db: db_dependency):
    products = db.query(Products).all()
    return products