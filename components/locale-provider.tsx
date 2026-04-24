'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { en, pt } from '@/locales';
import type { TextContent, Locale } from '@/locales';

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TextContent;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {},
  t: en
});

export const useLocale = () => useContext(LocaleContext);

const dictionaries: Record<Locale, TextContent> = { en, pt };

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-locale') as Locale | null;
    if (stored === 'en' || stored === 'pt') {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('portfolio-locale', l);
    document.cookie = `portfolio-locale=${l}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}
