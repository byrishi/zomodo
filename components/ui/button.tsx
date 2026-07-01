import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "lg" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const variants = {
      default: "bg-primary text-white hover:bg-amber transition-colors",
      outline: "border border-primary text-primary hover:bg-primary hover:text-white transition-colors",
      ghost: "hover:bg-foreground/5 transition-colors"
    }
    const sizes = {
      default: "h-12 px-6 py-2",
      lg: "h-14 px-8 py-4 text-lg",
      icon: "h-12 w-12"
    }
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
