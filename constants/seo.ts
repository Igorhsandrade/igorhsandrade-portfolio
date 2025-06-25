// Structured data for SEO
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Igor Andrade',
  jobTitle: 'Full-Stack Developer',
  description:
    'Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies',
  url: 'https://igorhsandrade.dev',
  sameAs: [
    'https://github.com/igorhsandrade',
    'https://linkedin.com/in/igorhsandrade',
    'https://twitter.com/igorhsandrade'
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Full-Stack Development',
    'Web Development'
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Technological Federal University of Paraná (UTFPR)'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Remote',
    addressCountry: 'Worldwide'
  },
  email: 'igorhsandrade@gmail.com',
  image: 'https://igorhsandrade.dev/profile-image.jpg'
};
