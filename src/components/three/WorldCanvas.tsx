"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import HeroSculpture from "./HeroSculpture";
import ParticleField from "./ParticleField";
import SkillsConstellation from "./SkillsConstellation";
import CameraController from "./CameraController";
import { SkillItem } from "@/data/skills";

interface WorldCanvasProps {
  activeSection: string;
  scrollProgress: number;
  mousePos: { x: number; y: number };
  onSelectSkill: (skill: SkillItem) => void;
  selectedSkillId?: string;
  focusedProjectIndex?: number;
}

export default function WorldCanvas({
  activeSection,
  scrollProgress,
  mousePos,
  onSelectSkill,
  selectedSkillId,
  focusedProjectIndex,
}: WorldCanvasProps) {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
      setHasWebGL(gl);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#F5F3EE] opacity-50 bg-grain" />
    );
  }

  // Render 3D elements appropriately per section
  const showHero = activeSection === "hero" || activeSection === "about" || activeSection === "contact";
  const showSkills = activeSection === "skills";

  return (
    <div className="fixed inset-0 pointer-events-auto z-0 overflow-hidden">
      <Canvas
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        camera={{ position: [0, 0, 7.2], fov: 45, near: 0.1, far: 50 }}
        style={{ pointerEvents: "auto" }}
      >
        <Suspense fallback={null}>
          <CameraController
            activeSection={activeSection}
            scrollProgress={scrollProgress}
            mousePos={mousePos}
            focusedProjectIndex={focusedProjectIndex}
          />

          {/* Architectural Cinematic Lighting Scheme */}
          <ambientLight intensity={1.1} color="#F5F3EE" />
          
          <directionalLight
            position={[6, 8, 5]}
            intensity={2.2}
            color="#FFF8EE"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={0.5}
            shadow-camera-far={25}
            shadow-camera-left={-8}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-bottom={-8}
            shadow-bias={-0.0001}
          />

          {/* Forest Green Architectural Rim Light */}
          <directionalLight
            position={[-6, -4, -3]}
            intensity={1.8}
            color="#283C32"
          />

          {/* Warm Accent Point Light */}
          <pointLight
            position={[0, 2, 4]}
            intensity={1.2}
            color="#D4C8B5"
            distance={15}
          />

          {/* Atmospheric Particle Constellation */}
          <ParticleField count={180} mousePos={mousePos} />

          {/* 1. Hero & About & Finale Architectural Sculpture */}
          {showHero && (
            <group visible={showHero}>
              <HeroSculpture
                scrollProgress={scrollProgress}
                mousePos={mousePos}
              />
            </group>
          )}

          {/* 2. Interactive Skills 3D Constellation */}
          {showSkills && (
            <group visible={showSkills}>
              <SkillsConstellation
                onSelectSkill={onSelectSkill}
                selectedSkillId={selectedSkillId}
                mousePos={mousePos}
              />
            </group>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
