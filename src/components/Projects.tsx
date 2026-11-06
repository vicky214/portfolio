"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  ExternalLink,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Distributed Systems",
    "FinTech",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
              <span>Production Systems Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Distributed Systems &amp; Engineering Projects
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Standalone, production-grade architectures engineered to solve real senior-level failure modes: high-concurrency race conditions, duplicate financial debits, cascading outages, and worker crash recoveries.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/30 hover:bg-slate-900/70 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category, Folder & Role */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/90 text-cyan-300 border border-slate-700/60">
                        {project.category}
                      </span>
                      {project.folderName && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50">
                          <FolderGit2 className="w-3 h-3 text-cyan-400" />
                          <span>/{project.folderName}</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      Role: <strong className="text-slate-200">{project.role}</strong>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mt-1 mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Concrete Performance Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-xl bg-slate-950/70 border border-slate-800/70">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <span className="block text-xs font-mono font-bold text-cyan-400 truncate">
                          {metric}
                        </span>
                        <span className="block text-[10px] text-slate-500 uppercase mt-0.5 tracking-wider">
                          Metric
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Architectural Highlights:
                    </div>
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & Links */}
                <div>
                  <div className="pt-4 border-t border-slate-800/70 flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
                      >
                        <span>View Architecture</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
