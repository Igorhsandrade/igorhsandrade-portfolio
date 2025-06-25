import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  FaCalendarAlt as Calendar,
  FaClock as Clock,
  FaRocket as Rocket
} from 'react-icons/fa';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { RecaptchaProvider } from '@/components/recaptcha-provider';
import { textContent } from '@/constants';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Ready to collaborate
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {textContent.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {textContent.contact.subtitle}
            </p>
          </div>

          {/* Contact Form */}
          <Card className="p-8 mb-12 shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
            <RecaptchaProvider>
              <ContactForm />
            </RecaptchaProvider>
          </Card>

          {/* Call-to-Action Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {textContent.contact.directContact}
                </h3>
                <p className="text-muted-foreground mb-6">
                  Skip the form and let's have a direct conversation about your
                  project
                </p>
              </div>

              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl border-0 h-14 px-8"
              >
                <Link
                  href="https://calendar.app.google/cxLrXJJ4uGyHyL4V7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 text-base font-semibold"
                >
                  <Calendar className="w-5 h-5" />
                  {textContent.contact.buttons.appointment}
                </Link>
              </Button>

              <p className="text-sm text-muted-foreground mt-4 italic">
                Let's connect and bring your ideas to life ✨
              </p>

              {/* Benefits/Features */}
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm">Quick Response</h4>
                    <p className="text-muted-foreground text-xs">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
