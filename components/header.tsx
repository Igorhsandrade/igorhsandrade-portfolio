import Link from 'next/link';
import { FaDownload as Download } from 'react-icons/fa';
import { ThemeToggleSimple } from '@/components/theme-toggle-simple';
import { textContent } from '@/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          {textContent.header.name}
        </Link>
        <div className="flex items-center gap-2">
          <nav
            className="hidden md:flex items-center space-x-6"
            role="navigation"
            aria-label={textContent.common.ariaLabels.mainNavigation}
          >
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {textContent.header.navigation.about}
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {textContent.header.navigation.projects}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {textContent.header.navigation.contact}
            </Link>
            <a
              className="text-sm font-medium hover:bg-primary py-1 px-2 outline-1 outline rounded-sm transition-colors flex items-center"
              href="/assets/Igor___Software_Engineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              {textContent.header.navigation.resume}
            </a>
          </nav>
          <ThemeToggleSimple />
        </div>
      </div>
    </header>
  );
}
