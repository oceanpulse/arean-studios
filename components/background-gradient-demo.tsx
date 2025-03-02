"use client"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import React from "react"

export default function BackgroundGradientDemo({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-md w-full p-0 bg-transparent">
        {children}
      </BackgroundGradient>
    </div>
  )
}