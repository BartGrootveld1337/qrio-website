import { motion } from 'framer-motion';
import { Trophy, BookOpen, ShieldCheck, Star, Search, Check, ArrowRight, Zap, Layout, Users, CheckCircle, GraduationCap, Lightbulb, Brain, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Product = () => {
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
                        Het alles-in-één platform voor <span className="text-primary">AI-adoptie</span>.
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Van speelse micro-learning tot serieuze compliance rapportages. Qrio biedt alles wat je nodig hebt om je organisatie AI-ready te maken.
                    </p>
                    <a 
                        href="https://app.qrioapp.nl/signup-options"
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 inline-flex items-center gap-2 mx-auto"
                    >
                        Probeer gratis <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>

        {/* Feature: AI Cursus */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                            <GraduationCap size={14} /> AI Cursus
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                            Van beginner tot expert.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Geen droge theorie, maar direct toepasbare kennis. Leer hoe je AI veilig en effectief inzet in jouw dagelijkse werkzaamheden.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Toegankelijke modules van basis tot gevorderd',
                                'Leer AI praktisch toepassen in je werk',
                                'Waardevolle kennis over veiligheid en mogelijkheden'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                        <Check size={14} className="text-purple-600" />
                                    </div>
                                    {item}
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
                        {/* Mockup */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-md mx-auto relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-secondary">Mijn Cursussen</h3>
                                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">30 lessen</span>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="p-4 border border-purple-100 bg-purple-50/50 rounded-xl">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-purple-100 rounded-lg text-purple-600">
                                                <Lightbulb size={16} />
                                            </div>
                                            <span className="font-bold text-sm text-secondary">Basisprincipes AI</span>
                                        </div>
                                        <span className="text-xs font-bold text-purple-600">85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                                        <div className="bg-purple-500 h-full w-[85%] rounded-full" />
                                    </div>
                                    <p className="text-xs text-gray-500">Nog 1 les te gaan</p>
                                </div>

                                <div className="p-4 border border-gray-100 rounded-xl hover:border-purple-200 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600">
                                                <Brain size={16} />
                                            </div>
                                            <span className="font-bold text-sm text-secondary">Schrijf de perfecte prompt</span>
                                        </div>
                                        <span className="text-xs font-bold text-gray-400">0%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                                        <div className="bg-gray-200 h-full w-[0%] rounded-full" />
                                    </div>
                                    <p className="text-xs text-gray-500">Start deze cursus</p>
                                </div>

                                <div className="p-4 border border-gray-100 rounded-xl hover:border-purple-200 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-green-100 rounded-lg text-green-600">
                                                <Shield size={16} />
                                            </div>
                                            <span className="font-bold text-sm text-secondary">Veiligheid & Privacy</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500">Verplicht voor alle medewerkers</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-50 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Feature 1: Gamified Learning */}
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
                        {/* Mockup */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-md mx-auto relative z-10">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 bg-yellow-100 rounded-full flex items-center justify-center shadow-sm">
                                        <Trophy className="text-yellow-600 h-7 w-7" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-secondary text-lg">Leaderboard</div>
                                        <div className="text-sm text-gray-500">Week 42</div>
                                    </div>
                                </div>
                                <div className="text-primary font-bold text-xl">1350 XP</div>
                            </div>
                            
                            <div className="space-y-4">
                                {[
                                    { rank: 1, name: "Sarah de Vries", xp: "1350 XP", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" },
                                    { rank: 2, name: "Mark Jansen", xp: "1280 XP", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=64&h=64" },
                                    { rank: 3, name: "Lisa Bakker", xp: "1150 XP", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&h=64" }
                                ].map((user) => (
                                    <div key={user.rank} className={`flex items-center p-4 rounded-xl transition-all ${user.rank === 1 ? 'bg-primary/5 border border-primary/20 shadow-sm' : 'bg-gray-50 hover:bg-gray-100'}`}>
                                        <div className={`font-bold w-8 text-lg ${user.rank === 1 ? 'text-primary' : 'text-gray-400'}`}>#{user.rank}</div>
                                        <img src={user.image} alt={user.name} className="h-10 w-10 rounded-full mr-4 object-cover border-2 border-white shadow-sm" />
                                        <div className="flex-1">
                                            <div className="font-bold text-secondary">{user.name}</div>
                                            <div className="text-xs text-gray-500">{user.xp}</div>
                                        </div>
                                        {user.rank === 1 && <Star className="h-5 w-5 text-yellow-400 fill-current" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
                    </motion.div>
                    
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                            <Trophy size={14} /> Gamification
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                            Leren wordt een competitie.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Vergeet saaie e-learnings die niemand afmaakt. Qrio gebruikt spelmechanismen om medewerkers intrinsiek te motiveren.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-2">
                                    <Zap size={20} />
                                </div>
                                <h4 className="font-bold text-secondary">Micro-learning</h4>
                                <p className="text-sm text-gray-600">Hapklare brokken van 5 minuten, perfect voor tussendoor.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                                    <Users size={20} />
                                </div>
                                <h4 className="font-bold text-secondary">Social Learning</h4>
                                <p className="text-sm text-gray-600">Daag collega's uit en leer van elkaars successen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Feature 2: Knowledge Guide */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                            <BookOpen size={14} /> Kennisgids
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                            Altijd een antwoord bij de hand.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            De AI-wereld verandert dagelijks. Onze kennisgids wordt continu bijgewerkt zodat je team nooit achterloopt.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Uitgebreide bibliotheek met prompt templates',
                                'Uitleg over de nieuwste tools (ChatGPT, Copilot, Midjourney)',
                                'Juridische kaders en privacy-richtlijnen in begrijpelijke taal',
                                'Zoekfunctie aangedreven door AI voor directe antwoorden'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Check size={14} className="text-blue-600" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Mockup */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-md mx-auto relative z-10">
                            <div className="relative mb-8">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input 
                                    type="text" 
                                    placeholder="Zoek in kennisbank..." 
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                    readOnly
                                />
                            </div>
                            
                            <div className="space-y-4">
                                <div className="p-5 border border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group bg-white">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-secondary group-hover:text-primary transition-colors">Prompt Engineering 101</h4>
                                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">Basis</span>
                                    </div>
                                    <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                                        Leer de basisprincipes van het schrijven van effectieve prompts. Context, instructie, input en output.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <BookOpen size={12} />
                                        <span>5 min lezen</span>
                                    </div>
                                </div>
                                <div className="p-5 border border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group bg-white opacity-80">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-secondary group-hover:text-primary transition-colors">Data Privacy & AI</h4>
                                        <span className="text-[10px] bg-red-50 text-red-600 px-2 py-1 rounded-full font-medium">Belangrijk</span>
                                    </div>
                                    <p className="text-xs text-gray-500 line-clamp-2">
                                        Wat mag je wel en niet delen met publieke AI-modellen? Een overzicht van de risico's.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Feature 3: Compliance Dashboard */}
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
                        {/* Mockup */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-md mx-auto relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">Compliance Status</h3>
                                    <p className="text-xs text-gray-500">Organisatie breed</p>
                                </div>
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                    <CheckCircle size={12} /> 92% Ready
                                </span>
                            </div>
                            
                            <div className="space-y-6">
                                {[
                                    { name: "Eva de Jong", role: "HR Manager", modules: 30, total: 30, quiz: 100, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" },
                                    { name: "Daan Visser", role: "Developer", modules: 30, total: 30, quiz: 80, img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=64&h=64" },
                                    { name: "Sophie Bakker", role: "Marketing", modules: 18, total: 30, quiz: 0, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&h=64" }
                                ].map((person, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <img src={person.img} alt={person.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h4 className="text-sm font-bold text-secondary truncate">{person.name}</h4>
                                                <span className="text-[10px] text-gray-400">{person.role}</span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <div className="flex justify-between text-[10px] mb-1">
                                                        <span className="text-gray-500">Cursus</span>
                                                        <span className={`font-bold ${person.modules === person.total ? 'text-green-600' : 'text-gray-600'}`}>{person.modules}/{person.total} modules</span>
                                                    </div>
                                                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                                                        <div className={`h-full rounded-full ${person.modules === person.total ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${(person.modules / person.total) * 100}%` }} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between text-[10px] mb-1">
                                                        <span className="text-gray-500">Quiz</span>
                                                        <span className={`font-bold ${person.quiz >= 80 ? 'text-green-600' : 'text-gray-600'}`}>{person.quiz}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                                                        <div className={`h-full rounded-full ${person.quiz >= 80 ? 'bg-green-500' : 'bg-purple-500'}`} style={{ width: `${person.quiz}%` }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50 rounded-full blur-3xl -z-10" />
                    </motion.div>
                    
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                            <ShieldCheck size={14} /> Compliance Dashboard
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                            Bewijs dat je voldoet aan de wet.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            De EU AI Act vereist dat je kunt aantonen dat je personeel bekwaam is. Qrio houdt dit automatisch voor je bij.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Houdt de voortgang per medewerker bij</h4>
                                    <p className="text-sm text-gray-600">Zie direct wie er op schema ligt en wie nog extra aandacht nodig heeft.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Layout size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Audit-ready rapportages</h4>
                                    <p className="text-sm text-gray-600">Download met één klik een overzicht voor de toezichthouder.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te starten?</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Ervaar zelf hoe Qrio jouw organisatie transformeert.
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

export default Product;
