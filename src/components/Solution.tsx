import { Trophy, BookOpen, ShieldCheck, Star, Search, Check, CheckCircle, Layout, Users, FileText, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const Solution = () => {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Feature 1: Gamified Learning */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Mockup */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-md mx-auto"
              aria-hidden="true"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="text-yellow-600 h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary">Jouw Ranglijst</div>
                    <div className="text-xs text-gray-500">Top 5% deze week</div>
                  </div>
                </div>
                <div className="text-primary font-bold">1350 XP</div>
              </div>
              
              <div className="space-y-3">
                {[
                  { rank: 1, name: "Sarah de Vries", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" },
                  { rank: 2, name: "Mark Jansen", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=64&h=64" },
                  { rank: 3, name: "Lisa Bakker", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&h=64" }
                ].map((user) => (
                  <div key={user.rank} className={`flex items-center p-3 rounded-lg ${user.rank === 1 ? 'bg-primary/5 border border-primary/20' : 'bg-gray-50'}`}>
                    <div className="font-bold text-gray-400 w-6">#{user.rank}</div>
                    <img src={user.image} alt={user.name} className="h-8 w-8 rounded-full mr-3 object-cover" />
                    <div className="flex-1 font-medium text-secondary">{user.name}</div>
                    {user.rank === 1 && <Star className="h-4 w-4 text-yellow-400 fill-current" />}
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Decorative blob */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" 
              aria-hidden="true"
            />
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Trophy size={14} /> Gamification
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Leren wordt verslavend leuk.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Korte, dagelijkse quizzen. Verdien XP, behoud je streak en klim op de ranglijst. Wij maken van saaie compliance training een competitief spel waar je team naar uitkijkt.
            </p>
            <ul className="space-y-3">
              {['Dagelijkse micro-learning (5 min)', 'Competitieve leaderboards', 'Verdien badges en certificaten'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 2: Knowledge Guide */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              <BookOpen size={14} /> Kennisgids
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Een naslagwerk voor als je vastloopt.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Van Prompt Engineering tot AVG-regels. Al je vragen beantwoord in één doorzoekbare kennisbank. Altijd up-to-date met de laatste AI-ontwikkelingen.
            </p>
            <ul className="space-y-3">
              {['Direct antwoord op AI-vragen', 'Praktische prompt templates', 'Uitleg over tools & privacy'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-600" />
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
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              aria-hidden="true"
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-md mx-auto"
            >
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Hoe schrijf ik een goede prompt?" 
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                  readOnly
                />
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-100 rounded-xl hover:border-primary/30 transition-colors cursor-pointer">
                  <h4 className="font-bold text-secondary mb-1">AI is geen Google</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    Veel beginners gebruiken AI als zoekmachine. Dat is de grootste valkuil. Leer het verschil...
                  </p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full">Basis</span>
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full">5 min lezen</span>
                  </div>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl hover:border-primary/30 transition-colors cursor-pointer opacity-75">
                  <h4 className="font-bold text-secondary mb-1">De "Autocorrect" Analogie</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    Begrijp hoe LLM's werken door ze te zien als een hele slimme autocorrect...
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Decorative blob */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10" 
            />
          </motion.div>
        </div>

        {/* Feature 3: Compliance Dashboard */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Mockup */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              aria-hidden="true"
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-md mx-auto"
            >
              <div className="flex items-center justify-between mb-6">
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
            </motion.div>
            {/* Decorative blob */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              aria-hidden="true"
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50 rounded-full blur-3xl -z-10" 
            />
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              <ShieldCheck size={14} /> Compliance Dashboard
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Bewijs dat je voldoet aan de wet.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              De EU AI Act vereist dat je kunt aantonen dat je personeel bekwaam is. Qrio levert het bewijs: een aantoonbaar leertraject met toetsing, voortgang, certificering en een volledige audit trail.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Real-time voortgang & Certificering</h4>
                  <p className="text-sm text-gray-600">Zie direct wie er op schema ligt. Medewerkers ontvangen automatisch certificaten na succesvolle afronding.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Layout size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Audit-ready rapportages & Exports</h4>
                  <p className="text-sm text-gray-600">Download met één klik exports voor interne controle of toezichthouders. Volledig inzicht in toetsresultaten.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Custom Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              <FileText size={14} /> Eigen Content
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Train op jouw specifieke situatie.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              De AI Act vereist dat AI-geletterdheid wordt toegepast op de specifieke context van jouw organisatie. Voeg eenvoudig eigen modules en beleidsstukken toe.
            </p>
            <ul className="space-y-3">
              {['Maak content specifiek over AI gebruik binnen jouw organisatie', 'Maak custom quizzen voor jouw teams', 'Specifieke training voor jouw tools'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-600" />
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
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              aria-hidden="true"
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-md mx-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-secondary text-lg">Mijn Modules</h3>
                <button className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                  <Plus size={12} /> Nieuw
                </button>
              </div>
              
              <div className="space-y-3">
                {[
                  { title: "Intern AI Beleid 2025", status: "Actief", type: "PDF", date: "12 Dec" },
                  { title: "Sales Workflow", status: "Actief", type: "Quiz", date: "10 Dec" },
                  { title: "Gebruik van Copilot", status: "Concept", type: "Video", date: "Nu" }
                ].map((module, i) => (
                  <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="h-10 w-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mr-3 text-gray-400">
                      <FileText size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-secondary truncate">{module.title}</h4>
                      <div className="flex items-center gap-2 text-[10px] text-gray-500">
                        <span>{module.type}</span>
                        <span>•</span>
                        <span>{module.date}</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${module.status === 'Actief' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                      {module.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Decorative blob */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              aria-hidden="true"
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-50 rounded-full blur-3xl -z-10" 
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Solution;
