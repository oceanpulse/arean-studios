"use client"
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card"

export default function TextRevealCardPreview() {
  return (
    <div >
      <TextRevealCard text="I can Web2" revealText="and now I can Web3">
        <TextRevealCardTitle>Sometimes, you just need go with faith.</TextRevealCardTitle>
        <TextRevealCardDescription>
        You do not need perfection, you just need excellence. 
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  )
}

