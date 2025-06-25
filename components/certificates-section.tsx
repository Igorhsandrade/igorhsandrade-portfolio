'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  HiExternalLink as ExternalLink,
  HiCalendar as Calendar,
  HiCheckCircle as CheckCircle
} from 'react-icons/hi';
import { FaAward as Award } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface Certificate {
  title: string;
  issuer: string;
  dateIssued: string;
  credentialId?: string;
  verificationUrl?: string;
  image: string;
  skills: string[];
  description: string;
  status: 'Active' | 'Expired' | 'Renewed';
}

interface CertificatesSectionProps {
  certificates: Certificate[];
  showAll?: boolean;
  className?: string;
}

export function CertificatesSection({
  certificates,
  showAll = false,
  className = ''
}: CertificatesSectionProps) {
  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, 6);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800';
      case 'Renewed':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800';
      case 'Expired':
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return <CheckCircle className="w-3 h-3" />;
      case 'Renewed':
        return <Award className="w-3 h-3" />;
      default:
        return <Calendar className="w-3 h-3" />;
    }
  };

  return (
    <div className={className}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCertificates.map((certificate, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20">
              <Image
                src={certificate.image || '/placeholder.svg'}
                alt={`${certificate.title} Certificate`}
                fill
                className="object-contain p-4 transition-transform group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <Badge
                  className={`text-xs ${getStatusColor(
                    certificate.status
                  )} flex items-center gap-1`}
                >
                  {getStatusIcon(certificate.status)}
                  {certificate.status}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="mb-3">
                <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                  {certificate.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {certificate.issuer}
                </p>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {certificate.description}
              </p>

              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Issued: {certificate.dateIssued}</span>
              </div>

              {certificate.credentialId && (
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">
                    Credential ID:{' '}
                    <span className="font-mono">
                      {certificate.credentialId}
                    </span>
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {certificate.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {certificate.skills.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{certificate.skills.length - 3} more
                  </Badge>
                )}
              </div>

              {certificate.verificationUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full bg-background text-foreground border-border hover:bg-muted"
                >
                  <Link
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {!showAll && certificates.length > 6 && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="bg-background text-foreground border-border hover:bg-muted"
          >
            View All Certificates ({certificates.length})
            <Award className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
