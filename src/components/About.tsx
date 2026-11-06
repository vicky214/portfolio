"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  CheckCircle2,
  Cpu,
  Layers,
  MapPin,
  Shield,
  Users,
  Zap,
} from "lucide-react";

export default function About() {
  const { about, personal } = PORTFOLIO_DATA;

  const principleIcons = [
    <Zap key="zap" className="w-5 h-5 text-cyan-400" />,
    <Layers key="layers" className="w-5 h-5 text-indigo-400" />,
    <Users key="users" className="w-5 h-5 text-purple-400" />,
    <Cpu key="cpu" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering for Resiliency, Architecting for Scale
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Bridging technical depth and team leadership to construct high-throughput distributed systems that thrive under heavy production demands.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            {about.bio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm font-mono">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm font-mono">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Clean Architecture / SOLID</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm font-mono">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Production RCA & Zero-Downtime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Principles */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {about.principles.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-xl p-5 border border-slate-800/80 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {principleIcons[idx % principleIcons.length]}
                  </div>
                  <h3 className="font-semibold text-white text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pl-11">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
