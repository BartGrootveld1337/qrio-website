import { ArrowRight, CheckCircle, Shield, Zap, Award, TrendingUp, Play, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const Hero = ({
  title = <>Maak je team <span className="text-gradient">AI-vaardig</span> en compliant in 5 minuten per dag</>,
  subtitle = "De slimme leeroplossing die medewerkers traint in veilig en effectief AI-gebruik. Voldoe aan de EU AI Act, voorkom datalekken en boost productiviteit.",
  ctaText = "Start gratis proefperiode",
  ctaLink = "https://app.qrioapp.nl/signup-options",
  secondaryCtaText = "Vraag offerte aan",
  secondaryCtaLink = "#contact"
}: HeroProps) => {

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { icon: Shield, value: "100%", label: "AVG Compliant" },
    { icon: Zap, value: "5 min", label: "Per dag" },
    { icon: Award, value: "EU", label: "AI Act Ready" },
  ];

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden" aria-label="Introductie">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        {/* Animated blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-teal-300/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -30, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            delay: 2
          }}
          className="absolute bottom-[-20%] left-[-15%] w-[700px] h-[700px] bg-gradient-to-tr from-secondary/10 to-primary/5 rounded-full blur-3xl" 
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,157,143,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,157,143,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="max-w-xl lg:max-w-none"
          >
            {/* Badge */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-teal-500/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI Act van kracht sinds 2 februari 2025
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.1] mb-6 font-display"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a 
                href={ctaLink}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-gradient-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 inline-flex items-center justify-center gap-2"
              >
                {ctaText}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href={secondaryCtaLink}
                onClick={secondaryCtaLink === '#contact' ? scrollToContact : undefined}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-secondary border-2 border-gray-200 font-bold rounded-xl hover:border-primary hover:text-primary transition-all inline-flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                {secondaryCtaText}
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500"
            >
             
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:pl-8"
          >
            {/* Main Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 max-w-md mx-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Welkom terug</p>
                  <h3 className="text-xl font-bold text-secondary">Sarah van HR</h3>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-teal-500/10 px-3 py-1.5 rounded-full">
                  <TrendingUp size={14} className="text-primary" />
                  <span className="text-sm font-bold text-primary">Level 4</span>
                </div>
              </div>

              {/* Progress Section */}
              <div className="bg-gradient-to-br from-secondary to-slate-700 rounded-2xl p-6 text-white mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-white/80">AI Geletterdheid</span>
                  <span className="text-2xl font-bold">78%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-teal-400 rounded-full" 
                  />
                </div>
                <p className="text-xs text-white/60">Nog 3 modules tot certificering</p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-3 bg-gray-50 rounded-xl">
                    <stat.icon size={20} className="mx-auto text-primary mb-2" />
                    <div className="text-lg font-bold text-secondary">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Current Module */}
              <div className="flex items-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                  <Play size={20} className="fill-current ml-0.5" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-secondary text-sm">Veilig werken met ChatGPT</div>
                  <div className="text-xs text-gray-500">Module 4 van 12 • 5 min</div>
                </div>
                <div className="text-primary font-bold text-sm">Start →</div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Vandaag behaald</div>
                  <div className="font-bold text-secondary text-sm">3 modules ✓</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-teal-500 rounded-2xl shadow-xl p-4 z-20 text-white"
            >
              <div className="flex items-center gap-3">
                <Award size={24} />
                <div>
                  <div className="text-xs text-white/80">Nieuwe badge!</div>
                  <div className="font-bold text-sm">AI Champion</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/5 to-teal-500/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
