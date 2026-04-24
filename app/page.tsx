import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsOverviewSection } from '@/components/skills-overview-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { SectionWrapper } from '@/components/section-wrapper';
import { jsonLd, metadata } from '@/constants';
import { getProjects, getCourses, getCertificates } from '@/lib/api';
import { CoursesSection } from '@/components/courses-section';
import { CertificatesSection } from '@/components/certificates-section';

export { metadata };

export default async function HomePage() {
  const [projects, coursesData, certificatesData] = await Promise.all([
    getProjects(),
    getCourses(),
    getCertificates(),
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />

      {/* Default background sections */}
      <SectionWrapper variant="default">
        <AboutSection />
        <ProjectsSection
          projects={projects.slice(0, 4)}
          showViewAllButton={true}
        />
      </SectionWrapper>

      {/* Muted background sections */}
      <SectionWrapper variant="muted">
        <SkillsOverviewSection />
        <CoursesSection
          courses={coursesData.slice(0, 4)}
          showViewAllButton={true}
        />
        <CertificatesSection
          certificates={certificatesData.slice(0, 4)}
          showViewAllButton={true}
        />
      </SectionWrapper>

      {/* Default background section */}
      <SectionWrapper variant="default">
        <ContactSection />
      </SectionWrapper>
    </>
  );
}
