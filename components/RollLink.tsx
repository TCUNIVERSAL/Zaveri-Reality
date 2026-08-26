"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface RollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function RollLink({
  href,
  children,
  className,
  target,
  rel,
  onClick,
  ariaLabel,
}: RollLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const content = (
    <span className="relative align-top inline-block overflow-hidden">
      <span className="relative block" data-roll>
        <span className="block" data-top>{children}</span>
        <span className="absolute top-0 left-0 whitespace-nowrap" aria-hidden="true" data-bottom>
          {children}
        </span>
      </span>
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={clsx("roll-link", className)}
        target={target || (href.startsWith("http") ? "_blank" : undefined)}
        rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
        onClick={onClick}
        aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={clsx("roll-link", className)}
      onClick={onClick}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
    >
      {content}
    </Link>
  );
}
