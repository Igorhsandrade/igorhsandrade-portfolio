import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FaLinkedin as Linkedin, FaEnvelope as Mail } from 'react-icons/fa';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { RecaptchaProvider } from '@/components/recaptcha-provider';
import { textContent } from '@/constants';

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
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
            <RecaptchaProvider>
              <ContactForm />
            </RecaptchaProvider>
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
                <Link href="mailto:igorhsandrade@gmail.com">
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
                  href="https://linkedin.com/in/igorhsandrade"
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
  );
}
