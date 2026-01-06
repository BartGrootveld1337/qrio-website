import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden Qrio B.V.</h1>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4 font-medium">Versie: 1.0 Datum: 11 december 2025</p>
            
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 1. Definities</h2>
            <p className="mb-4">In deze algemene voorwaarden wordt verstaan onder:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Qrio:</strong> De gebruiker van deze algemene voorwaarden, zijnde de leverancier van de SaaS-dienst, statutair gevestigd te Leusden en ingeschreven bij de KvK onder nummer 96657790.</li>
              <li><strong>Klant:</strong> De natuurlijke persoon of rechtspersoon die handelt in de uitoefening van beroep of bedrijf (B2B) en die een overeenkomst aangaat met Qrio.</li>
              <li><strong>Dienst:</strong> De door Qrio aangeboden software-as-a-service (SaaS) applicatie "Qrio" / "QrioApp", inclusief de mobiele app, het webdashboard, de content (quizzen, cursussen, kennisbank) en bijbehorende functionaliteiten.</li>
              <li><strong>Gebruiker:</strong> De natuurlijke persoon (bijv. medewerker van de Klant) die door de Klant is geautoriseerd om gebruik te maken van de Dienst.</li>
              <li><strong>Overeenkomst:</strong> De afspraken tussen Qrio en Klant op grond waarvan Qrio de Dienst ter beschikking stelt tegen betaling.</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 2. Toepasselijkheid</h2>
            <p className="mb-4">Deze voorwaarden zijn van toepassing op iedere aanbieding, offerte en overeenkomst tussen Qrio en de Klant.</p>
            <p className="mb-4">De toepasselijkheid van eventuele inkoop- of andere voorwaarden van de Klant wordt uitdrukkelijk van de hand gewezen.</p>
            <p className="mb-4">Indien de Dienst functionaliteiten bevat die gebruikmaken van diensten van derden (bijv. hosting via Supabase of AI-modellen), kunnen op die specifieke onderdelen aanvullende voorwaarden van die derden van toepassing zijn.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 3. Het Aanbod en Totstandkoming</h2>
            <p className="mb-4">Alle offertes en aanbiedingen van Qrio zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld.</p>
            <p className="mb-4">De Overeenkomst komt tot stand op het moment dat de Klant via de website een abonnement afsluit (digitale acceptatie) of een offerte schriftelijk of per e-mail accordeert.</p>
            <p className="mb-4">Qrio kan niet aan zijn offertes of aanbiedingen worden gehouden indien de Klant redelijkerwijs kan begrijpen dat de offertes of aanbiedingen, dan wel een onderdeel daarvan, een kennelijke vergissing of verschrijving bevatten.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 4. Uitvoering van de Dienst (SaaS)</h2>
            <p className="mb-4"><strong>Inspanningsverplichting:</strong> Qrio zal zich inspannen om de Dienst zorgvuldig en naar beste kunnen te leveren. Qrio garandeert echter niet dat de Dienst te allen tijde foutloos, ononderbroken of vrij van gebreken zal functioneren.</p>
            <p className="mb-4"><strong>Disclaimer Educatieve Content:</strong> De inhoud van de Dienst (artikelen, quizzen, adviezen over AI-gebruik) is met zorg samengesteld. Gezien de snelle ontwikkelingen binnen AI kan Qrio echter niet garanderen dat alle informatie te allen tijde volledig, actueel of juist is. De Klant blijft zelf verantwoordelijk voor de toepassing van deze kennis binnen de eigen organisatie.</p>
            <p className="mb-4"><strong>Updates:</strong> Qrio heeft het recht om de Dienst tussentijds te wijzigen, uit te breiden of aan te passen (updates en patches) om functionaliteit te verbeteren of veiligheidsrisico's te beperken.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 5. Account en Gebruik</h2>
            <p className="mb-4"><strong>Toegang:</strong> Om de Dienst te gebruiken, dient de Klant accounts aan te maken of medewerkers uit te nodigen. De Klant staat in voor de juistheid van de verstrekte gegevens.</p>
            <p className="mb-4"><strong>Verantwoordelijkheid:</strong> De Klant is verantwoordelijk voor al het gebruik dat plaatsvindt via de accounts van zijn Gebruikers. Inloggegevens zijn strikt persoonlijk.</p>
            <p className="mb-4"><strong>Misbruik:</strong> Het is de Klant verboden de Dienst te gebruiken voor handelingen die in strijd zijn met de wet, de goede zeden of deze voorwaarden. Hieronder valt onder meer:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Het "scrapen" van content of quizvragen.</li>
              <li>Het reverse-engineeren van de broncode.</li>
              <li>Het uploaden van virussen of schadelijke code.</li>
            </ul>
            <p className="mb-4"><strong>Blokkade:</strong> Qrio behoudt zich het recht voor om bij vermoeden van misbruik accounts (tijdelijk) te blokkeren zonder recht op restitutie.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 6. Prijzen en Betaling</h2>
            <p className="mb-4">De prijzen zijn exclusief btw en andere heffingen van overheidswege.</p>
            <p className="mb-4">Betaling geschiedt bij vooruitbetaling per maand of jaar, tenzij anders overeengekomen (bijv. via automatische incasso of creditcard).</p>
            <p className="mb-4"><strong>Indexatie:</strong> Qrio is gerechtigd de prijzen jaarlijks aan te passen op basis van inflatie (CPI). Prijswijzigingen worden minimaal 30 dagen van tevoren aangekondigd.</p>
            <p className="mb-4">Bij niet-tijdige betaling is de Klant van rechtswege in verzuim. Qrio heeft dan het recht de toegang tot de Dienst op te schorten totdat de volledige betaling is ontvangen.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 7. Intellectueel Eigendom</h2>
            <p className="mb-4">Alle rechten van intellectueel eigendom met betrekking tot de Dienst, de software, de databases, de quizvragen, de leermodules en het ontwerp berusten uitsluitend bij Qrio of haar licentiegevers.</p>
            <p className="mb-4"><strong>Gebruiksrecht:</strong> De Klant verkrijgt uitsluitend een niet-exclusief, niet-overdraagbaar gebruiksrecht voor de duur van de Overeenkomst ten behoeve van de eigen interne bedrijfsvoering.</p>
            <p className="mb-4"><strong>Klantdata:</strong> Alle data die door de Klant wordt gegenereerd (voortgangsstatistieken, gebruikersprofielen) blijft eigendom van de Klant. Qrio heeft het recht deze data geanonimiseerd te gebruiken voor analyse en verbetering van de Dienst.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 8. Aansprakelijkheid (Belangrijk!)</h2>
            <p className="mb-4"><strong>Beperking:</strong> De aansprakelijkheid van Qrio is beperkt tot vergoeding van directe schade en tot maximaal het bedrag dat de Klant in de 3 maanden voorafgaand aan het schadeveroorzakende feit aan Qrio heeft betaald (exclusief btw).</p>
            <p className="mb-4"><strong>Uitsluiting Indirecte Schade:</strong> Aansprakelijkheid voor indirecte schade, waaronder begrepen gevolgschade, gederfde winst, gemiste besparingen, verlies van data, reputatieschade en schade door bedrijfsstagnatie, is uitdrukkelijk uitgesloten.</p>
            <p className="mb-4"><strong>Specifieke uitsluiting AI-gebruik:</strong> Qrio biedt trainingen aan over veilig AI-gebruik. Qrio is echter nimmer aansprakelijk voor schade die ontstaat doordat medewerkers van de Klant, ondanks het volgen van de training, fouten maken, datalekken veroorzaken of AI-tools op onjuiste wijze inzetten. De Klant blijft te allen tijde eindverantwoordelijk voor het handelen van zijn personeel.</p>
            <p className="mb-4">De beperkingen in dit artikel gelden niet indien de schade het gevolg is van opzet of bewuste roekeloosheid van de bedrijfsleiding van Qrio.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 9. Overmacht</h2>
            <p className="mb-4">Qrio is niet gehouden tot het nakomen van enige verplichting indien zij daartoe gehinderd wordt door overmacht.</p>
            <p className="mb-4">Onder overmacht wordt mede verstaan: storingen in de verbindingen van het internet, storingen in de telecommunicatie-infrastructuur, uitval van stroom, aanvallen van hackers (DDoS), storingen bij toeleveranciers (zoals Supabase, Vercel, OpenAI) en stakingen.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 10. Looptijd en Opzegging</h2>
            <p className="mb-4">De Overeenkomst wordt aangegaan voor de duur van het gekozen abonnement (bijv. maandelijks of jaarlijks).</p>
            <p className="mb-4">Na afloop van de termijn wordt de Overeenkomst stilzwijgend verlengd voor dezelfde periode, tenzij anders overeengekomen.</p>
            <p className="mb-4"><strong>Opzegging:</strong> De Klant kan het abonnement opzeggen tegen het einde van de looptijd met inachtneming van een opzegtermijn van 1 maand. Opzegging kan geschieden via het dashboard of per e-mail.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 11. Privacy en Verwerking Persoonsgegevens</h2>
            <p className="mb-4">Indien Qrio bij de uitvoering van de Dienst persoonsgegevens verwerkt (zoals e-mailadressen en namen van medewerkers), geldt Qrio als 'Verwerker' en de Klant als 'Verwerkingsverantwoordelijke' in de zin van de AVG.</p>
            <p className="mb-4">Partijen zullen een Verwerkersovereenkomst sluiten waarin afspraken worden gemaakt over de beveiliging en verwerking van deze gegevens. Bij gebreke van een aparte overeenkomst gelden de bepalingen in de Privacyverklaring van Qrio als verwerkersovereenkomst.</p>

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Artikel 12. Toepasselijk recht en Geschillen</h2>
            <p className="mb-4">Op alle rechtsbetrekkingen waarbij Qrio partij is, is uitsluitend het Nederlands recht van toepassing.</p>
            <p className="mb-4">Geschillen zullen uitsluitend worden voorgelegd aan de bevoegde rechter van de rechtbank Midden-Nederland (locatie Utrecht), tenzij dwingend recht anders voorschrijft.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
