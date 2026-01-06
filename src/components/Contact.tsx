import { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Loader2, Sparkles, Building2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    plan: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Read plan from URL parameter and listen for planSelected events
  useEffect(() => {
    // Check URL on mount
    const searchParams = new URLSearchParams(window.location.search);
    const planFromUrl = searchParams.get('plan');
    
    if (planFromUrl && ['Professional', 'Enterprise'].includes(planFromUrl)) {
      setFormData(prev => ({ ...prev, plan: planFromUrl }));
    }

    // Listen for custom event from Pricing component
    const handlePlanSelected = (event: CustomEvent<{ plan: string }>) => {
      const { plan } = event.detail;
      if (['Professional', 'Enterprise'].includes(plan)) {
        setFormData(prev => ({ ...prev, plan }));
      }
    };

    window.addEventListener('planSelected', handlePlanSelected as EventListener);
    
    return () => {
      window.removeEventListener('planSelected', handlePlanSelected as EventListener);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Gebruik FormSubmit voor het versturen van e-mails zonder backend
      // Zie: https://formsubmit.co/ajax/
      const response = await fetch('https://formsubmit.co/ajax/bartgrootveld@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: formData.plan 
            ? `Offerte aanvraag ${formData.plan}: ${formData.company}`
            : `Nieuwe aanvraag via Qrio Website: ${formData.company}`,
          _template: 'table', // Zorgt voor een nette tabel in de e-mail
          _captcha: 'false'   // Zet captcha uit (optioneel, kan spam geven)
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', plan: '', message: '' });
        navigate('/bedankt');
      } else {
        console.error('Submission error:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-32 bg-secondary" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar om je team <span className="text-primary">AI-vaardig</span> te maken?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Neem contact op voor een vrijblijvend gesprek of demo. We denken graag mee over de beste aanpak voor jouw organisatie.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Email ons</h3>
                  <p className="text-white/80">info@qrioapp.nl</p>
                  <p className="text-sm text-white/60">Antwoord binnen 24 uur</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Locatie</h3>
                  <p className="text-white/80">Break the Norm</p>
                  <p className="text-sm text-white/60">Weldamhof 11, 3831 BH Leusden</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            
            <h3 className="text-2xl font-bold text-secondary mb-2">Neem Contact Op</h3>
            <p className="text-gray-500 mb-8 text-sm">Vul het formulier in en we nemen binnen 24 uur contact met je op.</p>
            
            {status === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm">
                Er ging iets mis bij het versturen. Probeer het later opnieuw of mail ons direct op hello@qrio.nl.
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Honeypot field to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Voornaam</label>
                    <input 
                      type="text" 
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200"
                      placeholder="Jan"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Achternaam</label>
                    <input 
                      type="text" 
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200"
                      placeholder="Jansen"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Zakelijk E-mailadres</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200"
                    placeholder="jan@bedrijf.nl"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Telefoonnummer</label>
                  <input 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200"
                    placeholder="06 12345678"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Bedrijfsnaam</label>
                  <input 
                    type="text" 
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200"
                    placeholder="Bedrijf B.V."
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="plan" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Interesse in</label>
                  <div className="relative">
                    <select
                      id="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Selecteer een optie (optioneel)</option>
                      <option value="Professional">Professional - €2,50 per gebruiker/maand</option>
                      <option value="Enterprise">Enterprise - Op maat</option>
                      <option value="Demo">Ik wil eerst een demo</option>
                      <option value="Overig">Overige vraag</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  {formData.plan && formData.plan !== 'Overig' && formData.plan !== 'Demo' && (
                    <div className="flex items-center gap-2 mt-2 px-3 py-2 bg-primary/5 rounded-lg border border-primary/20">
                      {formData.plan === 'Professional' ? <Sparkles size={14} className="text-primary" /> : <Building2 size={14} className="text-primary" />}
                      <span className="text-sm text-primary font-medium">Je vraagt een offerte aan voor {formData.plan}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Bericht (Optioneel)</label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 resize-none"
                    placeholder="Ik wil graag meer weten over..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none focus:ring-4 focus:ring-primary/50 focus:outline-none"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Versturen...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Verstuur Bericht
                    </>
                  )}
                </button>
              </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
