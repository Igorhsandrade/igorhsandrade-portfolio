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
  order: number;
}

export type ProjectsData = Project[];

export const projects: ProjectsData = [
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and TypeScript for a modern, responsive design.',
    image: '/portfolio.webp',
    tech: ['Next.js', 'TypeScript', 'JavaScript'],
    liveUrl: 'https://igorhsandrade.dev',
    githubUrl: 'https://github.com/Igorhsandrade/igorhsandrade-portfolio',
    category: 'Front-End',
    order: 1
  },
  {
    title: 'Ocarina Studios Landing Page',
    description:
      'A modern, responsive landing page for Ocarina Studios showcasing their portfolio and services.',
    image: '/ocarina.webp',
    tech: ['Next.js', 'TypeScript', 'JavaScript'],
    liveUrl: 'https://ocarinastudios.com',
    githubUrl: '',
    category: 'Front-End',
    order: 2
  }
];

export const projectsMock: ProjectsData = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: '/placeholder.svg?height=200&width=300',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full-Stack',
    order: 1
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
    image: '/placeholder.svg?height=200&width=300',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full-Stack',
    order: 2
  },
  {
    title: 'Weather Dashboard',
    description:
      'Interactive weather application with location-based forecasts, historical data, and beautiful visualizations.',
    image: '/placeholder.svg?height=200&width=300',
    tech: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Front-End',
    order: 3
  },
  {
    title: 'API Gateway Service',
    description:
      'Microservices API gateway with authentication, rate limiting, and comprehensive logging system.',
    image: '/placeholder.svg?height=200&width=300',
    tech: ['Node.js', 'Express', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Back-End',
    order: 4
  }
];
