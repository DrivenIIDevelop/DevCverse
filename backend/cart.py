from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Cart, CartItem
from database import SessionLocal
from pydantic import BaseModel

router = APIRouter(
    prefix="/cart",
    tags=["cart"]
)

class CartItem(BaseModel):
    product_id: int


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def get_cart_items(user_id: int, db: Session = Depends(get_db)):
    cart = db.query(Cart).filter(Cart.user_id == user_id).first()
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    return {"cart_items": [item.product_id for item in cart.cart_items]}

@router.post("/add-item")
def add_product_to_cart(cart_item: CartItem, user_id: int, db: Session = Depends(get_db)):
    cart = db.query(Cart).filter(Cart.user_id == user_id).first()
    if not cart:
        cart = Cart(user_id=user_id)
        db.add(cart)
        db.commit()
    new_cart_item = CartItem(cart_id=cart.id, product_id=cart_item.product_id)
    db.add(new_cart_item)
    db.commit()
    return {"message": "Product added to cart"}

@router.delete("/{cartItem_id}")
def delete_product_from_cart(cart_item: CartItem, cartItem_id: int, db: Session = Depends(get_db)):
    cart = db.query(Cart).filter(CartItem.id == cartItem_id).first()
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    cart_item = db.query(CartItem).filter(CartItem.id == cart_item.cartitem_id, CartItem.cart_id == cart.id).first()
    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    db.delete(cart_item)
    db.commit()
    return {"message": "Product removed from cart"}