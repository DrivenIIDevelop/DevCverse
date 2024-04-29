from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Cart, CartItem, Products, Users
from database import SessionLocal
from pydantic import BaseModel
from typing import List

router = APIRouter(
    prefix="/cart",
    tags=["cart"]
)

class CartItemBase(BaseModel):
    id: int
    product_id: int
    cart_id: int


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def get_all_items(user_id: int, db:Session = Depends(get_db)):
    cart = db.query(Cart).filter(Cart.user_id == user_id).first()

    if not cart:
      raise HTTPException(status_code=404, detail="Cart not found")
    
    return cart.cart_items


@router.post("/add-item/{product_id}")
def add_cart_item(user_id: int, product_id: int, db: Session = Depends(get_db)):

    user = db.query(Users).filter_by(id=user_id).first()

    # Check if the user exists
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    product = db.query(Products).filter_by(id=product_id).first()

    # Check if the product exists
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")

    cart_item = CartItem(cart_id=user.cart.id, product_id=product_id)    
    db.add(cart_item)
    db.commit()

    return {"message": "Product added to cart successfully"}

@router.delete("/remove/{cart_item_id}")
def remove_cart_item(cart_item_id: int, db: Session = Depends(get_db)):
    # Retrieve the cart item
    cart_item = db.query(CartItem).filter_by(id=cart_item_id).first()

    # Check if the cart item exists
    if cart_item is None:
        raise HTTPException(status_code=404, detail="Cart item not found")

    # Delete the cart item
    db.delete(cart_item)
    db.commit()

    return {"message": "Product removed from cart successfully"}
