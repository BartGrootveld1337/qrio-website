import { motion } from 'framer-motion';
import { TrendingUp, ShieldAlert, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Business = () => {
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
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
             </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Blijf concurrerend met een <span className="text-primary">AI-vaardig</span> team.
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        AI verandert de markt sneller dan ooit. Zorg dat uw medewerkers de tools beheersen om efficiënter en innovatiever te werken.
                    </p>
                    <button 
                        onClick={scrollToContact}
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2 mx-auto"
                    >
                        Start met upskilling <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">De uitdagingen in het bedrijfsleven</h2>
                    <p className="text-gray-600">Stilstand is achteruitgang. Maar onbezonnen adoptie brengt risico's met zich mee.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                            <ShieldAlert size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Shadow AI & Datalekken</h3>
                        <p className="text-gray-600">Medewerkers gebruiken gratis tools zonder beveiliging. Bedrijfsgeheimen belanden in publieke modellen.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Kloof in vaardigheden</h3>
                        <p className="text-gray-600">Een klein deel van het team is enthousiast, de rest kijkt de kat uit de boom. Dit creëert ongelijkheid.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Gemiste kansen</h3>
                        <p className="text-gray-600">Concurrenten die AI goed inzetten werken 30-50% sneller. Wie achterblijft, verliest marktaandeel.</p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-6">Hoe Qrio uw bedrijf versterkt</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Wij bieden een praktische, veilige leeromgeving die direct aansluit op de dagelijkse praktijk van uw teams.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Marketing & Sales</h3>
                                    <p className="text-gray-600 text-sm">Leer content genereren, klantdata analyseren en outreach personaliseren op schaal.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">HR & Recruitment</h3>
                                    <p className="text-gray-600 text-sm">Automatiseer screening, schrijf betere vacatureteksten en verminder bias met de juiste prompts.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Finance & Legal</h3>
                                    <p className="text-gray-600 text-sm">Analyseer contracten en rapportages sneller, met strikte inachtneming van data-privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-secondary">Direct resultaat</h3>
                                <p className="text-sm text-gray-500">Gemiddelde tijdwinst na Qrio training</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-600">E-mails & Communicatie</span>
                                <span className="text-sm font-bold text-green-600">-40% tijd</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full w-[40%]"></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-600">Data Analyse</span>
                                <span className="text-sm font-bold text-green-600">-60% tijd</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full w-[60%]"></div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-600">Content Creatie</span>
                                <span className="text-sm font-bold text-green-600">-50% tijd</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full w-[50%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-white text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar voor de toekomst?</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Investeer in de vaardigheden van uw team en pluk direct de vruchten van AI.
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

export default Business;
