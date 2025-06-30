import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  HiExternalLink as ExternalLink,
  HiArrowRight as ArrowRight
} from 'react-icons/hi';
import { FaGithub as Github } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { projects, textContent } from '@/constants';

interface ProjectsSectionProps {
  projects?: any[];
  showViewAllButton?: boolean;
}

export function ProjectsSection({
  projects: projectsProp,
  showViewAllButton = true
}: ProjectsSectionProps = {}) {
  if (projectsProp?.length === 0) {
    return null;
  }

  const projectsToShow = projectsProp || projects;
  const sortedProjects = [...projectsToShow].sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {textContent.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {textContent.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sortedProjects.map((project, index) => (
            <article key={index}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} - ${project.description}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && project.liveUrl !== '' && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="bg-background text-foreground border-border hover:bg-muted"
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {textContent.projects.buttons.liveDemo}
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== '' && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="bg-background text-foreground border-border hover:bg-muted"
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {textContent.projects.buttons.code}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {showViewAllButton && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-background text-foreground border-border hover:bg-muted"
              asChild
            >
              <Link href="/projects">
                {textContent.projects.buttons.viewAll}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
