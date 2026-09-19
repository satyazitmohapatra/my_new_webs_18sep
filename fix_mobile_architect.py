import re

with open('components/SystemArchitecture.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make the desktop layout visible on all screens by removing 'hidden md:block'
content = content.replace(
    'className="relative w-full aspect-[1000/600] hidden md:block max-w-[1100px] mx-auto z-10"',
    'className="relative w-full aspect-square sm:aspect-[1000/600] max-w-[1100px] mx-auto z-10"'
)

# Text scaling adjustments
content = content.replace('text-[9px]', 'text-[7px] sm:text-[8px] md:text-[9px]')
content = content.replace('text-xs md:text-[11px] lg:text-xs', 'text-[8px] sm:text-[10px] md:text-xs')
content = content.replace('text-[8px] text-muted-foreground', 'text-[5px] sm:text-[7px] md:text-[8px] text-muted-foreground')
content = content.replace('text-[10px] lg:text-xs', 'text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs')
content = content.replace('text-[7px] lg:text-[8px]', 'text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px]')

# Make padding smaller on mobile
content = content.replace('p-4 flex flex-col', 'p-2 sm:p-3 md:p-4 flex flex-col')

# Remove the Mobile Layout block
content = re.sub(
    r'      \{/\* MOBILE LAYOUT \(Flex Column\) \*/\}.*?      </div>',
    '',
    content,
    flags=re.DOTALL
)

with open('components/SystemArchitecture.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated SystemArchitecture.tsx for mobile architect scaling')
