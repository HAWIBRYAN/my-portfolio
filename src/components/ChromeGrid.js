// ChromeGrid.js
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ---- Box Component ----
function Box({ position, gridPosition, hoveredBox }) {
  const meshRef = useRef();

  // Tag this mesh so raycaster can identify it
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.userData.gridPosition = gridPosition;
    }
  }, [gridPosition]);

  useFrame(() => {
    if (!meshRef.current) return;

    // Is this the hovered box?
    const isHovered =
      hoveredBox &&
      hoveredBox[0] === gridPosition[0] &&
      hoveredBox[1] === gridPosition[1];

    // Target Y position (raise on hover)
    const targetY = isHovered ? 0.3 : 0;

    // Smoothly move toward target
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY,
      0.1
    );
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial color={"#00aaff"} />
    </mesh>
  );
}

// ---- Hover Detector ----
function HoverDetector({ onHoverChange }) {
  const { camera, raycaster, pointer, scene } = useThree();

  useFrame(() => {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const mesh = intersects[0].object;
      if (mesh.userData && mesh.userData.gridPosition) {
        onHoverChange(mesh.userData.gridPosition);
        return;
      }
    }
    onHoverChange(null);
  });

  return null;
}

// ---- ChromeGrid ----
export default function ChromeGrid() {
  const [hoveredBox, setHoveredBox] = useState(null);
  const gridSize = 5;

  return (
    <div className="h-full w-full fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 5, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />

        <HoverDetector onHoverChange={setHoveredBox} />

        {Array.from({ length: gridSize }).map((_, i) =>
          Array.from({ length: gridSize }).map((_, j) => (
            <Box
              key={`${i}-${j}`}
              position={[i - gridSize / 2, 0, j - gridSize / 2]}
              gridPosition={[i, j]}
              hoveredBox={hoveredBox}
            />
          ))
        )}
      </Canvas>
    </div>
  );
}


