import { SkillsSection } from '@/components/skills-section';
import { skillsData, textContent } from '@/constants';

export function SkillsOverviewSection() {
  return (
    <section className="py-20">
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
  );
}
