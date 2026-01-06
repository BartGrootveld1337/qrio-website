import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, FileText, Lock, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AIAct = () => {
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
            {/* Background blobs */}
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
                        Wettelijk verplicht <span className="text-primary">AI-geletterdheid</span> aantonen.
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Vanaf 2 februari 2025 bent u in overtreding zonder getraind personeel. Qrio regelt dit voor u.
                    </p>
                    <button 
                        onClick={scrollToContact}
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2 mx-auto"
                    >
                        Regel uw compliance <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>
        </section>

        {/* Context Section */}
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg mx-auto">
                    <h2 className="text-3xl font-bold text-secondary mb-6">De Context: Artikel 4 EU AI Act</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        De EU AI Act verandert de spelregels. Specifiek <strong>Artikel 4</strong> eist dat elke organisatie die AI gebruikt – bewust of onbewust – zorgt voor een "voldoende niveau van AI-geletterdheid" bij het personeel. <br /><br />Dit is geen vrijblijvend advies. Het is een harde eis voor compliance. Zonder aantoonbaar beleid en getraind personeel bent u vanaf deze datum in overtreding.
                    </p>
                </div>
            </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Het Probleem: Uw grootste risico zit in de schaduw</h2>
                    <p className="text-gray-600">U denkt misschien: "Wij gebruiken nog geen AI." De realiteit is anders.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                            <ShieldAlert size={24} />
                        </div>
                        <h3 className="text-4xl font-bold text-secondary mb-2">90%</h3>
                        <p className="font-bold text-gray-900 mb-2">Shadow AI</p>
                        <p className="text-gray-600 text-sm">Van het AI-gebruik is onzichtbaar voor IT. Medewerkers gebruiken tools zonder toezicht.</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                            <Lock size={24} />
                        </div>
                        <h3 className="text-4xl font-bold text-secondary mb-2">38%</h3>
                        <p className="font-bold text-gray-900 mb-2">Datalekken</p>
                        <p className="text-gray-600 text-sm">Van de werknemers deelt gevoelige bedrijfsdata met publieke chatbots zoals ChatGPT.</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-4xl font-bold text-secondary mb-2">$4,6m</h3>
                        <p className="font-bold text-gray-900 mb-2">Gemiddelde Kosten</p>
                        <p className="text-gray-600 text-sm">Een datalek via AI kost gemiddeld $4,63 miljoen en leidt tot bestuurdersaansprakelijkheid.</p>
                    </motion.div>
                </div>
                <p className="text-center mt-12 text-lg font-medium text-secondary">
                    Een firewall houdt dit niet tegen. Alleen competentie doet dat.
                </p>
            </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-6">De Oplossing: AI leren met Qrio</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Qrio is geen vrijblijvende cursusbibliotheek. Wij zijn uw audit-trail. Wij dichten het gat tussen de wettelijke plicht en de realiteit op de werkvloer.
                        </p>
                        
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">Compliance (Het Moet)</h3>
                                    <p className="text-gray-600">Onze "Artikel 4 Module" traint uw medewerkers op basisniveau, ethiek en dataveiligheid. Elke medewerker ontvangt een persoonlijk certificaat. Dit is uw bewijslast.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">Productiviteit (Het Levert Op)</h3>
                                    <p className="text-gray-600">We leren uw mensen niet alleen risico's vermijden, maar ook productief zijn. Van veilige prompts voor HR tot data-analyse voor Finance.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <BarChart3 size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">Governance (Het Bewijs)</h3>
                                    <p className="text-gray-600">U krijgt real-time inzicht in het kennisniveau van uw organisatie. U ziet direct waar de risico's zitten en wie er bijgeschoold moet worden.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        {/* Abstract visual or simple card */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-bold text-secondary">Compliance Status</span>
                                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">Artikel 4 Ready</span>
                            </div>
                            <div className="space-y-3">
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[92%]" />
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>92% Gecertificeerd</span>
                                    <span>8% Actie vereist</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="text-primary h-5 w-5" />
                                <span className="font-bold text-secondary">Audit Trail Gegenereerd</span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Uw organisatie voldoet aan de eisen voor AI-geletterdheid conform EU AI Act Artikel 4.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-white text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Start met professionaliseren.</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Met Qrio voldoet u aan de wet, verlaagt u het risico op datalekken en maakt u uw organisatie klaar voor de toekomst.
                </p>
                <button 
                    onClick={scrollToContact}
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                    Neem Contact Op
                </button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AIAct;
