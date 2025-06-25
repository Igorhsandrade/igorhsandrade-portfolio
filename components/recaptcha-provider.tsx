'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface RecaptchaContextType {
  isLoaded: boolean;
}

const RecaptchaContext = createContext<RecaptchaContextType>({ isLoaded: false });

export const useRecaptcha = () => useContext(RecaptchaContext);

interface RecaptchaProviderProps {
  children: React.ReactNode;
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if reCAPTCHA is already loaded
    if (window.grecaptcha) {
      setIsLoaded(true);
      return;
    }

    // Load the reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <RecaptchaContext.Provider value={{ isLoaded }}>
      {children}
    </RecaptchaContext.Provider>
  );
}
