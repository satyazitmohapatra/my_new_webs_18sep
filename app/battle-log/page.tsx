"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { battleLogs } from "@/data/battleLog";
import { Terminal, Bug, FileSearch, ShieldCheck, GraduationCap } from "lucide-react";

export default function BattleLog() {
  const [expandedId, setExpandedId] = useState<string | null>(battleLogs[0].id);

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto space-y-12 pb-24">
      <div className="border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">ENGINEERING BATTLE LOG</h1>
        <p className="text-muted-foreground font-mono text-sm">
          Unfiltered records of critical system failures, debugging marathons, and architectural lessons learned in production.
        </p>
      </div>

      <div className="space-y-6">
        {battleLogs.map((log) => {
          const isExpanded = expandedId === log.id;
          
          return (
            <motion.div 
              key={log.id}
              className="border border-border bg-background overflow-hidden"
              initial={false}
              animate={{ backgroundColor: isExpanded ? "var(--color-muted)" : "transparent" }}
            >
              <button 
                className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted transition-colors"
                onClick={() => setExpandedId(isExpanded ? null : log.id)}
              >
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-2">{log.id}</div>
                  <h2 className="text-xl font-bold">{log.title}</h2>
                </div>
                <div className="font-mono text-xs border border-border px-3 py-1">
                  {isExpanded ? "COLLAPSE [-]" : "EXPAND [+]"}
                </div>
              </button>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-border"
                  >
                    <div className="p-6 space-y-8">
                      <div>
                        <h3 className="font-mono text-xs text-muted-foreground flex items-center gap-2 mb-3">
                          <Bug size={14} /> PROBLEM
                        </h3>
                        <p className="text-sm leading-relaxed">{log.problem}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-mono text-xs text-muted-foreground flex items-center gap-2 mb-3">
                          <FileSearch size={14} /> INVESTIGATION
                        </h3>
                        <p className="text-sm leading-relaxed">{log.investigation}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-mono text-xs text-muted-foreground flex items-center gap-2 mb-3">
                          <ShieldCheck size={14} /> RESOLUTION
                        </h3>
                        <p className="text-sm leading-relaxed border-l-2 border-foreground pl-4">{log.resolution}</p>
                      </div>
                      
                      <div className="bg-foreground text-background p-4 mt-6">
                        <h3 className="font-mono text-xs flex items-center gap-2 mb-2 font-bold">
                          <GraduationCap size={14} /> LESSON LEARNED
                        </h3>
                        <p className="text-sm italic">{log.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
