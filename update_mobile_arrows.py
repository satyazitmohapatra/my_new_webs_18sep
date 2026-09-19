import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_thumbnail_regex = r'                  \{/\* Thumbnail Image Section \*/\}.*?                  \{/\* Stack \*/\}'

new_thumbnail = '''                  {/* Thumbnail Image Section */}
                  {currentProject.image && (
                    <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8">
                      
                      {/* Desktop Left/Prev Arrow */}
                      <button
                        onClick={() => setCurrentProjectIdx((p) => Math.max(0, p - 1))}
                        disabled={currentProjectIdx === 0}
                        className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center bg-background border border-foreground/10 text-muted-foreground hover:text-accent-fg hover:bg-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 rounded-full shadow-sm"
                        aria-label="Previous project"
                      >
                        <ArrowLeft size={16} />
                      </button>

                      {/* Thumbnail Image */}
                      <div className="relative w-full md:flex-1 aspect-[2/1] border border-foreground/20 overflow-hidden group rounded-sm shadow-sm">
                        <Image 
                          src={currentProject.image} 
                          alt={currentProject.title} 
                          fill 
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" 
                        />
                      </div>

                      {/* Desktop Right/Next Arrow */}
                      <button
                        onClick={() => setCurrentProjectIdx((p) => Math.min(projects.length - 1, p + 1))}
                        disabled={currentProjectIdx === projects.length - 1}
                        className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center bg-background border border-foreground/10 text-muted-foreground hover:text-accent-fg hover:bg-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 rounded-full shadow-sm"
                        aria-label="Next project"
                      >
                        <ArrowRight size={16} />
                      </button>

                      {/* Mobile Arrows (Bottom) */}
                      <div className="flex md:hidden items-center justify-center gap-6 w-full mt-2">
                        <button
                          onClick={() => setCurrentProjectIdx((p) => Math.max(0, p - 1))}
                          disabled={currentProjectIdx === 0}
                          className="shrink-0 w-10 h-10 flex items-center justify-center bg-background border border-foreground/10 text-muted-foreground hover:text-accent-fg hover:bg-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 rounded-full shadow-sm"
                          aria-label="Previous project"
                        >
                          <ArrowLeft size={16} />
                        </button>
                        
                        <button
                          onClick={() => setCurrentProjectIdx((p) => Math.min(projects.length - 1, p + 1))}
                          disabled={currentProjectIdx === projects.length - 1}
                          className="shrink-0 w-10 h-10 flex items-center justify-center bg-background border border-foreground/10 text-muted-foreground hover:text-accent-fg hover:bg-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 rounded-full shadow-sm"
                          aria-label="Next project"
                        >
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Stack */}'''

new_content = re.sub(old_thumbnail_regex, new_thumbnail, content, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated mobile arrows logic in page.tsx')
