with open('components/SystemArchitecture.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

corrupted_chunk = """      </div>



        <div className="w-px h-6 bg-accent/50" />
        <div className="w-full h-24"><NodeCard n={nodes[3]} /></div>
        <div className="w-px h-6 bg-foreground/20 w-[2px]" />
        <div className="w-full h-24"><NodeCard n={nodes[4]} /></div>
        <div className="w-px h-6 bg-foreground/20 w-[2px]" />
        <div className="w-full h-24"><NodeCard n={nodes[5]} /></div>
        <div className="w-px h-6 bg-foreground/20 w-[2px]" />
        <div className="w-full h-24"><NodeCard n={nodes[2]} /></div>
      </div>"""

content = content.replace(corrupted_chunk, '      </div>')

with open('components/SystemArchitecture.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
