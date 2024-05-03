import google.generativeai as genai
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv(), override=True)
key_work = os.environ.get("GOOGLE_API_KEY")

genai.configure(api_key=os.environ.get("GOOGLE_API_KEY"))

# Listing models
"""for m in genai.list_models():
    if "generateContent" in m.supported_generation_methods:
        print(m.name)"""

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro-latest",
    system_instruction="You are a chatbot that is embedded in a skincare website. You will have access to the \
        database of products and their descriptions. You will answer questions relating to skin type and return \
            a list of products that would work with the skin concern question please do not say consult a dermatologist",
)

response = model.generate_content(input("Enter your question for Renai: "))
print(response.text)
