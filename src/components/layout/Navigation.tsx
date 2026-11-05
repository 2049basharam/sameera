"use client";

import React, { useState, useEffect } from "react";
import { Download, ArrowUpRight, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Overview" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "learning", label: "Learning" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "py-3 bg-[#F5F3EE]/90 backdrop-blur-md border-b border-[#171918]/8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Identity & Status */}
          <button
            onClick={() => onNavigate("hero")}
            className="group flex flex-col items-start text-left focus:outline-none"
          >
            <span className="text-xs font-mono font-medium text-[#171918] group-hover:text-[#283C32] transition-colors">
              {profileData.fullName}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#283C32]" />
              <span className="text-[11px] font-mono text-[#777B76]">
                Open for internships
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#ECEAE3]/80 p-1 rounded-full border border-[#171918]/8 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3.5 py-1 text-xs font-mono rounded-full transition-colors ${
                    isActive
                      ? "bg-[#171918] text-[#F5F3EE]"
                      : "text-[#171918]/70 hover:text-[#171918] hover:bg-[#F5F3EE]/70"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions & Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="./sameera-resume.pdf"
              download="Shaik_Sameera_Bhanu_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-[#171918] bg-white border border-[#171918]/10 rounded-full hover:bg-[#171918] hover:text-[#F5F3EE] transition-colors shadow-none"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-mono text-[#F5F3EE] bg-[#283C32] hover:bg-[#1C2A23] rounded-full transition-colors"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171918] hover:bg-[#ECEAE3] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-[#F5F3EE] flex flex-col justify-center px-8 py-20">
          <nav className="flex flex-col gap-4 text-center">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-base font-mono text-[#171918] hover:text-[#283C32] transition-colors"
              >
                <span className="text-xs text-[#777B76] mr-2">0{idx + 1}</span>
                {item.label}
              </button>
            ))}

            <div className="pt-6 border-t border-[#171918]/10 flex flex-col gap-3 mt-4">
              <a
                href="./sameera-resume.pdf"
                download="Shaik_Sameera_Bhanu_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-[#171918] bg-white border border-[#171918]/10 rounded-full"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => {
                  onNavigate("contact");
                  setMobileMenuOpen(false);
                }}
                className="inline-flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-[#F5F3EE] bg-[#283C32] rounded-full"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
