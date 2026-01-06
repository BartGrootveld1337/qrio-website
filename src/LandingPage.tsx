import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Stats from './components/Stats';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SEO from './components/SEO';

const LandingPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Qrio",
        "url": "https://www.qrioapp.nl",
        "logo": "https://www.qrioapp.nl/logo.png",
        "description": "Qrio is het AI-leerplatform voor organisaties. Train medewerkers in veilig en effectief AI-gebruik, voldoe aan de EU AI Act en boost productiviteit.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Weldamhof 11",
          "addressLocality": "Leusden",
          "postalCode": "3831 BH",
          "addressCountry": "NL"
        },
        "sameAs": [
          "https://www.linkedin.com/company/qrioapp"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Qrio",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "description": "AI-leerplatform voor organisaties met gamification, compliance dashboard en micro-learning.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "Gratis proefperiode"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "50"
        }
      },
      {
        "@type": "WebPage",
        "name": "Qrio - AI-geletterdheid voor organisaties",
        "description": "Maak je team AI-vaardig en compliant in 5 minuten per dag. De nummer 1 leeroplossing voor moderne teams."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background font-sans text-secondary">
      <SEO 
        title="Qrio | AI-geletterdheid voor organisaties | EU AI Act Compliant"
        description="Maak je team AI-vaardig en compliant in 5 minuten per dag. Train medewerkers in veilig AI-gebruik, voldoe aan de EU AI Act en boost productiviteit met gamified micro-learning."
        schema={schema}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <Stats />
        <Problem />
        <Solution />
        <Pricing />
        <CTABanner />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
