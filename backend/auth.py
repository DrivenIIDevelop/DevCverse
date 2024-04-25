from dotenv import load_dotenv
load_dotenv()

from datetime import timedelta, datetime, timezone
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, Form
from pydantic import BaseModel
from sqlalchemy.orm import Session
from starlette import status
from database import SessionLocal
from models import Users, SkinType, AgeRange
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import os 
from password_utils import hash_password, verify_password
from pydantic import EmailStr


SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

router = APIRouter(
    prefix="/auth",
    tags=["auth"]
)

# password hashing and unhashing
# bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_bearer = OAuth2PasswordBearer(tokenUrl="/auth/token")

# validate new users before submitting to database
class CreateUserRequest(BaseModel):
    username: EmailStr
    password: str
    # role: str
    first_name: str
    last_name: str
    age: AgeRange
    skin_type: SkinType
    # is_survey_complete: bool = False

class Token(BaseModel):
    access_token: str
    token_type: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_user(db: db_dependency, create_user_request: CreateUserRequest):
    create_user_model = Users(
        username=create_user_request.username, 
        hashed_password=hash_password(create_user_request.password),
        # role=create_user_request.role,
        first_name=create_user_request.first_name,
        last_name=create_user_request.last_name,
        age=create_user_request.age,
        skin_type=create_user_request.skin_type,
        # is_survey_complete=create_user_request.is_survey_complete
    )

    db.add(create_user_model)
    db.commit()

@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends(OAuth2PasswordRequestForm)], 
                                 db: db_dependency):
    user = authenticate_user(form_data.username, form_data.password, db)
    print("hit in login_for access_ token")
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    token = create_access_token(user.username, user.id, timedelta(minutes=20))

    return {'access_token': token, 'token_type': 'bearer'}
    
   

def authenticate_user(username: str, password: str, db: Session):
    user = db.query(Users).filter(Users.username == username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    if not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Incorrect password")
    return user

def create_access_token(username: str, user_id: int, expires_delta: timedelta):
    encode = { "sub": username, "id": user_id }
    expires = datetime.now(timezone.utc) + expires_delta
    encode.update({"exp": expires})
    encoded_jwt = jwt.encode(encode, SECRET_KEY, ALGORITHM)
    return encoded_jwt


async def get_current_user(token: Annotated[str, Depends(oauth2_bearer)], db: db_dependency):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        # username: str = payload.get('sub')
        user_id: int = payload.get('id')

        # if username is None or user_id is None:
        #     raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
        
        user = db.query(Users).filter(Users.id == user_id).first()
        
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        return {
            'id': user_id,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'skin_type': user.skin_type,
            'role': user.role,
            'is_survey_complete': user.is_survey_complete,
            'cart': user.cart
            }
    
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Could not validate user.')
