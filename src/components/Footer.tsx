import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${id ? '#' + id : ''}`;
    }
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '/product' },
      { name: 'Pricing', href: '/#pricing', onClick: () => scrollToSection('pricing') },
      { name: 'AI Act Compliance', href: '/ai-act' },
      { name: 'FAQ', href: '/#over-ons', onClick: () => scrollToSection('over-ons') },
    ],
    sectoren: [
      { name: 'Bedrijfsleven', href: '/bedrijfsleven' },
      { name: 'Overheid', href: '/overheid' },
      { name: 'Onderwijs', href: '/onderwijs' },
      { name: 'Zorg', href: '/zorg' },
    ],
    resources: [
      { name: 'AI Act Scholingsplicht', href: '/ai-act-scholingsplicht' },
      { name: 'AI Training Medewerkers', href: '/ai-training-medewerkers' },
      { name: 'Copilot Training', href: '/copilot-training' },
      { name: 'ChatGPT Beleid', href: '/chatgpt-beleid' },
      { name: 'Shadow AI Voorkomen', href: '/shadow-ai-voorkomen' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Algemene Voorwaarden', href: '/voorwaarden' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Verwerkersovereenkomst', href: '/dpa' },
    ],
  };

  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 inline-flex" aria-label="Qrio Home">
              <img src={logo} alt="Qrio Logo" className="h-10 w-10 brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white font-display leading-none">Qrio</span>
                <span className="text-xs font-medium text-gray-400">Vertrouwd met AI</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
              Het AI-leerplatform dat organisaties helpt om veilig en effectief met AI te werken. Compliant met de EU AI Act, gebouwd in Nederland.
            </p>
            
            {/* Newsletter signup */}
            <div className="mb-6">
              <p className="text-sm font-medium text-white mb-3">Blijf op de hoogte</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="je@email.nl" 
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button 
                  type="submit"
                  className="px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/company/qrioapp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:info@qrioapp.nl"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Sectoren Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Sectoren</h4>
            <ul className="space-y-3">
              {footerLinks.sectoren.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="mailto:info@qrioapp.nl" className="flex items-start gap-2 hover:text-white transition-colors">
                  <Mail size={16} className="mt-0.5 flex-shrink-0" />
                  <span>info@qrioapp.nl</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  Weldamhof 11<br />
                  3831 BH Leusden
                </span>
              </li>
              <li className="pt-2 border-t border-white/10">
                <span className="text-xs">
                  Break the Norm B.V.<br />
                  KvK: 96657790<br />
                  BTW: NL867702199B01
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              &copy; 2025 Break the Norm B.V. Alle rechten voorbehouden.
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              {footerLinks.legal.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
