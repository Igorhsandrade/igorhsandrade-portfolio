'use client';
import { Button } from '@/components/ui/button';
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaEnvelope as Mail,
  FaMapMarkerAlt as MapPin
} from 'react-icons/fa';
import Link from 'next/link';
import { useLocale } from '@/components/locale-provider';

export function Footer() {
  const { t } = useLocale();
  // Use a fixed year or generate it in a way that's consistent between server and client
  const currentYear = 2025; // Or use: Math.max(2024, new Date().getFullYear())

  return (
    <footer className="py-16 border-t bg-muted/20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link href="/" className="text-2xl font-bold mb-4 block">
                {t.header.name}
              </Link>
              <p className="text-muted-foreground mb-4 max-w-md">
                {t.footer.description}
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://github.com/igorhsandrade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.common.ariaLabels.githubProfile}
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">
                      {t.common.screenReaderOnly.github}
                    </span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://linkedin.com/in/igorhsandrade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.common.ariaLabels.linkedinProfile}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">
                      {t.common.screenReaderOnly.linkedin}
                    </span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="mailto:igorhsandrade@gmail.com"
                    aria-label={t.common.ariaLabels.sendEmail}
                  >
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">
                      {t.common.screenReaderOnly.email}
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1">
              <h4 className="font-semibold mb-4">
                {t.footer.quickLinks.title}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.footer.quickLinks.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.footer.quickLinks.projects}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.footer.quickLinks.courses}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certifications"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.footer.quickLinks.certifications}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.footer.quickLinks.contact}
                  </Link>
                </li>
                <li>
                  <a
                    href="/assets/Igor___Software_Engineer_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.footer.quickLinks.resume}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-1">
              <h4 className="font-semibold mb-4">
                {t.footer.contactInfo.title}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:igorhsandrade@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    {t.footer.contactInfo.email}
                  </Link>
                </li>
                <li className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {t.footer.contactInfo.location}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground">
                  © {currentYear} {t.header.name}.{' '}
                  {t.footer.legal.copyright}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  {t.footer.legal.privacyPolicy}
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  {t.footer.legal.termsOfService}
                </Link>
                <span className="hidden sm:inline">•</span>
                <span>{t.footer.legal.builtWith}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
