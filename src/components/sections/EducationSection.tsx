"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, Check } from "lucide-react";
import { educationData } from "@/data/education";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative min-h-screen py-24 px-6 md:px-12 z-10 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl border-b border-[#171918]/8 pb-6">
          <span className="text-xs font-mono text-[#283C32]">
            04 — Academic Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#171918] font-editorial leading-tight">
            Academic Timeline
          </h2>
          <p className="text-sm text-[#777B76]">
            Structured undergraduate engineering studies and science foundations.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-[#171918]/8 space-y-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#777B76]">
                    <Calendar className="w-3.5 h-3.5 text-[#283C32]" />
                    <span>{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#171918] tracking-tight">
                    {edu.institution}
                  </h3>
                  <p className="text-xs font-medium text-[#283C32] font-mono">
                    {edu.degree}
                  </p>
                </div>

                {edu.score ? (
                  <div className="px-3 py-1.5 rounded-lg bg-[#283C32]/8 text-center shrink-0">
                    <span className="text-[10px] font-mono text-[#777B76] block">Score</span>
                    <span className="text-base font-bold text-[#283C32]">{edu.score}</span>
                  </div>
                ) : (
                  <div className="p-2.5 rounded-lg bg-[#F5F3EE] text-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-[#283C32]" />
                  </div>
                )}
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono bg-[#F5F3EE] text-[#171918]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#283C32]" />
                <span>{edu.status}</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#171918]/80 leading-relaxed">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 pt-1 border-t border-[#171918]/8">
                <h4 className="text-xs font-mono text-[#777B76]">
                  Focus areas
                </h4>
                <ul className="space-y-1 text-xs text-[#171918]/80">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#283C32] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#777B76]">
                <MapPin className="w-3.5 h-3.5 text-[#777B76]" />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
