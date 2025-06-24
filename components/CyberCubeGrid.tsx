'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const skills = [
  'React', 'Solidity', 'Web3', 'Next.js', 'Node.js', 'Tailwind',
  'Ether.js', 'Hardhat', 'MongoDB'
];

function SkillCube({ position, skill }: { position: [number, number, number]; skill: string }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#00ffff'} emissive={'#00ffff'} emissiveIntensity={0.6} />
      {/* <Html center>
        <div style={{
          color: '#00ffff',
          fontSize: '0.5rem',
          textAlign: 'center',
          pointerEvents: 'none'
        }}>{skill}</div>
      </Html> */}
    </mesh>
  );
}

export default function CyberGridCube() {
  const gridPositions = skills.map((_, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return [col * 2 - 2, row * -2 + 2, 0] as [number, number, number];
  });

  return (
    <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {skills.map((skill, i) => (
          <SkillCube key={i} position={gridPositions[i]} skill={skill} />
        ))}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
