"use client";

import React from "react";
import { Check } from "lucide-react";
import { learningJourneyData } from "@/data/skills";

export default function LearningJourneySection() {
  return (
    <section
      id="learning"
      className="relative min-h-screen py-24 px-6 md:px-12 z-10 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl border-b border-[#171918]/8 pb-6">
          <span className="text-xs font-mono text-[#283C32]">
            05 — Technical Progression
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#171918] font-editorial leading-tight">
            Growing one project at a time
          </h2>
          <p className="text-sm text-[#777B76]">
            Documented progression across component frameworks, systems programming, and algorithmic problem solving.
          </p>
        </div>

        {/* Pathway List */}
        <div className="space-y-4">
          {learningJourneyData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white/90 border border-[#171918]/8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Step Header */}
                <div className="lg:col-span-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="font-semibold text-[#283C32]">
                      Stage {idx + 1}
                    </span>
                    <span className="text-[#777B76]">/</span>
                    <span className="text-[#777B76]">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#171918]">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-[#283C32]">
                    {item.focus}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-4 text-xs sm:text-sm text-[#171918]/80 leading-relaxed">
                  <p>{item.description}</p>
                </div>

                {/* Milestones */}
                <div className="lg:col-span-4 space-y-1.5">
                  <span className="text-xs font-mono text-[#777B76] block">
                    Active milestones
                  </span>
                  <ul className="space-y-1 text-xs text-[#171918]/80">
                    {item.milestones.map((ms, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#283C32] mt-0.5 shrink-0" />
                        <span>{ms}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
