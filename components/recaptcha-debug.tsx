'use client';

import { useRecaptcha } from './recaptcha-provider';

/**
 * Debug component to show reCAPTCHA status
 * Only renders in development mode
 * Add this component anywhere to debug reCAPTCHA loading issues
 */
export function RecaptchaDebug() {
  const { isLoaded, error } = useRecaptcha();

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">🛠️ reCAPTCHA Debug</div>
      <div>Site Key: {siteKey ? '✅ Configured' : '❌ Missing'}</div>
      <div>Is Loaded: {isLoaded ? '✅ Yes' : '⏳ No'}</div>
      <div>Error: {error ? `❌ ${error}` : '✅ None'}</div>
      <div>
        Script:{' '}
        {typeof window !== 'undefined' && window.grecaptcha
          ? '✅ Loaded'
          : '❌ Missing'}
      </div>
      <div className="mt-2 text-yellow-300">Remove in production!</div>
    </div>
  );
}
