// Utility Functions - Helper tools for your website
// This file contains small helper functions used throughout your website

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Combine CSS Classes - Merges multiple styling classes intelligently
// This prevents conflicts when combining Tailwind CSS classes
// Example: cn("text-red-500", "text-blue-500") → "text-blue-500" (blue wins)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))  // Merge classes without conflicts
}
