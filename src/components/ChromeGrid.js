'use client'

import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ExtrudeGeometry, Shape } from 'three'

// Box component
const Box = ({
  position,
  width = 4,
  length = 4,
  cornerRadius = 2,
  gridPosition,
  hoveredBox,
  rippleScale = 0.3,
  rippleRadius = 3,
}) => {
  const meshRef = useRef(null)
  const [currentScale, setCurrentScale] = useState(1)

  const geometry = useMemo(() => {
    const shape = new Shape()
    const angleStep = Math.PI * 0.5
    const radius = cornerRadius

    const halfWidth = width / 2
    const halfLength = length / 2

    shape.absarc(halfWidth - radius, halfLength - radius, radius, angleStep * 0, angleStep * 1)
    shape.absarc(-halfWidth + radius, halfLength - radius, radius, angleStep * 1, angleStep * 2)
    shape.absarc(-halfWidth + radius, -halfLength + radius, radius, angleStep * 2, angleStep * 3)
    shape.absarc(halfWidth - radius, -halfLength + radius, radius, angleStep * 3, angleStep * 4)

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 20,
      curveSegments: 20,
    }

    const geometry = new ExtrudeGeometry(shape, extrudeSettings)
    geometry.center()
    return geometry
  }, [width, length, cornerRadius])

  useEffect(() => () => geometry.dispose(), [geometry])

  useFrame(() => {
    if (meshRef.current) {
      let targetScale = 1
      const isThisBoxHovered =
        hoveredBox && gridPosition[0] === hoveredBox[0] && gridPosition[1] === hoveredBox[1]

      if (isThisBoxHovered) {
        targetScale = 5
      } else if (hoveredBox) {
        const dx = gridPosition[0] - hoveredBox[0]
        const dz = gridPosition[1] - hoveredBox[1]
        const distance = Math.sqrt(dx * dx + dz * dz)

        if (distance <= rippleRadius && distance > 0) {
          const falloff = Math.max(0, 1 - distance / rippleRadius)
          const rippleEffect = falloff * rippleScale
          targetScale = 1 + rippleEffect * 3
        }
      }

      const lerpFactor = 0.1
      const newScale = currentScale + (targetScale - currentScale) * lerpFactor
      setCurrentScale(newScale)

      meshRef.current.scale.z = newScale
    }
  })

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.userData.gridPosition = gridPosition
    }
  }, [gridPosition])

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <meshPhysicalMaterial
        color="#232323"
        roughness={0.5}
        metalness={1}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </mesh>
  )
}

// HoverDetector
function HoverDetector({ onHoverChange }) {
  const { camera, raycaster, pointer, scene } = useThree()

  useFrame(() => {
    raycaster.setFromCamera(pointer, camera)
    const intersects = raycaster.intersectObjects(scene.children, true)

    const hit = intersects.find((i) => i.object.userData?.gridPosition)
    if (hit) {
      onHoverChange(hit.object.userData.gridPosition)
      return
    }
    onHoverChange(null)
  })

  return null
}

// Grid of Boxes
function GridOfBoxes() {
  const gridSize = 10
  const boxWidth = 4
  const boxLength = 4
  const gap = 0.05
  const spacingX = boxWidth + gap
  const spacingZ = boxLength + gap

  const [hoveredBox, setHoveredBox] = useState(null)

  const boxes = []
  for (let x = 0; x < gridSize; x++) {
    for (let z = 0; z < gridSize; z++) {
      const posX = (x - (gridSize - 1) / 2) * spacingX
      const posZ = (z - (gridSize - 1) / 2) * spacingZ

      boxes.push(
        <Box
          key={`${x}-${z}`}
          position={[posX, -0.85, posZ]}
          width={boxWidth}
          length={boxLength}
          cornerRadius={0.8}
          gridPosition={[x, z]}
          hoveredBox={hoveredBox}
          rippleScale={2.5}
          rippleRadius={2}
        />
      )
    }
  }

  return (
    <>
      <HoverDetector onHoverChange={setHoveredBox} />
      {boxes}
    </>
  )
}

// ChromeGrid
export function ChromeGrid() {
  return (
    <div className="h-full w-full fixed inset-0 z-0">
      <Canvas
        camera={{ position: [-9.31, 12, 24.72], fov: 35 }}
        className="pointer-events-auto" // ✅ allow hover
      >
        <color attach="background" args={['#000']} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 15, 10]} intensity={10} castShadow />
        <directionalLight position={[-10, 10, -5]} intensity={10} color="#ffffff" />
        <directionalLight position={[5, -10, 15]} intensity={5} color="#f0f8ff" />
        <pointLight position={[0, 20, 3]} intensity={2} distance={50} />
        <pointLight position={[15, 5, 15]} intensity={1.5} distance={40} color="#ffffff" />
        <GridOfBoxes />
      </Canvas>
    </div>
  )
}
