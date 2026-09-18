"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { profile } from "@/data/profile";

const featuredProjects = projects.slice(0, 4);

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNext = useCallback(() => {
    if (currentIndex < featuredProjects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      if (Math.abs(e.deltaY) > 20 || Math.abs(e.deltaX) > 20) {
        setIsScrolling(true);
        if (e.deltaY > 0 || e.deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 800); // Debounce duration
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScrolling, handleNext, handlePrev]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") handleNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentProject = featuredProjects[currentIndex];

  return (
    <div className="h-[100dvh] w-full bg-[#050505] text-[#f4f4f5] overflow-hidden relative selection:bg-[#f4f4f5] selection:text-[#050505] flex flex-col justify-between">
      
      {/* Background Cinematic Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 0.03, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[15vw] font-bold tracking-tighter leading-none whitespace-nowrap text-white"
        >
          {currentProject.title.split(" ")[0]}
        </motion.div>
      </div>

      {/* Top Minimal Navigation */}
      <header className="w-full flex items-center justify-between p-6 md:p-12 z-40 relative">
        <Link href="/" className="font-serif italic text-xl md:text-2xl font-light tracking-wide hover:text-white transition-colors">
          {profile.name.split(" ")[0].toLowerCase()}.
        </Link>
        <nav className="flex items-center gap-6 md:gap-10 text-xs tracking-widest font-mono text-zinc-400">
          <Link href="/projects" className="text-white uppercase">Works</Link>
          <Link href="/about" className="hover:text-white transition-colors uppercase">About</Link>
          <Link href="#" className="hover:text-white transition-colors uppercase">Reel</Link>
        </nav>
      </header>

      {/* Centerpiece: Project Stage */}
      <main className="flex-1 relative w-full h-full flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl px-6 md:px-12 flex flex-col items-center justify-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) handleNext();
              else if (swipe > swipeConfidenceThreshold) handlePrev();
            }}
          >
            
            {/* Project Square with Name Inside */}
            <div className="relative w-full md:w-[80%] aspect-[4/3] md:aspect-[16/9] bg-zinc-900 shadow-2xl overflow-hidden group flex items-center justify-center text-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-zinc-800 opacity-50" />
              
              {/* Inside Project Title */}
              <h2 className="relative z-20 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1] text-white px-8">
                {currentProject.title}
              </h2>
              
              <Link href={`/projects/${currentProject.id}`}>
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-500 backdrop-blur-sm cursor-pointer">
                  <span className="font-mono text-xs tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300">
                    EXPLORE SYSTEM
                  </span>
                </div>
              </Link>
            </div>

            {/* Subtle Metadata Below */}
            <div className="mt-8 flex items-center justify-between w-full md:w-[80%] z-20">
              <span className="font-mono text-[10px] md:text-xs tracking-widest text-zinc-400">
                0{currentIndex + 1} // {currentProject.problem ? currentProject.problem.substring(0, 30) + "..." : "SYSTEM"}
              </span>
              <span className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase">
                {currentProject.stack[0]} / {currentProject.stack[1] || "AI"}
              </span>
            </div>

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Control Bar */}
      <footer className="w-full p-6 md:p-12 z-40 relative flex items-center justify-between text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest">
        
        <div className="hidden md:block w-32">
          {profile.contact.email}
        </div>

        {/* Progress Indicator */}
        <div className="flex-1 flex items-center justify-center gap-4 max-w-md mx-auto">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>
          <div className="flex-1 h-[1px] bg-zinc-800 relative flex items-center">
            <motion.div 
              className="absolute h-[1px] bg-zinc-400"
              initial={false}
              animate={{ 
                left: `${(currentIndex / (featuredProjects.length - 1)) * 100}%`,
                width: "20px",
                x: "-50%"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <span>{String(featuredProjects.length).padStart(2, "0")}</span>
        </div>

        <div className="hidden md:flex justify-end w-32 gap-2">
          <span className="text-white">EN</span>
          <span>/</span>
          <span className="hover:text-white cursor-pointer transition-colors">FR</span>
        </div>
      </footer>
    </div>
  );
}

// Drag swipe helpers
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
