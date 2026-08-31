"use client";

import { useEffect, useRef } from "react";

/**
 * Track mouse position as normalized coordinates (-1 to 1).
 * Uses a ref to avoid unnecessary re-renders — ideal for animation loops.
 */
export function useMousePosition() {
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosRef;
}
