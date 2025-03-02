'use client';

import { useRef, useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from '@/app/actions/email-actions';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null });

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setFormStatus({
          message: 'Message sent successfully!',
          type: 'success',
        });
        formRef.current?.reset();
      } else {
        setFormStatus({
          message: result.error || 'Something went wrong. Please try again.',
          type: 'error',
        });
      }
    } catch (error) {
      setFormStatus({
        message: 'An unexpected error occurred.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form ref={formRef} action={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Your name" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="your@email.com" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            name="message" 
            placeholder="Your message here..." 
            rows={4} 
            required 
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        {formStatus.type && (
          <div className={`p-3 rounded-md ${
            formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {formStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};