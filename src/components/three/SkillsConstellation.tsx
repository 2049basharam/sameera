"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SkillItem, skillsData } from "@/data/skills";

interface SkillsConstellationProps {
  onSelectSkill: (skill: SkillItem) => void;
  selectedSkillId?: string;
  mousePos: { x: number; y: number };
}

function SkillNode({
  skill,
  isSelected,
  onSelect,
  mousePos
}: {
  skill: SkillItem;
  isSelected: boolean;
  onSelect: (skill: SkillItem) => void;
  mousePos: { x: number; y: number };
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Calculate orbital position
      const angle = skill.initialAngle + time * skill.orbitSpeed * 0.3;
      const x = Math.cos(angle) * skill.orbitRadius;
      const z = Math.sin(angle) * skill.orbitRadius;
      const y = skill.elevation + Math.sin(time * 0.8 + skill.initialAngle) * 0.2;

      meshRef.current.position.set(x, y, z);
      
      // Node self-rotation
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.rotation.x = Math.sin(time + skill.initialAngle) * 0.3;

      // Scale transition on hover/select
      const targetScale = isSelected ? 1.6 : hovered ? 1.4 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const nodeColor = new THREE.Color(skill.color);

  return (
    <group
      ref={meshRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(skill);
      }}
    >
      {/* Outer Glow Halo Ring */}
      <mesh>
        <ringGeometry args={[0.34, 0.42, 32]} />
        <meshBasicMaterial
          color={nodeColor}
          transparent
          opacity={hovered || isSelected ? 0.9 : 0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Main 3D Skill Object */}
      <mesh castShadow>
        {skill.category === "frontend" ? (
          <icosahedronGeometry args={[0.26, 0]} />
        ) : skill.category === "tools" ? (
          <boxGeometry args={[0.34, 0.34, 0.34]} />
        ) : skill.category === "ai" ? (
          <dodecahedronGeometry args={[0.28, 0]} />
        ) : (
          <octahedronGeometry args={[0.3, 0]} />
        )}
        <meshPhysicalMaterial
          color={hovered || isSelected ? "#FFFFFF" : skill.color}
          emissive={nodeColor}
          emissiveIntensity={hovered || isSelected ? 0.6 : 0.2}
          roughness={0.2}
          metalness={0.6}
          clearcoat={0.8}
        />
      </mesh>

      {/* Pulsing Core Particle */}
      <mesh scale={0.12}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
}

export default function SkillsConstellation({
  onSelectSkill,
  selectedSkillId,
  mousePos,
}: SkillsConstellationProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      // Gentle global constellation tilt & responsive mouse parallax
      groupRef.current.rotation.y = time * 0.04 + mousePos.x * 0.2;
      groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.08 + mousePos.y * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Nexus Orb */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhysicalMaterial
          color="#283C32"
          emissive="#283C32"
          emissiveIntensity={0.2}
          roughness={0.15}
          metalness={0.85}
          clearcoat={1.0}
        />
      </mesh>

      <mesh scale={1.1}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color="#A9B7A0"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Orbit Guidance Rings */}
      {[3.2, 3.8, 4.5, 5.2, 5.8].map((radius, idx) => (
        <mesh key={idx} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius - 0.01, radius + 0.01, 80]} />
          <meshBasicMaterial
            color="#A9B7A0"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Orbital Technology Nodes */}
      {skillsData.map((skill) => (
        <SkillNode
          key={skill.id}
          skill={skill}
          isSelected={selectedSkillId === skill.id}
          onSelect={onSelectSkill}
          mousePos={mousePos}
        />
      ))}
    </group>
  );
}
