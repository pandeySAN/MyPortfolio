'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Shape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Slow rotation
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
    
    // Gentle floating
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    
    // Slight mouse follow (parallax)
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
  });

  return (
    <Icosahedron
      ref={meshRef}
      args={[1.5, 2]} // radius, detail
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.05 : 1}
    >
      <MeshDistortMaterial
        color="#6366f1"
        wireframe
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        opacity={0.6}
        transparent
      />
    </Icosahedron>
  );
}

export default function HeroShape() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60 md:left-1/2 md:-translate-x-1/4 pointer-events-auto flex items-center justify-center mix-blend-screen md:mix-blend-normal">
      <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <Shape />
        </Canvas>
      </div>
    </div>
  );
}
