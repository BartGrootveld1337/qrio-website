import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, AlertTriangle, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Education = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-secondary text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
             </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Bereid studenten en docenten voor op de <span className="text-primary">toekomst</span>.
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        AI is al in de klas. Qrio helpt onderwijsinstellingen om van 'verbieden' naar 'verantwoord gebruiken' te gaan.
                    </p>
                    <button 
                        onClick={scrollToContact}
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2 mx-auto"
                    >
                        Start met educatie <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">AI in het onderwijs: Vriend of vijand?</h2>
                    <p className="text-gray-600">De opkomst van ChatGPT heeft het onderwijs op zijn kop gezet. Hoe ga je hiermee om?</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Plagiaat & Integriteit</h3>
                        <p className="text-gray-600">Studenten leveren AI-gegenereerde essays in. Hoe herken je dit en hoe pas je toetsing aan?</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Werkdruk Docenten</h3>
                        <p className="text-gray-600">Docenten zijn al overbelast. AI kan helpen bij lesvoorbereiding en nakijken, maar de kennis ontbreekt.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Toekomstbestendigheid</h3>
                        <p className="text-gray-600">De arbeidsmarkt vraagt om AI-vaardigheden. Het curriculum loopt vaak achter op de realiteit.</p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-6">Qrio voor Onderwijs</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Wij helpen docenten en studenten om AI te omarmen als een krachtig hulpmiddel voor gepersonaliseerd leren.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Slimmere Lesvoorbereiding</h3>
                                    <p className="text-gray-600 text-sm">Leer prompts schrijven om in minuten lesplannen, quizzen en voorbeelden te genereren.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Gepersonaliseerd Leren</h3>
                                    <p className="text-gray-600 text-sm">Zet AI in als tutor voor studenten die extra uitleg of uitdaging nodig hebben.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Kritisch Denken</h3>
                                    <p className="text-gray-600 text-sm">Leer studenten om AI-output te factchecken en te verbeteren, in plaats van blind over te nemen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Lightbulb size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-secondary">Onderwijsgericht</h3>
                                <p className="text-sm text-gray-500">Speciaal voor het onderwijs</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-secondary">Veilige leeromgeving</p>
                                    <p className="text-sm text-gray-500">Focus op privacy en verantwoord datagebruik</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-secondary">Direct aan de slag</p>
                                    <p className="text-sm text-gray-500">Geen complexe IT-implementatie nodig</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-secondary">Aantoonbare kennis</p>
                                    <p className="text-sm text-gray-500">Certificaten voor docenten en studenten</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-white text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Moderniseer uw onderwijs</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Geef docenten de tools die ze verdienen en studenten de vaardigheden die ze nodig hebben.
                </p>
                <button 
                    onClick={scrollToContact}
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                    Vraag een demo aan
                </button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Education;
