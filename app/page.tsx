"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Dashboard() {
  const featuredProject = projects.find(p => p.status === "DEPLOYED") || projects[0];

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Identity Card */}
        <div className="lg:col-span-2 border border-border p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 font-mono text-xs text-muted-foreground">
            ID: K-001
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            {profile.name.toUpperCase()}
          </h1>
          <div className="flex flex-col gap-2 font-mono text-sm mb-8 text-muted-foreground">
            {profile.title.split(" • ").map((role, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground inline-block" />
                {role}
              </span>
            ))}
          </div>
          <p className="text-lg max-w-xl text-muted-foreground">
            {profile.about.whoIAm}
          </p>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-foreground/5 rounded-tl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
        </div>

        {/* System Status */}
        <div className="border border-border p-8 flex flex-col justify-between font-mono text-sm">
          <div>
            <div className="text-muted-foreground mb-4 border-b border-border pb-2">SYSTEM STATUS</div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-bold">{profile.systemStatus.status}</span>
            </div>
            
            <div className="text-muted-foreground mb-2">CURRENT FOCUS:</div>
            <div className="flex flex-wrap gap-2">
              {profile.systemStatus.focus.map((f, i) => (
                <span key={i} className="px-2 py-1 border border-border text-xs">
                  {f}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-border flex justify-between items-end">
            <span className="text-muted-foreground">LOC:</span>
            <span>{profile.systemStatus.location}</span>
          </div>
        </div>
      </motion.section>

      {/* Metrics & Current Mission */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="border border-border p-8">
          <div className="text-muted-foreground font-mono text-xs mb-6 border-b border-border pb-2">DEVELOPER METRICS</div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold mb-1">{profile.metrics.githubRepos}</div>
              <div className="text-xs font-mono text-muted-foreground">REPOSITORIES</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">{profile.metrics.projectsShipped}</div>
              <div className="text-xs font-mono text-muted-foreground">SHIPPED</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">{profile.metrics.technologies}</div>
              <div className="text-xs font-mono text-muted-foreground">TECHNOLOGIES</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">{profile.metrics.yearsCoding}</div>
              <div className="text-xs font-mono text-muted-foreground">YEARS EXP</div>
            </div>
          </div>
        </div>

        <div className="border border-border p-8 flex flex-col justify-center">
          <div className="text-muted-foreground font-mono text-xs mb-4 border-b border-border pb-2">CURRENT MISSION</div>
          <p className="text-lg leading-relaxed">
            {profile.about.whatImLearning}
          </p>
        </div>
      </motion.section>

      {/* Featured Project */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border border-border group block relative"
      >
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-start mb-12">
            <div className="text-muted-foreground font-mono text-xs border border-border px-3 py-1">FEATURED PROJECT</div>
            <div className="font-mono text-xs">{featuredProject.id}</div>
          </div>
          
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">{featuredProject.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {featuredProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2 font-mono text-xs mb-8">
              {featuredProject.stack.slice(0, 5).map((tech, i) => (
                <span key={i} className="bg-foreground text-background px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>

            <Link 
              href={`/projects/${featuredProject.id}`}
              className="inline-flex items-center gap-2 font-mono text-sm border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              EXPLORE ARCHITECTURE <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-full border-l border-border hidden md:flex flex-col justify-between p-4 font-mono text-[10px] text-muted-foreground writing-vertical-lr rotate-180">
          <span>STATUS: {featuredProject.status}</span>
          <span>INIT: 2026</span>
        </div>
      </motion.section>

    </div>
  );
}
