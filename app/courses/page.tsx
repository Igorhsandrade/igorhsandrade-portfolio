import type { Metadata } from 'next';
import { CoursesSection } from '@/components/courses-section';
import { SectionWrapper } from '@/components/section-wrapper';
import { coursesData, textContent } from '@/constants';

export const metadata: Metadata = {
  title: 'Courses',
  description:
    "Explore Igor Andrade's continuous learning journey through professional development courses. Comprehensive courses and specializations in modern web development, cloud technologies, and software engineering.",
  keywords: [
    'Igor Andrade courses',
    'professional development',
    'web development courses',
    'React courses',
    'JavaScript courses',
    'Node.js courses',
    'cloud development',
    'software engineering education',
    'continuous learning'
  ],
  openGraph: {
    title: 'Courses - Igor Andrade Professional Development',
    description:
      "Explore Igor Andrade's continuous learning journey through professional development courses and specializations.",
    url: 'https://igorhsandrade.dev/courses',
    siteName: 'Igor Andrade - Full-Stack Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Igor Andrade Professional Development Courses'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courses - Igor Andrade Professional Development',
    description:
      "Explore Igor Andrade's continuous learning journey through professional development courses and specializations.",
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://igorhsandrade.dev/courses'
  }
};

export default function CoursesPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Igor Andrade Professional Development Courses',
            description:
              'Comprehensive courses and specializations completed by Igor Andrade',
            url: 'https://igorhsandrade.dev/courses',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: coursesData.length,
              itemListElement: coursesData.map(
                (course: any, index: number) => ({
                  '@type': 'Course',
                  position: index + 1,
                  name: course.title,
                  description: course.description,
                  provider: {
                    '@type': 'Organization',
                    name: course.issuer
                  },
                  teaches: course.skills
                })
              )
            }
          })
        }}
      />

      <div className="pt-16">
        <SectionWrapper variant="default">
          <CoursesSection courses={coursesData} showViewAllButton={false} />
        </SectionWrapper>
      </div>
    </>
  );
}
