"use client";

import Hero3DCanvas from "@/components/home/Hero3DCanvas";
import HeroOverlay from "@/components/home/HeroOverlay";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useMousePosition } from "@/hooks/useMousePosition";

/**
 * HeroTimeline — the cinematic 3D scroll-driven hero experience.
 * Encapsulates the Three.js canvas, text overlay, and 600vh scroll track.
 * This is the only part of the homepage that MUST be a client component.
 */
export default function HeroTimeline() {
  const { scrollProgressRef, trackRef, currentScene, handleJumpToScene } =
    useScrollProgress();
  const mousePosRef = useMousePosition();

  return (
    <>
      {/* THREE.JS WEBGL 3D INTERACTIVE WORLD */}
      <Hero3DCanvas
        scrollProgressRef={scrollProgressRef}
        mousePosRef={mousePosRef}
      />

      {/* SPATIAL CINEMATIC OVERLAY (KINETIC TEXT & 6-SCENE TIMELINE) */}
      <HeroOverlay
        currentScene={currentScene}
        onJumpToScene={handleJumpToScene}
      />

      {/* 3D SCROLL TIMELINE TRACK (Drives camera choreography through 6 scenes) */}
      <div
        ref={trackRef}
        className="relative w-full h-[600vh] pointer-events-none z-0"
      />
    </>
  );
}
