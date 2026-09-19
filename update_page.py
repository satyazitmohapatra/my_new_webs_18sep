import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Thumbnail Image section
new_thumbnail = '''                  {/* Thumbnail Image */}
                  {currentProject.image && (
                    <div className="relative w-full aspect-[2/1] mb-8 border border-foreground/20 overflow-hidden group rounded-sm">
                      <Image 
                        src={currentProject.image} 
                        alt={currentProject.title} 
                        fill 
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" 
                      />
                      
                      {/* Left/Prev Arrow */}
                      <button
                        onClick={() => setCurrentProjectIdx((p) => Math.max(0, p - 1))}
                        disabled={currentProjectIdx === 0}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background/80 backdrop-blur-md border border-foreground/10 text-foreground hover:bg-accent hover:text-accent-fg disabled:opacity-0 transition-all duration-300 rounded-full shadow-lg z-10"
                        aria-label="Previous project"
                      >
                        <ArrowLeft size={18} />
                      </button>

                      {/* Right/Next Arrow */}
                      <button
                        onClick={() => setCurrentProjectIdx((p) => Math.min(projects.length - 1, p + 1))}
                        disabled={currentProjectIdx === projects.length - 1}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background/80 backdrop-blur-md border border-foreground/10 text-foreground hover:bg-accent hover:text-accent-fg disabled:opacity-0 transition-all duration-300 rounded-full shadow-lg z-10"
                        aria-label="Next project"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  )}'''

content = re.sub(
    r'                  \{/\* Thumbnail Image \*/\}.*?                  \{/\* Stack \*/\}',
    new_thumbnail + '\n\n                  {/* Stack */}',
    content,
    flags=re.DOTALL
)

# Remove Carousel Controls from bottom
content = re.sub(
    r'              \{/\* Carousel Controls \*/\}.*?</button>\s*</div>',
    '',
    content,
    flags=re.DOTALL
)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated page.tsx')
