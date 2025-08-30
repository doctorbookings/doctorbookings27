import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * 
 * This function combines clsx for conditional class names and tailwind-merge
 * to resolve conflicting Tailwind classes (e.g., "px-2 px-4" becomes "px-4")
 * 
 * @param inputs - Class names, objects, or arrays to merge
 * @returns Merged and deduplicated class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
