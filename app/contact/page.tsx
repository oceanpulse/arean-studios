import BackgroundGradientDemo from "@/components/background-gradient-demo"
import SignupFormDemo from "@/components/signup-form-demo"

export default function ContactPage() {
  return (
    <main className="flex h-3/6 flex-col items-center justify-between p-24 mt-20">
      <div>
        <BackgroundGradientDemo>
          <SignupFormDemo />
        </BackgroundGradientDemo>
      </div>
    </main>
  )
}