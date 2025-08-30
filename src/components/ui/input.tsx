import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styling with consistent 2px border
        "flex h-9 w-full min-w-0 rounded-md border-2 border-gray-300 bg-transparent px-3 py-1 text-base",
        "placeholder:text-gray-500 text-gray-900",
        "transition-all duration-200 ease-in-out",
        // Focus state - blue border with subtle glow, maintaining 2px thickness
        "focus:outline-none focus:border-blue-500 focus:ring-0",
        "focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]",
        // Hover state
        "hover:border-gray-400",
        // Error state
        "aria-invalid:border-red-500 aria-invalid:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]",
        // Disabled state
        "disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
        // File input specific styles
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        // Selection styles
        "selection:bg-primary selection:text-primary-foreground",
        // Dark mode support
        "dark:bg-input/30 dark:aria-invalid:shadow-[0_0_0_3px_rgba(239,68,68,0.2)]",
        // Text size responsive
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
