/**
 * Power Fusion — Icon System Barrel Export
 *
 * Central entry point for all SVG icons used across the website.
 * Import any icon from "@/app/components/icons" for a clean, scalable API.
 *
 * ┌──────────────────────────────────────────────────┐
 * │  ICON CATEGORIES                                 │
 * ├──────────────────────────────────────────────────┤
 * │  Brand      → PowerFusionLogo                    │
 * │  Services   → Construction, Testing,             │
 * │               Commissioning, Maintenance         │
 * │  Commitment → 24Hour, Warranty, Quality          │
 * │  UI         → Phone, Email, Location, Menu, etc. │
 * │  Interaction→ Plus (panel-schedule expand toggle)│
 * │  Social     → WhatsApp, LinkedIn, Facebook       │
 * └──────────────────────────────────────────────────┘
 *
 * Usage:
 *   import { PowerFusionLogo, IconConstruction, IconPhone } from "@/app/components/icons";
 */

// ── Brand ──
export { default as PowerFusionLogo } from "./PowerFusionLogo";

// ── Service Icons ──
export { default as IconConstruction } from "./IconConstruction";
export { default as IconTesting } from "./IconTesting";
export { default as IconCommissioning } from "./IconCommissioning";
export { default as IconMaintenance } from "./IconMaintenance";

// ── Commitment Icons ──
export { default as Icon24Hour } from "./Icon24Hour";
export { default as IconWarranty } from "./IconWarranty";
export { default as IconQuality } from "./IconQuality";

// ── Interaction Icons ──
export { default as IconPlus } from "./IconPlus";

// ── General UI Icons ──
export {
  IconPhone,
  IconEmail,
  IconLocation,
  IconMenu,
  IconClose,
  IconChevronDown,
  IconArrowRight,
  IconArrowDown,
  IconBolt,
  IconUsers,
  IconProject,
  IconKVA,
  IconCalendar,
  IconWhatsApp,
  IconLinkedIn,
  IconFacebook,
} from "./UIIcons";