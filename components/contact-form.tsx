'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaEnvelope as Mail } from 'react-icons/fa';
import { textContent } from '@/constants';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRecaptcha } from './recaptcha-provider';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { isLoaded } = useRecaptcha();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const isDevelopment = process.env.NODE_ENV === 'development';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // In development, allow bypassing reCAPTCHA if it's not working
    if (!isDevelopment && !isVerified) {
      setMessage({
        type: 'error',
        text: textContent.contact.form.recaptchaRequired
      });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      // Get form data
      const formData = new FormData(e.currentTarget);
      const recaptchaToken = recaptchaRef.current?.getValue();

      // In development, allow submission without reCAPTCHA token
      if (!isDevelopment && !recaptchaToken) {
        throw new Error('reCAPTCHA token not found');
      }
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
        recaptchaToken: recaptchaToken || 'development-bypass'
      };

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Reset form and reCAPTCHA
      e.currentTarget.reset();
      recaptchaRef.current?.reset();
      setIsVerified(false);

      setMessage({
        type: 'success',
        text: result.message || textContent.contact.form.successMessage
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Error sending message. Please try again.';
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleRecaptchaChange = (token: string | null) => {
    setIsVerified(!!token);
    if (message?.type === 'error' && message.text.includes('reCAPTCHA')) {
      setMessage(null);
    }
  };
  const handleRecaptchaError = () => {
    setIsVerified(false);
    console.error('reCAPTCHA error occurred');
    setMessage({
      type: 'error',
      text: 'reCAPTCHA failed to load. This might be due to invalid keys or domain mismatch. Please check the console for details.'
    });
  };

  const handleRecaptchaExpired = () => {
    setIsVerified(false);
    console.log('reCAPTCHA expired');
    setMessage({
      type: 'error',
      text: 'reCAPTCHA expired. Please verify again.'
    });
  };

  return (
    <form className={`space-y-6 ${className || ''}`} onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {textContent.contact.form.name}
          </label>
          <Input
            id="name"
            name="name"
            placeholder={textContent.contact.form.namePlaceholder}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {textContent.contact.form.email}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={textContent.contact.form.emailPlaceholder}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          {textContent.contact.form.subject}
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder={textContent.contact.form.subjectPlaceholder}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {textContent.contact.form.message}
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={textContent.contact.form.messagePlaceholder}
          rows={5}
          required
        />
      </div>{' '}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={(!isDevelopment && !isVerified) || isSubmitting}
      >
        {siteKey}
        {`isDevelpovment ${isDevelopment} isVerified ${isVerified}`}
        {isSubmitting
          ? textContent.contact.form.sending
          : textContent.contact.form.sendButton}
        <Mail className="w-5 h-5 ml-2" />
      </Button>{' '}
      {/* Google reCAPTCHA */}
      {siteKey && isLoaded && (
        <div className="flex flex-col items-center space-y-2">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={siteKey}
            onChange={handleRecaptchaChange}
            onError={handleRecaptchaError}
            onExpired={handleRecaptchaExpired}
            theme="light"
          />
          {process.env.NODE_ENV === 'development' && (
            <div className="text-xs text-muted-foreground">
              Site Key: {siteKey.substring(0, 20)}...
            </div>
          )}
        </div>
      )}
      {siteKey && !isLoaded && (
        <div className="flex justify-center">
          <div className="text-center text-sm text-muted-foreground">
            Loading reCAPTCHA...
          </div>
        </div>
      )}{' '}
      {!siteKey && (
        <div className="text-center text-sm text-muted-foreground">
          reCAPTCHA configuration required
        </div>
      )}
      {isDevelopment && !siteKey && (
        <div className="text-center text-xs text-yellow-600 bg-yellow-50 p-2 rounded">
          🚧 Development Mode: reCAPTCHA is disabled. Form will work without
          verification.
        </div>
      )}
      {/* Status Message */}
      {message && (
        <div
          className={`text-center text-sm ${
            message.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
