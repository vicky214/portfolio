"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Server,
  Database,
  Cloud,
  Layout,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const { skillsCategories } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-5 h-5 text-cyan-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-indigo-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-cyan-950/60 text-cyan-300 border-cyan-500/30";
      case "Advanced":
        return "bg-indigo-950/60 text-indigo-300 border-indigo-500/30";
      default:
        return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Skills & Architectural Toolkit
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Core technologies, distributed paradigms, and database optimizations leveraged in high-load production environments.
          </p>
        </div>

        {/* Category Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {skillsCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === idx
                  ? "bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 text-white border border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800/80 hover:text-white hover:border-slate-700"
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Panel */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 bg-slate-900/40">
          <div className="mb-6 pb-4 border-b border-slate-800/70">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              {getCategoryIcon(skillsCategories[activeCategory].icon)}
              <span>{skillsCategories[activeCategory].title}</span>
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {skillsCategories[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsCategories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-950/90 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {skill.name}
                  </span>
                  <span
                    className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border ${getLevelBadgeClass(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>

                {skill.tags && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
