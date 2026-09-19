import re

with open('data/projects.ts', 'r') as f:
    content = f.read()

# Add image?: string; to Project type
content = content.replace('demo?: string;\n};', 'demo?: string;\n  image?: string;\n};')

# Add image fields to projects
images = {
    'PROJECT_001': '/projects/food_delivery.png',
    'PROJECT_002': '/projects/heart_disease.png',
    'PROJECT_003': '/projects/citizen_grievance.png',
    'PROJECT_004': '/projects/laptop_price.png',
    'PROJECT_005': '/projects/bangalore_real_estate.png',
    'PROJECT_006': '/projects/olympic_data.png',
}

for pid, img in images.items():
    content = re.sub(f'id: \"{pid}\",', f'id: \"{pid}\",\n    image: \"{img}\",', content)

with open('data/projects.ts', 'w') as f:
    f.write(content)

print('Updated projects.ts')
