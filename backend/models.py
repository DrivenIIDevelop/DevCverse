from database import Base
from sqlalchemy import Column, Integer, String

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True)
    hashed_password = Column(String)
    role = Column(String, default="admin")
    age = Column(Integer, nullable=False)
    skin_type= Column(String, nullable=False)


class Products(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String, nullable=False)
    price = Column(Integer, nullable=False)
    description = Column(String, nullable=False)
    skin_type = Column(String, nullable=False)
    brand=Column(String, nullable=False)
    # do image later