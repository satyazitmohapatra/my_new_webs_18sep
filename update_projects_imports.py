import re

with open('data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace image?: string; with image?: any;
content = content.replace('image?: string;', 'image?: any;')

# Add imports at the top
imports = """import foodDeliveryImg from "@/public/projects/food_delivery.png";
import heartDiseaseImg from "@/public/projects/heart_disease.png";
import citizenGrievanceImg from "@/public/projects/citizen_grievance.png";
import laptopPriceImg from "@/public/projects/laptop_price.png";
import bangaloreRealEstateImg from "@/public/projects/bangalore_real_estate.png";
import olympicDataImg from "@/public/projects/olympic_data.png";

"""

content = imports + content

# Replace string paths with imported variables
content = content.replace('image: "/projects/food_delivery.png"', 'image: foodDeliveryImg')
content = content.replace('image: "/projects/heart_disease.png"', 'image: heartDiseaseImg')
content = content.replace('image: "/projects/citizen_grievance.png"', 'image: citizenGrievanceImg')
content = content.replace('image: "/projects/laptop_price.png"', 'image: laptopPriceImg')
content = content.replace('image: "/projects/bangalore_real_estate.png"', 'image: bangaloreRealEstateImg')
content = content.replace('image: "/projects/olympic_data.png"', 'image: olympicDataImg')

with open('data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated projects.ts with imports')
