import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'primary' | 'dark';
}

const CTABanner = ({
  title = "Klaar om je organisatie AI-ready te maken?",
  subtitle = "Start vandaag nog met de AI-training die echt werkt. Geen lange implementatietrajecten, direct resultaat.",
  ctaText = "Start gratis",
  ctaLink = "https://app.qrioapp.nl/signup-options",
  variant = 'primary'
}: CTABannerProps) => {
  const isPrimary = variant === 'primary';

  return (
    <section className={`py-20 relative overflow-hidden ${isPrimary ? 'bg-gradient-to-br from-primary via-primary to-teal-500' : 'bg-gradient-dark'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className={`absolute top-[-50%] right-[-10%] w-[600px] h-[600px] rounded-full blur-3xl ${isPrimary ? 'bg-white/10' : 'bg-primary/10'}`} />
        <div className={`absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full blur-3xl ${isPrimary ? 'bg-teal-300/20' : 'bg-teal-500/10'}`} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Geen creditcard nodig</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              {ctaText}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/30 font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Plan een gesprek
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
