// Base interface for common properties
interface BaseExperience {
  id: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies?: string[];
  website?: string;
}

// Work experience interface
export interface WorkExperience extends BaseExperience {
  company: string;
}

// Education experience interface
export interface EducationExperience extends BaseExperience {
  institution: string;
}

// Legacy interface for backwards compatibility
export interface Experience {
  id: string;
  title: string;
  company?: string; // For work experiences
  institution?: string; // For education
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  type: 'work' | 'education';
  technologies?: string[];
  website?: string; // Optional website link for company/institution
}

// Work experiences data
export const workExperiences: WorkExperience[] = [
  {
    id: 'work-1',
    title: 'Software Engineering - HPx Project',
    company: 'Wipro',
    location: 'Remote - São Paulo, BR',
    startDate: '2025-01',
    endDate: 'Present',
    description: [
      'Enhancing microfrontends and legacy code by implementing new features and fixing bugs in React',
      'Styling components using Styled Components and Sass for improved user interface',
      'Implemented new features in JavaScript applications leveraging API-based architecture'
    ],
    technologies: [
      'React',
      'JavaScript',
      'Styled Components',
      'Sass',
      'API Integration'
    ],
    website: 'https://wipro.com'
  },
  {
    id: 'work-2',
    title: 'Software Engineering',
    company: 'Ocarina Studios',
    location: 'Remote - Vancouver, CA',
    startDate: '2023-12',
    endDate: '2024-12',
    description: [
      'Translated Figma designs into responsive UI components, enhancing internal tools and company landing page with TypeScript and ReactJS',
      'Migrated company website from ReactJS to NextJS, utilizing Server Side Rendering components',
      'Implemented Redux to manage shared properties across multiple components of the internal tool',
      'Applied SEO strategies, achieving a perfect score of 100 on Google PageSpeed Insights',
      'Integrated AWS S3 with CloudFront for efficient image hosting and Facebook Pixel for event tracking',
      'Created Python scripts with Selenium for web scraping, collecting over 200,000 relevant data records',
      'Developed Python scripts with RegEx and AWS SDK (Boto3) for text preprocessing and LLM model data management',
      'Developed and optimized backend features in C# with .NET, enhancing CRUD API services',
      'Implemented and maintained unit tests in C# to ensure code quality and robust application performance'
    ],
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Redux',
      'Python',
      'Selenium',
      'AWS S3',
      'CloudFront',
      'C#',
      '.NET',
      'MongoDB'
    ],
    website: 'https://ocarinastudios.com'
  },
  {
    id: 'work-3',
    title: 'Front End Developer',
    company: 'Plundervolt',
    location: 'Remote - Curitiba, BRA',
    startDate: '2023-08',
    endDate: '2023-12',
    description: [
      'Developed landing pages using ReactJS, JavaScript, TypeScript, CSS, and Tailwind CSS',
      'Integrated applications with REST APIs using Axios',
      'Used Git for version control and collaboration on GitHub projects',
      'Participated in the full application development lifecycle, from planning and design to implementation and maintenance',
      'Studied and applied SOLID principles and clean code methodologies',
      'Advanced courses on data structures including hashmaps, hashsets, binary trees, queues, and stacks'
    ],
    technologies: [
      'React',
      'JavaScript',
      'TypeScript',
      'CSS',
      'Tailwind CSS',
      'REST APIs',
      'Axios',
      'Git'
    ],
    website: 'https://linkedin.com/company/plundervolt'
  },
  {
    id: 'work-4',
    title: 'Sales Manager',
    company: 'Smart Energia',
    location: 'Curitiba, BRA',
    startDate: '2021-10',
    endDate: '2023-06',
    description: [
      'Delivered over 500 strategic presentations on the Free Energy Market and energy management',
      'Led detailed energy consumption analyses for over 400 clients and 1,000 consumer units',
      'Conducted technical and financial feasibility studies for migration to the Free Energy Market',
      'Conducted service scope and pricing negotiations with clients and energy product negotiations with suppliers',
      'Provided training for clients on energy management and Free Energy Market operations',
      'Managed and mentored a team of five sales engineers, driving performance and growth'
    ],
    technologies: [
      'Energy Analysis',
      'CCEE Regulations',
      'Financial Modeling',
      'Team Management'
    ],
    website: 'https://smartenergia.com.br'
  }
];

// Education experiences data
export const educationExperiences: EducationExperience[] = [
  {
    id: 'education-1',
    title: 'Post Degree in Data Science and Artificial Intelligence',
    institution: 'UNINTER Centro Universitário Internacional',
    location: 'Remote',
    startDate: '2024-11',
    endDate: '2025-05',
    description: [
      'Advanced studies in Data Science and Artificial Intelligence',
      'Focusing on machine learning algorithms and AI implementation',
      'Practical applications of data analysis and predictive modeling'
    ],
    website: 'https://uninter.com'
  },
  {
    id: 'education-2',
    title: 'Post Degree in Computer Engineering',
    institution: 'UNINTER Centro Universitário Internacional',
    location: 'Remote',
    startDate: '2024-10',
    endDate: '2025-04',
    description: [
      'Advanced studies in Computer Engineering',
      'Specialized focus on software engineering principles',
      'Advanced computer systems and architecture'
    ],
    website: 'https://uninter.com'
  },
  {
    id: 'education-3',
    title: "Bachelor's Degree in Electrical Engineering",
    institution: 'Universidade Tecnológica Federal do Paraná',
    location: 'Curitiba, BR',
    startDate: '2016-01',
    endDate: '2022-12',
    description: [
      'Comprehensive study of electrical engineering fundamentals',
      'Final project: Study of the impact of distributed generation on active power losses of distribution systems',
      'Developed analytical thinking and problem-solving skills',
      'Strong foundation in mathematics, physics, and systems analysis'
    ],
    website: 'https://utfpr.edu.br'
  },
  {
    id: 'education-4',
    title: 'Technical High School Diploma in Computing',
    institution: 'Universidade Tecnológica Federal do Paraná',
    location: 'Campo Mourão, BR',
    startDate: '2012-01',
    endDate: '2015-12',
    description: [
      'Technical education focused on computing and programming fundamentals',
      'Early introduction to software development and computer systems',
      'Strong foundation in mathematics and technical subjects'
    ],
    website: 'https://utfpr.edu.br'
  }
];

// Legacy combined array for backwards compatibility
export const experienceData: Experience[] = [
  ...workExperiences.map(work => ({ ...work, type: 'work' as const })),
  ...educationExperiences.map(education => ({ ...education, type: 'education' as const }))
];
