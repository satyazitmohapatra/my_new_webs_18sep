"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

export function BootSequence() {
  const [isBooting, setIsBooting] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Has booted in this session?
    if (sessionStorage.getItem("kunal_os_booted")) {
      setIsBooting(false);
      return;
    }

    const bootSequence = [
      "INITIALIZING KUNAL.OS KERNEL...",
      "LOADING AI/ML MODULES...",
      "MOUNTING DISTRIBUTED SYSTEMS...",
      "ESTABLISHING CLOUD CONNECTIONS...",
      "VERIFYING NEURAL NETWORKS...",
      "SYSTEM ONLINE."
    ];

    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setLogs(prev => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsBooting(false);
          sessionStorage.setItem("kunal_os_booted", "true");
        }, 800); // Hold on SYSTEM ONLINE for a bit
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  if (!isBooting) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-background flex flex-col justify-center items-start p-8 md:p-24 font-mono text-sm md:text-base text-foreground"
        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="max-w-2xl w-full mx-auto">
          <div className="mb-8 border-b border-border pb-4">
            <h1 className="text-2xl font-bold tracking-widest">KUNAL.OS</h1>
            <p className="text-muted-foreground mt-2">{profile.title}</p>
            <p className="text-muted-foreground mt-4 italic">{profile.tagline}</p>
          </div>
          <div className="space-y-2">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={log === "SYSTEM ONLINE." ? "text-foreground font-bold mt-4" : "text-muted-foreground"}
              >
                {">"} {log}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-foreground mt-2"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
