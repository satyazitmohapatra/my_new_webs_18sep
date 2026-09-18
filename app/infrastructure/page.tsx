"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Server, Database, Globe, Cpu, Layers } from "lucide-react";
import clsx from "clsx";

const nodes = [
  { id: "INTERNET", label: "INTERNET", icon: Globe, desc: "Global traffic ingress points and CDN caching layers." },
  { id: "LB", label: "LOAD BALANCER", icon: Layers, desc: "Nginx / HAProxy routing traffic based on path and load rules." },
  { id: "FRONTEND", label: "FRONTEND", icon: Server, desc: "Next.js applications served from edge network or Node containers." },
  { id: "BACKEND", label: "BACKEND API", icon: Cpu, desc: "FastAPI / Go microservices handling business logic and auth." },
  { id: "AI", label: "AI SERVICE", icon: Cpu, desc: "GPU-accelerated Python containers for ML model inference." },
  { id: "DB", label: "DATABASE", icon: Database, desc: "PostgreSQL clusters with read replicas for high availability." },
];

export default function Infrastructure() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12 pb-24 flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <div className="border-b border-border pb-8 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">INFRASTRUCTURE</h1>
          <p className="text-muted-foreground font-mono text-sm">
            Standard production topology. Click nodes to inspect.
          </p>
        </div>

        {/* The interactive architecture drawing */}
        <div className="flex flex-col items-center max-w-sm mx-auto md:mx-0 font-mono text-xs">
          
          <Node id="INTERNET" icon={Globe} label="INTERNET" activeNode={activeNode} onClick={setActiveNode} />
          <Edge />
          
          <Node id="LB" icon={Layers} label="LOAD BALANCER" activeNode={activeNode} onClick={setActiveNode} />
          <Edge />
          
          <Node id="FRONTEND" icon={Server} label="FRONTEND" activeNode={activeNode} onClick={setActiveNode} />
          <Edge />
          
          <Node id="BACKEND" icon={Cpu} label="BACKEND API" activeNode={activeNode} onClick={setActiveNode} />
          
          <div className="flex w-full justify-center my-4">
            <div className="w-1/2 border-t border-r border-border h-8 rounded-tr-lg" />
            <div className="w-1/2 border-t border-l border-border h-8 rounded-tl-lg" />
          </div>
          
          <div className="flex w-full justify-between px-8">
            <div className="flex flex-col items-center">
              <Node id="DB" icon={Database} label="DATABASE" activeNode={activeNode} onClick={setActiveNode} />
            </div>
            <div className="flex flex-col items-center">
              <Node id="AI" icon={Cpu} label="AI SERVICE" activeNode={activeNode} onClick={setActiveNode} />
            </div>
          </div>
          
        </div>
      </div>

      {/* Info panel */}
      <div className="md:w-1/2 pt-0 md:pt-32">
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="border border-border p-8 relative"
            >
              <div className="absolute top-0 right-0 p-2 border-b border-l border-border font-mono text-[10px] text-muted-foreground">
                NODE_INFO
              </div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {nodes.find(n => n.id === activeNode)?.label}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {nodes.find(n => n.id === activeNode)?.desc}
              </p>
              
              {activeNode === "LB" && (
                <div className="mt-6 font-mono text-xs text-muted-foreground border-t border-border pt-4">
                  CONFIG: round-robin, ssl-termination
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border border-dashed border-border p-8 text-center text-muted-foreground font-mono text-sm h-48 flex items-center justify-center"
            >
              SELECT A NODE TO VIEW DETAILS
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Node({ id, icon: Icon, label, activeNode, onClick }: any) {
  const isActive = activeNode === id;
  return (
    <button 
      onClick={() => onClick(id)}
      className={clsx(
        "border px-6 py-4 flex flex-col items-center gap-2 w-40 transition-colors relative group",
        isActive ? "border-foreground bg-foreground text-background" : "border-border bg-background hover:border-foreground text-foreground"
      )}
    >
      <Icon size={20} className={isActive ? "text-background" : "text-muted-foreground group-hover:text-foreground"} />
      <span className="font-bold">{label}</span>
      {isActive && (
        <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1 h-4 bg-background" />
      )}
    </button>
  );
}

function Edge() {
  return (
    <div className="py-2 text-muted-foreground">
      <ArrowDown size={16} />
    </div>
  );
}
