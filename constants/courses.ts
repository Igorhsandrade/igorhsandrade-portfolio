export type CourseStatus = 'Completed' | 'In Progress' | 'Certified';

export interface Course {
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
  order: number;
}

export type CoursesData = Course[];

export const coursesData: CoursesData = [
  {
    title: 'Google Data Analytics',
    provider: 'Coursera',
    dateCompleted: 'Sep 2024',
    duration: '30 hours',
    certificateUrl:
      'https://coursera.org/share/9f968cef2ada120c58f30f2b0fcc9df3',
    image: '/google.webp',
    skills: [
      'Data Validation',
      'Data Analysis',
      'Data Storytelling',
      'Presentations'
    ],
    description:
      'Introductory course covering core math for data science, including algebra, calculus, linear algebra, and numerical analysis, with career-focused foundations',
    status: 'Completed',
    order: 1
  },
  {
    title: 'Mathematics for Machine Learning',
    provider: 'Coursera',
    dateCompleted: 'Sep 2024',
    duration: '20 hours',
    certificateUrl:
      'https://coursera.org/share/bdb8c0257f101cacbc463f88ac277283',
    image: '/imperial.webp',
    skills: ['NumPy', 'Data Manipulation', 'Applied Mathematics', 'Calculus'],
    description:
      'Course sequence covering essential math for data science: linear algebra, data properties, PCA, optimization, and neural network training',
    status: 'Completed',
    order: 2
  },
  {
    title: 'Expressway to Data Science: Essential Math',
    provider: 'Coursera',
    dateCompleted: 'Sep 2024',
    duration: '40 hours',
    certificateUrl:
      'https://coursera.org/share/ab39a9bc9d48ad6d45e21ef65d3b9d1b',
    image: '/colorado.webp',
    skills: [
      'Calculus',
      'Data Analysis',
      'Numerical Analysis',
      'Linear Algebra'
    ],
    description:
      'Introductory course covering core math for data science, including algebra, calculus, linear algebra, and numerical analysis, with career-focused foundations',
    status: 'Completed',
    order: 3
  }
];

export const coursesDataMock: CoursesData = [
  {
    title: 'Complete React Developer Course',
    provider: 'Udemy',
    dateCompleted: 'March 2024',
    duration: '40 hours',
    certificateUrl: 'https://udemy.com/certificate/react-2024',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['React', 'JavaScript', 'Redux', 'React Router'],
    description:
      'Comprehensive course covering React fundamentals, hooks, state management, and modern development practices.',
    status: 'Completed',
    order: 1
  },
  {
    title: 'AWS Solutions Architect Associate',
    provider: 'A Cloud Guru',
    dateCompleted: 'January 2024',
    duration: '35 hours',
    certificateUrl: 'https://acloudguru.com/certificate/aws-saa',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda'],
    description:
      'In-depth training for AWS Solutions Architect certification covering core AWS services and best practices.',
    status: 'Certified',
    order: 2
  },
  {
    title: 'Node.js: The Complete Guide',
    provider: 'Udemy',
    dateCompleted: 'November 2023',
    duration: '45 hours',
    certificateUrl: 'https://udemy.com/certificate/nodejs-2023',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    description:
      'Complete Node.js course covering backend development, APIs, databases, and deployment.',
    status: 'Completed',
    order: 3
  },
  {
    title: 'Machine Learning Specialization',
    provider: 'Coursera',
    dateCompleted: 'September 2023',
    duration: '3 months',
    certificateUrl: 'https://coursera.org/certificate/ml-specialization',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'Scikit-learn'],
    description:
      'Stanford University course covering machine learning algorithms, neural networks, and practical applications.',
    status: 'Certified',
    order: 4
  },
  {
    title: 'Advanced TypeScript',
    provider: 'Frontend Masters',
    dateCompleted: 'July 2023',
    duration: '8 hours',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['TypeScript', 'Advanced Types', 'Generics', 'Type Guards'],
    description:
      'Advanced TypeScript concepts including utility types, conditional types, and complex type manipulations.',
    status: 'Completed',
    order: 5
  },
  {
    title: 'Docker and Kubernetes Complete Course',
    provider: 'Udemy',
    dateCompleted: 'May 2023',
    duration: '22 hours',
    certificateUrl: 'https://udemy.com/certificate/docker-k8s-2023',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['Docker', 'Kubernetes', 'DevOps', 'Container Orchestration'],
    description:
      'Comprehensive course on containerization and orchestration with Docker and Kubernetes.',
    status: 'Completed',
    order: 6
  },
  {
    title: 'Next.js 14 Masterclass',
    provider: 'YouTube',
    dateCompleted: 'April 2024',
    duration: '12 hours',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['Next.js', 'React', 'Server Components', 'App Router'],
    description:
      'Latest Next.js 14 features including app router, server components, and modern deployment strategies.',
    status: 'Completed',
    order: 7
  },
  {
    title: 'GraphQL with Apollo',
    provider: 'Pluralsight',
    dateCompleted: 'February 2024',
    duration: '6 hours',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['GraphQL', 'Apollo', 'React', 'API Design'],
    description:
      'Building modern APIs with GraphQL and Apollo, including client-side integration with React.',
    status: 'In Progress',
    order: 8
  }
];
