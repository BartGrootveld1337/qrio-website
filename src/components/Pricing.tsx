import { Check, ArrowRight, Sparkles, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const scrollToContactWithPlan = (planName: string) => {
    // Update URL with plan parameter (for bookmarking/sharing)
    window.history.pushState({}, '', `/?plan=${planName}`);
    
    // Dispatch custom event so Contact component can pick it up
    window.dispatchEvent(new CustomEvent('planSelected', { detail: { plan: planName } }));
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect om te starten met AI-geletterdheid",
      price: "Gratis",
      priceDetail: "tot 10 gebruikers",
      features: [
        "Basis AI-geletterdheid cursus",
        "Toegang tot alle standaard modules",
        "Gamification & streaks",
        "Basis voortgangsrapportage",
        "Community support",
      ],
      cta: "Start gratis",
      ctaLink: "https://app.qrioapp.nl/signup-options",
      isExternal: true,
      highlighted: false,
      icon: Users,
    },
    {
      name: "Professional",
      description: "Voor organisaties die serieus aan de slag gaan",
      price: "€2,50",
      priceDetail: "per gebruiker / maand",
      yearlyNote: "Jaarlijks gefactureerd",
      features: [
        "Alles uit Starter, plus:",
        "Onbeperkt gebruikers",
        "EU AI Act Compliance module",
        "Uitgebreid compliance dashboard",
        "Certificaten & audit trail",
        "Eigen branding optioneel",
        "Priority email support",
        "SSO (Microsoft Entra ID)",
      ],
      cta: "Vraag offerte aan",
      ctaLink: "",
      isExternal: false,
      highlighted: true,
      badge: "Meest gekozen",
      icon: Sparkles,
    },
    {
      name: "Enterprise",
      description: "Voor grote organisaties met specifieke eisen",
      price: "Op maat",
      priceDetail: "neem contact op",
      features: [
        "Alles uit Professional, plus:",
        "Onbeperkt eigen content & modules",
        "Dedicated customer success manager",
        "Custom integraties (API)",
        "On-premise optie beschikbaar",
        "SLA garanties",
        "Training voor beheerders",
      ],
      cta: "Vraag offerte aan",
      ctaLink: "",
      isExternal: false,
      highlighted: false,
      icon: Building2,
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Sparkles size={16} />
            Transparante prijzen
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-display">
            Kies het plan dat bij je past
          </h2>
          <p className="text-lg text-gray-600">
            Start gratis, upgrade wanneer je wilt. Geen verrassingen, geen verborgen kosten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${
                plan.highlighted 
                  ? 'shadow-2xl shadow-primary/20 border-2 border-primary ring-4 ring-primary/10' 
                  : 'shadow-lg border border-gray-100 hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-bold">
                  {plan.badge}
                </div>
              )}
              
              <div className={`p-8 ${plan.badge ? 'pt-14' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.highlighted ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                    <plan.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{plan.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-primary' : 'text-secondary'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{plan.priceDetail}</span>
                  {plan.yearlyNote && (
                    <p className="text-xs text-gray-400 mt-1">{plan.yearlyNote}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-primary/10 text-primary' : 'bg-green-50 text-green-600'
                      }`}>
                        <Check size={12} />
                      </div>
                      <span className={`text-sm ${feature.includes('Alles uit') ? 'font-semibold text-secondary' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                {plan.isExternal ? (
                  <a 
                    href={plan.ctaLink}
                    className={`group flex items-center justify-center gap-2 w-full py-3.5 font-bold rounded-xl transition-all ${
                      plan.highlighted
                        ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl'
                        : 'bg-gray-100 text-secondary hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() => scrollToContactWithPlan(plan.name)}
                    className={`group flex items-center justify-center gap-2 w-full py-3.5 font-bold rounded-xl transition-all cursor-pointer ${
                      plan.highlighted
                        ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl'
                        : 'bg-gray-100 text-secondary hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ teaser */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500">
            Vragen over onze prijzen? {' '}
            <a href="/#over-ons" className="text-primary font-medium hover:underline">
              Bekijk de FAQ
            </a>
            {' '}of{' '}
            <a href="/#contact" className="text-primary font-medium hover:underline">
              neem contact op
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
