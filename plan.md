Plan: Verwijder trial, eerste module gratis + freemium paywall
TL;DR: De 14-daagse trial verdwijnt volledig. Signup wordt een gratis account (zonder Stripe). De eerste module onder "Algemeen" is voor iedereen toegankelijk. Prompts en Knowledge worden ook vrij. Bij module 2+ verschijnt een paywall die naar Stripe verwijst (zonder trial). Alle trial-UI, i18n-teksten en website-copy worden aangepast.

Fase 1: Signup Flow — Gratis account zonder Stripe
Doel: Registreren maakt een gratis account aan, geen Stripe redirect.

SignupOptions.tsx — Signup form aanpassen:

Verwijder redirectToCheckout() call na succesvolle signup (regel ~52-53)
Na signup → redirect naar Dashboard (/) in plaats van Stripe checkout
Verwijder het blauwe infoblock "14 dagen gratis proberen / Daarna €3,50/maand" (regel 122-125)
Verander subtitle "Start je gratis proefperiode van 14 dagen" → iets als "Maak een gratis account aan"
Verwijder STANDAARD_PRICE_ID import en redirectToCheckout import als niet meer nodig
CTA "Start gratis" kan blijven maar context wijzigt
create-checkout-session/index.ts — Trial verwijderen:

Verwijder trial_period_days: 14 uit subscription_data (regel 105-107)
Deze edge function wordt nu alleen nog aangeroepen vanuit de paywall (niet bij signup)
Fase 2: Module Access — Eerste module gratis, rest achter paywall
Doel: De eerste module in de "Algemeen" categorie is speelbaar zonder abonnement. Alle andere modules vereisen een betaling.

useSubscription.ts — Geen wijzigingen nodig aan de hook zelf. De logica verschuift naar module-level gating.

api.ts — fetchModules() aanpassen:

Voeg een is_free property toe aan de returned ModuleWithStats objecten
De eerste module (laagste order_index) in de categorie "Algemeen" krijgt is_free: true
Detectie via bestaande logica: category.title.toLowerCase() === 'algemeen' of category.slug === 'algemeen'
Haal de category data op in fetchModules() om de "Algemeen" categorie te identificeren
schema.ts — ModuleWithStats type uitbreiden:

Voeg is_free?: boolean toe aan de interface
App.tsx — Route gating aanpassen:

/quiz/:moduleId route: verwijder de <RequiresSubscription> wrapper. De gating verplaatst naar de QuizPlayer component zelf (module-level check)
/prompts route: verwijder <RequiresSubscription> wrapper (wordt gratis)
/knowledge en /knowledge/:slug routes: verwijder <RequiresSubscription> wrapper (worden gratis)
/course route: verwijder <RequiresSubscription> wrapper — course content voor de eerste module moet toegankelijk zijn; gating wordt per-module in Course component
QuizPlayer — Module-level paywall toevoegen:

Lees moduleId uit URL params
Check of deze module is_free is via de modules data
Als niet is_free en user heeft geen actief abonnement → toon <RequiresSubscription> fallback
Als is_free → altijd doorlaten (depends on stap 4)
Course.tsx — Per-module gating toevoegen:

Lessons van de gratis module zijn toegankelijk
Lessons van betaalde modules tonen paywall als user geen abonnement heeft
(depends on stap 4)
Fase 3: Backend — Server-side gating aanpassen
Doel: submit_answer moet de eerste gratis module ook zonder abonnement doorlaten.

add_subscription_gating.sql — has_active_subscription aanpassen OF nieuwe SQL functie:

Nieuwe functie is_free_module(p_module_id uuid) die checked of de module de eerste in "Algemeen" categorie is
Of: pas submit_answer aan met een extra parameter/check: als het question behoort bij de gratis module, sla subscription check over
Simpelste aanpak: voeg is_free BOOLEAN DEFAULT false kolom toe aan modules tabel, en check dat in submit_answer
Database migratie — Nieuwe kolom:

ALTER TABLE modules ADD COLUMN IF NOT EXISTS is_free BOOLEAN DEFAULT false;
UPDATE modules SET is_free = true WHERE ... (eerste module in Algemeen)
Pas submit_answer aan: skip subscription check als module is_free = true
Fase 4: Trial UI verwijderen
Doel: Alle visuele trial-referenties verwijderen uit de Qrio App.

UpsellBanner.tsx — Trial countdown verwijderen:

Verwijder het isTrial && trialDaysLeft <= 7 blok (regel 14-40)
Behoud het Standaard → Pro upsell blok (regel 44-64)
Voeg eventueel een nieuw blok toe voor gebruikers zonder abonnement: "Upgrade om verder te leren"
ProfileModal.tsx — Trial badge verwijderen:

Verwijder isTrial && trialDaysLeft weergave (regel 64-67)
status_trialing badge/kleur kan blijven voor bestaande trialing users (backwards compatible), maar wordt irrelevant voor nieuwe users
RequiresSubscription.tsx — CTA tekst aanpassen:

Wijzig de "Start gratis proefperiode" button naar "Abonnement afsluiten" of "Kies een plan"
Link naar Stripe checkout of naar pricing pagina op de website
Pas subscription.no_subscription_description i18n key aan
Fase 5: i18n — Alle trial-teksten updaten
nl.json — Subscription namespace:

no_subscription_description: "Start je gratis proefperiode..." → "Neem een abonnement om toegang te krijgen tot alle content."
start_trial: "Start gratis proefperiode" → "Bekijk abonnementen" of "Abonnement afsluiten"
status_trialing: kan blijven (backwards compatible)
trial_days_left: kan blijven (backwards compatible) maar wordt niet meer getoond
try_free_subtitle: "Start direct met leren" → aanpassen naar "Eerste module gratis"
en.json — Zelfde wijzigingen als NL:

no_subscription_description: "Start your free trial..." → "Subscribe to get access to all content."
start_trial: → "View plans" of "Subscribe"
try_free_subtitle: → "First module free"
Fase 6: Qrio Website — Trial copy verwijderen
CTABanner.tsx — Default ctaText:

"Start gratis proefperiode" → "Start gratis" of "Maak een gratis account"
About.tsx (regel ~251):

"Start gratis proefperiode" → "Start gratis"
Product.tsx (regel ~565):

"Start vandaag nog met een gratis proefperiode of vraag een demo aan." → "Start vandaag nog gratis of vraag een demo aan."
LandingPage.tsx (regel ~45, JSON-LD schema):

"description": "Gratis proefperiode" → "description": "Eerste module gratis" of "description": "Gratis starten"
pricing.ts — Standaard plan:

CTA "Start gratis" kan blijven
Eventueel features aanpassen: "Eerste module gratis" toevoegen
Fase 7: Dashboard — Paywall integratie in module cards
ModuleCard.tsx — Locked state verbeteren:

Als module locked is door ontbrekend abonnement (niet door waterfall): toon een lock-met-kroon icoon of paywall-indicator
Klik opent een paywall modal/redirect in plaats van niets doen
Dashboard.tsx — Module gating in dashboard:

Als user geen abonnement heeft en op module 2+ klikt → toon paywall
Quiz en Course links voor niet-gratis modules moeten paywall tonen
De "next module" sectie bovenaan moet ook paywall tonen als de volgende module niet gratis is
Relevant files
Qrio App (core changes):

src/pages/SignupOptions.tsx — verwijder Stripe redirect bij signup
src/hooks/useSubscription.ts — minimale wijzigingen
src/lib/api.ts — fetchModules() + is_free flag toevoegen
src/types/schema.ts — ModuleWithStats type uitbreiden
src/App.tsx — RequiresSubscription wrappers verwijderen van routes
src/components/subscription/RequiresSubscription.tsx — tekst/CTA aanpassen
src/components/dashboard/UpsellBanner.tsx — trial countdown verwijderen
src/components/dashboard/ModuleCard.tsx — paywall indicator
src/components/profile/ProfileModal.tsx — trial badge verwijderen
src/pages/Dashboard.tsx — per-module paywall logica
src/pages/Course.tsx — per-module course gating
src/locales/nl.json — trial teksten aanpassen
src/locales/en.json — trial teksten aanpassen
Backend:

supabase/functions/create-checkout-session/index.ts — trial_period_days verwijderen
scripts/add_subscription_gating.sql — submit_answer aanpassen voor gratis module bypass
Qrio Website:

src/components/CTABanner.tsx — trial copy
src/pages/About.tsx — trial copy
src/pages/Product.tsx — trial copy
src/LandingPage.tsx — JSON-LD schema
src/data/pricing.ts — pricing features
Verification
Type check: npm run build in beide projecten — geen TS errors
Lint: npm run lint — geen warnings
Signup flow test: Registreer een nieuw account → komt op Dashboard zonder Stripe → eerste module is speelbaar
Quiz access test: Start quiz van eerste "Algemeen" module → werkt zonder abonnement → submit_answer accepteert antwoorden
Paywall test: Klik op module 2 → paywall verschijnt → redirect naar Stripe checkout (zonder trial)
Course test: Course pagina → eerste module lessons zijn beschikbaar → tweede module lessons tonen paywall
Prompts/Knowledge test: /prompts en /knowledge laden zonder abonnement
Bestaande abonnees: Gebruikers met actieve subscriptie behouden volledige toegang
Website check: Geen "proefperiode" of "14 dagen" teksten meer zichtbaar op qrioapp.nl
Decisions
Gratis account model: Signup maakt een account zonder Stripe. Paywall redirects naar Stripe checkout (zonder trial) wanneer nodig
Gratis scope: Eerste module quiz + course + prompts + knowledge. Modules 2+ achter paywall
Database: is_free boolean kolom op modules tabel, beheerd via admin (nu handmatig gezet op eerste Algemeen module)
Backwards compatible: trialing status en trial_ends_at kolom blijven bestaan voor bestaande users — geen destructive migration
Scope exclusion: Admin panel wijzigingen (optioneel is_free toggle in ModuleEditor) valt buiten scope, maar de kolom is er klaar voor