import { motion } from 'framer-motion';
import { TrendingUp, Users, ShieldAlert, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: ShieldAlert,
      value: "90%",
      label: "van AI-gebruik is onzichtbaar voor IT",
      description: "Shadow AI is het grootste risico",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-100"
    },
    {
      icon: Users,
      value: "38%",
      label: "deelt bedrijfsdata met AI-tools",
      description: "Zonder goede training",
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-100"
    },
    {
      icon: Clock,
      value: "5 min",
      label: "per dag is genoeg voor resultaat",
      description: "Micro-learning werkt",
      color: "text-primary",
      bg: "bg-teal-50",
      border: "border-teal-100"
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "productiviteitswinst mogelijk",
      description: "Met de juiste training",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="stats">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 font-display">
            Cijfers die je niet kunt <span className="text-gradient">negeren</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            De impact van AI is nu al meetbaar. Zowel in de risico's als in de kansen die je laat liggen.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group border ${stat.border}`}
            >
              <div className={`absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500`}>
                <stat.icon size={80} className={stat.color} />
              </div>
              
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={28} />
              </div>
              
              <div className={`text-5xl font-bold ${stat.color} mb-3 tracking-tight`}>
                {stat.value}
              </div>
              
              <h3 className="text-lg font-bold text-secondary mb-2 leading-tight">
                {stat.label}
              </h3>
              
              <p className="text-gray-500 font-medium text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
