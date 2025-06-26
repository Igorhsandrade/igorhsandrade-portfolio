'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  HiExternalLink as ExternalLink,
  HiCalendar as Calendar,
  HiClock as Clock,
  HiCheckCircle as CheckCircle,
  HiAcademicCap as AcademicCap
} from 'react-icons/hi';
import { HiPlay as Play } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';

interface Course {
  title: string;
  provider: string;
  dateCompleted: string;
  duration: string;
  certificateUrl?: string;
  courseUrl?: string;
  image: string;
  skills: string[];
  description: string;
  status: 'Completed' | 'In Progress' | 'Certified';
}

interface CoursesSectionProps {
  courses: Course[];
  showAll?: boolean;
  className?: string;
}

export function CoursesSection({
  courses,
  showAll = false,
  className = ''
}: CoursesSectionProps) {
  const displayedCourses = showAll ? courses : courses.slice(0, 6);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800';
      case 'Certified':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-3 h-3" />;
      case 'Certified':
        return <AcademicCap className="w-3 h-3" />;
      case 'In Progress':
        return <Play className="w-3 h-3" />;
      default:
        return <Calendar className="w-3 h-3" />;
    }
  };

  return (
    <div className={className}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.map((course, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
              <Image
                src={course.image || '/placeholder.svg'}
                alt={`${course.title} Course`}
                fill
                className="object-contain p-4 transition-transform group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <Badge
                  className={`text-xs ${getStatusColor(
                    course.status
                  )} flex items-center gap-1`}
                >
                  {getStatusIcon(course.status)}
                  {course.status}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="mb-3">
                <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {course.provider}
                </p>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{course.dateCompleted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {course.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {course.skills.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{course.skills.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="flex gap-2">
                {course.certificateUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`${
                      course.courseUrl ? 'flex-1' : 'w-full'
                    } bg-background text-foreground border-border hover:bg-muted`}
                  >
                    <Link
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AcademicCap className="w-4 h-4 mr-2" />
                      Certificate
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {!showAll && courses.length > 6 && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="bg-background text-foreground border-border hover:bg-muted"
          >
            View All Courses ({courses.length})
            <AcademicCap className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
