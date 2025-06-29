import Link from 'next/link';
import { CertificatesSection } from '@/components/certificates-section';
import { Button } from '@/components/ui/button';
import { certificatesData, textContent } from '@/constants';

export function CertificatesOverviewSection() {
  if (certificatesData.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {textContent.about.certificatesTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {textContent.about.certificatesSubtitle}
            </p>
            <Button asChild variant="outline">
              <Link href="/certifications">
                {textContent.about.buttons.viewAllCertifications}
              </Link>
            </Button>
          </div>
          <CertificatesSection
            certificates={certificatesData}
            showAll={false}
          />
        </div>
      </div>
    </section>
  );
}
