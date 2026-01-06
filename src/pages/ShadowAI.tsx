import LandingPageTemplate from '../components/LandingPageTemplate';

const ShadowAI = () => {
  const faqItems = [
    {
      question: "Wat is Shadow AI?",
      answer: "Shadow AI verwijst naar het gebruik van AI-tools door medewerkers zonder medeweten of goedkeuring van de IT-afdeling. Dit vormt een groot risico voor dataveiligheid en compliance."
    },
    {
      question: "Hoe groot is het probleem van Shadow AI?",
      answer: "Onderzoek toont aan dat in veel organisaties tientallen verschillende AI-tools worden gebruikt zonder toezicht. Vaak worden hierbij gratis versies gebruikt waarbij data wordt gebruikt voor training."
    },
    {
      question: "Hoe helpt Qrio hierbij?",
      answer: "Qrio creëert bewustwording. Door medewerkers te trainen in de risico's van gratis tools en ze te wijzen op de goedgekeurde alternatieven, neemt het gebruik van Shadow AI af."
    },
    {
      question: "Kunnen we onze eigen goedgekeurde tools promoten?",
      answer: "Ja, je kunt in Qrio specifieke modules maken over jullie interne toolset (bijv. 'Hoe gebruiken wij Copilot veilig') en deze verplicht stellen."
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
        title: "Shadow AI Voorkomen & Beheersen",
        description: "Shadow AI is een groot risico voor security. Qrio helpt je inzicht te krijgen en medewerkers te sturen naar goedgekeurde AI-tools.",
        canonical: "/shadow-ai-voorkomen",
        schema: schema
      }}
      hero={{
        title: <>Stop <span className="text-primary">Shadow AI</span>, start met inzicht.</>,
        subtitle: "Weet jij welke gratis AI-tools je medewerkers gebruiken? Voorkom datalekken door onzichtbaar gebruik en bied een veilig alternatief.",
        ctaText: "Start Security Scan",
        ctaLink: "https://app.qrioapp.nl/signup-options"
      }}
      faqItems={faqItems}
    />
  );
};

export default ShadowAI;
