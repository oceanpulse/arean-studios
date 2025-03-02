"use client"
import type React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react"

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-[22px] p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200">Ready to Onboard Me</h2>
      <p className="text-neutral-300 text-sm max-w-sm mt-2">
        Send me a message if you want me to join Arena Studios.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-neutral-200">First name</Label>
            <Input id="firstname" placeholder="Mordi" type="text" className="bg-zinc-900 border-white/[0.2] text-white" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-neutral-200">Last name</Label>
            <Input id="lastname" placeholder="Goldstein" type="text" className="bg-zinc-900 border-white/[0.2] text-white" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-200">Email Address</Label>
          <Input id="email" placeholder="mordi@arenastudios.co" type="email" className="bg-zinc-900 border-white/[0.2] text-white" />
        </LabelInputContainer>
       

        <button
          className="bg-black border border-white/[0.2] relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Message Now &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

    
      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
}