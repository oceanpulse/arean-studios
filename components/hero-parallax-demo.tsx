"use client";
import React from "react";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { StaticImageData } from "next/image";
import MoverzappImage from "@/public/moverzapp.png"
import BitsaveImage from "@/public/bitsave.png"
import trakiImage from "@/public/traki.png"
import clintImage from "@/public/clint.png"
import moreMeImage  from "@/public/more.png"
import eventXImage  from "@/public/eventx.png"
import bankImage  from "@/public/bank.png"
import nassauImage  from "@/public/nassau.png"
import townImage  from "@/public/town.png"
import web3Image  from "@/public/web3.png"
import speedImage  from "@/public/speed.png"


type Product = {
  title: string;
  link: string;
  thumbnail: StaticImageData; // Accept both types
};

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moverzapp",
    link: "https://www.moverzapp.com/",
    thumbnail: MoverzappImage.src,
  },
  {
    title: "Clint Edward",
    link: "https://www.clintedward.tech/",
    thumbnail: clintImage.src, 
  },
  {
    title: "Traki App",
    link: "https://traki.app/",
    thumbnail: trakiImage.src,
  },
  {
    title: "Bitsave",
    link: "https://thirdweb.com/0xF51198Aa7E48C48C8870F761c3c6b3b3d14bC813/Bitsave",
    thumbnail: BitsaveImage.src,
  },
  {
    title: "More Me",
    link: "https://code-assessment-three.vercel.app/numbers",
    thumbnail: moreMeImage.src,
  },
  {
    title: "EventX",
    link: "https://cifi-event.vercel.app/",
    thumbnail: eventXImage.src,
  },
  {
    title: "Bank App",
    link: "https://bankapp-dev.vercel.app/sign-in",
    thumbnail: bankImage.src
  },
  {
    title: "Nassau Classics",
    link: "https://nassauclassics.co.za/",
    thumbnail: nassauImage.src
  },
  {
    title: "Web3 Careers",
    link: "https://web3.career/",
    thumbnail: web3Image.src
  },
  {
    title: "Speedrun Ethereum",
    link: "https://speedrunethereum.com/",
    thumbnail: speedImage.src
  },
  {
    title: "Township Tours Imivuyo",
    link: "https://www.townshiptoursimivuyo.co.za/",
    thumbnail: townImage.src
  }
  
];
