import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Product', href: '/product' },
    { name: 'AI Act', href: '/ai-act' },
    { name: 'Blogs', href: '/blogs' },
    { 
      name: 'Sectoren', 
      href: '#',
      submenu: [
        { name: 'Bedrijfsleven', href: '/bedrijfsleven', description: 'Voor commerciële organisaties' },
        { name: 'Overheid', href: '/overheid', description: 'Voor publieke sector' },
        { name: 'Onderwijs', href: '/onderwijs', description: 'Voor scholen en universiteiten' },
        { name: 'Zorg', href: '/zorg', description: 'Voor zorginstellingen' },
      ]
    },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      
      if (location.pathname === '/') {
        // Already on homepage, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to homepage with hash
        navigate('/', { state: { scrollTo: id } });
        // Use timeout to scroll after navigation
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (href === '/') {
      e.preventDefault();
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (href.startsWith('/')) {
      // Handle standard internal routes (e.g. /product)
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // For standard routes (submenu items), default behavior (Link) is fine, 
    // but if we use <a> tags we might need to handle it. 
    // However, we will use <Link> for submenu items in the render.
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-100/50' 
          : 'bg-white'
      }`}
      role="navigation"
      aria-label="Hoofdnavigatie"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Qrio Home"
          >
            <motion.img 
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={logo} 
              alt="Qrio Logo" 
              className="h-11 w-11" 
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary font-display leading-none tracking-tight group-hover:text-primary/80 transition-colors">Qrio</span>
              <span className="text-xs font-medium text-gray-500">Vertrouwd met AI</span>
            </div>
          </Link>

          {/* Desktop Menu & CTA */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                onMouseLeave={() => link.submenu && setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-gray-50 ${
                    location.pathname === link.href 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-secondary'
                  }`}
                  aria-haspopup={link.submenu ? "true" : undefined}
                  aria-expanded={activeDropdown === link.name ? "true" : "false"}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </a>
                
                {/* Enhanced Dropdown */}
                {link.submenu && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 mt-2 overflow-hidden"
                        role="menu"
                      >
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                            role="menuitem"
                          >
                            <span className="block font-medium text-secondary group-hover:text-primary transition-colors">{subItem.name}</span>
                            {'description' in subItem && (
                              <span className="block text-xs text-gray-500 mt-0.5">{subItem.description}</span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://app.qrioapp.nl" 
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
              title="Inloggen"
            >
              <User size={18} />
              Inloggen
            </a>
            <a 
              href="https://app.qrioapp.nl/signup-options" 
              className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Probeer gratis
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary hover:text-primary p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 text-base font-medium text-secondary hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown size={16} />}
                  </a>
                  {link.submenu && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                <a 
                  href="https://app.qrioapp.nl"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-secondary font-medium hover:text-primary transition-colors rounded-xl hover:bg-gray-50"
                >
                  <User size={18} />
                  Inloggen
                </a>
                <a 
                  href="https://app.qrioapp.nl/signup-options"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20"
                >
                  Probeer gratis
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
