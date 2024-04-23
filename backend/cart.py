from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Cart, CartItem
from database import SessionLocal

router = APIRouter(
    prefix="/cart",
    tags=["cart"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/{user_id}")
async def create_cart(user_id: int, db: Session = Depends(get_db)):
    db_cart = Cart(user_id=user_id)
    db.add(db_cart)
    db.commit()
    return db_cart

@router.get("/{user_id}")
async def get_cart(user_id: int, db: Session = Depends(get_db)):
    db_cart = db.query(Cart).filter(Cart.user_id == user_id).first()
    if not db_cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    return db_cart

@router.post("/{cart_id}/add/{product_id}")
async def add_product_to_cart(cart_id: int, product_id: int, db: Session = Depends(get_db)):
    db_cart_item = CartItem(cart_id=cart_id, product_id=product_id)
    db.add(db_cart_item)
    db.commit()
    return db_cart_item

@router.delete("/{cart_id}/remove/{product_id}")
async def remove_product_from_cart(cart_id: int, product_id: int, db: Session = Depends(get_db)):
    db_cart_item = db.query(CartItem).filter(CartItem.cart_id == cart_id, CartItem.product_id == product_id).first()
    if not db_cart_item:
        raise HTTPException(status_code=404, detail="Product not found in cart")
    db.delete(db_cart_item)
    db.commit()
    return {"message": "Product successfully removed from cart"}