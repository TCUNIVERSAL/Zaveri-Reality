"use client";

import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface CubeButtonProps {
  href?: string;
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function CubeButton({
  href,
  label,
  onClick,
  className,
  type = "button",
  ariaLabel,
}: CubeButtonProps) {
  const content = (
    <>
      <div className="link-button__text">
        <span className="link-button__label">{label}</span>
      </div>
      <div className="link-button__icon" aria-hidden="true">
        <div className="link-button__cube">
          {/* Front face with Plus icon */}
          <div className="link-button__face">
            <div className="link-button__wipe" />
            <Plus className="relative z-[1] w-4 h-4 text-white" strokeWidth={2} />
          </div>
          {/* Side face with Arrow Right icon */}
          <div className="link-button__face">
            <div className="link-button__wipe" />
            <ArrowRight className="relative z-[1] w-4 h-4 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={clsx("link-button group", className)}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={ariaLabel || label}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={clsx("link-button group", className)}
        aria-label={ariaLabel || label}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={clsx("link-button group bg-transparent border-none p-0 text-left", className)}
      onClick={onClick}
      aria-label={ariaLabel || label}
    >
      {content}
    </button>
  );
}
