"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface ScrollProgressOptions {
  /**
   * Map scroll progress (0–1) to a scene number.
   * Default: 6-scene chapter system used by the cinematic timeline.
   */
  computeScene?: (progress: number) => number;
}

const defaultComputeScene = (p: number): number => {
  if (p >= 0.90) return 6;
  if (p >= 0.74) return 5;
  if (p >= 0.55) return 4;
  if (p >= 0.35) return 3;
  if (p >= 0.16) return 2;
  return 1;
};

export function useScrollProgress(options?: ScrollProgressOptions) {
  const computeScene = options?.computeScene ?? defaultComputeScene;
  const scrollProgressRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentScene, setCurrentScene] = useState(1);

  const handleJumpToScene = useCallback((targetP: number) => {
    const track = trackRef.current;
    if (!track) return;
    const totalScrollable = track.scrollHeight - window.innerHeight;
    const targetScrollTop = targetP * totalScrollable;
    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const totalScrollable = track.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalScrollable));
      scrollProgressRef.current = p;

      const newScene = computeScene(p);
      setCurrentScene((prev) => (prev !== newScene ? newScene : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [computeScene]);

  return {
    scrollProgressRef,
    trackRef,
    currentScene,
    handleJumpToScene,
  };
}
