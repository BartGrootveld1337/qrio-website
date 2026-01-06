import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, GraduationCap, Trophy, BookOpen, ShieldCheck, Users, Settings, CheckCircle, Target, Sparkles, BarChart3, UserPlus, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = '/#contact';
    }
  };

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Dashboard Screenshot */}
        <section className="pt-32 pb-20 bg-secondary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Het alles-in-één platform voor <span className="text-primary">AI-adoptie</span>.
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Van speelse micro-learning voor medewerkers tot serieuze compliance rapportages voor management. Qrio biedt alles wat je nodig hebt om je organisatie AI-ready te maken.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://app.qrioapp.nl/signup-options"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 inline-flex items-center gap-2"
                  >
                    Probeer gratis <ArrowRight size={20} />
                  </a>
                  <button 
                    onClick={scrollToContact}
                    className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20"
                  >
                    Vraag een demo aan
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div 
                  className="relative z-10 cursor-pointer group"
                  onClick={() => openLightbox('/screenshots/dashboard.jpg', 'Qrio Dashboard - Medewerker overzicht met leerpad, voortgang en gamification')}
                >
                  <img 
                    src="/screenshots/dashboard.jpg" 
                    alt="Qrio Dashboard - Medewerker overzicht met leerpad, voortgang en gamification"
                    className="rounded-2xl shadow-2xl border border-white/10 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Divider: Voor de Medewerker */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Users size={16} /> Voor de Medewerker
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Leren, Presteren & Groeien
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontdek hoe Qrio medewerkers helpt om AI-vaardigheden op een leuke en effectieve manier te ontwikkelen.
            </p>
          </div>
        </section>

        {/* Feature 1: Gestructureerde Leerpaden */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                  <GraduationCap size={14} /> Leerpaden
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Volg je eigen pad van beginner tot expert.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Geen droge theorie, maar een gestructureerd leerpad met direct toepasbare kennis. Leer AI veilig en effectief inzetten met hapklare cursussen en modules, van de absolute basis tot geavanceerde skills voor jouw specifieke rol.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: Target, text: 'Gestructureerde modules van basis tot gevorderd' },
                    { icon: Sparkles, text: 'Direct toepasbare kennis voor je dagelijkse werk' },
                    { icon: CheckCircle, text: 'Duidelijke voortgangsindicatie per cursus' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-purple-600" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2"
              >
                <div 
                  className="relative z-10 cursor-pointer group"
                  onClick={() => openLightbox('/screenshots/Cursussen.jpg', 'Qrio Cursussen - Gestructureerde leerpaden met modules en lessen')}
                >
                  <img 
                    src="/screenshots/Cursussen.jpg" 
                    alt="Qrio Cursussen - Gestructureerde leerpaden met modules en lessen"
                    className="rounded-2xl shadow-2xl border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-purple-100 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 2: Interactieve Quizzen */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div 
                    className="relative cursor-pointer group"
                    onClick={() => openLightbox('/screenshots/quiz_1.jpg', 'Qrio Quiz - Correcte antwoord feedback')}
                  >
                    <img 
                      src="/screenshots/quiz_1.jpg" 
                      alt="Qrio Quiz - Correcte antwoord feedback"
                      className="rounded-xl shadow-xl border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      ✓ Correct
                    </div>
                  </div>
                  <div 
                    className="relative mt-8 cursor-pointer group"
                    onClick={() => openLightbox('/screenshots/quiz_2.jpg', 'Qrio Quiz - Fout antwoord met uitleg')}
                  >
                    <img 
                      src="/screenshots/quiz_2.jpg" 
                      alt="Qrio Quiz - Fout antwoord met uitleg"
                      className="rounded-xl shadow-xl border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      ✗ Leer hiervan
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10" />
              </motion.div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                  <CheckCircle size={14} /> Kennis-Checks
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Test je kennis en leer door te doen.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Na elke module toets je direct je kennis met een korte, interactieve quiz. Krijg onmiddellijk feedback op je antwoorden en verdien XP-punten. Zo weet je zeker dat je de stof beheerst en ben je klaar voor de volgende stap.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                  <h4 className="font-bold text-secondary mb-3">Waarom quizzen werken:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-blue-600" />
                      Directe feedback versterkt het leereffect
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-blue-600" />
                      XP-punten motiveren om door te gaan
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-blue-600" />
                      Foute antwoorden worden uitgelegd
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Gamification */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
                  <Trophy size={14} /> Gamification
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Leren wordt een leuke competitie.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Vergeet saaie e-learnings. Qrio maakt leren leuk met gamification. Verdien XP, stijg in level en verover je plek op de algemene ranglijst. Daag collega's uit en maak van compliance een dagelijkse gewoonte.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="h-12 w-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 mb-4">
                      <Trophy size={24} />
                    </div>
                    <h4 className="font-bold text-secondary mb-2">Ranglijst</h4>
                    <p className="text-sm text-gray-600">Bekijk wie de meeste XP heeft verdiend en daag collega's uit.</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <BarChart3 size={24} />
                    </div>
                    <h4 className="font-bold text-secondary mb-2">Levels & XP</h4>
                    <p className="text-sm text-gray-600">Stijg in level naarmate je meer leert en quizzen haalt.</p>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2"
              >
                <div 
                  className="relative z-10 cursor-pointer group"
                  onClick={() => openLightbox('/screenshots/ranglijst.jpg', 'Qrio Ranglijst - Gamification met XP en levels')}
                >
                  <img 
                    src="/screenshots/ranglijst.jpg" 
                    alt="Qrio Ranglijst - Gamification met XP en levels"
                    className="rounded-2xl shadow-2xl border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-yellow-100 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 4: Kennisbank */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div 
                  className="relative z-10 cursor-pointer group"
                  onClick={() => openLightbox('/screenshots/Kennisbank.jpg', 'Qrio Kennisbank - Doorzoekbare bibliotheek met AI-kennis')}
                >
                  <img 
                    src="/screenshots/Kennisbank.jpg" 
                    alt="Qrio Kennisbank - Doorzoekbare bibliotheek met AI-kennis"
                    className="rounded-2xl shadow-2xl border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-blue-100 rounded-2xl -z-10" />
              </motion.div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                  <BookOpen size={14} /> Kennisbank
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Altijd een antwoord bij de hand.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Loop je vast tijdens je werk? De doorzoekbare kennisbank fungeert als je persoonlijke AI-coach. Vind direct antwoorden op praktische vragen, ontdek prompt templates en lees handleidingen over de nieuwste tools.
                </p>
                <ul className="space-y-4">
                  {[
                    'Gecategoriseerde artikelen en handleidingen',
                    'Prompt templates voor verschillende use cases',
                    'Uitleg over ChatGPT, Copilot, Midjourney en meer',
                    'Privacy-richtlijnen en best practices'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={14} className="text-blue-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider: Voor de Werkgever */}
        <section className="py-16 bg-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-4">
              <ShieldCheck size={16} /> Voor de Werkgever
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Inzicht, Controle & Compliance
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Krijg real-time inzicht in het AI-kennisniveau van je organisatie en voldoe moeiteloos aan de EU AI Act.
            </p>
          </div>
        </section>

        {/* Feature 5: Admin Dashboard */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                  <BarChart3 size={14} /> Admin Dashboard
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Bewezen compliance met één druk op de knop.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Voldoe aan de EU AI Act en andere regelgeving. Het admin dashboard geeft je real-time inzicht in het kennisniveau, de voortgang en de engagement van je hele organisatie. Genereer audit-ready rapportages en maak AI-vaardigheid een meetbare KPI.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { value: 'Real-time', label: 'Voortgang monitoring' },
                    { value: '1-klik', label: 'Audit rapportages' },
                    { value: '100%', label: 'Compliance inzicht' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-green-50 p-4 rounded-xl text-center">
                      <div className="text-xl font-bold text-green-700">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2"
              >
                <div 
                  className="relative z-10 cursor-pointer group"
                  onClick={() => openLightbox('/screenshots/Admin Dashboard.jpg', 'Qrio Admin Dashboard - Compliance monitoring en statistieken')}
                >
                  <img 
                    src="/screenshots/Admin Dashboard.jpg" 
                    alt="Qrio Admin Dashboard - Compliance monitoring en statistieken"
                    className="rounded-2xl shadow-2xl border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-100 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 6: Content Management */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div 
                  className="relative z-10 cursor-pointer group"
                  onClick={() => openLightbox('/screenshots/Admin modules.jpg', 'Qrio Admin Modules - Content management systeem')}
                >
                  <img 
                    src="/screenshots/Admin modules.jpg" 
                    alt="Qrio Admin Modules - Content management systeem"
                    className="rounded-2xl shadow-2xl border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-purple-100 rounded-2xl -z-10" />
              </motion.div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                  <Settings size={14} /> Content Management
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Train op jouw specifieke situatie.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Elke organisatie is uniek. Voeg eenvoudig eigen content toe aan de leerpaden. Denk aan interne beleidsstukken, handleidingen voor eigen software of sectorspecifieke casussen. Maak Qrio volledig op maat voor jouw context.
                </p>
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
                  <h4 className="font-bold text-secondary mb-3">Wat kun je toevoegen?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-purple-600" />
                      Eigen modules en cursussen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-purple-600" />
                      Interne AI-beleidsregels
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-purple-600" />
                      Sectorspecifieke use cases
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-purple-600" />
                      Handleidingen voor interne tools
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 7: Gebruikersbeheer */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  <UserPlus size={14} /> Gebruikersbeheer
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Beheer je team moeiteloos.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nodig nieuwe collega's uit met een unieke link, beheer gebruikers en volg de voortgang per individu of team. Qrio maakt het onboarden en beheren van je medewerkers eenvoudig en efficiënt.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <UserPlus size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Eenvoudig uitnodigen</h4>
                      <p className="text-sm text-gray-600">Deel een link en collega's kunnen direct starten.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Overzichtelijk beheer</h4>
                      <p className="text-sm text-gray-600">Bekijk de status van elk teamlid in één oogopslag.</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2"
              >
                <div 
                  className="relative z-10 cursor-pointer group"
                  onClick={() => openLightbox('/screenshots/Admin Gebruikers.jpg', 'Qrio Admin Gebruikers - Gebruikersbeheer interface')}
                >
                  <img 
                    src="/screenshots/Admin Gebruikers.jpg" 
                    alt="Qrio Admin Gebruikers - Gebruikersbeheer interface"
                    className="rounded-2xl shadow-2xl border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Klaar om je organisatie AI-ready te maken?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Ervaar zelf hoe Qrio jouw team transformeert. Start vandaag nog met een gratis proefperiode of vraag een demo aan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://app.qrioapp.nl/signup-options"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 inline-flex items-center gap-2"
              >
                Start gratis <ArrowRight size={20} />
              </a>
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Vraag een demo aan
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-primary transition-colors z-50"
              aria-label="Sluiten"
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white text-center mt-4 text-sm md:text-base opacity-80">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Product;
