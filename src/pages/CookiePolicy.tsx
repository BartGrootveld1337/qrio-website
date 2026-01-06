import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Cookiebeleid</h1>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">Laatst bijgewerkt: 1 januari 2026</p>
            
            <p className="mb-4">
              Qrio gebruikt cookies en vergelijkbare technologieën om onze website en diensten te leveren, te verbeteren en te beveiligen.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Wat zijn cookies?</h2>
            <p className="mb-4">
              Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst wanneer u een website bezoekt. Ze worden veel gebruikt om websites te laten werken of efficiënter te laten werken.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Welke cookies gebruiken wij?</h2>
            <p className="mb-4">
              Wij gebruiken de volgende soorten cookies:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Noodzakelijke cookies:</strong> Deze zijn essentieel voor de werking van de website (bijv. sessiebeheer).</li>
              <li><strong>Analytische cookies:</strong> Wij gebruiken Plausible Analytics. Dit is een privacy-vriendelijk alternatief voor Google Analytics dat geen cookies gebruikt en geen persoonsgegevens verzamelt. Hierdoor is geen cookiebanner nodig voor deze statistieken.</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Cookie instellingen</h2>
            <p className="mb-4">
              Omdat wij geen tracking cookies of advertentiecookies gebruiken, hoeven wij geen toestemming te vragen via een cookiebanner. 
              Indien wij in de toekomst wel dergelijke cookies gaan gebruiken, zullen wij u hierom vragen.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Contact</h2>
            <p className="mb-4">
              Vragen over ons cookiebeleid? Mail naar hello@qrio.nl.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
