import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, FileText, Clock, ArrowRight, CheckCircle, Activity, Brain, Home, Shield, Mic } from 'lucide-react';
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

  const modules = [
    {
      title: "Module 1: Preventie & Leefstijl",
      focus: "Zorgen dat mensen niet patiënt worden.",
      icon: Activity,
      color: "text-green-500",
      bg: "bg-green-50",
      topics: [
        "Data als Preventiemiddel (wearables & voorspellende data)",
        "De Digitale Leefstijlcoach (gedragsverandering)",
        "Case: Chatbot LAMPIE"
      ]
    },
    {
      title: "Module 2: Klinische Beslisondersteuning",
      focus: "AI als 'extra paar ogen' voor de arts.",
      icon: Stethoscope,
      color: "text-blue-500",
      bg: "bg-blue-50",
      topics: [
        "Beeldherkenning in de praktijk (Deep Learning)",
        "Clinical Decision Support Systems (CDSS)",
        "Case: SkinVision & Longfoto's"
      ]
    },
    {
      title: "Module 3: De Administratieve Revolutie",
      focus: "Het 'monster' van de administratie temmen.",
      icon: Mic,
      color: "text-purple-500",
      bg: "bg-purple-50",
      topics: [
        "Het Einde van het Typen (spraakgestuurd rapporteren)",
        "Generatieve AI voor Verslaglegging en brieven",
        "Case: GGZ Centraal (Minder schermtijd)"
      ]
    },
    {
      title: "Module 4: Zorg Thuis & Monitoring",
      focus: "Het ziekenhuis verplaatst zich naar de woonkamer.",
      icon: Home,
      color: "text-orange-500",
      bg: "bg-orange-50",
      topics: [
        "Telemonitoring & The Box ('Meten is weten' thuis)",
        "Slimme Sensoren & Domotica (veiligheid zonder camera's)",
        "Case: Hybride Zorgpaden (LUMC)"
      ]
    },
    {
      title: "Module 5: Mens, Machine & Ethiek",
      focus: "De veranderende rol van de zorgverlener.",
      icon: Shield,
      color: "text-red-500",
      bg: "bg-red-50",
      topics: [
        "De 'Human in the Loop' (eindverantwoordelijkheid)",
        "Robotica: Handen aan het bed?",
        "Medische Privacy, Bias & Dilemma's"
      ]
    }
  ];

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

        {/* Course Curriculum Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        Het Lesprogramma
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6 font-display">
                        Van <span className="text-gradient">Preventie</span> tot <span className="text-gradient">Praktijk</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Een 5-delige cursus die zorgprofessionals meeneemt in de wereld van medische AI. 
                        Praktisch, veilig en direct toepasbaar.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-6">
                    {modules.slice(0, 3).map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 ${module.bg} rounded-xl flex items-center justify-center ${module.color} flex-shrink-0`}>
                                    <module.icon size={24} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                    Module {index + 1}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-secondary mb-2">
                                {module.title.split(': ')[1]}
                            </h3>
                            
                            <p className="text-sm text-gray-500 mb-6 italic">
                                {module.focus}
                            </p>

                            <ul className="space-y-3 mt-auto">
                                {module.topics.map((topic, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                                        <CheckCircle size={16} className={`${module.color} mt-0.5 flex-shrink-0`} />
                                        <span>{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {modules.slice(3).map((module, index) => (
                        <motion.div
                            key={index + 3}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 ${module.bg} rounded-xl flex items-center justify-center ${module.color} flex-shrink-0`}>
                                    <module.icon size={24} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                    Module {index + 4}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-secondary mb-2">
                                {module.title.split(': ')[1]}
                            </h3>
                            
                            <p className="text-sm text-gray-500 mb-6 italic">
                                {module.focus}
                            </p>

                            <ul className="space-y-3 mt-auto">
                                {module.topics.map((topic, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                                        <CheckCircle size={16} className={`${module.color} mt-0.5 flex-shrink-0`} />
                                        <span>{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                    
                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-secondary via-secondary to-slate-700 rounded-2xl p-8 shadow-xl text-white flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                        
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-display">Klaar voor de toekomst?</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                Ontdek hoe Qrio uw zorgteam kan helpen om AI veilig en effectief in te zetten.
                            </p>
                        </div>
                        
                        <button 
                            onClick={scrollToContact}
                            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center gap-2 relative z-10"
                        >
                            Plan een demo <ArrowRight size={18} />
                        </button>
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
