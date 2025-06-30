import type { Metadata } from 'next';
import { ContactSection } from '@/components/contact-section';
import { SectionWrapper } from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Igor Andrade. Available for new opportunities, collaborations, and freelance projects. Contact a full-stack developer and software engineer.',
  keywords: [
    'Igor Andrade contact',
    'contact developer',
    'hire full-stack developer',
    'software engineer contact',
    'web developer for hire',
    'freelance developer',
    'collaboration opportunities',
    'business inquiries'
  ],
  openGraph: {
    title: 'Contact - Igor Andrade Full-Stack Developer',
    description:
      'Get in touch with Igor Andrade for new opportunities, collaborations, and freelance projects.',
    url: 'https://igorhsandrade.dev/contact',
    siteName: 'Igor Andrade - Full-Stack Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Igor Andrade - Full-Stack Developer'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Igor Andrade Full-Stack Developer',
    description:
      'Get in touch with Igor Andrade for new opportunities, collaborations, and freelance projects.',
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://igorhsandrade.dev/contact'
  }
};

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Igor Andrade',
            description:
              'Contact page for Igor Andrade - Full-Stack Developer and Software Engineer',
            url: 'https://igorhsandrade.dev/contact',
            mainEntity: {
              '@type': 'Person',
              name: 'Igor Andrade',
              jobTitle: 'Full-Stack Developer',
              description: 'Software Engineer and Full-Stack Developer',
              url: 'https://igorhsandrade.dev',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Professional Inquiries',
                availableLanguage: ['English', 'Portuguese']
              }
            }
          })
        }}
      />

      <div className="pt-16">
        <SectionWrapper variant="default">
          <ContactSection />
        </SectionWrapper>
      </div>
    </>
  );
}
