"use client";

import React, { useState } from "react";
import { Check, Clock, ChevronRight, X, Info } from "lucide-react";
import { skillsData, SkillItem } from "@/data/skills";

interface SkillsSectionProps {
  selectedSkill: SkillItem | null;
  onSelectSkill: (skill: SkillItem) => void;
  onCloseSkill: () => void;
}

export default function SkillsSection({
  selectedSkill,
  onSelectSkill,
  onCloseSkill,
}: SkillsSectionProps) {
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All skills" },
    { id: "frontend", label: "Frontend" },
    { id: "tools", label: "Tools" },
    { id: "ai", label: "AI workflows" },
    { id: "languages", label: "Systems & C++" },
    { id: "foundations", label: "Foundations" },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    if (filterCategory === "all") return true;
    return skill.category === filterCategory;
  });

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 md:px-12 z-10 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#171918]/8 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#283C32]">
              02 — Technical Skills
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#171918] font-editorial leading-tight">
              Technical Foundations & Stack
            </h2>
            <p className="text-sm text-[#777B76] max-w-xl">
              Core frontend foundations alongside active learning in React.js, C++, and Data Structures.
            </p>
          </div>

          <div className="text-xs font-mono text-[#777B76]">
            Select any item to inspect details
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilterCategory(c.id)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                filterCategory === c.id
                  ? "bg-[#171918] text-[#F5F3EE]"
                  : "bg-white/80 text-[#171918]/70 hover:text-[#171918] hover:bg-white border border-[#171918]/8"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.id === skill.id;
            const isLearning = skill.status === "learning";

            return (
              <div
                key={skill.id}
                onClick={() => onSelectSkill(skill)}
                className={`p-5 rounded-2xl cursor-pointer transition-colors border ${
                  isSelected
                    ? "bg-[#171918] text-[#F5F3EE] border-[#171918]"
                    : "bg-white/90 hover:bg-white text-[#171918] border-[#171918]/8 hover:border-[#171918]/20"
                }`}
              >
                {/* Status Indicator */}
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono ${
                      isLearning
                        ? isSelected
                          ? "bg-white/10 text-[#A9B7A0]"
                          : "bg-[#283C32]/8 text-[#283C32]"
                        : isSelected
                        ? "bg-white/10 text-white"
                        : "bg-[#171918]/5 text-[#777B76]"
                    }`}
                  >
                    {isLearning ? (
                      <Clock className="w-3 h-3" />
                    ) : (
                      <Check className="w-3 h-3" />
                    )}
                    <span>{skill.statusLabel}</span>
                  </span>

                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-semibold tracking-tight">
                  {skill.name}
                </h3>
                <p
                  className={`text-xs font-mono mt-0.5 ${
                    isSelected ? "text-[#CAD4C3]" : "text-[#777B76]"
                  }`}
                >
                  {skill.highlight}
                </p>

                {/* Short Description */}
                <p
                  className={`text-xs mt-2.5 line-clamp-2 leading-relaxed ${
                    isSelected ? "text-[#F5F3EE]/80" : "text-[#171918]/70"
                  }`}
                >
                  {skill.description}
                </p>

                {/* Category label */}
                <div
                  className={`mt-3.5 flex items-center justify-between pt-2.5 border-t text-[11px] font-mono ${
                    isSelected ? "border-white/10 text-[#A9B7A0]" : "border-[#171918]/5 text-[#777B76]"
                  }`}
                >
                  <span>{skill.categoryLabel}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Skill Inspector Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-lg w-full bg-white rounded-2xl border border-[#171918]/10 p-6 md:p-8 space-y-5 relative">
            <button
              onClick={onCloseSkill}
              className="absolute top-5 right-5 p-1.5 rounded-lg hover:bg-[#F5F3EE] text-[#171918] transition-colors"
              aria-label="Close inspector"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-[#777B76]">
                {selectedSkill.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-[#171918]">
                {selectedSkill.name}
              </h3>
              <p className="text-xs font-mono text-[#283C32]">
                {selectedSkill.statusLabel}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F3EE] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#171918] font-medium">
                <Info className="w-3.5 h-3.5 text-[#283C32]" />
                <span>Technical context</span>
              </div>
              <p className="text-xs text-[#171918]/80 leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            <div className="space-y-0.5">
              <span className="text-xs font-mono text-[#777B76]">
                Primary highlight
              </span>
              <p className="text-sm font-medium text-[#171918]">
                {selectedSkill.highlight}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={onCloseSkill}
                className="px-4 py-2 rounded-full bg-[#171918] text-[#F5F3EE] text-xs font-mono hover:bg-[#283C32] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
