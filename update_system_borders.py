import re

with open('components/SystemArchitecture.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make NodeCard borders thicker and clearer
content = content.replace(
    "className={`w-full h-full border ${isActive(n.id) ? 'border-accent bg-muted/50' : 'border-border bg-background'} p-4 flex flex-col transition-all duration-500 cursor-default shadow-sm hover:shadow-md`}",
    "className={`w-full h-full border-2 ${isActive(n.id) ? 'border-accent bg-muted/50' : 'border-foreground/20 bg-background'} p-4 flex flex-col transition-all duration-500 cursor-default shadow-sm hover:shadow-md`}"
)

# Core Card borders
content = content.replace(
    "className={`w-full h-full border ${hovered === 'core' ? 'border-accent bg-muted/50' : 'border-border bg-background'} flex flex-col items-center justify-center transition-all duration-700 cursor-default shadow-sm`}",
    "className={`w-full h-full border-2 ${hovered === 'core' ? 'border-accent bg-muted/50' : 'border-foreground/20 bg-background'} flex flex-col items-center justify-center transition-all duration-700 cursor-default shadow-md`}"
)

# Grid visibility
content = content.replace(
    '<svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">',
    '<svg className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" xmlns="http://www.w3.org/2000/svg">'
)
content = content.replace(
    '<path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" className="text-border" strokeWidth="0.5" />',
    '<path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" className="text-foreground/10" strokeWidth="1" />'
)

# Trace lines visibility
content = content.replace(
    'strokeWidth="1.5"',
    'strokeWidth="2"'
)
content = content.replace(
    "className={`transition-colors duration-700 ${isActive(n.id) ? 'text-accent' : 'text-border'}`}",
    "className={`transition-colors duration-700 ${isActive(n.id) ? 'text-accent' : 'text-foreground/20'}`}"
)

# Mobile lines and core border
content = content.replace('bg-border', 'bg-foreground/20 w-[2px]')
content = content.replace(
    'className="w-full h-32 border border-accent bg-muted/50 flex flex-col items-center justify-center shadow-sm"',
    'className="w-full h-32 border-2 border-accent bg-muted/50 flex flex-col items-center justify-center shadow-md"'
)

with open('components/SystemArchitecture.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated SystemArchitecture.tsx")
