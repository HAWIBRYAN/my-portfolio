import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function Box({ position, width = 4, length = 4, cornerRadius = 0.3, gridPosition, hoveredBox }) {
  const meshRef = useRef();
  const baseY = position[1]; // remember original y

  // store grid position on the mesh for raycasting
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.userData.gridPosition = gridPosition;
    }
  }, [gridPosition]);

  useFrame(() => {
    if (!meshRef.current) return;

    const isHovered =
      hoveredBox &&
      gridPosition[0] === hoveredBox[0] &&
      gridPosition[1] === hoveredBox[1];

    const targetY = isHovered ? baseY + 1.5 : baseY;

    // animate raise smoothly
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY,
      0.15
    );
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[width, 0.5, length]} />
      <meshStandardMaterial
        color="#4fc3f7"
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function HoverDetector({ onHoverChange }) {
  const { camera, raycaster, pointer, scene } = useThree();

  useFrame(() => {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      for (const intersect of intersects) {
        const mesh = intersect.object;
        if (mesh.userData && mesh.userData.gridPosition) {
          const gridPos = mesh.userData.gridPosition;
          onHoverChange(gridPos);
          return;
        }
      }
    }
    onHoverChange(null);
  });

  return null;
}

export function ChromeGrid() {
  const [hoveredBox, setHoveredBox] = useState(null);

  // create grid positions
  const grid = [];
  const rows = 6;
  const cols = 6;
  const spacing = 5;

  for (let x = 0; x < rows; x++) {
    for (let z = 0; z < cols; z++) {
      grid.push([x * spacing, -0.85, z * spacing]);
    }
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [15, 25, 35], fov: 40 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1.2} />

        {grid.map((pos, i) => (
          <Box
            key={i}
            position={pos}
            gridPosition={[Math.floor(i / cols), i % cols]}
            hoveredBox={hoveredBox}
          />
        ))}

        <HoverDetector onHoverChange={setHoveredBox} />
      </Canvas>
    </div>
  );
}

