'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  texturePath: string;
  size?: number;
  depth?: number;
  edgeColor?: string;
  bg?: string;            // color CSS o 'transparent'
  autoRotate?: boolean;
  speed?: number;         // rad/s
  pauseOnHover?: boolean;
};

/* ------------------------ Utilidades dentro de Canvas --------------------- */
function SceneConfig({ bg }: { bg: string }) {
  const { gl, scene } = useThree();
  gl.outputColorSpace = THREE.SRGBColorSpace;
  gl.toneMapping = THREE.ACESFilmicToneMapping;
  gl.toneMappingExposure = 1.0;

  if (bg === 'transparent') {
    gl.setClearColor(0x000000, 0); // alpha 0
    scene.background = null;
  } else {
    scene.background = new THREE.Color(bg);
  }
  return null;
}

function BadgeMesh({
  map,
  size = 1.6,
  depth = 0.08,
  edgeColor = '#0B4C6F',
  rotate = true,
  speed = 0.6,
  hovered = false,
}: {
  map: THREE.Texture | null;
  size?: number;
  depth?: number;
  edgeColor?: string;
  rotate?: boolean;
  speed?: number;
  hovered?: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (rotate && !hovered && ref.current) ref.current.rotation.y += dt * speed;
  });

  const materials = useMemo(() => {
    // Lados y dorso: estándar (afectados por luz)
    const side = new THREE.MeshStandardMaterial({ color: edgeColor });

    // Frente: NO afectado por luz + transparencia real del PNG
    const front = map
      ? new THREE.MeshBasicMaterial({ map, transparent: true, alphaTest: 0.05 })
      : new THREE.MeshBasicMaterial({ color: '#222831' });

    // Orden de materiales: right, left, top, bottom, front, back
    return [side, side, side, side, front, front];
  }, [edgeColor, map]);

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[size, size, depth]} />
      {materials.map((m, i) => (
        <primitive key={i} object={m} attach={`material-${i}`} />
      ))}
    </mesh>
  );
}

/** Carga la textura *dentro* del Canvas y renderiza el “badge” */
function BadgeWithTexture({
  texturePath,
  ...props
}: { texturePath: string } & Omit<Parameters<typeof BadgeMesh>[0], 'map'>) {
  const tex = useTexture(texturePath, (loader) => {
    // Evita caché obsoleta en dev
    (loader as any).setCacheBust?.(Math.random().toString(36).slice(2));
  });

  if (tex) {
    tex.anisotropy = 8;
    tex.colorSpace = THREE.SRGBColorSpace;
  }

  const map = (tex as THREE.Texture | undefined) ?? null;
  return <BadgeMesh map={map} {...props} />;
}

/* ---------------------------- Componente público -------------------------- */
export default function RotatingBadge3D({
  texturePath,
  size = 1.6,
  depth = 0.08,
  edgeColor = '#0B4C6F',
  bg = '#EEF4FA',         // o 'transparent'
  autoRotate = true,
  speed = 0.6,
  pauseOnHover = true,
}: Props) {
  const [hover, setHover] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const q = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(q.matches);
    update();
    q.addEventListener('change', update);
    return () => q.removeEventListener('change', update);
  }, []);

  return (
    <div
      role="img"
      aria-label="Logotipo 3D giratorio"
      style={{ width: 260, height: 260, borderRadius: 16, overflow: 'hidden' }}
      onMouseEnter={() => pauseOnHover && setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        legacy
        shadows
        camera={{ position: [0, 0, 3], fov: 40 }}
      >
        <SceneConfig bg={bg} />
        <Suspense fallback={null}>
          <BadgeWithTexture
            texturePath={texturePath}
            size={size}
            depth={depth}
            edgeColor={edgeColor}
            rotate={autoRotate && !reduceMotion}
            speed={speed}
            hovered={hover}
          />
          <ambientLight intensity={0.4} />
          <spotLight position={[3, 5, 6]} angle={0.35} intensity={1.15} castShadow />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
