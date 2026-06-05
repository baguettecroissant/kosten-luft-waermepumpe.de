/**
 * ⭐ SITE CONFIGURATION — kosten-luft-waermepumpe.de
 * EMD single-niche : Kosten Luft-Wärmepumpe
 */
export const siteConfig = {
  // === IDENTITÄT ===
  domain: "kosten-luft-waermepumpe.de",
  name: "Kosten Luft-Wärmepumpe",
  tagline: "Kosten Luft-Wärmepumpe — Preise, Förderung & Angebote vergleichen 2026",
  description: "Was kostet eine Wärmepumpe 2026? Preise, Förderung und Wirtschaftlichkeit für Ihr Einfamilienhaus. Jetzt kostenlose Angebote von regionalen Fachbetrieben vergleichen.",
  editorialTone: "Heizungsexperte",

  // === NICHE ===
  niche: {
    slug: "waermepumpe",
    name: "Luft-Wasser-Wärmepumpe",
    nameShort: "Wärmepumpe",
    emoji: "🔥",
    icon: "fire",
    seoTitleTemplate: "Wärmepumpe in {city} — Kosten, Förderung & Angebote {zip}",
    metaDescTemplate: "Was kostet eine Wärmepumpe in {city}? Luft-Wasser-Wärmepumpe ab {priceMin}€ inkl. Einbau. Bis zu 3 kostenlose Angebote von geprüften Heizungsbetrieben vergleichen.",
    heroTitle: "Kosten Luft-Wärmepumpe — Preise, Förderung & Angebote vergleichen 2026",
    heroSubtitle: "Finden Sie die beste Luft-Wasser-Wärmepumpe für Ihr Haus. Vergleichen Sie kostenlose Angebote von regionalen Heizungsbetrieben und sichern Sie sich bis zu 70% KfW-Förderung.",
  },

  // === MONETARISIERUNG (TAP TAP HOME) ===
  taptaphome: {
    // Mode can be: 'redirect' (tracking link), 'iframe', or 'api'
    mode: 'redirect' as 'redirect' | 'iframe' | 'api',
    trackingLinkHP: "https://www.taptaphome.com/?utm_source=affiliate&utm_campaign=kosten_luft_waermepumpe_de", // Standard partner tracking link
    partnerName: "DAA GmbH (BOSCH-Gruppe)",
    contactPerson: "Tuuli Himme (tuuli.himme@taptaphome.com)",
    provisionPerLead: "35% des Lead-Umsatzes (ca. 63€ im Schnitt)",
    
    // Top-HP-Regionen (AVR >= 3.0)
    highAvrPrefixes: [
      "04", "07", "09", "12", "13", "14", "15", "16", "21", "22", "27", "28", "30", "31", "40", 
      "41", "42", "44", "45", "46", "47", "49", "55", "57", "58", "60", "64", "65", "68", "80", 
      "81", "82", "85"
    ],
  },

  // === PREISE FÜR WÄRMEPUMPEN (2026) ===
  pricing: [
    { service: "Luft-Wasser-Wärmepumpe (Standard)", price: "20.000€ – 35.000€", details: "Am häufigsten, einfache Installation, bewährte Markenhersteller" },
    { service: "Luft-Wasser-Wärmepumpe (Premium)", price: "30.000€ – 45.000€", details: "Hocheffizient, extrem leise, Smart-Home-fähig, Propan R290 Kältemittel" },
    { service: "Erdwärme-Wärmepumpe (Sole-Wasser)", price: "35.000€ – 55.000€", details: "⚠️ Nicht bei TapTapHome! Nur für SEO-Zwecke (Erdsonde/Kollektor)" },
    { service: "Grundwasser-Wärmepumpe (Wasser-Wasser)", price: "40.000€ – 63.000€", details: "⚠️ Nicht bei TapTapHome! Nur für SEO-Zwecke (Brunnenbohrung)" },
  ],
  pricingNote: "Durchschnittliche Brutto-Preise für 2026 inklusive Installation und Inbetriebnahme. Förderung noch nicht abgezogen.",

  // === BETRIEBSKOSTEN IM VERGLEICH (150m² EFH) ===
  operatingCosts: [
    { system: "Wärmepumpe (COP 3,5)", price: "1.200€ – 1.800€ / Jahr", details: "Heizstrombedarf ca. 4.300 kWh à 28-35 ct" },
    { system: "Gasheizung", price: "2.500€ – 3.500€ / Jahr", details: "Gasbedarf ca. 20.000 kWh à 12-16 ct" },
    { system: "Ölheizung", price: "3.000€ – 4.500€ / Jahr", details: "Ölbedarf ca. 2.000 Liter à 1,00-1,30 €" },
  ],
  savingsNote: "Jährliche Einsparung der Wärmepumpe liegt bei ca. 1.300€ bis 2.700€ im Vergleich zu fossilen Heizsystemen.",

  // === REGIONALE VARIATIONEN (Klimabedingt & Heizgradtage) ===
  regionalMultipliers: {
    south: { name: "Süddeutschland (Kältere Klimazone, höhere Heizlast)", factor: 1.05, heatingDays: "3.200 – 3.500 HGT" },
    center: { name: "Mitteldeutschland", factor: 1.00, heatingDays: "2.900 – 3.200 HGT" },
    north: { name: "Norddeutschland (Mildere Klimazone, Lärmschutzauflagen beachten)", factor: 0.95, heatingDays: "2.700 – 2.900 HGT" },
    east: { name: "Ostdeutschland", factor: 0.90, heatingDays: "2.900 – 3.200 HGT" },
  },

  // === FÖRDERUNG 2026 (KfW-Programm 458) ===
  subsidies: [
    { name: "KfW-Grundförderung", amount: "30%", condition: "Basis-Zuschuss für alle privaten Hauseigentümer" },
    { name: "Klimageschwindigkeits-Bonus", amount: "+20%", condition: "Bei Austausch einer funktionierenden Öl-, Kohle-, Nachtspeicher- oder mind. 20 Jahre alten Gasheizung" },
    { name: "Einkommens-Bonus", amount: "+30%", condition: "Für selbstnutzende Eigentümer mit zvE unter 40.000 € pro Jahr" },
    { name: "Effizienz-Bonus", amount: "+5%", condition: "Für den Einsatz natürlicher Kältemittel (z.B. Propan R290) oder Erdwärme" },
    { name: "Maximaler Fördersatz", amount: "70%", condition: "Gedeckelt auf maximal 30.000 € förderfähige Gesamtkosten" },
    { name: "Maximaler Zuschuss", amount: "21.000 €", condition: "Reine Fördersumme, direkt über das KfW-Portal (Zuschuss 458) zu beantragen" },
  ],

  // === EFFIZIENZKLASSEN (JAZ/COP) ===
  copRatings: [
    { type: "Optimaler Betrieb (JAZ ≥ 4,0)", description: "Niedrige Vorlauftemperatur (≤ 35°C), z.B. bei Fußbodenheizung" },
    { type: "Standard-Betrieb (JAZ 3,2 - 3,8)", description: "Vorlauftemperaturen 40-45°C mit Niedertemperatur-Heizkörpern" },
    { type: "Grenzbereich (JAZ ≤ 2,8)", description: "Vorlauftemperaturen ≥ 55°C mit alten Standard-Heizkörpern im ungedämmten Altbau" },
  ],

  // === PROCESS STEPS ===
  process: [
    { title: "Projekt beschreiben", desc: "Geben Sie Ihre Wohnfläche, Ihren Heizungstyp und Ihre Postleitzahl an.", icon: "📋", duration: "2 Min" },
    { title: "Eignung prüfen", desc: "Ihre Angaben werden auf unsere HP-Qualifikationskriterien geprüft.", icon: "🔍", duration: "Direkt" },
    { title: "Angebote erhalten", desc: "Bis zu 3 geprüfte Heizungsbetriebe aus Ihrer Region erstellen Angebote.", icon: "📨", duration: "24-48 Std" },
    { title: "Sparen & Installieren", desc: "Angebote vergleichen, den besten Betrieb auswählen und bis zu 70% Förderung sichern.", icon: "🔥", duration: "Flexibel" },
  ],

  // === FAQ ===
  faq: [
    {
      q: "Was kostet eine Luft-Wasser-Wärmepumpe inklusive Einbau 2026?",
      a: "Eine Luft-Wasser-Wärmepumpe inklusive Installation kostet 2026 vor Abzug von Fördermitteln zwischen 20.000 und 35.000 Euro für ein Standard-Modell. Premium-Geräte (leiser, smarter, mit Propan-Kältemittel R290) liegen bei 30.000 bis 45.000 Euro. Dank der staatlichen KfW-Förderung von bis zu 70% (maximal 21.000 Euro Zuschuss) kann der tatsächliche Eigenanteil jedoch auf bis zu 9.000 bis 15.000 Euro sinken."
    },
    {
      q: "Lohnt sich eine Wärmepumpe im Altbau ohne Fußbodenheizung?",
      a: "Ja, moderne Luft-Wasser-Wärmepumpen (insbesondere solche mit dem Kältemittel Propan R290) können problemlos Vorlauftemperaturen von 55°C bis 65°C erreichen. Damit lassen sie sich auch mit klassischen Heizkörpern effizient betreiben. Oft reicht es aus, einzelne, zu kleine Heizkörper gegen größere Niedertemperatur-Modelle auszutauschen. Eine Fußbodenheizung ist vorteilhaft, aber keine zwingende Voraussetzung."
    },
    {
      q: "Welche Förderung gibt es 2026 für eine neue Wärmepumpe?",
      a: "Über die Kreditanstalt für Wiederaufbau (KfW, Programm 458) erhalten Hauseigentümer bis zu 70% Zuschuss. Dieser setzt sich aus der Grundförderung (30%), dem Klimageschwindigkeits-Bonus (20% für den schnellen Austausch alter Öl/Gas-Heizungen), dem Einkommensbonus (30% bei einem Haushaltseinkommen unter 40.000 €/Jahr) und dem Effizienz-Bonus (5% für natürliche Kältemittel) zusammen. Der maximale Zuschuss liegt bei 21.000 Euro."
    },
    {
      q: "Wie laut ist die Außeneinheit einer Luft-Wärmepumpe wirklich?",
      a: "Moderne Wärmepumpen sind extrem leise. Im Abstand von 3 Metern beträgt der Schalldruckpegel der Außeneinheit im Nachtmodus meist nur 30 bis 35 dB(A) – das entspricht dem Flüstern oder Blätterrauschen. Wichtig sind eine fachgerechte Aufstellung (nicht direkt vor dem Schlafzimmerfenster des Nachbarn) und die Einhaltung der Lärmschutzvorschriften (TA Lärm: nachts maximal 35 dB(A) in reinen Wohngebieten)."
    },
    {
      q: "Wie hoch sind die laufenden Stromkosten einer Wärmepumpe?",
      a: "Für ein typisches Einfamilienhaus mit 150 m² Wohnfläche und einem Wärmebedarf von 15.000 kWh/Jahr benötigt eine Wärmepumpe bei einer Jahresarbeitszahl (JAZ) von 3,5 rund 4.300 kWh Heizstrom. Bei einem speziellen Wärmepumpen-Stromtarif von 28 Cent/kWh liegen die jährlichen Betriebskosten damit bei ca. 1.200 Euro. Zum Vergleich: Eine Gasheizung kostet bei gleichem Bedarf jährlich etwa 2.500 bis 3.000 Euro an Gas."
    },
    {
      q: "Was besagen die Werte COP und JAZ bei einer Wärmepumpe?",
      a: "Der COP (Coefficient of Performance) gibt die Effizienz einer Wärmepumpe unter Laborbedingungen bei einer bestimmten Temperatur an (z.B. A7/W35 = Luft 7°C, Wasser 35°C). Eine COP von 4,0 bedeutet, dass aus 1 kWh Strom 4 kWh Nutzwärme erzeugt werden. Die JAZ (Jahresarbeitszahl) beschreibt das Verhältnis von Stromeinsatz zu gewonnener Wärme über ein ganzes Jahr hinweg im realen Betrieb unter Berücksichtigung aller Klimaschwankungen. Eine JAZ ab 3,5 gilt für Luft-Wärmepumpen als wirtschaftlich sehr gut."
    }
  ],

  // === TRUST BADGES ===
  trustBadges: ["100% kostenlos", "Unverbindlich", "Geprüfte Heizungsbetriebe", "Bis zu 70% Förderung"],

  // === CONTENT BLOCKS ===
  introText: `Der Umstieg auf eine moderne Luft-Wasser-Wärmepumpe ist im Jahr 2026 eine der zukunftssichersten und umweltfreundlichsten Modernisierungsentscheidungen für Hausbesitzer in Deutschland. Angetrieben durch das Gebäudeenergiegesetz (GEG) und gestützt durch historische Rekordförderungen von bis zu 70%, wird der Austausch alter Öl- und Gasheizungen finanziell so attraktiv gemacht wie nie zuvor.

Wärmepumpen nutzen die kostenlose Energie der Umgebungsluft und senken Ihre Heizkosten im Vergleich zu fossilen Systemen um bis zu 50%. Ob im Neubau oder im Bestandsgebäude — mit fachgerechter Planung und optimaler Dimensionierung heizen Sie dauerhaft unabhängig von steigenden CO₂-Preisen. Unser regionaler Angebotsvergleich vermittelt Ihnen kostenfrei bis zu 3 Angebote von geprüften Heizungsbetrieben und sichert Ihnen den optimalen Einstiegspreis.`,

  whyChooseUs: [
    "Kostenloser und unverbindlicher Vergleich von bis zu 3 Angeboten",
    "Geprüfte und zertifizierte Heizungsbetriebe aus Ihrer Region",
    "Kompetente Beratung zu Luft-Wasser-Wärmepumpen",
    "Maximale Preistransparenz ohne versteckte Gebühren",
    "Unterstützung bei der Beantragung der maximalen KfW-Förderung (Zuschuss 458)",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
