"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraControllerProps {
  activeSection: string;
  scrollProgress: number;
  mousePos: { x: number; y: number };
  focusedProjectId?: string;
  focusedProjectIndex?: number;
}

export default function CameraController({
  activeSection,
  scrollProgress,
  mousePos,
  focusedProjectIndex,
}: CameraControllerProps) {
  const { camera } = useThree();
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    let targetPos = new THREE.Vector3(0, 0, 7.2);
    let lookAt = new THREE.Vector3(0, 0, 0);

    // Section-based cinematic camera choreography
    switch (activeSection) {
      case "hero":
        targetPos.set(
          mousePos.x * 0.8,
          mousePos.y * 0.6,
          7.2 - scrollProgress * 1.5
        );
        lookAt.set(0, 0, 0);
        break;

      case "about":
        // Offset camera to give room for editorial text
        targetPos.set(
          1.8 + mousePos.x * 0.5,
          -0.2 + mousePos.y * 0.4,
          6.0
        );
        lookAt.set(-0.8, 0, 0);
        break;

      case "skills":
        // Elevated perspective looking down on the constellation
        targetPos.set(
          mousePos.x * 1.2,
          1.6 + mousePos.y * 0.6,
          8.5
        );
        lookAt.set(0, 0.2, 0);
        break;

      case "projects":
        targetPos.set(
          mousePos.x * 0.4,
          mousePos.y * 0.3,
          7.2
        );
        lookAt.set(0, 0, 0);
        break;

      case "education":
      case "learning":
        targetPos.set(
          -1.4 + mousePos.x * 0.6,
          -0.4 + mousePos.y * 0.4,
          6.8
        );
        lookAt.set(0.6, 0, 0);
        break;

      case "contact":
        targetPos.set(
          mousePos.x * 0.6,
          0.8 + mousePos.y * 0.4,
          6.4
        );
        lookAt.set(0, 0.2, 0);
        break;

      default:
        targetPos.set(0, 0, 7.2);
        lookAt.set(0, 0, 0);
        break;
    }

    // Smooth lerp camera position
    camera.position.lerp(targetPos, 0.05);

    // Smooth lerp lookAt vector
    targetLookAt.current.copy(lookAt);
    currentLookAt.current.lerp(targetLookAt.current, 0.05);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
