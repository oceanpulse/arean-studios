"use client"
import Image from "next/image"
import { WobbleCard } from "@/components/ui/wobble-card"
import ImageTextRevealDemo from "./image-text-reveal-demo"

export default function WobbleCardDemo() {
  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-40 p-4 mb-20">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        
        <div className="max-w">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold  text-white">
          Tech Stack Analysis
          </h2>
        
          <p className="mt-4 text-left text-base/6 text-neutral-200 ">
          <span className="font-bold light:text-neutral-400">
         
          </span>{" "}
          This project is built on a modern frontend stack with Next.js, React, and TypeScript, ensuring a scalable and type-safe foundation. Next.js powers server-side rendering, static generation, and API routes, while React structures the UI with key files like page.tsx and layout.tsx. TypeScript enhances development with strict type checking (tsconfig.json). Styling is managed with Tailwind CSS (tailwind.config.ts, globals.css), and code quality is enforced with ESLint. The project includes custom interactive components (WobbleCard, ImageTextReveal), Google Fonts for typography, and sonner for toast notifications. Dependencies are managed via npm, with deployment optimized for Vercel. Custom commands and models in config.json further enhance flexibility, making this stack a solid foundation for modern, interactive web applications.
        </p>
       
     
        </div>
       
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 max-h-[300px] lg:min-h-[500px]">
        
        <ImageTextRevealDemo/>
        
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          MLOps Professional Developer Certification
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          I’ve enrolled in Intel’s MLOps Professional course to deepen my expertise in machine learning operations. This program covers scalable AI model deployment, automation, and DevOps best practices—skills that will enhance my ability to build and manage AI-driven solutions efficiently.
          </p>
        </div>
        <Image
          src="/mlops.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[8%] lg:-right-[2%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  )
}

