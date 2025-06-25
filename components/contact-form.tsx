'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaEnvelope as Mail, FaCheckCircle } from 'react-icons/fa';
import { textContent } from '@/constants';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRecaptcha } from './recaptcha-provider';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    subject: string;
  } | null>(null);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { isLoaded, error } = useRecaptcha();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; // Form can be submitted if:
  // 1. reCAPTCHA is verified, OR
  // 2. No site key configured (reCAPTCHA disabled)
  const canSubmit = isVerified || !siteKey;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Store form reference before async operations
    const form = e.currentTarget;

    // Require reCAPTCHA verification when configured
    if (!isVerified && siteKey) {
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
      const formData = new FormData(form);
      const recaptchaToken = recaptchaRef.current?.getValue();

      // Require reCAPTCHA token when configured
      if (!recaptchaToken && siteKey) {
        throw new Error('reCAPTCHA token not found');
      }

      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
        recaptchaToken: recaptchaToken || ''
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

      // Store submitted data for success message
      setSubmittedData({
        name: data.name,
        email: data.email,
        subject: data.subject
      });

      // Reset form and reCAPTCHA
      form.reset();
      recaptchaRef.current?.reset();
      setIsVerified(false);

      // Show success state
      setIsSuccess(true);
      setMessage(null);
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
      text: 'reCAPTCHA failed to load. Please refresh the page and try again later.'
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

  // Success message component
  if (isSuccess && submittedData) {
    return (
      <div className={`${className || ''}`}>
        <div className="text-center space-y-8 py-12">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <FaCheckCircle className="w-12 h-12 text-primary" />
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-primary/5 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-foreground">
                {textContent.contact.form.success.title}
              </h3>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Response Time Card */}
          <div className="max-w-md mx-auto">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <span className="text-2xl">⏱️</span>
                <div className="text-center">
                  <p className="font-medium text-foreground">
                    {textContent.contact.form.success.responseTime.title}
                  </p>
                  <p className="text-sm">
                    {textContent.contact.form.success.responseTime.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-muted-foreground space-y-2 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <span>🔒</span>
              <p>{textContent.contact.form.success.security.privacy}</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📱</span>
              <p>{textContent.contact.form.success.security.urgentContact}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
      {/* Google reCAPTCHA */}
      {siteKey && isLoaded && !error && (
        <div className="flex flex-col items-center space-y-2">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={siteKey}
            onChange={handleRecaptchaChange}
            onError={handleRecaptchaError}
            onExpired={handleRecaptchaExpired}
            theme="light"
          />
        </div>
      )}
      {siteKey && !isLoaded && !error && (
        <div className="flex justify-center">
          <div className="text-center text-sm text-muted-foreground">
            Loading reCAPTCHA...
          </div>
        </div>
      )}{' '}
      {error && (
        <div className="text-center text-sm text-red-600 bg-red-50 p-2 rounded">
          ❌ reCAPTCHA failed to load ({error}). Please refresh the page and try
          again later.
        </div>
      )}{' '}
      {!siteKey && (
        <div className="text-center text-sm text-muted-foreground">
          reCAPTCHA configuration required
        </div>
      )}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={!canSubmit || isSubmitting}
      >
        {isSubmitting
          ? textContent.contact.form.sending
          : textContent.contact.form.sendButton}
        <Mail className="w-5 h-5 ml-2" />
      </Button>{' '}
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
