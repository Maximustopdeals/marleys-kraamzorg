export interface WerkgebiedData {
  slug: string;
  naam: string;
  metaTitle: string;
  metaDescription: string;
  heroH1: string;
  heroSubtitle: string;
  intro: string[];
  whyTitle: string;
  whyText: string[];
  aboutTitle: string;
  aboutText: string[];
  wijkenTitle: string;
  wijkenIntro: string;
  wijken: string[];
  faq: { question: string; answer: string }[];
  gradient: string;
}

export const werkgebieden: WerkgebiedData[] = [
  {
    slug: "rotterdam",
    naam: "Rotterdam",
    metaTitle: "Kraamzorg Rotterdam | Persoonlijk & Met 1 Vast Gezicht | Marley's Kraamzorg",
    metaDescription:
      "Op zoek naar kraamzorg in Rotterdam? Marley's Kraamzorg biedt persoonlijke begeleiding met één vast gezicht in Kralingen, Centrum, Noord, Zuid & meer. 24/7 bereikbaar.",
    heroH1: "Kraamzorg Rotterdam | Marley's Kraamzorg",
    heroSubtitle:
      "Persoonlijke kraamzorg met 1 vast gezicht in Rotterdam — van Kralingen tot Hillegersberg",
    intro: [
      "Welkom bij Marley's Kraamzorg in Rotterdam. Als ervaren kraamverzorgende ben ik dé keuze voor aanstaande ouders die op zoek zijn naar persoonlijke, betrokken kraamzorg in de stad. In Rotterdam wonen en werken betekent voor mij dat ik altijd dichtbij ben, flexibel inzetbaar en snel ter plaatse.",
      "Mijn naam is Lisa en met trots draag ik de naam van mijn dochtertje Marley in mijn bedrijf. Haar naam herinnert me er elke dag aan hoe kostbaar en bijzonder de eerste dagen met een newborn zijn. Die warmte en liefde geef ik door aan elk gezin waar ik mag komen kraamzorgen.",
      "In Rotterdam bied ik kraamzorg aan huis, volledig afgestemd op jouw wensen en behoeften. Of je nu in een appartement in het centrum woont of een gezinswoning in Kralingen — ik pas me aan en zorg voor een rustige, vertrouwde kraamperiode.",
    ],
    whyTitle: "Waarom kraamzorg in Rotterdam?",
    whyText: [
      "Rotterdam is een bruisende stad met een grote diversiteit aan gezinnen. Als kraamverzorgende ken ik de stad als mijn broekzak. Ik weet hoe het is om te navigeren tussen de verschillende wijken, rekening te houden met parkeeropties en de unieke sfeer van elk stadsdeel.",
      "In een grote stad als Rotterdam is het des te belangrijker om iemand te hebben die bekend is met de lokale verloskundigenpraktijken, het Erasmus MC, het Franciscus Gasthuis en de andere zorgverleners in de regio. Ik werk samen met Verloskundigen aan de Schie, IVE Verloskundigen en VIVE Verloskundigen, zodat jij zorgeloos kunt genieten van je kraamtijd.",
      "Bovendien ken ik de specifieke behoeften van Rotterdamse gezinnen. Of je nu in een klein appartement in het Oude Westen woont of een ruime woning in Hillegersberg hebt — ik zorg dat de kraamzorg naadloos aansluit op jouw situatie.",
    ],
    aboutTitle: "Over Marley's Kraamzorg in Rotterdam",
    aboutText: [
      "Marley's Kraamzorg staat voor kleinschalige, persoonlijke kraamzorg. Je krijgt bij mij geen wisselende verzorgenden, maar één vast gezicht: mij, Lisa. Van de eerste kennismaking tot het einde van je kraamperiode ben ik er voor jou en je gezin.",
      "Mijn werkwijze kenmerkt zich door betrokkenheid, deskundigheid en een warme persoonlijke aanpak. Ik neem de tijd voor je, luister naar je vragen en geef advies op maat. Of het nu gaat om borstvoeding, de verzorging van je baby of het herstel na de bevalling — ik sta naast je.",
      "In Rotterdam ben ik 24/7 bereikbaar. Dat geeft veel ouders een gerust gevoel. Wetende dat er altijd iemand is die je kunt bellen met vragen, ook midden in de nacht. Die continuïteit van zorg maakt het verschil.",
    ],
    wijkenTitle: "Wijken en bereikbaarheid in Rotterdam",
    wijkenIntro:
      "Ik werk in alle wijken van Rotterdam. Hieronder een overzicht van de stadsdelen waar ik regelmatig kraamzorg verleen:",
    wijken: [
      "Kralingen-Crooswijk — Populair bij jonge gezinnen, nabij het Kralingse Bos",
      "Rotterdam-Centrum — Voor ouders in de binnenstad met appartementen",
      "Rotterdam-Noord — Inclusief Blijdorp, Oude Noorden en Agniesebuurt",
      "Rotterdam-Zuid — Van Katendrecht tot Charlois en Feijenoord",
      "Hillegersberg-Schiebroek — Rustige woonwijk met veel groen",
      "Overschie — Dorpse sfeer aan de rand van de stad",
      "IJsselmonde — Gezinsvriendelijke wijk met ruime woningen",
      "Prins Alexander — Inclusijk Oosterflank en Zevenkamp",
    ],
    faq: [
      {
        question: "In welke wijken van Rotterdam werk je?",
        answer: "Ik werk in alle wijken van Rotterdam: van Kralingen en Centrum tot Noord, Zuid, Hillegersberg, Overschie en IJsselmonde. Woont u net buiten Rotterdam? Neem gerust contact op, want ook in omliggende gemeenten ben ik actief.",
      },
      {
        question: "Hoe snel ben je in Rotterdam ter plaatse?",
        answer: "Omdat ik zelf in Rotterdam woon, ben ik meestal binnen 20 tot 30 minuten bij u thuis. Bij spoed kan ik sneller ter plaatse zijn. We bespreken dit altijd van tevoren tijdens de kennismaking.",
      },
      {
        question: "Werk je samen met verloskundigen in Rotterdam?",
        answer: "Ja, ik werk samen met verschillende verloskundigenpraktijken in Rotterdam, waaronder Verloskundigen aan de Schie, IVE Verloskundigen en VIVE Verloskundigen. Deze samenwerking zorgt voor een soepele overdracht en goede afstemming tijdens je kraamperiode.",
      },
      {
        question: "Is er parkeergelegenheid in Rotterdam?",
        answer: "In de meeste Rotterdamse wijken is parkeergelegenheid beschikbaar. In het centrum en sommige drukke wijken heb ik soms een parkeervergunning of -vergunning nodig. Dit bespreken we tijdens het intakegesprek, zodat ik zonder zorgen bij u kan komen.",
      },
    ],
    gradient: "linear-gradient(135deg, rgba(154,30,97,0.15) 0%, rgba(74,26,61,0.08) 50%, rgba(245,200,216,0.2) 100%)",
  },

  {
    slug: "capelle-aan-den-ijssel",
    naam: "Capelle aan den IJssel",
    metaTitle: "Kraamzorg Capelle aan den IJssel | Persoonlijk & Betrokken | Marley's Kraamzorg",
    metaDescription:
      "Kraamzorg in Capelle aan den IJssel nodig? Marley's Kraamzorg biedt persoonlijke begeleiding met één vast gezicht. Voor Schenkel, Capelle-West en omgeving. Direct aanmelden.",
    heroH1: "Kraamzorg Capelle aan den IJssel | Marley's Kraamzorg",
    heroSubtitle: "Persoonlijke kraamzorg met 1 vast gezicht in Capelle aan den IJssel",
    intro: [
      "Zoekt u naar betrokken kraamzorg in Capelle aan den IJssel? Marley's Kraamzorg is uw partner voor een warme, zorgzame start met uw pasgeboren baby. Ik ben Lisa, eigenaar en kraamverzorgende, en ik kom graag naar Capelle om u te begeleiden tijdens deze bijzondere periode.",
      "Capelle aan den IJssel is een prachtige gemeente met een dorpse sfeer, groene woonwijken en uitstekende voorzieningen voor gezinnen. Als kraamverzorgende ken ik de gemeente goed en weet ik precies waar ik moet zijn — of u nu woont in de Schenkel, Capelle-West of aan de 's-Gravenweg.",
      "Met Marley's Kraamzorg kiest u voor persoonlijke aandacht, deskundige begeleiding en een vertrouwd gezicht tijdens uw hele kraamperiode. Ik neem de tijd voor u, luister naar uw wensen en zorg dat u zich veilig en gesteund voelt.",
    ],
    whyTitle: "Waarom kraamzorg in Capelle aan den IJssel?",
    whyText: [
      "Capelle aan den IJssel is een geliefde woonplaats voor jonge gezinnen dankzij de ruime woningen, de groene omgeving en de centrale ligging nabij Rotterdam. Veel gezinnen kiezen bewust voor Capelle vanwege de kindvriendelijke wijken en de uitstekende voorzieningen.",
      "Als kraamverzorgende in Capelle aan den IJssel profiteert u van mijn korte aanrijdtijden. Ik woon in Rotterdam en ben daardoor snel ter plaatse. Bovendien werk ik samen met verloskundigenpraktijken in de regio, waaronder Verloskundigen aan de Schie en VIVE Verloskundigen, zodat de zorg naadloos op elkaar aansluit.",
      "In Capelle waardeer ik de rust en ruimte die de gemeente biedt. Tegenover de drukte van de stad kunt u hier genieten van een ontspannen kraamperiode, met alle voorzieningen binnen handbereik. Ik zorg dat u zich nergens zorgen over hoeft te maken.",
    ],
    aboutTitle: "Over Marley's Kraamzorg in Capelle aan den IJssel",
    aboutText: [
      "Marley's Kraamzorg is vernoemd naar mijn dochtertje Marley — een naam die staat voor liefde, warmte en de kostbaarheid van de eerste levensdagen. Die waarden draag ik elke dag met me mee wanneer ik bij gezinnen in Capelle aan den IJssel mag komen.",
      "Mijn werkwijze is kleinschalig en persoonlijk. U krijgt bij mij één vast gezicht: ik ben er vanaf de kennismaking tot het einde van uw kraamperiode. Die continuïteit schept vertrouwen en zorgt voor een prettige, ontspannen sfeer in huis.",
      "Of u nu uw eerste kindje verwacht of al ervaring heeft met kraamzorg — ik stem mijn begeleiding altijd af op uw situatie. Met jarenlange ervaring en een warme persoonlijke aanpak zorg ik voor een zorgeloze start.",
    ],
    wijkenTitle: "Wijken en bereikbaarheid in Capelle aan den IJssel",
    wijkenIntro:
      "Ik werk in alle wijken van Capelle aan den IJssel. Hieronder de belangrijkste gebieden waar ik kraamzorg verleen:",
    wijken: [
      "De Schenkel — Een moderne, kindvriendelijke woonwijk met veel groen",
      "Capelle-West — Een gezellige wijk met diverse woonoppervlakten",
      "'s-Gravenweg — Langs de dijk met karakteristieke woningen",
      "Centrum — Dicht bij winkels, scholen en het gemeentehuis",
      "Oostgaarde — Rustige woonbuurt met speelvelden en parken",
      "Molenwerf — Nabij de IJssel, met fraaie waterrijke omgeving",
    ],
    faq: [
      {
        question: "Werk je in alle wijken van Capelle aan den IJssel?",
        answer: "Ja, ik werk in alle wijken van Capelle aan den IJssel, inclusief de Schenkel, Capelle-West, het centrum en Oostgaarde. Woont u aan de rand van de gemeente? Neem contact op, dan kijken we samen naar de mogelijkheden.",
      },
      {
        question: "Hoe snel ben je in Capelle aan den IJssel?",
        answer: "Vanuit Rotterdam ben ik doorgaans binnen 20 tot 30 minuten in Capelle aan den IJssel. Dankzij de goede verbindingen via de A16 en A20 ben ik snel ter plaatse.",
      },
      {
        question: "Welke verloskundigen werken in Capelle?",
        answer: "In Capelle aan den IJssel zijn verschillende verloskundigenpraktijken actief. Ik werk onder meer samen met Verloskundigen aan de Schie en VIVE Verloskundigen. We stemmen de zorg goed op elkaar af.",
      },
      {
        question: "Kan ik ook in Capelle aan den IJssel een kennismaking plannen?",
        answer: "Absoluut! Ik kom graag bij u thuis in Capelle aan den IJssel voor een vrijblijvende kennismaking. We bespreken uw wensen, ik leg mijn werkwijze uit en u kunt alle vragen stellen die u heeft. Geheel vrijblijvend en zonder kosten.",
      },
    ],
    gradient: "linear-gradient(135deg, rgba(154,30,97,0.12) 0%, rgba(93,50,70,0.1) 50%, rgba(232,213,196,0.15) 100%)",
  },

  {
    slug: "nieuwerkerk-aan-den-ijssel",
    naam: "Nieuwerkerk aan den IJssel",
    metaTitle: "Kraamzorg Nieuwerkerk aan den IJssel | 1 Vast Gezicht | Marley's Kraamzorg",
    metaDescription:
      "Kraamzorg in Nieuwerkerk aan den IJssel gezocht? Marley's Kraamzorg biedt persoonlijke, betrokken kraamzorg. Eén vast gezicht, 24/7 bereikbaar. Meld je vrijblijvend aan.",
    heroH1: "Kraamzorg Nieuwerkerk aan den IJssel | Marley's Kraamzorg",
    heroSubtitle: "Persoonlijke kraamzorg met 1 vast gezicht in Nieuwerkerk aan den IJssel",
    intro: [
      "Op zoek naar een betrokken kraamverzorgende in Nieuwerkerk aan den IJssel? Bij Marley's Kraamzorg staat persoonlijke zorg voorop. Ik ben Lisa en ik begeleid u graag tijdens uw kraamperiode in Nieuwerkerk — met aandacht, expertise en een luisterend oor.",
      "Nieuwerkerk aan den IJssel is een gemeente met een warme, dorpsgezellige sfeer. Met zijn groene omgeving, kindvriendelijke wijken en uitstekende bereikbaarheid is het een ideale plek om een gezin te stichten. Als kraamverzorgende kom ik hier graag en voel me snel thuis bij de gezinnen die ik mag ondersteunen.",
      "Kiest u voor Marley's Kraamzorg, dan kiest u voor continuïteit en vertrouwen. Ik ben van begin tot eind uw vaste kraamverzorgende, zodat u niet hoeft te wennen aan verschillende gezichten. Die persoonlijke band maakt uw kraamperiode rustiger en prettiger.",
    ],
    whyTitle: "Waarom kraamzorg in Nieuwerkerk aan den IJssel?",
    whyText: [
      "Nieuwerkerk aan den IJssel trekt steeds meer jonge gezinnen vanwege de rustige, groene woonomgeving en de ruime woningen. De gemeente biedt een perfecte balans tussen stad en land — dicht bij Rotterdam, maar met de rust van het platteland.",
      "Als kraamverzorgende ken ik Nieuwerkerk goed. Ik weet waar de speeltuinen zijn, welke zorgverleners actief zijn in de regio en hoe ik me het beste kan navigeren door de verschillende wijken. Die lokale kennis helpt mij om snel en efficiënt te werken.",
      "Bovendien zijn de gezinnen in Nieuwerkerk aan den IJssel divers — van eerstejaars ouders tot ervaren gezinnen. Ik pas mijn werkwijze altijd aan op uw situatie, zodat u precies de zorg krijgt die u nodig heeft.",
    ],
    aboutTitle: "Over Marley's Kraamzorg in Nieuwerkerk aan den IJssel",
    aboutText: [
      "Marley's Kraamzorg staat voor kwaliteit, warmte en persoonlijke aandacht. Mijn naam is Lisa en ik ben de trotse eigenaresse van dit kleinschalige kraamzorgbedrijf. De naam is afkomstig van mijn dochtertje Marley, die me elke dag inspireert om de beste zorg te verlenen.",
      "In Nieuwerkerk aan den IJssel bied ik een volledig pakket aan kraamzorgdiensten: van de verzorging van uw pasgeboren baby tot het begeleiden van de borstvoeding en het ondersteunen van uw herstel na de bevalling. Alles onder één dak, met één vast gezicht.",
      "Mijn missie is om elke kraamperiode zo rustig en zorgeloos mogelijk te maken. Dat doe ik door betrokken te zijn, door te luisteren en door altijd beschikbaar te zijn voor vragen en ondersteuning. Ook 's nachts, ook in het weekend.",
    ],
    wijkenTitle: "Wijken en bereikbaarheid in Nieuwerkerk aan den IJssel",
    wijkenIntro:
      "Ik werk in alle woonkernen van Nieuwerkerk aan den IJssel. Hieronder een overzicht:",
    wijken: [
      "Dorpskern — Het centrum met karakteristieke woningen en winkels",
      "Huis Ter Noot — Een moderne woonwijk met veel groen",
      "Zuidplaspolder — Rustig wonen in een landelijke omgeving",
      "Oudeland — Een gezellige buurt nabij scholen en voorzieningen",
      "Noord — Ruime woningen met tuinen, ideaal voor gezinnen",
    ],
    faq: [
      {
        question: "Ben je beschikbaar voor kraamzorg in Nieuwerkerk aan den IJssel?",
        answer: "Ja, ik werk regelmatig in Nieuwerkerk aan den IJssel en ben beschikbaar voor kraamzorg in alle wijken van de gemeente. Neem contact op om mijn beschikbaarheid te bespreken.",
      },
      {
        question: "Hoe lang duurt de aanrijdtijd naar Nieuwerkerk?",
        answer: "Vanuit Rotterdam ben ik doorgaans binnen 25 tot 35 minuten in Nieuwerkerk aan den IJssel. Via de A20 en de N219 is de gemeente goed bereikbaar.",
      },
      {
        question: "Welke verloskundigen zijn er in Nieuwerkerk?",
        answer: "In Nieuwerkerk aan den IJssel zijn verschillende verloskundigenpraktijken actief. Ik werk samen met onder meer Verloskundigen aan de Schie en IVE Verloskundigen. Samen zorgen we voor een soepele overgang van de bevalling naar de kraamperiode.",
      },
      {
        question: "Kan ik een kennismaking aanvragen in Nieuwerkerk?",
        answer: "Zeker! Ik kom graag bij u thuis in Nieuwerkerk aan den IJssel voor een vrijblijvende kennismaking. We bespreken uw wensen en ik beantwoord al uw vragen. Dit is volledig gratis en vrijblijvend.",
      },
    ],
    gradient: "linear-gradient(135deg, rgba(154,30,97,0.1) 0%, rgba(120,60,90,0.08) 50%, rgba(245,200,216,0.18) 100%)",
  },

  {
    slug: "krimpen-aan-den-ijssel",
    naam: "Krimpen aan den IJssel",
    metaTitle: "Kraamzorg Krimpen aan den IJssel | Persoonlijk & Vast Gezicht | Marley's Kraamzorg",
    metaDescription:
      "Zoekt u kraamzorg in Krimpen aan den IJssel? Marley's Kraamzorg biedt persoonlijke begeleiding met één vast contactpersoon. Betrokken, ervaren & 24/7 bereikbaar.",
    heroH1: "Kraamzorg Krimpen aan den IJssel | Marley's Kraamzorg",
    heroSubtitle: "Persoonlijke kraamzorg met 1 vast gezicht in Krimpen aan den IJssel",
    intro: [
      "Welkom bij Marley's Kraamzorg — uw adres voor persoonlijke kraamzorg in Krimpen aan den IJssel. Ik ben Lisa, een ervaren kraamverzorgende die met hart en ziel werkt aan een warme, zorgzame start voor elk gezin. In Krimpen aan den IJssel ben ik een vertrouwd gezicht voor aanstaande ouders.",
      "Krimpen aan den IJssel is een gemeente met een rijke historie en een warme, dorpsgezellige sfeer. De ligging aan de Hollandse IJssel maakt het een unieke plek om te wonen en een gezin te stichten. Als kraamverzorgende geniet ik van de rust en ruimte die Krimpen biedt aan jonge gezinnen.",
      "Bij Marley's Kraamzorg draait alles om persoonlijke aandacht. U krijgt bij mij geen wisselende verzorgenden, maar één vast gezicht dat u door de hele kraamperiode heen begeleidt. Dat schept vertrouwen, rust en een hechte band tijdens deze kostbare dagen.",
    ],
    whyTitle: "Waarom kraamzorg in Krimpen aan den IJssel?",
    whyText: [
      "Krimpen aan den IJssel is een gemeente die steeds populairder wordt bij jonge gezinnen. De ruime woningen, de groene omgeving en de centrale ligging tussen Rotterdam en Gouda maken het een ideale woonplaats. Als kraamverzorgende zie ik hier een groeiende vraag naar persoonlijke, kleinschalige kraamzorg.",
      "De gemeente heeft een hechte community, waar mensen elkaar kennen en omzien naar elkaar. Die sfeer past perfect bij mijn werkwijze. Ik werk niet alleen professioneel, maar ook vanuit een warme, menselijke verbinding met het gezin waar ik mag komen.",
      "In Krimpen aan den IJssel werk ik samen met lokale verloskundigen en zorgverleners. Deze samenwerking zorgt ervoor dat u een ononderbroken zorglijn heeft — van de zwangerschap tot na de kraamperiode. Dat geeft rust en zekerheid.",
    ],
    aboutTitle: "Over Marley's Kraamzorg in Krimpen aan den IJssel",
    aboutText: [
      "Mijn naam is Lisa en ik ben de oprichter van Marley's Kraamzorg. De naam is een eerbetoon aan mijn dochtertje Marley, die me elke dag herinnert aan het wonder van nieuw leven. Die liefde en verwondering neem ik mee naar elk gezin in Krimpen aan den IJssel.",
      "Als kraamverzorgende heb ik jarenlange ervaring in de zorg. Ik ben gecertificeerd door het KCKZ (Kraamzorg Certificatie) en werk volgens de hoogste kwaliteitsnormen. Maar bovenal werk ik vanuit mijn hart. Ik geloof dat de beste zorg ontstaat door een combinatie van vakmanschap en menselijke warmte.",
      "In Krimpen aan den IJssel bied ik een compleet kraamzorgpakket aan: verzorging van moeder en baby, begeleiding bij borstvoeding, huishoudelijke ondersteuning en emotionele steun. Alles afgestemd op uw persoonlijke situatie en wensen.",
    ],
    wijkenTitle: "Wijken en bereikbaarheid in Krimpen aan den IJssel",
    wijkenIntro:
      "Ik werk in alle wijken van Krimpen aan den IJssel. Hieronder het overzicht:",
    wijken: [
      "Krimpen-Centrum — Het hart van de gemeente met winkels en voorzieningen",
      "Stormpolder — Een groene, rustige wijk aan de rand van het dorp",
      "Zeemanshof — Moderne woningen nabij de IJssel",
      "IJsselmonde — Karakteristieke wijk met diverse woningtypen",
      "De Hoek — Landelijk wonen met weids uitzicht",
    ],
    faq: [
      {
        question: "Ben je beschikbaar in Krimpen aan den IJssel?",
        answer: "Ja, ik werk regelmatig in Krimpen aan den IJssel en ben beschikbaar voor kraamzorg in alle wijken van de gemeente. Neem vrijblijvend contact op om de mogelijkheden te bespreken.",
      },
      {
        question: "Hoe snel ben je in Krimpen aan den IJssel?",
        answer: "Vanuit Rotterdam ben ik doorgaans binnen 20 tot 30 minuten in Krimpen aan den IJssel. De gemeente is goed bereikbaar via de A16 en de N210.",
      },
      {
        question: "Met welke verloskundigen werk je samen in Krimpen?",
        answer: "In Krimpen aan den IJssel werk ik samen met verschillende verloskundigenpraktijken uit de regio, waaronder Verloskundigen aan de Schie. We stemmen de zorg goed op elkaar af voor een soepele overgang.",
      },
      {
        question: "Kan ik een kennismaking inplannen in Krimpen?",
        answer: "Absoluut! Ik kom graag bij u thuis in Krimpen aan den IJssel voor een vrijblijvende kennismaking. We bespreken uw wensen, ik leg mijn werkwijze uit en u kunt alle vragen stellen die u heeft.",
      },
    ],
    gradient: "linear-gradient(135deg, rgba(100,40,70,0.12) 0%, rgba(154,30,97,0.08) 50%, rgba(200,180,160,0.15) 100%)",
  },

  {
    slug: "gouda",
    naam: "Gouda",
    metaTitle: "Kraamzorg Gouda | Persoonlijk met 1 Vast Gezicht | Marley's Kraamzorg",
    metaDescription:
      "Kraamzorg in Gouda gezocht? Marley's Kraamzorg biedt persoonlijke, betrokken kraamzorg. Eén vast gezicht in centrum, Oosterwei, Bloemendaal & meer. Aanmelden.",
    heroH1: "Kraamzorg Gouda | Marley's Kraamzorg",
    heroSubtitle: "Persoonlijke kraamzorg met 1 vast gezicht in Gouda en omgeving",
    intro: [
      "Op zoek naar warme, persoonlijke kraamzorg in Gouda? Marley's Kraamzorg is er voor aanstaande ouders in de stad van de stroopwafels en de prachtige Sint-Janskerk. Ik ben Lisa en ik begeleid u graag tijdens uw kraamperiode in Gouda.",
      "Gouda is een historische stad met een rijk verleden en een bruisend heden. De stad trekt steeds meer jonge gezinnen vanwege de centrale ligging, de karakteristieke binnenstad en de uitstekende voorzieningen. Als kraamverzorgende voel ik me thuis in Gouda en ken ik de stad en haar inwoners goed.",
      "Met Marley's Kraamzorg kiest u voor een unieke ervaring: één vast gezicht, persoonlijke aandacht en professionele zorg. Van de eerste dag tot de laatste ben ik er voor u, uw baby en uw gezin.",
    ],
    whyTitle: "Waarom kraamzorg in Gouda?",
    whyText: [
      "Gouda is een stad die perfect balans biedt tussen historische charme en moderne leefbaarheid. De binnenstad met zijn grachten en monumentale panden is adembenemend, terwijl de nieuwere wijken ruimte en comfort bieden voor gezinnen. Als kraamverzorgende kan ik hier mijn werk optimaal uitvoeren.",
      "De gemeente Gouda investeert veel in jonge gezinnen. Er zijn uitstekende speeltuinen, kindvriendelijke wijken en diverse zorgvoorzieningen. Ik werk samen met verloskundigen en zorgverleners in de regio om u de best mogelijke zorg te bieden.",
      "Bovendien is Gouda centraal gelegen in de Randstad. Dat maakt het voor mij als kraamverzorgende makkelijk om snel ter plaatse te zijn, ongeacht in welke wijk u woont. Van de binnenstad tot de nieuwbouwwijken — ik kom overal.",
    ],
    aboutTitle: "Over Marley's Kraamzorg in Gouda",
    aboutText: [
      "Marley's Kraamzorg is een kleinschalig kraamzorgbedrijf met een groot hart. Ik ben Lisa, eigenaar en kraamverzorgende, en ik doe mijn werk met passie en toewijding. De naam Marley's is afkomstig van mijn dochtertje, die me inspireert om elke kraamperiode zo mooi mogelijk te maken.",
      "In Gouda bied ik een compleet pakket aan kraamzorgdiensten. Van de verzorging van uw pasgeboren baby tot het begeleiden van borstvoeding, van huishoudelijke hulp tot emotionele ondersteuning. Alles onder één dak, met één vertrouwd gezicht.",
      "Mijn werkwijze kenmerkt zich door persoonlijke aandacht en betrokkenheid. Ik neem de tijd voor u, luister naar uw verhaal en pas mijn zorg aan op wat u nodig heeft. Geen standaardpakketten, maar maatwerk.",
    ],
    wijkenTitle: "Wijken en bereikbaarheid in Gouda",
    wijkenIntro:
      "Ik werk in alle wijken van Gouda. Hieronder een overzicht van de belangrijkste gebieden:",
    wijken: [
      "Centrum — De historische binnenstad met grachten en monumentale panden",
      "Oosterwei — Een groene, kindvriendelijke wijk met veel voorzieningen",
      "Bloemendaal — Een ruime woonwijk nabij winkels en scholen",
      "Goverwelle — Moderne woningen in een rustige omgeving",
      "Korte Akkeren — Karakteristieke wijk met diverse woningtypen",
      "Plaswijck — Nabij de Goudse Plassen, groen en waterrijk",
      "Westergouwe — Nieuwbouwwijk met moderne architectuur",
    ],
    faq: [
      {
        question: "Werk je in alle wijken van Gouda?",
        answer: "Ja, ik werk in alle wijken van Gouda — van het centrum en Oosterwei tot Bloemendaal, Goverwelle en Westergouwe. Waar u ook woont in Gouda, ik kom graag naar u toe.",
      },
      {
        question: "Hoe snel ben je in Gouda?",
        answer: "Vanuit Rotterdam ben ik doorgaans binnen 25 tot 35 minuten in Gouda. Via de A20 en de A12 is de stad goed bereikbaar. Bij spoed kan ik sneller ter plaatse zijn.",
      },
      {
        question: "Met welke verloskundigen werk je samen in Gouda?",
        answer: "In Gouda werk ik samen met verschillende verloskundigenpraktijken uit de regio, waaronder IVE Verloskundigen en VIVE Verloskundigen. We werken nauw samen voor een soepele overgang van bevalling naar kraamperiode.",
      },
      {
        question: "Kan ik een kennismaking aanvragen in Gouda?",
        answer: "Zeker! Ik kom graag bij u thuis in Gouda voor een vrijblijvende kennismaking. We bespreken uw wensen en ik leg mijn werkwijze uit. Dit is volledig gratis en zonder verplichtingen.",
      },
    ],
    gradient: "linear-gradient(135deg, rgba(154,30,97,0.18) 0%, rgba(74,26,61,0.1) 50%, rgba(232,213,196,0.2) 100%)",
  },

  {
    slug: "waddinxveen",
    naam: "Waddinxveen",
    metaTitle: "Kraamzorg Waddinxveen | Persoonlijk & Betrokken | Marley's Kraamzorg",
    metaDescription:
      "Kraamzorg in Waddinxveen nodig? Marley's Kraamzorg biedt persoonlijke zorg met één vast gezicht. Voor centrum, Noord, Zuid & Lange Akkeren. Direct contact.",
    heroH1: "Kraamzorg Waddinxveen | Marley's Kraamzorg",
    heroSubtitle: "Persoonlijke kraamzorg met 1 vast gezicht in Waddinxveen",
    intro: [
      "Zoekt u naar persoonlijke, betrokken kraamzorg in Waddinxveen? Bij Marley's Kraamzorg staat u centraal. Ik ben Lisa, een ervaren kraamverzorgende die met liefde en expertise werkt in Waddinxveen en omgeving.",
      "Waddinxveen is een groene gemeente met een prettige, rustige sfeer. De ligging tussen Gouda, Rotterdam en Zoetermeer maakt het een populair woonoord voor gezinnen die willen genieten van ruimte en groen, zonder afgelegen te wonen. Als kraamverzorgende werk ik hier graag.",
      "Wanneer u kiest voor Marley's Kraamzorg, kiest u voor kwaliteit en persoonlijke aandacht. Ik ben uw vaste kraamverzorgende van het eerste moment tot het einde van uw kraamperiode. Die continuïteit zorgt voor vertrouwen en rust.",
    ],
    whyTitle: "Waarom kraamzorg in Waddinxveen?",
    whyText: [
      "Waddinxveen biedt een unieke combinatie van groen wonen en stedelijke voorzieningen. De gemeente heeft mooie parken, goede scholen en uitstekende winkelmogelijkheden. Voor jonge gezinnen is het een ideale plek om te wonen en een gezin te stichten.",
      "Als kraamverzorgende waardeer ik de ruimte en rust die Waddinxveen biedt. In een ruime woning met tuin kan ik optimaal zorgen voor moeder en baby. De rustige omgeving draagt bij aan een ontspannen kraamperiode, wat essentieel is voor het herstel.",
      "Bovendien is Waddinxveen goed bereikbaar voor mij. Via de A12 en de A20 ben ik snel ter plaatse. Dat betekent dat ik flexibel kan inzetten en snel kan schakelen als dat nodig is.",
    ],
    aboutTitle: "Over Marley's Kraamzorg in Waddinxveen",
    aboutText: [
      "Marley's Kraamzorg is vernoemd naar mijn dochtertje Marley — een naam die staat voor onvoorwaardelijke liefde en de schoonheid van nieuw leven. Die waarden vormen de basis van mijn werk als kraamverzorgende in Waddinxveen.",
      "Ik ben Lisa en ik heb jarenlange ervaring in de kraamzorg. Mijn werkwijze is kleinschalig en persoonlijk. U krijgt bij mij geen wisselende verzorgenden, maar één vast gezicht dat u kent en vertrouwt.",
      "In Waddinxveen bied ik een breed scala aan kraamzorgdiensten: van medische controles tot huishoudelijke ondersteuning, van borstvoedingsbegeleiding tot emotionele steun. Alles afgestemd op uw specifieke situatie en wensen.",
    ],
    wijkenTitle: "Wijken en bereikbaarheid in Waddinxveen",
    wijkenIntro:
      "Ik werk in alle wijken van Waddinxveen. Hieronder het overzicht:",
    wijken: [
      "Centrum — Het hart van Waddinxveen met winkels en voorzieningen",
      "Noord — Ruime woningen in een groene, kindvriendelijke omgeving",
      "Zuid — Moderne woonwijk met veel speelruimte voor kinderen",
      "Lange Akkeren — Karakteristieke wijk met diverse woningtypen",
      "Triangel — Nieuwbouwwijk met moderne architectuur",
      "Engelse Werk — Rustig wonen nabij groen en water",
    ],
    faq: [
      {
        question: "Ben je beschikbaar voor kraamzorg in Waddinxveen?",
        answer: "Ja, ik werk regelmatig in Waddinxveen en ben beschikbaar voor kraamzorg in alle wijken van de gemeente. Neem contact op om mijn beschikbaarheid te bespreken.",
      },
      {
        question: "Hoe snel ben je in Waddinxveen?",
        answer: "Vanuit Rotterdam ben ik doorgaans binnen 25 tot 35 minuten in Waddinxveen. De gemeente is goed bereikbaar via de A20 en de A12.",
      },
      {
        question: "Welke verloskundigen werken in Waddinxveen?",
        answer: "In Waddinxveen zijn verschillende verloskundigenpraktijken actief. Ik werk samen met onder meer IVE Verloskundigen en VIVE Verloskundigen voor een goede afstemming van zorg.",
      },
      {
        question: "Kan ik een kennismaking plannen in Waddinxveen?",
        answer: "Zeker! Ik kom graag bij u thuis in Waddinxveen voor een vrijblijvende kennismaking. We bespreken uw wensen en ik beantwoord al uw vragen. Dit is volledig gratis.",
      },
    ],
    gradient: "linear-gradient(135deg, rgba(154,30,97,0.08) 0%, rgba(93,50,70,0.12) 50%, rgba(245,200,216,0.12) 100%)",
  },

  {
    slug: "moordrecht",
    naam: "Moordrecht",
    metaTitle: "Kraamzorg Moordrecht | Met 1 Vast Gezicht | Marley's Kraamzorg",
    metaDescription:
      "Kraamzorg in Moordrecht gezocht? Marley's Kraamzorg biedt persoonlijke, betrokken kraamzorg. Eén vast gezicht, flexibel & 24/7 bereikbaar. Meld je aan.",
    heroH1: "Kraamzorg Moordrecht | Marley's Kraamzorg",
    heroSubtitle: "Persoonlijke kraamzorg met 1 vast gezicht in Moordrecht",
    intro: [
      "Welkom bij Marley's Kraamzorg in Moordrecht. Als ervaren kraamverzorgende ben ik trots om ook in dit mooie dorp bij de Hollandse IJssel mijn diensten aan te bieden. Ik ben Lisa en ik kijk ernaar uit om u te begeleiden tijdens deze bijzondere periode.",
      "Moordrecht is een historisch dorp met een warme gemeenschap en een landelijke sfeer. De ligging aan de Hollandse IJssel, nabij Gouda en Rotterdam, maakt het een geliefde woonplaats voor gezinnen die houden van rust en ruimte. Als kraamverzorgende voel ik me hier direct thuis.",
      "Kiest u voor Marley's Kraamzorg, dan kiest u voor persoonlijke zorg van het hoogste niveau. Ik ben uw vaste contactpersoon, van de eerste kennismaking tot het einde van de kraamperiode. Die continuïteit maakt het verschil.",
    ],
    whyTitle: "Waarom kraamzorg in Moordrecht?",
    whyText: [
      "Moordrecht is een dorp met karakter. De historische kern, de ligging aan de wateren en de hechte gemeenschap maken het een bijzondere plek om te wonen. Voor jonge gezinnen biedt Moordrecht ruimte, groen en een veilige omgeving.",
      "Als kraamverzorgende waardeer ik de persoonlijke sfeer in Moordrecht. Hier kennen mensen elkaar en is er aandacht voor elkaar. Dat past bij mijn werkwijze: ik werk niet alleen professioneel, maar ook vanuit een warme menselijke betrokkenheid.",
      "De bereikbaarheid van Moordrecht is uitstekend. Via de A20 en de N457 ben ik snel ter plaatse. Dat is fijn voor u als klant, want het betekent dat ik flexibel kan inspelen op uw wensen en snel beschikbaar ben bij vragen of onverwachte situaties.",
    ],
    aboutTitle: "Over Marley's Kraamzorg in Moordrecht",
    aboutText: [
      "Marley's Kraamzorg is een kleinschalig kraamzorgbedrijf met een groot hart. Ik ben Lisa, eigenaar en kraamverzorgende. De naam van mijn bedrijf is een eerbetoon aan mijn dochtertje Marley, die me elke dag inspireert om het beste uit mezelf te halen.",
      "In Moordrecht bied ik een volledig pakket aan kraamzorgdiensten. Van medische controles van moeder en baby tot praktische hulp in het huishouden, van borstvoedingsbegeleiding tot emotionele ondersteuning. Alles onder één dak, met één vertrouwd gezicht.",
      "Mijn missie is om elke kraamperiode zo mooi en rustig mogelijk te maken. Ik geloof dat de beste zorg ontstaat door een combinatie van vakkennis, ervaring en menselijke warmte. Die balans vindt u bij Marley's Kraamzorg.",
    ],
    wijkenTitle: "Wijken en bereikbaarheid in Moordrecht",
    wijkenIntro:
      "Moordrecht is een compact dorp waar ik in alle wijken werk:",
    wijken: [
      "Dorpskern — Het historische hart van Moordrecht met karakteristieke woningen",
      "Giessendam — Nabij de grens met Giessendam, landelijk en groen",
      "Gouda-zijde — Wonen aan de kant van Gouda met goede verbindingen",
      "IJsseldijk — Prachtige ligging aan de Hollandse IJssel",
      "Nieuwkoop — Moderne woningen in een rustige omgeving",
    ],
    faq: [
      {
        question: "Ben je beschikbaar in Moordrecht?",
        answer: "Ja, ik werk graag in Moordrecht en ben beschikbaar voor kraamzorg in het hele dorp. Neem contact op om mijn beschikbaarheid te bespreken.",
      },
      {
        question: "Hoe snel ben je in Moordrecht?",
        answer: "Vanuit Rotterdam ben ik doorgaans binnen 20 tot 30 minuten in Moordrecht. Het dorp is goed bereikbaar via de A20 en de N457.",
      },
      {
        question: "Met welke verloskundigen werk je samen in Moordrecht?",
        answer: "In Moordrecht werk ik samen met verloskundigen uit de regio, waaronder IVE Verloskundigen en VIVE Verloskundigen. We stemmen de zorg altijd goed op elkaar af.",
      },
      {
        question: "Kan ik een kennismaking aanvragen in Moordrecht?",
        answer: "Absoluut! Ik kom graag bij u thuis in Moordrecht voor een vrijblijvende kennismaking. We bespreken uw wensen en ik leg mijn werkwijze uit. Dit is volledig gratis en vrijblijvend.",
      },
    ],
    gradient: "linear-gradient(135deg, rgba(120,50,80,0.1) 0%, rgba(154,30,97,0.12) 50%, rgba(232,213,196,0.15) 100%)",
  },

  {
    slug: "zevenhuizen",
    naam: "Zevenhuizen",
    metaTitle: "Kraamzorg Zevenhuizen | Persoonlijk & Betrokken | Marley's Kraamzorg",
    metaDescription:
      "Kraamzorg in Zevenhuizen gezocht? Marley's Kraamzorg biedt persoonlijke kraamzorg met één vast gezicht. Betrokken, ervaren & flexibel in Zevenhuizen.",
    heroH1: "Kraamzorg Zevenhuizen | Marley's Kraamzorg",
    heroSubtitle: "Persoonlijke kraamzorg met 1 vast gezicht in Zevenhuizen",
    intro: [
      "Bent u op zoek naar persoonlijke kraamzorg in Zevenhuizen? Marley's Kraamzorg is er voor u. Ik ben Lisa, een gepassioneerde kraamverzorgende die met hart en ziel werkt in Zevenhuizen en omgeving.",
      "Zevenhuizen is een dorp met een landelijke charme, gelegen in de gemeente Lansingerland. De ruime woningen, de groene omgeving en de hechte gemeenschap maken het een ideale plek voor jonge gezinnen. Als kraamverzorgende geniet ik van de rust en ruimte die dit dorp biedt.",
      "Bij Marley's Kraamzorg staat u als gezin centraal. Ik bied kleinschalige, persoonlijke kraamzorg waarbij u één vast gezicht heeft: mij. Van de eerste dag tot de laatste ben ik er voor u, met deskundige zorg en een luisterend oor.",
    ],
    whyTitle: "Waarom kraamzorg in Zevenhuizen?",
    whyText: [
      "Zevenhuizen is een dorp dat steeds populairder wordt bij jonge gezinnen. De ruime, betaalbare woningen, de groene omgeving en de centrale ligging tussen Rotterdam, Den Haag en Gouda maken het een aantrekkelijke woonplaats.",
      "Als kraamverzorgende waardeer ik de landelijke sfeer in Zevenhuizen. Hier is ruimte om te ontspannen, te herstellen en te genieten van de eerste weken met uw baby. De rustige omgeving draagt bij aan een ontspannen kraamperiode.",
      "Bovendien is de gemeenschap in Zevenhuizen hecht en betrokken. Dat voel ik als kraamverzorgende ook — er is altijd wel iemand die een helpende hand biedt. In die sfeer voel ik me thuis en kan ik optimaal mijn werk doen.",
    ],
    aboutTitle: "Over Marley's Kraamzorg in Zevenhuizen",
    aboutText: [
      "Marley's Kraamzorg is een kleinschalig kraamzorgbedrijf met een persoonlijke aanpak. Ik ben Lisa, eigenaar en kraamverzorgende. De naam van mijn bedrijf is een eerbetoon aan mijn dochtertje Marley, die me herinnert aan het wonder van nieuw leven.",
      "In Zevenhuizen bied ik een compleet scala aan kraamzorgdiensten: van medische controles en babyverzorging tot borstvoedingsbegeleiding en huishoudelijke ondersteuning. Alles wordt afgestemd op uw persoonlijke situatie en wensen.",
      "Mijn werkwijze kenmerkt zich door betrokkenheid, deskundigheid en warmte. Ik neem de tijd voor u, luister naar uw vragen en zorg dat u zich gesteund en veilig voelt. Die persoonlijke aandacht maakt het verschil.",
    ],
    wijkenTitle: "Wijken en bereikbaarheid in Zevenhuizen",
    wijkenIntro:
      "Ik werk in alle wijken van Zevenhuizen. Hieronder een overzicht:",
    wijken: [
      "Dorpskern — Het centrum van Zevenhuizen met winkels en voorzieningen",
      "Lansingerland — Moderne woonwijk in de gemeente Lansingerland",
      "Tuindersgebied — Landelijk wonen met grote tuinen en groen",
      "Noord — Ruime woningen in een rustige omgeving",
      "Oost — Nabij het Rottemeren, groen en waterrijk",
    ],
    faq: [
      {
        question: "Ben je beschikbaar in Zevenhuizen?",
        answer: "Ja, ik werk graag in Zevenhuizen en ben beschikbaar voor kraamzorg in alle wijken van het dorp. Neem contact op om mijn beschikbaarheid te bespreken.",
      },
      {
        question: "Hoe snel ben je in Zevenhuizen?",
        answer: "Vanuit Rotterdam ben ik doorgaans binnen 25 tot 35 minuten in Zevenhuizen. Het dorp is goed bereikbaar via de A12 en de N219.",
      },
      {
        question: "Welke verloskundigen zijn er in Zevenhuizen?",
        answer: "In Zevenhuizen en omgeving zijn verschillende verloskundigenpraktijken actief. Ik werk samen met onder meer VIVE Verloskundigen en Verloskundigen aan de Schie voor een goede afstemming van zorg.",
      },
      {
        question: "Kan ik een kennismaking plannen in Zevenhuizen?",
        answer: "Zeker! Ik kom graag bij u thuis in Zevenhuizen voor een vrijblijvende kennismaking. We bespreken uw wensen en ik beantwoord al uw vragen. Dit is volledig gratis en vrijblijvend.",
      },
    ],
    gradient: "linear-gradient(135deg, rgba(154,30,97,0.14) 0%, rgba(74,26,61,0.06) 50%, rgba(200,180,160,0.18) 100%)",
  },
];

export function getWerkgebiedBySlug(slug: string): WerkgebiedData | undefined {
  return werkgebieden.find((w) => w.slug === slug);
}

export function getAllSlugs(): string[] {
  return werkgebieden.map((w) => w.slug);
}

export function getRelatedWerkgebieden(currentSlug: string): WerkgebiedData[] {
  return werkgebieden.filter((w) => w.slug !== currentSlug);
}
