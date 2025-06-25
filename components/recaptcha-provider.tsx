'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from 'react';

interface RecaptchaContextType {
  isLoaded: boolean;
  error: string | null;
  retry: () => void;
}

const RecaptchaContext = createContext<RecaptchaContextType>({
  isLoaded: false,
  error: null,
  retry: () => {}
});

export const useRecaptcha = () => useContext(RecaptchaContext);

interface RecaptchaProviderProps {
  children: React.ReactNode;
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const retry = useCallback(() => {
    setError(null);
    setIsLoaded(false);
    setRetryCount((prev) => prev + 1);
  }, []);

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

    let checkInterval: NodeJS.Timeout | null = null;
    let fallbackTimeout: NodeJS.Timeout | null = null;

    // Check if script is already in DOM
    const existingScript = document.querySelector('script[src*="recaptcha"]');
    if (existingScript) {
      console.log('reCAPTCHA script already exists, waiting for load...');
      // Set up a polling mechanism to check when it's ready
      checkInterval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          setIsLoaded(true);
          if (checkInterval) clearInterval(checkInterval);
        }
      }, 100);

      // Clear interval after 15 seconds to prevent infinite polling
      fallbackTimeout = setTimeout(() => {
        if (checkInterval) clearInterval(checkInterval);
        setError('reCAPTCHA failed to load (timeout)');
        setIsLoaded(true); // Allow form to work without reCAPTCHA
      }, 15000);

      return () => {
        if (checkInterval) clearInterval(checkInterval);
        if (fallbackTimeout) clearTimeout(fallbackTimeout);
      };
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
      const readyCheck = setTimeout(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          setIsLoaded(true);
        } else {
          setError('reCAPTCHA object not available after script load');
          setIsLoaded(true); // Allow form to work
        }
      }, 500);

      // Clear the fallback timeout since script loaded
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
    };

    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script');
      setError('Failed to load reCAPTCHA script');
      setIsLoaded(true); // Allow form to work without reCAPTCHA
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
    };

    document.head.appendChild(script);

    // Fallback timeout for script loading
    fallbackTimeout = setTimeout(() => {
      console.warn('reCAPTCHA loading timeout, allowing form to proceed');
      setError('reCAPTCHA loading timeout');
      setIsLoaded(true);
    }, 12000);

    return () => {
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
      // Don't remove script as it might be used by other components
    };
  }, [retryCount]); // Include retryCount to trigger retry

  return (
    <RecaptchaContext.Provider value={{ isLoaded, error, retry }}>
      {children}
    </RecaptchaContext.Provider>
  );
}
