import { useState } from 'react';
import { Smartphone, Mail, Send, Loader2, CheckCircle, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const AppDownload = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');

    try {
      await fetch('https://twdmwcbfhawicoactypy.supabase.co/functions/v1/notify-new-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company_name: 'Waitlist signup',
          contact_name: email,
          email,
          plan_interest: 'Mobile App Waitlist',
          source: 'app-download-page',
        }),
      });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <SEO
        title="Qrio App — Binnenkort beschikbaar"
        description="De Qrio mobiele app komt eraan. Meld je aan voor de waitlist en word als eerste op de hoogte gebracht."
        canonical="/app"
      />
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone size={40} className="text-primary" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              Coming Soon
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Qrio in je <span className="text-primary">broekzak</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
              Binnenkort te vinden in de App Store en Google Play. 
              Leer op elk moment over AI, voltooi modules onderweg en houd je voortgang bij.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                App Store
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
                Google Play
              </div>
            </div>

            {status === 'success' ? (
              <div className="flex items-center justify-center gap-3 text-green-600 bg-green-50 px-6 py-4 rounded-xl border border-green-100">
                <CheckCircle size={20} />
                <span className="font-medium">Je staat op de lijst! We houden je op de hoogte.</span>
              </div>
            ) : (
              <>
                <p className="text-sm font-medium text-gray-500 mb-3">
                  Laat je e-mailadres achter en we sturen je een bericht zodra de app beschikbaar is.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="je@email.nl"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Notify me
                      </>
                    )}
                  </button>
                </form>
                {status === 'error' && (
                  <p className="text-red-500 text-sm mt-3">Er ging iets mis. Probeer het later opnieuw.</p>
                )}
              </>
            )}
          </div>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft size={16} />
              Terug naar Home
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AppDownload;
