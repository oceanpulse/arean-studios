"use client";

import HeroParallaxDemo from "@/components/hero-parallax-demo";
import ImageTextRevealDemo from "@/components/image-text-reveal-demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <HeroParallaxDemo/>
       
      </div>
    </main>
  );
}