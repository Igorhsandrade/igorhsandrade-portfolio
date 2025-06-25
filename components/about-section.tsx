import Image from 'next/image';
import { textContent } from '@/constants';

export function AboutSection() {
  return (
    <section id="about" className="py-20">
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-teal-500 to-teal-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/igor.png"
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
        </div>
      </div>
    </section>
  );
}
