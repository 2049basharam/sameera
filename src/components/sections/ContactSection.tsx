"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 md:px-12 z-10 flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto w-full space-y-10 my-auto">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-[#283C32]">
            06 — Contact
          </span>

          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#171918] font-editorial leading-[1.08]">
            {profileData.contact.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#777B76] leading-relaxed">
            {profileData.contact.subheading}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Email Card */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-xl bg-[#171918] text-[#F5F3EE] space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#A9B7A0]">
                Direct email
              </span>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                Internship inquiries and project discussions
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F3EE]/75 leading-relaxed">
                Open to frontend development internships, code reviews, and discussions on web engineering.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#F5F3EE] text-[#171918] hover:bg-white text-xs font-mono font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#283C32]" />
                <span>Send email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-[#F5F3EE] text-xs font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#A9B7A0]" />
                    <span className="text-[#A9B7A0]">Email copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-xs font-mono text-white/50 pt-2 border-t border-white/10">
              <span>{profileData.email}</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-xl bg-white/90 border border-[#171918]/8 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#777B76]">
                Profiles & contact info
              </span>

              <div className="space-y-2">
                {/* LinkedIn */}
                <a
                  href={profileData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#F5F3EE] hover:bg-[#ECEAE3] text-xs font-mono transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#283C32]" />
                    <span className="text-[#171918]">LinkedIn profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#777B76] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* GitHub */}
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#F5F3EE] hover:bg-[#ECEAE3] text-xs font-mono transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#283C32]" />
                    <span className="text-[#171918]">GitHub profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#777B76] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F3EE] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#283C32]" />
                    <span className="text-[#171918]">{profileData.phone}</span>
                  </div>
                  <span className="text-[#777B76]">Phone</span>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F3EE] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#283C32]" />
                    <span className="text-[#171918]">{profileData.location}</span>
                  </div>
                  <span className="text-[#777B76]">Location</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#283C32]/5 text-xs text-[#283C32] font-mono">
              Available for on-site & remote internship opportunities
            </div>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <div className="max-w-7xl mx-auto w-full pt-12 border-t border-[#171918]/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#777B76]">
        <div>
          <span>© 2026 Shaik Sameera Bhanu</span>
        </div>

        <div>
          <span>Designed & built with Next.js and Three.js</span>
        </div>
      </div>
    </section>
  );
}
