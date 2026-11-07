"use client";

import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

interface HeroSectionProps {
  onExplore: () => void;
  onDiscover: () => void;
}

export default function HeroSection({ onExplore, onDiscover }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 pointer-events-none"
    >
      {/* Top Header Label */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-[#777B76]">
          <span className="text-[#283C32] font-medium">{profileData.hero.yearLabel}</span>
          <span>/</span>
          <span>First-year B.Tech</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#777B76]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#283C32]" />
          <span>Interactive 3D canvas</span>
        </div>
      </div>

      {/* Hero Central Content */}
      <div className="max-w-5xl mx-auto w-full my-auto py-8">
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/90 border border-[#171918]/8 pointer-events-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#283C32]" />
            <span className="text-xs font-mono text-[#171918]">
              {profileData.status}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#171918] leading-[1.08] font-editorial max-w-4xl">
            {profileData.hero.headline}
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#777B76] font-normal leading-relaxed max-w-2xl">
            {profileData.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3 pointer-events-auto">
            <button
              onClick={onExplore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#171918] text-[#F5F3EE] hover:bg-[#283C32] rounded-lg text-xs font-mono transition-colors"
            >
              <span>Explore projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onDiscover}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#ECEAE3] text-[#171918] rounded-lg text-xs font-mono border border-[#171918]/10 transition-colors"
            >
              <span>About my journey</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Footer Meta & Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-[#171918]/8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pointer-events-auto">
        <div className="space-y-0.5">
          <p className="text-xs font-mono text-[#171918]">
            {profileData.hero.identityLine}
          </p>
          <p className="text-xs font-mono text-[#777B76]">
            Vishnu Women&apos;s University, Andhra Pradesh
          </p>
        </div>

        <button
          onClick={onDiscover}
          className="group inline-flex items-center gap-1.5 text-xs font-mono text-[#777B76] hover:text-[#171918] transition-colors focus:outline-none"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
