'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Sphere } from '@react-three/drei';
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
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;

    // Slight mouse follow (parallax)
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;

    meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
  });

  return (
    <Icosahedron
      ref={meshRef}
      args={[1.5, 3]} // radius, detail
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.06 : 1}
    >
      <MeshDistortMaterial
        color="#6053ee"
        wireframe
        distort={0.35}
        speed={1.8}
        roughness={0.15}
        metalness={0.9}
        opacity={0.7}
        transparent
      />
    </Icosahedron>
  );
}

function OrbitingOrb({ radius, speed, size, color, offset }: { radius: number; speed: number; size: number; color: string; offset: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 1.4) * 0.5;
  });

  return (
    <Sphere ref={ref} args={[size, 32, 32]}>
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.6} transparent opacity={0.85} />
    </Sphere>
  );
}

export default function HeroShape() {
  return (
    <div className="absolute inset-0 z-0 opacity-50 dark:opacity-70 md:left-1/2 md:-translate-x-1/4 pointer-events-auto flex items-center justify-center mix-blend-normal">
      <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1.1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <pointLight position={[-5, -3, 2]} intensity={0.8} color="#20d8f8" />
          <Shape />
          <OrbitingOrb radius={2.6} speed={0.4} size={0.12} color="#20d8f8" offset={0} />
          <OrbitingOrb radius={2.2} speed={0.55} size={0.08} color="#c084fc" offset={2.1} />
        </Canvas>
      </div>
    </div>
  );
}
