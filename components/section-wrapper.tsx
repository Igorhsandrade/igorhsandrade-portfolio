import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  variant?: 'default' | 'muted' | 'accent';
  className?: string;
}

export function SectionWrapper({
  children,
  variant = 'default',
  className
}: SectionWrapperProps) {
  const baseClasses = 'w-full';
  const variantClasses = {
    default: '',
    muted: 'bg-muted/30',
    accent: 'bg-accent/10'
  };

  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}
