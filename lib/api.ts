import 'server-only';
import { cookies } from 'next/headers';

import { projects as projectsFallback } from '@/constants/projects';
import { coursesData as coursesFallback } from '@/constants/courses';
import { certificatesData as certificatesFallback } from '@/constants/certificates';
import {
  workExperiences as workFallback,
  educationExperiences as educationFallback,
} from '@/constants/experience';
import type { Project } from '@/constants/projects';
import type { Course } from '@/constants/courses';
import type { Certificate } from '@/constants/certificates';
import type { WorkExperience, EducationExperience } from '@/constants/experience';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getLocale(): Promise<string> {
  const cookieStore = await cookies();
  const value = cookieStore.get('portfolio-locale')?.value;
  return value === 'pt' ? 'pt' : 'en';
}

async function apiFetch<T>(path: string, fallback: T): Promise<T> {
  if (!API_URL) return fallback;
  const locale = await getLocale();
  const url = `${API_URL}${path}?locale=${locale}`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.warn(`[api] ${path} → ${res.status}, using fallback`);
      return fallback;
    }
    return res.json() as Promise<T>;
  } catch (err) {
    console.warn(`[api] ${path} fetch failed:`, err);
    return fallback;
  }
}

export async function getProjects(): Promise<Project[]> {
  return apiFetch<Project[]>('/api/projects', projectsFallback);
}

export async function getCourses(): Promise<Course[]> {
  return apiFetch<Course[]>('/api/courses', coursesFallback);
}

export async function getCertificates(): Promise<Certificate[]> {
  return apiFetch<Certificate[]>('/api/certificates', certificatesFallback);
}

export async function getWorkExperiences(): Promise<WorkExperience[]> {
  return apiFetch<WorkExperience[]>('/api/work-experiences', workFallback);
}

export async function getEducationExperiences(): Promise<EducationExperience[]> {
  return apiFetch<EducationExperience[]>('/api/education-experiences', educationFallback);
}
