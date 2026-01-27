import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacybeleid</h1>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">Laatst bijgewerkt: 11 december 2025</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Inleiding</h2>
            <p className="mb-4">
              Qrio ("wij", "ons" of "onze") respecteert uw privacy en zet zich in voor de bescherming van uw persoonsgegevens.
              Dit privacybeleid informeert u over hoe wij omgaan met uw persoonsgegevens wanneer u onze website bezoekt of gebruik maakt van onze diensten.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Gegevens die wij verzamelen</h2>
            <p className="mb-4">
              Wij kunnen de volgende categorieën persoonsgegevens verzamelen en verwerken:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Identiteitsgegevens: voornaam, achternaam.</li>
              <li>Contactgegevens: e-mailadres, telefoonnummer, bedrijfsnaam.</li>
              <li>Technische gegevens: IP-adres, browsertype en -versie, tijdzone-instelling en locatie.</li>
              <li>Gebruiksgegevens: informatie over hoe u onze website en diensten gebruikt.</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Hoe wij uw gegevens gebruiken</h2>
            <p className="mb-4">
              Wij gebruiken uw persoonsgegevens alleen wanneer de wet ons dat toestaat. Meestal gebruiken wij uw persoonsgegevens in de volgende omstandigheden:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Om onze diensten aan u te leveren.</li>
              <li>Om onze website, producten/diensten, marketing en klantrelaties te verbeteren.</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Cookies en Tracking</h2>
            <p className="mb-4">
              Onze website maakt gebruik van cookies en vergelijkbare technologieën om uw ervaring te verbeteren en anonieme statistieken te verzamelen.
            </p>
            <h3 className="text-xl font-semibold text-secondary mt-4 mb-2">4.1 Google Analytics & Ads</h3>
            <p className="mb-4">
              Wij gebruiken Google Analytics en Google Ads om inzicht te krijgen in hoe bezoekers onze website gebruiken en om onze marketingcampagnes te optimaliseren.
              Hierbij worden o.a. IP-adressen (geanonimiseerd) en gegevens over uw browser en apparaat verwerkt.
            </p>
            <h3 className="text-xl font-semibold text-secondary mt-4 mb-2">4.2 Toestemming beheren</h3>
            <p className="mb-4">
              Bij uw eerste bezoek vragen wij toestemming voor het plaatsen van deze cookies via onze cookiebanner.
              U kunt uw keuze op elk moment wijzigen door uw browsercache te wissen of onze cookie-instellingen te resetten.
              Zonder uw toestemming worden er geen marketing- of analytische cookies geplaatst.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Gegevensbeveiliging</h2>
            <p className="mb-4">
              Wij hebben passende beveiligingsmaatregelen genomen om te voorkomen dat uw persoonsgegevens per ongeluk verloren gaan,
              gebruikt of geopend worden op een ongeoorloofde manier, gewijzigd of openbaar gemaakt worden.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Uw rechten</h2>
            <p className="mb-4">
              Onder bepaalde omstandigheden hebt u rechten op grond van de wetgeving inzake gegevensbescherming met betrekking tot uw persoonsgegevens,
              waaronder het recht op inzage, correctie, wissing, beperking van verwerking en overdraagbaarheid van gegevens.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Contact</h2>
            <p className="mb-4">
              Als u vragen hebt over dit privacybeleid of onze privacypraktijken, neem dan contact met ons op via: hello@qrio.nl.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
