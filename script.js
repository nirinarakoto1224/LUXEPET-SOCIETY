
// ===================== I18N =====================
const translations = {
  fr: {
    topbar_hub: "Hub Européen — Bruxelles",
    topbar_news: "Nouveauté 2026 — Collection Orthopédique certifiée CE",
    topbar_b2b: "Accès Partenaires B2B →",
    header_distribution: "Distribution",
    nav_philosophy: "Philosophie",
    nav_collection: "Collection",
    nav_atelier: "Savoir-faire",
    nav_b2b: "Partenaires B2B",
    header_contact_cta: "Entrer en contact",
    hero_badge: "Édition 2026 — Disponible en pré-commande pro",
    hero_title: 'Redéfinir le <br><span class="italic font-light text-[#C5A880]">confort.</span> Connecter<br>les générations.',
    hero_subtitle: "La première sélection européenne de Pet Tech et mobilier orthopédique d'avant-garde dédiée à la longévité et au bien-être absolu de vos compagnons.",
    hero_cta_discover: "Découvrir la collection",
    hero_cta_manifesto: "Notre manifeste",
    hero_rating: "4.9/5 — 2 400+ foyers",
    hero_rating_sub: "Vétérinaires & architectes d'intérieur",
    hero_certified: "Certifié",
    hero_card_bestseller: "Best-seller",
    hero_card_view: "Voir",
    hero_card_new: "Nouveau — Édition Sable",
    hero_stat_label: "Pression articulaire",
    hero_stat_value: "−42% en 7 nuits",
    hero_photo_credit: "Photographie — Studio LUXPET, Bruxelles • Lumière naturelle",
    press_seen: "Vu dans",
    press_made: "Conçu à Bruxelles — Fabriqué en Europe & Asie",
    manifesto_eyebrow: "— Manifeste",
    manifesto_title: 'Le bien-être n\'est pas un luxe.<br><span class="italic font-light">C\'est une exigence.</span>',
    manifesto_text: "Nous sélectionnons l'essentiel : des objets durables, silencieux et beaux, qui prennent soin de la santé sans compromettre l'esthétique de votre intérieur.",
    feature1_title: "Innovation Certifiée",
    feature1_text: "Technologie silencieuse, connectée et rigoureusement validée CE. Capteurs sans ondes, matériaux testés en laboratoire indépendant.",
    feature1_tag: "Faible émission • Recyclable",
    feature2_title: "Ergonomie & Santé",
    feature2_text: "Mousse à mémoire de forme haute densité, soutien cervical, tissu thermorégulateur. Pensé avec vétérinaires ostéopathes.",
    feature2_tag: "Réduit l'anxiété • +28% mobilité",
    feature3_title: "Esthétique Durable",
    feature3_text: "Lignes contemporaines, lin français, chêne FSC. Conçu pour traverser les années et s'intégrer dans les intérieurs exigeants.",
    feature3_tag: "Garanti 5 ans • Réparable",
    collection_eyebrow: "Collection 2026",
    collection_title: 'Objets de soin, <span class="italic font-light">objets de désir.</span>',
    filter_all: "Tout",
    filter_bedding: "Couchage",
    filter_tech: "Pet Tech",
    filter_furniture: "Mobilier",
    stock_in: "En stock",
    badge_new: "Nouveau",
    badge_bestseller: "Best-seller",
    prod1_name: "Couchage Ortho-Luxe N°01",
    prod1_sub: "Mémoire de forme • Lin lavé",
    prod1_badge: "Orthopédique",
    prod1_details: "Sable • Lin lavé • Mousse HR 55kg",
    prod2_badge: "Pet Tech",
    prod2_name: "Distributeur Aura Connect",
    prod2_details: "Silencieux 19dB • App • Inox 304",
    prod2_ce: "CE certifié",
    prod2_autonomy: "Autonomie 30j • Garantie 3 ans",
    prod3_badge: "Mobilier",
    prod3_name: "Arbre Félin Atrium",
    prod3_details: "Chêne massif • Sisal • 142cm",
    prod3_order: "Sur commande",
    prod3_delay: "Délai 3 semaines — Atelier Portugal",
    collection_catalog: "Voir le catalogue complet (PDF pro) →",
    atelier_eyebrow: "Savoir-faire",
    atelier_title: "Pensé avec des<br>vétérinaires. Dessiné<br>par des designers.",
    atelier_text: "Chaque prototype passe 6 mois en test clinique. Nous mesurons la pression articulaire, la qualité du sommeil et le niveau de stress. Seuls 1 objet sur 12 atteint la production.",
    atelier_stat1_label: "Pression<br>articulaire",
    atelier_stat2_label: "Silence<br>absolu",
    atelier_stat3_value: "5 ans",
    atelier_stat3_label: "Garantie<br>réparable",
    atelier_study_title: "Étude clinique — Université de Gand",
    atelier_study_sub: "12 chiens seniors, 90 nuits • +28% mobilité matinale",
    atelier_study_read: "Lire",
    b2b_eyebrow: "Hub Européen & Distribution",
    b2b_title: 'Bruxelles, porte d\'entrée <br><span class="italic font-light">vers l\'Europe.</span>',
    b2b_text: "Basés à Bruxelles, nous connectons les fabricants de Pet Tech les plus innovants d'Asie avec les réseaux de distribution européens. Nous gérons la conformité réglementaire et l'excellence logistique.",
    b2b_stat1_label: "Partenaires",
    b2b_stat2_label: "Pays livrés",
    b2b_stat3_label: "Conforme CE",
    b2b_col1_title: "Distribution",
    b2b_col1_text: "Accès réseau retail, concept stores, vétérinaires. Marges protégées, exclusivités territoriales.",
    b2b_col2_title: "Conformité",
    b2b_col2_text: "Dossier CE, REACH, traductions, SAV européen. Vous importez sans risque.",
    b2b_col3_title: "Logistique",
    b2b_col3_text: "Stock central Bruxelles, livraison 48/72h, dropship & EDI disponibles.",
    b2b_form_title: "Devenir partenaire",
    b2b_form_sub: "Réponse sous 24h ouvrées. Accès catalogue pro & grilles tarifaires.",
    b2b_ph_company: "Société *",
    b2b_ph_name: "Nom *",
    b2b_ph_email: "Email professionnel *",
    b2b_opt_retail: "Je suis... Retail / Boutique",
    b2b_opt_ecom: "E-commerce",
    b2b_opt_vet: "Clinique vétérinaire",
    b2b_opt_dist: "Distributeur / Grossiste",
    b2b_opt_other: "Autre",
    b2b_ph_project: "Votre projet en quelques lignes",
    b2b_consent: "J'accepte d'être recontacté par LUXPET dans le cadre d'une relation B2B. Données non cédées.",
    b2b_submit: "Demander l'accès pro",
    b2b_shipfrom: "Livraison depuis Bruxelles",
    map_stock_title: "Stock central — Bruxelles (BE)",
    map_shipping: "Expéditions quotidiennes UE",
    map_delay: "Délai moyen 2,4 jours",
    contact_title: "Restons en contact.",
    contact_text: "Presse, partenariats ou simple curiosité ? Nous répondons à chaque message avec attention.",
    newsletter_title: "Newsletter Atelier",
    newsletter_text: "Nouveautés, études et coulisses. 1 email par mois, désabonnement en 1 clic.",
    newsletter_ph: "Votre email",
    newsletter_submit: "S'inscrire",
    newsletter_legal: "En vous inscrivant, vous acceptez notre politique de confidentialité.",
    footer_tagline: "Mobilier orthopédique & Pet Tech d'avant-garde.<br>Conçu pour durer. Pensé pour aimer.",
    footer_explore: "Explorer",
    footer_catalog: "Catalogue PDF",
    footer_partners: "Partenaires",
    footer_become_reseller: "Devenir revendeur",
    footer_pro_login: "Espace pro (login)",
    footer_pricing: "Tarifs & conditions",
    footer_support: "Support",
    footer_legal: "Légal",
    footer_notices: "Mentions légales",
    footer_privacy: "Confidentialité",
    footer_cgv: "CGV B2B",
    footer_cookies: "Cookies",
    footer_copyright: "© 2026 LUXPET Distribution Bruxelles. Tous droits réservés.",
    footer_designby: "Espace officiel en cours de déploiement — Accès partenaires restreints. • Design by LUXPET Studio",
    qv_edition: "Édition Sable — N°01",
    qv_title: "Couchage Ortho-Luxe",
    qv_sub: "Lin lavé • Mousse HR 55kg • Housse déhoussable",
    qv_li1: "Réduction de 42% de la pression articulaire (test Gand)",
    qv_li2: "Thermorégulation naturelle, lavable à 30°",
    qv_li3: "3 tailles : S (70cm) • M (90cm) • L (110cm)",
    qv_stock: "En stock — 48h",
    qv_sample_cta: "Demander un échantillon pro",
    qv_partner_cta: "Devenir partenaire",
    qv_disclaimer: "Tarif public indicatif • Grille B2B sur demande",
    toast_report: "Rapport complet disponible sur demande pro",
    toast_catalog: "Catalogue PDF envoyé par email pro",
    toast_proaccess: "Espace pro bientôt disponible",
    toast_terms: "Conditions B2B sur demande",
    toast_support: "Support disponible lun-ven",
    footer_notices_toast: "Mentions légales",
    toast_form_submitted: "Merci ! Votre demande pro a été envoyée. Réponse sous 24h.",
    toast_newsletter: "Bienvenue dans l'Atelier — Vérifiez votre email ✉️",
    toast_sample: "Ajouté à votre sélection pro"
  },
  en: {
    topbar_hub: "European Hub — Brussels",
    topbar_news: "New for 2026 — CE-certified Orthopedic Collection",
    topbar_b2b: "B2B Partner Access →",
    header_distribution: "Distribution",
    nav_philosophy: "Philosophy",
    nav_collection: "Collection",
    nav_atelier: "Craftsmanship",
    nav_b2b: "B2B Partners",
    header_contact_cta: "Get in touch",
    hero_badge: "2026 Edition — Now open for pro pre-order",
    hero_title: 'Redefining <br><span class="italic font-light text-[#C5A880]">comfort.</span> Connecting<br>generations.',
    hero_subtitle: "Europe's first curated selection of avant-garde Pet Tech and orthopedic furniture, dedicated to your companions' longevity and absolute wellbeing.",
    hero_cta_discover: "Discover the collection",
    hero_cta_manifesto: "Our manifesto",
    hero_rating: "4.9/5 — 2,400+ households",
    hero_rating_sub: "Veterinarians & interior architects",
    hero_certified: "Certified",
    hero_card_bestseller: "Best-seller",
    hero_card_view: "View",
    hero_card_new: "New — Sand Edition",
    hero_stat_label: "Joint pressure",
    hero_stat_value: "−42% in 7 nights",
    hero_photo_credit: "Photography — LUXPET Studio, Brussels • Natural light",
    press_seen: "Featured in",
    press_made: "Designed in Brussels — Made in Europe & Asia",
    manifesto_eyebrow: "— Manifesto",
    manifesto_title: 'Wellbeing isn\'t a luxury.<br><span class="italic font-light">It\'s a standard.</span>',
    manifesto_text: "We curate the essentials: durable, quiet, beautiful objects that care for health without compromising the aesthetics of your home.",
    feature1_title: "Certified Innovation",
    feature1_text: "Quiet, connected technology, rigorously CE-validated. Wave-free sensors, materials tested in independent laboratories.",
    feature1_tag: "Low emissions • Recyclable",
    feature2_title: "Ergonomics & Health",
    feature2_text: "High-density memory foam, cervical support, thermoregulating fabric. Designed with veterinary osteopaths.",
    feature2_tag: "Reduces anxiety • +28% mobility",
    feature3_title: "Lasting Aesthetics",
    feature3_text: "Contemporary lines, French linen, FSC oak. Built to last for years and blend into demanding interiors.",
    feature3_tag: "5-year warranty • Repairable",
    collection_eyebrow: "2026 Collection",
    collection_title: 'Objects of care, <span class="italic font-light">objects of desire.</span>',
    filter_all: "All",
    filter_bedding: "Bedding",
    filter_tech: "Pet Tech",
    filter_furniture: "Furniture",
    stock_in: "In stock",
    badge_new: "New",
    badge_bestseller: "Best-seller",
    prod1_name: "Ortho-Luxe Bed N°01",
    prod1_sub: "Memory foam • Washed linen",
    prod1_badge: "Orthopedic",
    prod1_details: "Sand • Washed linen • HR 55kg foam",
    prod2_badge: "Pet Tech",
    prod2_name: "Aura Connect Feeder",
    prod2_details: "19dB quiet • App • 304 stainless steel",
    prod2_ce: "CE certified",
    prod2_autonomy: "30-day battery • 3-year warranty",
    prod3_badge: "Furniture",
    prod3_name: "Atrium Cat Tree",
    prod3_details: "Solid oak • Sisal • 142cm",
    prod3_order: "Made to order",
    prod3_delay: "3-week lead time — Portugal workshop",
    collection_catalog: "View the full catalogue (Pro PDF) →",
    atelier_eyebrow: "Craftsmanship",
    atelier_title: "Designed with<br>veterinarians. Drawn<br>by designers.",
    atelier_text: "Every prototype undergoes 6 months of clinical testing. We measure joint pressure, sleep quality and stress levels. Only 1 in 12 objects reaches production.",
    atelier_stat1_label: "Joint<br>pressure",
    atelier_stat2_label: "Absolute<br>silence",
    atelier_stat3_value: "5 years",
    atelier_stat3_label: "Repairable<br>warranty",
    atelier_study_title: "Clinical study — Ghent University",
    atelier_study_sub: "12 senior dogs, 90 nights • +28% morning mobility",
    atelier_study_read: "Read",
    b2b_eyebrow: "European Hub & Distribution",
    b2b_title: 'Brussels, gateway <br><span class="italic font-light">to Europe.</span>',
    b2b_text: "Based in Brussels, we connect Asia's most innovative Pet Tech manufacturers with European distribution networks. We handle regulatory compliance and logistics excellence.",
    b2b_stat1_label: "Partners",
    b2b_stat2_label: "Countries served",
    b2b_stat3_label: "CE compliant",
    b2b_col1_title: "Distribution",
    b2b_col1_text: "Access to retail networks, concept stores, vets. Protected margins, territorial exclusivity.",
    b2b_col2_title: "Compliance",
    b2b_col2_text: "CE file, REACH, translations, European after-sales service. You import without risk.",
    b2b_col3_title: "Logistics",
    b2b_col3_text: "Central Brussels stock, 48/72h delivery, dropship & EDI available.",
    b2b_form_title: "Become a partner",
    b2b_form_sub: "Response within 24 business hours. Access to the pro catalogue & price lists.",
    b2b_ph_company: "Company *",
    b2b_ph_name: "Name *",
    b2b_ph_email: "Professional email *",
    b2b_opt_retail: "I am... Retail / Boutique",
    b2b_opt_ecom: "E-commerce",
    b2b_opt_vet: "Veterinary clinic",
    b2b_opt_dist: "Distributor / Wholesaler",
    b2b_opt_other: "Other",
    b2b_ph_project: "Your project in a few lines",
    b2b_consent: "I agree to be contacted by LUXPET as part of a B2B relationship. Data not shared.",
    b2b_submit: "Request pro access",
    b2b_shipfrom: "Shipped from Brussels",
    map_stock_title: "Central stock — Brussels (BE)",
    map_shipping: "Daily EU shipments",
    map_delay: "Average delay 2.4 days",
    contact_title: "Let's stay in touch.",
    contact_text: "Press, partnerships, or just curious? We reply to every message with care.",
    newsletter_title: "Atelier Newsletter",
    newsletter_text: "New releases, studies and behind the scenes. 1 email a month, unsubscribe in 1 click.",
    newsletter_ph: "Your email",
    newsletter_submit: "Subscribe",
    newsletter_legal: "By subscribing, you agree to our privacy policy.",
    footer_tagline: "Avant-garde orthopedic furniture & Pet Tech.<br>Built to last. Made with love.",
    footer_explore: "Explore",
    footer_catalog: "PDF Catalogue",
    footer_partners: "Partners",
    footer_become_reseller: "Become a reseller",
    footer_pro_login: "Pro area (login)",
    footer_pricing: "Pricing & terms",
    footer_support: "Support",
    footer_legal: "Legal",
    footer_notices: "Legal notices",
    footer_privacy: "Privacy",
    footer_cgv: "B2B Terms",
    footer_cookies: "Cookies",
    footer_copyright: "© 2026 LUXPET Distribution Brussels. All rights reserved.",
    footer_designby: "Official partner area coming soon — Restricted access. • Design by LUXPET Studio",
    qv_edition: "Sand Edition — N°01",
    qv_title: "Ortho-Luxe Bed",
    qv_sub: "Washed linen • HR 55kg foam • Removable cover",
    qv_li1: "42% reduction in joint pressure (Ghent study)",
    qv_li2: "Natural thermoregulation, washable at 30°",
    qv_li3: "3 sizes: S (70cm) • M (90cm) • L (110cm)",
    qv_stock: "In stock — 48h",
    qv_sample_cta: "Request a pro sample",
    qv_partner_cta: "Become a partner",
    qv_disclaimer: "Indicative retail price • B2B pricing on request",
    toast_report: "Full report available upon pro request",
    toast_catalog: "PDF catalogue sent to your pro email",
    toast_proaccess: "Pro area coming soon",
    toast_terms: "B2B terms available on request",
    toast_support: "Support available Mon-Fri",
    toast_form_submitted: "Thank you! Your pro request has been sent. Response within 24h.",
    toast_newsletter: "Welcome to the Atelier — Check your inbox ✉️",
    toast_sample: "Added to your pro selection"
  },
  nl: {
    topbar_hub: "Europese Hub — Brussel",
    topbar_news: "Nieuw in 2026 — CE-gecertificeerde orthopedische collectie",
    topbar_b2b: "B2B Partnertoegang →",
    header_distribution: "Distributie",
    nav_philosophy: "Filosofie",
    nav_collection: "Collectie",
    nav_atelier: "Vakmanschap",
    nav_b2b: "B2B Partners",
    header_contact_cta: "Neem contact op",
    hero_badge: "Editie 2026 — Nu beschikbaar voor pro-voorverkoop",
    hero_title: 'Comfort<br><span class="italic font-light text-[#C5A880]">herdefiniëren.</span> Generaties<br>verbinden.',
    hero_subtitle: "De eerste Europese selectie van avant-garde Pet Tech en orthopedisch meubilair, gewijd aan de levensduur en het absolute welzijn van uw huisdieren.",
    hero_cta_discover: "Ontdek de collectie",
    hero_cta_manifesto: "Ons manifest",
    hero_rating: "4.9/5 — 2.400+ gezinnen",
    hero_rating_sub: "Dierenartsen & interieurarchitecten",
    hero_certified: "Gecertificeerd",
    hero_card_bestseller: "Bestseller",
    hero_card_view: "Bekijk",
    hero_card_new: "Nieuw — Zand Editie",
    hero_stat_label: "Gewrichtsdruk",
    hero_stat_value: "−42% in 7 nachten",
    hero_photo_credit: "Fotografie — Studio LUXPET, Brussel • Natuurlijk licht",
    press_seen: "Gezien in",
    press_made: "Ontworpen in Brussel — Gemaakt in Europa & Azië",
    manifesto_eyebrow: "— Manifest",
    manifesto_title: 'Welzijn is geen luxe.<br><span class="italic font-light">Het is een vereiste.</span>',
    manifesto_text: "Wij selecteren het essentiële: duurzame, stille en mooie objecten die zorgen voor de gezondheid zonder de esthetiek van uw interieur te compromitteren.",
    feature1_title: "Gecertificeerde Innovatie",
    feature1_text: "Stille, verbonden technologie, streng CE-gevalideerd. Golfvrije sensoren, materialen getest in een onafhankelijk laboratorium.",
    feature1_tag: "Lage uitstoot • Recycleerbaar",
    feature2_title: "Ergonomie & Gezondheid",
    feature2_text: "Traagschuim met hoge densiteit, nekondersteuning, thermoregulerende stof. Ontworpen met dierenartsen-osteopaten.",
    feature2_tag: "Vermindert stress • +28% mobiliteit",
    feature3_title: "Duurzame Esthetiek",
    feature3_text: "Hedendaagse lijnen, Frans linnen, FSC-eik. Ontworpen om jarenlang mee te gaan en te passen in veeleisende interieurs.",
    feature3_tag: "5 jaar garantie • Herstelbaar",
    collection_eyebrow: "Collectie 2026",
    collection_title: 'Objecten van zorg, <span class="italic font-light">objecten van verlangen.</span>',
    filter_all: "Alles",
    filter_bedding: "Ligbedden",
    filter_tech: "Pet Tech",
    filter_furniture: "Meubilair",
    stock_in: "Op voorraad",
    badge_new: "Nieuw",
    badge_bestseller: "Bestseller",
    prod1_name: "Ortho-Luxe Ligbed N°01",
    prod1_sub: "Traagschuim • Gewassen linnen",
    prod1_badge: "Orthopedisch",
    prod1_details: "Zand • Gewassen linnen • HR 55kg schuim",
    prod2_badge: "Pet Tech",
    prod2_name: "Aura Connect Voederautomaat",
    prod2_details: "Stil 19dB • App • RVS 304",
    prod2_ce: "CE gecertificeerd",
    prod2_autonomy: "30 dagen batterij • 3 jaar garantie",
    prod3_badge: "Meubilair",
    prod3_name: "Atrium Kattenboom",
    prod3_details: "Massief eiken • Sisal • 142cm",
    prod3_order: "Op bestelling",
    prod3_delay: "Levertijd 3 weken — Atelier Portugal",
    collection_catalog: "Bekijk de volledige catalogus (Pro PDF) →",
    atelier_eyebrow: "Vakmanschap",
    atelier_title: "Ontworpen met<br>dierenartsen. Getekend<br>door ontwerpers.",
    atelier_text: "Elk prototype doorloopt 6 maanden klinische tests. We meten de gewrichtsdruk, slaapkwaliteit en het stressniveau. Slechts 1 op 12 objecten haalt de productie.",
    atelier_stat1_label: "Gewrichts-<br>druk",
    atelier_stat2_label: "Absolute<br>stilte",
    atelier_stat3_value: "5 jaar",
    atelier_stat3_label: "Herstelbare<br>garantie",
    atelier_study_title: "Klinische studie — Universiteit Gent",
    atelier_study_sub: "12 oudere honden, 90 nachten • +28% mobiliteit 's ochtends",
    atelier_study_read: "Lezen",
    b2b_eyebrow: "Europese Hub & Distributie",
    b2b_title: 'Brussel, poort <br><span class="italic font-light">naar Europa.</span>',
    b2b_text: "Vanuit Brussel verbinden wij de meest innovatieve Pet Tech-fabrikanten uit Azië met Europese distributienetwerken. Wij beheren de regelgevende conformiteit en logistieke uitmuntendheid.",
    b2b_stat1_label: "Partners",
    b2b_stat2_label: "Beleverde landen",
    b2b_stat3_label: "CE-conform",
    b2b_col1_title: "Distributie",
    b2b_col1_text: "Toegang tot retailnetwerk, concept stores, dierenartsen. Beschermde marges, territoriale exclusiviteit.",
    b2b_col2_title: "Conformiteit",
    b2b_col2_text: "CE-dossier, REACH, vertalingen, Europese after-sales. U importeert zonder risico.",
    b2b_col3_title: "Logistiek",
    b2b_col3_text: "Centrale voorraad Brussel, levering 48/72u, dropship & EDI beschikbaar.",
    b2b_form_title: "Word partner",
    b2b_form_sub: "Antwoord binnen 24 werkuren. Toegang tot pro-catalogus & prijslijsten.",
    b2b_ph_company: "Bedrijf *",
    b2b_ph_name: "Naam *",
    b2b_ph_email: "Professioneel e-mailadres *",
    b2b_opt_retail: "Ik ben... Retail / Winkel",
    b2b_opt_ecom: "E-commerce",
    b2b_opt_vet: "Dierenkliniek",
    b2b_opt_dist: "Distributeur / Groothandel",
    b2b_opt_other: "Andere",
    b2b_ph_project: "Uw project in enkele regels",
    b2b_consent: "Ik ga akkoord om door LUXPET gecontacteerd te worden in het kader van een B2B-relatie. Gegevens worden niet gedeeld.",
    b2b_submit: "Vraag pro-toegang aan",
    b2b_shipfrom: "Verzonden vanuit Brussel",
    map_stock_title: "Centrale voorraad — Brussel (BE)",
    map_shipping: "Dagelijkse EU-verzendingen",
    map_delay: "Gemiddelde levertijd 2,4 dagen",
    contact_title: "Blijf in contact.",
    contact_text: "Pers, partnerschappen of gewoon nieuwsgierig? Wij beantwoorden elk bericht met aandacht.",
    newsletter_title: "Atelier Nieuwsbrief",
    newsletter_text: "Nieuwigheden, studies en achter de schermen. 1 e-mail per maand, uitschrijven met 1 klik.",
    newsletter_ph: "Uw e-mailadres",
    newsletter_submit: "Inschrijven",
    newsletter_legal: "Door u in te schrijven, gaat u akkoord met ons privacybeleid.",
    footer_tagline: "Avant-garde orthopedisch meubilair & Pet Tech.<br>Gemaakt om te blijven. Ontworpen om lief te hebben.",
    footer_explore: "Verkennen",
    footer_catalog: "PDF Catalogus",
    footer_partners: "Partners",
    footer_become_reseller: "Word wederverkoper",
    footer_pro_login: "Pro-omgeving (login)",
    footer_pricing: "Tarieven & voorwaarden",
    footer_support: "Ondersteuning",
    footer_legal: "Juridisch",
    footer_notices: "Wettelijke vermeldingen",
    footer_privacy: "Privacy",
    footer_cgv: "B2B Voorwaarden",
    footer_cookies: "Cookies",
    footer_copyright: "© 2026 LUXPET Distribution Brussel. Alle rechten voorbehouden.",
    footer_designby: "Officiële partneromgeving binnenkort beschikbaar — Beperkte toegang. • Design by LUXPET Studio",
    qv_edition: "Zand Editie — N°01",
    qv_title: "Ortho-Luxe Ligbed",
    qv_sub: "Gewassen linnen • HR 55kg schuim • Afneembare hoes",
    qv_li1: "42% vermindering van gewrichtsdruk (studie Gent)",
    qv_li2: "Natuurlijke thermoregulatie, wasbaar op 30°",
    qv_li3: "3 maten: S (70cm) • M (90cm) • L (110cm)",
    qv_stock: "Op voorraad — 48u",
    qv_sample_cta: "Vraag een pro-staal aan",
    qv_partner_cta: "Word partner",
    qv_disclaimer: "Indicatieve consumentenprijs • B2B-tarief op aanvraag",
    toast_report: "Volledig rapport beschikbaar op pro-aanvraag",
    toast_catalog: "PDF-catalogus verzonden naar uw pro e-mail",
    toast_proaccess: "Pro-omgeving binnenkort beschikbaar",
    toast_terms: "B2B-voorwaarden op aanvraag",
    toast_support: "Ondersteuning beschikbaar ma-vr",
    toast_form_submitted: "Bedankt! Uw pro-aanvraag is verzonden. Antwoord binnen 24u.",
    toast_newsletter: "Welkom in het Atelier — Controleer uw mailbox ✉️",
    toast_sample: "Toegevoegd aan uw pro-selectie"
  }
};

let currentLang = 'fr';

function t(key){
  return (translations[currentLang] && translations[currentLang][key]) || (translations.fr[key] || key);
}

function applyTranslations(){
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[currentLang][key] !== undefined) el.textContent = translations[currentLang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key = el.getAttribute('data-i18n-html');
    if(translations[currentLang][key] !== undefined) el.innerHTML = translations[currentLang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(translations[currentLang][key] !== undefined) el.setAttribute('placeholder', translations[currentLang][key]);
  });
  document.querySelectorAll('[data-lang-option]').forEach(btn=>{
    btn.classList.toggle('active', btn.getAttribute('data-lang-option')===currentLang);
  });
}

function setLanguage(lang){
  if(!translations[lang]) return;
  currentLang = lang;
  applyTranslations();
}

// ===================== EXISTING SITE LOGIC =====================
// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'));
document.querySelectorAll('#mobileMenu a').forEach(a=> a.addEventListener('click', ()=> mobileMenu.classList.add('hidden')));

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', ()=>{
  if(window.scrollY>10) header.classList.add('shadow-sm');
  else header.classList.remove('shadow-sm');
});

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));

// Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('#productGrid > div');
filterBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    filterBtns.forEach(b=>{b.classList.remove('active','bg-[#111]','text-white'); b.classList.add('text-[#767676]')});
    btn.classList.add('active','bg-[#111]','text-white'); btn.classList.remove('text-[#767676]');
    const cat = btn.dataset.filter;
    products.forEach(p=>{
      if(cat==='all' || p.dataset.cat===cat){ p.style.display=''; p.classList.add('visible')}
      else p.style.display='none';
    });
  });
});

// Forms
function showToast(msg){
  const tt=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  tt.classList.remove('hidden'); tt.classList.add('flex');
  clearTimeout(window._toastTimer);
  window._toastTimer=setTimeout(hideToast,3200);
}
function hideToast(){ document.getElementById('toast').classList.add('hidden'); document.getElementById('toast').classList.remove('flex');}
document.getElementById('b2bForm').addEventListener('submit', e=>{
  e.preventDefault();
  e.target.reset();
  showToast(t('toast_form_submitted'));
});
document.getElementById('newsletterForm').addEventListener('submit', e=>{
  e.preventDefault();
  e.target.reset();
  showToast(t('toast_newsletter'));
});

// Quick view
function openQuickView(){ document.getElementById('quickView').classList.remove('hidden'); document.body.style.overflow='hidden';}
function closeQuickView(){ document.getElementById('quickView').classList.add('hidden'); document.body.style.overflow='';}
window.addEventListener('keydown', e=>{ if(e.key==='Escape') closeQuickView();});

// Init
applyTranslations();
