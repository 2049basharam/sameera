"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ProjectItem } from "@/data/projects";
import { createProjectTexture } from "./projectTextures";

interface Project3DCardProps {
  project: ProjectItem;
  index: number;
  total: number;
  isSelected: boolean;
  onSelect: (project: ProjectItem) => void;
  mousePos: { x: number; y: number };
}

export default function Project3DCard({
  project,
  index,
  total,
  isSelected,
  onSelect,
  mousePos,
}: Project3DCardProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Generate the texture once
  const texture = useMemo(() => {
    return createProjectTexture(project);
  }, [project]);

  // Clean up texture when unmounting
  useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);

  // Spatial arrangement: gentle curved architectural arch
  const basePosition = useMemo<[number, number, number]>(() => {
    const spacing = 3.8;
    const offsetIndex = index - (total - 1) / 2;
    const x = offsetIndex * spacing;
    // Slight arching curve
    const z = -Math.pow(offsetIndex, 2) * 0.4;
    const y = 0;
    return [x, y, z];
  }, [index, total]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();

      // Target position
      const hoverZOffset = hovered ? 0.6 : 0;
      const targetX = basePosition[0] + (hovered ? mousePos.x * 0.2 : 0);
      const targetY = basePosition[1] + Math.sin(time * 0.8 + index) * 0.12;
      const targetZ = basePosition[2] + hoverZOffset;

      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.08);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.08);
      meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.08);

      // Target rotation: slight tilt toward center + interactive hover tilt
      const baseRotY = -(index - (total - 1) / 2) * 0.12;
      const hoverRotY = hovered ? mousePos.x * 0.3 : 0;
      const hoverRotX = hovered ? -mousePos.y * 0.2 : 0;

      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, baseRotY + hoverRotY, 0.08);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, hoverRotX, 0.08);

      // Scale transition
      const targetScale = hovered ? 1.05 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const frameColor = hovered ? "#283C32" : "#171918";
  const glowAccent = new THREE.Color(project.palette.accent);

  return (
    <group
      ref={meshRef}
      position={basePosition}
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
        onSelect(project);
      }}
    >
      {/* 3D Browser Chassis Frame */}
      <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 2.05, 0.1]} />
        <meshPhysicalMaterial
          color={frameColor}
          roughness={0.25}
          metalness={0.6}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </mesh>

      {/* Screen Display Plane */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[3.12, 1.95]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Rim Glow Highlight */}
      <mesh position={[0, 0, -0.08]}>
        <planeGeometry args={[3.3, 2.15]} />
        <meshBasicMaterial
          color={glowAccent}
          transparent
          opacity={hovered ? 0.45 : 0.08}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floating Project Identifier Badge */}
      <group position={[0, -1.25, 0.1]}>
        <mesh>
          <planeGeometry args={[2.2, 0.32]} />
          <meshBasicMaterial
            color="#FFFFFF"
            transparent
            opacity={hovered ? 0.95 : 0.8}
          />
        </mesh>
      </group>
    </group>
  );
}
