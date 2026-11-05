"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  mousePos: { x: number; y: number };
}

export default function ParticleField({ count = 180, mousePos }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, scales, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    const col = new Float32Array(count * 3);

    // Architectural color palette: forest green, warm sage, alabaster, soft gold
    const colorPalette = [
      new THREE.Color("#283C32"), // forest
      new THREE.Color("#A9B7A0"), // sage
      new THREE.Color("#E8E4DA"), // alabaster
      new THREE.Color("#8A9A86"), // muted forest
    ];

    for (let i = 0; i < count; i++) {
      // Spatial volume distribution
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;

      sc[i] = Math.random() * 0.08 + 0.02;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, sc, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      pointsRef.current.rotation.y = time * 0.02 + mousePos.x * 0.08;
      pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.04 + mousePos.y * 0.05;
      
      // Gentle floating drift
      pointsRef.current.position.y = Math.sin(time * 0.2) * 0.15;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        blending={THREE.NormalBlending}
      />
    </points>
  );
}
