export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type SkillCategory = 'Languages' | 'Technologies' | 'Data' | 'Tools';

export type SkillIcon =
  // Languages
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'java'
  | 'go'
  | 'rust'
  | 'php'
  | 'cpp'
  | 'csharp'
  | 'r'
  // Technologies - Frontend
  | 'react'
  | 'nextjs'
  | 'vuejs'
  | 'angular'
  | 'svelte'
  | 'tailwind'
  | 'sass'
  // Technologies - Backend
  | 'nodejs'
  | 'express'
  | 'nestjs'
  | 'django'
  | 'fastapi'
  | 'spring'
  | 'laravel'
  // Data
  | 'postgresql'
  | 'mongodb'
  | 'mysql'
  | 'redis'
  | 'elasticsearch'
  | 'sqlite'
  | 'dynamodb'
  | 'graphql'
  | 'prisma'
  | 'pandas'
  // Tools
  | 'git'
  | 'vscode'
  | 'docker'
  | 'aws'
  | 'vercel'
  | 'netlify'
  | 'github'
  | 'kubernetes'
  | 'terraform'
  | 'jenkins'
  | 'figma'
  | 'postman'
  | 'jest'
  | 'cypress'
  | 'webpack'
  | 'vite'
  | 'copilot'
  // Generic fallbacks
  | 'code'
  | 'cpu'
  | 'database'
  | 'tool';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  years: number;
  icon: SkillIcon;
}

export type SkillsData = Skill[];

export const skillsData: SkillsData = [
  // Languages
  {
    name: 'JavaScript',
    category: 'Languages',
    level: 'Expert',
    years: 3,
    icon: 'javascript'
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 'Advanced',
    years: 3,
    icon: 'typescript'
  },
  {
    name: 'Python',
    category: 'Languages',
    level: 'Expert',
    years: 3,
    icon: 'python'
  },
  {
    name: 'R',
    category: 'Languages',
    level: 'Beginner',
    years: 1,
    icon: 'r'
  },
  {
    name: 'C#',
    category: 'Languages',
    level: 'Beginner',
    years: 1,
    icon: 'csharp'
  },

  // Technologies (Frontend & Backend Frameworks)
  {
    name: 'React',
    category: 'Technologies',
    level: 'Expert',
    years: 3,
    icon: 'react'
  },
  {
    name: 'Tailwind CSS',
    category: 'Technologies',
    level: 'Expert' as const,
    years: 3,
    icon: 'tailwind'
  },
  {
    name: 'Next.js',
    category: 'Technologies',
    level: 'Advanced',
    years: 3,
    icon: 'nextjs'
  },
  {
    name: 'Node.js',
    category: 'Technologies',
    level: 'Beginner',
    years: 1,
    icon: 'nodejs'
  },
  {
    name: 'Nest.js',
    category: 'Technologies',
    level: 'Beginner',
    years: 1,
    icon: 'nestjs'
  },
  {
    name: 'FastAPI',
    category: 'Technologies',
    level: 'Beginner',
    years: 1,
    icon: 'fastapi'
  },
  {
    name: 'Sass/SCSS',
    category: 'Technologies',
    level: 'Intermediate',
    years: 1,
    icon: 'sass'
  },

  // Data (Databases & Data Technologies)
  {
    name: 'MongoDB',
    category: 'Data',
    level: 'Intermediate',
    years: 2,
    icon: 'mongodb'
  },
  {
    name: 'Pandas',
    category: 'Data',
    level: 'Intermediate' as const,
    years: 2,
    icon: 'pandas'
  },
  {
    name: 'MySQL',
    category: 'Data',
    level: 'Intermediate',
    years: 1,
    icon: 'mysql'
  },
  {
    name: 'Redis',
    category: 'Data',
    level: 'Intermediate',
    years: 1,
    icon: 'redis'
  },
  {
    name: 'GraphQL',
    category: 'Data',
    level: 'Intermediate',
    years: 2,
    icon: 'graphql'
  },

  // Tools (Development Tools, Cloud, DevOps)
  {
    name: 'Git',
    category: 'Tools',
    level: 'Expert' as const,
    years: 5,
    icon: 'git'
  },
  {
    name: 'VS Code',
    category: 'Tools',
    level: 'Expert' as const,
    years: 5,
    icon: 'vscode'
  },
  {
    name: 'Copilot',
    category: 'Tools',
    level: 'Expert' as const,
    years: 2,
    icon: 'copilot'
  },
  {
    name: 'Docker',
    category: 'Tools',
    level: 'Intermediate',
    years: 1,
    icon: 'docker'
  },
  {
    name: 'AWS',
    category: 'Tools',
    level: 'Beginner',
    years: 1,
    icon: 'aws'
  },
  {
    name: 'Postman',
    category: 'Tools',
    level: 'Intermediate',
    years: 2,
    icon: 'postman'
  },
  {
    name: 'Vite',
    category: 'Tools',
    level: 'Beginner',
    years: 1,
    icon: 'vite'
  }
];
export const skillsDataMock: SkillsData = [
  // Languages
  {
    name: 'JavaScript',
    category: 'Languages',
    level: 'Expert' as const,
    years: 5,
    icon: 'javascript'
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 'Expert' as const,
    years: 4,
    icon: 'typescript'
  },
  {
    name: 'Python',
    category: 'Languages',
    level: 'Advanced' as const,
    years: 3,
    icon: 'python'
  },
  {
    name: 'Java',
    category: 'Languages',
    level: 'Advanced' as const,
    years: 2,
    icon: 'java'
  },
  {
    name: 'Go',
    category: 'Languages',
    level: 'Intermediate' as const,
    years: 1,
    icon: 'go'
  },
  {
    name: 'Rust',
    category: 'Languages',
    level: 'Beginner' as const,
    years: 1,
    icon: 'rust'
  },
  {
    name: 'PHP',
    category: 'Languages',
    level: 'Advanced' as const,
    years: 3,
    icon: 'php'
  },
  {
    name: 'C++',
    category: 'Languages',
    level: 'Intermediate' as const,
    years: 2,
    icon: 'cpp'
  },

  // Technologies (Frontend & Backend Frameworks)
  {
    name: 'React',
    category: 'Technologies',
    level: 'Expert' as const,
    years: 5,
    icon: 'react'
  },
  {
    name: 'Next.js',
    category: 'Technologies',
    level: 'Expert' as const,
    years: 4,
    icon: 'nextjs'
  },
  {
    name: 'Vue.js',
    category: 'Technologies',
    level: 'Advanced' as const,
    years: 2,
    icon: 'vuejs'
  },
  {
    name: 'Angular',
    category: 'Technologies',
    level: 'Advanced' as const,
    years: 2,
    icon: 'angular'
  },
  {
    name: 'Svelte',
    category: 'Technologies',
    level: 'Intermediate' as const,
    years: 1,
    icon: 'svelte'
  },
  {
    name: 'Node.js',
    category: 'Technologies',
    level: 'Expert' as const,
    years: 5,
    icon: 'nodejs'
  },
  {
    name: 'Express.js',
    category: 'Technologies',
    level: 'Advanced' as const,
    years: 4,
    icon: 'express'
  },
  {
    name: 'Nest.js',
    category: 'Technologies',
    level: 'Advanced' as const,
    years: 2,
    icon: 'nestjs'
  },
  {
    name: 'Django',
    category: 'Technologies',
    level: 'Advanced' as const,
    years: 2,
    icon: 'django'
  },
  {
    name: 'FastAPI',
    category: 'Technologies',
    level: 'Intermediate' as const,
    years: 1,
    icon: 'fastapi'
  },
  {
    name: 'Spring Boot',
    category: 'Technologies',
    level: 'Intermediate' as const,
    years: 1,
    icon: 'spring'
  },
  {
    name: 'Laravel',
    category: 'Technologies',
    level: 'Intermediate' as const,
    years: 2,
    icon: 'laravel'
  },
  {
    name: 'Tailwind CSS',
    category: 'Technologies',
    level: 'Expert' as const,
    years: 4,
    icon: 'tailwind'
  },
  {
    name: 'Sass/SCSS',
    category: 'Technologies',
    level: 'Advanced' as const,
    years: 4,
    icon: 'sass'
  },

  // Data (Databases & Data Technologies)
  {
    name: 'PostgreSQL',
    category: 'Data',
    level: 'Expert' as const,
    years: 4,
    icon: 'postgresql'
  },
  {
    name: 'MongoDB',
    category: 'Data',
    level: 'Advanced' as const,
    years: 4,
    icon: 'mongodb'
  },
  {
    name: 'MySQL',
    category: 'Data',
    level: 'Advanced' as const,
    years: 3,
    icon: 'mysql'
  },
  {
    name: 'Redis',
    category: 'Data',
    level: 'Advanced' as const,
    years: 2,
    icon: 'redis'
  },
  {
    name: 'Elasticsearch',
    category: 'Data',
    level: 'Intermediate' as const,
    years: 2,
    icon: 'elasticsearch'
  },
  {
    name: 'SQLite',
    category: 'Data',
    level: 'Advanced' as const,
    years: 3,
    icon: 'sqlite'
  },
  {
    name: 'DynamoDB',
    category: 'Data',
    level: 'Intermediate' as const,
    years: 1,
    icon: 'dynamodb'
  },
  {
    name: 'GraphQL',
    category: 'Data',
    level: 'Advanced' as const,
    years: 2,
    icon: 'graphql'
  },
  {
    name: 'Prisma',
    category: 'Data',
    level: 'Advanced' as const,
    years: 2,
    icon: 'prisma'
  },

  // Tools (Development Tools, Cloud, DevOps)
  {
    name: 'Git',
    category: 'Tools',
    level: 'Expert' as const,
    years: 5,
    icon: 'git'
  },
  {
    name: 'VS Code',
    category: 'Tools',
    level: 'Expert' as const,
    years: 5,
    icon: 'vscode'
  },
  {
    name: 'Docker',
    category: 'Tools',
    level: 'Expert' as const,
    years: 4,
    icon: 'docker'
  },
  {
    name: 'AWS',
    category: 'Tools',
    level: 'Advanced' as const,
    years: 3,
    icon: 'aws'
  },
  {
    name: 'Vercel',
    category: 'Tools',
    level: 'Expert' as const,
    years: 4,
    icon: 'vercel'
  },
  {
    name: 'Netlify',
    category: 'Tools',
    level: 'Advanced' as const,
    years: 3,
    icon: 'netlify'
  },
  {
    name: 'GitHub Actions',
    category: 'Tools',
    level: 'Advanced' as const,
    years: 2,
    icon: 'github'
  },
  {
    name: 'Kubernetes',
    category: 'Tools',
    level: 'Intermediate' as const,
    years: 2,
    icon: 'kubernetes'
  },
  {
    name: 'Terraform',
    category: 'Tools',
    level: 'Intermediate' as const,
    years: 1,
    icon: 'terraform'
  },
  {
    name: 'Jenkins',
    category: 'Tools',
    level: 'Beginner' as const,
    years: 1,
    icon: 'jenkins'
  },
  {
    name: 'Figma',
    category: 'Tools',
    level: 'Advanced' as const,
    years: 3,
    icon: 'figma'
  },
  {
    name: 'Postman',
    category: 'Tools',
    level: 'Expert' as const,
    years: 4,
    icon: 'postman'
  },
  {
    name: 'Jest',
    category: 'Tools',
    level: 'Advanced' as const,
    years: 3,
    icon: 'jest'
  },
  {
    name: 'Cypress',
    category: 'Tools',
    level: 'Advanced' as const,
    years: 2,
    icon: 'cypress'
  },
  {
    name: 'Webpack',
    category: 'Tools',
    level: 'Intermediate' as const,
    years: 2,
    icon: 'webpack'
  },
  {
    name: 'Vite',
    category: 'Tools',
    level: 'Advanced' as const,
    years: 2,
    icon: 'vite'
  }
];
