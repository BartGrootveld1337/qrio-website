import LandingPageTemplate from '../components/LandingPageTemplate';

const AITrainingMedewerkers = () => {
  const faqItems = [
    {
      question: "Waarom is een specifieke AI-training nodig?",
      answer: "AI verandert snel en brengt specifieke risico's met zich mee (zoals hallucinaties en datalekken). Een algemene IT-training dekt dit niet voldoende. Specifieke training verhoogt veiligheid en productiviteit."
    },
    {
      question: "Is de training geschikt voor niet-technische mensen?",
      answer: "Absoluut. Qrio is juist ontworpen voor de 'gewone' medewerker. We vermijden jargon en leggen concepten uit met herkenbare voorbeelden en analogieën."
    },
    {
      question: "Hoeveel tijd kost de training?",
      answer: "We geloven in micro-learning. Medewerkers besteden ongeveer 5 minuten per dag of per week, afhankelijk van jullie instellingen. Zo blijft het leuk en behapbaar."
    },
    {
      question: "Kunnen we de voortgang monitoren?",
      answer: "Ja, als beheerder heb je toegang tot een dashboard waarin je precies ziet wie welke modules heeft afgerond en hoe er gescoord wordt op de quizzen."
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
        title: "AI Training voor Medewerkers | Interactief & Effectief",
        description: "Zoek je een effectieve AI training voor medewerkers? Qrio maakt leren leuk met gamification en micro-learning. Verhoog productiviteit veilig.",
        canonical: "/ai-training-medewerkers",
        schema: schema
      }}
      hero={{
        title: <>De leukste <span className="text-primary">AI Training</span> voor medewerkers.</>,
        subtitle: "Geen saaie presentaties, maar interactieve micro-learning. Leer je team veilig en effectief werken met AI in 5 minuten per dag.",
        ctaText: "Probeer gratis demo",
        ctaLink: "https://app.qrioapp.nl/signup-options"
      }}
      faqItems={faqItems}
    />
  );
};

export default AITrainingMedewerkers;
