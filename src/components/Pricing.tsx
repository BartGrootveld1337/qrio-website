import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../data/pricing';

const Pricing = () => {
  const scrollToContactWithPlan = (planName: string) => {
    window.history.pushState({}, '', `/?plan=${planName}`);
    window.dispatchEvent(new CustomEvent('planSelected', { detail: { plan: planName } }));
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            Start vandaag nog met het verhogen van de AI-geletterdheid in jouw organisatie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${
                plan.popular 
                  ? 'shadow-2xl shadow-primary/20 border-2 border-primary ring-4 ring-primary/10' 
                  : 'shadow-lg border border-gray-100 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-bold">
                  Meest gekozen
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.popular ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                    <plan.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{plan.name}</h3>
                  </div>
                </div>
                <p className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-4">{plan.subtitle}</p>
                
                <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-primary' : 'text-secondary'}`}>
                      €{plan.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <span className="text-sm text-gray-500">{plan.priceDetail}</span>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2 py-0.5 rounded-md bg-gray-100 text-xs font-medium text-gray-600 w-fit">
                        {plan.billingCycle === 'monthly' ? 'Maandelijks opzegbaar' : 'Jaarlijkse facturatie'}
                      </span>
                      {plan.commitment !== 'Geen' && (
                        <span className="inline-block px-2 py-0.5 rounded-md bg-primary/5 text-xs font-medium text-primary w-fit">
                          {plan.commitment} commitment
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-primary/10 text-primary' : 'bg-green-50 text-green-600'
                      }`}>
                        <Check size={12} />
                      </div>
                      <span className={`text-sm ${feature.startsWith('Alles uit') ? 'font-bold text-secondary' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                {plan.ctaType === 'signup' ? (
                  <>
                    <a
                      href={plan.ctaLink}
                      className={`group flex items-center justify-center gap-2 w-full py-3.5 font-bold rounded-xl transition-all ${
                        plan.popular
                          ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl'
                          : 'bg-gray-100 text-secondary hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <p className="text-center mt-3 text-xs text-gray-400">Geen creditcard nodig</p>
                  </>
                ) : (
                  <button
                    onClick={() => scrollToContactWithPlan(plan.name)}
                    className={`group flex items-center justify-center gap-2 w-full py-3.5 font-bold rounded-xl transition-all cursor-pointer ${
                      plan.popular
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
