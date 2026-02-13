import { Users, Sparkles, Building2 } from 'lucide-react';

export type BillingCycle = 'monthly' | 'quarterly' | 'semiannual' | 'annual';

export interface Plan {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  billingType: 'individual' | 'business';
  price: Record<BillingCycle, number>;
  priceDetail: string;
  features: string[];
  cta: string;
  ctaType: 'signup' | 'contact_form';
  ctaLink?: string;
  popular: boolean;
  icon: typeof Users | typeof Sparkles | typeof Building2;
  stripePriceId: string | null;
  stripeProductId: string | null;
}

export const pricingPlans: Plan[] = [
  {
    id: 'standaard',
    name: 'Standaard',
    slug: 'standaard',
    subtitle: 'Voor individueel gebruik',
    description: "Word AI-vaardig op je eigen tempo. Leer de basis van veilig en effectief AI-gebruik.",
    billingType: 'individual',
    price: {
      monthly: 3.50,
      quarterly: 3.50,
      semiannual: 3.50,
      annual: 3.50
    },
    priceDetail: "per licentie / maand",
    features: [
      "Toegang tot basiscursussen",
      "Prompt bibliotheek",
      "Kennisbank",
      "Persoonlijk dashboard"
    ],
    cta: "Start gratis",
    ctaType: 'signup',
    ctaLink: "https://app.qrioapp.nl/signup-options",
    popular: false,
    icon: Users,
    stripePriceId: null,
    stripeProductId: null
  },
  {
    id: 'pro',
    name: 'Pro for Business',
    slug: 'pro-for-business',
    subtitle: 'Voor zakelijk gebruik',
    description: "Maak AI-gebruik slimmer, veiliger en meetbaar binnen je organisatie.",
    billingType: 'business',
    price: {
      monthly: 5.00,
      quarterly: 4.75,
      semiannual: 4.75,
      annual: 4.50
    },
    priceDetail: "per licentie / maand",
    features: [
      "Alles uit Standaard",
      "Verdiepende modules",
      "Compliance rapportages",
      "Beheerdersdashboard",
      "Medewerkers uitnodigen"
    ],
    cta: "Neem contact op",
    ctaType: 'contact_form',
    popular: true,
    icon: Sparkles,
    stripePriceId: null,
    stripeProductId: null
  },
  {
    id: 'enterprise',
    name: 'Enterprise for Business',
    slug: 'enterprise-for-business',
    subtitle: 'Voor zakelijk gebruik',
    description: "Voor organisaties die AI-geletterdheid aantoonbaar en op maat willen maken.",
    billingType: 'business',
    price: {
      monthly: 7.50,
      quarterly: 7.13,
      semiannual: 7.13,
      annual: 6.75
    },
    priceDetail: "per licentie / maand",
    features: [
      "Alles uit Pro for Business",
      "SLA",
      "Maatwerk modules",
      "Premium support",
      "Dedicated accountmanager"
    ],
    cta: "Neem contact op",
    ctaType: 'contact_form',
    popular: false,
    icon: Building2,
    stripePriceId: null,
    stripeProductId: null
  }
];
