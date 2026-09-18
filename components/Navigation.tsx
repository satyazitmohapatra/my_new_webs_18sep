"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  FolderGit2, 
  Wrench, 
  Network, 
  GitBranch, 
  ScrollText, 
  User, 
  Mail 
} from "lucide-react";
import clsx from "clsx";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/", icon: Cpu },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "AI Lab", href: "/ai-lab", icon: Wrench }, // Or something more AI related
  { name: "Arsenal", href: "/arsenal", icon: Wrench },
  { name: "Infrastructure", href: "/infrastructure", icon: Network },
  { name: "GitHub", href: "/github", icon: GitBranch },
  { name: "Battle Log", href: "/battle-log", icon: ScrollText },
  { name: "Terminal", href: "/terminal", icon: Terminal },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full md:w-64 border-t md:border-t-0 md:border-r border-border bg-background z-40 flex flex-row md:flex-col justify-between shrink-0 fixed bottom-0 md:relative md:h-screen">
      {/* Brand / Logo */}
      <div className="hidden md:flex p-6 items-center border-b border-border">
        <span className="font-mono text-sm tracking-widest font-bold">KUNAL.OS</span>
        <span className="ml-2 w-2 h-2 rounded-full bg-foreground animate-pulse"></span>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-x-auto md:overflow-y-auto flex flex-row md:flex-col py-2 md:py-4 px-2 md:px-4 gap-1 md:gap-2 no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={clsx(
                "relative flex items-center gap-3 px-3 md:px-4 py-3 md:py-2.5 rounded-sm transition-colors text-sm font-mono shrink-0 md:shrink",
                isActive ? "text-background bg-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon size={16} className={clsx(isActive ? "text-background" : "")} />
              <span className="hidden md:inline">{item.name.toUpperCase()}</span>
            </Link>
          );
        })}
      </div>

      {/* Status Bar */}
      <div className="hidden md:block p-4 border-t border-border font-mono text-xs text-muted-foreground">
        <div>STATUS: ONLINE</div>
        <div>V: 1.0.0</div>
      </div>
    </nav>
  );
}
