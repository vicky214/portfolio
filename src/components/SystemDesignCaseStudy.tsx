"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  ArrowRight,
  Cpu,
  Database,
  Network,
  RotateCcw,
  Server,
  Zap,
} from "lucide-react";

export default function SystemDesignCaseStudy() {
  const { caseStudy } = PORTFOLIO_DATA;

  const stepIcons = [
    <Network key="net" className="w-5 h-5 text-cyan-400" />,
    <Zap key="zap" className="w-5 h-5 text-indigo-400" />,
    <Database key="db" className="w-5 h-5 text-purple-400" />,
    <RotateCcw key="rot" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="case-study" className="py-24 relative overflow-hidden">

      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span>High-Level Architecture Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Case Study: Scaling from 2k to 50k+ Concurrent Users
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            {caseStudy.subtitle}
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800/90 bg-slate-900/60 shadow-2xl relative">

          <div className="mb-10 p-6 rounded-2xl bg-slate-950/70 border border-amber-500/20">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm font-mono uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>The Production Bottleneck</span>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>Production Benchmark Results</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {caseStudy.results.map((res, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 bg-slate-950/80 border border-slate-800 text-left"
                >
                  <span className="text-xs font-medium text-slate-400 block mb-1">
                    {res.label}
                  </span>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-red-400 line-through">
                      {res.before}
                    </span>
                    <ArrowRight className="w-3 h-3 text-slate-500 inline" />
                    <span className="text-lg font-bold text-emerald-400 font-mono">
                      {res.after}
                    </span>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                    {res.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Server className="w-5 h-5 text-indigo-400" />
              <span>System Architectural Interventions</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.solution.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                    {stepIcons[idx % stepIcons.length]}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1.5">
                      {item.step}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
