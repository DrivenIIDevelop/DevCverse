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

class Item(BaseModel):
    user_id: int
    quantity: int
    
class UpdateItem(BaseModel):
    cart_item_id: int
    quantity: int
    
    
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/user/{user_id}")
def get_all_items(user_id: int, db:Session = Depends(get_db)):
    
    user = db.query(Users).filter_by(id=user_id).first()
    
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    if user.cart is None:
        user.cart = Cart(user_id=user_id)
        db.add(user.cart)
        db.commit()
        db.refresh(user.cart)
    
    cart = db.query(Cart).filter(Cart.user_id == user_id).first()

    if not cart:
      raise HTTPException(status_code=404, detail="Cart not found")
    

    cart_items = []
    for item in cart.cart_items:
        product = db.query(Products).filter(Products.id == item.product_id).first()
        cart_items.append({
            "id": item.id,
            "product_id": product.id,
            "product_name": product.name,
            "product_price": product.price,
            "product_description": product.description,
            "product_skin_type": product.skin_type,
            "product_brand": product.brand,
            "product_image": product.image_url,
            "product_quantity": item.quantity
        })

    return cart_items


@router.post("/add-item/{product_id}")
# def add_cart_item(user_id: int, product_id: int, quantity: int = 1, db: Session = Depends(get_db)):
def add_cart_item(item: Item, product_id: int, db: Session = Depends(get_db)):
    user_id = item.user_id
    quantity = item.quantity
    # Check if the user exists
    user = db.query(Users).filter_by(id=user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    # Check if the product exists
    product = db.query(Products).filter_by(id=product_id).first()
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")

    # Create a new cart for the user if they don't have one
    if user.cart is None:
        user.cart = Cart(user_id=user_id)
        db.add(user.cart)
        db.commit()
        db.refresh(user.cart)

    # Add the product to the user's cart
    cart_item = CartItem(cart_id=user.cart.id, product_id=product_id, quantity=quantity)
    db.add(cart_item)
    db.commit()

    return {"message": "Product added to cart successfully"}

@router.put("/update/{product_id}")
# def update_cart_item(cart_item_id, product_id: int, quantity: int, db: Session = Depends(get_db)):
def update_cart_item(item: UpdateItem, product_id: int, db: Session = Depends(get_db)):
    print('in the update cart api route~~~')
    cart_item_id = item.cart_item_id
    quantity = item.quantity
    
    cart_item = db.query(CartItem).filter_by(id=cart_item_id).first()
    if cart_item is None:
        raise HTTPException(status_code=404, detail="Cart item not found")
    print("cart_item in the update cart api ")
    
    cart_item.quantity = quantity
    db.commit()

    return {"message": "Product updated successfully"}

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

# @router.put("/update/{cart_item_id}")
# def update_cart_item(cart_item_id: int, db: Session = Depends(get_db)):
#     cart_item = db.query(CartItem).filter_by(id=cart_item_id).first()

#     # Check if the cart item exists
#     if cart_item is None:
#         raise HTTPException(status_code=404, detail="Cart item not found")
