"use client";

import { useState, useRef, useEffect } from "react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

export default function TerminalPage() {
  const [history, setHistory] = useState<CommandHistory[]>([
    { command: "", output: "KUNAL.OS v1.0.0. Type 'help' for available commands." }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div>
            Available commands: <br/>
            help, about, projects, skills, github, experience, contact, clear, matrix, sudo, whoami
          </div>
        );
        break;
      case "about":
        output = profile.about.whoIAm;
        break;
      case "projects":
        output = (
          <div className="flex flex-col">
            {projects.map(p => (
              <span key={p.id}><span className="text-muted-foreground w-24 inline-block">{p.id}</span> {p.title}</span>
            ))}
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="flex flex-col gap-2">
            {skills.map(s => (
              <div key={s.category}>
                <span className="text-muted-foreground">[{s.category}]</span> {s.items.join(", ")}
              </div>
            ))}
          </div>
        );
        break;
      case "github":
        output = `Redirecting to ${profile.contact.github}...`;
        window.open(profile.contact.github, "_blank");
        break;
      case "contact":
        output = `Email: ${profile.contact.email} | LinkedIn: ${profile.contact.linkedin}`;
        break;
      case "whoami":
        output = (
          <div>
            {profile.name}<br/>
            {profile.title}
          </div>
        );
        break;
      case "experience":
        output = "Experience data loaded. See BATTLE LOG for details.";
        break;
      case "clear":
        setHistory([]);
        return;
      case "matrix":
        output = "Wake up, Neo... (Simulation triggered)";
        break;
      case "sudo":
      case "sudo hire kunal":
        output = "Access Granted. Scheduling interview sequence...";
        break;
      case "":
        output = "";
        break;
      default:
        output = `command not found: ${trimmed}`;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      handleCommand(input);
      setInput("");
    } else {
      setHistory(prev => [...prev, { command: "", output: "" }]);
    }
  };

  return (
    <div 
      className="p-6 md:p-12 h-full w-full font-mono text-sm flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-y-auto space-y-4 pb-12">
        {history.map((h, i) => (
          <div key={i}>
            {h.command && (
              <div className="flex items-center text-muted-foreground mb-1">
                <span className="text-foreground mr-2">kunal@system:~$</span> {h.command}
              </div>
            )}
            {h.output && <div className="leading-relaxed whitespace-pre-wrap">{h.output}</div>}
          </div>
        ))}
        
        <form onSubmit={onSubmit} className="flex items-center">
          <span className="text-foreground mr-2">kunal@system:~$</span>
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-foreground"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
