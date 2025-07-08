import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { FaHome as Home, FaSearch as Search } from 'react-icons/fa';
import { HiArrowLeft as ArrowLeft } from 'react-icons/hi';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description:
    "Sorry, the page you are looking for does not exist. Navigate back to Igor Andrade's portfolio homepage or explore other sections.",
  keywords: [
    '404 error',
    'page not found',
    'Igor Andrade portfolio',
    'navigation error'
  ],
  openGraph: {
    title: '404 - Page Not Found | Igor Andrade',
    description:
      "Sorry, the page you are looking for does not exist. Navigate back to Igor Andrade's portfolio homepage or explore other sections.",
    url: 'https://igorhsandrade.dev/404',
    siteName: 'Igor Andrade - Full-Stack Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '404 - Page Not Found'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '404 - Page Not Found | Igor Andrade',
    description:
      "Sorry, the page you are looking for does not exist. Navigate back to Igor Andrade's portfolio homepage or explore other sections.",
    images: ['/twitter-image.png']
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <SectionWrapper variant="default">
      <div className="container mx-auto px-4 py-16 min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Search Icon Illustration */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-muted/30 flex items-center justify-center">
                <Search className="w-16 h-16 text-muted-foreground/50" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                <span className="text-destructive font-bold text-sm">!</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link
                href="javascript:history.back()"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Link>
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Or explore these sections:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/about"
                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                Projects
              </Link>
              <Link
                href="/certifications"
                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                Certifications
              </Link>
              <Link
                href="/courses"
                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                Courses
              </Link>
              <Link
                href="/contact"
                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
