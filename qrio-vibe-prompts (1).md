# Qrio — Vibe Coding Prompts (Pricing & Website Update)

Hieronder staan alle TODO's uitgewerkt als losse, gedetailleerde prompts die je één voor één aan je AI-vibe code tool kunt voeren. Ze zijn gegroepeerd per thema en genummerd voor tracking.

---

## A. Pricing Model — Drie Tiers Opzetten

### A1. Pricing Data Model & Configuratie

```
Maak een centrale pricing configuratie (bijv. in een config bestand of Supabase tabel) met drie abonnementstiers:

1. "Standaard" — EUR 3,50 per licentie/maand — individueel gebruik
2. "Pro for Business" — EUR 5,00 per licentie/maand — zakelijk gebruik
3. "Enterprise for Business" — EUR 7,50 per licentie/maand — zakelijk gebruik

Elke tier heeft de volgende velden:
- name (string)
- slug (string, voor URL's)
- price (number, in EUR)
- billingType: "individual" | "business"
- features (array of strings)
- ctaType: "paywall" | "contact_form"
- highlighted (boolean, voor de aanbevolen optie)
- stripePriceId (string | null) — Stripe Price ID, alleen voor "Standaard" tier (de zakelijke tiers gaan via contactformulier)
- stripeProductId (string | null) — Stripe Product ID

Features per tier:
- Standaard: ["Toegang tot basiscursussen", "Prompt bibliotheek", "Kennisbank", "Persoonlijk dashboard"]
- Pro for Business: ["Alles uit Standaard", "Verdiepende modules", "Compliance rapportages", "Beheerdersdashboard", "Medewerkers uitnodigen"]
- Enterprise for Business: ["Alles uit Pro for Business", "SLA", "Maatwerk modules", "Premium support", "Dedicated accountmanager"]
```

### A2. Pricing Page — Drie-koloms Layout

```
Bouw een pricing pagina (of sectie op de homepage) met drie naast-elkaar geplaatste pricing cards:

Kolom 1 — "Standaard" (EUR 3,50/licentie)
- Subtitle: "Voor individueel gebruik"
- Feature lijst (zie A1)
- CTA button: "Start gratis" → linkt naar een betaalmuur/signup pagina (zie prompt B1)
- Subtekst onder de button: "Geen creditcard nodig"

Kolom 2 — "Pro for Business" (EUR 5,00/licentie) — HIGHLIGHTED/aanbevolen
- Subtitle: "Voor zakelijk gebruik"
- Feature lijst (zie A1)
- CTA button: "Neem contact op" → opent contactformulier (zie prompt D1)
- Toon een badge "Meest gekozen" of "Aanbevolen"

Kolom 3 — "Enterprise for Business" (EUR 7,50/licentie)
- Subtitle: "Voor zakelijk gebruik"
- Feature lijst (zie A1)
- CTA button: "Neem contact op" → opent contactformulier (zie prompt D1)

Styling: gebruik de bestaande Tailwind design tokens. Zorg dat de middelste kaart visueel opvalt (grotere schaal, border, of achtergrondkleur).
```

### A3. Facturatiecyclus Selector op Pricing Page

```
Voeg boven de pricing cards een toggle of tab-selector toe waarmee bezoekers de facturatiecyclus kunnen kiezen:
- "Per kwartaal"
- "Halfjaarlijks"
- "Jaarlijks"

Bij het switchen verandert de getoonde prijs per kaart. Gebruik een korting voor langere periodes, bijvoorbeeld:
- Per kwartaal: basisprijs × 3
- Halfjaarlijks: basisprijs × 6 (bijv. 5% korting)
- Jaarlijks: basisprijs × 12 (bijv. 10% korting)

Toon de korting visueel (bijv. "Bespaar 10%" badge bij jaarlijks).

Let op: de facturatiecyclus selector geldt alleen voor "Pro for Business" en "Enterprise for Business". "Standaard" is altijd maandelijks.
```

---

## B. Standaard Tier — Individueel Gebruik Flow

### B1. Betaalmuur / Signup Pagina voor Individueel Gebruik (met Stripe)

```
Maak een aparte pagina/route (bijv. /signup of /individueel) als betaalmuur voor het Standaard abonnement:

De pagina bevat:
- Titel: "Qrio Standaard — Word AI-vaardig"
- Korte beschrijving van wat je krijgt
- Feature lijst van het Standaard tier
- Prijs: EUR 3,50 per maand
- Signup formulier (email + wachtwoord) via Supabase Auth
- Na succesvolle signup: redirect naar Stripe Checkout (zie sectie G — Stripe Integratie)
- Eventueel: testimonials sectie (placeholder, zodat we die later kunnen vullen)
- Subtekst: "Geen creditcard nodig — start met een gratis proefperiode"
- De gratis proefperiode wordt afgehandeld via Stripe (trial_period_days in de Subscription)

Verwijder op deze pagina de "Offerte aanvragen" knop. Het moet een directe signup flow zijn.

Flow:
1. Gebruiker vult email + wachtwoord in → Supabase Auth account aangemaakt
2. Na signup → redirect naar Stripe Checkout Session (met trial period)
3. Na succesvolle Stripe checkout → redirect naar /dashboard
4. Bij cancel → redirect naar /signup met melding
```

### B2. "Binnenkort in de App Store" Tussentijdse Pagina

```
Maak een landingspagina (bijv. /app of /download) die communiceert dat Qrio binnenkort als app beschikbaar is:

Inhoud:
- Titel: "Binnenkort te vinden in jouw app-store"
- Korte tekst: "We werken hard aan de Qrio app voor iOS en Android. Laat je e-mailadres achter en wij laten je weten zodra de app beschikbaar is."
- Email input veld + "Houd mij op de hoogte" button
- Sla het emailadres op in Supabase (nieuwe tabel `app_waitlist` met kolommen: id, email, created_at)
- Optioneel: mockup afbeeldingen van de app op een telefoon
- Links naar de huidige web-app: "Je kunt Qrio nu al gebruiken via de browser → Probeer Qrio"
```

### B3. Upsell Prompt voor Individuele Gebruikers → Pro for Business

```
Voeg in de Standaard/individuele gebruikerservaring een subtiele upsell toe die medewerkers aanmoedigt om hun werkgever te laten upgraden naar Pro for Business:

Locaties:
- Op het dashboard: een banner/card "Tip: vraag je werkgever om Qrio Pro for Business — krijg toegang tot verdiepende modules en rapportages"
- Na afronding van een module: "Wil je verder leren? Met Pro for Business krijg je toegang tot alle verdiepende modules. Deel dit met je manager →"

De "Deel dit met je manager" link opent een mailto: link met een voorgeschreven e-mail:
- Onderwerp: "Qrio Pro for Business voor ons team"
- Body: "Hoi, ik gebruik Qrio om AI-vaardiger te worden. Met een Pro for Business licentie kan ons hele team profiteren. Bekijk de mogelijkheden op [link naar pricing pagina]. Groet, [naam]"
```

---

## C. Offerte Aanvragen Verwijderen / Aanpassen

### C1. Verwijder "Offerte Aanvragen" van Standaard Flow

```
Op de huidige website staat waarschijnlijk een "Offerte aanvragen" knop/link. Pas dit aan:

- Verwijder de "Offerte aanvragen" CTA bij het Standaard tier. Vervang door directe signup (zie B1).
- De "Offerte aanvragen" of "Neem contact op" flow blijft ALLEEN bestaan voor Pro for Business en Enterprise for Business, en verwijst naar het contactformulier (zie D1).
```

---

## D. Contactformulier & Lead Handling

### D1. Contactformulier voor Pro & Enterprise

```
Bouw een contactformulier (als pagina /contact of als modal) voor zakelijke interesse:

Velden:
- Bedrijfsnaam (verplicht)
- Contactpersoon (verplicht)
- E-mailadres (verplicht)
- Telefoonnummer (optioneel)
- "Waar heeft u interesse in?" — dropdown/radio met twee opties:
  - "Pro for Business"
  - "Enterprise for Business"
- "Gewenste facturatiecyclus" — dropdown met:
  - "Per kwartaal"
  - "Halfjaarlijks"
  - "Jaarlijks"
- "Geschat aantal licenties" (number input)
- Bericht / opmerkingen (textarea, optioneel)
- Checkbox: "Ik ga akkoord met de algemene voorwaarden"
- Submit button: "Verstuur aanvraag"

Na submit:
- Stuur de formulierdata als e-mail naar support@qrio.nl (gebruik Supabase Edge Function + een mail service zoals Resend of SendGrid)
- Sla de lead ook op in een Supabase tabel `leads` met kolommen: id, company_name, contact_name, email, phone, plan_interest, billing_cycle, estimated_licenses, message, created_at
- Toon een bevestigingspagina: "Bedankt voor uw interesse! We nemen binnen 2 werkdagen contact met u op."
```

### D2. E-mail Notificatie bij Nieuwe Lead

```
Maak een Supabase Edge Function die triggert wanneer een nieuw record wordt aangemaakt in de `leads` tabel.

De functie stuurt een e-mail naar bart@qrioapp.nl met:
- Onderwerp: "Nieuwe lead: [bedrijfsnaam] — [plan_interest]"
- Body: alle ingevulde velden overzichtelijk weergegeven
- Reply-to: het e-mailadres van de lead, zodat Bart direct kan antwoorden

Gebruik Resend.
```

---


## G. Stripe Integratie (Betalingen)

### G1. Stripe Setup — Producten & Prijzen Aanmaken

```
Stel de Stripe configuratie in voor het Standaard abonnement:

1. Maak in het Stripe Dashboard (of via de Stripe API) het volgende aan:
   - Product: "Qrio Standaard"
   - Price: EUR 3,50 per maand (recurring, monthly interval)
   - Currency: EUR
   - Trial period: 14 dagen (of het gewenste aantal dagen gratis proefperiode)

2. Sla de Stripe keys op als environment variables:
   - VITE_STRIPE_PUBLISHABLE_KEY=pk_live_xxx (voor de frontend)
   - STRIPE_SECRET_KEY=sk_live_xxx (alleen in Supabase Edge Functions, NOOIT in de frontend)
   - STRIPE_WEBHOOK_SECRET=whsec_xxx (voor webhook verificatie)
   - STRIPE_PRICE_ID_STANDAARD=price_xxx (het Price ID van het Standaard plan)

3. Installeer Stripe packages:
   - Frontend: npm install @stripe/stripe-js
   - Edge Functions: gebruik de Stripe Deno SDK (import Stripe from 'https://esm.sh/stripe')

Let op: gebruik ALTIJD test keys (pk_test_ / sk_test_) tijdens development. Schakel pas over naar live keys bij productie deployment.
```

### G2. Supabase Edge Function — Stripe Checkout Session Aanmaken

```
Maak een Supabase Edge Function genaamd "create-checkout-session":

Input (via POST request body):
- userId: string (Supabase auth user ID)
- email: string (e-mail van de gebruiker)
- priceId: string (Stripe Price ID, bijv. STRIPE_PRICE_ID_STANDAARD)

De functie doet het volgende:
1. Verifieer dat de gebruiker is ingelogd (check Supabase Auth JWT token in Authorization header)
2. Check of de gebruiker al een Stripe Customer ID heeft (zoek in Supabase `profiles` tabel, kolom `stripe_customer_id`)
3. Zo niet: maak een nieuwe Stripe Customer aan met de email, en sla het customer ID op in profiles
4. Maak een Stripe Checkout Session aan met:
   - mode: "subscription"
   - customer: het Stripe Customer ID
   - line_items: [{ price: priceId, quantity: 1 }]
   - subscription_data: { trial_period_days: 14 }
   - success_url: "https://qrioapp.nl/dashboard?session_id={CHECKOUT_SESSION_ID}"
   - cancel_url: "https://qrioapp.nl/signup?cancelled=true"
   - metadata: { supabase_user_id: userId }
5. Return de checkout session URL

Response: { url: "https://checkout.stripe.com/..." }
```

### G3. Frontend — Stripe Checkout Redirect

```
Maak een helper functie in de frontend (bijv. in lib/stripe.ts) die:

1. Stripe.js initialiseert met de publishable key:
   import { loadStripe } from '@stripe/stripe-js';
   const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

2. Een functie `redirectToCheckout` exporteert die:
   a. De Supabase Edge Function "create-checkout-session" aanroept
   b. De returned URL gebruikt om de gebruiker te redirecten naar Stripe Checkout
   c. Error handling toevoegt (toast notificatie bij fout)

3. Integreer deze functie in de signup flow (B1):
   - Na succesvolle Supabase Auth signup → roep redirectToCheckout aan
   - Toon een loading state ("Je wordt doorgestuurd naar de betaalpagina...")
```

### G4. Supabase Edge Function — Stripe Webhook Handler

```
Maak een Supabase Edge Function genaamd "stripe-webhook" die Stripe webhook events afhandelt:

1. Verifieer de webhook signature met STRIPE_WEBHOOK_SECRET
2. Handle de volgende events:

   a. "checkout.session.completed":
      - Haal de supabase_user_id op uit session.metadata
      - Update de `profiles` tabel:
        - stripe_subscription_id = session.subscription
        - subscription_status = "active" (of "trialing" als trial actief is)
        - subscription_plan = "standaard"
      - Log de event in een `subscription_events` tabel (optioneel, voor audit trail)

   b. "customer.subscription.updated":
      - Check subscription.status (active, past_due, canceled, trialing)
      - Update profiles.subscription_status met de nieuwe status
      - Als status = "past_due": stuur een waarschuwingsmail (optioneel)

   c. "customer.subscription.deleted":
      - Update profiles.subscription_status = "canceled"
      - Update profiles.subscription_plan = null
      - Gebruiker verliest toegang tot premium content (maar account blijft bestaan)

   d. "invoice.payment_failed":
      - Update profiles.subscription_status = "past_due"
      - Stuur optioneel een e-mail naar de gebruiker

3. Return altijd 200 OK aan Stripe (ook bij verwerkingsfouten, log die apart)

Let op: configureer deze webhook URL in het Stripe Dashboard onder Developers → Webhooks:
URL: https://[jouw-supabase-project].supabase.co/functions/v1/stripe-webhook
Events: checkout.session.completed, customer.subscription.updated, customer.subscription.deleted, invoice.payment_failed
```

### G5. Database Uitbreiding — Subscription Kolommen

```
Voeg de volgende kolommen toe aan de bestaande `profiles` tabel in Supabase:

ALTER TABLE profiles ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT UNIQUE;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT UNIQUE;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'none' 
  CHECK (subscription_status IN ('none', 'trialing', 'active', 'past_due', 'canceled', 'incomplete'));
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS subscription_plan TEXT DEFAULT NULL
  CHECK (subscription_plan IN (NULL, 'standaard', 'pro', 'enterprise'));
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS trial_ends_at TIMESTAMPTZ;

Optioneel — maak een audit tabel:
CREATE TABLE IF NOT EXISTS subscription_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  stripe_event_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

Voeg Row Level Security (RLS) policies toe:
- profiles: gebruikers mogen alleen hun eigen subscription_status lezen
- subscription_events: alleen super_admin mag deze tabel lezen
```

### G6. Access Control — Content Gating op Basis van Subscription

```
Implementeer access control zodat content beperkt wordt op basis van subscription status:

1. Maak een React hook: useSubscription()
   - Haalt subscription_status en subscription_plan op uit de profiles tabel (via bestaande auth context)
   - Returns: { status, plan, isActive, isTrial, canAccess(requiredPlan) }
   - isActive = status is "active" of "trialing"
   - canAccess('standaard') = true als plan standaard, pro, of enterprise
   - canAccess('pro') = true als plan pro of enterprise

2. Maak een wrapper component: <RequiresSubscription plan="standaard">
   - Toont children als gebruiker toegang heeft
   - Toont een upgrade prompt/paywall als gebruiker geen actief abonnement heeft
   - De upgrade prompt bevat: "Activeer je Qrio abonnement om toegang te krijgen" + CTA naar pricing

3. Pas bestaande pagina's aan:
   - Cursussen/modules: wrap met <RequiresSubscription plan="standaard" />
   - Verdiepende modules: wrap met <RequiresSubscription plan="pro" /> (voor toekomstig gebruik)
   - Dashboard en profiel: altijd toegankelijk (geen gating)

Let op: de echte beveiliging zit in Supabase RLS policies. De frontend gating is UX, niet security.
Voeg ook RLS policies toe op de modules/lessons tabellen die checken of de gebruiker een actief abonnement heeft.
```

### G7. Stripe Customer Portal — Abonnement Beheren

```
Stel de Stripe Customer Portal in zodat gebruikers hun abonnement zelf kunnen beheren:

1. Configureer de Customer Portal in Stripe Dashboard:
   - Sta toe: abonnement opzeggen, betaalmethode wijzigen, facturen bekijken
   - Branding: voeg Qrio logo en kleuren toe

2. Maak een Supabase Edge Function "create-portal-session":
   - Input: userId
   - Haal stripe_customer_id op uit profiles
   - Maak een Stripe Billing Portal Session aan:
     - customer: stripe_customer_id
     - return_url: "https://qrioapp.nl/profiel"
   - Return de portal URL

3. Voeg in de app een "Abonnement beheren" knop toe op de profielpagina:
   - Roept de Edge Function aan
   - Redirect de gebruiker naar het Stripe Customer Portal
   - Toon: huidig plan, status, volgende factuurdatum

4. Toon op de profielpagina ook:
   - Huidig abonnement: "Qrio Standaard"
   - Status: "Actief" / "Proefperiode (nog X dagen)" / "Verlopen"
   - Volgende betaling: datum + bedrag
   - "Abonnement beheren" button → Stripe Portal
```

---

## F. Overige Website Aanpassingen

### F1. Homepage CTA's Updaten

```
Pas de huidige Call-to-Action knoppen op de homepage aan zodat ze matchen met het nieuwe pricing model:

- Primaire CTA: "Bekijk onze plannen" → linkt naar de pricing pagina/sectie
- Secundaire CTA: "Start gratis" → linkt naar de Standaard signup pagina (B1)
- Verwijder of hernoem oude CTA's die naar "Offerte aanvragen" verwezen

Zorg dat de CTA's consistent zijn op alle plekken waar ze voorkomen (hero sectie, navbar, footer).
```

### F2. Navigatie Aanpassen

```
Voeg de volgende items toe aan de website navigatie (header/navbar):

- "Prijzen" → linkt naar pricing pagina/sectie
- "Contact" → linkt naar contactformulier (D1)

Verwijder of hernoem eventuele verouderde navigatie-items die niet meer relevant zijn (bijv. "Offerte aanvragen" als los menu-item).
```

---

## Volgorde van Implementatie (Aanbevolen)

Werk bij voorkeur in deze volgorde:

**Fase 1 — Fundament (data & Stripe)**
1. **A1** — Pricing data model opzetten
2. **G1** — Stripe setup: producten & prijzen aanmaken in Stripe Dashboard
3. **G5** — Database uitbreiding: subscription kolommen in profiles tabel

**Fase 2 — Pricing & Contactformulier (website)**
4. **A2** — Pricing page bouwen (drie kolommen)
5. **A3** — Facturatiecyclus selector
6. **D1** — Contactformulier bouwen (voor Pro & Enterprise leads)
7. **D2** — E-mail notificatie bij nieuwe leads

**Fase 3 — Stripe betaalflow (Standaard tier)**
8. **G2** — Edge Function: Stripe Checkout Session aanmaken
9. **G3** — Frontend: Stripe Checkout redirect
10. **G4** — Edge Function: Stripe Webhook handler
11. **B1** — Betaalmuur / Signup pagina met Stripe integratie

**Fase 4 — Access control & portaal**
12. **G6** — Access control: content gating op basis van subscription
13. **G7** — Stripe Customer Portal: abonnement beheren

**Fase 5 — Extra pagina's & upsell**
14. **B2** — "Binnenkort in app-store" pagina
15. **B3** — Upsell prompts voor individuele gebruikers → Pro for Business

**Fase 6 — Opschonen & afronding**
16. **C1** — "Offerte aanvragen" verwijderen/aanpassen
17. **F1** — Homepage CTA's updaten
18. **F2** — Navigatie aanpassen
19. **E1** — Support e-mail configureren (buiten code tool)
20. **E2** — Contactgegevens in footer & klantcommunicatie
