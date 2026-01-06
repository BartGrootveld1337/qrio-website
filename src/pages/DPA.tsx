import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DPA = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Verwerkersovereenkomst</h1>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">Laatst bijgewerkt: 1 januari 2026</p>
            
            <p className="mb-4">
              Wanneer u gebruik maakt van Qrio als zakelijke klant, treden wij op als verwerker van persoonsgegevens. 
              Om te voldoen aan de Algemene Verordening Gegevensbescherming (AVG), bieden wij een standaard Verwerkersovereenkomst (DPA) aan.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Onderwerp</h2>
            <p className="mb-4">
              Deze overeenkomst is van toepassing op de verwerking van persoonsgegevens door Qrio in opdracht van de Klant in het kader van de levering van de Qrio software en diensten.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Verwerking van Persoonsgegevens</h2>
            <p className="mb-4">
              Qrio verwerkt persoonsgegevens uitsluitend in opdracht van de Klant en voor zover noodzakelijk voor de uitvoering van de Hoofdovereenkomst. 
              De categorieën van betrokkenen zijn medewerkers van de Klant. De categorieën van persoonsgegevens zijn namen, e-mailadressen en voortgangsdata.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Beveiligingsmaatregelen</h2>
            <p className="mb-4">
              Qrio treft passende technische en organisatorische maatregelen om persoonsgegevens te beveiligen tegen verlies of onrechtmatige verwerking. 
              Deze maatregelen omvatten onder meer encryptie, toegangscontrole en regelmatige security audits.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Subverwerkers</h2>
            <p className="mb-4">
              De Klant geeft Qrio algemene toestemming om subverwerkers in te schakelen. Onze huidige subverwerkers zijn:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Microsoft Azure</strong> (Hosting & Database, Regio West-Europa)</li>
              <li><strong>Postmark</strong> (Transactionele e-mail, EU servers)</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Meldplicht Datalekken</h2>
            <p className="mb-4">
              In het geval van een datalek zal Qrio de Klant zonder onredelijke vertraging, en uiterlijk binnen 48 uur na ontdekking, informeren.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Download</h2>
            <p className="mb-4">
              U kunt de volledige Verwerkersovereenkomst hier downloaden als PDF (voorbeeld).
              <br />
              <a href="#" className="text-primary font-semibold hover:underline">Download DPA (PDF)</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DPA;
