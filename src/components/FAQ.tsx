import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
  const defaultFaqs = [
    {
      question: "Wat is AI-Geletterdheid?",
      answer: "AI-geletterdheid is de combinatie van vaardigheden, kennis en inzicht die nodig is om AI-systemen effectief in te zetten, met volledig bewustzijn van de bijbehorende risico's en beperkingen."
    },
    {
      question: "Hoe zit het met data en privacy?",
      answer: "Veiligheid staat voorop. Qrio voldoet aan de AVG/GDPR. Wij gebruiken geen klantdata om AI-modellen te trainen. Alle data wordt versleuteld opgeslagen op servers binnen de EU."
    },
    {
      question: "Welke AI tools worden behandeld?",
      answer: "We behandelen de principes die gelden voor alle LLM's (zoals ChatGPT, Copilot, Gemini). Daarnaast bieden we specifieke modules voor populaire tools en kun je eigen tools toevoegen."
    },
    {
      question: "Kan ik eigen content of maatwerk toevoegen?",
      answer: "Absoluut! Je kunt eenvoudig eigen modules, beleidsdocumenten en specifieke use-cases toevoegen. Zo sluit de training naadloos aan op jullie specifieke situatie en tools."
    },
    {
      question: "Hoeveel tijd kost het mijn medewerkers?",
      answer: "Qrio is ontworpen als micro-learning. Een module duurt gemiddeld 3 tot 5 minuten. Dit zorgt voor minimale werkonderbreking en maximale kennisretentie."
    },
    {
      question: "Ondersteunen jullie SSO en integraties?",
      answer: "Ja, we ondersteunen Single Sign-On (SSO) via o.a. Microsoft Entra ID (Azure AD) en Okta. Gebruikersbeheer is hierdoor volledig geautomatiseerd."
    },
    {
      question: "Krijgen medewerkers een certificaat?",
      answer: "Ja, bij het succesvol afronden van leertrajecten ontvangen medewerkers een certificaat. Dit wordt ook vastgelegd in het compliance dashboard voor jullie administratie."
    },
    {
      question: "Hoe snel kunnen we starten?",
      answer: "Omdat Qrio een SaaS-oplossing is, kun je in principe binnen één dag live zijn. Na inrichting van de omgeving en eventuele SSO-koppeling kunnen medewerkers direct aan de slag."
    },
  ];

  const faqs = items || defaultFaqs;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-gray-50" id="over-ons">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
          Veelgestelde vragen
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-secondary">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
