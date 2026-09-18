"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function Navigation() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "dark";
    setTheme(currentTheme);
    if (currentTheme === "light") {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="absolute top-0 left-0 w-full p-4 md:p-8 z-50 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground uppercase">
          {profile.name}
        </h1>
        
        <div className="flex items-center gap-6 md:gap-12">
          <nav className="flex items-center gap-4 text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <Link href="#home" className="hover:text-foreground transition-colors">Home</Link>
            <div className="w-1.5 h-1.5 bg-muted-foreground" />
            <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          </nav>
          
          <button 
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest bg-foreground/5 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0 md:rounded-none"
          >
            {theme === 'dark' ? (
              <><Sun size={14} /> Bright</>
            ) : (
              <><Moon size={14} /> Dark</>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
