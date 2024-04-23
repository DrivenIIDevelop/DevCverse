from database import Base
from sqlalchemy import Column, Integer, String, Float, Enum, ForeignKey, Boolean
from sqlalchemy.orm import relationship
import enum

class SkinType(enum.Enum):
    OILY= "oily"
    DRY = "dry"
    NORMAL = "normal"
    COMBINATION = "combination"
    SENSITIVE = "sensitive"
    UNCERTAIN = "uncertain"
    MATURE = "mature"
    ACNE = "acne"

class AgeRange(enum.Enum):
    BELOW_18 = "Below 18"
    BETWEEN_18_AND_25 = "18-25"
    BETWEEN_26_AND_35 = "26-35"
    BETWEEN_36_AND_50 = "36-50"
    ABOVE_50 = "Above 50"

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    username = Column(String, unique=True)
    hashed_password = Column(String)
    role = Column(String, default="admin")
    age = Column(Enum(AgeRange), nullable=False)
    skin_type = Column(Enum(SkinType), nullable=False)
    survey_completed = Column(Boolean, default=False)
    cart = relationship("Cart", uselist=False, back_populates="user")


class Products(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    description = Column(String, nullable=False)
    skin_type = Column(String, nullable=False)
    brand=Column(String, nullable=False)
    image_url = Column(String, nullable=False)

class Cart(Base):
    __tablename__ = "carts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))

    user = relationship("Users", back_populates="cart")
    items = relationship("CartItem", back_populates="cart")

class CartItem(Base):
    __tablename__ = "cart_items"

    id = Column(Integer, primary_key=True, index=True)
    cart_id = Column(Integer, ForeignKey('carts.id'))
    product_id = Column(Integer, ForeignKey('products.id'))

    cart = relationship("Cart", back_populates="items")
    product = relationship("Products")

