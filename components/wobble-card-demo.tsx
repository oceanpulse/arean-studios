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
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Tech Stack Analysis
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          This project is built on a modern frontend stack centered around Next.js with its App Router architecture, utilizing React for component structure and TypeScript for type safety. The UI is styled with Tailwind CSS, allowing for responsive designs across various screen sizes. The codebase features custom interactive components such as WobbleCard (providing 3D tilt effects) and ImageTextReveal (offering before/after image comparison with sliding functionality). Next.js Image components are employed for optimized image loading from the public directory. The architecture clearly separates client-side components (marked with "use client" directives) from server components, following Next.js best practices. Overall, this appears to be a focused UI component library demonstrating advanced frontend techniques for creating engaging user interfaces.
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

