import LandingPageTemplate from '../components/LandingPageTemplate';

const AIActScholingsplicht = () => {
  const faqItems = [
    {
      question: "Is AI-training verplicht onder de AI Act?",
      answer: "Ja, artikel 4 van de EU AI Act verplicht werkgevers om te zorgen dat hun personeel voldoende 'AI-geletterd' is. Dit betekent dat medewerkers moeten begrijpen hoe AI-systemen werken en wat de risico's zijn."
    },
    {
      question: "Hoe toon ik aan dat ik voldoe aan de scholingsplicht?",
      answer: "Met Qrio bouw je automatisch een audit-trail op. Je kunt per medewerker zien welke modules zijn gevolgd en welke toetsen zijn gehaald. Dit kun je exporteren voor toezichthouders."
    },
    {
      question: "Geldt dit voor alle medewerkers?",
      answer: "De wet stelt dat personen die betrokken zijn bij de werking en het gebruik van AI-systemen bekwaam moeten zijn. In de praktijk betekent dit dat bijna iedereen die met een computer werkt basiskennis nodig heeft."
    },
    {
      question: "Hoe snel kan ik mijn organisatie compliant maken?",
      answer: "Met Qrio kun je direct starten. Onze basismodules dekken de vereiste kennisgebieden af. Je kunt binnen enkele dagen je hele organisatie uitnodigen en laten starten."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <LandingPageTemplate
      seo={{
        title: "AI Act Scholingsplicht voor Organisaties",
        description: "Voldoet jouw organisatie aan de AI Act scholingsplicht? Qrio biedt aantoonbare AI-training en certificering voor medewerkers. Start direct.",
        canonical: "/ai-act-scholingsplicht",
        schema: schema
      }}
      hero={{
        title: <>Voldoe aan de <span className="text-primary">AI Act Scholingsplicht</span> zonder gedoe.</>,
        subtitle: "De EU AI Act verplicht organisaties om medewerkers 'AI-geletterd te maken'. Qrio regelt dit met geautomatiseerde training, toetsing en rapportage.",
        ctaText: "Start Compliance Check",
        ctaLink: "https://app.qrioapp.nl/signup-options"
      }}
      faqItems={faqItems}
    />
  );
};

export default AIActScholingsplicht;
