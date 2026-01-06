export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type BlogAuthor = {
  name: string;
  role?: string;
};

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO string
  readingTimeMinutes: number;
  tags: string[];
  category?: string;
  author: BlogAuthor;
  cover: {
    gradientClassName: string;
    eyebrow?: string;
    image?: string; // public path (e.g. /blogs/placeholder.svg)
    imageAlt?: string;
  };
  sections: BlogSection[];
};

export const BLOG_CATEGORIES = {
  EU_AI_ACT_COMPLIANCE: 'EU AI Act & Compliance',
  SECURITY_RISK: 'Security & Risk Management',
  PRODUCTIVITY_INNOVATION: 'Productiviteit & Innovatie',
} as const;

export const BLOG_CATEGORY_LIST = [
  BLOG_CATEGORIES.EU_AI_ACT_COMPLIANCE,
  BLOG_CATEGORIES.SECURITY_RISK,
  BLOG_CATEGORIES.PRODUCTIVITY_INNOVATION,
] as const;

export const blogs: Blog[] = [
  {
    slug: 'roi-ai-vaardige-medewerker',
    title: 'De ROI van een AI-vaardige medewerker',
    excerpt:
      '30 minuten per dag tijdwinst per medewerker klinkt klein—tot je het doorrekent. Zo bouw je een businesscase voor AI-vaardigheden (en hoe je de winst ook écht realiseert).',
    publishedAt: '2025-11-12T09:30:00.000Z',
    readingTimeMinutes: 9,
    tags: ['ROI', 'Productiviteit', 'AI-vaardigheden', 'Training', 'Businesscase'],
    category: BLOG_CATEGORIES.PRODUCTIVITY_INNOVATION,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & productiviteit',
    },
    cover: {
      eyebrow: 'Productiviteit',
      gradientClassName: 'bg-gradient-to-br from-primary/20 via-emerald-200/30 to-blue-200/30',
      image: '/blogs/productivity.jpg',
      imageAlt: 'Placeholder cover image voor de ROI blog',
    },
    sections: [
      {
        paragraphs: [
          'Stel je voor: je team wint 30 minuten per dag terug. Dat is 2,5 uur per week. 130 uur per jaar. Per persoon.',
          'Kleine tijdwinst wordt al snel grote impact—zeker als je het structureel en veilig organiseert (tools + training + afspraken).',
        ],
        note: 'Let op: de grootste winst zit niet alleen in snelheid, maar in betere keuzes, minder fouten en meer focus.',
      },
      {
        heading: 'De getallen (conservatief en realistisch)',
        paragraphs: [
          'Onderzoek van de St. Louis Federal Reserve laat zien dat werknemers die AI gebruiken gemiddeld 5,4% van hun werkuren besparen. Voor een 40-urige werkweek is dat ongeveer 2,16 uur per week (~112 uur per jaar).',
          'Sommige onderzoeken rapporteren hogere tijdswinst op specifieke taken. Voor deze businesscase houden we het bewust realistisch: gemiddeld 30 minuten per dag, bij goed getrainde medewerkers.',
        ],
        bullets: [
          '40 uur/week → 30 min/dag = 2,5 uur/week',
          '2,5 uur/week × 52 = 130 uur/jaar per medewerker',
          'In een team van 100 medewerkers: 13.000 uur/jaar',
        ],
      },
      {
        heading: 'Wat betekent 30 minuten per dag voor 100 medewerkers?',
        paragraphs: [
          '13.000 uur per jaar is geen “leuke extra”. Het is schaalbaar voordeel.',
        ],
        bullets: [
          '≈ 6,5 FTE aan tijd (op basis van 2.000 uur/jaar)',
          '≈ €325.000 aan loonkosten (bij €25/uur)',
          'Meer output, betere kwaliteit, of meer innovatie—jij kiest waar je de tijd inzet',
        ],
      },
      {
        heading: 'Waar komt die tijdsbesparing vandaan?',
        paragraphs: [
          'De meeste tijdwinst komt uit herhaalwerk: schrijven, samenvatten, analyses voorbereiden en “first drafts” maken.',
        ],
        bullets: [
          'Schrijven: e-mails, rapporten, presentaties, content (vaak 20–30% sneller)',
          'Onderzoek: samenvatten, vergelijken, alternatieven verkennen (vaak 30–40% sneller)',
          'Codering: boilerplate, debugging, refactoring, tests (vaak 40–50% sneller)',
          'Analyse: trendanalyse, rapportage, eerste inzichten (vaak 25–35% sneller)',
        ],
        note: 'Belangrijk: output controleren blijft nodig. AI versnelt het werk, maar vervangt je kwaliteitscheck niet.',
      },
      {
        heading: 'De ROI: zo reken je het uit',
        paragraphs: [
          'Voorbeeld voor 100 medewerkers:',
        ],
        bullets: [
          'Investering: 100 × €20/maand (ChatGPT Plus) = €24.000/jaar',
          'Training: €5.000 eenmalig',
          'Monitoring tools: €3.000/jaar',
          'Totaal (jaar 1): €32.000',
          'Baten: 13.000 uur × €25/uur = €325.000/jaar',
          'Netto: €293.000 voordeel → ~9,16× ROI',
        ],
        note: 'Dit is een rekenvoorbeeld. Jouw ROI hangt af van rolmix, processen, toolkeuze en adoptie (training + afspraken).',
      },
      {
        heading: 'Maar wacht, er is meer (de indirecte winst)',
        bullets: [
          'Kwaliteitsverbetering: minder fouten en minder herwerk',
          'Innovatie: ruimte om te experimenteren en verbeteren',
          'Tevredenheid: medewerkers ervaren meer controle en minder “druktewerk”',
        ],
      },
      {
        heading: 'Praktisch voorbeeld: HR wint 1 uur en 15 minuten',
        paragraphs: [
          'Een HR-medewerker moet 10 sollicitatiebrieven beantwoorden. Normaal duurt dit 2 uur. Met een goede template + AI: 45 minuten.',
          'De echte waarde zit in wat er daarna gebeurt: betere werving, meer gesprekken met hiring managers, en betere onboarding.',
        ],
      },
      {
        heading: 'Hoe zorg je dat je team deze besparing ook écht realiseert?',
        bullets: [
          'Training: promptvaardigheden + controle-stappen + do’s/don’ts per rol',
          'Goedgekeurde tools: kies wat je toestaat en borg privacy/security',
          'Cultuur: deel best practices, maak successen zichtbaar',
          'Monitoring: meet tijdwinst en kwaliteit, stuur bij waar nodig',
        ],
        note: 'Zonder duidelijke afspraken (wat wel/niet) ontstaat Shadow AI—en dan verlies je controle over risico’s én opbrengst.',
      },
      {
        heading: 'Waar gaat de besparing heen?',
        paragraphs: [
          'De beste organisaties combineren drie doelen: meer output, betere kwaliteit en meer innovatie. En soms: betere balans.',
        ],
        bullets: [
          'Meer werk doen: sneller leveren en meer impact',
          'Betere kwaliteit: minder fouten, minder herstelwerk',
          'Innovatie: nieuwe ideeën, experimenten, procesverbetering',
          'Balans: minder stress en meer focus',
        ],
      },
      {
        heading: 'Checklist: ben je klaar om deze ROI te realiseren?',
        bullets: [
          'Heb je AI-tools gekozen (en goedgekeurd)?',
          'Train je medewerkers op effectief én veilig gebruik?',
          'Heb je een duidelijk AI-beleid (do’s/don’ts + escalatie)?',
          'Monitor je tijdwinst en kwaliteit?',
          'Moedig je het delen van best practices aan?',
        ],
      },
      {
        heading: 'Conclusie: 30 minuten per dag is realistisch—met de juiste aanpak',
        paragraphs: [
          'De vraag is niet meer of je AI kunt gebruiken, maar hoe je het veilig, consistent en meetbaar inzet. Dan komt de ROI vanzelf bovendrijven.',
          'Wil je dit versnellen? Qrio helpt met training, toetsing en rapportage—zodat adoptie en compliance samen optrekken.',
        ],
      },
    ],
  },

  {
    slug: 'waarom-de-beste-medewerkers-ai-beleid-willen',
    title: 'Waarom de beste medewerkers een werkgever met een AI-beleid willen',
    excerpt:
      'AI is een talent-magneet: medewerkers verwachten moderne tools, training en duidelijke spelregels. Zo voorkom je vertrek én word je aantrekkelijker als werkgever.',
    publishedAt: '2025-11-15T14:20:00.000Z',
    readingTimeMinutes: 8,
    tags: ['EU AI Act', 'AI-beleid', 'HR', 'Talent', 'Adoptie'],
    category: BLOG_CATEGORIES.PRODUCTIVITY_INNOVATION,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & compliance',
    },
    cover: {
      eyebrow: 'Productiviteit',
      gradientClassName: 'bg-gradient-to-br from-blue-200/30 via-primary/20 to-purple-200/30',
      image: '/blogs/talent.jpg',
      imageAlt: 'Placeholder cover image voor de Talent Oorlog blog',
    },
    sections: [
      {
        paragraphs: [
          'De beste talent wil niet meer werken voor organisaties zonder AI. Dit is geen hype: medewerkers verwachten moderne tools, ruimte om te leren, en duidelijke kaders.',
          'Als je dit mist, verlies je je beste mensen—of je trekt ze simpelweg niet aan.',
        ],
      },
      {
        heading: 'De realiteit: talent wil AI',
        bullets: [
          'Toptalent verwacht moderne tools (inclusief AI)',
          'Medewerkers willen niet “achterhaald” voelen',
          'Medewerkers willen leren en groeien',
          'Medewerkers willen productief zijn (en minder tijd verliezen aan herhaalwerk)',
        ],
        note: 'AI gaat hier niet alleen over tooling—maar over leiderschap: duidelijke keuzes, training en beleid.',
      },
      {
        heading: 'De statistieken (waarom dit nú speelt)',
        paragraphs: [
          'In de praktijk zien we dat AI-vaardigheden snel een hygiënefactor worden. Teams die AI mogen en kunnen gebruiken, ervaren meer autonomie en groei.',
        ],
        bullets: [
          '66% van managers zegt dat medewerkers AI-tools verwachten',
          '52% van werknemers gebruikt AI om sneller te werken',
          'Organisaties met AI-training zien vaak lager verloop (bijv. ~20% lager in sommige onderzoeken)',
        ],
        note: 'Exacte percentages verschillen per sector en onderzoek. De trend is consistent: AI-vaardigheid ↔ tevredenheid ↔ retentie.',
      },
      {
        heading: 'Waarom talent AI wil (4 redenen)',
        bullets: [
          'Carrièregroei: AI-skills zijn toekomstbestendig; wie leert groeit sneller',
          'Productiviteit: meer bereiken, minder “druktewerk”',
          'Interessanter werk: AI neemt repetitief werk over, mens focust op keuzes en kwaliteit',
          'Concurrentievoordeel: professionals willen onderdeel zijn van een vooruitstrevende organisatie',
        ],
      },
      {
        heading: 'De kosten van niet-doen',
        paragraphs: [
          'Niet investeren lijkt goedkoper—tot je het doorrekent. Vervanging van een goede medewerker kost vaak 50–200% van het jaarsalaris (werving, inwerken, productiviteitsverlies).',
        ],
        bullets: [
          'Hoger verloop → hogere vervangingskosten',
          'Lagere productiviteit → meer doorlooptijd en frustratie',
          'Verlies van kennis en context → kwaliteitsverlies',
        ],
      },
      {
        heading: 'Hoe je talent aantrekt met AI (zonder chaos)',
        bullets: [
          'Maak het duidelijk in vacatures: tools + training + beleid',
          'Zorg voor training: basis voor iedereen, verdieping per rol',
          'Zorg voor goedgekeurde tools: privacy/security op orde',
          'Bouw cultuur: deel best practices, beloon initiatief',
        ],
        note: 'Zonder AI-beleid ontstaat Shadow AI. Dat is slecht voor risico’s én slecht voor vertrouwen in de organisatie.',
      },
      {
        heading: 'Checklist: ben je aantrekkelijk voor talent?',
        bullets: [
          'Bieden we AI-tools aan (met duidelijke kaders)?',
          'Trainen we medewerkers op effectief én veilig gebruik?',
          'Hebben we een innovatiecultuur (experimenteren mag)?',
          'Investeren we zichtbaar in groei en ontwikkeling?',
          'Hebben we een modern werkplekverhaal (tools, flexibiliteit)?',
        ],
      },
      {
        heading: 'Conclusie: AI is een talent-magneet',
        paragraphs: [
          'AI is niet langer optioneel als je competitief wil blijven op de arbeidsmarkt. De vraag is: hoe faciliteer je het zó dat mensen sneller, beter en veiliger werken?',
          'Qrio helpt met AI-training, toetsing en aantoonbaarheid—zodat je organisatie aantrekkelijker wordt én risico’s onder controle houdt.',
        ],
      },
    ],
  },

  {
    slug: 'prompt-engineering-voor-hr-5-templates',
    title: 'Prompt Engineering voor HR: 5 templates',
    excerpt:
      'Met goede prompts bespaart HR tijd én verhoogt u de kwaliteit van werving, onboarding en gesprekken. Hieronder vindt u 5 kant-en-klare templates (veilig toepasbaar) die u direct kunt gebruiken.',
    publishedAt: '2025-11-20T10:15:00.000Z',
    readingTimeMinutes: 8,
    tags: ['Prompt engineering', 'HR', 'Templates', 'AI-training', 'Productiviteit'],
    category: BLOG_CATEGORIES.PRODUCTIVITY_INNOVATION,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & productiviteit',
    },
    cover: {
      eyebrow: 'Productiviteit',
      gradientClassName: 'bg-gradient-to-br from-emerald-200/30 via-primary/15 to-blue-200/25',
      image: '/blogs/hr-prompt.jpg',
      imageAlt: 'Placeholder cover image voor Prompt Engineering voor HR',
    },
    sections: [
      {
        paragraphs: [
          'HR-teams gebruiken AI steeds vaker om sneller te werken: cv’s screenen, vacatureteksten aanscherpen, interviewvragen maken en onboarding beter structureren.',
          'Het verschil tussen “AI die wat tekst uitspuugt” en echte tijdwinst zit in prompt engineering: heldere instructies, duidelijke output-vormen en goede controle-stappen.',
        ],
        note: 'Privacy-tip: voer geen persoonsgegevens in (anonimiseer cv’s en casussen) en gebruik alleen goedgekeurde tools binnen je organisatiebeleid.',
      },
      {
        heading: 'Template 1 — CV-screening (functiegericht)',
        bullets: [
          'Doel: snel en consistent beoordelen op functie-eisen, plus gerichte interviewvragen krijgen.',
          'Prompt: “Je bent een ervaren HR-analist. Hier zijn (geanonimiseerde) functie-eisen: [plak functie-eisen]. Hier is een (geanonimiseerde) cv-samenvatting: [plak cv-samenvatting]. Beoordeel de match en geef: (1) score 0–100, (2) top 5 sterke punten t.o.v. eisen, (3) top 5 hiaten/risico’s, (4) 5 gerichte interviewvragen om hiaten te toetsen. Antwoord in een tabel.”',
        ],
      },
      {
        heading: 'Template 2 — Vacaturetekst verbeteren (inclusiever en scherper)',
        bullets: [
          'Doel: vacatureteksten aantrekkelijker maken zonder vage buzzwords.',
          'Prompt: “Je bent een recruitment copywriter. Herschrijf deze vacaturetekst: [plak tekst]. Doelen: (1) concreter over taken en succescriteria, (2) inclusieve taal, (3) minder jargon, (4) duidelijke ‘must haves’ vs ‘nice to haves’. Lever: (a) verbeterde versie, (b) lijst met 10 suggesties waarom dit beter is, (c) 5 alternatieve functietitels.”',
        ],
      },
      {
        heading: 'Template 3 — Interviewvragen op basis van competenties',
        bullets: [
          'Doel: betere gesprekken voeren met gedragsgerichte vragen en een scorecard.',
          'Prompt: “Je bent een HR-business partner. Voor deze rol: [rol]. Competenties: [lijst]. Maak 12 interviewvragen volgens STAR, verdeeld over de competenties. Geef per vraag: wat een sterk vs zwak antwoord is. Maak ook een scorecard (1–5) met beoordelingscriteria.”',
        ],
      },
      {
        heading: 'Template 4 — Onboarding plan (30/60/90 dagen)',
        bullets: [
          'Doel: consistente onboarding met meetbare doelen.',
          'Prompt: “Je bent een onboarding coach. Maak een 30/60/90-dagen plan voor: [functie]. Context: [team/doelen]. Geef per periode: (1) doelen, (2) belangrijkste taken, (3) stakeholders om te spreken, (4) deliverables, (5) succesmetrics. Houd het praktisch en concreet.”',
        ],
      },
      {
        heading: 'Template 5 — Performance review voorbereiding',
        bullets: [
          'Doel: reviews objectiever en concreter maken.',
          'Prompt: “Je bent een HR-adviseur. Gebruik deze input: doelen: [doelen], resultaten: [resultaten], feedback: [feedback], uitdagingen: [uitdagingen]. Maak een concept-review met: (1) samenvatting, (2) sterke punten met voorbeelden, (3) verbeterpunten met voorbeelden, (4) ontwikkelplan (3 acties), (5) voorstel voor doelen voor de komende periode. Schrijf in neutrale, feitelijke toon.”',
        ],
      },
      {
        heading: 'Tips: zo haalt HR het meeste uit AI (zonder risico’s)',
        bullets: [
          'Anonimiseer input: geen namen, adressen, geboortedata of unieke identifiers.',
          'Vraag om structuur: tabellen, scorecards, en expliciete criteria.',
          'Borg bias-checks: laat AI expliciet mogelijke vooroordelen benoemen.',
          'Gebruik AI als “eerste versie”, niet als eindbeslisser.',
          'Leg vast wat wel/niet mag in je AI-beleid (Shadow AI voorkomen).',
        ],
      },
      {
        heading: 'Conclusie: maak AI-kwaliteit herhaalbaar',
        paragraphs: [
          'Met vaste templates wordt AI-gebruik voorspelbaar: sneller, consistenter en beter te controleren.',
          'Wil je dit organisatiebreed borgen? Qrio helpt met training, toetsing en aantoonbaarheid—zodat productiviteit en compliance samen optrekken.',
        ],
      },
    ],
  },

  {
    slug: 'waarom-uw-team-wel-zin-heeft-in-ai-training-via-app',
    title: 'Waarom uw team wél zin heeft in een AI-training via een app',
    excerpt:
      '“We moeten iets met AI-training” is makkelijk gezegd. De uitdaging is motivatie en herhaling. Met gamification maak je leren leuk, meetbaar en blijvend—zonder dat het voelt als een verplichte cursus.',
    publishedAt: '2025-11-25T16:45:00.000Z',
    readingTimeMinutes: 7,
    tags: ['Gamification', 'Leren', 'AI-training', 'Adoptie', 'Microlearning'],
    category: BLOG_CATEGORIES.PRODUCTIVITY_INNOVATION,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & productiviteit',
    },
    cover: {
      eyebrow: 'Productiviteit',
      gradientClassName: 'bg-gradient-to-br from-amber-200/30 via-primary/15 to-emerald-200/25',
      image: '/blogs/gamification.jpg',
      imageAlt: 'Placeholder cover image voor Gamification in leren',
    },
    sections: [
      {
        paragraphs: [
          'Veel organisaties beginnen met AI-training vanuit urgentie: ChatGPT wordt gebruikt, risico’s nemen toe, en productiviteit kan omhoog. Maar klassikale sessies of lange e-learnings leveren zelden duurzame gedragsverandering.',
          'De kern: mensen leren niet door één keer te luisteren, maar door herhaling, feedback en kleine successen.',
        ],
      },
      {
        heading: 'Waarom klassieke trainingen vaak niet werken',
        bullets: [
          'Te veel informatie in één keer (overload).',
          'Weinig herhaling → kennis zakt weg.',
          'Geen feedback of toetsing → niemand weet of het “landde”.',
          'Geen koppeling aan de praktijk → motivatie daalt.',
        ],
      },
      {
        heading: 'Wat gamification wél oplost',
        paragraphs: [
          'Gamification draait niet om “spelen”, maar om gedragspsychologie: kleine stappen, beloning, voortgang en competitie op een gezonde manier.',
        ],
        bullets: [
          'Microlearning: korte lessen die passen tussen meetings door.',
          'Progressie: levels, badges en streaks maken groei zichtbaar.',
          'Sociale prikkel: teams vergelijken voortgang en delen tips.',
          'Directe feedback: korte quizzes toetsen begrip en vergroten retentie.',
        ],
      },
      {
        heading: 'Zo ziet gamified AI-leren eruit in de praktijk',
        bullets: [
          'Dagelijkse “AI bite” van 3–5 minuten (1 concept + 1 oefening).',
          'Wekelijkse challenge per rol (HR, sales, finance, legal).',
          'Toetsmomenten: korte quiz + praktijkopdracht (met beoordelingscriteria).',
          'Dashboard voor managers: voortgang, scores en risico-indicatoren.',
        ],
      },
      {
        heading: 'Waarom een app vaak beter werkt dan een cursus',
        bullets: [
          'Altijd beschikbaar, in het ritme van het werk.',
          'Herhaling is ingebouwd (spaced repetition).',
          'Meetbaar: je ziet wat mensen echt kunnen, niet alleen dat ze “aanwezig” waren.',
        ],
      },
      {
        heading: 'Conclusie: motivatie is een systeem, geen toeval',
        paragraphs: [
          'Als je AI-vaardigheden organisatiebreed wil verhogen, heb je een leermechanisme nodig dat herhaalt, toetst en motiveert.',
          'Qrio combineert microlearning, toetsing en rapportage—zodat AI-vaardigheid niet eenmalig is, maar blijvend.',
        ],
      },
    ],
  },

  {
    slug: 'hoe-teams-getraind-in-ai-de-concurrentie-voorblijven',
    title: 'Hoe teams, getraind in AI, de concurrentie voorblijven',
    excerpt:
      'AI-tools zijn voor iedereen beschikbaar. Het echte verschil zit in vaardigheden: teams die goed getraind zijn werken sneller, maken minder fouten en vinden eerder kansen. Zo bouw je structureel voordeel.',
    publishedAt: '2025-11-28T11:00:00.000Z',
    readingTimeMinutes: 7,
    tags: ['Concurrentievoordeel', 'AI-vaardigheden', 'Training', 'Adoptie', 'Productiviteit'],
    category: BLOG_CATEGORIES.PRODUCTIVITY_INNOVATION,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & productiviteit',
    },
    cover: {
      eyebrow: 'Productiviteit',
      gradientClassName: 'bg-gradient-to-br from-blue-200/30 via-primary/15 to-emerald-200/25',
      image: '/blogs/competitor.jpg',
      imageAlt: 'Placeholder cover image voor Concurrentievoordeel door AI',
    },
    sections: [
      {
        paragraphs: [
          'AI is geen “toolvoordeel” meer. Iedereen kan dezelfde modellen en apps kopen. Wat wél schaars is: mensen die weten hoe ze AI slim, veilig en consistent inzetten.',
          'Organisaties met AI-vaardige teams leveren sneller, communiceren beter, en sturen op kwaliteit. Dat is concurrentievoordeel dat je niet zomaar kopieert.',
        ],
      },
      {
        heading: 'Waarom vaardigheden belangrijker zijn dan tooling',
        bullets: [
          'Zonder skill blijft AI “gokwerk”: wisselende output, weinig vertrouwen.',
          'Met skill wordt AI een proces: templates, controle-stappen, en herhaalbaarheid.',
          'Vaardigheden verminderen risico’s (privacy, security, compliance).',
        ],
      },
      {
        heading: 'Wat getrainde teams anders doen',
        bullets: [
          'Ze werken met duidelijke prompts en formats (tabellen, checklists, rubrics).',
          'Ze controleren systematisch (bronverificatie, tegenvoorbeelden, second-pass).',
          'Ze delen best practices en bouwen interne “prompt libraries”.',
          'Ze weten wat niet mag (beleid) en wat wel (goedgekeurde tools).',
        ],
      },
      {
        heading: 'De opbrengst (in simpele taal)',
        bullets: [
          'Sneller: kortere doorlooptijden en minder herhaalwerk.',
          'Beter: hogere kwaliteit door betere eerste versies en goede checks.',
          'Meer focus: mensen besteden tijd aan keuzes, niet aan copy/paste.',
          'Veiliger: minder Shadow AI en minder datalek-risico.',
        ],
      },
      {
        heading: 'Zo bouw je dit voordeel op (zonder chaos)',
        bullets: [
          'Maak AI-vaardigheid onderdeel van onboarding en jaarlijkse ontwikkeling.',
          'Train basisvaardigheden voor iedereen, verdieping per rol.',
          'Introduceer templates en kwaliteitschecks per proces (HR, sales, legal).',
          'Meet voortgang: toetsing + dashboard i.p.v. alleen “training gevolgd”.',
        ],
      },
      {
        heading: 'Conclusie: AI-voordeel is menselijk kapitaal',
        paragraphs: [
          'Het verschil tussen “AI gebruiken” en “AI winnen” zit in gedrag, routines en meetbaarheid.',
          'Qrio helpt teams sneller en veiliger werken met training, toetsing en rapportage—zodat het voordeel blijft, ook als tooling verandert.',
        ],
      },
    ],
  },

  {
    slug: 'eu-ai-act-trainingsplicht-artikel-4-ai-geletterdheid',
    title: 'voldoet uw organisatie aan de trainingsplicht van Artikel 4?',
    excerpt:
      'Artikel 4 van de EU AI Act vraagt om AI-geletterdheid (AI literacy) bij personeel dat met AI werkt. Met training alleen ben je er niet: je moet ook kunnen aantonen wat mensen weten en kunnen.',
    publishedAt: '2025-12-03T13:30:00.000Z',
    readingTimeMinutes: 8,
    tags: ['EU AI Act', 'Artikel 4', 'AI-geletterdheid', 'Training', 'Compliance'],
    category: BLOG_CATEGORIES.EU_AI_ACT_COMPLIANCE,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & compliance',
    },
    cover: {
      eyebrow: 'EU AI Act & Compliance',
      gradientClassName: 'bg-gradient-to-br from-blue-200/30 via-primary/20 to-purple-200/30',
      image: '/blogs/aiact.jpg',
      imageAlt: 'Placeholder cover image voor AI Act Artikel 4 trainingsplicht',
    },
    sections: [
      {
        paragraphs: [
          'De EU AI Act introduceert een duidelijke verwachting: organisaties moeten zorgen dat mensen die met AI-systemen werken voldoende AI-geletterd zijn.',
          'Dit is niet alleen “een training geven”. De praktijkvraag is: kun je aantonen dat jouw medewerkers AI verantwoord gebruiken—passend bij hun rol en risico’s?',
        ],
        note: 'Artikel 4 (AI literacy) valt onder de vroege toepassingsbepalingen en wordt in veel samenvattingen gekoppeld aan 2 februari 2025. Toets altijd je specifieke situatie en sector met juridisch advies.',
      },
      {
        heading: 'Wat vraagt Artikel 4 (AI-geletterdheid)?',
        paragraphs: [
          'Artikel 4 vraagt dat aanbieders en gebruikers van AI-systemen maatregelen nemen om, binnen hun mogelijkheden, een voldoende niveau van AI-geletterdheid te waarborgen bij hun personeel en betrokkenen.',
        ],
        bullets: [
          'Kennis: begrijpen wat AI is (en wat het niet is).',
          'Vaardigheden: effectief én kritisch kunnen werken met AI-output.',
          'Bewustzijn: risico’s herkennen (bias, hallucinaties, privacy, security).',
          'Rolafhankelijk: wat “voldoende” is hangt af van context en risico.',
        ],
      },
      {
        heading: 'Wat betekent dit concreet voor organisaties?',
        bullets: [
          'Maak duidelijk wie AI gebruikt, met welke tools en voor welke processen.',
          'Train medewerkers op rol-specifieke risico’s en werkwijzen.',
          'Leg vast wat wel/niet mag (beleid) en hoe escalatie werkt.',
          'Toets en documenteer: “training gevolgd” is meestal niet genoeg.',
        ],
      },
      {
        heading: 'Hoe toon je naleving aan?',
        paragraphs: [
          'Toezicht en audits draaien om bewijs. Zorg dat je kunt laten zien wat er is geleerd, door wie, wanneer, en met welk resultaat.',
        ],
        bullets: [
          'Training + toetsing (quiz, scenario’s, praktijkopdrachten).',
          'Registratie per medewerker/rol (datum, score, certificaat).',
          'Periodieke herhaling en updates (bij nieuwe tooling of beleid).',
          'Managementrapportage: dekking, hiaten, en acties.',
        ],
      },
      {
        heading: 'Waar Qrio helpt',
        paragraphs: [
          'Qrio is gebouwd om AI-vaardigheid meetbaar te maken: microlearning, toetsing en rapportage in één platform.',
          'Zo combineer je adoptie (productiviteit) met aantoonbaarheid (compliance) zonder extra administratieve last.',
        ],
      },
      {
        heading: 'Conclusie: van training naar aantoonbaarheid',
        paragraphs: [
          'Artikel 4 maakt AI-geletterdheid een organisatieverantwoordelijkheid. Wie dit goed organiseert, wint niet alleen compliance—maar ook productiviteit en vertrouwen.',
        ],
      },
    ],
  },

  {
    slug: 'ai-act-sancties-voorkomen-stappenplan',
    title: 'Een stap-voor-stap gids om AI Act-sancties te voorkomen',
    excerpt:
      'De EU AI Act introduceert stevige boetes (tot €35 miljoen of 7% van de wereldwijde jaaromzet, afhankelijk van de overtreding). Met dit stappenplan breng je risico’s omlaag en bouw je audit-proof bewijs op.',
    publishedAt: '2025-12-08T09:00:00.000Z',
    readingTimeMinutes: 9,
    tags: ['EU AI Act', 'Boetes', 'Sancties', 'Risk management', 'Governance'],
    category: BLOG_CATEGORIES.EU_AI_ACT_COMPLIANCE,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & compliance',
    },
    cover: {
      eyebrow: 'EU AI Act & Compliance',
      gradientClassName: 'bg-gradient-to-br from-purple-200/25 via-primary/20 to-blue-200/30',
      image: '/blogs/euai.jpg',
      imageAlt: 'Placeholder cover image voor €35 miljoen boete blog',
    },
    sections: [
      {
        paragraphs: [
          'AI brengt kansen, maar ook aansprakelijkheid. Met de EU AI Act worden governance, documentatie en training geen “nice to have” meer.',
          'Het goede nieuws: sancties voorkom je vooral door grip. En grip bouw je stap voor stap.',
        ],
      },
      {
        heading: 'Waar komt “€35 miljoen” vandaan?',
        paragraphs: [
          'De AI Act hanteert verschillende boetecategorieën. In het zwaarste geval kan dit oplopen tot €35 miljoen of 7% van de wereldwijde jaaromzet (welke hoger is), afhankelijk van de overtreding.',
          'De exacte toepassing hangt af van het type overtreding, rol (provider/deployer) en context. Zie dit artikel als praktische aanpak, niet als juridisch advies.',
        ],
      },
      {
        heading: 'Stap-voor-stap: zo verlaag je je AI Act-risico',
        bullets: [
          '1) Maak een AI-inventaris: welke tools/modellen worden gebruikt, door wie, voor welke processen?',
          '2) Classificeer use-cases: waar zit hoog risico (impact op mensen, rechten, veiligheid)?',
          '3) Leg governance vast: eigenaarschap, goedkeuringsproces, escalatie en incidentrespons.',
          '4) Borg AI-geletterdheid: train en toets medewerkers (rolafhankelijk) en leg bewijs vast.',
          '5) Beheer leveranciers: contracten, datastromen, security-eisen en verantwoordelijkheden.',
          '6) Monitor en verbeter: periodieke reviews, updates bij nieuwe tooling en lessons learned.',
        ],
        note: 'De grootste valkuil is “we hebben beleid”. Zonder adoptie, toetsing en bewijs blijft het papier.',
      },
      {
        heading: 'Veelgemaakte fouten',
        bullets: [
          'Geen centrale inventaris → Shadow AI en onzichtbare risico’s.',
          'Training zonder toetsing → geen aantoonbaarheid.',
          'Onheldere rollen → niemand is eigenaar bij incidenten.',
          'Geen periodieke updates → beleid en kennis verouderen snel.',
        ],
      },
      {
        heading: 'Conclusie: compliance is een systeem',
        paragraphs: [
          'Wie AI Act-sancties wil vermijden, organiseert governance, vaardigheden en bewijs als doorlopend proces.',
          'Qrio helpt met training, toetsing en dashboards—zodat je niet alleen compliant bent, maar het ook kunt bewijzen.',
        ],
      },
    ],
  },

  {
    slug: '5-stappen-ai-geletterdheid-bewijzen',
    title: 'Hoe u in 5 stappen aantoont dat uw personeel AI-geletterd is',
    excerpt:
      'AI-geletterdheid is pas “compliant” als je het kunt aantonen. Met deze 5 stappen bouw je een praktisch dossier op: training, toetsing, registraties en een dashboard dat klaar is voor auditvragen.',
    publishedAt: '2025-12-12T15:10:00.000Z',
    readingTimeMinutes: 7,
    tags: ['Checklist', 'AI-geletterdheid', 'Audit', 'Training', 'Compliance'],
    category: BLOG_CATEGORIES.EU_AI_ACT_COMPLIANCE,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & compliance',
    },
    cover: {
      eyebrow: 'EU AI Act & Compliance',
      gradientClassName: 'bg-gradient-to-br from-blue-200/30 via-primary/20 to-emerald-200/20',
      image: '/blogs/checklist.jpg',
      imageAlt: 'Placeholder cover image voor Compliance checklist',
    },
    sections: [
      {
        paragraphs: [
          'Veel organisaties kunnen wel uitleggen dat ze “iets doen aan AI”. Maar bij audits telt bewijs: wie is getraind, wat is getoetst, wat zijn de uitkomsten en hoe wordt er bijgestuurd?',
          'Deze checklist helpt je om AI-geletterdheid (AI literacy) meetbaar en aantoonbaar te maken.',
        ],
      },
      {
        heading: 'Stap 1 — Bepaal scope en rollen',
        bullets: [
          'Welke afdelingen gebruiken AI (of gaan het gebruiken)?',
          'Welke rollen zijn risicovol (bijv. HR-selectie, legal, finance, security)?',
          'Welke tools zijn toegestaan (goedgekeurde tooling)?',
        ],
      },
      {
        heading: 'Stap 2 — Definieer leerdoelen per rol',
        bullets: [
          'Basis: promptvaardigheden, hallucinaties, bias, privacy/security.',
          'Rol-specifiek: risico’s, do’s/don’ts, kwaliteitschecks en escalatie.',
        ],
      },
      {
        heading: 'Stap 3 — Train én toets',
        paragraphs: [
          'Training zonder toetsing levert weinig zekerheid. Combineer microlearning met korte toetsmomenten en scenario’s uit de praktijk.',
        ],
        bullets: [
          'Korte quiz (begrip van kernbegrippen).',
          'Scenario’s (wat doe je bij twijfel, datalek, bias, foutieve output?).',
          'Praktijkopdracht per rol (met rubric/criteria).',
        ],
      },
      {
        heading: 'Stap 4 — Leg bewijs vast',
        bullets: [
          'Per medewerker: datum, score, certificaat/uitkomst.',
          'Versiebeheer: welke leerstof en welke beleidsversie gold toen?',
          'Herhaling: plan updates bij nieuwe tooling of regelgeving.',
        ],
      },
      {
        heading: 'Stap 5 — Maak het audit-proof met rapportage',
        bullets: [
          'Coverage: % medewerkers getraind per rol/afdeling.',
          'Kwaliteit: scoreverdeling en hiaten.',
          'Acties: welke verbeteracties zijn ingezet en wat is status?',
          'Export: kun je bewijs snel aanleveren (PDF/CSV)?',
        ],
      },
      {
        heading: 'Conclusie: aantoonbaarheid zonder administratiepijn',
        paragraphs: [
          'Met een heldere checklist maak je AI-geletterdheid controleerbaar én schaalbaar.',
          'Qrio helpt met training, toetsing en dashboards zodat je in minuten kunt aantonen wat je team kan.',
        ],
      },
    ],
  },

  {
    slug: 'rol-van-de-compliance-officer-na-de-ai-act',
    title: 'De rol van de compliance officer na de AI Act',
    excerpt:
      'De EU AI Act verandert compliance: minder “nee zeggen”, meer “mogelijk maken met bewijs”. De compliance officer verschuift van controleur naar architect van governance, training en aantoonbaarheid.',
    publishedAt: '2025-12-17T10:45:00.000Z',
    readingTimeMinutes: 8,
    tags: ['Compliance officer', 'Governance', 'EU AI Act', 'Risico', 'Aantoonbaarheid'],
    category: BLOG_CATEGORIES.EU_AI_ACT_COMPLIANCE,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & compliance',
    },
    cover: {
      eyebrow: 'EU AI Act & Compliance',
      gradientClassName: 'bg-gradient-to-br from-emerald-200/20 via-primary/20 to-blue-200/30',
      image: '/blogs/compliance.jpg',
      imageAlt: 'Placeholder cover image voor Compliance officer blog',
    },
    sections: [
      {
        paragraphs: [
          'AI maakt compliance uitdagender: systemen veranderen snel, teams experimenteren, en risico’s zijn niet altijd zichtbaar.',
          'Met de EU AI Act komt daar een duidelijke verwachting bij: governance, vaardigheden en bewijs op orde. Dat maakt de compliance officer belangrijker dan ooit—maar ook anders.',
        ],
      },
      {
        heading: 'Waarom de rol verandert',
        bullets: [
          'AI zit in processen, niet alleen in IT.',
          'Risico’s zijn contextafhankelijk (rol, data, impact).',
          'Toezicht vraagt om aantoonbaarheid, niet om intenties.',
        ],
      },
      {
        heading: 'De nieuwe verantwoordelijkheden (praktisch)',
        bullets: [
          'AI-governance: rollen, eigenaarschap, besluitvorming en escalatie.',
          'AI-inventaris: zicht op tooling en use-cases (Shadow AI beperken).',
          'AI-geletterdheid: rolgebonden training, toetsing en registratie.',
          'Bewijsvoering: dashboards, exports, en “audit packs”.',
          'Samenwerking: brug tussen legal, security, HR en business.',
        ],
      },
      {
        heading: 'Van politieagent naar strategisch partner',
        paragraphs: [
          'De compliance officer die “AI mogelijk maakt” heeft een voordeel: minder weerstand, betere adoptie en minder incidenten.',
        ],
        bullets: [
          'Maak duidelijke kaders (wat mag, wat niet, wat vereist extra checks).',
          'Bied praktische templates (prompts, checklists, review-stappen).',
          'Meet en stuur bij met data (niet met gevoel).',
        ],
      },
      {
        heading: 'Conclusie: compliance wordt een product',
        paragraphs: [
          'De AI Act duwt organisaties richting meetbare compliance. Wie het goed inricht, kan sneller innoveren met minder risico.',
          'Qrio ondersteunt compliance officers met training, toetsing en rapportage die auditvragen direct beantwoordt.',
        ],
      },
    ],
  },

  {
    slug: 'hoe-met-een-dashboard-de-ai-competenties-van-uw-team-bewijzen',
    title: 'Hoe u met een dashboard de AI-competenties van uw team bewijst',
    excerpt:
      'Een AI-beleid is mooi, maar auditors willen bewijs: wie is getraind, wat is getoetst en waar zitten hiaten? Met een dashboard maak je AI-competenties zichtbaar, meetbaar en exporteerbaar.',
    publishedAt: '2025-12-22T14:00:00.000Z',
    readingTimeMinutes: 7,
    tags: ['Dashboard', 'Audit', 'AI-competenties', 'Rapportage', 'Compliance'],
    category: BLOG_CATEGORIES.EU_AI_ACT_COMPLIANCE,
    author: {
      name: 'Team Qrio',
      role: 'AI-adoptie & compliance',
    },
    cover: {
      eyebrow: 'EU AI Act & Compliance',
      gradientClassName: 'bg-gradient-to-br from-blue-200/30 via-primary/20 to-amber-200/20',
      image: '/blogs/dashboard.jpg',
      imageAlt: 'Placeholder cover image voor Audit-proof dashboard blog',
    },
    sections: [
      {
        paragraphs: [
          'Veel organisaties hebben inmiddels richtlijnen voor AI. De volgende stap is aantonen dat mensen ze begrijpen en toepassen.',
          'Een dashboard maakt het verschil tussen “we denken dat het goed zit” en “we kunnen het bewijzen”.',
        ],
      },
      {
        heading: 'Wat betekent “audit-proof” in de praktijk?',
        bullets: [
          'Je kunt laten zien wie AI gebruikt en waarvoor (scope).',
          'Je kunt laten zien wie getraind en getoetst is (bewijs).',
          'Je kunt hiaten aanwijzen en opvolging aantonen (actie).',
        ],
      },
      {
        heading: 'Wat een goed dashboard minimaal laat zien',
        bullets: [
          'Dekking: % medewerkers getraind per afdeling/rol.',
          'Kwaliteit: scoreverdeling en trends per periode.',
          'Recency: wanneer is de laatste training/toetsing gedaan?',
          'Uitzonderingen: wie loopt achter en welke acties zijn gepland?',
          'Exports: snelle rapportage (PDF/CSV) voor audits en bestuur.',
        ],
        note: 'Tip: koppel dashboards aan rolprofielen. “Voldoende AI-geletterdheid” is niet voor iedereen hetzelfde.',
      },
      {
        heading: 'Hoe Qrio dit ondersteunt',
        paragraphs: [
          'Qrio combineert training, toetsing en rapportage. Daardoor wordt bewijs automatisch opgebouwd tijdens adoptie, zonder extra spreadsheets.',
          'Je krijgt inzicht in voortgang en kunt snel aantonen wat je organisatie doet aan AI-geletterdheid.',
        ],
      },
      {
        heading: 'Conclusie: maak bewijs onderdeel van leren',
        paragraphs: [
          'Met een dashboard maak je AI-competenties zichtbaar en stuur je gericht bij.',
          'Wil je dit praktisch inrichten? Qrio helpt je binnen weken naar audit-proof aantoonbaarheid.',
        ],
      },
    ],
  },

  {
    slug: '5-grootste-datalek-risicos-die-nu-in-uw-organisatie-verborgen-zijn',
    title: "De 5 Grootste Datalek-Risico's die nu in uw Organisatie Verborgen zijn",
    excerpt:
      'Medewerkers gebruiken ChatGPT, Claude en andere AI-tools—vaak zonder toestemming, beleid of controle. Dit is Shadow AI. Hier zijn de 5 grootste datalek-risico’s en een praktisch stappenplan om het beheersbaar te maken.',
    publishedAt: '2025-12-29T11:30:00.000Z',
    readingTimeMinutes: 10,
    tags: ['Shadow AI', 'Datalek', 'Privacy', 'DLP', 'AI-beleid'],
    category: BLOG_CATEGORIES.SECURITY_RISK,
    author: {
      name: 'Team Qrio',
      role: 'AI-security & risk management',
    },
    cover: {
      eyebrow: 'Security & Risk',
      gradientClassName: 'bg-gradient-to-br from-red-200/20 via-primary/15 to-blue-200/25',
      image: '/blogs/shadow-ai.jpg',
      imageAlt: 'Placeholder cover image voor Shadow AI datalek risico’s',
    },
    sections: [
      {
        heading: 'Het moment: dinsdag 14:00 uur',
        paragraphs: [
          'Stel je voor: je bent compliance officer. Je telefoon gaat. De CISO: “We hebben een probleem. Een junior medewerker heeft zojuist een klantendatabase in ChatGPT geplakt.”',
          'Twee weken later ontdek je het via monitoring. Tienduizenden records—namen, e-mails, telefoonnummers—zijn in een publieke AI-tool beland. Dit scenario is geen uitzondering. Dit is Shadow AI.',
        ],
      },
      {
        heading: 'Wat is Shadow AI?',
        paragraphs: [
          'Shadow AI is het gebruik van ongeautoriseerde AI-tools door medewerkers. Het lijkt op “Shadow IT”, maar met één groot verschil: de kans dat data direct je organisatie verlaat is veel groter.',
          'Medewerkers doen dit meestal niet kwaadwillend. Ze willen sneller werken, kennen tools van thuis en onderschatten risico’s.',
        ],
        note: 'Cijfers verschillen per sector en bron, maar de trend is helder: ongeautoriseerd AI-gebruik is wijdverspreid en lastig te detecteren zonder beleid + monitoring.',
      },
      {
        heading: 'De 5 grootste datalek-risico’s',
        bullets: [
          '1) Directe datalek-kans: gevoelige data wordt gekopieerd/plakt in een publieke AI-chat.',
          '2) Indirecte datalek-kans door hallucinaties: foutieve details in output die je doorstuurt naar klanten of collega’s.',
          '3) Onbedoelde informatiedeling: contextverwarring, hergebruik van eerdere prompts/outputs of menselijke copy/paste naar verkeerde plek.',
          '4) Derde partijen & data-verwerking: leveranciers, subverwerkers, menselijke reviewprocessen en onduidelijkheid over bewaartermijnen.',
          '5) Compliance & contractrisico: GDPR, sectorspecifieke eisen, klantcontracten en interne policies worden onbedoeld overtreden.',
        ],
      },
      {
        heading: 'Praktische voorbeelden (waar het misgaat)',
        bullets: [
          'HR: cv’s of beoordelingsnotities worden ingevoerd → persoonsgegevens + bias-risico.',
          'Sales: klantcases of pricing-afspraken worden gedeeld → contract- en vertrouwelijkheidsrisico.',
          'Finance: prognoses of factuurdata in prompts → financiële gevoeligheid + fraude-risico.',
          'Zorg: patiëntinformatie → bijzondere persoonsgegevens, zware impact bij incidenten.',
        ],
      },
      {
        heading: 'Waarom blokkeren niet werkt',
        paragraphs: [
          'Veel organisaties blokkeren AI-sites. In de praktijk verplaatst het gedrag naar privédevices, hotspots of thuisnetwerken. Je ziet minder, dus je stuurt minder bij.',
          'Shadow AI verdwijnt niet door blokkades. Het verdwijnt uit je zicht.',
        ],
      },
      {
        heading: 'Stappenplan: van ticking time bomb naar beheersbaar risico',
        bullets: [
          '1) Accepteer de realiteit: Shadow AI bestaat al in je organisatie.',
          '2) Train medewerkers: wat is toegestaan, wat is verboden, en waarom (met voorbeelden).',
          '3) Bied veilige alternatieven: goedgekeurde tools met enterprise-instellingen.',
          '4) Zet monitoring in: DLP, endpoint/identity controls, logging en alerts.',
          '5) Leg beleid vast + incidentprotocol: wat te doen bij een fout (meldplicht/triage).',
        ],
        note: 'Training zonder governance is te licht; governance zonder training is papier. Combineer beide voor resultaat.',
      },
      {
        heading: 'Checklist: ben je beschermd?',
        bullets: [
          'Weet je welke AI-tools medewerkers gebruiken?',
          'Is er beleid: wat mag wel/niet in prompts?',
          'Krijgt iedereen training op veilig AI-gebruik?',
          'Zijn er veilige, goedgekeurde alternatieven beschikbaar?',
          'Is er monitoring (DLP/alerts) en een incidentprotocol?',
        ],
      },
      {
        heading: 'Conclusie: Shadow AI is echt—beheer het',
        paragraphs: [
          'De vraag is niet of Shadow AI gebeurt, maar of je het ziet, begrenst en aantoonbaar beheerst.',
          'Qrio helpt teams AI veilig te gebruiken met training, toetsing en rapportage—zodat risico’s dalen en productiviteit stijgt.',
        ],
      },
    ],
  },

  {
    slug: 'waarom-een-ai-verbod-niet-werkt-en-wat-u-wel-moet-doen',
    title: 'Waarom een AI-Verbod niet Werkt (en wat u wél moet doen)',
    excerpt:
      'ChatGPT blokkeren voelt veilig, maar verplaatst AI-gebruik naar privéapparaten en maakt het onzichtbaar. Dit artikel laat zien waarom verboden contraproductief zijn en hoe je veilig AI-gebruik faciliteert met beleid, training en monitoring.',
    publishedAt: '2026-01-02T09:15:00.000Z',
    readingTimeMinutes: 8,
    tags: ['AI-verbod', 'Shadow AI', 'Security', 'Beleid', 'Training'],
    category: BLOG_CATEGORIES.SECURITY_RISK,
    author: {
      name: 'Team Qrio',
      role: 'AI-security & governance',
    },
    cover: {
      eyebrow: 'Security & Risk',
      gradientClassName: 'bg-gradient-to-br from-amber-200/25 via-primary/15 to-blue-200/25',
      image: '/blogs/aiverbod.jpg',
      imageAlt: 'Placeholder cover image voor AI-verbod werkt niet',
    },
    sections: [
      {
        paragraphs: [
          'Je kunt ChatGPT blokkeren. Maar je kunt medewerkers niet blokkeren. En dat is precies het probleem.',
          'In veel organisaties is de reflex: “Blokkeer alles.” Maar in de praktijk maakt dat Shadow AI juist groter en gevaarlijker.',
        ],
      },
      {
        heading: 'Waarom blokkeren niet werkt',
        bullets: [
          'Privételefoon / privélaptop (buiten IT-zicht).',
          'VPN of mobiele hotspot (omzeilen van filters).',
          'Thuiswerken (ander netwerk, geen bedrijfsfirewall).',
          'Nieuwe AI-tools verschijnen sneller dan je kunt blokkeren.',
        ],
      },
      {
        heading: 'De psychologie: van blokkade naar riskanter gedrag',
        bullets: [
          'Blokkering → frustratie → workaround → geheimzinnigheid → riskanter gedrag.',
          'Als mensen toch “stiekem” werken, is de drempel om gevoelige info te delen lager.',
        ],
      },
      {
        heading: 'De betere aanpak: faciliteren met controle',
        paragraphs: [
          'Veilig AI-gebruik vraagt om faciliteren: je biedt goedgekeurde tools, leert mensen wat wel/niet mag en je monitort op risico’s.',
          'Dat is lastiger dan blokkeren, maar het verlaagt risico’s en verhoogt adoptie.',
        ],
      },
      {
        heading: 'De 3 pijlers',
        bullets: [
          '1) Educatie: duidelijke do’s/don’ts + praktische voorbeelden.',
          '2) Goedgekeurde tools: enterprise-instellingen, dataverwerking op orde.',
          '3) Monitoring: DLP/alerts + governance om bij te sturen.',
        ],
      },
      {
        heading: 'Praktisch stappenplan (van verbod naar veilige adoptie)',
        bullets: [
          'Stap 1: accepteer dat blokkeren niet afdoende is.',
          'Stap 2: inventariseer huidig gebruik (tools, teams, use-cases).',
          'Stap 3: definieer beleid (tools, data, escalatie, incidentresponse).',
          'Stap 4: rol goedgekeurde tooling uit en maak het makkelijk om het “goede pad” te kiezen.',
          'Stap 5: train iedereen + toets begrip (aantoonbaarheid).',
          'Stap 6: monitor, leer, verbeter (periodiek).',
        ],
      },
      {
        heading: 'Conclusie: “verbieden” is sturen zonder stuurinformatie',
        paragraphs: [
          'Een AI-verbod duwt gebruik uit je zicht. Faciliteren met beleid, training en monitoring maakt AI juist beheersbaar.',
          'Qrio helpt hierbij met training, toetsing en rapportage zodat je veilig kunt versnellen.',
        ],
      },
    ],
  },

  {
    slug: 'framework-voor-veilig-implementeren-van-ai-tools',
    title: 'Een framework voor het veilig implementeren van AI-tools',
    excerpt:
      'AI wordt al gebruikt in je organisatie—met of zonder toestemming. Dit 5-fasen framework brengt je van chaos (geen zicht) naar controle (beleid, tooling, training, monitoring en continue verbetering).',
    publishedAt: '2026-01-04T13:00:00.000Z',
    readingTimeMinutes: 10,
    tags: ['Framework', 'AI-governance', 'Shadow AI', 'Monitoring', 'Compliance'],
    category: BLOG_CATEGORIES.SECURITY_RISK,
    author: {
      name: 'Team Qrio',
      role: 'AI-governance & risk management',
    },
    cover: {
      eyebrow: 'Security & Risk',
      gradientClassName: 'bg-gradient-to-br from-blue-200/30 via-primary/15 to-emerald-200/20',
      image: '/blogs/control.jpg',
      imageAlt: 'Placeholder cover image voor Van chaos naar controle framework',
    },
    sections: [
      {
        heading: 'De situatie: chaos',
        bullets: [
          'Meerdere AI-tools tegelijk (ChatGPT, Claude, Gemini, Copilot).',
          'Onbekend welke data erin gaat en welke output eruit komt.',
          'IT heeft beperkte controle, management mist overzicht.',
        ],
      },
      {
        heading: 'Het framework: 5 fases',
        paragraphs: [
          'Dit framework werkt omdat het stap voor stap grip opbouwt: eerst zichtbaarheid, dan beleid, dan implementatie en pas daarna strakke controle en optimalisatie.',
        ],
      },
      {
        heading: 'Fase 1 — Zichtbaarheid (week 1–2)',
        bullets: [
          'Inventariseer tools en use-cases (enquêtes + interviews + monitoring).',
          'Identificeer risicovolle datastromen en processen.',
          'Documenteer: teams, tooling, doel, data, risico.',
        ],
      },
      {
        heading: 'Fase 2 — Beleid (week 3–4)',
        bullets: [
          'Welke tools zijn toegestaan (en waarom)?',
          'Welke data mag wel/niet in prompts?',
          'Escalatie + incidentprotocol (wat te doen bij een fout).',
          'Communicatie: kort, duidelijk, herhaalbaar.',
        ],
      },
      {
        heading: 'Fase 3 — Implementatie (week 5–8)',
        bullets: [
          'Rol veilige tooling uit (enterprise-instellingen).',
          'Train medewerkers op veilig gebruik en rol-specifieke risico’s.',
          'Zet monitoring in (DLP, logging, alerts) en organiseer support.',
        ],
      },
      {
        heading: 'Fase 4 — Controle (week 9–12)',
        bullets: [
          'Monitor naleving: tooling, datalek-indicatoren, uitzonderingen.',
          'Reageer op incidenten: triage, mitigatie, extra training.',
          'Rapporteer aan management: trends, risico’s, acties.',
        ],
        note: 'Belangrijk: controle werkt alleen als mensen ook een goed alternatief hebben. Anders verschuift het probleem naar buiten je zicht.',
      },
      {
        heading: 'Fase 5 — Optimalisatie (week 13+)',
        bullets: [
          'Verzamel feedback en update beleid.',
          'Update training bij nieuwe tools en regelgeving.',
          'Continue monitoring en maandelijkse/kwartaalrapportage.',
        ],
      },
      {
        heading: 'Conclusie: controle is een systeem',
        paragraphs: [
          'AI-governance is geen eenmalig project. Het is een doorlopend systeem dat leert, meet en bijstuurt.',
          'Qrio helpt met training, toetsing en rapportage zodat je aantoonbaar grip op AI-gebruik opbouwt.',
        ],
      },
    ],
  },

  {
    slug: 'de-cisos-gids-voor-ai',
    title: "De CISO's gids voor AI",
    excerpt:
      'De beste firewall kan niet voorkomen dat iemand gevoelige data in een AI-chat plakt. Training kan dat wél. Dit artikel geeft een praktisch trainingsmodel voor CISOs: doelgroepen, modules, toetsing, herhaling en meetbaarheid.',
    publishedAt: '2026-01-05T16:20:00.000Z',
    readingTimeMinutes: 9,
    tags: ['CISO', 'Security awareness', 'Training', 'Incident response', 'AI-veiligheid'],
    category: BLOG_CATEGORIES.SECURITY_RISK,
    author: {
      name: 'Team Qrio',
      role: 'AI-security & awareness',
    },
    cover: {
      eyebrow: 'Security & Risk',
      gradientClassName: 'bg-gradient-to-br from-slate-200/25 via-primary/15 to-blue-200/25',
      image: '/blogs/ciso.jpg',
      imageAlt: 'Placeholder cover image voor CISO gids voor AI',
    },
    sections: [
      {
        heading: 'Technologie is niet genoeg',
        paragraphs: [
          'Firewalls, DLP en EDR zijn essentieel—maar ze kunnen niet voorkomen dat iemand bewust of onbewust gevoelige data in een AI-tool invoert.',
          'De enige duurzame oplossing is gedragsverandering: medewerkers moeten weten wat wel/niet kan en waarom.',
        ],
      },
      {
        heading: 'Waarom training werkt',
        bullets: [
          'Het creëert herkenning: “dit is gevoelige data”.',
          'Het verlaagt impulsgedrag: mensen pauzeren vóór ze plakken.',
          'Het geeft handelingsperspectief: veilige alternatieven + escalatie.',
        ],
      },
      {
        heading: 'Wat je minimaal moet trainen',
        bullets: [
          '1) Basis: wat is AI (en wat is het niet) + waar gaat output mis.',
          '2) Risico’s: datalek, hallucinaties, bias, reputatie, contracten.',
          '3) Dataregels: wat mag nooit in prompts (klant-, medewerker-, finance-, medische data).',
          '4) Wat wél kan: toegestane use-cases met goedgekeurde tooling.',
          '5) Incidentprotocol: wat te doen als iemand een fout maakt (direct melden).',
        ],
        note: 'Maak dit rol-specifiek. HR, finance en legal hebben andere risico’s dan marketing of sales.',
      },
      {
        heading: 'Doelgroepen (niet iedereen hetzelfde)',
        bullets: [
          'Basis: iedereen (korte training + toets).',
          'Geavanceerd: heavy users (prompt skills + controle-stappen + toolkeuze).',
          'Juridisch/compliance: governance, bewijsvoering en beleidsupdates.',
          'IT/security: monitoring, incidentresponse en vendor management.',
        ],
      },
      {
        heading: 'Voorbeeldmodule: AI Veiligheid Basics (30 min)',
        bullets: [
          '5 min: wat is AI + voorbeelden in de organisatie.',
          '5 min: belangrijkste risico’s in simpele taal.',
          '10 min: data-classificatie: wat nooit in AI (met voorbeelden).',
          '5 min: praktische cases (mag dit wel/niet?)',
          '3 min: incident: wat te doen bij een fout.',
          '2 min: quiz (kennischeck).',
        ],
      },
      {
        heading: 'Hoe je borgt dat het blijft hangen',
        bullets: [
          'Herhaling (microlearning) + korte reminders per kwartaal.',
          'Toetsing: meet begrip en hiaten per rol.',
          'Incentives: badges/erkenning voor voltooiing en goede praktijken.',
          'Consequenties: duidelijke opvolging bij overtredingen.',
        ],
      },
      {
        heading: 'Conclusie: medewerkers zijn je eerste verdedigingslinie',
        paragraphs: [
          'AI-security is deels technologie, maar vooral gedrag. Training maakt het verschil tussen incidenten achteraf ontdekken en incidenten voorkomen.',
          'Qrio helpt met korte trainingen, toetsing en rapportage zodat je als CISO kunt sturen op meetbare AI-veiligheid.',
        ],
      },
    ],
  },
];

export function getAllBlogs(): Blog[] {
  return [...blogs].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function formatBlogDate(isoDate: string): string {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
