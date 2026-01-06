import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, BarChart3, ArrowRight, AlertTriangle, Users, Building2, GraduationCap, Scale, Eye, ChevronDown, Zap, BookOpen, Award, LineChart } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AIAct = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = '/#contact';
    }
  };

  const checklistItems = [
    { question: "Heeft uw organisatie een AI-beleid?", risk: "Hoog risico zonder formeel beleid" },
    { question: "Zijn uw medewerkers getraind in AI-veiligheid?", risk: "Wettelijke verplichting sinds feb 2025" },
    { question: "Kunt u compliance aantonen aan toezichthouders?", risk: "Audit-trail is verplicht" },
    { question: "Heeft u zicht op welke AI-tools worden gebruikt?", risk: "Shadow AI is het grootste risico" },
    { question: "Is er een risicobeheersingsplan voor AI?", risk: "Verplicht voor hoog-risico toepassingen" },
  ];

  const roleExamples = [
    { role: "HR-medewerker", example: "Begrijpt welke informatie wel/niet in ChatGPT mag bij het schrijven van vacatureteksten", icon: Users },
    { role: "Financieel analist", example: "Herkent hoe bias in data kan leiden tot onnauwkeurige AI-analyses", icon: BarChart3 },
    { role: "Klantenservice", example: "Weet hoe AI-chatbots verantwoord ingezet kunnen worden", icon: Building2 },
    { role: "Manager", example: "Kan risico's van AI-gebruik inschatten en beleid toepassen", icon: Scale },
  ];

  const faqItems = [
    {
      question: "Valt mijn bedrijf onder de AI Act?",
      answer: "Zeer waarschijnlijk wel. De AI Act geldt niet alleen voor bedrijven die AI ontwikkelen, maar ook voor organisaties die AI gebruiken (deployers). Als uw medewerkers tools zoals ChatGPT, Copilot, of andere AI-assistenten gebruiken, valt u onder de wetgeving."
    },
    {
      question: "Wat zijn de boetes voor non-compliance?",
      answer: "De boetes kunnen oplopen tot 3% van de wereldwijde jaaromzet of €15 miljoen (de hoogste van de twee). Daarnaast zijn er risico's van bestuurdersaansprakelijkheid en reputatieschade."
    },
    {
      question: "Is een eenmalige training voldoende?",
      answer: "Nee. De wet vereist dat medewerkers 'voldoende' AI-geletterd zijn én blijven. Dit betekent continue bijscholing aangezien AI-technologie en risico's snel evolueren. Qrio biedt daarom doorlopende micro-learning."
    },
    {
      question: "Hoe bewijs ik dat mijn medewerkers AI-geletterd zijn?",
      answer: "U heeft een audit-trail nodig: bewijs van training, toetsresultaten en voortgangsrapportages. Qrio genereert automatisch compliance-rapportages die u kunt overleggen aan toezichthouders."
    },
    {
      question: "Hoe lang duurt het om compliant te zijn?",
      answer: "Met Qrio kunnen medewerkers in 5 minuten per dag leren. De basismodule voor AI-geletterdheid kan binnen enkele weken door de hele organisatie worden afgerond, afhankelijk van de grootte."
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Sectie 1 */}
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-8">
                        <AlertTriangle size={16} />
                        <span>Wetgeving van kracht sinds 2 februari 2025</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        De AI Act is hier.<br />
                        <span className="text-primary">Bent u voorbereid?</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Organisaties die AI gebruiken zijn wettelijk verplicht hun medewerkers AI-geletterd te maken. 
                        Zonder aantoonbaar bewijs bent u in overtreding.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={scrollToContact}
                            className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                        >
                            Plan een demo <ArrowRight size={20} />
                        </button>
                        <a 
                            href="#wat-is-ai-act"
                            className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
                        >
                            Lees meer <ChevronDown size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Sectie 2: Wat is de EU AI Act? */}
        <section id="wat-is-ai-act" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        De Basis
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Wat is de EU AI Act?</h2>
                </motion.div>
                
                <div className="prose prose-lg mx-auto text-gray-600">
                    <p className="text-lg leading-relaxed mb-6">
                        De EU AI Act is de eerste uitgebreide AI-wetgeving ter wereld. Het doel? Zorgen dat AI op een 
                        <strong> veilige, transparante en ethische</strong> manier wordt gebruikt binnen Europa.
                    </p>
                    <p className="text-lg leading-relaxed mb-8">
                        Belangrijk: de wet geldt niet alleen voor bedrijven die AI <em>ontwikkelen</em>, maar ook voor 
                        organisaties die AI <em>gebruiken</em>. En dat betekent: vrijwel iedereen.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-12">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                <Building2 size={24} />
                            </div>
                            <h3 className="font-bold text-secondary text-lg">Providers</h3>
                        </div>
                        <p className="text-gray-600">Organisaties die AI-systemen ontwikkelen of op de markt brengen.</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                <Users size={24} />
                            </div>
                            <h3 className="font-bold text-secondary text-lg">Deployers</h3>
                        </div>
                        <p className="text-gray-600">Organisaties die AI-systemen gebruiken. Denk aan ChatGPT, Copilot, AI-analyse tools, etc.</p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Sectie 3: Artikel 4 - AI-Geletterdheid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            Artikel 4
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                            De Plicht tot <span className="text-gradient">AI-Geletterdheid</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Artikel 4 van de AI Act verplicht organisaties om te zorgen voor een "voldoende niveau van AI-geletterdheid" bij het personeel.
                        </p>
                        
                        <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-xl mb-8">
                            <p className="text-gray-700 italic">
                                "AI-geletterdheid betekent vaardigheden, kennis en begrip die providers en deployers in staat stellen om een geïnformeerde inzet van AI-systemen te bewerkstelligen, alsmede om bewustzijn te krijgen van de kansen en risico's van AI."
                            </p>
                        </blockquote>
                        <p className="text-gray-600">
                            Dit is geen vrijblijvend advies. Het is een <strong>harde eis</strong>. Zonder aantoonbaar beleid en getraind personeel bent u in overtreding.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                    >
                        <h3 className="font-bold text-secondary text-xl mb-6 flex items-center gap-3">
                            <GraduationCap className="text-primary" size={24} />
                            Wat betekent AI-geletterdheid in de praktijk?
                        </h3>
                        <div className="space-y-4">
                            {roleExamples.map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-secondary text-sm">{item.role}</p>
                                        <p className="text-gray-600 text-sm">{item.example}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Sectie 4: Voor Wie Geldt de AI Act? - Compliance Checklist */}
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
                        Zelfcheck
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Valt uw organisatie onder de AI Act?</h2>
                    <p className="text-gray-600 text-lg">Beantwoord deze vragen om uw compliance-status te evalueren.</p>
                </motion.div>

                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                    <div className="space-y-4">
                        {checklistItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100"
                            >
                                <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5" />
                                <div className="flex-grow">
                                    <p className="font-medium text-secondary">{item.question}</p>
                                    <p className="text-sm text-orange-600 flex items-center gap-1 mt-1">
                                        <AlertTriangle size={14} />
                                        {item.risk}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-secondary rounded-2xl text-white text-center">
                        <p className="font-bold text-lg mb-2">Niet alle vakjes aangevinkt?</p>
                        <p className="text-gray-300 mb-4">Dan loopt uw organisatie risico. Wij helpen u compliant te worden.</p>
                        <button 
                            onClick={scrollToContact}
                            className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
                        >
                            Neem contact op
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Sectie 5: Risico's van Non-Compliance */}
        <section className="py-20 bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-semibold mb-6">
                        De Risico's
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat als u niet voldoet?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Non-compliance is niet alleen een juridisch risico, maar ook een bedrijfsrisico.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                    >
                        <div className="text-4xl font-bold text-red-400 mb-2">3%</div>
                        <p className="font-bold text-white mb-1">Wereldwijde Omzet</p>
                        <p className="text-gray-400 text-sm">Of €15 miljoen (hoogste van de twee) aan boetes</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                    >
                        <div className="text-4xl font-bold text-orange-400 mb-2">$4,6M</div>
                        <p className="font-bold text-white mb-1">Gemiddelde Datalek Kosten</p>
                        <p className="text-gray-400 text-sm">Bij een AI-gerelateerd datalek</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                    >
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 mb-4">
                            <Scale size={24} />
                        </div>
                        <p className="font-bold text-white mb-1">Bestuurdersaansprakelijkheid</p>
                        <p className="text-gray-400 text-sm">Persoonlijke aansprakelijkheid bij nalatigheid</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                    >
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                            <Eye size={24} />
                        </div>
                        <p className="font-bold text-white mb-1">Reputatieschade</p>
                        <p className="text-gray-400 text-sm">Verlies van vertrouwen bij klanten en partners</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 text-center"
                >
                    <p className="text-lg">
                        <ShieldAlert className="inline mr-2 text-red-400" size={20} />
                        <span className="text-gray-300">Het grootste risico?</span>{" "}
                        <span className="font-bold text-white">Shadow AI.</span>{" "}
                        <span className="text-gray-300">90% van AI-gebruik is onzichtbaar voor IT.</span>
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Sectie 6 & 7: De Oplossing - Qrio */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        De Oplossing
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
                        Qrio: Uw Partner voor <span className="text-gradient">AI Act Compliance</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Qrio is geen vrijblijvende cursusbibliotheek. Wij zijn uw audit-trail. 
                        Wij dichten het gat tussen de wettelijke plicht en de realiteit op de werkvloer.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                    >
                        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                            <BookOpen size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">AI-Geletterdheid Opbouwen</h3>
                        <p className="text-gray-600 mb-4">
                            Micro-learning modules van 5 minuten per dag. Van basiskennis tot praktische vaardigheden, afgestemd op rol en sector.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                Gamified leerervaring
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                Rolspecifieke content
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                Praktijkgerichte cases
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                    >
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Award size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Compliance Aantonen</h3>
                        <p className="text-gray-600 mb-4">
                            Automatische rapportages en certificaten die u kunt overleggen aan toezichthouders.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                Audit-ready rapportages
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                Persoonlijke certificaten
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                Voortgangsmetingen
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                    >
                        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                            <LineChart size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Risico's Beheersen</h3>
                        <p className="text-gray-600 mb-4">
                            Real-time inzicht in het kennisniveau van uw organisatie. Zie direct waar de risico's zitten.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                Compliance dashboard
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                Risico-indicatoren
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500" />
                                Bijscholingsadvies
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Visual Demo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-secondary rounded-3xl p-8 md:p-12"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-white">
                            <h3 className="text-2xl font-bold mb-4">Uw Compliance Dashboard</h3>
                            <p className="text-gray-300 mb-6">
                                Real-time inzicht in de AI-geletterdheid van uw organisatie. 
                                Exporteer rapportages met één klik voor audits.
                            </p>
                            <button 
                                onClick={scrollToContact}
                                className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2"
                            >
                                Bekijk demo <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="bg-white rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-bold text-secondary">Compliance Status</span>
                                <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold">Artikel 4 Ready</span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">Overall Score</span>
                                        <span className="font-bold text-secondary">92%</span>
                                    </div>
                                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-primary to-green-400 w-[92%] rounded-full" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-secondary">847</div>
                                        <div className="text-xs text-gray-500">Gecertificeerd</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-orange-500">73</div>
                                        <div className="text-xs text-gray-500">Actie vereist</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Sectie 8: FAQ */}
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Veelgestelde Vragen</h2>
                </motion.div>

                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-200 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-secondary pr-4">{item.question}</span>
                                <ChevronDown 
                                    size={20} 
                                    className={`text-gray-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-5 text-gray-600">
                                    {item.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Sectie 9: CTA */}
        <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-slate-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }}/>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
                        <Zap size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Neem de volgende stap
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Met Qrio voldoet u aan de wet, verlaagt u het risico op datalekken en maakt u uw organisatie klaar voor de toekomst.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={scrollToContact}
                            className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                        >
                            Plan een demo <ArrowRight size={20} />
                        </button>
                        <button 
                            onClick={scrollToContact}
                            className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
                        >
                            Neem contact op
                        </button>
                    </div>
                    
                </motion.div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AIAct;
