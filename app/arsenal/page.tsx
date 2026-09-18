"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { ChevronRight } from "lucide-react";

export default function Arsenal() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-16 pb-24">
      <div className="border-b border-border pb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter mb-4">TECH ARSENAL</h1>
          <p className="text-muted-foreground font-mono text-sm max-w-xl">
            A curated classification of technologies, languages, and frameworks used in production environments.
          </p>
        </div>
        <div className="hidden md:block font-mono text-xs text-muted-foreground text-right border border-border p-2">
          SYSTEM_SCAN: COMPLETE<br/>
          ENTITIES_FOUND: {skills.reduce((acc, cat) => acc + cat.items.length, 0)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="font-mono text-sm font-bold border-b border-foreground pb-2 mb-6 flex items-center justify-between">
              {category.category}
              <span className="text-muted-foreground font-normal text-xs">{category.items.length} ITEMS</span>
            </h2>
            <ul className="space-y-4">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-3 font-mono text-sm group">
                  <ChevronRight size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
