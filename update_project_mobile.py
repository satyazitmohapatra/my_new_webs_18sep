import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Card Padding
content = content.replace(
    'className="border border-foreground/10 p-8 md:p-12"',
    'className="border border-foreground/10 p-4 sm:p-6 md:p-12"'
)

# 2. Header Row
content = content.replace(
    'className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"',
    'className="hidden md:flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"'
)

# 3. Title
content = content.replace(
    'className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4"',
    'className="hidden md:block text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4"'
)

# 4. Description
content = content.replace(
    'className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-8"',
    'className="hidden md:block text-muted-foreground text-sm leading-relaxed max-w-2xl mb-8"'
)

# 5. Stack
content = content.replace(
    'className="flex flex-wrap gap-2 mb-8"',
    'className="hidden md:flex flex-wrap gap-2 mb-8"'
)

# 6. Architecture (if exists)
content = content.replace(
    'className="border-t border-foreground/5 pt-6 mb-6"',
    'className="hidden md:block border-t border-foreground/5 pt-6 mb-6"'
)

# 7. Mobile Arrows (Bottom of Card)
content = content.replace(
    'className="flex md:hidden items-center justify-center gap-4 mt-8 pt-4 border-t border-foreground/5"',
    'className="flex md:hidden items-center justify-center gap-4 mt-4 pt-4 border-t border-foreground/5"'
)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx: Hiding text elements on mobile to emphasize thumbnail.")
