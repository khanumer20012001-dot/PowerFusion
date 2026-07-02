/**
 * Power Fusion — General-Purpose UI Icons
 *
 * A centralized library of small SVG icons used across the site
 * (navigation, contact, social, UI controls). Each icon is a named
 * export so consumers can tree-shake unused icons.
 *
 * Usage:
 *   import { IconPhone, IconEmail, IconMenu } from "@/app/components/icons/UIIcons";
 */

import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

/* ─────────────────────────────────────────────
   CONTACT ICONS
   ───────────────────────────────────────────── */

export function IconPhone({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconEmail({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLocation({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   NAVIGATION ICONS
   ───────────────────────────────────────────── */

export function IconMenu({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevronDown({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowDown({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 14l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   STATS / FEATURE ICONS
   ───────────────────────────────────────────── */

export function IconBolt({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <path
        d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.15"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconUsers({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M2 21v-2a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M22 21v-1.5a4 4 0 00-5-3.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function IconProject({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      {/* Building */}
      <rect x="3" y="6" width="10" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="13" y="10" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
      {/* Windows */}
      <rect x="5" y="9" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="9" y="9" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="5" y="14" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="9" y="14" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="15" y="13" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="15" y="18" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.5" />
      {/* Antenna */}
      <line x1="8" y1="6" x2="8" y2="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="2" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function IconKVA({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      {/* Power meter gauge */}
      <path d="M4 18 A10 10 0 0 1 20 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Needle */}
      <line x1="12" y1="18" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="12" cy="18" r="2" fill="currentColor" />
      {/* Tick marks */}
      <line x1="4" y1="18" x2="5.5" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5.5" y1="12" x2="7" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="8" x2="12" y2="9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18.5" y1="12" x2="17" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="18" x2="18.5" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* KVA text */}
      <text x="12" y="23" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="4" fill="currentColor" opacity="0.7">KVA</text>
    </svg>
  );
}

export function IconCalendar({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="3" x2="8" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="3" x2="16" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Calendar dots */}
      <circle cx="8" cy="14" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="14" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="16" cy="14" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="8" cy="18" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SOCIAL MEDIA ICONS
   ───────────────────────────────────────────── */

export function IconWhatsApp({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <path
        d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8.5 7.5a1 1 0 011-1h.5a1 1 0 011 .7l.5 1.5a1 1 0 01-.2 1L10.5 10.5a6 6 0 003 3l.8-.8a1 1 0 011-.2l1.5.5a1 1 0 01.7 1v.5a1 1 0 01-1 1C13 16 8 11 8.5 7.5z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}

export function IconLinkedIn({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="7" y1="10" x2="7" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="7" cy="7" r="1.2" fill="currentColor" />
      <path d="M11 17v-4a3 3 0 016 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="11" y1="10" x2="11" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconFacebook({ size = 24, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...rest}>
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M16 8h-2a3 3 0 00-3 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
