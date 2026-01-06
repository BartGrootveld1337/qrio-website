import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, FileText, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Healthcare = () => {
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
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
             </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Meer tijd voor de patiënt door <span className="text-primary">slimme AI</span>.
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Verlaag de administratieve druk en ondersteun zorgprofessionals met veilige AI-toepassingen.
                    </p>
                    <button 
                        onClick={scrollToContact}
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2 mx-auto"
                    >
                        Start met zorginnovatie <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Zorg onder druk</h2>
                    <p className="text-gray-600">De zorgvraag stijgt, het personeelstekort groeit. Efficiëntie is noodzaak, geen luxe.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Administratieve Last</h3>
                        <p className="text-gray-600">Zorgverleners besteden tot 40% van hun tijd aan administratie. Tijd die niet naar de patiënt gaat.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                            <HeartPulse size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Privacy & Veiligheid</h3>
                        <p className="text-gray-600">Medische data is uiterst gevoelig. Onveilig gebruik van publieke AI-tools is een groot risico.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Werkdruk</h3>
                        <p className="text-gray-600">Hoge werkdruk leidt tot uitval. AI kan routinetaken overnemen en de druk verlichten.</p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-6">Qrio: Zorgeloos werken met AI</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Wij leren zorgprofessionals hoe ze AI veilig kunnen inzetten om hun werk makkelijker en leuker te maken.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Rapportages & Verslaglegging</h3>
                                    <p className="text-gray-600 text-sm">Leer spraak-naar-tekst en AI-samenvattingen gebruiken om dossiers razendsnel bij te werken.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Informatie ontsluiten</h3>
                                    <p className="text-gray-600 text-sm">Vind snel protocollen en richtlijnen in interne kennisbanken met slimme zoekfuncties.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Veiligheid voorop</h3>
                                    <p className="text-gray-600 text-sm">Strikte training over wat wel en niet mag met patiëntgegevens in AI-systemen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Stethoscope size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-secondary">Zorggericht</h3>
                                <p className="text-sm text-gray-500">Speciaal voor de zorg</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-secondary">Informatiebeveiliging</p>
                                    <p className="text-sm text-gray-500">Training gericht op veilig omgaan met data</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-secondary">Zorg-specifiek</p>
                                    <p className="text-sm text-gray-500">Casussen uit de dagelijkse praktijk</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-secondary">Direct toepasbaar</p>
                                    <p className="text-sm text-gray-500">Geen IT-kennis nodig om te starten</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Verlaag de werkdruk vandaag nog</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Help uw zorgpersoneel om efficiënter te werken met behoud van kwaliteit en privacy.
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

export default Healthcare;
