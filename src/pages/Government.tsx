import { motion } from 'framer-motion';
import { Scale, ShieldCheck, FileText, Users, ArrowRight, CheckCircle, MessageSquare, Brain, Cog, Eye, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Government = () => {
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
      title: "Module 1: Publieke Dienstverlening",
      focus: "De burger centraal. Interactie makkelijker en begrijpelijker.",
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-50",
      topics: [
        "De 24-uurs Gemeente (chatbots & virtuele assistenten)",
        "Duidelijke Taal (B1-niveau met AI)",
        "Case: Virtuele Assistent 'Gem'"
      ]
    },
    {
      title: "Module 2: Datagedreven Beleid & Wonen",
      focus: "Beleid maken op basis van feiten, niet onderbuikgevoel.",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-50",
      topics: [
        "De Digitale Tweeling (Digital Twin steden)",
        "Voorspellend Onderhoud & Beheer",
        "Case: Leefbaarheidsbarometer & Urban Planning"
      ]
    },
    {
      title: "Module 3: Interne Bureaucratie & Kennis",
      focus: "De ambtenaar ontlasten. Minder 'paarse krokodillen'.",
      icon: Cog,
      color: "text-orange-500",
      bg: "bg-orange-50",
      topics: [
        "De Ambtenaar die alles weet (RAG-zoeksystemen)",
        "Vergaderen en Verslaglegging automatiseren",
        "Case: Rijksoverheid & Woo-verzoeken"
      ]
    },
    {
      title: "Module 4: Toezicht & Handhaving",
      focus: "De openbare ruimte beheren op een eerlijke manier.",
      icon: Eye,
      color: "text-green-500",
      bg: "bg-green-50",
      topics: [
        "Beeldherkenning in de Openbare Ruimte",
        "Risicogestuurd Toezicht (gericht inspecteren)",
        "Case: Schiphol, Douane & Gemeente Amsterdam"
      ]
    },
    {
      title: "Module 5: Ethiek, Recht & Vertrouwen",
      focus: "Discriminatie voorkomen en democratische waarden borgen.",
      icon: Heart,
      color: "text-red-500",
      bg: "bg-red-50",
      topics: [
        "Lessen uit het Verleden (Bias & SyRI)",
        "Het Algoritmeregister & Transparantie",
        "De Menselijke Maat & AI Act"
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
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
             </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Verantwoord innoveren in de <span className="text-primary">publieke sector</span>.
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Verbeter de dienstverlening aan burgers met AI, volledig in lijn met de AVG en de nieuwe EU AI Act.
                    </p>
                    <button 
                        onClick={scrollToContact}
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2 mx-auto"
                    >
                        Start met compliance <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Dilemma's voor de overheid</h2>
                    <p className="text-gray-600">De druk om te moderniseren is hoog, maar de eisen aan zorgvuldigheid zijn nog hoger.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                            <Scale size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Wetgeving & Compliance</h3>
                        <p className="text-gray-600">De EU AI Act stelt strenge eisen (Artikel 4). Ambtenaren moeten aantoonbaar AI-geletterd zijn.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Privacy & Ethiek</h3>
                        <p className="text-gray-600">Hoe voorkom je bias in algoritmes? Hoe garandeer je dat burgerdata niet lekt naar commerciële partijen?</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Administratieve druk</h3>
                        <p className="text-gray-600">Dossiers stapelen zich op. AI kan helpen samenvatten en categoriseren, maar kennis ontbreekt.</p>
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
                        Van <span className="text-gradient">Loket</span> tot <span className="text-gradient">Leiderschap</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Een 5-delige cursus die ambtenaren meeneemt in verantwoord AI-gebruik. 
                        Van burgerdienstverlening tot ethische vraagstukken.
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
                                <Scale size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-display">Klaar voor verantwoorde AI?</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                Ontdek hoe Qrio uw gemeente of organisatie kan helpen om AI veilig en ethisch in te zetten.
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
                        <h2 className="text-3xl font-bold text-secondary mb-6">Qrio: Veilig leren voor ambtenaren</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Onze modules zijn specifiek gericht op verantwoord gebruik, ethiek en dataminimalisatie.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Beleidsanalyse</h3>
                                    <p className="text-gray-600 text-sm">Leer hoe je AI inzet om grote hoeveelheden documentatie snel te doorzoeken en samen te vatten.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Burgercontact</h3>
                                    <p className="text-gray-600 text-sm">Verbeter de toegankelijkheid van informatie met AI-ondersteunde communicatie, zonder de menselijke maat te verliezen.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary">Ethiek & Bias</h3>
                                    <p className="text-gray-600 text-sm">Speciale modules over het herkennen en voorkomen van vooroordelen in AI-output.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-secondary">Overheidsgericht</h3>
                                <p className="text-sm text-gray-500">Speciaal voor de publieke sector</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-secondary">Veiligheid voorop</p>
                                    <p className="text-sm text-gray-500">Software & training in lijn met overheidsnormen</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-secondary">Gebruiksvriendelijk</p>
                                    <p className="text-sm text-gray-500">Eenvoudig uit te rollen over afdelingen</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-secondary">Europese waarden</p>
                                    <p className="text-sm text-gray-500">Focus op EU-regelgeving en ethiek</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Voldoe aan de AI Act</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Zorg dat uw organisatie klaar is voor de toekomst van de publieke dienstverlening.
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

export default Government;
