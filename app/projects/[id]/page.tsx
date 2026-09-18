import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, GitBranch as Github, ExternalLink, Box } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto space-y-12 pb-24">
      {/* Navigation */}
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={14} /> BACK TO UNIVERSE
      </Link>

      {/* Header */}
      <header className="border-b border-border pb-12">
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs mb-6">
          <span className="bg-foreground text-background px-3 py-1">{project.id}</span>
          <span className="border border-border px-3 py-1">{project.status}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{project.title}</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">{project.description}</p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm border border-border px-4 py-2 hover:bg-muted transition-colors">
              <Github size={16} /> REPOSITORY
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm bg-foreground text-background px-4 py-2 hover:bg-muted-foreground transition-colors">
              <ExternalLink size={16} /> LIVE SYSTEM
            </a>
          )}
        </div>
      </header>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="font-mono text-xs text-muted-foreground border-b border-border pb-2 mb-4">PROBLEM STATEMENT</h2>
            <p className="text-lg leading-relaxed">{project.problem}</p>
          </section>
          
          <section>
            <h2 className="font-mono text-xs text-muted-foreground border-b border-border pb-2 mb-4">ENGINEERED SOLUTION</h2>
            <p className="text-lg leading-relaxed">{project.solution}</p>
          </section>
          
          {project.architecture && (
            <section>
              <h2 className="font-mono text-xs text-muted-foreground border-b border-border pb-2 mb-4">SYSTEM ARCHITECTURE</h2>
              <div className="border border-border p-6 bg-muted/10 font-mono text-sm leading-relaxed">
                {project.architecture}
              </div>
            </section>
          )}

          {project.ai && (
            <section>
              <h2 className="font-mono text-xs text-muted-foreground border-b border-border pb-2 mb-4">AI / ML IMPLEMENTATION</h2>
              <p className="text-lg leading-relaxed">{project.ai}</p>
            </section>
          )}

          {project.results && (
            <section>
              <h2 className="font-mono text-xs text-muted-foreground border-b border-border pb-2 mb-4">RESULTS & IMPACT</h2>
              <p className="text-lg leading-relaxed">{project.results}</p>
            </section>
          )}
        </div>

        {/* Sidebar Metadata */}
        <aside className="space-y-8">
          <div>
            <h3 className="font-mono text-xs text-muted-foreground mb-4">TECHNOLOGY STACK</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="font-mono text-xs border border-border px-2 py-1 flex items-center gap-2">
                  <Box size={10} className="text-muted-foreground" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {project.deployment && (
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-4">DEPLOYMENT</h3>
              <p className="font-mono text-sm">{project.deployment}</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
