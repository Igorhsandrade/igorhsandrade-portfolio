import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Igor Andrade - Full-Stack Developer & Software Engineer',
    template: '%s | Igor Andrade - Full-Stack Developer'
  },
  description:
    'Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications with 3+ years of expertise in JavaScript, TypeScript, and cloud solutions.',
  keywords: [
    'full-stack developer',
    'React developer',
    'Next.js developer',
    'Node.js developer',
    'JavaScript developer',
    'TypeScript developer',
    'web developer',
    'software engineer',
    'frontend developer',
    'backend developer',
    'remote developer'
  ],
  authors: [{ name: 'Igor Andrade', url: 'https://igorhsandrade.dev' }],
  creator: 'Igor Andrade',
  publisher: 'Igor Andrade',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://igorhsandrade.dev',
    siteName: 'Igor Andrade - Full-Stack Developer',
    title: 'Igor Andrade - Full-Stack Developer & Software Engineer',
    description:
      'Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications with 5+ years of expertise.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Igor Andrade - Full-Stack Developer',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@igorandrade',
    creator: '@igorandrade',
    title: 'Igor Andrade - Full-Stack Developer & Software Engineer',
    description:
      'Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://igorhsandrade.dev'
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://igorhsandrade.dev'),
  verification: {
    google: 'your-google-verification-code'
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  generator: 'v0.dev'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
