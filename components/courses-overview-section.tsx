import { CoursesSection } from '@/components/courses-section';
import { coursesData, textContent } from '@/constants';

export function CoursesOverviewSection() {
  if (coursesData.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {textContent.about.coursesTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {textContent.about.coursesSubtitle}
            </p>
          </div>
          <CoursesSection courses={coursesData} showAll={false} />
        </div>
      </div>
    </section>
  );
}
