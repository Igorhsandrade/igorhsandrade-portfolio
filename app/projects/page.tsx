import type { Metadata } from 'next';
import { ProjectsSection } from '@/components/projects-section';
import { SectionWrapper } from '@/components/section-wrapper';
import { projects } from '@/constants';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Explore Igor Andrade's portfolio of full-stack web applications. See projects built with React, Next.js, Node.js, and modern technologies including e-commerce platforms, data visualization tools, and more.",
  keywords: [
    'Igor Andrade projects',
    'full-stack projects',
    'React projects',
    'Next.js applications',
    'Node.js projects',
    'web development portfolio',
    'JavaScript applications',
    'TypeScript projects',
    'modern web apps'
  ],
  openGraph: {
    title: 'Projects - Igor Andrade Portfolio',
    description:
      "Explore Igor Andrade's portfolio of full-stack web applications built with modern technologies.",
    url: 'https://igorhsandrade.dev/projects',
    siteName: 'Igor Andrade - Full-Stack Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Igor Andrade Projects Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Igor Andrade Portfolio',
    description:
      "Explore Igor Andrade's portfolio of full-stack web applications built with modern technologies.",
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://igorhsandrade.dev/projects'
  }
};

export default function ProjectsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Igor Andrade Projects',
            description:
              'Portfolio of full-stack web applications by Igor Andrade',
            url: 'https://igorhsandrade.dev/projects',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: projects.length,
              itemListElement: projects.map((project: any, index: number) => ({
                '@type': 'CreativeWork',
                position: index + 1,
                name: project.title,
                description: project.description,
                url: project.liveUrl || project.githubUrl,
                creator: {
                  '@type': 'Person',
                  name: 'Igor Andrade'
                }
              }))
            }
          })
        }}
      />

      <div className="pt-16">
        <SectionWrapper variant="default">
          <section className="py-20">
            <div className="container">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  My Projects
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A collection of web applications and projects I've built using
                  modern technologies and best practices. Each project showcases
                  different aspects of full-stack development.
                </p>
              </div>
            </div>
          </section>
          <ProjectsSection />
        </SectionWrapper>
      </div>
    </>
  );
}
