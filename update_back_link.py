with open('app/[id]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'href="/projects"',
    'href="/"'
)

with open('app/[id]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated back link in project details')
