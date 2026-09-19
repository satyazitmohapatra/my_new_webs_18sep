with open('components/SystemArchitecture.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'className="relative w-full aspect-square sm:aspect-[1000/600] max-w-[1100px] mx-auto z-10"',
    'className="relative w-full aspect-[1000/600] max-w-[1100px] mx-auto z-10"'
)

with open('components/SystemArchitecture.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
