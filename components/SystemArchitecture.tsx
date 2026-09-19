"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function SystemArchitecture() {
  const [hovered, setHovered] = useState<string | null>(null);

  const isActive = (id: string) => hovered === id || hovered === "core";

  const nodes = [
    {
      id: 'frontend', num: '01', title: 'FRONTEND', tech: ['React', 'Next.js', 'Tailwind'],
      x: 60, y: 80, w: 180, h: 90,
      path: 'M 400 270 L 300 270 Q 290 270 290 260 L 290 135 Q 290 125 280 125 L 240 125',
      animPath: 'M 240 125 L 280 125 Q 290 125 290 135 L 290 260 Q 290 270 300 270 L 400 270',
      delay: "0s"
    },
    {
      id: 'api', num: '02', title: 'API / SERVICES', tech: ['FastAPI', 'REST', 'Flask'],
      x: 60, y: 255, w: 180, h: 90,
      path: 'M 400 300 L 240 300',
      animPath: 'M 240 300 L 400 300',
      delay: "1.5s"
    },
    {
      id: 'cicd', num: '03', title: 'CI/CD PIPELINE', tech: ['GitHub Actions', 'Docker'],
      x: 60, y: 430, w: 180, h: 90,
      path: 'M 400 330 L 300 330 Q 290 330 290 340 L 290 465 Q 290 475 280 475 L 240 475',
      animPath: 'M 240 475 L 280 475 Q 290 475 290 465 L 290 340 Q 290 330 300 330 L 400 330',
      delay: "0.5s"
    },
    {
      id: 'ai', num: '04', title: 'AI ENGINE', tech: ['Python', 'Models', 'Inference'],
      x: 760, y: 80, w: 180, h: 90,
      path: 'M 600 270 L 700 270 Q 710 270 710 260 L 710 135 Q 710 125 720 125 L 760 125',
      animPath: 'M 600 270 L 700 270 Q 710 270 710 260 L 710 135 Q 710 125 720 125 L 760 125',
      delay: "1s"
    },
    {
      id: 'db', num: '05', title: 'DATABASE', tech: ['PostgreSQL', 'MySQL'],
      x: 760, y: 255, w: 180, h: 90,
      path: 'M 600 300 L 760 300',
      animPath: 'M 600 300 L 760 300',
      delay: "2.5s"
    },
    {
      id: 'cloud', num: '06', title: 'CLOUD / INFRA', tech: ['Azure', 'Containers', 'K8s'],
      x: 760, y: 430, w: 180, h: 90,
      path: 'M 600 330 L 700 330 Q 710 330 710 340 L 710 465 Q 710 475 720 475 L 760 475',
      animPath: 'M 600 330 L 700 330 Q 710 330 710 340 L 710 465 Q 710 475 720 475 L 760 475',
      delay: "2s"
    }
  ];

  const NodeCard = ({ n }: { n: typeof nodes[0] }) => (
    <div
      className={`w-full h-full border ${isActive(n.id) ? 'border-[#0B1F3A] bg-[#0A0A0A]' : 'border-foreground/10 bg-[#050505]'} p-4 flex flex-col transition-all duration-500 cursor-default shadow-sm hover:shadow-md`}
      onMouseEnter={() => setHovered(n.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-[9px] text-muted-foreground">{n.num}</span>
        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isActive(n.id) ? 'bg-[#0B1F3A]' : 'bg-foreground/20'}`} />
      </div>
      <div className="flex-grow">
        <h3 className="font-mono text-xs md:text-[11px] lg:text-xs font-bold text-foreground uppercase tracking-widest">{n.title}</h3>
      </div>
      <div className={`mt-auto flex flex-wrap gap-1 transition-opacity duration-300 ${isActive(n.id) ? 'opacity-100' : 'opacity-0'}`}>
        {n.tech.map(t => (
          <span key={t} className="font-mono text-[8px] text-muted-foreground border border-foreground/10 px-1 py-0.5 uppercase whitespace-nowrap bg-background">
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full relative bg-[#050505] overflow-hidden py-12 md:py-24 border-t border-foreground/5 font-sans">
      
      {/* Background Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sys-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#1F1F1F" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sys-grid)" />
      </svg>

      {/* DESKTOP LAYOUT (SVG + Absolute HTML Overlays) */}
      <div className="relative w-full aspect-[1000/600] hidden md:block max-w-[1100px] mx-auto z-10">
        <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
          {nodes.map(n => (
            <g key={`path-${n.id}`}>
              {/* Static trace */}
              <path 
                d={n.path} 
                fill="none" 
                stroke={isActive(n.id) ? "#0B1F3A" : "#1F1F1F"} 
                strokeWidth="1.5" 
                strokeLinecap="square" 
                strokeLinejoin="miter" 
                className="transition-colors duration-700" 
              />
              {/* Animated particle */}
              <circle r="2" fill="#0B1F3A" className={`transition-opacity duration-700 ${isActive(n.id) ? 'opacity-100' : 'opacity-30'} hidden sm:block`}>
                <animateMotion dur="3s" repeatCount="indefinite" path={n.animPath} begin={n.delay} calcMode="linear" />
              </circle>
            </g>
          ))}
        </svg>

        {/* Floating HTML Nodes */}
        {nodes.map(n => (
          <div
            key={`node-${n.id}`}
            className="absolute pointer-events-auto"
            style={{ 
              left: `${(n.x / 1000) * 100}%`, 
              top: `${(n.y / 600) * 100}%`, 
              width: `${(n.w / 1000) * 100}%`, 
              height: `${(n.h / 600) * 100}%` 
            }}
          >
            <NodeCard n={n} />
          </div>
        ))}

        {/* SYSTEM CORE (Center) */}
        <div
          className="absolute pointer-events-auto"
          style={{ left: '40%', top: '40%', width: '20%', height: '20%' }}
          onMouseEnter={() => setHovered('core')}
          onMouseLeave={() => setHovered(null)}
        >
          <div className={`w-full h-full border ${hovered === 'core' ? 'border-[#0B1F3A] bg-[#0A0A0A] shadow-[0_0_20px_rgba(11,31,58,0.15)]' : 'border-foreground/20 bg-[#050505]'} flex flex-col items-center justify-center transition-all duration-700 cursor-default`}>
            <div className={`w-2 h-2 rounded-sm mb-3 transition-colors duration-700 ${hovered === 'core' ? 'bg-[#0B1F3A] shadow-[0_0_8px_#0B1F3A]' : 'bg-foreground/20'}`} />
            <span className="font-mono text-[10px] lg:text-xs font-bold tracking-[0.2em] text-foreground">SYSTEM CORE</span>
            <span className="font-mono text-[7px] lg:text-[8px] tracking-widest text-muted-foreground mt-1.5 uppercase">ENGINEERING ENGINE</span>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT (Flex Column) */}
      <div className="flex md:hidden flex-col items-center gap-2 px-6 relative z-10 w-full max-w-sm mx-auto">
        <div className="w-full h-24"><NodeCard n={nodes[0]} /></div>
        <div className="w-px h-6 bg-foreground/10" />
        <div className="w-full h-24"><NodeCard n={nodes[1]} /></div>
        <div className="w-px h-6 bg-foreground/10" />
        
        {/* Core Mobile */}
        <div 
          className="w-full h-32 border border-[#0B1F3A] bg-[#0A0A0A] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(11,31,58,0.1)]"
          onTouchStart={() => setHovered('core')}
          onTouchEnd={() => setHovered(null)}
        >
          <div className="w-2 h-2 rounded-sm mb-3 bg-[#0B1F3A] shadow-[0_0_8px_#0B1F3A]" />
          <span className="font-mono text-sm font-bold tracking-[0.2em] text-foreground">SYSTEM CORE</span>
          <span className="font-mono text-[9px] tracking-widest text-muted-foreground mt-2 uppercase">ENGINEERING ENGINE</span>
        </div>

        <div className="w-px h-6 bg-[#0B1F3A]/50" />
        <div className="w-full h-24"><NodeCard n={nodes[3]} /></div>
        <div className="w-px h-6 bg-foreground/10" />
        <div className="w-full h-24"><NodeCard n={nodes[4]} /></div>
        <div className="w-px h-6 bg-foreground/10" />
        <div className="w-full h-24"><NodeCard n={nodes[5]} /></div>
        <div className="w-px h-6 bg-foreground/10" />
        <div className="w-full h-24"><NodeCard n={nodes[2]} /></div>
      </div>

    </div>
  );
}
