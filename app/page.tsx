"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { battleLogs } from "@/data/battleLog";
import { skills } from "@/data/skills";
import { useState } from "react";
import { ArrowRight, ArrowLeft, ChevronDown, ExternalLink } from "lucide-react";
import profileImage from "@/public/satyajit_profile.jpg";
import { SystemArchitecture } from "@/components/SystemArchitecture";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="font-mono text-[10px] tracking-widest text-accent uppercase">{number}</span>
      <div className="w-8 h-px bg-foreground/20" />
      <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{label}</span>
    </div>
  );
}

export default function SinglePagePortfolio() {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);
  const [expandedSkillIdx, setExpandedSkillIdx] = useState<number | null>(null);

  const currentProject = projects[currentProjectIdx];

  return (
    <div className="w-full bg-background text-foreground selection:bg-accent selection:text-accent-fg flex flex-col transition-colors duration-300">

      {/* ================================================== */}
      {/* 01 — HERO */}
      {/* ================================================== */}
      <section id="home" className="min-h-[100dvh] w-full relative pt-24 pb-16 px-6 md:px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 z-10 text-center lg:text-left items-center lg:items-start"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-widest text-accent uppercase">01 / INTRO</span>
              <div className="w-8 h-px bg-foreground/20" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Hi, I am {profile.name.split(" ")[0]}.
            </h2>

            <p className="text-muted-foreground font-mono text-sm leading-relaxed max-w-lg">
              {profile.about.whoIAm} {profile.about.whatIBuild}
            </p>

            {/* Technical Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {["AI / ML", "FULL STACK", "CLOUD", "DEVOPS"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground border border-foreground/10 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground/60 font-mono text-[10px] uppercase tracking-widest mt-4">
              {profile.title}
            </p>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end z-10"
          >
            <div className="w-full max-w-sm aspect-square overflow-hidden relative group border border-foreground/10">
              <Image
                src={profileImage}
                alt="Satyajit Mohapatra"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 02 — SOME WORKS*/}
      {/* ================================================== */}
      <section id="projects" className="w-full relative py-24 px-6 md:px-8 bg-background border-t border-foreground/5">
        <div className="w-full max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <SectionLabel number="02" label="PROJECTS" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
              Some Works
            </h2>
          </motion.div>

          <div className="w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProjectIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full"
              >
                {/* Project Card */}
                <div className="border border-foreground/10 p-8 md:p-12">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                        {currentProject.id.replace("_", " ")}
                      </span>
                      <span className="font-mono text-[9px] tracking-widest uppercase text-accent border border-accent/30 px-2 py-0.5">
                        {currentProject.status}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground tabular-nums">
                      {String(currentProjectIdx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                    {currentProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-8">
                    {currentProject.description}
                  </p>

                  {/* Thumbnail Image Section */}
                  {currentProject.image && (
                    <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8">
                      
                      {/* Desktop Left/Prev Arrow */}
                      <button
                        onClick={() => setCurrentProjectIdx((p) => Math.max(0, p - 1))}
                        disabled={currentProjectIdx === 0}
                        className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center bg-background border border-foreground/10 text-muted-foreground hover:text-accent-fg hover:bg-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 rounded-full shadow-sm"
                        aria-label="Previous project"
                      >
                        <ArrowLeft size={16} />
                      </button>

                      {/* Thumbnail Image */}
                      <div className="relative w-full md:flex-1 aspect-[2/1] border border-foreground/20 overflow-hidden group rounded-sm shadow-sm">
                        <Image 
                          src={currentProject.image} 
                          alt={currentProject.title} 
                          fill 
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" 
                        />
                      </div>

                      {/* Desktop Right/Next Arrow */}
                      <button
                        onClick={() => setCurrentProjectIdx((p) => Math.min(projects.length - 1, p + 1))}
                        disabled={currentProjectIdx === projects.length - 1}
                        className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center bg-background border border-foreground/10 text-muted-foreground hover:text-accent-fg hover:bg-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 rounded-full shadow-sm"
                        aria-label="Next project"
                      >
                        <ArrowRight size={16} />
                      </button>

                      {/* Mobile Arrows (Bottom) */}
                      <div className="flex md:hidden items-center justify-center gap-6 w-full mt-2">
                        <button
                          onClick={() => setCurrentProjectIdx((p) => Math.max(0, p - 1))}
                          disabled={currentProjectIdx === 0}
                          className="shrink-0 w-10 h-10 flex items-center justify-center bg-background border border-foreground/10 text-muted-foreground hover:text-accent-fg hover:bg-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 rounded-full shadow-sm"
                          aria-label="Previous project"
                        >
                          <ArrowLeft size={16} />
                        </button>
                        
                        <button
                          onClick={() => setCurrentProjectIdx((p) => Math.min(projects.length - 1, p + 1))}
                          disabled={currentProjectIdx === projects.length - 1}
                          className="shrink-0 w-10 h-10 flex items-center justify-center bg-background border border-foreground/10 text-muted-foreground hover:text-accent-fg hover:bg-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 rounded-full shadow-sm"
                          aria-label="Next project"
                        >
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground border border-foreground/10 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Architecture (if exists) */}
                  {currentProject.architecture && (
                    <div className="border-t border-foreground/5 pt-6 mb-6">
                      <span className="font-mono text-[9px] tracking-widest text-accent uppercase block mb-2">ARCHITECTURE</span>
                      <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                        {currentProject.architecture}
                      </p>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex items-center gap-6 pt-4 border-t border-foreground/5">
                    {currentProject.github && (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors duration-200"
                      >
                        GitHub <ExternalLink size={10} />
                      </a>
                    )}
                    <Link
                      href={`/projects/${currentProject.id}`}
                      className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase bg-accent text-accent-fg px-4 py-2 hover:bg-accent/90 transition-colors duration-200 shadow-sm"
                    >
                      View Details <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentProjectIdx((p) => Math.max(0, p - 1))}
                disabled={currentProjectIdx === 0}
                className="w-10 h-10 flex items-center justify-center bg-accent text-accent-fg hover:bg-accent/90 disabled:bg-foreground/5 disabled:text-foreground/20 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                aria-label="Previous project"
              >
                <ArrowLeft size={16} />
              </button>
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground tabular-nums">
                {String(currentProjectIdx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setCurrentProjectIdx((p) => Math.min(projects.length - 1, p + 1))}
                disabled={currentProjectIdx === projects.length - 1}
                className="w-10 h-10 flex items-center justify-center bg-accent text-accent-fg hover:bg-accent/90 disabled:bg-foreground/5 disabled:text-foreground/20 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                aria-label="Next project"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 03 — BATTLE LOGS */}
      {/* ================================================== */}
      <section id="battle-logs" className="w-full relative py-24 px-6 md:px-8 bg-background border-t border-foreground/5">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeUp}>
            <SectionLabel number="03" label="INCIDENT LOGS" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
              Battle Logs
            </h2>
          </motion.div>

          <div className="w-full border-t border-foreground/10">
            {battleLogs.map((log) => (
              <div key={log.id} className="border-b border-foreground/10">
                <button
                  onClick={() => setExpandedLogId(expandedLogId === log.id ? null : log.id)}
                  className="w-full flex items-center justify-between py-6 md:py-8 group"
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="font-mono text-[9px] tracking-widest text-accent uppercase hidden md:block shrink-0 w-16">
                      {log.id.replace("_", " ")}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground uppercase group-hover:text-accent/80 transition-colors duration-200">
                      {log.title}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 flex items-center justify-center bg-accent text-accent-fg shrink-0 transition-transform duration-200 shadow-sm ${expandedLogId === log.id ? "rotate-180" : ""}`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedLogId === log.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-mono text-muted-foreground tracking-wide leading-relaxed">
                        <div>
                          <span className="text-[10px] tracking-widest text-accent uppercase font-bold mb-2 block">PROBLEM</span>
                          {log.problem}
                        </div>
                        <div>
                          <span className="text-[10px] tracking-widest text-accent uppercase font-bold mb-2 block">INVESTIGATION</span>
                          {log.investigation}
                        </div>
                        <div className="md:col-span-2 border-t border-foreground/5 pt-6">
                          <span className="text-[10px] tracking-widest text-accent uppercase font-bold mb-2 block">RESOLUTION & LESSON</span>
                          {log.resolution} <br /><br /> {log.lesson}
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
      {/* 04 — SKILLS */}
      {/* ================================================== */}
      <section id="skills" className="w-full relative py-24 px-6 md:px-8 bg-background border-t border-foreground/5">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeUp}>
            <SectionLabel number="04" label="SKILLS" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
              What I Know
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="border-b border-foreground/10">
                <button
                  onClick={() => setExpandedSkillIdx(expandedSkillIdx === idx ? null : idx)}
                  className="flex items-center justify-between w-full text-left py-5 md:py-6 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground tabular-nums w-6 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base md:text-lg font-bold tracking-tight text-foreground uppercase group-hover:text-accent/80 transition-colors duration-200">
                      {skillGroup.capability}
                    </h3>
                  </div>
                  <div className={`w-7 h-7 flex items-center justify-center bg-accent text-accent-fg shrink-0 transition-transform duration-200 shadow-sm ${expandedSkillIdx === idx ? "rotate-180" : ""}`}>
                    <ChevronDown size={12} />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedSkillIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-10">
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.exactSkills.map((item, i) => (
                            <span
                              key={i}
                              className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground border border-foreground/10 px-3 py-1.5"
                            >
                              {item}
                            </span>
                          ))}
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
      {/* 05 — SYSTEM ARCHITECTURE */}
      {/* ================================================== */}
      <section id="architecture" className="w-full relative bg-background border-t border-foreground/5">
        <div className="max-w-5xl mx-auto w-full pt-24 px-6 md:px-8">
          <motion.div {...fadeUp}>
            <SectionLabel number="05" label="SYSTEM ARCHITECTURE" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
              Engineering Engine
            </h2>
          </motion.div>
        </div>
        <SystemArchitecture />
      </section>

      {/* ================================================== */}
      {/* 06 — EDUCATION */}
      {/* ================================================== */}
      <section id="education" className="w-full relative py-24 px-6 md:px-8 bg-background border-t border-foreground/5">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeUp}>
            <SectionLabel number="06" label="EDUCATION" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
              Educational Background
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {[
              { degree: "B.Tech in CSE (Specialising in Data Science)", school: "DRIEMS UNIVERSITY, KATAKA", year: "Currently Pursuing" },
              { degree: "12th Standard", school: "Tetrahedron Higher Secondary School, KATAKA", year: "Completed" },
              { degree: "10th Standard", school: "Chhatia High School, JAJPUR", year: "Completed" },
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-foreground/10 py-6 md:py-8 group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground tabular-nums mt-1.5 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground">{edu.degree}</h3>
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{edu.school}</span>
                  </div>
                </div>
                <span className="mt-3 md:mt-0 ml-8 md:ml-0 font-mono text-[10px] tracking-widest text-muted-foreground uppercase border border-foreground/10 px-3 py-1 shrink-0">
                  {edu.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 07 — CERTIFICATIONS */}
      {/* ================================================== */}
      <section id="achievements" className="w-full relative py-24 px-6 md:px-8 bg-background border-t border-foreground/5">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeUp}>
            <SectionLabel number="07" label="CERTIFICATIONS" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
              Achievements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Microsoft Azure A-900", issuer: "Microsoft", date: "2025" },
              { title: "Kaggle Source Contributor", issuer: "Kaggle", date: "2026" },
              { title: "Technova Hackathon 3.0 2nd RunnersUp", issuer: "Technova by ESSPL", date: "2026" },
              { title: "CODESOFT Data Science Internship", issuer: "CODESOFT", date: "2026" },
            ].map((ach, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group border border-foreground/10 p-6 md:p-8 hover:border-accent/40 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-foreground">{ach.title}</h3>
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground/60 tabular-nums shrink-0 mt-1">{ach.date}</span>
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">{ach.issuer}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 07 — STATUS TICKER (replaces diagonal marquees) */}
      {/* ================================================== */}
      <section className="w-full py-4 overflow-hidden border-t border-b border-foreground/5 bg-gray-dim">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex items-center whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
              AI / ML ENGINEER
              <span className="w-1 h-1 bg-foreground/20 rounded-full shrink-0" />
              FULL STACK DEVELOPER
              <span className="w-1 h-1 bg-foreground/20 rounded-full shrink-0" />
              CLOUD & DEVOPS
              <span className="w-1 h-1 bg-foreground/20 rounded-full shrink-0" />
              TURNING COMPLEXITY INTO CLARITY
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================================================== */}
      {/* 09 — FOOTER */}
      {/* ================================================== */}
      <section id="contact" className="w-full relative py-24 md:py-32 px-6 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeUp} className="flex flex-col items-center text-center">
            <SectionLabel number="09" label="CONTACT" />

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 max-w-xl">
              LET'S CREATE SOMETHING MEANINGFUL
            </h2>
            <p className="font-mono text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase max-w-sm leading-relaxed mb-10">
              LET'S COLLABORATE ON YOUR NEXT BIG PROJECT.
            </p>

            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center justify-center bg-accent text-accent-fg px-8 py-4 font-mono text-xs md:text-sm tracking-widest uppercase hover:bg-accent/90 transition-transform hover:scale-[1.02] shadow-md shadow-accent/10"
            >
              {profile.contact.email}
            </a>

            <div className="flex gap-8 mt-12 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              <a href={profile.contact.github} target="_blank" className="flex items-center gap-2 hover:text-accent transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg> GitHub
              </a>
              <a href={profile.contact.linkedin} target="_blank" className="flex items-center gap-2 hover:text-accent transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Clean Name Footer */}
          <div className="mt-24 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50 uppercase">
              © 2026 {profile.name}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50 uppercase">
              {profile.systemStatus.location}
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
