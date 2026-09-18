"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { ArrowRight, Copy, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          LET'S BUILD <br className="hidden md:block"/>
          <span className="text-muted-foreground">SOMETHING INTERESTING.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Email block */}
          <div className="border border-border p-8 group relative overflow-hidden">
            <div className="font-mono text-xs text-muted-foreground mb-6">SECURE CHANNEL</div>
            <button 
              onClick={handleCopyEmail}
              className="text-2xl md:text-3xl font-bold flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              {profile.contact.email}
            </button>
            
            <div className="mt-8 font-mono text-sm text-muted-foreground flex items-center gap-2">
              {copied ? (
                <span className="flex items-center gap-2 text-foreground"><CheckCircle2 size={16} /> COPIED TO CLIPBOARD</span>
              ) : (
                <span className="flex items-center gap-2 group-hover:text-foreground transition-colors"><Copy size={16} /> CLICK TO COPY</span>
              )}
            </div>
            
            <div className="absolute inset-0 bg-muted/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center gap-6 border-l border-border pl-8">
            <a 
              href={profile.contact.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-xl font-mono hover:pl-4 transition-all"
            >
              <ArrowRight size={20} className="text-muted-foreground" /> GITHUB
            </a>
            <a 
              href={profile.contact.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-xl font-mono hover:pl-4 transition-all"
            >
              <ArrowRight size={20} className="text-muted-foreground" /> LINKEDIN
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
