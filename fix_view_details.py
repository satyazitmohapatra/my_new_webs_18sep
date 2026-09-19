with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'href={`/projects/${currentProject.id}`}',
    'href={`/${currentProject.id}`}'
)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
