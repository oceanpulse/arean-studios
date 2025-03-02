"use client"
import { useEffect, useState } from "react"
import type React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import emailjs from '@emailjs/browser';

export default function SignupFormDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const firstname = (form.elements.namedItem('firstname') as HTMLInputElement).value;
    const lastname = (form.elements.namedItem('lastname') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    // Add type safety checks for environment variables
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    // Check if credentials are properly set
    if (!serviceID || !templateID || !publicKey) {
      console.error('EmailJS credentials are not properly configured');
      setSubmitStatus({ 
        type: 'error', 
        message: 'Email service not configured properly. Please contact the administrator.' 
      });
      setIsSubmitting(false);
      return;
    }
    
    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: `${firstname} ${lastname}`,
        reply_to: email,
        message: message
      },
      publicKey
    )
    .then(() => {
      setSubmitStatus({ 
        type: 'success', 
        message: 'Your message has been sent successfully!' 
      });
      form.reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-[22px] p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200">Ready to Onboard Me</h2>
      <p className="text-neutral-300 text-sm max-w-sm mt-2">
        I am ready to join Arena Studios.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-neutral-200">First name</Label>
            <Input id="firstname" name="firstname" placeholder="Mordi" type="text" className="bg-zinc-900 border-white/[0.2] text-white" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-neutral-200">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Goldstein" type="text" className="bg-zinc-900 border-white/[0.2] text-white" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-200">Email Address</Label>
          <Input id="email" name="email" placeholder="mordi@arenastudios.co" type="email" className="bg-zinc-900 border-white/[0.2] text-white" required />
        </LabelInputContainer>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message" className="text-neutral-200">Your Message</Label>
          <Textarea 
            id="message" 
            name="message"
            placeholder="" 
            className="bg-zinc-900 border-white/[0.2] text-white min-h-[120px] resize-none"
            required
          />
        </LabelInputContainer>

        {submitStatus.message && (
          <div className={`mb-4 p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
            {submitStatus.message}
          </div>
        )}

        <button
          className={`bg-black border border-white/[0.2] relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Message Now'} {!isSubmitting && '→'}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
};