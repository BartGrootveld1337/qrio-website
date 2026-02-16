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
    estimatedLicenses: '',
    message: '',
    agreedToTerms: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Read plan from URL parameter and listen for planSelected events
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const planFromUrl = searchParams.get('plan');
    
    if (planFromUrl && ['Pro for Business', 'Enterprise for Business'].includes(planFromUrl)) {
      setFormData(prev => ({ ...prev, plan: planFromUrl }));
    }

    const handlePlanSelected = (event: CustomEvent<{ plan: string }>) => {
      const { plan } = event.detail;
      if (['Pro for Business', 'Enterprise for Business'].includes(plan)) {
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
      const planInfo = formData.plan || '';
      
      // Send to both FormSubmit (email) and our edge function (database)
      const [response] = await Promise.all([
        fetch('https://formsubmit.co/ajax/bartgrootveld@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            plan: formData.plan,
            estimatedLicenses: formData.estimatedLicenses,
            message: formData.message,
            planInfo,
            _subject: planInfo 
              ? `Nieuwe aanvraag ${planInfo}: ${formData.company}`
              : `Nieuwe aanvraag via Qrio Website: ${formData.company}`,
            _template: 'table',
            _captcha: 'false'
          }),
        }),
        // Store lead in database (fire-and-forget, don't block form submission)
        fetch('https://twdmwcbfhawicoactypy.supabase.co/functions/v1/notify-new-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            company_name: formData.company,
            contact_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            plan_interest: formData.plan,
            estimated_licenses: formData.estimatedLicenses ? parseInt(formData.estimatedLicenses) : null,
            message: formData.message,
            source: 'website',
          }),
        }).catch(() => { /* silently ignore if edge function fails */ }),
      ]);

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', plan: '', estimatedLicenses: '', message: '', agreedToTerms: false });
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
            className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            
            <h3 className="text-xl font-bold text-secondary mb-1">Neem Contact Op</h3>
            <p className="text-gray-500 mb-5 text-sm">Vul het formulier in en we nemen binnen 24 uur contact met je op.</p>
            
            {status === 'error' && (
              <div className="mb-4 bg-red-50 border border-red-100 text-red-600 px-3 py-2 rounded-lg text-sm">
                Er ging iets mis bij het versturen. Probeer het later opnieuw of mail ons direct op hello@qrio.nl.
              </div>
            )}

            <form className="space-y-3.5" onSubmit={handleSubmit}>
                {/* Honeypot field to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Voornaam</label>
                    <input 
                      type="text" 
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm"
                      placeholder="Jan"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="lastName" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Achternaam</label>
                    <input 
                      type="text" 
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm"
                      placeholder="Jansen"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Zakelijk e-mail</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm"
                      placeholder="jan@bedrijf.nl"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Telefoon</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm"
                      placeholder="06 12345678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="company" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Bedrijfsnaam</label>
                    <input 
                      type="text" 
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm"
                      placeholder="Bedrijf B.V."
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="plan" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Interesse in</label>
                    <div className="relative">
                      <select
                        id="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 appearance-none cursor-pointer text-sm"
                      >
                        <option value="">Selecteer een plan</option>
                        <option value="Pro for Business">Pro for Business</option>
                        <option value="Enterprise for Business">Enterprise for Business</option>
                        <option value="Demo">Ik wil eerst een demo</option>
                        <option value="Overig">Overige vraag</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {formData.plan && !['Overig', 'Demo'].includes(formData.plan) && (
                  <div className="flex items-center gap-3">
                    <div className="flex-1 space-y-1">
                      <label htmlFor="estimatedLicenses" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Aantal licenties</label>
                      <input
                        type="number"
                        id="estimatedLicenses"
                        min="1"
                        value={formData.estimatedLicenses}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm"
                        placeholder="Bijv. 25"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-primary/5 rounded-md border border-primary/20 mt-5">
                      {formData.plan.includes('Pro') ? <Sparkles size={12} className="text-primary" /> : 
                       <Building2 size={12} className="text-primary" />}
                      <span className="text-xs text-primary font-medium whitespace-nowrap">
                        {formData.plan}
                      </span>
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Bericht (optioneel)</label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 resize-none text-sm"
                    placeholder="Ik wil graag meer weten over..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    required
                    className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary/20"
                  />
                  <label htmlFor="agreedToTerms" className="text-[11px] text-gray-400">
                    Ik ga akkoord met de{' '}
                    <a href="/voorwaarden" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">algemene voorwaarden</a>
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting' || !formData.agreedToTerms}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none focus:ring-4 focus:ring-primary/50 focus:outline-none text-sm"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Versturen...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Verstuur aanvraag
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
