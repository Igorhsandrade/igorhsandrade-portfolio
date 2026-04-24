'use client';
import { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/components/locale-provider';

export function LocaleToggle() {
  const [mounted, setMounted] = useState(false);
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  const next = locale === 'en' ? 'pt' : 'en';
  const label = locale === 'en' ? 'Switch to Portuguese' : 'Switch to English';

  const countryCode = locale === 'en' ? 'US' : 'BR';
  const code = locale === 'en' ? 'EN' : 'PT';

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="gap-1.5 px-2.5" disabled>
        <ReactCountryFlag countryCode="US" svg style={{ width: '1.1em', height: '1.1em' }} />
        <span className="text-xs font-medium">EN</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-1.5 px-2.5"
      onClick={() => setLocale(next)}
      aria-label={label}
    >
      <ReactCountryFlag countryCode={countryCode} svg style={{ width: '1.1em', height: '1.1em' }} />
      <span className="text-xs font-medium">{code}</span>
    </Button>
  );
}
