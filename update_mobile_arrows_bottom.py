import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the Mobile Arrows block from below the thumbnail
content = re.sub(
    r'                      \{/\* Mobile Arrows \(Bottom\) \*/\}.*?                      </div>\n',
    '',
    content,
    flags=re.DOTALL
)

# 2. Add the Carousel Controls at the bottom of the card (after the Links div), visible only on mobile
mobile_carousel_controls = '''                    </div>

                    {/* Mobile Carousel Controls (Bottom of Card) */}
                    <div className="flex md:hidden items-center justify-center gap-4 mt-8 pt-4 border-t border-foreground/5">
                      <button
                        onClick={() => setCurrentProjectIdx((p) => Math.max(0, p - 1))}
                        disabled={currentProjectIdx === 0}
                        className="w-10 h-10 flex items-center justify-center bg-accent text-accent-fg hover:bg-accent/90 disabled:bg-foreground/5 disabled:text-foreground/20 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                        aria-label="Previous project"
                      >
                        <ArrowLeft size={16} />
                      </button>
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground tabular-nums">
                        {String(currentProjectIdx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                      </span>
                      <button
                        onClick={() => setCurrentProjectIdx((p) => Math.min(projects.length - 1, p + 1))}
                        disabled={currentProjectIdx === projects.length - 1}
                        className="w-10 h-10 flex items-center justify-center bg-accent text-accent-fg hover:bg-accent/90 disabled:bg-foreground/5 disabled:text-foreground/20 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                        aria-label="Next project"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>'''

# Find the closing tag of the Links section and insert the mobile controls
content = re.sub(
    r'                    </div>\n                  </div>\n                </motion\.div>',
    mobile_carousel_controls + '\n                  </div>\n                </motion.div>',
    content
)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx: removed arrows below thumbnail, added to bottom of card on mobile.")
