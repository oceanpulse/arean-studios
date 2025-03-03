"use client";
import { 
  ImageTextReveal, 
  ImageTextRevealTitle, 
  ImageTextRevealDescription 
} from "@/components/ui/image-text-reveal";
import photo1 from "@/public/photo1.png";
import photo2 from "@/public/photo2.png";

export default function ImageTextRevealDemo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <ImageTextReveal
        text="I can Web2"
        revealText=" I can Web3"
        firstImage={photo2.src}
        secondImage={photo1.src}
        firstImageClassName="object-cover object-center h-full w-full pr-20"
        secondImageClassName="object-cover object-center h-full w-full pr-20"
        className="w-full h-full"
      >
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 bg-gradient-to-t from-black/70 to-transparent z-10">
          <ImageTextRevealTitle className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold leading-tight p-2.5 mb-10">
            Full Stack Developer. Blockchain. Software Engineer. Web3 Developer. Crypto Enthusiast. Artificial Intelligence Interest. Full Stack Developer. Blockchain. Software Engineer. Web3 Developer. Crypto Enthusiast. Artificial Intelligence Interest.
          </ImageTextRevealTitle>
          <ImageTextRevealDescription className="text-xs sm:text-sm text-gray-200 mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3">
            .
          </ImageTextRevealDescription>
        </div>
      </ImageTextReveal>
    </div>
  );
}