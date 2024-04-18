from fastapi import FastAPI, status, Depends, HTTPException 
from fastapi.middleware.cors import CORSMiddleware
import models
from database import engine, SessionLocal
from typing import Annotated, Optional
from sqlalchemy.orm import Session
import auth
from auth import get_current_user

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(auth.router)

models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]
# in SWAGGER UI, if we try to use any of the API, there will be a 'Authentication Fail' if we don't authorize the account
# Visual: there's a lock next to the API, which means, user has to be authenticated to be able to use the API

@app.get('/', status_code=status.HTTP_200_OK)
async def user(user: user_dependency, db: db_dependency):
    
    if user is None:
        raise HTTPException(status_code=404, detail="Authentication Failed")
    return {"User": user}
