import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, AlertTriangle, Lightbulb, ArrowRight, CheckCircle, Clock, Users, FileText, Brain, Shield } from 'lucide-react';
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

  const modules = [
    {
      title: "Module 1: De Leraar als Regisseur",
      focus: "De leraar ontlasten. Meer tijd voor de leerling, minder voor administratie.",
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-50",
      topics: [
        "De Supersnelle Lesvoorbereiding (lesplannen, rubrics, quizvragen)",
        "Differentiëren in een handomdraai (1F, 2F, 3F niveaus)",
        "Case: De 'Nee-Tenzij' leraar (burn-out voorkomen)"
      ]
    },
    {
      title: "Module 2: De Leerling Centraal",
      focus: "De droom van 'onderwijs op maat' realiseren via technologie.",
      icon: Users,
      color: "text-purple-500",
      bg: "bg-purple-50",
      topics: [
        "De Socratische AI-Tutor (coachen i.p.v. voorzeggen)",
        "Inclusie & Ondersteuning (dyslexie, NT2, visuele beperkingen)",
        "Case: Adaptieve Leermiddelen (realtime niveau-aanpassing)"
      ]
    },
    {
      title: "Module 3: Toetsing & Fraude",
      focus: "Hoe gaan we om met ChatGPT bij huiswerk? Van politieagent naar coach.",
      icon: FileText,
      color: "text-orange-500",
      bg: "bg-orange-50",
      topics: [
        "Het Einde van het Essay? (waarom detectoren niet werken)",
        "Nakijken & Feedback geven (formatieve feedback met AI)",
        "Case: Proces boven Product (nieuwe toetsvormen)"
      ]
    },
    {
      title: "Module 4: AI-Geletterdheid",
      focus: "Leerlingen voorbereiden op hun toekomst. AI als lesstof.",
      icon: Brain,
      color: "text-green-500",
      bg: "bg-green-50",
      topics: [
        "Digitale Geletterdheid 2.0 (Google vs. Genereren)",
        "Kritisch Denken & Hallucinaties (factchecken en bias)",
        "Case: Prompt Engineering voor Kids (21e-eeuwse vaardigheid)"
      ]
    },
    {
      title: "Module 5: Beleid, Privacy & Ethiek",
      focus: "Veilige kaders scheppen voor school en student.",
      icon: Shield,
      color: "text-red-500",
      bg: "bg-red-50",
      topics: [
        "Data van de Leerling (AVG in de klas)",
        "Kansengelijkheid (The Digital Divide voorkomen)",
        "Visie op Onderwijs (van kennis naar menselijke vaardigheden)"
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

        {/* Course Curriculum Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        Het Lesprogramma
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6 font-display">
                        Van <span className="text-gradient">Klaslokaal</span> tot <span className="text-gradient">Curriculum</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Een 5-delige cursus voor leraren, schoolleiders en ondersteunend personeel. 
                        Hoe leiden we leerlingen op voor een AI-toekomst?
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
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-display">Klaar voor AI in de klas?</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                Ontdek hoe Qrio uw docententeam kan helpen om AI veilig en effectief in te zetten.
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
