import { Bell, Zap, Trophy, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const MobileAppSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[#0f1c23]">
      {/* Background decoration */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-[-40%] right-[-5%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-8%] w-[400px] h-[400px] bg-teal-500/6 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,157,143,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,157,143,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 scale-90 bg-primary/15 rounded-[3rem] blur-3xl" />

              {/* Phone frame styling: iPhone 15 Pro Titanium style */}
              <div className="relative w-[280px] sm:w-[300px] h-[580px] bg-[#1a1a1a] rounded-[3rem] p-[3px] shadow-2xl border-[6px] border-[#2a2a2a] ring-1 ring-white/10">
                
                {/* Side buttons */}
                <div className="absolute top-24 -left-[9px] w-[3px] h-7 bg-[#2a2a2a] rounded-l-md" /> {/* Mute switch */}
                <div className="absolute top-36 -left-[9px] w-[3px] h-12 bg-[#2a2a2a] rounded-l-md" /> {/* Volume up */}
                <div className="absolute top-52 -left-[9px] w-[3px] h-12 bg-[#2a2a2a] rounded-l-md" /> {/* Volume down */}
                <div className="absolute top-40 -right-[9px] w-[3px] h-16 bg-[#2a2a2a] rounded-r-md" /> {/* Power button */}

                {/* Inner bezel */}
                <div className="relative w-full h-full bg-black rounded-[2.5rem] border-[4px] border-black overflow-hidden relative">
                  
                  {/* Glass reflection gradient */}
                  <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-40 rounded-[2.2rem]" />
                  
                  {/* Dynamic Island / Notch area */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-[35%] bg-black rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-16 h-4 bg-black rounded-full grid place-items-center relative overflow-hidden">
                       {/* Camera lens reflection */}
                       <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#111] ring-1 ring-white/5">
                           <div className="absolute top-[3px] left-[3px] w-0.5 h-0.5 bg-primary/40 rounded-full"></div>
                       </div>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="w-full h-full bg-secondary flex flex-col">
                    
                    {/* Status bar */}
                    <div className="flex justify-between items-end px-6 pt-3 pb-2 text-[12px] font-medium text-white z-10">
                      <span className="ml-[6px]">9:41</span>
                      <div className="flex items-center gap-1.5 mr-[6px]">
                        <svg width="14" height="10" viewBox="0 0 16 12" fill="white" className="opacity-90"><path d="M1 9.5H2.5M4 9.5H5.5M7 9.5H8.5M10 6.5V9.5H11.5V6.5H10ZM13 3.5V9.5H14.5V3.5H13Z" /></svg>
                        <div className="w-5 h-2.5 border border-white/30 rounded-[4px] relative px-[1px]">
                          <div className="h-[6px] w-[13px] bg-white rounded-[2px] mt-[1.5px]" />
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-5 pt-4 pb-4">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden p-1">
                          <img src={logo} alt="Qrio Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-white font-display font-bold text-base tracking-wide">Qrio</span>
                      </div>

                      <p className="text-white/50 text-xs mb-4 font-medium">Welkom terug, Sarah</p>

                      {/* Progress card */}
                      <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-4 mb-4 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[11px] font-medium text-white/60">Dagelijkse voortgang</span>
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">3/5</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '60%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-primary to-teal-400 rounded-full shadow-[0_0_10px_rgba(42,157,143,0.4)]"
                          />
                        </div>
                      </div>

                      {/* Module items */}
                      <div className="space-y-3">
                        {[
                          { title: 'AI & Privacy basics', done: true, time: '2m' },
                          { title: 'Prompt engineering', done: true, time: '4m' },
                          { title: 'Veilig werken met data', done: false, time: '3m' },
                          { title: 'Introductie LLMs', done: false, time: '5m' },
                        ].map((item, i) => (
                          <div key={i} className="group flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-white/5 border border-transparent hover:border-white/5">
                            <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] shrink-0 transition-colors ${
                              item.done
                                ? 'bg-primary text-secondary shadow-[0_0_8px_rgba(42,157,143,0.5)]'
                                : 'bg-white/5 border border-white/10 text-white/30'
                            }`}>
                              {item.done ? '✓' : ''}
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className={`text-[13px] font-medium block truncate ${item.done ? 'text-white/40 line-through' : 'text-white/80'}`}>
                                  {item.title}
                                </span>
                            </div>
                            <span className="text-[10px] text-white/20 font-mono">{item.time}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom streak badge */}
                      <div className="mt-6 flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-3">
                        <div className="bg-orange-500/20 p-1.5 rounded-lg">
                            <Trophy size={14} className="text-orange-400 shrink-0" />
                        </div>
                        <div>
                            <span className="block text-[10px] text-orange-400/80 uppercase font-bold tracking-wider">Streak</span>
                            <span className="text-xs text-orange-100 font-semibold">5 dagen op rij! 🔥</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation Mockup */}
                    <div className="mt-auto border-t border-white/5 px-6 pb-6 pt-3 flex justify-between items-center text-white/40">
                         <div className="flex flex-col items-center gap-1 text-primary">
                             <div className="w-5 h-5 flex items-center justify-center"><BookOpen size={18} /></div>
                             <span className="text-[9px] font-medium">Leren</span>
                         </div>
                         <div className="flex flex-col items-center gap-1">
                             <div className="w-5 h-5 flex items-center justify-center"><Zap size={18} /></div>
                             <span className="text-[9px] font-medium">Oefenen</span>
                         </div>
                         <div className="flex flex-col items-center gap-1">
                             <div className="w-5 h-5 flex items-center justify-center"><div className="w-4 h-4 rounded-full border border-current" /></div>
                             <span className="text-[9px] font-medium">Profiel</span>
                         </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[35%] h-1 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating notification badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -right-6 top-32 z-30"
              >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 border border-white/20 max-w-[200px]">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                        <Bell size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-0.5">Qrio</p>
                        <p className="text-[12px] font-bold text-secondary leading-tight mb-1">Tijd voor je quiz!</p>
                        <p className="text-[11px] text-gray-500 leading-snug">Je dagelijkse challenge staat voor je klaar.</p>
                      </div>
                    </div>
                  </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Coming soon
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 font-display">
              Binnenkort ook{' '}
              <span className="text-gradient">op je telefoon</span>
            </h2>

            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
              Leer onderweg, in je eigen tempo. De Qrio app brengt micro-learning,
              quizzen en je voortgang direct naar je smartphone.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              {[
                { icon: Zap, label: 'Dagelijkse quizzen' },
                { icon: Trophy, label: 'Badges & streaks' },
                { icon: BookOpen, label: 'Offline toegang' },
                { icon: Bell, label: 'Slimme reminders' },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                  className="flex items-center gap-3 text-white/70 text-sm"
                >
                  <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-primary" />
                  </div>
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
