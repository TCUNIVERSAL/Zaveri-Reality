"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface CinematicCanvasProps {
  scrollProgress: number; // 0 to 1
  mousePos: { x: number; y: number };
}

export default function CinematicCanvas({ scrollProgress, mousePos }: CinematicCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{
    renderer: THREE.WebGLRenderer | null;
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    particles: THREE.Points | null;
    planes: THREE.Mesh[];
    targetCameraPos: THREE.Vector3;
    currentCameraPos: THREE.Vector3;
    targetLookAt: THREE.Vector3;
    currentLookAt: THREE.Vector3;
    ambientLight: THREE.AmbientLight | null;
    dirLight: THREE.DirectionalLight | null;
    pointLight: THREE.PointLight | null;
    fog: THREE.FogExp2 | null;
    animationFrameId: number | null;
    isReducedMotion: boolean;
  }>({
    renderer: null,
    scene: null,
    camera: null,
    particles: null,
    planes: [],
    targetCameraPos: new THREE.Vector3(0, 0, 10),
    currentCameraPos: new THREE.Vector3(0, 0, 10),
    targetLookAt: new THREE.Vector3(0, 0, 0),
    currentLookAt: new THREE.Vector3(0, 0, 0),
    ambientLight: null,
    dirLight: null,
    pointLight: null,
    fog: null,
    animationFrameId: null,
    isReducedMotion: false,
  });

  const scrollRef = useRef(scrollProgress);
  scrollRef.current = scrollProgress;

  const mouseRef = useRef(mousePos);
  mouseRef.current = mousePos;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    stateRef.current.isReducedMotion = mediaQuery.matches;

    // 1. SCENE CREATION
    const scene = new THREE.Scene();
    stateRef.current.scene = scene;

    // Deep luxury background color & volumetric exponential fog
    const initialFogColor = new THREE.Color("#080b12");
    scene.background = initialFogColor;
    const fog = new THREE.FogExp2(initialFogColor, 0.028);
    scene.fog = fog;
    stateRef.current.fog = fog;

    // 2. CAMERA
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);
    stateRef.current.camera = camera;

    // 3. RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    stateRef.current.renderer = renderer;

    // 4. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.8);
    scene.add(ambientLight);
    stateRef.current.ambientLight = ambientLight;

    const dirLight = new THREE.DirectionalLight(0xffecc2, 1.6);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);
    stateRef.current.dirLight = dirLight;

    const pointLight = new THREE.PointLight(0xc29b38, 2.5, 30);
    pointLight.position.set(0, 2, 5);
    scene.add(pointLight);
    stateRef.current.pointLight = pointLight;

    // 5. TEXTURE LOADER & ARCHITECTURAL 3D PLANES
    const textureLoader = new THREE.TextureLoader();
    const textures = [
      textureLoader.load("/assets/barsana/barsana-02.jpg"),
      textureLoader.load("/assets/barsana/barsana-03.jpg"),
      textureLoader.load("/assets/barsana/barsana-09.jpg"),
      textureLoader.load("/assets/barsana/barsana-05.jpg"),
      textureLoader.load("/assets/barsana/barsana-07.jpg"),
      textureLoader.load("/assets/barsana/barsana-18.jpg"),
      textureLoader.load("/assets/barsana/barsana-15.jpg"),
    ];

    textures.forEach((t) => {
      t.generateMipmaps = true;
      t.minFilter = THREE.LinearMipmapLinearFilter;
    });

    const planes: THREE.Mesh[] = [];

    // Scene 1: Arrival Monoliths [Z: 0 to -8]
    const planeGeo = new THREE.PlaneGeometry(6.4, 4.0, 16, 16);
    
    // Portal 1 (Barsana Entrance at Dusk)
    const mat1 = new THREE.MeshStandardMaterial({
      map: textures[0],
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const mesh1 = new THREE.Mesh(planeGeo, mat1);
    mesh1.position.set(-1.2, 0.2, 2);
    mesh1.rotation.y = 0.12;
    scene.add(mesh1);
    planes.push(mesh1);

    // Portal 2 (Colonnade / Gate daylight)
    const mat2 = new THREE.MeshStandardMaterial({
      map: textures[1],
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const mesh2 = new THREE.Mesh(planeGeo, mat2);
    mesh2.position.set(2.4, -0.4, -6);
    mesh2.rotation.y = -0.18;
    scene.add(mesh2);
    planes.push(mesh2);

    // Portal 3 (Sacred Temple Pavilion)
    const mat3 = new THREE.MeshStandardMaterial({
      map: textures[2],
      roughness: 0.2,
      metalness: 0.2,
      side: THREE.DoubleSide,
    });
    const mesh3 = new THREE.Mesh(planeGeo, mat3);
    mesh3.position.set(-2.2, 0.6, -14);
    mesh3.rotation.y = 0.22;
    scene.add(mesh3);
    planes.push(mesh3);

    // Portal 4 (Clubhouse & Azure Pool)
    const mat4 = new THREE.MeshStandardMaterial({
      map: textures[3],
      roughness: 0.15,
      metalness: 0.3,
      side: THREE.DoubleSide,
    });
    const mesh4 = new THREE.Mesh(planeGeo, mat4);
    mesh4.position.set(1.8, -0.2, -22);
    mesh4.rotation.y = -0.15;
    scene.add(mesh4);
    planes.push(mesh4);

    // Portal 5 (Botanical Garden & Lily Pond)
    const mat5 = new THREE.MeshStandardMaterial({
      map: textures[4],
      roughness: 0.35,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const mesh5 = new THREE.Mesh(planeGeo, mat5);
    mesh5.position.set(-1.6, 0.4, -30);
    mesh5.rotation.y = 0.18;
    scene.add(mesh5);
    planes.push(mesh5);

    // Portal 6 (The Woodland Villa Forest Retreat)
    const mat6 = new THREE.MeshStandardMaterial({
      map: textures[5],
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const mesh6 = new THREE.Mesh(planeGeo, mat6);
    mesh6.position.set(0, 0, -38);
    mesh6.rotation.y = 0;
    scene.add(mesh6);
    planes.push(mesh6);

    stateRef.current.planes = planes;

    // 6. FLOATING GOLDEN EMBERS & ATMOSPHERIC DUST PARTICLES
    const particleCount = 900;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const goldColor = new THREE.Color("#C29B38");
    const whiteColor = new THREE.Color("#ffffff");

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 24;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 50 - 15;
      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      const mixed = Math.random() > 0.4 ? goldColor : whiteColor;
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    stateRef.current.particles = particles;

    // 7. RESIZE LISTENER
    const handleResize = () => {
      if (!container || !stateRef.current.renderer || !stateRef.current.camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      stateRef.current.camera.aspect = w / h;
      stateRef.current.camera.updateProjectionMatrix();
      stateRef.current.renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 8. 60FPS CONTINUOUS CINEMATIC RENDER LOOP WITH SPLINE INTERPOLATION
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const p = scrollRef.current; // 0 to 1
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const state = stateRef.current;
      if (!state.camera || !state.renderer || !state.scene) return;

      // CAMERA KINEMATICS & 3D SPLINE PATH THROUGH THE REALM
      // Total travel distance in Z: from +10 down to -46
      const startZ = 9.5;
      const endZ = -44.0;
      const targetZ = startZ + (endZ - startZ) * p;

      // Dynamic cinematic camera choreography (S-curve banking & depth movements)
      const targetX = Math.sin(p * Math.PI * 3.5) * 1.8 + mx * 0.6;
      const targetY = Math.cos(p * Math.PI * 2.8) * 0.9 - my * 0.4;

      const lookAtZ = targetZ - 12;
      const lookAtX = Math.sin(p * Math.PI * 3.5 + 0.3) * 0.8;
      const lookAtY = Math.cos(p * Math.PI * 2.8 + 0.3) * 0.4;

      // Smooth inertia lerp
      state.currentCameraPos.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.05);
      state.currentLookAt.lerp(new THREE.Vector3(lookAtX, lookAtY, lookAtZ), 0.05);

      state.camera.position.copy(state.currentCameraPos);
      state.camera.lookAt(state.currentLookAt);

      // Bank camera roll slightly around curves for true filmic momentum
      state.camera.rotation.z = Math.sin(p * Math.PI * 3) * 0.04 - mx * 0.02;

      // Dynamic Fog Color Transition based on Scene chapter
      if (state.fog) {
        if (p < 0.2) {
          // Chapter 1: Obsidian Dusk
          state.fog.color.lerp(new THREE.Color("#080b12"), 0.05);
          state.scene.background = state.fog.color;
        } else if (p < 0.45) {
          // Chapter 2: Warm Classical Gold
          state.fog.color.lerp(new THREE.Color("#1a140d"), 0.05);
          state.scene.background = state.fog.color;
        } else if (p < 0.7) {
          // Chapter 3: Sacred Azure & Temple Glow
          state.fog.color.lerp(new THREE.Color("#09101d"), 0.05);
          state.scene.background = state.fog.color;
        } else if (p < 0.9) {
          // Chapter 4: Forest Mist Woodland
          state.fog.color.lerp(new THREE.Color("#08140f"), 0.05);
          state.scene.background = state.fog.color;
        } else {
          // Chapter 5: Golden Horizon
          state.fog.color.lerp(new THREE.Color("#120f0a"), 0.05);
          state.scene.background = state.fog.color;
        }
      }

      // Point Light follows camera path for dramatic volumetric highlights
      if (state.pointLight) {
        state.pointLight.position.set(targetX, targetY + 1.5, targetZ - 3);
      }

      // Floating gentle animation for 3D architectural planes
      planes.forEach((mesh, index) => {
        const floatOffset = Math.sin(elapsed * 0.8 + index * 1.5) * 0.08;
        mesh.position.y += floatOffset * 0.01;
        // Subtle tilt on hover
        mesh.rotation.y += Math.sin(elapsed * 0.5 + index) * 0.0008;
      });

      // Ambient particle drift
      if (particles) {
        particles.rotation.y = elapsed * 0.02;
        particles.rotation.z = elapsed * 0.01;
      }

      state.renderer.render(state.scene, state.camera);
      state.animationFrameId = requestAnimationFrame(animate);
    };

    stateRef.current.animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (stateRef.current.animationFrameId) {
        cancelAnimationFrame(stateRef.current.animationFrameId);
      }
      if (stateRef.current.renderer && container.contains(stateRef.current.renderer.domElement)) {
        container.removeChild(stateRef.current.renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
