import { motion } from 'framer-motion';
import { Target, Heart, Shield, Zap, Users, Award, ArrowRight, Lightbulb, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Toegankelijk",
      description: "AI-kennis moet voor iedereen begrijpelijk zijn, niet alleen voor techneuten."
    },
    {
      icon: Shield,
      title: "Veilig",
      description: "Privacy en security staan altijd voorop. We bouwen met vertrouwen als fundament."
    },
    {
      icon: Zap,
      title: "Praktisch",
      description: "Geen droge theorie, maar direct toepasbare kennis voor de werkvloer."
    },
    {
      icon: Users,
      title: "Menselijk",
      description: "AI vervangt mensen niet. Het versterkt ze. Dat is onze overtuiging."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-secondary">
      <SEO 
        title="Over Qrio | Ons Verhaal en Missie"
        description="Qrio is opgericht met één doel: organisaties helpen om veilig en effectief met AI te werken. Ontdek ons verhaal en onze missie."
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(42,157,143,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,157,143,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Rocket size={16} />
                Opgericht in 2024
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-display leading-tight">
                Wij maken AI <span className="text-gradient">begrijpelijk</span> voor iedereen
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Qrio is ontstaan uit de overtuiging dat AI-kennis geen voorrecht mag zijn. 
                Elk team verdient de kans om veilig en effectief met AI te werken.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  <Target size={14} />
                  Onze Missie
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-display">
                  De kloof dichten tussen AI en de werkvloer
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  De AI-revolutie is begonnen, maar de meeste organisaties zijn er niet klaar voor. 
                  Medewerkers gebruiken tools zonder training, bedrijfsdata lekt naar publieke AI-modellen, 
                  en de EU AI Act eist nu aantoonbare competenties.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Wij geloven dat het anders kan. Met de juiste training wordt AI geen bedreiging, 
                  maar een krachtige bondgenoot. Daarom bouwden we Qrio: een leerplatform dat 
                  compliance combineert met echte productiviteitswinst.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://app.qrioapp.nl/signup-options"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl transition-all group"
                  >
                    Probeer Qrio gratis
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-secondary to-slate-700 rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Lightbulb size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Onze Visie</h3>
                      <p className="text-white/70 text-sm">Waar we naartoe werken</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Een wereld waarin elke professional met vertrouwen AI inzet. 
                    Waar technologie de mens versterkt in plaats van vervangt. 
                    Waar organisaties compliant zijn én floreren dankzij slimme automatisering.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary mb-1">5 min</div>
                      <div className="text-sm text-white/70">Dagelijkse investering</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-white/70">Nederlands product</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-display">
                Onze Kernwaarden
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Deze principes vormen het fundament van alles wat we bouwen.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <Award size={14} />
                Ons Verhaal
              </div>
              <h2 className="text-3xl font-bold text-secondary mb-6 font-display">
                Van frustratie naar oplossing
              </h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Qrio is geboren uit een herkenbaar probleem. Als professionals zagen we hoe 
                  organisaties worstelden met AI-adoptie. Enerzijds de druk om te innoveren, 
                  anderzijds de angst voor datalekken en compliance-risico's.
                </p>
                <p>
                  We zagen managers die AI verboden uit angst. We zagen medewerkers die stiekem 
                  ChatGPT gebruikten met bedrijfsdata. We zagen dure trainingen die niemand afmaakte.
                </p>
                <p>
                  Er moest een betere manier zijn. Een oplossing die leuk is om te gebruiken, 
                  die écht iets bijbrengt, en die organisaties helpt om compliant te zijn aan 
                  de nieuwe EU AI Act.
                </p>
                <p>
                  Zo ontstond Qrio: een platform dat gamification combineert met serieuze 
                  compliance. Waar medewerkers in 5 minuten per dag AI-vaardig worden. 
                  Waar managers real-time inzicht hebben in de voortgang. Waar auditors 
                  een complete trail vinden.
                </p>
                <p className="font-medium text-secondary">
                  We zijn pas net begonnen, maar we bouwen met een duidelijke missie: 
                  AI-geletterdheid toegankelijk maken voor elke organisatie in Nederland.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-teal-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] rounded-full blur-3xl bg-white/10" />
          </div>
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Klaar om samen te werken?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                We helpen je graag om je organisatie AI-ready te maken.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://app.qrioapp.nl/signup-options"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all group"
                >
                  Start gratis proefperiode
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/30 font-bold rounded-xl hover:bg-white/10 transition-all"
                >
                  Neem contact op
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
