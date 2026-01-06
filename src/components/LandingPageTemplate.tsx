import Navbar from './Navbar';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import Pricing from './Pricing';
import Contact from './Contact';
import FAQ from './FAQ';
import Footer from './Footer';
import SEO from './SEO';

interface LandingPageTemplateProps {
  seo: {
    title: string;
    description: string;
    canonical?: string;
    schema?: object;
  };
  hero: {
    title: React.ReactNode;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  };
  faqItems?: {
    question: string;
    answer: string;
  }[];
}

const LandingPageTemplate = ({ seo, hero, faqItems }: LandingPageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary">
      <SEO 
        title={seo.title} 
        description={seo.description} 
        canonical={seo.canonical}
        schema={seo.schema}
      />
      <Navbar />
      <main>
        <Hero 
          title={hero.title} 
          subtitle={hero.subtitle}
          ctaText={hero.ctaText}
          ctaLink={hero.ctaLink}
          secondaryCtaText={hero.secondaryCtaText}
          secondaryCtaLink={hero.secondaryCtaLink}
        />
        <Problem />
        <Solution />
        <Pricing />
        <Contact />
        <FAQ items={faqItems} />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageTemplate;
