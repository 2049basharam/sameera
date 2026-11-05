"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface HeroSculptureProps {
  scrollProgress: number;
  mousePos: { x: number; y: number };
}

export default function HeroSculpture({ scrollProgress, mousePos }: HeroSculptureProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const shardsGroupRef = useRef<THREE.Group>(null);

  // Generate parametric architectural floating shards
  const shards = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      const angle = (i / 18) * Math.PI * 2;
      const radius = 2.4 + (i % 3) * 0.5;
      const y = (Math.random() - 0.5) * 2.2;
      return {
        id: i,
        position: [
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ] as [number, number, number],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
        scale: 0.12 + Math.random() * 0.18,
        speed: 0.4 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smooth interpolation for mouse parallax and scroll position
      const targetX = mousePos.x * 0.4;
      const targetY = mousePos.y * 0.3 - scrollProgress * 3.5;
      const targetRotY = time * 0.12 + mousePos.x * 0.6 + scrollProgress * Math.PI;
      const targetRotX = mousePos.y * 0.3 + scrollProgress * 0.5;

      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);

      // Subtle breathing scale
      const breath = 1 + Math.sin(time * 0.8) * 0.03;
      groupRef.current.scale.set(breath, breath, breath);
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.15;
      coreRef.current.rotation.z = Math.sin(time * 0.2) * 0.2;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.2;
      ring1Ref.current.rotation.y = time * 0.25;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.18;
      ring2Ref.current.rotation.z = time * 0.15;
    }

    if (shardsGroupRef.current) {
      shardsGroupRef.current.children.forEach((child, idx) => {
        const shard = shards[idx];
        if (shard) {
          child.position.y = shard.position[1] + Math.sin(time * shard.speed + shard.phase) * 0.2;
          child.rotation.x += delta * 0.2 * shard.speed;
          child.rotation.y += delta * 0.3 * shard.speed;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Architectural Sculpture Core */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.2, 0.36, 160, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#FAF8F5"
          emissive="#283C32"
          emissiveIntensity={0.06}
          roughness={0.2}
          metalness={0.15}
          clearcoat={0.9}
          clearcoatRoughness={0.15}
          reflectivity={0.9}
        />
      </mesh>

      {/* Internal Crystalline Core Accent */}
      <mesh scale={0.65}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#283C32"
          roughness={0.3}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>

      {/* Primary Orbital Architectural Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.1, 0.025, 24, 100]} />
        <meshStandardMaterial
          color="#A9B7A0"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Secondary Orbital Architectural Ring */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.018, 24, 100]} />
        <meshStandardMaterial
          color="#D4C8B5"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Floating Architectural Shards */}
      <group ref={shardsGroupRef}>
        {shards.map((s) => (
          <mesh
            key={s.id}
            position={s.position}
            rotation={s.rotation}
            scale={s.scale}
            castShadow
          >
            <octahedronGeometry args={[1, 0]} />
            <meshPhysicalMaterial
              color="#F0EDE4"
              roughness={0.3}
              metalness={0.3}
              clearcoat={0.7}
              transmission={0.4}
              ior={1.4}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
