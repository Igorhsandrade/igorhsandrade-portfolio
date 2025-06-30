export type CertificateStatus = 'Active' | 'Renewed' | 'Expired';

export interface Certificate {
  title: string;
  issuer: string;
  dateIssued: string;
  credentialId: string;
  verificationUrl: string;
  image: string;
  skills: string[];
  description: string;
  status: CertificateStatus;
  order: number;
}

export type CertificatesData = Certificate[];

export const certificatesData: CertificatesData = [
  {
    title: 'Storytelling, Presentation Techniques, and Media Training',
    issuer: 'Fundacao Getulio Vargas (FGV)',
    dateIssued: 'April 2022',
    credentialId: '254067312',
    verificationUrl:
      'https://brasilopenbadge.com.br/pages/badge/67649e9fd1d96983e5221e17044e9c25',
    description: 'A course on effective storytelling and presentation skills.',
    image: '/storytelling.webp',
    skills: ['Storytelling', 'Presentation', 'Media Training'],
    status: 'Active',
    order: 1
  }
];

export const certificatesDataMock: CertificatesData = [
  {
    title: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    dateIssued: 'March 2024',
    credentialId: 'AWS-SAP-2024-001234',
    verificationUrl: 'https://aws.amazon.com/verification',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure'],
    description:
      'Advanced certification demonstrating expertise in designing distributed applications and systems on AWS.',
    status: 'Active',
    order: 1
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    dateIssued: 'January 2024',
    credentialId: 'GCP-PD-2024-567890',
    verificationUrl: 'https://cloud.google.com/certification/verify',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['Google Cloud', 'Kubernetes', 'Docker', 'CI/CD'],
    description:
      'Professional-level certification for designing, building, and deploying applications on Google Cloud.',
    status: 'Active',
    order: 2
  },
  {
    title: 'Microsoft Azure Developer Associate',
    issuer: 'Microsoft',
    dateIssued: 'November 2023',
    credentialId: 'AZ-204-2023-112233',
    verificationUrl:
      'https://docs.microsoft.com/en-us/learn/certifications/verify',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['Azure', 'C#', '.NET', 'Cloud Services'],
    description:
      'Certification validating skills in developing cloud solutions using Microsoft Azure services.',
    status: 'Active',
    order: 3
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    dateIssued: 'September 2023',
    credentialId: 'CKA-2023-445566',
    verificationUrl:
      'https://training.linuxfoundation.org/certification/verify',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Linux'],
    description:
      'Hands-on certification demonstrating skills in Kubernetes administration and troubleshooting.',
    status: 'Active',
    order: 4
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB Inc.',
    dateIssued: 'July 2023',
    credentialId: 'MDB-DEV-2023-778899',
    verificationUrl: 'https://university.mongodb.com/verify_certificate',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['MongoDB', 'NoSQL', 'Database Design', 'Node.js'],
    description:
      'Certification proving proficiency in MongoDB development and database administration.',
    status: 'Active',
    order: 5
  },
  {
    title: 'React Developer Certification',
    issuer: 'Meta (Facebook)',
    dateIssued: 'May 2023',
    credentialId: 'META-REACT-2023-334455',
    verificationUrl: 'https://developers.facebook.com/certification/verify',
    image: '/placeholder.svg?height=200&width=300',
    skills: ['React', 'JavaScript', 'Frontend Development', 'JSX'],
    description:
      'Official Meta certification demonstrating advanced React development skills and best practices.',
    status: 'Renewed',
    order: 6
  }
];
