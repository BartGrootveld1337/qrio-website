import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import pomodoroAnimation from '../assets/pomodoro.json';
import yawnAnimation from '../assets/yawn.json';
import shadowAiAnimation from '../assets/shadow-ai.json';

const Problem = () => {
  const problems = [
    {
      title: "Shadow AI & Datalekken",
      description: "90% van AI-gebruik is niet geautoriseerd. Medewerkers zetten gevoelige data in gratis tools zonder te beseffen welke risico's dit meebrengt.",
      stat: "90%",
      statLabel: "ongeautoriseerd AI-gebruik",
      gradient: "from-primary to-teal-400",
      accentColor: "text-primary",
      glowColor: "shadow-primary/10",
      animation: shadowAiAnimation
    },
    {
      title: "Onbenut Potentieel",
      description: "Organisaties investeren in Copilot en ChatGPT licenties, maar zonder training blijft de beloofde productiviteitswinst grotendeels uit.",
      stat: "€2.500",
      statLabel: "verspild per medewerker/jaar",
      gradient: "from-primary to-teal-400",
      accentColor: "text-primary",
      glowColor: "shadow-primary/10",
      animation: pomodoroAnimation
    },
    {
      title: "EU AI Act Deadline",
      description: "Vanaf februari 2025 is AI-geletterdheid verplicht. Organisaties die niet voldoen riskeren boetes tot 3% van de wereldwijde omzet.",
      stat: "Feb 2025",
      statLabel: "deadline AI-geletterdheid",
      gradient: "from-primary to-teal-400",
      accentColor: "text-primary",
      glowColor: "shadow-primary/10",
      animation: yawnAnimation
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden" id="voor-wie">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <AlertTriangle size={16} className="text-primary" />
              <span>De risico's van ongecontroleerde AI-adoptie</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Waarom traditionele<br />
              <span className="text-white">
                AI-adoptie faalt
              </span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Organisaties worstelen met de balans tussen innovatie en veiligheid. 
              Deze drie uitdagingen komen we bij vrijwel elke organisatie tegen.
            </p>
          </motion.div>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative group`}
            >
              {/* Card */}
              <div className={`relative p-8 pb-6 rounded-3xl bg-white overflow-hidden shadow-2xl ${problem.glowColor} group-hover:shadow-3xl transition-all duration-500 h-full flex flex-col`}>
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${problem.gradient}`} />

                {/* Animation */}
                <div className="w-20 h-20 mx-auto mb-5 mt-2" aria-hidden="true">
                  <Lottie animationData={problem.animation} loop={true} />
                </div>

                {/* Content */}
                <div className="text-center flex-grow">
                  <h3 className="text-xl font-bold text-secondary mb-3 font-display">
                    {problem.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">
                    {problem.description}
                  </p>
                </div>

                {/* KPI Footer */}
                <div className={`mt-6 pt-5 border-t border-gray-100`}>
                  <div className={`flex items-center justify-center gap-2 text-center`}>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${problem.gradient} bg-clip-text text-transparent`}>
                      {problem.stat}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                      {problem.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom urgency message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-white/70 text-lg">
              Het goede nieuws? <span className="text-white font-semibold">Deze problemen zijn volledig te voorkomen.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
