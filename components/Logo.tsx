import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function Logo({ className = "h-8 w-auto", size = 32, color = "currentColor" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zaveri Realty Group Official Logo"
    >
      {/* Top Horizontal Bar */}
      <rect x="0" y="0" width="100" height="15" fill={color} />
      
      {/* Diagonal Z-beam */}
      <polygon points="0,67 0,51 72,15 100,15 0,76" fill={color} />
      
      {/* Pillar 1 (Left) */}
      <rect x="25" y="58" width="12" height="27" fill={color} />
      
      {/* Pillar 2 (Middle) */}
      <rect x="48" y="44" width="12" height="41" fill={color} />
      
      {/* Pillar 3 (Right) */}
      <rect x="75" y="24" width="25" height="61" fill={color} />
      
      {/* Bottom Horizontal Bar */}
      <rect x="0" y="85" width="100" height="15" fill={color} />
    </svg>
  );
}
