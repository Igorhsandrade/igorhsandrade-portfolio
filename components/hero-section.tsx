import { Button } from '@/components/ui/button';
import { HiArrowRight as ArrowRight, HiMail as Mail } from 'react-icons/hi';
import Link from 'next/link';
import { textContent } from '@/constants';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-background to-slate-500/5 dark:from-teal-600/20 dark:via-background dark:to-slate-700/10" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
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
  );
}
