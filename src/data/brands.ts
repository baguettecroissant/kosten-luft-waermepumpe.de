/**
 * Brands data — 6 leading heat pump manufacturers for 2026
 */
export interface Brand {
  slug: string;
  name: string;
  country: string;
  flag: string;
  positioning: string;
  flagship: string;
  priceRange: string;
  description: string;
  models: { name: string; power: string; price: string; rendement: string; features: string }[];
  pros: string[];
  cons: string[];
  warranty: string;
  sav: string;
  content: string;
}

export const brands: Brand[] = [
  {
    slug: "bosch",
    name: "Bosch Thermotechnik",
    country: "Deutschland",
    flag: "🇩🇪",
    positioning: "Premium / Leise & Effizient (R290)",
    flagship: "Bosch Compress 5800i AW",
    priceRange: "26.000€ – 39.000€ (inkl. Einbau)",
    description: "Bosch gehört zu den führenden Technologiekonzernen weltweit und bietet mit der neuesten Wärmepumpengeneration hocheffiziente, extrem leise und optisch ansprechende Luft-Wasser-Wärmepumpen mit natürlichem Kältemittel R290 (Propan).",
    models: [
      { name: "Bosch Compress 5800i AW (R290)", power: "5 - 12 kW", price: "ab 16.500 € (nur Gerät)", rendement: "COP bis 4.8", features: "Natürliches Kältemittel, extrem leise (Silent Mode), integrierter Speicher im Innenturm" },
      { name: "Bosch Compress 3000 AWS (Split)", power: "4 - 15 kW", price: "ab 11.000 € (nur Gerät)", rendement: "COP bis 4.2", features: "Split-Wärmepumpe für kleinere Grundstücke und budgetbewusste Sanierungen" },
    ],
    pros: [
      "Verwendet zukunftssicheres, natürliches Kältemittel R290 (Propan)",
      "Extrem leise im Betrieb — nur 28,5 dB(A) in 3 Metern Entfernung im Nachtmodus",
      "Hervorragendes Design und kompakte Abmessungen des Innenturms",
      "Erhöhter KfW-Förderbonus (+5% Effizienz-Bonus) voll anrechenbar",
      "Sehr dichtes Netz an zertifizierten Servicepartnern in ganz Deutschland",
    ],
    cons: [
      "Hohes Gewicht der Außeneinheit erschwert die Montage bei schwierigem Zugang",
      "Premium-Preisklasse, insbesondere bei den Design-Modellen (i-Serie)",
    ],
    warranty: "5 Jahre Systemgarantie bei Inbetriebnahme durch den Bosch-Kundendienst oder einen zertifizierten Fachpartner.",
    sav: "Deutschlandweiter Werkskundendienst der Bosch Thermotechnik GmbH. Schnelle Unterstützung und Ersatzteilverfügbarkeit über DAA/Bosch-Partner.",
    content: `<p>Die <strong>Bosch Thermotechnik GmbH</strong> ist ein führender europäischer Hersteller von Ressourcen schonenden Heizungsprodukten und Warmwasserlösungen. Unter den Marken Bosch und Buderus bietet der Konzern modernste Heiztechnik auf höchstem Niveau.</p>
    
    <h2>Die Compress-Serie mit Propan R290</h2>
    <p>Mit der Serie <strong>Compress 5800i AW</strong> hat Bosch einen Meilenstein gesetzt. Durch das natürliche Kältemittel Propan R290 ist die Wärmepumpe nicht nur extrem umweltfreundlich (GWP = 3), sondern erreicht auch mühelos Vorlauftemperaturen von bis zu 75°C. Damit eignet sie sich perfekt für die Sanierung im Altbau mit bestehenden Heizkörpern.</p>
    
    <p>Zudem ist das Gerät eine der leisesten Wärmepumpen am Markt. Durch ein optimiertes Schallschutzkonzept (Schall-Diffusor-System) ist das Außengerät im Nachtmodus kaum hörbar und kann somit auch in engen Reihenhaussiedlungen problemlos aufgestellt werden.</p>

    <h2>Förderung maximieren</h2>
    <p>Dank des R290 Kältemittels qualifiziert sich die Bosch Compress 5800i AW für den zusätzlichen <strong>5% Effizienz-Bonus</strong> der KfW-Förderung. Hauseigentümer erhalten so bis zu 55% (bzw. maximal 70% mit Einkommensbonus) der Anschaffungskosten erstattet.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Bosch Wärmepumpen sind eine exzellente Allround-Wahl für alle, die eine <strong>zukunftssichere, leise und hocheffiziente Heizung</strong> suchen und Wert auf den schnellen Werkskundendienst eines deutschen Großkonzerns legen.</p>`
  },
  {
    slug: "viessmann",
    name: "Viessmann Climate Solutions",
    country: "Deutschland",
    flag: "🇩🇪",
    positioning: "Premium / Sektorenkopplung & Smart Grid",
    flagship: "Viessmann Vitocal 250-A",
    priceRange: "28.000€ – 43.000€ (inkl. Einbau)",
    description: "Viessmann ist ein deutsches Traditionsunternehmen und Technologieführer bei Heizsystemen. Die Vitocal-Wärmepumpen zeichnen sich durch höchste Konnektivität, optisch ansprechende Außeneinheiten und spezielle Eignung für den Heizkörper-Betrieb aus.",
    models: [
      { name: "Viessmann Vitocal 250-A (R290)", power: "2.6 - 13.4 kW", price: "ab 17.500 € (nur Gerät)", rendement: "COP bis 5.0", features: "Hocheffizient, Vorlauf bis 70°C, integriertes OptiPerform-Hydrauliksystem" },
      { name: "Viessmann Vitocal 200-A", power: "3.2 - 14.7 kW", price: "ab 12.000 € (nur Gerät)", rendement: "COP bis 4.4", features: "Modulierende Luft-Wasser-Wärmepumpe mit bewährter Scroll-Technik" },
    ],
    pros: [
      "Herausragende Vorlauftemperatur von 70°C selbst bei -10°C Außentemperatur",
      "OptiPerform-Hydraulik spart Zeit bei der Montage und reduziert den Platzbedarf im Haus",
      "Umfassende Sektorenkopplung über Viessmann One Base (Photovoltaik, Speicher, WP)",
      "Sehr leiser Betrieb der Außeneinheit dank Advanced Acoustic Design (AAD)",
      "R290 Kältemittel sichert vollen KfW-Effizienz-Bonus",
    ],
    cons: [
      "Sehr hohes Preisniveau in Anschaffung und Zubehör",
      "Eigene Steuerung (Viessmann One Base) erfordert Einarbeitungszeit für den Installateur",
    ],
    warranty: "5 Jahre Herstellergarantie bei Konnektivierung (Online-Verbindung) und Inbetriebnahme durch zertifizierten Partner.",
    sav: "Herausragender Kundendienst der Viessmann Deutschland GmbH mit bundesweitem Servicenetzwerk und digitaler Fernüberwachung.",
    content: `<p>Die <strong>Viessmann Group</strong> ist einer der international führenden Hersteller von Heiz-, Industrie- und Kühlsystemen. Seit 2024 gehört die Sparte Climate Solutions zu Carrier, die Produktion und Entwicklung verbleiben jedoch unter der gewohnten deutschen Markenleitung.</p>
    
    <h2>Vitocal 250-A: Der Altbau-Spezialist</h2>
    <p>Die <strong>Vitocal 250-A</strong> wurde speziell für die Modernisierung von bestehenden Ein- und Zweifamilienhäusern entwickelt. Dank der patentierten Hydraulik <strong>OptiPerform</strong> und der Nutzung von Propan R290 kann das System ohne Pufferspeicher direkt an die bestehenden Heizkörper angeschlossen werden. Die Vorlauftemperatur von bis zu 70°C garantiert wohlige Wärme auch an eisigen Wintertagen.</p>
    
    <p>Mit der App ViCare und der One Base Steuerung lässt sich die Wärmepumpe nahtlos mit einer Viessmann Vitocharge Photovoltaik-Batterie koppeln. Der hauseigene Energiemanager optimiert dann den Betrieb automatisch basierend auf dem PV-Ertrag und dem aktuellen Wetterbericht.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Wenn Sie eine <strong>Altbausanierung planen und bestehende Heizkörper weiternutzen möchten</strong>, ist die Viessmann Vitocal 250-A die technisch führende Lösung am Markt. Die hohe Konnektivität macht das System ideal für smarte Eigenheime.</p>`
  },
  {
    slug: "vaillant",
    name: "Vaillant",
    country: "Deutschland",
    flag: "🇩🇪",
    positioning: "Premium / R290 Pionier",
    flagship: "Vaillant aroTHERM plus",
    priceRange: "27.000€ – 40.000€ (inkl. Einbau)",
    description: "Vaillant aus Remscheid ist ein weltweiter Marktführer im Bereich Heiztechnik. Mit der aroTHERM plus gehört Vaillant zu den Pionieren beim Einsatz des umweltfreundlichen Kältemittels Propan R290 und bietet ein exzellentes Preis-Leistungs-Verhältnis im Premium-Segment.",
    models: [
      { name: "Vaillant aroTHERM plus VWL", power: "3 - 12 kW", price: "ab 14.800 € (nur Gerät)", rendement: "COP bis 4.8", features: "Monoblock-System, R290, hohe Effizienz, einfache Fundament-Installation" },
      { name: "Vaillant aroTHERM Split VWL", power: "3 - 15 kW", price: "ab 11.500 € (nur Gerät)", rendement: "COP bis 4.3", features: "Split-Wärmepumpe mit R410A für flexible Leitungsführung" },
    ],
    pros: [
      "Herausragender Pionier bei R290 Propan — seit Jahren erprobte Technik ohne Kinderkrankheiten",
      "Sehr kompakter und unauffälliger Außenteil",
      "Flüsterleiser Betrieb (Sound Safe System) — ideal für dichte Wohnbebauung (32 dB(A) in 3m)",
      "Effizienzklasse A+++ bei Vorlauftemperatur 35°C",
      "Hervorragende Kombination mit dem Regler sensoCOMFORT",
    ],
    cons: [
      "Bedingt durch extrem hohe Nachfrage zeitweise längere Lieferzeiten",
      "Hydrauliktower im Haus benötigt Stellfläche",
    ],
    warranty: "5 Jahre Werksgarantie bei Abschluss eines Wartungsvertrags oder Installation durch einen zertifizierten Vaillant-Fachpartner.",
    sav: "Deutschlandweiter Vaillant-Kundendienst mit schnellem Vor-Ort-Service und Ersatzteilgarantie.",
    content: `<p>Die <strong>Vaillant Group</strong> ist ein familiengeführtes Unternehmen mit über 150 Jahren Tradition in Remscheid. Vaillant gilt als Wegbereiter für grüne Heiztechnologien und hat den Markt für Propan-Wärmepumpen in Europa maßgeblich geprägt.</p>
    
    <h2>aroTHERM plus: Bewährter Marktführer</h2>
    <p>Die <strong>aroTHERM plus</strong> ist eine der am häufigsten installierten Luft-Wasser-Wärmepumpen in Deutschland. Als Monoblock-Wärmepumpe befindet sich der komplette Kältekreis in der Außeneinheit. Das bedeutet: Zum Haus müssen nur wasserführende Rohre verlegt werden, was die Installation vereinfacht und keinen Kälteschein für den Monteur erfordert.</p>
    
    <p>Das Kältemittel R290 sorgt für Vorlauftemperaturen von bis zu 75°C. Die Effizienz (COP = 4,8 bei A7/W35) gehört zur absoluten Spitzenklasse. Durch das bewährte Sound Safe System ist die Außeneinheit nachts flüsterleise.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Die Vaillant aroTHERM plus ist die <strong>sicherste Bank unter den Wärmepumpen</strong>. Wer ein ausgereiftes, millionenfach installiertes System von einem der renommiertesten deutschen Hersteller sucht, macht hier alles richtig.</p>`
  },
  {
    slug: "buderus",
    name: "Buderus",
    country: "Deutschland",
    flag: "🇩🇪",
    positioning: "Premium / Robustheit & Systemintegration",
    flagship: "Buderus Logatherm WLW196i",
    priceRange: "25.000€ – 38.000€ (inkl. Einbau)",
    description: "Buderus ist die Traditionsmarke im Heizungsbau und gehört zur Bosch-Gruppe. Die Logatherm-Wärmepumpen zeichnen sich durch robuste Industriequalität, edles Glas-Design und perfekte Kombinierbarkeit mit Gas-Hybrid-Systemen aus.",
    models: [
      { name: "Buderus Logatherm WLW196i AR", power: "6 - 14 kW", price: "ab 15.000 € (nur Gerät)", rendement: "COP bis 4.7", features: "Titanium-Glas-Design, modulierend, SG Ready (Smart Grid)" },
      { name: "Buderus Logatherm WLW186i (R290)", power: "4 - 12 kW", price: "ab 15.500 € (nur Gerät)", rendement: "COP bis 4.6", features: "Kompakt, optimiert für Sanierung, leise Außeneinheit" },
    ],
    pros: [
      "Extrem robustes Gehäuse mit kratzresistentem und modernem Titanium-Glas-Design",
      "Hervorragende Systemintegration mit Buderus Kesseln, Solaranlagen und Speichern",
      "Benutzerfreundliches Regelsystem Logamatic EMS plus mit großem Farbdisplay",
      "Natürliches Kältemittel R290 in der 186i-Serie für vollen KfW-Förderbonus",
      "Starker Bosch/Buderus-Kundendienst im Hintergrund",
    ],
    cons: [
      "Die WLW196i-Serie nutzt teilweise noch R410A Kältemittel (achten Sie auf die R290 Modelle)",
      "Vergleichsweise große Abmessungen der Inneneinheiten",
    ],
    warranty: "5 Jahre Systemgarantie auf alle Komponenten, wenn das komplette System von Buderus bezogen wird.",
    sav: "Hervorragender Buderus-Werkskundendienst mit über 50 Niederlassungen in ganz Deutschland für schnellen Vor-Ort-Support.",
    content: `<p>Die <strong>Buderus Deutschland GmbH</strong> mit Sitz in Wetzlar blickt auf eine fast 300-jährige Geschichte zurück. Heute steht die Marke Buderus innerhalb der Bosch-Gruppe für hochentwickelte Systemkompetenz bei Heizungsanlagen für Wohn- und Gewerbegebäude.</p>
    
    <h2>Buderus Logatherm: Die Kraft im System</h2>
    <p>Buderus Wärmepumpen wie die <strong>Logatherm WLW186i</strong> wurden speziell für die einfache Sektorenkopplung entwickelt. Die Steuerung Logamatic RC310 regelt das gesamte Heizsystem — egal ob reine Wärmepumpe, Solarthermie zur Warmwasserunterstützung oder ein Hybrid-System mit einem bestehenden Buderus Gas-Brennwertkessel.</p>
    
    <p>Das markante Design mit der kratzfesten Titanium-Glas-Front der Inneneinheiten ist ein optisches Highlight in jedem Hauswirtschaftsraum. Durch die R290 Propan-Technik eignen sich die neuen Modelle hervorragend für den Heizkörper-Betrieb im Bestand.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Buderus ist die ideale Wahl für Hausbesitzer, die <strong>robuste Heizungstechnik und ein ausgereiftes Regelsystem</strong> suchen, oder eine bestehende Buderus-Heizung zu einem Hybrid-System erweitern möchten.</p>`
  },
  {
    slug: "stiebel-eltron",
    name: "Stiebel Eltron",
    country: "Deutschland",
    flag: "🇩🇪",
    positioning: "Premium / Der reine Wärmepumpen-Spezialist",
    flagship: "Stiebel Eltron HPA-O Premium",
    priceRange: "26.000€ – 40.000€ (inkl. Einbau)",
    description: "Stiebel Eltron aus Holzminden ist ein Pionier der deutschen Wärmepumpentechnik und fokussiert sich seit 1976 konsequent auf erneuerbare Energien. Die HPA-O-Reihe gehört zu den effizientesten Systemen am Markt.",
    models: [
      { name: "Stiebel Eltron HPA-O 08 CS Premium", power: "3 - 8 kW", price: "ab 16.000 € (nur Gerät)", rendement: "COP bis 4.9", features: "Inverter-Technologie, R290 Kältemittel, Premium-Schallschutz" },
      { name: "Stiebel Eltron WPL-A 07 HK 230 Premium", power: "3 - 7 kW", price: "ab 15.200 € (nur Gerät)", rendement: "COP bis 4.8", features: "Monoblock für Heizen und Kühlen im Neubau und Sanierung" },
    ],
    pros: [
      "Echte jahrzehntelange Spezialisierung auf Wärmepumpen — keine Gas-Historie",
      "Herausragende Effizienzwerte (JAZ oft über 4,2 im Altbau)",
      "Invertersteuerung regelt die Leistung stufenlos exakt nach dem aktuellen Bedarf",
      "Premium-Schallschutzkonstruktion sorgt für einen extrem ruhigen Lauf",
      "Umfangreiches Zubehör wie integrierte Lüftungsanlagen und Warmwasserspeicher",
    ],
    cons: [
      "Eher funktionale, industrielle Optik der Außengeräte",
      "Aufgrund des hohen Fokus auf Wärmepumpen in Boom-Zeiten teils überlasteter Kundenservice",
    ],
    warranty: "5 Jahre Herstellergarantie bei Registrierung und Durchführung der jährlichen Wartung durch Fachpartner.",
    sav: "Zentraler Kundendienst in Holzminden mit regionalen Servicetechnikern. Dichtes Partnernetzwerk im SHK-Handwerk.",
    content: `<p>Die <strong>Stiebel Eltron GmbH & Co. KG</strong> ist ein deutsches Familienunternehmen im Bereich Haus- und Systemtechnik. Anders als viele Wettbewerber stieg Stiebel Eltron bereits Mitte der 1970er Jahre in die Wärmepumpenforschung ein und hat die Technologie konsequent weiterentwickelt.</p>
    
    <h2>HPA-O Premium: Deutsche Ingenieurskunst</h2>
    <p>Die <strong>HPA-O Premium-Serie</strong> wurde für anspruchsvolle klimatische Bedingungen entwickelt und liefert selbst bei frostigen Außentemperaturen von bis zu -20°C hocheffizient Wärme. Durch den Einsatz moderner Inverter-Technologie passt sich der Verdichter stets dem tatsächlichen Wärmebedarf an, was den Stromverbrauch minimiert und die Lebensdauer erhöht.</p>
    
    <p>Stiebel Eltron bietet zudem integrierte Kombisysteme an, die Heizung, Warmwasserbereitung und kontrollierte Wohnraumlüftung mit Wärmerückgewinnung in einem einzigen kompakten Gerät vereinen (z.B. LWZ-Serie für den Neubau).</p>

    <h2>Unsere Empfehlung</h2>
    <p>Für Hausbesitzer, die <strong>maximale Effizienzdaten und ausgereifte, langzeiterprobte Technik</strong> von einem reinen Öko-Heizungs-Spezialisten suchen, ist Stiebel Eltron die erste Adresse.</p>`
  },
  {
    slug: "nibe",
    name: "Nibe Systemtechnik",
    country: "Schweden",
    flag: "🇸🇪",
    positioning: "Premium / Nordische Effizienz & Smart-Home-Pionier",
    flagship: "NIBE S2125",
    priceRange: "27.000€ – 42.000€ (inkl. Einbau)",
    description: "Nibe ist der führende Wärmepumpenhersteller Nordeuropas. Die schwedischen Systeme sind für extreme Kälte ausgelegt, bieten unschlagbare COP-Werte und steuern sich intelligent nach Wetterprognosen und Stromtarifen.",
    models: [
      { name: "NIBE S2125 (R290)", power: "3.5 - 12 kW", price: "ab 16.800 € (nur Gerät)", rendement: "COP bis 5.2", features: "Skandinavien-erprobt, extrem leise, Smart-Home-Einbindung, R290" },
      { name: "NIBE F2120", power: "3.5 - 16 kW", price: "ab 14.500 € (nur Gerät)", rendement: "COP bis 5.0", features: "Modulierendes Monoblock-System mit hervorragendem SCOP" },
    ],
    pros: [
      "Herausragende COP-Werte von bis zu 5,2 — skandinavische Spitzentechnologie",
      "Getestet im schwedischen Winter bei Temperaturen bis -25°C",
      "Smart-Grid-Ready und automatische Optimierung basierend auf stündlichen Börsenstrompreisen",
      "Sehr ansprechendes, nordisch-minimalistisches Design der Außeneinheiten",
      "Sehr hoher Warmwasserkomfort durch optimierte Ladezyklen",
    ],
    cons: [
      "Garantieabwicklungen und Ersatzteile über Importstrukturen teils langwieriger",
      "Höheres Preisniveau, Zubehörteile vergleichsweise teuer",
    ],
    warranty: "5 Jahre Herstellergarantie bei Montage durch einen zertifizierten Nibe-Effizienzpartner.",
    sav: "Deutsches Servicezentrum der NIBE Systemtechnik GmbH in Celle. Technischer Support erfolgt meist über Partner-Fachbetriebe.",
    content: `<p>Die <strong>NIBE Industrier AB</strong> ist der größte Wärmepumpenhersteller Nordeuropas mit Hauptsitz in Markaryd, Schweden. In den skandinavischen Ländern gehören Wärmepumpen seit Jahrzehnten zum Standard, weshalb Nibe über einen immensen Erfahrungsschatz verfügt.</p>
    
    <h2>NIBE S2125: Das skandinavische Effizienzwunder</h2>
    <p>Die Luft-Wasser-Wärmepumpe <strong>NIBE S2125</strong> erreicht einen SCOP (saisonaler COP) von über 5,0. Das bedeutet, sie macht aus einer Kilowattstunde Strom im Jahresdurchschnitt mehr als fünf Kilowattstunden Nutzwärme. Das Gerät arbeitet mit dem natürlichen Kältemittel R290 und liefert eine Vorlauftemperatur von bis zu 75°C.</p>
    
    <p>Einzigartig ist die smarte Steuerung der S-Serie: Über das System <strong>myUplink</strong> kann die Wärmepumpe nicht nur das Wetter prognostizieren, sondern ist auch in der Lage, sich an dynamische Stromtarife (wie z. B. von Tibber) anzupassen. Sie heizt dann bevorzugt in den Stunden, in denen der Strom an der Börse besonders günstig oder sogar kostenlos ist.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Nibe Wärmepumpen sind die ultimative Empfehlung für <strong>Technikbegeisterte, Smart-Home-Liebhaber</strong> und alle, die eine extrem effiziente Wärmepumpe suchen, die sich nahtlos an zukünftige dynamische Stromtarife anpassen lässt.</p>`
  },
];
