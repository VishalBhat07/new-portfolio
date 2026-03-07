import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind class names safely.
 * Mirrors the shadcn/ui `cn` helper.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
