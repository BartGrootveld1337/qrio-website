import { Users, Sparkles, Building2 } from 'lucide-react';

export type BillingCycle = 'monthly' | 'quarterly' | 'semiannual' | 'annual';

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: Record<BillingCycle, number>;
  priceDetail: string;
  features: string[];
  cta: string;
  ctaLink?: string;
  popular: boolean;
  icon: any;
}

export const pricingPlans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: "Met Qrio Starter zorg je dat mensen snappen wat AI is en hoe ze het veilig kunnen gebruiken.",
    price: {
      monthly: 3.50,
      quarterly: 3.25,
      semiannual: 3.00,
      annual: 2.75
    },
    priceDetail: "per medewerker / maand",
    features: [
      "Basis AI-geletterdheid",
      "Standaard support"
    ],
    cta: "Offerte aanvragen",
    popular: false,
    icon: Users
  },
  {
    id: 'pro',
    name: 'Pro',
    description: "Qrio Pro maakt AI-gebruik slimmer, veiliger en meetbaar binnen je organisatie.",
    price: {
      monthly: 5.50,
      quarterly: 5.25,
      semiannual: 5.00,
      annual: 4.75
    },
    priceDetail: "per medewerker / maand",
    features: [
      "Verdiepende modules",
      "Rapportages",
      "Alles uit Starter"
    ],
    cta: "Offerte aanvragen",
    popular: true,
    icon: Sparkles
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: "Enterprise is voor organisaties die AI-geletterdheid niet alleen willen aanbieden, maar ook aantoonbaar willen maken.",
    price: {
      monthly: 7.50,
      quarterly: 7.25,
      semiannual: 7.00,
      annual: 6.75
    },
    priceDetail: "per medewerker / maand",
    features: [
      "SLA",
      "Maatwerk",
      "Premium support",
      "Alles uit Pro"
    ],
    cta: "Offerte aanvragen",
    popular: false,
    icon: Building2
  }
];
