import type { Metadata } from 'next';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { SectionWrapper } from '@/components/section-wrapper';
import { skillsData, textContent } from '@/constants';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Igor Andrade, a dedicated full-stack developer with over 3 years of experience. Discover my background, skills, and approach to building modern web applications.',
  keywords: [
    'about Igor Andrade',
    'full-stack developer background',
    'web developer experience',
    'software engineer skills',
    'React developer expertise',
    'Next.js developer',
    'TypeScript developer',
    'Node.js developer'
  ],
  openGraph: {
    title: 'About Igor Andrade - Full-Stack Developer',
    description:
      'Learn more about Igor Andrade, a dedicated full-stack developer with over 3 years of experience building modern web applications.',
    url: 'https://igorhsandrade.dev/about',
    siteName: 'Igor Andrade - Full-Stack Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Igor Andrade - Full-Stack Developer'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Igor Andrade - Full-Stack Developer',
    description:
      'Learn more about Igor Andrade, a dedicated full-stack developer with over 3 years of experience building modern web applications.',
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
                'Dedicated full-stack developer with over 3 years of experience crafting web applications',
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
          <AboutSection />
        </SectionWrapper>

        <SectionWrapper variant="muted">
          <section id="skills" className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {textContent.about.skillsTitle}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Technologies and tools I work with to bring ideas to life
                  </p>
                </div>
                <SkillsSection skills={skillsData} />
              </div>
            </div>
          </section>
        </SectionWrapper>
      </div>
    </>
  );
}
