"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function Navigation() {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "dark";
    setTheme(currentTheme);
    if (currentTheme === "light") {
      document.documentElement.classList.add("light");
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Work" },
    { href: "#battle-logs", label: "Logs" },
    { href: "#skills", label: "Stack" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-4">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <h1 className="text-sm font-bold tracking-tight text-foreground uppercase font-mono">
            {profile.name.split(" ")[0]}
            <span className="text-accent">.dev</span>
          </h1>
          <div className="hidden md:flex items-center gap-2 text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            SYS.ONLINE
          </div>
        </div>

        {/* Nav Links + Toggle */}
        <div className="flex items-center gap-1 md:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center bg-accent text-accent-fg hover:bg-accent/90 transition-all duration-200 shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </header>
  );
}
