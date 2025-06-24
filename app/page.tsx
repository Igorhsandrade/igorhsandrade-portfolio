import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Download, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggleSimple } from "@/components/theme-toggle-simple"
import { SkillsSection } from "@/components/skills-section"
import { CertificatesSection } from "@/components/certificates-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Alex Johnson's portfolio. Full-stack developer with expertise in React, Next.js, Node.js, and modern web technologies.",
  openGraph: {
    title: "Alex Johnson - Full-Stack Developer Portfolio",
    description:
      "Welcome to Alex Johnson's portfolio. Full-stack developer with expertise in React, Next.js, Node.js, and modern web technologies.",
    url: "https://alexjohnson.dev",
    images: ["/og-home.jpg"],
  },
}

// Structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Johnson",
  jobTitle: "Full-Stack Developer",
  description: "Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies",
  url: "https://alexjohnson.dev",
  sameAs: [
    "https://github.com/alexjohnson",
    "https://linkedin.com/in/alexjohnson",
    "https://twitter.com/alexjohnsondev",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Full-Stack Development",
    "Web Development",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "University Name",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Remote",
    addressCountry: "Worldwide",
  },
  email: "alex@example.com",
  image: "https://alexjohnson.dev/profile-image.jpg",
}

export default function HomePage() {
  const skillsData = [
    // Languages
    { name: "JavaScript", category: "Languages", level: "Expert" as const, years: 5, icon: "code" },
    { name: "TypeScript", category: "Languages", level: "Expert" as const, years: 4, icon: "code" },
    { name: "Python", category: "Languages", level: "Advanced" as const, years: 3, icon: "code" },
    { name: "Java", category: "Languages", level: "Advanced" as const, years: 2, icon: "code" },
    { name: "Go", category: "Languages", level: "Intermediate" as const, years: 1, icon: "code" },
    { name: "Rust", category: "Languages", level: "Beginner" as const, years: 1, icon: "code" },
    { name: "PHP", category: "Languages", level: "Advanced" as const, years: 3, icon: "code" },
    { name: "C++", category: "Languages", level: "Intermediate" as const, years: 2, icon: "code" },

    // Technologies (Frontend & Backend Frameworks)
    { name: "React", category: "Technologies", level: "Expert" as const, years: 5, icon: "cpu" },
    { name: "Next.js", category: "Technologies", level: "Expert" as const, years: 4, icon: "cpu" },
    { name: "Vue.js", category: "Technologies", level: "Advanced" as const, years: 2, icon: "cpu" },
    { name: "Angular", category: "Technologies", level: "Advanced" as const, years: 2, icon: "cpu" },
    { name: "Svelte", category: "Technologies", level: "Intermediate" as const, years: 1, icon: "cpu" },
    { name: "Node.js", category: "Technologies", level: "Expert" as const, years: 5, icon: "cpu" },
    { name: "Express.js", category: "Technologies", level: "Advanced" as const, years: 4, icon: "cpu" },
    { name: "Nest.js", category: "Technologies", level: "Advanced" as const, years: 2, icon: "cpu" },
    { name: "Django", category: "Technologies", level: "Advanced" as const, years: 2, icon: "cpu" },
    { name: "FastAPI", category: "Technologies", level: "Intermediate" as const, years: 1, icon: "cpu" },
    { name: "Spring Boot", category: "Technologies", level: "Intermediate" as const, years: 1, icon: "cpu" },
    { name: "Laravel", category: "Technologies", level: "Intermediate" as const, years: 2, icon: "cpu" },
    { name: "Tailwind CSS", category: "Technologies", level: "Expert" as const, years: 4, icon: "cpu" },
    { name: "Sass/SCSS", category: "Technologies", level: "Advanced" as const, years: 4, icon: "cpu" },

    // Data (Databases & Data Technologies)
    { name: "PostgreSQL", category: "Data", level: "Expert" as const, years: 4, icon: "database" },
    { name: "MongoDB", category: "Data", level: "Advanced" as const, years: 4, icon: "database" },
    { name: "MySQL", category: "Data", level: "Advanced" as const, years: 3, icon: "database" },
    { name: "Redis", category: "Data", level: "Advanced" as const, years: 2, icon: "database" },
    { name: "Elasticsearch", category: "Data", level: "Intermediate" as const, years: 2, icon: "database" },
    { name: "SQLite", category: "Data", level: "Advanced" as const, years: 3, icon: "database" },
    { name: "DynamoDB", category: "Data", level: "Intermediate" as const, years: 1, icon: "database" },
    { name: "GraphQL", category: "Data", level: "Advanced" as const, years: 2, icon: "database" },
    { name: "Prisma", category: "Data", level: "Advanced" as const, years: 2, icon: "database" },

    // Tools (Development Tools, Cloud, DevOps)
    { name: "Git", category: "Tools", level: "Expert" as const, years: 5, icon: "tool" },
    { name: "VS Code", category: "Tools", level: "Expert" as const, years: 5, icon: "tool" },
    { name: "Docker", category: "Tools", level: "Expert" as const, years: 4, icon: "tool" },
    { name: "AWS", category: "Tools", level: "Advanced" as const, years: 3, icon: "tool" },
    { name: "Vercel", category: "Tools", level: "Expert" as const, years: 4, icon: "tool" },
    { name: "Netlify", category: "Tools", level: "Advanced" as const, years: 3, icon: "tool" },
    { name: "GitHub Actions", category: "Tools", level: "Advanced" as const, years: 2, icon: "tool" },
    { name: "Kubernetes", category: "Tools", level: "Intermediate" as const, years: 2, icon: "tool" },
    { name: "Terraform", category: "Tools", level: "Intermediate" as const, years: 1, icon: "tool" },
    { name: "Jenkins", category: "Tools", level: "Beginner" as const, years: 1, icon: "tool" },
    { name: "Figma", category: "Tools", level: "Advanced" as const, years: 3, icon: "tool" },
    { name: "Postman", category: "Tools", level: "Expert" as const, years: 4, icon: "tool" },
    { name: "Jest", category: "Tools", level: "Advanced" as const, years: 3, icon: "tool" },
    { name: "Cypress", category: "Tools", level: "Advanced" as const, years: 2, icon: "tool" },
    { name: "Webpack", category: "Tools", level: "Intermediate" as const, years: 2, icon: "tool" },
    { name: "Vite", category: "Tools", level: "Advanced" as const, years: 2, icon: "tool" },
  ]

  const certificatesData = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      dateIssued: "March 2024",
      credentialId: "AWS-SAP-2024-001234",
      verificationUrl: "https://aws.amazon.com/verification",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["AWS", "Cloud Architecture", "DevOps", "Infrastructure"],
      description:
        "Advanced certification demonstrating expertise in designing distributed applications and systems on AWS.",
      status: "Active" as const,
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      dateIssued: "January 2024",
      credentialId: "GCP-PD-2024-567890",
      verificationUrl: "https://cloud.google.com/certification/verify",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["Google Cloud", "Kubernetes", "Docker", "CI/CD"],
      description:
        "Professional-level certification for designing, building, and deploying applications on Google Cloud.",
      status: "Active" as const,
    },
    {
      title: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      dateIssued: "November 2023",
      credentialId: "AZ-204-2023-112233",
      verificationUrl: "https://docs.microsoft.com/en-us/learn/certifications/verify",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["Azure", "C#", ".NET", "Cloud Services"],
      description: "Certification validating skills in developing cloud solutions using Microsoft Azure services.",
      status: "Active" as const,
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      dateIssued: "September 2023",
      credentialId: "CKA-2023-445566",
      verificationUrl: "https://training.linuxfoundation.org/certification/verify",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Linux"],
      description: "Hands-on certification demonstrating skills in Kubernetes administration and troubleshooting.",
      status: "Active" as const,
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      dateIssued: "July 2023",
      credentialId: "MDB-DEV-2023-778899",
      verificationUrl: "https://university.mongodb.com/verify_certificate",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["MongoDB", "NoSQL", "Database Design", "Node.js"],
      description: "Certification proving proficiency in MongoDB development and database administration.",
      status: "Active" as const,
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      dateIssued: "May 2023",
      credentialId: "META-REACT-2023-334455",
      verificationUrl: "https://developers.facebook.com/certification/verify",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["React", "JavaScript", "Frontend Development", "JSX"],
      description: "Official Meta certification demonstrating advanced React development skills and best practices.",
      status: "Renewed" as const,
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather application with location-based forecasts, historical data, and beautiful visualizations.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "Chart.js", "Weather API", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Front-End",
    },
    {
      title: "API Gateway Service",
      description: "Microservices API gateway with authentication, rate limiting, and comprehensive logging system.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Node.js", "Express", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Back-End",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        {/* Header/Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Alex Johnson
            </Link>
            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
                <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
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
                  Available for Remote Work
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">Full-Stack Developer</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Building scalable web solutions with modern technologies. Passionate about creating exceptional user
                experiences and robust backend systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="#projects">
                    View My Work
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
                    Contact Me
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  I'm a passionate full-stack developer with 5+ years of experience building web applications. I love
                  solving complex problems and turning ideas into reality through clean, efficient code.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-teal-500 to-teal-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <Image
                        src="/placeholder.svg?height=256&width=256"
                        alt="Alex Johnson - Full-Stack Developer"
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
                    <h3 className="text-xl font-semibold mb-2">Background</h3>
                    <p className="text-muted-foreground">
                      Started my journey in computer science and quickly fell in love with web development. I've worked
                      with startups and established companies, helping them build scalable solutions that serve
                      thousands of users.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Approach</h3>
                    <p className="text-muted-foreground">
                      I believe in writing clean, maintainable code and following best practices. I'm always learning
                      new technologies and staying up-to-date with industry trends to deliver the best solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Skills Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-8">Skills & Technologies</h3>
                <SkillsSection skills={skillsData} />
              </div>

              {/* Certificates Section in About */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Continuously expanding my expertise through industry-recognized certifications from leading technology
                  companies.
                </p>
                <CertificatesSection certificates={certificatesData} showAll={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and experience in building modern web
                applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {projects.map((project, index) => (
                <article key={index}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
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
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
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
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-background text-foreground border-border hover:bg-muted"
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
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
                View All Projects
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-muted-foreground">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can work
                  together!
                </p>
              </div>

              <Card className="p-8">
                <form className="space-y-6" action="#" method="POST">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="Project inquiry" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Mail className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Card>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">Or reach out directly:</p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-background text-foreground border-border hover:bg-muted"
                  >
                    <Link href="mailto:alex@example.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-background text-foreground border-border hover:bg-muted"
                  >
                    <Link href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
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
                    Alex Johnson
                  </Link>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    Full-stack developer passionate about creating exceptional web experiences with modern technologies.
                    Always learning, always building.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href="https://github.com/alexjohnson"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href="https://linkedin.com/in/alexjohnson"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="mailto:alex@example.com" aria-label="Send Email">
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Resume
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="font-semibold mb-4">Get In Touch</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="mailto:alex@example.com"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        alex@example.com
                      </Link>
                    </li>
                    <li className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Remote / Worldwide
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="pt-8 border-t border-border">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                      © {new Date().getFullYear()} Alex Johnson. All rights reserved.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href="/privacy" className="hover:text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                    <span>•</span>
                    <Link href="/terms" className="hover:text-foreground transition-colors">
                      Terms of Service
                    </Link>
                    <span>•</span>
                    <span>Built with Next.js & Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
