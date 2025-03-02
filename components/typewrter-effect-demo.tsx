"use client"
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Clint Edward.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Invest in people who can build out your vision
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button> */}
        <Link href="/contact">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">Contact Me Now</button>
        </Link>
        
      </div>
    </div>
  )
}

