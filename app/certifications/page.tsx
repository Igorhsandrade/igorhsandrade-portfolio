import type { Metadata } from 'next';
import { CertificatesSection } from '@/components/certificates-section';
import { SectionWrapper } from '@/components/section-wrapper';
import { certificatesData } from '@/constants';

export const metadata: Metadata = {
  title: 'Certifications',
  description:
    "View Igor Andrade's professional certifications from leading technology companies. Industry-recognized certifications in cloud computing, web development, and software engineering.",
  keywords: [
    'Igor Andrade certifications',
    'professional certifications',
    'cloud certifications',
    'web development certifications',
    'software engineer certifications',
    'industry credentials',
    'technology certifications',
    'developer certifications'
  ],
  openGraph: {
    title: 'Certifications - Igor Andrade Professional Credentials',
    description:
      "View Igor Andrade's professional certifications from leading technology companies and industry organizations.",
    url: 'https://igorhsandrade.dev/certifications',
    siteName: 'Igor Andrade - Full-Stack Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Igor Andrade Professional Certifications'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certifications - Igor Andrade Professional Credentials',
    description:
      "View Igor Andrade's professional certifications from leading technology companies and industry organizations.",
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://igorhsandrade.dev/certifications'
  }
};

export default function CertificationsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Igor Andrade Professional Certifications',
            description:
              'Professional certifications earned by Igor Andrade from leading technology companies',
            url: 'https://igorhsandrade.dev/certifications',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: certificatesData.length,
              itemListElement: certificatesData.map(
                (cert: any, index: number) => ({
                  '@type': 'EducationalOccupationalCredential',
                  position: index + 1,
                  name: cert.title,
                  description: cert.description,
                  credentialCategory: 'Professional Certification',
                  recognizedBy: {
                    '@type': 'Organization',
                    name: cert.issuer
                  },
                  dateCreated: cert.date
                })
              )
            }
          })
        }}
      />

      <div className="pt-16">
        <SectionWrapper variant="default">
          <CertificatesSection
            certificates={certificatesData}
            showViewAllButton={false}
          />
        </SectionWrapper>
      </div>
    </>
  );
}
