import TypewriterEffectSmoothDemo from "@/components/typewrter-effect-demo";
import WobbleCardDemo from "@/components/wobble-card-demo";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-20">
          <div>
          <TypewriterEffectSmoothDemo/>
          <WobbleCardDemo/>
           
          </div>
        </main>
  )
}