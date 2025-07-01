import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { WorkExperience, EducationExperience } from '@/constants';
import {
  BsBriefcase,
  BsMortarboard,
  BsGeoAlt,
  BsCalendar,
  BsBoxArrowUpRight
} from 'react-icons/bs';

interface TimelineProps {
  workExperiences: WorkExperience[];
  educationExperiences: EducationExperience[];
}

export function Timeline({
  workExperiences,
  educationExperiences
}: TimelineProps) {
  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  const getIcon = (type: 'work' | 'education') => {
    return type === 'work' ? (
      <BsBriefcase className="w-5 h-5" />
    ) : (
      <BsMortarboard className="w-5 h-5" />
    );
  };

  const getIconBgColor = (type: 'work' | 'education') => {
    return type === 'work'
      ? 'bg-primary dark:bg-primary'
      : 'bg-accent dark:bg-accent';
  };

  const getTypeColor = (type: 'work' | 'education') => {
    return type === 'work'
      ? 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary dark:border-primary/30'
      : 'bg-accent/10 text-accent border-accent/20 dark:bg-accent/20 dark:text-accent dark:border-accent/30';
  };

  const renderTimelineSection = (
    sectionExperiences: WorkExperience[] | EducationExperience[],
    sectionType: 'work' | 'education',
    startIndex: number = 0
  ) => (
    <div className="relative">
      {/* Mobile timeline line - thinner and closer, extends through section items */}
      <div
        className="block sm:hidden absolute left-3 top-3 w-0.5 bg-gradient-to-b from-primary/30 via-accent/30 to-muted-foreground/30 rounded-full"
        style={{ height: `calc(100% - 3rem)` }}
      ></div>

      {/* Desktop timeline line - extends through section items */}
      <div
        className="hidden sm:block absolute left-7 top-7 w-1 bg-gradient-to-b from-primary/30 via-accent/30 to-muted-foreground/30 rounded-full"
        style={{ height: `calc(100% - 3.5rem)` }}
      ></div>

      <div className="space-y-6 sm:space-y-12">
        {sectionExperiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative flex items-start gap-4 sm:gap-8 group animate-[fadeInUp_0.6s_ease-out_forwards]"
            style={{
              animationDelay: `${(startIndex + index) * 0.15}s`,
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            {/* Mobile timeline icon - smaller and simpler */}
            <div
              className={`
                flex sm:hidden items-center justify-center 
                w-3 h-3 rounded-full 
                ${getIconBgColor(sectionType)} text-white shadow-md
                ring-2 ring-white dark:ring-gray-900
                flex-shrink-0 relative z-10 left-[7px]
              `}
            >
              <div className="w-3 h-3 hidden sm:block">
                {getIcon(sectionType)}
              </div>

              {/* Subtle pulse for current position on mobile */}
              {experience.endDate === 'Present' && (
                <div className="absolute inset-0 rounded-full animate-pulse bg-primary/20"></div>
              )}
            </div>

            {/* Desktop timeline icon */}
            <div
              className={`
                hidden sm:flex items-center justify-center 
                w-14 h-14 rounded-full 
                ${getIconBgColor(sectionType)} text-white shadow-xl
                ring-4 ring-white dark:ring-gray-900
                transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl
                flex-shrink-0 relative z-10
              `}
            >
              <div className="w-5 h-5">{getIcon(sectionType)}</div>

              {/* Subtle pulse for current position on desktop */}
              {experience.endDate === 'Present' && (
                <div className="absolute inset-0 rounded-full animate-pulse bg-primary/30"></div>
              )}
            </div>

            {/* Enhanced content card - mobile-first design */}
            <Card className="w-full shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 sm:border-l-4 border-l-transparent group-hover:border-l-primary dark:group-hover:border-l-primary bg-gradient-to-br from-card to-muted/20">
              <CardHeader className="pb-4 sm:pb-6 p-4 sm:p-6">
                {/* Mobile: Type indicator as small badge at top */}
                <div className="sm:hidden mb-3">
                  <Badge
                    variant="outline"
                    className={`w-fit text-xs font-medium px-2 py-1 ${getTypeColor(
                      sectionType
                    )}`}
                  >
                    {sectionType === 'work' ? '💼 Work' : '🎓 Education'}
                  </Badge>
                </div>

                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                          {experience.title}
                        </h3>
                        <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-wrap">
                          {experience.website ? (
                            <a
                              href={experience.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base sm:text-lg lg:text-xl text-primary hover:text-primary/80 font-semibold flex-1 min-w-0 break-words transition-all duration-200 hover:underline underline-offset-2 decoration-2 decoration-primary/30 hover:decoration-primary/60"
                              title={`Visit ${
                                (experience as WorkExperience).company ||
                                (experience as EducationExperience).institution
                              } website`}
                              aria-label={`Visit ${
                                (experience as WorkExperience).company ||
                                (experience as EducationExperience).institution
                              } website`}
                            >
                              {(experience as WorkExperience).company ||
                                (experience as EducationExperience).institution}
                            </a>
                          ) : (
                            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-semibold flex-1 min-w-0 break-words">
                              {(experience as WorkExperience).company ||
                                (experience as EducationExperience).institution}
                            </p>
                          )}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`hidden sm:flex w-fit text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 flex-shrink-0 ${getTypeColor(
                          sectionType
                        )}`}
                      >
                        {sectionType === 'work' ? '💼 Work' : '🎓 Education'}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-2 bg-muted px-2 sm:px-3 py-1 sm:py-1.5 rounded-full w-fit">
                    <BsCalendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="font-medium whitespace-nowrap">
                      {formatDate(experience.startDate)} -{' '}
                      {formatDate(experience.endDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted px-2 sm:px-3 py-1 sm:py-1.5 rounded-full w-fit">
                    <BsGeoAlt className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                    <span className="font-medium break-words">
                      {experience.location}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-2 sm:pt-4 p-4 sm:p-6">
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {experience.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="flex items-start gap-2 sm:gap-3 group/item"
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>

                {experience.technologies &&
                  experience.technologies.length > 0 && (
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                        <span className="w-0.5 sm:w-1 h-3 sm:h-4 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0"></span>
                        <span>Technologies & Skills</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105 break-words"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
      {/* Work Experience Section */}
      {workExperiences.length > 0 && (
        <section>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white flex items-center justify-center">
                <BsBriefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span>Professional Experience</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              My journey in the software development industry
            </p>
          </div>
          {renderTimelineSection(workExperiences, 'work', 0)}
        </section>
      )}

      {/* Education Section */}
      {educationExperiences.length > 0 && (
        <section>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent text-white flex items-center justify-center">
                <BsMortarboard className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span>Education</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Academic background and certifications
            </p>
          </div>
          {renderTimelineSection(
            educationExperiences,
            'education',
            workExperiences.length
          )}
        </section>
      )}
    </div>
  );
}
