'use client';
import Link from 'next/link';
import {
  HiDownload as Download,
  HiMenu as Menu,
  HiX as X
} from 'react-icons/hi';
import { ThemeToggleSimple } from '@/components/theme-toggle-simple';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { textContent } from '@/constants';
import { useState, useEffect } from 'react';

export function Header() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent hover:from-primary/80 hover:to-foreground/80 transition-all duration-300"
          onClick={closeMenu}
        >
          {textContent.header.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav
            className="flex items-center space-x-6"
            role="navigation"
            aria-label={textContent.common.ariaLabels.mainNavigation}
          >
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {textContent.header.navigation.about}
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {textContent.header.navigation.projects}
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {textContent.header.navigation.courses}
            </Link>
            <Link
              href="/certifications"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {textContent.header.navigation.certifications}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {textContent.header.navigation.contact}
            </Link>
          </nav>

          <Button asChild size="sm" className="gap-2">
            <a
              href="/assets/Igor___Software_Engineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4" />
              {textContent.header.navigation.resume}
            </a>
          </Button>

          <ThemeToggleSimple />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggleSimple />
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mounted && (
        <div
          className={`md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out overflow-hidden ${
            isMobile && isMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container py-4 flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary py-2 transition-all duration-200 hover:translate-x-1"
              onClick={closeMenu}
            >
              {textContent.header.navigation.about}
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-primary py-2 transition-all duration-200 hover:translate-x-1"
              onClick={closeMenu}
            >
              {textContent.header.navigation.projects}
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium hover:text-primary py-2 transition-all duration-200 hover:translate-x-1"
              onClick={closeMenu}
            >
              {textContent.header.navigation.courses}
            </Link>
            <Link
              href="/certifications"
              className="text-sm font-medium hover:text-primary py-2 transition-all duration-200 hover:translate-x-1"
              onClick={closeMenu}
            >
              {textContent.header.navigation.certifications}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary py-2 transition-all duration-200 hover:translate-x-1"
              onClick={closeMenu}
            >
              {textContent.header.navigation.contact}
            </Link>
            <Button
              asChild
              size="sm"
              className="gap-2 w-fit transition-all duration-200 hover:scale-105"
              onClick={closeMenu}
            >
              <a
                href="/assets/Igor___Software_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                {textContent.header.navigation.resume}
              </a>
            </Button>{' '}
          </nav>
        </div>
      )}
    </header>
  );
}
