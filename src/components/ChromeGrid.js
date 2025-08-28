'use client'

import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ExtrudeGeometry, Shape } from 'three'

// Box component
const Box = ({ position, width = 4, length = 4, cornerRadius = 2, gridPosition, hoveredBox, rippleScale = 0.3, rippleRadius = 3 }) => {
    const meshRef = useRef(null)
    const [currentScale, setCurrentScale] = useState(1)

    const geometry = useMemo(() => {
        const shape = new Shape()
        const halfWidth = width / 2
        const halfLength = length / 2
        const r = cornerRadius

        shape.absarc(halfWidth - r, halfLength - r, r, 0, Math.PI * 0.5)
        shape.absarc(-halfWidth + r, halfLength - r, r, Math.PI * 0.5, Math.PI)
        shape.absarc(-halfWidth + r, -halfLength + r, r, Math.PI, Math.PI * 1.5)
        shape.absarc(halfWidth - r, -halfLength + r, r, Math.PI * 1.5, Math.PI * 2)

        const extrudeSettings = { depth: 0.3, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 10, curveSegments: 10 }
        const geom = new ExtrudeGeometry(shape, extrudeSettings)
        geom.center()
        return geom
    }, [width, length, cornerRadius])

    useEffect(() => () => geometry.dispose(), [geometry])

    useFrame(() => {
        if (!meshRef.current) return
        let targetScale = 1

        if (hoveredBox && gridPosition[0] === hoveredBox[0] && gridPosition[1] === hoveredBox[1]) {
            targetScale = 5
        } else if (hoveredBox) {
            const dx = gridPosition[0] - hoveredBox[0]
            const dz = gridPosition[1] - hoveredBox[1]
            const dist = Math.sqrt(dx*dx + dz*dz)
            if (dist <= rippleRadius && dist > 0) targetScale = 1 + rippleScale * (1 - dist/rippleRadius)
        }

        const lerp = 0.1
        const newScale = currentScale + (targetScale - currentScale) * lerp
        setCurrentScale(newScale)
        meshRef.current.scale.z = newScale
    })

    useEffect(() => { if(meshRef.current) meshRef.current.userData.gridPosition = gridPosition }, [gridPosition])

    return (
        <mesh ref={meshRef} geometry={geometry} position={position} rotation={[Math.PI/2,0,0]}>
            <meshPhysicalMaterial color="#000000" roughness={0.5} metalness={1} clearcoat={1} clearcoatRoughness={0}/>
        </mesh>
    )
}

// HoverDetector now uses pointer events properly
const HoverDetector = ({ onHoverChange }) => {
    const { camera, raycaster, scene } = useThree()
    const pointer = useRef([0,0])

    // Track pointer position
    useEffect(() => {
        const handleMove = (e) => {
            const rect = e.target.getBoundingClientRect()
            pointer.current = [
                ((e.clientX - rect.left)/rect.width) * 2 -1,
                -((e.clientY - rect.top)/rect.height) * 2 +1
            ]
        }
        window.addEventListener('pointermove', handleMove)
        return () => window.removeEventListener('pointermove', handleMove)
    }, [])

    useFrame(() => {
        raycaster.setFromCamera({ x:pointer.current[0], y:pointer.current[1] }, camera)
        const intersects = raycaster.intersectObjects(scene.children, true)
        for (const inter of intersects) {
            if(inter.object.userData?.gridPosition){
                onHoverChange(inter.object.userData.gridPosition)
                return
            }
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

    for(let x=0; x<gridSize; x++){
        for(let z=0; z<gridSize; z++){
            const posX = (x - (gridSize-1)/2) * spacingX
            const posZ = (z - (gridSize-1)/2) * spacingZ
            boxes.push(
                <Box key={`${x}-${z}`} position={[posX,-0.85,posZ]} width={boxWidth} length={boxLength} cornerRadius={0.8} gridPosition={[x,z]} hoveredBox={hoveredBox}/>
            )
        }
    }

    return <>
        <HoverDetector onHoverChange={setHoveredBox} />
        {boxes}
    </>
}

// ChromeGrid component
export function ChromeGrid() {
    return (
        <div className="h-full w-full bg-black fixed inset-0 -z-10">
            <Canvas camera={{ position:[-9.31,12,24.72], rotation:[-0.65,-0.2,-0.13], fov:35 }}>
                <ambientLight intensity={1}/>
                <directionalLight position={[10,15,10]} intensity={10} castShadow/>
                <directionalLight position={[-10,10,-5]} intensity={10} color="#ffffff"/>
                <directionalLight position={[5,-10,15]} intensity={5} color="#f0f8ff"/>
                <pointLight position={[0,20,3]} intensity={2} distance={50}/>
                <pointLight position={[15,5,15]} intensity={1.5} distance={40} color="#ffffff"/>
                <GridOfBoxes/>
            </Canvas>
        </div>
    )
}

