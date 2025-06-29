import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsOverviewSection } from '@/components/skills-overview-section';
import { CoursesOverviewSection } from '@/components/courses-overview-section';
import { CertificatesOverviewSection } from '@/components/certificates-overview-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { SectionWrapper } from '@/components/section-wrapper';
import { jsonLd, metadata, projects } from '@/constants';

export { metadata };

export default function HomePage() {
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
        <ProjectsSection projects={projects.slice(0, 4)} showViewAllButton={true} />
      </SectionWrapper>

      {/* Muted background sections */}
      <SectionWrapper variant="muted">
        <SkillsOverviewSection />
        <CoursesOverviewSection />
        <CertificatesOverviewSection />
      </SectionWrapper>

      {/* Default background section */}
      <SectionWrapper variant="default">
        <ContactSection />
      </SectionWrapper>
    </>
  );
}
