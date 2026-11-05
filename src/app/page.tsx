"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import LearningJourneySection from "@/components/sections/LearningJourneySection";
import ContactSection from "@/components/sections/ContactSection";
import { projectsData, ProjectItem } from "@/data/projects";
import { SkillItem } from "@/data/skills";

// Dynamically import 3D World Canvas with SSR disabled for optimal WebGL performance
const WorldCanvas = dynamic(() => import("@/components/three/WorldCanvas"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-[#F5F3EE] z-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-6 h-6 rounded-full border border-[#283C32] border-t-transparent animate-spin" />
        <span className="text-xs font-mono text-[#777B76]">
          Loading 3D environment...
        </span>
      </div>
    </div>
  ),
});

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [focusedProjectIndex, setFocusedProjectIndex] = useState<number>(0);

  // Mouse move parallax listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Section observer & scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const progress = totalScroll > 0 ? current / totalScroll : 0;
      setScrollProgress(progress);

      const sections = ["hero", "about", "skills", "projects", "education", "learning", "contact"];
      const scrollPos = current + window.innerHeight * 0.4;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth navigation to target section
  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Project Gallery Navigation
  const handleNextProject = () => {
    setFocusedProjectIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrevProject = () => {
    setFocusedProjectIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <main className="relative min-h-screen bg-[#F5F3EE] text-[#171918] selection:bg-[#283C32] selection:text-[#F5F3EE]">
      {/* 3D WebGL Canvas Layer (Persistent Background) */}
      <WorldCanvas
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        mousePos={mousePos}
        onSelectSkill={(skill) => setSelectedSkill(skill)}
        selectedSkillId={selectedSkill?.id}
        focusedProjectIndex={focusedProjectIndex}
      />

      {/* Foreground Interactive Content */}
      <div className="relative z-10">
        <Navigation
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        <HeroSection
          onExplore={() => handleNavigate("projects")}
          onDiscover={() => handleNavigate("about")}
        />

        <AboutSection />

        <SkillsSection
          selectedSkill={selectedSkill}
          onSelectSkill={(skill) => setSelectedSkill(skill)}
          onCloseSkill={() => setSelectedSkill(null)}
        />

        <ProjectsSection
          selectedProject={selectedProject}
          focusedIndex={focusedProjectIndex}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onCloseProject={() => setSelectedProject(null)}
          onNextProject={handleNextProject}
          onPrevProject={handlePrevProject}
          onFocusIndex={(idx) => setFocusedProjectIndex(idx)}
        />

        <EducationSection />

        <LearningJourneySection />

        <ContactSection />
      </div>
    </main>
  );
}
