// Structured data for SEO
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alex Johnson',
  jobTitle: 'Full-Stack Developer',
  description:
    'Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies',
  url: 'https://alexjohnson.dev',
  sameAs: [
    'https://github.com/alexjohnson',
    'https://linkedin.com/in/alexjohnson',
    'https://twitter.com/alexjohnsondev'
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'AWS',
    'Full-Stack Development',
    'Web Development'
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'University Name'
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
  email: 'alex@example.com',
  image: 'https://alexjohnson.dev/profile-image.jpg'
};
