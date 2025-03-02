"use client";
import { ImageTextReveal } from "@/components/ui/image-text-reveal";
import photo1 from "@/public/photo1.png";
import photo2 from "@/public/photo2.png";

export default function ImageTextRevealDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <ImageTextReveal 
        text="  I can Web2" 
        revealText="  I can Web3"
        firstImage={photo1.src}
        secondImage={photo2.src}
        firstImageClassName="object-cover object-left-top pr-20"
        secondImageClassName="object-cover object-left-top pr-20"
        className="w-full max-w-4xl"
      >
        
      </ImageTextReveal>
    </div>
  );
}