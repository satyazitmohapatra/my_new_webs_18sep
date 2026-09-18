"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, UploadCloud, Cpu, AlertTriangle } from "lucide-react";

export default function AILab() {
  const [riskStatus, setRiskStatus] = useState<"IDLE" | "ANALYZING" | "RESULT">("IDLE");
  const [resumeStatus, setResumeStatus] = useState<"IDLE" | "PROCESSING" | "EXTRACTED">("IDLE");

  const runRiskPrediction = () => {
    setRiskStatus("ANALYZING");
    setTimeout(() => {
      setRiskStatus("RESULT");
    }, 1500);
  };

  const processResume = () => {
    setResumeStatus("PROCESSING");
    setTimeout(() => {
      setResumeStatus("EXTRACTED");
    }, 2000);
  };

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-16 pb-24">
      <div className="border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">AI LAB</h1>
        <p className="text-muted-foreground font-mono text-sm max-w-2xl">
          Interactive demonstrations of machine learning models and AI pipelines. 
          Currently running in simulation mode. Backend integration pending.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Demo 1: Risk Prediction */}
        <section className="border border-border p-6 md:p-8 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-foreground text-background">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Risk Prediction Engine</h2>
              <div className="font-mono text-xs text-muted-foreground">MODEL: RANDOM FOREST / XGBOOST ENSEMBLE</div>
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-2 gap-4 font-mono text-sm">
              <div>
                <label className="block text-xs text-muted-foreground mb-1">RAINFALL (MM)</label>
                <input type="text" defaultValue="124.5" className="w-full bg-background border border-border p-2 outline-none focus:border-foreground" readOnly />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">TEMPERATURE (C)</label>
                <input type="text" defaultValue="32.1" className="w-full bg-background border border-border p-2 outline-none focus:border-foreground" readOnly />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">SOIL SATURATION (%)</label>
                <input type="text" defaultValue="87" className="w-full bg-background border border-border p-2 outline-none focus:border-foreground" readOnly />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">WEATHER CONDITION</label>
                <input type="text" defaultValue="MONSOON" className="w-full bg-background border border-border p-2 outline-none focus:border-foreground" readOnly />
              </div>
            </div>

            {riskStatus === "RESULT" && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-muted/10 border border-border p-4 font-mono text-sm space-y-2 mt-6"
              >
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">RISK PROBABILITY:</span>
                  <span className="text-red-500 font-bold">89.4%</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">RISK CATEGORY:</span>
                  <span className="font-bold">CRITICAL</span>
                </div>
                <div className="text-xs text-muted-foreground pt-2">
                  MODEL EXPLANATION: High soil saturation combined with sustained rainfall triggers critical alert threshold.
                </div>
              </motion.div>
            )}
          </div>
          
          <button 
            onClick={runRiskPrediction}
            disabled={riskStatus === "ANALYZING"}
            className="w-full mt-8 bg-foreground text-background py-3 font-mono text-sm font-bold flex items-center justify-center gap-2 hover:bg-muted-foreground transition-colors disabled:opacity-50"
          >
            {riskStatus === "ANALYZING" ? (
              <><span className="animate-spin"><Cpu size={16} /></span> INFERENCING...</>
            ) : (
              <><Play size={16} /> RUN PREDICTION</>
            )}
          </button>
        </section>

        {/* Demo 2: Resume Intelligence */}
        <section className="border border-border p-6 md:p-8 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-foreground text-background">
              <Cpu size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Resume Intelligence</h2>
              <div className="font-mono text-xs text-muted-foreground">MODEL: NLP / NER PIPELINE</div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col">
            {resumeStatus === "IDLE" && (
              <div className="flex-1 border border-dashed border-border flex flex-col items-center justify-center p-8 text-center gap-4 hover:border-foreground transition-colors cursor-pointer" onClick={processResume}>
                <UploadCloud size={32} className="text-muted-foreground" />
                <div>
                  <div className="font-bold font-mono text-sm">UPLOAD RESUME (PDF/DOCX)</div>
                  <div className="text-xs text-muted-foreground mt-1">Or click to use sample John_Doe_Resume.pdf</div>
                </div>
              </div>
            )}
            
            {resumeStatus === "PROCESSING" && (
              <div className="flex-1 flex flex-col items-center justify-center font-mono text-sm gap-4">
                <span className="animate-spin"><Cpu size={32} /></span>
                <div className="text-muted-foreground">EXTRACTING ENTITIES...</div>
              </div>
            )}

            {resumeStatus === "EXTRACTED" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 font-mono text-sm"
              >
                <div className="border border-border p-4 h-full">
                  <div className="text-xs border-b border-border pb-2 mb-4 text-muted-foreground">EXTRACTION RESULTS</div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-muted-foreground text-xs block mb-1">SKILLS</span>
                      <div className="flex flex-wrap gap-1">
                        {["Python", "React", "Docker", "Kubernetes", "AWS"].map(s => (
                          <span key={s} className="bg-foreground text-background px-1.5 py-0.5 text-[10px]">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs block mb-1">EXPERIENCE</span>
                      <div>Senior Engineer (3.5 yrs)</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs block mb-1">KEYWORDS</span>
                      <div className="text-xs leading-relaxed">
                        distributed systems, microservices, CI/CD, agile, machine learning
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setResumeStatus("IDLE")} className="text-xs underline mt-6 text-muted-foreground hover:text-foreground">
                    RESET DEMO
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
