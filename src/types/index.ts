export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface TestimonialCard {
  quote: string;
  name: string;
  location: string;
  initials: string;
  color: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProblemCard {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
