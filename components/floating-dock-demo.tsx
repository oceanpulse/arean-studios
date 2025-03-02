import { FloatingDock } from "@/components/ui/floating-dock"
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconExchange, IconHome, IconMail, IconNewSection, IconTerminal2, IconWorldWww } from "@tabler/icons-react"
import Image from "next/image"

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },

    {
      title: "Email",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/contact",
    },
    {
      title: "My Website",
      icon: <IconWorldWww className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://clintedward.tech",
    },

    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "www.linkedin.com/in/clint-edward-cloete-685004108",
    },

    {
      title: "x.com",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://x.com/oceanicpulse24",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/oceanpulse",
    },
  ]
  return (
    <div className="flex items-center justify-center h-[35rem] w-full mt-18 floatingDock">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  )
}

