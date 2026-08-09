import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  if (!name || !name.trim()) return "";

  const words = name.trim().split(/\s+/);

  // Handle hyphenated names
  const initials = words.map((word) => {
    if (word.includes("-")) {
      return word
        .split("-")
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase();
    }
    return word.charAt(0).toUpperCase();
  });

  // Return first two initials or all if less than 2
  return initials.length >= 2
    ? initials[0] + initials[initials.length - 1]
    : initials.join("");
}
