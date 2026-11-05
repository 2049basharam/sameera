"use client";

import React from "react";
import { Check, Globe, User, MapPin } from "lucide-react";
import { profileData } from "@/data/profile";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-6 md:px-12 flex items-center z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#283C32]">
              01 — About Sameera
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#171918] font-editorial leading-tight">
              {profileData.about.heading}
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#171918]/80 leading-relaxed font-normal">
            {profileData.about.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={idx === 0 ? "text-lg sm:text-xl font-normal text-[#171918]" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Location & Focus Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-[#171918]/8">
              <MapPin className="w-4 h-4 text-[#283C32] mt-0.5" />
              <div>
                <p className="text-xs font-mono text-[#777B76]">Location</p>
                <p className="text-sm font-medium text-[#171918]">{profileData.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-[#171918]/8">
              <User className="w-4 h-4 text-[#283C32] mt-0.5" />
              <div>
                <p className="text-xs font-mono text-[#777B76]">Focus</p>
                <p className="text-sm font-medium text-[#171918]">Frontend Architecture</p>
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-mono text-[#777B76]">
              Strengths and approach
            </h3>
            <div className="flex flex-wrap gap-2">
              {profileData.about.strengths.map((str, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white border border-[#171918]/8 text-[#171918]"
                >
                  <Check className="w-3.5 h-3.5 text-[#283C32]" />
                  <span>{str}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Candidate Profile Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-[#171918]/8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#171918]/8">
              <div>
                <span className="text-xs font-mono text-[#777B76]">Candidate profile</span>
                <h4 className="text-lg font-medium text-[#171918]">{profileData.fullName}</h4>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#283C32]" />
            </div>

            {/* Languages */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#171918]">
                <Globe className="w-3.5 h-3.5 text-[#283C32]" />
                <span>Languages</span>
              </div>
              <div className="space-y-1.5">
                {profileData.about.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#F5F3EE] text-xs"
                  >
                    <span className="font-medium text-[#171918]">{lang.name}</span>
                    <span className="text-[#777B76] font-mono">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objective */}
            <div className="p-3.5 rounded-xl bg-[#283C32]/5 border border-[#283C32]/10 space-y-1">
              <span className="text-xs font-mono text-[#283C32] font-medium">
                Current objective
              </span>
              <p className="text-xs text-[#171918]/80 leading-relaxed">
                Seeking a frontend development internship to contribute to real-world projects, learn industry workflows, and grow alongside an engineering team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
