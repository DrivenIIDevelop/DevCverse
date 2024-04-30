from database import SessionLocal, Base
from models import Products

# SEED_DATA = [

#     Products(name="Sebium Foaming Gel", price=21.99, size="16.9", description="Gentle, purifying cleanser that visibly reduces excess shine.", skin_type="combination", brand="Bioderma", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Bioderma+-+Sebium+Foaming+Gel1.png"),
#     Products(name="XeraCalm A.D Lipid-Replenishing Cleansing Oil", price=34.00, size="13.5", description="Gentle face, body and scalp cleansing oil helps balance the skin's microbiome while restoring the skin barrier. Soothes and hydrates dry, itchy skin and protects against the drying effects of water. Can be used during flare-ups.", skin_type="dry", brand="Avene", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Avene+-+XeraCalm+A.png"),
#     Products(name="Low pH Good Morning Gel", price=9.00, size="5.07", description="Start the day right by treating your skin to a mild and gentle cleanser with a low pH that effectively removes excess oil and dead skin. Formulated with tea tree oil and natural BHA to refine skin texture, the Good Morning Gel Cleanser's pH level is the closest to your skin's natural pH levels and leaves skin soft, moist and refreshed without stripping it of its natural oils", skin_type="sensitive", brand="COSRX", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/COSRX+-+Low+pH+Good+Morning+Gel1.png"),
#     Products(name="Matcha Hydrating Foam Cleanser", price=8.00,  description="Restore skin’s water-oil balance with this foam cleanser, which contains extracts from green tea and centella to soothe and purify skin. Hyaluronic acid, ceramide and glycerin in ingredients also provide extra moisturizing power.", size="4.05", skin_type="sensitive", brand="B.LAB", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/B.LAB+-+Matcha+Hydrating+Foam+Cleanser+1.png"),
#     Products(name="Madagascar Centella Light Cleansing", price=8.00, description="Lightweight, multifunctional cleanser thoroughly removes makeup and impurities from skin while offering some extra nourishment. Coconut-derived MCT oil combined with cica extract as well as six kinds of botanical oils deliver a refreshing, skin-soothing and pore-tightening finish.", size="4.05", skin_type="dry", brand="SKIN 1004", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/SKIN+1004+-+Madagascar+Centella+Light+Cleansing1.png"),
#     Products(name="Niacinamide 10% + zinc1%", price=6.00, description="a universal serum for blemish-prone skin that smooths, brightens, and supports.", size="30", skin_type="all_skin_type", brand="Ordinary", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/The+Ordinary-+Niacinamide+10%25+%2B+Zinc+1%25+1.png"),
#     Products(name="Bean Essence", price=31.50, description="The Mixsoon Bean Essence combines the power of nature's fermentation with a unique blend of natural extracts. Distinguished by its thicker texture, this essence offers a multi-faceted experience that goes beyond traditional skincare, focusing on moisturizing, exfoliating, and texture-enhancing.", size="50", skin_type="all_skin_types", brand="Mixsoon", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/mixsoon-+Bean+Essence+1.png"),
#     Products(name="Advanced snail 96 mucin power essence", price=12.59, description="light-weight essence which absorbs into the skin fast to give skin a natural glow from the inside. this essence is created from nutritious, low-stimulation filtered snail mucin to keep your skin moisturized and illuminated all day", size="100", skin_type="all_skin_type", brand="COSRX", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/COSRX-+Advanced+Snail+96+Mucin+Power+Essence+1.png"),
#     Products(name="Madagascar centella asiatica 100 amploule", price=15.00, description="a soothing ampoule that helps calm and restore imbalance in the skin caused by harsh environments.", size="10", skin_type="all_skin_type", brand="Skin 1004", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/SKIN+1004-+Madagascar+Centella+Asiatica+Ampoule+1.png"),
#     Products(name="niacinamide 10% + txa `4%` dark spot correcting serum", price=20.0, description="a dark spot correcting serum fades dark spots and post-acne scars.", size="30", skin_type="all_skin_type", brand="Anua", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Anua-+Niacinamide+10%25+%2B+TXA+4%25+Dark+Spot+Correcting+Serum+1.png"),
#     Products(name="Hydrabio Cream", price=29.99, description="Velvety, rich face cream that provides skin with deep hydration and visible radiance.", size="1.69", skin_type="dry_skin", brand="Bioderma", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Bioderma+-+Hydrabio+Cream1.png"),
#     Products(name="Hydrance LIGHT Hydrating Emulsion", price=40.00, description="Lightweight moisturizer provides long-lasting hydration and helps prevent water from evaporating from the skin. Smoothness and luminosity are restored and fine dehydration lines are minimized.", size="1.3", skin_type="sensitive", brand="Avene", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Avene+-+Hydrance+LIGHT+Hydrating+Emulsion1.png"),
#     Products(name="Advanced Snail 92 All in One Cream", price=16.19, description="Lightweight cream is enriched with 92% snail secretion filtrate that drenches skin with needed moisture, helping to repair skin damage and promote healing, but without feeling sticky. Increased moisture diminishes fine lines and wrinkles, leading to a healthier, younger look. Use at the last step of skin care regimen.", size="3.57", skin_type="sensitive", brand="COSRX", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/COSRX+-+Advanced+Snail+92+All+in+One+Cream1.png"),
#     Products(name="Soon Jung 2x Barrient Intensive Cream", price=14.21, description="Formulated with panthenol, madecassoside and sunflower seed oil, this intensely hydrating cream moisturizes and restores the oil and water balance of skin while repairing damage. Low pH formulation and absence of irritants like fragrance, artificial colors and parabens help pamper and nourish skin to strengthen it against damage and stress.", size="2.02", skin_type="sensitive", brand="ETUDE", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/ETUDE+-+Soon+Jung+2x+Barrient+Intensive+Cream1.png"),
#     Products(name="Deep Sea Pure Water Cream", price=14.25, description="As moisturizing and refreshing as the ocean, this brightening and anti-wrinkle cream is infused with natural ingredients such as deep sea water, caulerpa lentillifera, laminaria japonica and glasswort extracts. Its hypoallergenic formula is also non-sticky and absorbs quickly into skin. Suitable for all skin types", size="1.01", skin_type="sensitive", brand="Purito SEOUL", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Purito+SEOUL+-+Deep+Sea+Pure+Water+Cream1.png"),
#     Products(name="Relief sun : rice + probiotics", price=18.00, description="Relief Sun is a lightweight and creamy type organic sunscreen that's comfortable on skin. Even if you apply a large amount several times, it is not sticky and gives a moist finish like that of a light moisturizing cream. Containing 30% rice extract and grain fermented extracts, it provides moisture and nourishment to the skin.", size="50", skin_type="all_skin_type", brand="Beauty of Joseon", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Beauty+of+Joseon+-+Relief+Sun1.png"),
#     Products(name="hyalu-Cica moisture cream", price=17.85, description="A soothing cream that provides powerful hydration that lasts, moisturizing dry skin from deep within and providing layers of hydration to the skin.", size="50", skin_type="all_skin_type", brand="Skin 1004", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/SKIN1004+Madagascar+Centella+Hyalu-Cica+Water-Fit+Sun3.png"),
#     Products(name="Birch moisturizing sunscreen SPF50+, PA++++", price=28.00, description="A moisturizing sunscreen protects your skin from harmful UV and replenishes and hydrates your skin. Protects skin from harmful UV rays (UVA, UVB, Bluelight) with SPF50+, PA++++", size="50", skin_type="all_skin_type", brand="Brand 2", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Round+Lab+-+Birch+Moisturizing+Sunscreen2.png"),
#     Products(name="Aloe soothing sun cream SPF50+/PA+++", price=16.00, description="Formulated with Aloe Arborescens Leaf Extract, the daily soothing sunblock is so lightweight that is feels like a moisturizer, and it does not leave any white cast. Designed to be travel friendly, you can easily carry COSRX Aloe Soothing Sun Cream anywhere and layer on sun protection anytime.", size="50", skin_type="all_skin_type", brand="COSRX", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/COSRX+-+Aloe+Soothing+Sun+Cream1.png"),
#     Products(name="Heartleaf silky moisture sun cream", price=14.33, description="Anua Heartleaf Silky Moisture Sunscreen is a creamy sunscreen that also provides antioxidant-rich skin protection, plus soothing relief, without white cast. Great for all skin types and skin tones. Vegan & Cruelty-free.", size="50", skin_type="all_skin_type", brand="Anua", image_url="https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Anua+-+Heartleaf+Silky+Moisture+Sun+Cream2.png")
# ]

INITIAL_DATA = {
    "products" : [
        {
            "name": "Sebium Foaming Gel", 
            "price":21.99, "size": "16.9", 
            "description": "Gentle, purifying cleanser that visibly reduces excess shine.", 
            "skin_type":"combination",
            "target": "reduces_irregularities", 
            "brand": "Bioderma", 
            "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Bioderma+-+Sebium+Foaming+Gel1.png"
        },
        {
            "name": "XeraCalm A.D Lipid-Replenishing Cleansing Oil", "target": "dry_skin", "price":34.00, "size": "13.5", "description": "Gentle face, body and scalp cleansing oil helps balance the skin's microbiome while restoring the skin barrier. Soothes and hydrates dry, itchy skin and protects against the drying effects of water. Can be used during flare-ups.", "skin_type":"dry", "brand": "Avene", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Avene+-+XeraCalm+A.png"
        },
        {
            "name": "Low pH Good Morning Gel", "target": "ph_balance", "price":9.00, "size": "5.07", "description": "Start the day right by treating your skin to a mild and gentle cleanser with a low pH that effectively removes excess oil and dead skin. Formulated with tea tree oil and natural BHA to refine skin texture, the Good Morning Gel Cleanser's pH level is the closest to your skin's natural pH levels and leaves skin soft, moist and refreshed without stripping it of its natural oils", "skin_type":"sensitive", "brand": "COSRX", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/COSRX+-+Low+pH+Good+Morning+Gel1.png"
        },

        {
            "name": "Matcha Hydrating Foam Cleanser", "target": "ph_balance", "price":8.00,  "description": "Restore skin’s water-oil balance with this foam cleanser, which contains extracts from green tea and centella to soothe and purify skin. Hyaluronic acid, ceramide and glycerin in ingredients also provide extra moisturizing power.", "size": "4.05", "skin_type":"sensitive", "brand": "B.LAB", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/B.LAB+-+Matcha+Hydrating+Foam+Cleanser+1.png"
        },

        {
            "name": "Madagascar Centella Light Cleansing", "target": "skin_irritation", "price":8.00, "description": "Lightweight, multifunctional cleanser thoroughly removes makeup and impurities from skin while offering some extra nourishment. Coconut-derived MCT oil combined with cica extract as well as six kinds of botanical oils deliver a refreshing, skin-soothing and pore-tightening finish.", "size": "4.05", "skin_type":"dry", "brand": "SKIN 1004", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/SKIN+1004+-+Madagascar+Centella+Light+Cleansing1.png"
        },

        {
            "name": "Niacinamide 10% + zinc1%", "target": "dullness", "price":6.00, "description": "a universal serum for blemish-prone skin that smooths, brightens, and supports.", "size": "30", "skin_type":"all_skin_type", "brand": "Ordinary", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/The+Ordinary-+Niacinamide+10%25+%2B+Zinc+1%25+1.png"
        },

        {
            "name": "Bean Essence", "price":31.50, "target": "dry_skin", "description": "The Mixsoon Bean Essence combines the power of nature's fermentation with a unique blend of natural extracts. Distinguished by its thicker texture, this essence offers a multi-faceted experience that goes beyond traditional skincare, focusing on moisturizing, exfoliating, and texture-enhancing.", "size": "50", "skin_type":"all_skin_types", "brand": "Mixsoon", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/mixsoon-+Bean+Essence+1.png"
        },

        {
            "name": "Advanced snail 96 mucin power essence", "target": "aging", "price":12.59, "description": "light-weight essence which absorbs into the skin fast to give skin a natural glow from the inside. this essence is created from nutritious, low-stimulation filtered snail mucin to keep your skin moisturized and illuminated all day", "size": "100", "skin_type":"all_skin_type", "brand": "COSRX", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/COSRX-+Advanced+Snail+96+Mucin+Power+Essence+1.png"
        },

        {
            "name": "Madagascar centella asiatica 100 amploule", "target": "moisture_balance", "price":15.00, "description": "a soothing ampoule that helps calm and restore imbalance in the skin caused by harsh environments.", "size": "10", "skin_type":"all_skin_type", "brand": "Skin 1004", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/SKIN+1004-+Madagascar+Centella+Asiatica+Ampoule+1.png"
        },

        {
            "name": "niacinamide 10% + txa `4%` dark spot correcting serum", "target": "hyperpigmentation", "price":20.0, "description": "a dark spot correcting serum fades dark spots and post-acne scars.", "size": "30", "skin_type":"all_skin_type", "brand": "Anua", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Anua-+Niacinamide+10%25+%2B+TXA+4%25+Dark+Spot+Correcting+Serum+1.png"
        },

        {
            "name": "Hydrabio Cream", "price":29.99, "target": "dry_skin", "description": "Velvety, rich face cream that provides skin with deep hydration and visible radiance.", "size": "1.69", "skin_type":"dry_skin", "brand": "Bioderma", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Bioderma+-+Hydrabio+Cream1.png"
        },

        {
            "name": "Hydrance LIGHT Hydrating Emulsion", "target": "dry_skin", "price":40.00, "description": "Lightweight moisturizer provides long-lasting hydration and helps prevent water from evaporating from the skin. Smoothness and luminosity are restored and fine dehydration lines are minimized.", "size": "1.3", "skin_type":"sensitive", "brand": "Avene", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Avene+-+Hydrance+LIGHT+Hydrating+Emulsion1.png"
        },

        {
            "name": "Advanced Snail 92 All in One Cream", "target": "dry_skin", "price":16.19, "description": "Lightweight cream is enriched with 92% snail secretion filtrate that drenches skin with needed moisture, helping to repair skin damage and promote healing, but without feeling sticky. Increased moisture diminishes fine lines and wrinkles, leading to a healthier, younger look. Use at the last step of skin care regimen.", "size": "3.57", "skin_type":"sensitive", "brand": "COSRX", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/COSRX+-+Advanced+Snail+92+All+in+One+Cream1.png"
        },

        {
            "name": "Soon Jung 2x Barrient Intensive Cream", "target": "ph_balance", "price":14.21, "description": "Formulated with panthenol, madecassoside and sunflower seed oil, this intensely hydrating cream moisturizes and restores the oil and water balance of skin while repairing damage. Low pH formulation and absence of irritants like fragrance, artificial colors and parabens help pamper and nourish skin to strengthen it against damage and stress.", "size": "2.02", "skin_type":"sensitive", "brand": "ETUDE", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/ETUDE+-+Soon+Jung+2x+Barrient+Intensive+Cream1.png"
        },

        {
            "name": "Deep Sea Pure Water Cream", "target": "ph_balance", "price":14.25, "description": "As moisturizing and refreshing as the ocean, this brightening and anti-wrinkle cream is infused with natural ingredients such as deep sea water, caulerpa lentillifera, laminaria japonica and glasswort extracts. Its hypoallergenic formula is also non-sticky and absorbs quickly into skin. Suitable for all skin types", "size": "1.01", "skin_type":"sensitive", "brand": "Purito SEOUL", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Purito+SEOUL+-+Deep+Sea+Pure+Water+Cream1.png"
        },

        {
            "name": "Relief sun : rice + probiotics", "target": "hydration", "price":18.00, "description": "Relief Sun is a lightweight and creamy type organic sunscreen that's comfortable on skin. Even if you apply a large amount several times, it is not sticky and gives a moist finish like that of a light moisturizing cream. Containing 30% rice extract and grain fermented extracts, it provides moisture and nourishment to the skin.", "size": "50", "skin_type":"all_skin_type", "brand": "Beauty of Joseon", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Beauty+of+Joseon+-+Relief+Sun1.png"
        },

        {
            "name": "hyalu-Cica moisture cream", "target": "hydration", "price":17.85, "description": "A soothing cream that provides powerful hydration that lasts, moisturizing dry skin from deep within and providing layers of hydration to the skin.", "size": "50", "skin_type":"all_skin_type", "brand": "Skin 1004", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/SKIN1004+Madagascar+Centella+Hyalu-Cica+Water-Fit+Sun3.png"
        },

        {
            "name": "Birch moisturizing sunscreen SPF50+, PA++++", "target": "hydration", "price":28.00, "description": "A moisturizing sunscreen protects your skin from harmful UV and replenishes and hydrates your skin. Protects skin from harmful UV rays (UVA, UVB, Bluelight) with SPF50+, PA++++", "size": "50", "skin_type":"all_skin_type", "brand": "Brand 2", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Round+Lab+-+Birch+Moisturizing+Sunscreen2.png"
        },

        {
            "name": "Aloe soothing sun cream SPF50+/PA+++", "target": "hydration", "price":16.00, "description": "Formulated with Aloe Arborescens Leaf Extract, the daily soothing sunblock is so lightweight that is feels like a moisturizer, and it does not leave any white cast. Designed to be travel friendly, you can easily carry COSRX Aloe Soothing Sun Cream anywhere and layer on sun protection anytime.", "size": "50", "skin_type":"all_skin_type", "brand": "COSRX", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/COSRX+-+Aloe+Soothing+Sun+Cream1.png"
        },

        {
            "name": "Heartleaf silky moisture sun cream", "target": "skin_irritation", "price":14.33, "description": "Anua Heartleaf Silky Moisture Sunscreen is a creamy sunscreen that also provides antioxidant-rich skin protection, plus soothing relief, without white cast. Great for all skin types and skin tones. Vegan & Cruelty-free.", "size": "50", "skin_type":"all_skin_type", "brand": "Anua", "image_url": "https://renai-dev.s3.us-east-2.amazonaws.com/SeedDataPhotos/Anua+-+Heartleaf+Silky+Moisture+Sun+Cream2.png"
        }

    ]
}



def seed_data():
    db = SessionLocal()

    if db.query(Products).count() == 0:
            # Sample data
        products_data = INITIAL_DATA["products"]
        
        # Insert seed data into the database
        for product_data in products_data:
            product = Products(
                name=product_data["name"],
                price=product_data["price"],
                target=product_data["target"],
                size=product_data["size"],
                description=product_data["description"],
                skin_type=product_data["skin_type"],
                brand=product_data["brand"],
                image_url=product_data["image_url"]
            )
            db.add(product)

        db.commit()
        db.close()

# Run the seeder
# seed_data()
# only run if products table is empty
if __name__ == "__main__":
    seed_data()