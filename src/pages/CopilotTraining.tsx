import LandingPageTemplate from '../components/LandingPageTemplate';

const CopilotTraining = () => {
  const faqItems = [
    {
      question: "Is deze training specifiek voor Microsoft Copilot?",
      answer: "Ja, we hebben specifieke modules die ingaan op de werking van Microsoft 365 Copilot, inclusief integraties in Word, Excel, PowerPoint en Teams."
    },
    {
      question: "Wat leren medewerkers precies?",
      answer: "Ze leren effectieve prompts schrijven (prompt engineering), begrijpen wanneer ze Copilot wel en niet moeten gebruiken, en hoe ze output moeten verifiëren."
    },
    {
      question: "Helpt dit bij de adoptie van Copilot?",
      answer: "Zeker. Veel organisaties zien dat Copilot licenties niet gebruikt worden omdat mensen niet weten wat ze ermee kunnen. Qrio biedt praktische use-cases die direct toepasbaar zijn."
    },
    {
      question: "Hoe zit het met data-beveiliging in Copilot?",
      answer: "Dit is een cruciaal onderdeel van de training. We leren medewerkers hoe Copilot omgaat met bedrijfsdata en wat de risico's zijn van 'oversharing' binnen de organisatie."
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
        title: "Microsoft Copilot Training & Adoptie",
        description: "Haal alles uit je Microsoft Copilot licenties. Qrio biedt specifieke training voor Copilot adoptie, prompt engineering en veilig gebruik.",
        canonical: "/copilot-training",
        schema: schema
      }}
      hero={{
        title: <>Haal eindelijk rendement uit je <span className="text-primary">Copilot</span> licenties.</>,
        subtitle: "Veel organisaties hebben Copilot, maar niemand gebruikt het effectief. Qrio leert je medewerkers de juiste prompts en use-cases.",
        ctaText: "Boost Copilot Adoptie",
        ctaLink: "https://app.qrioapp.nl/signup-options"
      }}
      faqItems={faqItems}
    />
  );
};

export default CopilotTraining;
