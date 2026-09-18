"use client";

import { motion } from "framer-motion";
import { githubData } from "@/data/github";
import { GitBranch as GithubIcon, Star, GitFork, GitCommit, ExternalLink } from "lucide-react";

export default function GithubDashboard() {
  // Generate a mock contribution graph for visual effect
  const generateContributionGraph = () => {
    const days = [];
    for (let i = 0; i < 365; i++) {
      // Random intensity between 0-4
      const intensity = Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0;
      days.push(intensity);
    }
    return days;
  };

  const contributions = generateContributionGraph();

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12 pb-24">
      <div className="border-b border-border pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter mb-4 flex items-center gap-4">
            <GithubIcon size={32} /> GITHUB INTELLIGENCE
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            USER: @{githubData.username} | STATUS: SYNCED
          </p>
        </div>
        <a 
          href={`https://github.com/${githubData.username}`} 
          target="_blank" 
          rel="noreferrer"
          className="border border-border px-4 py-2 font-mono text-xs hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
        >
          VIEW PROFILE <ExternalLink size={14} />
        </a>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <MetricCard label="REPOSITORIES" value={githubData.metrics.repositories} />
        <MetricCard label="COMMITS (1Y)" value={githubData.metrics.contributionsThisYear} />
        <MetricCard label="STARS" value={githubData.metrics.stars} icon={Star} />
        <MetricCard label="FORKS" value={githubData.metrics.forks} icon={GitFork} />
      </div>

      {/* Contribution Graph */}
      <section className="border border-border p-6 overflow-x-auto">
        <h2 className="font-mono text-xs text-muted-foreground mb-4 border-b border-border pb-2">CONTRIBUTION MATRIX (1Y)</h2>
        <div className="flex gap-1 min-w-max">
          {Array.from({ length: 52 }).map((_, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const day = contributions[weekIndex * 7 + dayIndex];
                if (day === undefined) return null;
                return (
                  <div 
                    key={dayIndex} 
                    className={`w-3 h-3 rounded-sm ${
                      day === 0 ? 'bg-muted/30' :
                      day === 1 ? 'bg-foreground/30' :
                      day === 2 ? 'bg-foreground/50' :
                      day === 3 ? 'bg-foreground/80' :
                      'bg-foreground'
                    }`} 
                  />
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Languages & Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="border border-border p-6">
          <h2 className="font-mono text-xs text-muted-foreground mb-6 border-b border-border pb-2">PRIMARY LANGUAGES</h2>
          <div className="space-y-4">
            {githubData.topLanguages.map(lang => (
              <div key={lang.name}>
                <div className="flex justify-between font-mono text-sm mb-1">
                  <span>{lang.name}</span>
                  <span className="text-muted-foreground">{lang.percentage}%</span>
                </div>
                <div className="h-1 bg-muted/30 w-full">
                  <div className="h-full bg-foreground" style={{ width: `${lang.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border border-border p-6">
          <h2 className="font-mono text-xs text-muted-foreground mb-6 border-b border-border pb-2">RECENT ACTIVITY</h2>
          <div className="space-y-6">
            {githubData.recentActivity.map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">
                  <GitCommit size={16} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-1">{activity.date}</div>
                  <div className="font-bold text-sm mb-1">{activity.repo}</div>
                  <div className="text-sm text-muted-foreground">{activity.message}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}

function MetricCard({ label, value, icon: Icon }: { label: string, value: number | string, icon?: any }) {
  return (
    <div className="border border-border p-6 flex flex-col justify-between">
      <div className="font-mono text-xs text-muted-foreground mb-4">{label}</div>
      <div className="text-4xl font-bold flex items-center gap-2">
        {Icon && <Icon size={24} className="text-muted-foreground" />}
        {value}
      </div>
    </div>
  );
}
