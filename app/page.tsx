import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Download,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggleSimple } from '@/components/theme-toggle-simple';
import { SkillsSection } from '@/components/skills-section';
import { CertificatesSection } from '@/components/certificates-section';
import {
  skillsData,
  certificatesData,
  projects,
  jsonLd,
  metadata,
  textContent
} from '@/constants';

export { metadata };

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        {/* Header/Navigation */}
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
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  {textContent.header.navigation.resume}
                </Button>
              </nav>
              <ThemeToggleSimple />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-background to-slate-500/5 dark:from-teal-600/20 dark:via-background dark:to-slate-700/10" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  <MapPin className="w-3 h-3 mr-1" />
                  {textContent.hero.availability}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                {textContent.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {textContent.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="#projects">
                    {textContent.hero.buttons.viewWork}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-background text-foreground border-border hover:bg-muted"
                  asChild
                >
                  <Link href="#contact">
                    <Mail className="w-5 h-5 mr-2" />
                    {textContent.hero.buttons.contactMe}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {textContent.about.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {textContent.about.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-teal-500 to-teal-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <Image
                        src="/placeholder.svg?height=256&width=256"
                        alt={textContent.common.imageAlt}
                        width={256}
                        height={256}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {textContent.about.background.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {textContent.about.background.content}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {textContent.about.approach.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {textContent.about.approach.content}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Skills Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-8">
                  {textContent.about.skillsTitle}
                </h3>
                <SkillsSection skills={skillsData} />
              </div>

              {/* Certificates Section in About */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">
                  {textContent.about.certificatesTitle}
                </h3>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {textContent.about.certificatesSubtitle}
                </p>
                <CertificatesSection
                  certificates={certificatesData}
                  showAll={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {textContent.projects.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {textContent.projects.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {projects.map((project, index) => (
                <article key={index}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={`${project.title} - ${project.description}`}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-background text-foreground border-border hover:bg-muted"
                        >
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {textContent.projects.buttons.liveDemo}
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-background text-foreground border-border hover:bg-muted"
                        >
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            {textContent.projects.buttons.code}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-background text-foreground border-border hover:bg-muted"
              >
                {textContent.projects.buttons.viewAll}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {textContent.contact.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {textContent.contact.subtitle}
                </p>
              </div>

              <Card className="p-8">
                <form className="space-y-6" action="#" method="POST">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        {textContent.contact.form.name}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={textContent.contact.form.namePlaceholder}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        {textContent.contact.form.email}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={textContent.contact.form.emailPlaceholder}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      {textContent.contact.form.subject}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={textContent.contact.form.subjectPlaceholder}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {textContent.contact.form.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={textContent.contact.form.messagePlaceholder}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    {textContent.contact.form.sendButton}
                    <Mail className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Card>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  {textContent.contact.directContact}
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-background text-foreground border-border hover:bg-muted"
                  >
                    <Link href="mailto:alex@example.com">
                      <Mail className="w-4 h-4 mr-2" />
                      {textContent.contact.buttons.email}
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-background text-foreground border-border hover:bg-muted"
                  >
                    <Link
                      href="https://linkedin.com/in/alexjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      {textContent.contact.buttons.linkedin}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 border-t bg-muted/20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                {/* Brand Section */}
                <div className="md:col-span-2">
                  <Link href="/" className="text-2xl font-bold mb-4 block">
                    {textContent.header.name}
                  </Link>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    {textContent.footer.description}
                  </p>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href="https://github.com/alexjohnson"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={textContent.common.ariaLabels.githubProfile}
                      >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">
                          {textContent.common.screenReaderOnly.github}
                        </span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href="https://linkedin.com/in/alexjohnson"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          textContent.common.ariaLabels.linkedinProfile
                        }
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">
                          {textContent.common.screenReaderOnly.linkedin}
                        </span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href="mailto:alex@example.com"
                        aria-label={textContent.common.ariaLabels.sendEmail}
                      >
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">
                          {textContent.common.screenReaderOnly.email}
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold mb-4">
                    {textContent.footer.quickLinks.title}
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#about"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {textContent.footer.quickLinks.about}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#projects"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {textContent.footer.quickLinks.projects}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#contact"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {textContent.footer.quickLinks.contact}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {textContent.footer.quickLinks.resume}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="font-semibold mb-4">
                    {textContent.footer.contactInfo.title}
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="mailto:alex@example.com"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        {textContent.footer.contactInfo.email}
                      </Link>
                    </li>
                    <li className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {textContent.footer.contactInfo.location}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="pt-8 border-t border-border">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                      © {new Date().getFullYear()} {textContent.header.name}.{' '}
                      {textContent.footer.legal.copyright}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link
                      href="/privacy"
                      className="hover:text-foreground transition-colors"
                    >
                      {textContent.footer.legal.privacyPolicy}
                    </Link>
                    <span>•</span>
                    <Link
                      href="/terms"
                      className="hover:text-foreground transition-colors"
                    >
                      {textContent.footer.legal.termsOfService}
                    </Link>
                    <span>•</span>
                    <span>{textContent.footer.legal.builtWith}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
