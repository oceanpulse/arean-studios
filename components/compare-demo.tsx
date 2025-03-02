import { Compare } from "@/components/ui/compare"
import photo1 from "@/public/photo1.png";
import photo2 from "@/public/photo2.png";

export default function CompareDemo() {
  return (
    <div className="p-4 rounded-3xl dark:bg-neutral-900  dark:border-neutral-800 px-4">
      <Compare
        firstImage={photo2.src}
        secondImage={photo1.src}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className=""
        slideMode="hover"
      />
    </div>
  )
}

