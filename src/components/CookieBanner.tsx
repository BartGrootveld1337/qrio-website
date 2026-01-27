import { AnimatePresence, motion } from 'framer-motion';
import { useCookie } from '../context/CookieContext';
import { Cookie, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
    const { consent, acceptCookies, declineCookies } = useCookie();

    // Don't show if consent is already given or denied (not null)
    if (consent !== null) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed bottom-4 right-4 z-50 w-full max-w-md p-4 md:bottom-8 md:right-8"
            >
                <div className="bg-white rounded-2xl shadow-glow-lg border border-teal-100/50 p-6 overflow-hidden relative">
                    {/* Decorative background element */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

                    <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                <Cookie className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-bold text-secondary mb-1">
                                    Wij gebruiken cookies
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Om je ervaring te verbeteren en anonieme statistieken bij te houden.
                                    Bekijk ons <Link to="/privacy" className="text-primary hover:underline font-medium">privacybeleid</Link> voor meer info.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={declineCookies}
                                className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-secondary transition-colors"
                            >
                                Weigeren
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                            >
                                <ShieldCheck className="w-4 h-4" />
                                Accepteren
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CookieBanner;
