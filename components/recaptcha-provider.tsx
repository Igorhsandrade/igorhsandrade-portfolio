'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface RecaptchaContextType {
  isLoaded: boolean;
  error: string | null;
}

const RecaptchaContext = createContext<RecaptchaContextType>({
  isLoaded: false,
  error: null
});

export const useRecaptcha = () => useContext(RecaptchaContext);

interface RecaptchaProviderProps {
  children: React.ReactNode;
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    // If no site key, mark as "loaded" to not block the form
    if (!siteKey) {
      console.warn('No reCAPTCHA site key found, skipping reCAPTCHA loading');
      setIsLoaded(true);
      return;
    }

    // Check if reCAPTCHA is already loaded
    if (window.grecaptcha && window.grecaptcha.render) {
      console.log('reCAPTCHA already loaded');
      setIsLoaded(true);
      return;
    }

    // Check if script is already in DOM
    const existingScript = document.querySelector('script[src*="recaptcha"]');
    if (existingScript) {
      console.log('reCAPTCHA script already exists, waiting for load...');
      // Set up a polling mechanism to check when it's ready
      const checkInterval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          setIsLoaded(true);
          clearInterval(checkInterval);
        }
      }, 100);

      // Clear interval after 10 seconds to prevent infinite polling
      setTimeout(() => {
        clearInterval(checkInterval);
        if (!isLoaded) {
          setError('reCAPTCHA failed to load (timeout)');
          setIsLoaded(true); // Allow form to work without reCAPTCHA
        }
      }, 10000);

      return () => clearInterval(checkInterval);
    }

    console.log('Loading reCAPTCHA script...');

    // Load the reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log('reCAPTCHA script loaded');
      // Wait a bit for grecaptcha to be fully ready
      setTimeout(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          setIsLoaded(true);
        } else {
          setError('reCAPTCHA object not available after script load');
          setIsLoaded(true); // Allow form to work
        }
      }, 100);
    };

    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script');
      setError('Failed to load reCAPTCHA script');
      setIsLoaded(true); // Allow form to work without reCAPTCHA
    };

    document.head.appendChild(script);

    // Fallback timeout
    const fallbackTimeout = setTimeout(() => {
      if (!isLoaded) {
        console.warn('reCAPTCHA loading timeout, allowing form to proceed');
        setError('reCAPTCHA loading timeout');
        setIsLoaded(true);
      }
    }, 8000);

    return () => {
      clearTimeout(fallbackTimeout);
      // Don't remove script as it might be used by other components
    };
  }, [isLoaded]);

  return (
    <RecaptchaContext.Provider value={{ isLoaded, error }}>
      {children}
    </RecaptchaContext.Provider>
  );
}
