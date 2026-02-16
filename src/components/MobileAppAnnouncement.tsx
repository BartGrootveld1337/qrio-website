import { useState, useEffect } from 'react';
import { Smartphone, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const DISMISS_KEY = 'qrio-app-announcement-dismissed';
const DISMISS_DAYS = 7;

const MobileAppAnnouncement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Don't show on the /app page itself
    if (location.pathname === '/app') {
      setIsVisible(false);
      return;
    }

    const dismissedAt = localStorage.getItem(DISMISS_KEY);
    if (dismissedAt) {
      const daysSince =
        (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24);
      if (daysSince < DISMISS_DAYS) return;
    }

    const timer = setTimeout(() => setIsVisible(true), 1800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed top-[5.5rem] left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-2rem)]"
        >
          <Link
            to="/app"
            className="group relative flex items-center gap-3 pl-3 pr-4 py-2
                       bg-white/90 backdrop-blur-xl
                       border border-primary/15
                       rounded-full
                       shadow-[0_4px_24px_-4px_rgba(42,157,143,0.18),0_1px_3px_rgba(0,0,0,0.04)]
                       hover:shadow-[0_8px_32px_-4px_rgba(42,157,143,0.28),0_2px_6px_rgba(0,0,0,0.06)]
                       hover:border-primary/30
                       transition-[box-shadow,border-color] duration-300
                       overflow-hidden cursor-pointer"
          >
            {/* Shimmer sweep */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full rounded-full"
              style={{
                background:
                  'linear-gradient(105deg, transparent 40%, rgba(42,157,143,0.07) 50%, transparent 60%)',
                animation: 'shimmer 2s ease-in-out infinite 5s',
              }}
            />

            {/* Phone icon with ping */}
            <span className="relative flex items-center justify-center h-8 w-8 shrink-0">
              {/* Ping ring */}
              <span className="absolute inset-0 rounded-full bg-primary/15 animate-ping opacity-60" />

              {/* Icon circle */}
              <motion.span
                animate={{ rotate: [0, -6, 6, -4, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: 'easeInOut',
                }}
                className="relative z-10 flex items-center justify-center h-8 w-8
                           rounded-full bg-gradient-to-br from-primary/10 to-teal-400/15
                           border border-primary/10"
              >
                <Smartphone size={15} className="text-primary" strokeWidth={2.25} />
              </motion.span>
            </span>

            {/* Copy */}
            <span className="text-[0.8125rem] font-semibold font-display text-secondary whitespace-nowrap select-none">
              <span className="hidden sm:inline">Mobiele app </span>
              <span className="sm:hidden">App </span>
              <span className="text-gradient">binnenkort</span>
              {' '}beschikbaar
            </span>

            {/* Arrow */}
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="text-primary/70 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
            />

            {/* Dismiss */}
            <button
              onClick={handleDismiss}
              className="ml-0.5 p-1 rounded-full text-gray-300 hover:text-gray-500 hover:bg-gray-100/80 transition-colors shrink-0"
              aria-label="Sluiten"
            >
              <X size={13} strokeWidth={2.5} />
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileAppAnnouncement;
