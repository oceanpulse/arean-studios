"use client"
import Image from "next/image"
import { WobbleCard } from "@/components/ui/wobble-card"
import CompareDemo from "@/components/compare-demo"
import ImageTextRevealDemo from "./image-text-reveal-demo"

export default function WobbleCardDemo() {
  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-40">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
         <Image
          src="/clint.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[20%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            MLOps Professional Developer Certification
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.
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
          With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.With over 100,000 mothly active bot usersm for developers.With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/clint.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[20%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  )
}

