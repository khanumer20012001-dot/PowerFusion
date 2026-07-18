"use client";

import type { ComponentType } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  BadgeCheck,
  Zap,
  Activity,
  ClipboardCheck,
  Wrench,
  ChevronDown,
  Plus,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";
import { SiWhatsapp, SiLinkedin, SiFacebook } from "react-icons/si";
import type { IconType } from "react-icons";

/**
 * Single source of truth for every icon used across the app.
 * No component imports lucide-react or react-icons directly —
 * everything routes through here.
 */

export interface IconProps {
  size?: number;
  className?: string;
}

function fromLucide(Icon: LucideIcon): ComponentType<IconProps> {
  return function Wrapped({ size = 24, className }: IconProps) {
    return <Icon size={size} className={className} strokeWidth={1.75} aria-hidden="true" />;
  };
}

function fromSimpleIcons(Icon: IconType): ComponentType<IconProps> {
  return function Wrapped({ size = 24, className }: IconProps) {
    return <Icon size={size} className={className} aria-hidden="true" />;
  };
}

/* ---------------- General UI icons (lucide-react) ---------------- */
export const IconMenu = fromLucide(Menu);
export const IconClose = fromLucide(X);
export const IconArrowRight = fromLucide(ArrowRight);
export const IconPhone = fromLucide(Phone);
export const IconEmail = fromLucide(Mail);
export const IconLocation = fromLucide(MapPin);
export const IconChevronDown = fromLucide(ChevronDown);
export const IconPlus = fromLucide(Plus);
export const IconCheck = fromLucide(CircleCheck);

/* ---------------- Commitment pillar icons ---------------- */
export const Icon24Hour = fromLucide(Clock);
export const IconWarranty = fromLucide(ShieldCheck);
export const IconQuality = fromLucide(BadgeCheck);

/* ---------------- Service icons ---------------- */
export const IconConstruction = fromLucide(Zap);
export const IconTesting = fromLucide(Activity);
export const IconCommissioning = fromLucide(ClipboardCheck);
export const IconMaintenance = fromLucide(Wrench);

/* ---------------- Brand / social icons (react-icons/si) ---------------- */
export const IconWhatsApp = fromSimpleIcons(SiWhatsapp);
export const IconLinkedIn = fromSimpleIcons(SiLinkedin);
export const IconFacebook = fromSimpleIcons(SiFacebook);

/* ---------------- Logo ---------------- */
interface LogoProps {
  variant?: "full" | "mark";
  width?: number;
  height?: number;
  className?: string;
}

export function PowerFusionLogo({
  variant = "full",
  height = 70,
  className = "",
}: LogoProps) {
  const markSize = Math.round(height * 0.66);

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M20,3 L34,11.5 L34,28.5 L20,37 L6,28.5 L6,11.5 Z"
          stroke="#1d94d5"
          strokeWidth="2"
          fill="#0b0c0e"
        />
        <path d="M22,10 L13,22 L18.5,22 L16.5,31 L27,17.5 L20.5,17.5 Z" fill="#fb9522" />
      </svg>
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span
            className="font-display font-bold tracking-tight text-white"
            style={{ fontSize: `${Math.max(16, height * 0.26)}px` }}
          >
            POWER<span style={{ color: "#fb9522" }}>FUSION</span>
          </span>
          <span
            className="font-mono uppercase text-[10px] tracking-[0.25em] mt-1"
            style={{ color: "#9aa1ab" }}
          >
            Electrical Contractors
          </span>
        </span>
      )}
    </span>
  );
}
