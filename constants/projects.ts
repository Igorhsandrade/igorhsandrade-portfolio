export type ProjectCategory =
  | 'Full-Stack'
  | 'Front-End'
  | 'Back-End'
  | 'Mobile'
  | 'DevOps';

export type Technology =
  | 'Next.js'
  | 'React'
  | 'TypeScript'
  | 'JavaScript'
  | 'Node.js'
  | 'Express'
  | 'PostgreSQL'
  | 'MongoDB'
  | 'Redis'
  | 'Stripe'
  | 'Socket.io'
  | 'Chart.js'
  | 'Weather API'
  | 'Tailwind'
  | 'Docker'
  | 'Python'
  | 'Django'
  | 'Flask'
  | 'AWS'
  | 'Azure'
  | 'Google Cloud'
  | 'Kubernetes'
  | 'GraphQL'
  | 'REST API'
  | 'MySQL'
  | 'Firebase'
  | 'Vercel'
  | 'Netlify';

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: Technology[];
  liveUrl: string;
  githubUrl: string;
  category: ProjectCategory;
}

export type ProjectsData = Project[];

export const projects: ProjectsData = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: '/placeholder.svg?height=200&width=300',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full-Stack'
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
    image: '/placeholder.svg?height=200&width=300',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full-Stack'
  },
  {
    title: 'Weather Dashboard',
    description:
      'Interactive weather application with location-based forecasts, historical data, and beautiful visualizations.',
    image: '/placeholder.svg?height=200&width=300',
    tech: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Front-End'
  },
  {
    title: 'API Gateway Service',
    description:
      'Microservices API gateway with authentication, rate limiting, and comprehensive logging system.',
    image: '/placeholder.svg?height=200&width=300',
    tech: ['Node.js', 'Express', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Back-End'
  }
];
