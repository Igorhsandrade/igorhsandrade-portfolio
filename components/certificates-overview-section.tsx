import { CertificatesSection } from '@/components/certificates-section';
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {textContent.about.certificatesSubtitle}
            </p>
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
