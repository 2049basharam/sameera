"use client";

import React, { useState } from "react";
import {
  Video,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
  ExternalLink,
  Film
} from "lucide-react";
import { projectsData, featuredReel, ProjectItem } from "@/data/projects";

interface ProjectsSectionProps {
  selectedProject: ProjectItem | null;
  focusedIndex: number;
  onSelectProject: (project: ProjectItem) => void;
  onCloseProject: () => void;
  onNextProject: () => void;
  onPrevProject: () => void;
  onFocusIndex: (index: number) => void;
}

export default function ProjectsSection({
  selectedProject,
  focusedIndex,
  onSelectProject,
  onCloseProject,
  onNextProject,
  onPrevProject,
  onFocusIndex,
}: ProjectsSectionProps) {
  const activeProj = projectsData[focusedIndex] || projectsData[0];
  const [showReelModal, setShowReelModal] = useState(false);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 md:px-12 z-10 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#171918]/8 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#283C32]">
              03 — Selected Projects & Live Demos
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#171918] font-editorial leading-tight">
              Ideas made tangible
            </h2>
            <p className="text-sm text-[#777B76] max-w-xl">
              Five web development projects featuring embedded recorded video demonstrations from Google Drive.
            </p>
          </div>

          {/* Controls & Reel Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowReelModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-[#171918] border border-[#171918]/10 hover:bg-[#171918] hover:text-white text-xs font-mono transition-colors shadow-none"
            >
              <Film className="w-3.5 h-3.5 text-[#283C32]" />
              <span>Full reel (0:37)</span>
            </button>

            <div className="flex items-center gap-1.5 pl-2 border-l border-[#171918]/10">
              <button
                onClick={onPrevProject}
                className="p-2 rounded-full bg-white border border-[#171918]/10 hover:bg-[#171918] hover:text-white transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-[#171918] px-2">
                0{focusedIndex + 1} / 0{projectsData.length}
              </span>

              <button
                onClick={onNextProject}
                className="p-2 rounded-full bg-white border border-[#171918]/10 hover:bg-[#171918] hover:text-white transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Project Card */}
        <div className="relative rounded-2xl bg-white border border-[#171918]/8 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Browser Frame with Video IFRAME */}
            <div
              className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between relative transition-colors duration-300"
              style={{ backgroundColor: activeProj.preview.accentBg }}
            >
              {/* Browser Header Bar */}
              <div className="w-full flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="ml-3 font-mono text-xs text-white/50 tracking-wide">
                    sameera.dev/{activeProj.id}
                  </span>
                </div>

                <span className="text-xs font-mono text-white/70 bg-white/10 px-3 py-1 rounded-md">
                  {activeProj.preview.mockupType}
                </span>
              </div>

              {/* Embedded Video IFRAME Container */}
              <div className="my-auto py-4">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-lg">
                  <iframe
                    key={activeProj.id}
                    src={activeProj.drivePreviewUrl}
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    title={`${activeProj.title} Video Preview`}
                  />
                </div>
              </div>

              {/* Browser Bottom Footer */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {activeProj.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-white/10 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(activeProj)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#171918] hover:bg-[#F5F3EE] text-xs font-mono font-medium transition-colors shadow-sm"
                >
                  <span>Case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Project Details Sidebar */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#777B76]">
                    Project {activeProj.number}
                  </span>
                  <span className="text-xs font-mono text-[#283C32] font-medium">
                    {activeProj.technologies.join(" • ")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#171918]">
                  {activeProj.title}
                </h3>
                <p className="text-xs font-mono text-[#777B76]">
                  {activeProj.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#171918]/80 leading-relaxed">
                  {activeProj.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-mono text-[#777B76]">
                    Key highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#171918]/80">
                    {activeProj.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#283C32] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#171918]/8 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onSelectProject(activeProj)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#171918] text-white hover:bg-[#283C32] text-xs font-mono transition-colors"
                >
                  <span>Architecture details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={activeProj.driveVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#F5F3EE] hover:bg-[#ECEAE3] text-[#171918] text-xs font-mono border border-[#171918]/10 transition-colors"
                >
                  <Video className="w-3.5 h-3.5 text-[#283C32]" />
                  <span>Open in Drive</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {projectsData.map((proj, idx) => {
            const isCurrent = focusedIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => onFocusIndex(idx)}
                className={`p-3.5 rounded-xl text-left transition-colors border ${
                  isCurrent
                    ? "bg-[#171918] text-white border-[#171918]"
                    : "bg-white hover:bg-[#ECEAE3] text-[#171918] border-[#171918]/8"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono ${
                      isCurrent ? "text-[#A9B7A0]" : "text-[#777B76]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-[10px] font-mono ${
                      isCurrent ? "text-white/60" : "text-[#777B76]"
                    }`}
                  >
                    {proj.videoDuration}
                  </span>
                </div>
                <h4 className="text-xs font-semibold mt-1 truncate">
                  {proj.title}
                </h4>
                <p
                  className={`text-[11px] font-mono truncate mt-0.5 ${
                    isCurrent ? "text-white/60" : "text-[#777B76]"
                  }`}
                >
                  {proj.technologies[0]}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Full Reel Walkthrough Modal with IFRAME */}
      {showReelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          <div className="max-w-3xl w-full bg-[#171918] text-white rounded-2xl border border-white/10 p-6 space-y-4 relative">
            <button
              onClick={() => setShowReelModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1 pr-8">
              <span className="text-xs font-mono text-[#A9B7A0]">
                Extended Demo Walkthrough
              </span>
              <h3 className="text-xl font-medium">
                {featuredReel.title}
              </h3>
              <p className="text-xs font-mono text-white/60">
                {featuredReel.tagline} • Duration: {featuredReel.duration}
              </p>
            </div>

            <div className="aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
              <iframe
                src={featuredReel.drivePreviewUrl}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title="Full Reel Walkthrough"
              />
            </div>

            <div className="flex items-center justify-between pt-2 text-xs font-mono text-white/60">
              <a
                href={featuredReel.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white"
              >
                <span>Google Drive source</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => setShowReelModal(false)}
                className="px-4 py-1.5 rounded-full bg-white text-[#171918] hover:bg-[#ECEAE3] transition-colors"
              >
                Close reel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal with Embedded IFRAME */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto">
          <div className="max-w-2xl w-full bg-white rounded-2xl border border-[#171918]/10 p-6 sm:p-8 my-8 space-y-6 relative">
            <button
              onClick={onCloseProject}
              className="absolute top-5 right-5 p-1.5 rounded-lg hover:bg-[#F5F3EE] text-[#171918] transition-colors"
              aria-label="Close case study"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#777B76]">
                <span className="text-[#283C32] font-medium">Project {selectedProject.number}</span>
                <span>/</span>
                <span>{selectedProject.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#171918]">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-[#777B76]">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Embedded Video in Case Study Modal */}
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#171918]/10 shadow-sm">
              <iframe
                src={selectedProject.drivePreviewUrl}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title={`${selectedProject.title} Demo`}
              />
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#283C32]/8 text-[#283C32]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Architecture Overview */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#F5F3EE] space-y-1.5">
                <span className="text-xs font-mono text-[#171918] font-medium block">
                  Implementation architecture
                </span>
                <p className="text-xs text-[#171918]/80 leading-relaxed">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#777B76] block">
                  Implemented features
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-[#171918]/8 text-xs text-[#171918]/80"
                    >
                      <Check className="w-3.5 h-3.5 text-[#283C32] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#171918]/8 flex flex-wrap items-center justify-between gap-3">
              <div>
                <a
                  href={selectedProject.driveVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#283C32] text-white hover:bg-[#1C2A23] text-xs font-mono transition-colors"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Open in Google Drive</span>
                </a>
              </div>

              <button
                onClick={onCloseProject}
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
