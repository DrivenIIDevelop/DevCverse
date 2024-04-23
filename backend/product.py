from dotenv import load_dotenv
load_dotenv()

from fastapi import UploadFile, File, APIRouter
import boto3
import os

ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")

router = APIRouter(
    prefix="/product",
    tags=["product"]
)

# will need to set to renai-prod later
S3_BUCKET = 'renai-dev'
s3 = boto3.client('s3', 
                    aws_access_key_id = ACCESS_KEY_ID,
                    aws_secret_access_key= SECRET_ACCESS_KEY,
                    )

@router.post("/upload")
async def upload(file: UploadFile = File(...)):
    if file:
        print(file.filename)
        s3.upload_fileobj(file.file, S3_BUCKET, file.filename)
        return "file uploaded successfully"
    else:
        return "Error uploading file"
    
# in product.py file later
# @app.get("/getAllImages")