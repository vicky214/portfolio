"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 relative">

      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/40 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span>Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Work Experience & Leadership
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            A progression of technical ownership, scaling systems under load, and mentoring high-output engineering teams.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-6 md:ml-8 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >

              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:border-indigo-400 transition-all shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70 transition-all">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800/60">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                      <span>{exp.role}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-300 font-medium">
                      <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-cyan-400" />
                        {exp.company}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-mono text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base mb-5 italic font-sans">
                  &ldquo;{exp.summary}&rdquo;
                </p>

                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
