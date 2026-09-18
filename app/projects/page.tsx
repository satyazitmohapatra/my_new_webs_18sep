"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Projects() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12 pb-24">
      <div className="border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">PROJECT UNIVERSE</h1>
        <p className="text-muted-foreground font-mono text-sm">
          SYSTEM_ENTRIES: {projects.length} | FILTER: ALL
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={`/projects/${project.id}`} className="block h-full">
              <div className="border border-border p-6 md:p-8 h-full flex flex-col justify-between group hover:border-foreground transition-colors relative overflow-hidden">
                <div>
                  <div className="flex justify-between items-start mb-6 font-mono text-xs">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{project.id}</span>
                    <span className="border border-border px-2 py-0.5">{project.status}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:underline underline-offset-4">{project.title}</h2>
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs mb-6">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-muted-foreground">
                        {tech} {i < Math.min(project.stack.length, 4) - 1 ? "/" : ""}
                      </span>
                    ))}
                    {project.stack.length > 4 && <span className="text-muted-foreground">/...</span>}
                  </div>
                  
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>ACCESS RECORD</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-muted/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
