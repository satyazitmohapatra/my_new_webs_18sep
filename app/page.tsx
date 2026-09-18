"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { battleLogs } from "@/data/battleLog";
import { skills } from "@/data/skills";
import { useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Minus, ChevronDown } from "lucide-react";
import profileImage from "@/public/satyajit_profile.jpg";

export default function SinglePagePortfolio() {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);
  const [expandedSkillIdx, setExpandedSkillIdx] = useState<number | null>(null);

  return (
    <div className="w-full bg-background text-foreground selection:bg-foreground selection:text-background flex flex-col transition-colors duration-500">
      
      {/* ================================================== */}
      {/* 1. HERO SECTION (Simple Portrait + Text) */}
      {/* ================================================== */}
      <section id="home" className="min-h-[100dvh] w-full relative pt-32 px-6 md:px-24 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl items-center">
          {/* Left Text */}
          <div className="flex flex-col gap-6 z-10 text-center lg:text-left items-center lg:items-start">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              Hi, I am {profile.name.split(" ")[0]}.
            </h2>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed max-w-lg mt-4">
              {profile.about.whoIAm} {profile.about.whatIBuild}
            </p>
            <p className="text-muted-foreground/80 font-mono text-xs uppercase tracking-widest mt-8">
              {profile.title}
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end z-10">
            <div className="w-full max-w-md aspect-square overflow-hidden bg-muted shadow-2xl relative group">
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src={profileImage} 
                alt="Satyajit Mohapatra" 
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. SELECTED WORK (Carousel style) */}
      {/* ================================================== */}
      <section id="projects" className="w-full relative py-32 px-6 md:px-12 bg-background flex flex-col justify-center overflow-hidden border-t border-foreground/10">
        
        <div className="w-full flex flex-col items-center justify-center relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 bg-foreground" />
            <div className="w-2 h-2 bg-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground uppercase mb-16 text-center">
            SELECTED WORK
          </h2>

          <div className="w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProjectIdx}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex flex-col items-center gap-8"
              >
                {/* Square Image Block */}
                <div className="w-full max-w-2xl aspect-square bg-zinc-900 overflow-hidden relative group shadow-2xl">
                  {/* Fixed overlay to ensure white text is always visible regardless of theme */}
                  <div className="absolute inset-0 bg-black/60 z-10 transition-opacity group-hover:opacity-80" />
                  <h3 className="absolute inset-0 flex items-center justify-center z-20 text-4xl md:text-5xl font-bold tracking-tighter text-white px-8 text-center uppercase">
                    {projects[currentProjectIdx].title}
                  </h3>
                  
                  <Link href={`/projects/${projects[currentProjectIdx].id}`}>
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/80 transition-opacity duration-500 cursor-pointer">
                      <span className="font-mono text-xs tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 text-white">
                        VIEW SYSTEM
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Text Block underneath */}
                <div className="w-full max-w-2xl flex flex-col items-center text-center gap-4">
                  <div className="font-mono text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase">
                    0{currentProjectIdx + 1} // {projects[currentProjectIdx].stack[0]} // 2026
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    {projects[currentProjectIdx].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Carousel Controls */}
            <div className="absolute top-[40%] -translate-y-1/2 left-2 md:-left-12 z-40">
              <button 
                onClick={() => setCurrentProjectIdx(p => Math.max(0, p - 1))}
                disabled={currentProjectIdx === 0}
                className="w-10 h-10 md:w-14 md:h-14 bg-background/90 backdrop-blur-sm border border-foreground/20 rounded-none flex items-center justify-center text-foreground hover:bg-foreground hover:text-background disabled:opacity-20 disabled:cursor-not-allowed transition-colors shadow-xl"
              >
                <ArrowLeft size={20} />
              </button>
            </div>
            
            <div className="absolute top-[40%] -translate-y-1/2 right-2 md:-right-12 z-40">
              <button 
                onClick={() => setCurrentProjectIdx(p => Math.min(projects.length - 1, p + 1))}
                disabled={currentProjectIdx === projects.length - 1}
                className="w-10 h-10 md:w-14 md:h-14 bg-background/90 backdrop-blur-sm border border-foreground/20 rounded-none flex items-center justify-center text-foreground hover:bg-foreground hover:text-background disabled:opacity-20 disabled:cursor-not-allowed transition-colors shadow-xl"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. BATTLE LOGS */}
      {/* ================================================== */}
      <section id="battle-logs" className="w-full relative py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 bg-foreground" />
            <div className="w-2 h-2 bg-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground uppercase mb-16">
            BATTLE LOGS
          </h2>
          <div className="w-full border-t border-foreground/20">
            {battleLogs.map((log) => (
              <div key={log.id} className="border-b border-foreground/20 py-8">
                <button 
                  onClick={() => setExpandedLogId(expandedLogId === log.id ? null : log.id)}
                  className="w-full flex items-center justify-between group"
                >
                  <h3 className="text-xl md:text-3xl font-bold tracking-tighter text-foreground text-left group-hover:text-muted-foreground transition-colors uppercase max-w-3xl pr-4">
                    {log.title}
                  </h3>
                  <div className="text-foreground shrink-0">
                    {expandedLogId === log.id ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedLogId === log.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-mono text-muted-foreground tracking-widest uppercase leading-relaxed">
                        <div>
                          <span className="text-foreground font-bold mb-2 block">PROBLEM:</span>
                          {log.problem}
                        </div>
                        <div>
                          <span className="text-foreground font-bold mb-2 block">INVESTIGATION:</span>
                          {log.investigation}
                        </div>
                        <div className="md:col-span-2 border-t border-foreground/10 pt-8 mt-4">
                          <span className="text-foreground font-bold mb-2 block">RESOLUTION & LESSON:</span>
                          {log.resolution} <br/><br/> {log.lesson}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. WHAT I KNOW (Skills) */}
      {/* ================================================== */}
      <section id="skills" className="w-full relative py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 bg-foreground" />
            <div className="w-2 h-2 bg-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground uppercase mb-16">
            WHAT I KNOW
          </h2>
          <div className="flex flex-col gap-4">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="flex flex-col border-b border-foreground/20 pb-4">
                <button 
                  onClick={() => setExpandedSkillIdx(expandedSkillIdx === idx ? null : idx)}
                  className="flex items-center justify-between w-full text-left group hover:px-2 transition-all duration-300"
                >
                  <h3 className="text-lg md:text-2xl font-bold tracking-tighter text-foreground uppercase group-hover:text-muted-foreground transition-colors">
                    {skillGroup.capability}
                  </h3>
                  <div className={`text-foreground transition-transform duration-300 ${expandedSkillIdx === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedSkillIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2">
                        <ul className="flex flex-wrap gap-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                          {skillGroup.exactSkills.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 bg-foreground/5 px-4 py-2 border border-foreground/10">
                              <div className="w-1.5 h-1.5 bg-foreground/50 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. EDUCATIONAL BACKGROUND */}
      {/* ================================================== */}
      <section id="education" className="w-full relative py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 bg-foreground" />
            <div className="w-2 h-2 bg-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground uppercase mb-16">
            EDUCATIONAL BACKGROUND
          </h2>
          
          <div className="flex flex-col gap-8 w-full">
            {[
              { degree: "B.Tech in CSE (Specialising in Data Science)", school: "DRIEMS UNIVERSITY, KATAKA", year: "Currently Pursuing" },
              { degree: "12th Standard", school: "Tetrahedron Higher Secondary School, KATAKA", year: "Completed" },
              { degree: "10th Standard", school: "Chhatia High School, JAJPUR", year: "Completed" }
            ].map((edu, idx) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-foreground/10 pb-8 hover:px-4 transition-all duration-300">
                <div className="flex flex-col gap-2 max-w-xl">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground uppercase">{edu.degree}</h3>
                  <span className="font-mono text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase">{edu.school}</span>
                </div>
                <div className="mt-4 md:mt-0 font-mono text-[10px] tracking-widest text-foreground uppercase border border-foreground/20 px-4 py-2 whitespace-nowrap">
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. ACHIEVEMENTS & CERTIFICATES */}
      {/* ================================================== */}
      <section id="achievements" className="w-full relative py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 bg-foreground" />
            <div className="w-2 h-2 bg-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground uppercase mb-16">
            ACHIEVEMENTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services (Dummy)", date: "2025" },
              { title: "Kaggle Expert Data Scientist", issuer: "Kaggle (Dummy)", date: "2024" },
              { title: "Hackathon Winner - Smart India", issuer: "SIH (Dummy)", date: "2023" },
              { title: "Machine Learning Specialization", issuer: "Stanford Online (Dummy)", date: "2023" }
            ].map((ach, idx) => (
              <div key={idx} className="flex flex-col gap-4 border border-foreground/10 p-8 hover:bg-foreground hover:text-background transition-colors group cursor-pointer">
                <h3 className="text-lg md:text-xl font-bold tracking-tighter uppercase group-hover:text-background transition-colors">{ach.title}</h3>
                <div className="flex flex-col font-mono text-[10px] tracking-widest uppercase text-muted-foreground group-hover:text-background/70 transition-colors">
                  <span>{ach.issuer}</span>
                  <span className="mt-2 opacity-50">{ach.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. MARQUEE SECTION */}
      {/* ================================================== */}
      <section className="w-full py-48 overflow-hidden relative bg-background flex items-center justify-center min-h-[60vh] border-t border-foreground/10">
        <div className="absolute inset-0 flex items-center justify-center">
          
          <div className="w-[150vw] h-12 bg-foreground rotate-[6deg] absolute flex items-center overflow-hidden z-10 border-y border-background">
            <motion.div 
              animate={{ x: [0, -1000] }} 
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex items-center whitespace-nowrap"
            >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-8 font-mono text-xs tracking-widest text-background uppercase font-bold">
                  <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-background"/><div className="w-1.5 h-1.5 bg-background"/></div>
                  TURNING COMPLEXITY INTO CLARITY
                  <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-background"/><div className="w-1.5 h-1.5 bg-background"/></div>
                  AI / ML ENGINEER
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-[150vw] h-12 bg-foreground -rotate-[4deg] absolute flex items-center overflow-hidden z-20 shadow-2xl border-y border-background">
            <motion.div 
              animate={{ x: [-1000, 0] }} 
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex items-center whitespace-nowrap"
            >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-8 font-mono text-xs tracking-widest text-background uppercase font-bold">
                  <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-background"/><div className="w-1.5 h-1.5 bg-background"/></div>
                  TURNING COMPLEXITY INTO CLARITY
                  <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-background"/><div className="w-1.5 h-1.5 bg-background"/></div>
                  FULL STACK DEVELOPER
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-[150vw] h-12 bg-foreground rotate-[1deg] absolute flex items-center overflow-hidden z-30 shadow-2xl border-y border-background">
            <motion.div 
              animate={{ x: [0, -1000] }} 
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="flex items-center whitespace-nowrap"
            >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-8 font-mono text-xs tracking-widest text-background uppercase font-bold">
                  <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-background"/><div className="w-1.5 h-1.5 bg-background"/></div>
                  TURNING COMPLEXITY INTO CLARITY
                  <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-background"/><div className="w-1.5 h-1.5 bg-background"/></div>
                  CLOUD & DEVOPS
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 8. FOOTER */}
      {/* ================================================== */}
      <section id="contact" className="w-full relative pt-32 pb-48 px-6 md:px-12 bg-background overflow-hidden flex flex-col justify-center min-h-[50vh]">
        <div className="w-full flex flex-col items-center justify-center text-center z-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase mb-8 max-w-2xl">
            LET'S CREATE SOMETHING MEANINGFUL
          </h2>
          <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground max-w-sm leading-relaxed mb-12">
            LET'S COLLABORATE ON YOUR NEXT BIG PROJECT.
          </p>
          <a href={`mailto:${profile.contact.email}`} className="text-foreground hover:text-muted-foreground font-mono text-sm tracking-widest border-b border-foreground hover:border-muted-foreground pb-1 transition-colors">
            {profile.contact.email}
          </a>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-12 md:mt-24 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            <a href={profile.contact.github} target="_blank" className="hover:text-foreground transition-colors">[ GITHUB ]</a>
            <a href={profile.contact.linkedin} target="_blank" className="hover:text-foreground transition-colors">[ LINKEDIN ]</a>
          </div>
        </div>
      </section>

    </div>
  );
}
