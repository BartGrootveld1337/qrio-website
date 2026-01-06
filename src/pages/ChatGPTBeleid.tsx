import LandingPageTemplate from '../components/LandingPageTemplate';

const ChatGPTBeleid = () => {
  const faqItems = [
    {
      question: "Waarom hebben we een ChatGPT beleid nodig?",
      answer: "Zonder beleid gebruiken medewerkers ChatGPT op eigen houtje, vaak met privé-accounts. Dit leidt tot het lekken van bedrijfsgevoelige informatie en inconsistent werk."
    },
    {
      question: "Biedt Qrio een voorbeeldbeleid?",
      answer: "Ja, in de Qrio omgeving vind je templates voor AI-beleid die je kunt aanpassen aan jouw organisatie. Je kunt dit beleid vervolgens direct als module aanbieden aan je medewerkers."
    },
    {
      question: "Hoe controleren we of medewerkers het beleid kennen?",
      answer: "Je kunt een toets koppelen aan de beleidsmodule. Medewerkers moeten deze toets halen om aan te tonen dat ze het beleid hebben gelezen en begrepen."
    },
    {
      question: "Wat zijn 'veilige prompts'?",
      answer: "Veilige prompts bevatten geen persoonsgegevens (PII) of bedrijfsgeheimen. We leren medewerkers technieken om AI te gebruiken zonder gevoelige data te delen (bijv. anonimisering)."
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
        title: "ChatGPT Beleid & Veilige Prompts",
        description: "Stel een duidelijk ChatGPT beleid op en train medewerkers in veilig gebruik. Voorkom datalekken en zorg voor verantwoorde AI-adoptie.",
        canonical: "/chatgpt-beleid",
        schema: schema
      }}
      hero={{
        title: <>Van <span className="text-primary">ChatGPT chaos</span> naar duidelijk beleid.</>,
        subtitle: "Medewerkers gebruiken ChatGPT toch wel. Zorg dat ze het veilig doen. Implementeer beleid en train veilige prompts met Qrio.",
        ctaText: "Download Beleid Template",
        ctaLink: "#download-policy"
      }}
      faqItems={faqItems}
    />
  );
};

export default ChatGPTBeleid;
