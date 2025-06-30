import type { Metadata } from 'next';
import { Timeline } from '@/components/timeline';
import { SectionWrapper } from '@/components/section-wrapper';
import { workExperiences, educationExperiences } from '@/constants';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Explore Igor Andrade's professional journey and educational background. Discover my work experience as a full-stack developer and my path in software engineering.",
  keywords: [
    'Igor Andrade experience',
    'full-stack developer career',
    'software engineer timeline',
    'work experience',
    'education background',
    'professional journey',
    'React developer career',
    'Next.js developer experience'
  ],
  openGraph: {
    title: 'About Igor Andrade - Professional Journey',
    description:
      "Explore Igor Andrade's professional journey and educational background as a full-stack developer with experience in modern web technologies.",
    url: 'https://igorhsandrade.dev/about',
    siteName: 'Igor Andrade - Full-Stack Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Igor Andrade - Professional Journey'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Igor Andrade - Professional Journey',
    description:
      "Explore Igor Andrade's professional journey and educational background as a full-stack developer with experience in modern web technologies.",
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://igorhsandrade.dev/about'
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'Person',
              name: 'Igor Andrade',
              jobTitle: 'Full-Stack Developer',
              description:
                'Full-stack developer with experience in modern web technologies and software engineering',
              url: 'https://igorhsandrade.dev/about',
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Python',
                'Full-Stack Development',
                'Web Development'
              ]
            }
          })
        }}
      />

      <div className="pt-16">
        <SectionWrapper variant="default">
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="container px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    My Journey
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                    Explore my professional experience and educational
                    background through this timeline
                  </p>
                </div>
                <Timeline
                  workExperiences={workExperiences}
                  educationExperiences={educationExperiences}
                />
              </div>
            </div>
          </section>
        </SectionWrapper>
      </div>
    </>
  );
}
