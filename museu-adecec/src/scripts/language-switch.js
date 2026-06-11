const texts = {
    fr: {

        /*nav*/
        navHome: 'Accueil',
        navRooms: 'Les salles',
        navArchaeology: 'Archéologie',
        navInfos: 'Infos pratiques',
        navAbout: 'À propos',
        /*home*/
        homeTitle: '',
        homeIntro: `Fondé en 1970 dans l\'esprit du Riacquistu, l\'ADECEC œuvre à la valorisation de la culture et de la langue corses.
        Son musée ethnographique, installé dans l\'ancien séminaire de Cervioni, présente la vie quotidienne des Corses aux XIXe 
        et première moitié du XXe siècle, à travers des objets principalement issus de dons et de prêts.`,
        card1Title: 'Découvrir les étages',
        card1Text: 'Une première entrée pour parcourir les espaces du musée, notamment par le biais d\'une visite virtuelle.',
        card2Title: 'Découvrir la partie archéologique',
        card2Text: 'Explorer les collections et contenus liés à l\'archéologie.',
        card3Title: 'Préparez votre visite !',
        card3Text: 'Horaires, accès et informations utiles avant de venir.',
        card4Title: 'Découvrir le lieu',
        card4Text: 'En apprendre plus sur le musée, son histoire et ses missions.',
        open: 'Ouvrir',

        /*footer*/
        footerBrand: 'Musée ethnographique Anton Dumenicu Monti - ADECEC',
        footerAddress: '8 rue Philippe Pescetti, 20221 Cervione',
        footerHours: 'Lundi au samedi, 9h–12h, 14h–18h',
        footerPhone: 'Tél. 04 95 38 12 83',
        footerContact: 'Nous contacter',
        footerPlan: 'Plan du site',
        footerAccess: 'Accessibilité',
        footerLegal: 'Mentions légales',
        footerCredits: 'Crédits : Boris Rocchietti / ADECEC',

        /*pré footer (pf) */
        pfTitle: 'Préparer votre visite',
        pfHours: 'Lundi au samedi, 9h–12h et 14h–18h.',
        pfInfo: 'Informations pratiques',
        pfText: `<h4>Tarifs</h4>Visite libre : 5 € pour les adultes, 3 € pour les 12-16 ans et gratuit pour les moins de 12 ans.<br /><br />
        Visite guidée (1h30, minimum 10 personnes) : 7 € par adulte, 5 € pour les 12-16 ans et gratuit pour les moins de 12 ans.<br /><br />
        <h4>Accessibilité</h4>Le bâtiment étant classé monument historique, il ne peut pas accueillir les aménagements nécessaires aux personnes en fauteuil roulant ou ayant des difficultés à se déplacer.<br /><br />
        Le musée reste toutefois accessible aux personnes malvoyantes, malentendantes et à toute autre personne en situation de handicap, visible ou invisible.<br /><br />
        <h4>Venir visiter</h4> Le musée se situe au 8, Carrughju Filipu Pescetti, dans le village de Cervione. <br /> 
        Il est à 45 minutes de l\'aéroport Bastia-Poretta, à 30 minutes d\'Aleria et à une heure de Bastia.<br />
        Il n\'est accessible, hors voyages en autocar, qu\'en voiture, à moto et à vélo.`,

        /*Page 'Archéologie' (arch) */
        archTitle: 'Archéologie',
        archDesc: `Parmi les membres fondateurs de l\'ADECEC, l\'un d\'eux était passionné d\'archéologie. 
        Cette page existe comme un héritage, et rend honneur aux personnes qui ont contribuées à créer la petite section archéologie et minéralogie disponible dans notre musée.
        <br /> Vous trouverez sur cette page une liste de missions et d\'ouvrages archéologiques ou ethnographiques écrits par des membres de notre association. Bonne visite !`,
        archHeroImgAlt: 'Kayoux de Filitosa :333',
        archMiss: 'Missions',
        archMissTxt: '- Prospection de la région couverte par l\'association. <br />- Catalogue des sites archéologiques et monuments de la "pieve" du Campulori et des "pievi" voisines. <br /> -Protection des sites et monuments par une surveillance permanente des travaux publics et privés qui peuvent les menacer de destruction. <br /> -Arrangements à l\'amiable, si possible, avec la Direction régionale des Antiquités classiques et de la Préhistoire, les Monuments de France, etc.  <br /> -Sondage au Monte Castellu d\'Osari pour retrouver les fondations d\'une tour de défense du Moyen Age (responsable: J. LEONI) <br /> -Description et étude de la "Petra incrucichjata" de l\'Erbarellu (responsable: J. LEONI, voir parution et retirage) <br /> - Fouille de l\'église "piévane" pré-romane de Santa Maria di Moriani (responsable: A MONTI). <br /> -Repérage de la chapelle Sant\'Ippolitu en rapport avec la chapelle Santa Cristina; <br /> - Dégagement de la chapelle Santa Lucia entre U Suvertu et A Falcunaghja. <br /> -Participation à la fouille du site romain de Taverna.',
        archMissImgAlt: 'site de fouilles',
        archHist: 'Histoire',
        archHistTxt: 'Surveillance discrète, copie, étude (si possible) des archives privées lorsque les propriétaires ne sont pas disposés à les verser au Service des Archives départementales. <br /><br /> -Apprentissage de la lecture, de la transcription et de l\'étude des documents d\'archives (registres de notaires, état civil, etc.). <br /><br /> - Monographies géographiques, historiques, économiques et sociales: - Ivan VARMOT-GAUCHY: La pieve d\'Alesani (publiée) <br /> - Lucie SANTINI: Perelli mon village (publiée) <br /> - Antoine Dominique MONTI: Cervioni et le Campulori au fil des ans (à publier) <br /> - Antoine-Dominique MONTI: Cronache 1, 2 et 3 (publiées). <br /> - La grande révolte des corses contre Gênes, 1729-1769 (publiée)- La Corse et la Révolution française, 1789-1794 (publiée).<br />',
        archHistImgAlt: 'une vieille cruche antique',

        /*Page 'Les Salles'^(rooms) */
        roomsBreadcrumb: 'Musée / Les Salles',
        roomsPageTitle: 'Les Salles',
        roomsCardTitle: 'Les Salles',
        roomsCardDesc: 'Au rez-de-chaussée, la visite commence dans la salle Pascal Paoli, consacrée à l\'archéologie et à la minéralogie, puis se poursuit vers la salle Grossu Minutu, dédiée à la vigne et au vin. Enfin, en pénétrant dans la salle Sampiero Corso, vous vous embarquerez dans l\'ambiance brûlante d\'une forge venue du cœur du Boziu. <br /><br />Au premier étage, la salle F.M Casella vous invite à prendre garde aux serpes, pièges et autres hachoirs qui y sont disposés. Puis viennent la salle Ercule Macone, dédiée à la cuisine et aux ustensiles du quotidien, la salle Rinaldu Corsu et son harnachement, ainsi que la salle Philippe Pescetti, où se croisent châtaigne, cordonnerie et pastoralisme. Si vous répondez toujours à l\'appel, la salle Saint Erasme vous dévoile pelles, serrures, matériaux de construction et méthodes de récolte du blé, avant que la salle Sambucucciu d\'Alandu ne referme l\'étage sur les techniques de tissage et de filage de nos ancêtres. <br /><br />Au dernier étage, l\'imprimerie ouvre le chemin dans la salle Domenico Ascione, suivie de la menuiserie dans la salle A.G. Astima, puis du travail de la terre dans la salle Lisandru Grassi. La salle Saint Alexandre nous invite ensuite à contempler l\'art religieux, avant que le tchou-tchou strident de la salle Théodore de Neuhoff ne fasse trembler le silence du musée. Chut, parlez moins fort : vous entrez enfin dans une chambre reconstituée, dans l\'ultime salle du musée, Anton Fillipu Casalta. <br /><br />Et si la visite s\'arrête ici, l\'histoire, elle, continue : consultez le guide pour en apprendre davantage sur les salles, les noms qu\'elles portent, les objets qu\'elles abritent et les anecdotes qui les entourent.',
        roomsCardBtn: 'Découvrir un aperçu du guide (5 euros)',
        roomsImageAlt: 'Cathédrale',
        figcapSalles: 'Visite virtuelle',

        /*Page 'NotFound' (nf)*/
        nfTitle: 'Erreur 404 - Page introuvable',
        nfBtn: 'Retour à l\'accueil',

        /*Page 'A propos' (about)*/
        aboutBreadcrumb: 'Musée / À Propos',
        aboutTitle: 'À Propos',
        aboutFoundation: 'La fondation',
        aboutFoundationText: `Fondé en 1506, ce couvent franciscain de Cervioni fut consacré à Saint François puis agrandi lorsque la ville devint évêché d\'Aleria. 
        Au XVIIIe siècle, il comptait parmi les monastères les plus importants de Corse et abritait une quinzaine de religieux. 
        Confisqué à la Révolution française, il fut ensuite affecté au génie militaire jusqu\'en 1939. 
        Racheté récemment par la commune, son séminaire a été prêté à l\'ADECEC pour y héberger son musée ethnographique.`,
        aboutMuseum: 'Le musée aujourd\'hui',
        aboutMuseumText: `Le musée ethnographique de l\'ADECEC prend place dans le séminaire en 1975 et depuis plus de cinquante ans, 
        son objectif principal est de conserver la mémoire de la vie quotidienne en Corse au XIXe et dans la première moitié du XXe siècle.
        À travers des objets, des outils, du mobilier et des collections issues en grande partie de dons et de prêts, 
        il met en lumière les savoir-faire, les pratiques et les usages de la société corse. 
        Plus qu\'un lieu de conservation, le musée se veut aussi un espace de transmission, de mémoire, de découverte et 
        de valorisation du patrimoine culturel insulaire, pour les générations passées comme futures.`,
        aboutChurchImgAlt: 'Église',
        aboutMuseumInsideImgAlt: 'Intérieur du musée',
        aboutMuseumOutsideImgAlt: 'Extérieur du musée',

        /*Page 'Infos Pratiques' (infos) */
        infosBreadcrumbParent: 'Musée',
        infosBreadcrumbCurrent: 'Informations pratiques',
        infosHorairesTitle: 'Horaires',
        infosPeriod1Title: 'Matin',
        infosPeriod1Text: '9 heures à midi',
        infosPeriod2Title: 'Après-midi',
        infosPeriod2Text: '14 heures à 18 heures',
        infosGroupsTitle: 'Groupes et scolaires',
        infosGroupsIntro: `L\'association ADECEC à Cervioni, vous propose des journées de découvertes du patrimoine et de la culture  corse disponibles en langue corse ou en langue française. 
        A la journée, à la demi-journée où à l\'heure, découvrez les arts et traditions populaires à travers la visite du musée ethnographique de l\'ADECEC,
        apprenez à jouer aux jeux traditionnels, arpentez les ruelles du village à la découverte de son histoire, 
        ou initiez-vous à la radio avec Voce Nustrale! <br /> <br /> 
        Disponible sous trois formes : Journée entière (100 €, maximum 25 élèves), demi-journée(50 euros, maximum 25 élèves, deux ateliers au choix) et visite du musée (1 heure, 20 élèves maximu, 2 euros / élève) <br /><br /> 
        Réservez votre journée au 04 95 38 12 83 ou sur <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a> ! <br /><br /><br />`,
        infosTarifsTitle: 'Tarifs',
        infosTarif1Title: 'Visite libre',
        infosTarif1Content: 'Adultes (+  de 17 ans) : 5€ ( 3€  si groupes d\'adultes au-dessus de 10 personnes) <br /><br /> Enfant (12 à 16ans) 3€ <br /><br /> Enfant (- de 12ans) : gratuit',
        infosTarif2Title: 'Visite guidée (1h30), minimum 10 personnes',
        infosTarif2Content: ' Adultes (+ de 17 ans) : 7€ / personne <br /><br /> Enfant (12 à 16ans) : 5€ / personne <br /><br /> Enfant (- de 12 ans) : gratuit',
        infosFaqTitle: 'FAQ',
        infosFaq1Title: 'Où vous contacter ? ',
        infosFaq1Content: 'Par téléphone au 04 95 38 12 83, par mail sur <a href="mailto:secretariat@adecec.net"> secretariat@adecec.net</a> et par courrier au 8 Carrughju Filippu Pescetti, 20221 CERVIONE.',
        infosFaq2Title: 'Quels sont vos conditions pour les dons ? ',
        infosFaq2Content: `Nous acceptons uniquement les objets ethnographiques provenant de notre île, principalement du XIXe siècle jusqu\'à la première moitié du XXe siècle. 
        Nous n\'acceptons donc pas les objets qui sortent de ce cadre, comme les amphores romaines ou d\'autres pièces sans trop de rapport avec les missions de notre musée 
        (c\'est fascinant d\'avoir une édition originale du Petit Livre Rouge de Mao Zedong, par exemple, mais notre musée est focalisé sur l\'étude ethnographique et historique du peuple corse). 
        Si vous souhaitez nous donner ou nous confier des objets, merci de nous contacter au 04 95 38 12 83 ou à l\'adresse <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a>.`,
        infosFaq3Title: 'Est-ce que c\'est accessible aux PMR ? ',
        infosFaq3Content: `Le bâtiment étant classé en monument historique, nous ne pouvons réaliser les aménagements nécessaires pour les personnes en fauteuil roulant ou ayant des difficultés à se déplacer. 
        Cependant, notre musée est accessible aux personnes malvoyantes, malentendantes et à toute autre personne en situation de handicap, visible ou invisible.`,

        /*Déclaration d'accessibilité (access)*/
        accessTitle: "Déclaration d'accessibilité",
        accessIdentityTitle: "Identité du déclarant",
        accessIdentityText: `Ce site est édité par ETUDE DEVELOP CENTRE EST DE LA CORSE (ADECEC),<br/>
        8 Carrughju Filipu Pescetti, 20221 CERVIONE,<br/>
        Tél. 04 95 38 12 83<br/>
        <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a><br/>
        SIREN : 325 192 383<br/>
        SIRET du siège social : 325 192 383 00017<br/>
        Code NAF/APE : 94.99Z.`,
        accessResultsTitle: "Résultats des tests",
        accessResultsText1: `Très accessible (score au-dessus de 90 sur chaque catégorie sur <a href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fmuseu-adecec.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=fr&utm_source=lh-chrome-ext" target="_blank" rel="noopener noreferrer">Lighthouse</a>).`,
        accessResultsText2: `Contraste vérifié avec <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">WebAIM Color Contrast Checker</a> : 
        9.89:1 pour l'arrière-plan des cartes (#263E6A) et du site (#F8F7F3), 
        8.03:1 pour la couleur de survol des boutons (#fedc97) et l'arrière-plan des cartes (#263E6A), 
        9.18:1 pour cette même couleur de survol et l'arrière-plan du header/footer (#133951), 
        13.87:1 pour la couleur du texte des boutons (#1C2B24) et le fond des boutons (#FFF7E7), 
        et 7.16:1 pour le fond du bouton de retour en haut (#FFBB33) et l'arrière-plan du footer (#133951).`,
        accessComplianceTitle: "État de conformité",
        accessComplianceText: `Aucun audit complet du site fondé sur les critères du <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/" target="_blank" rel="noopener noreferrer">RGAA 4.1.2</a> n'a encore été réalisé. 
        Le site est donc déclaré partiellement conforme. 
        Cette section sera mise à jour dès qu'un audit complet aura été mené.
        En attendant, plusieurs vérifications techniques ont été effectuées à l'aide des outils du <a href="https://www.w3.org/developers/tools/" target="_blank" rel="noopener noreferrer">W3C</a>.`,
        accessNonAccessibleTitle: "Contenus non accessibles",
        accessNonAccessibleText: "À la date de rédaction de cette déclaration, les contenus non accessibles n'ont pas encore été listés de manière exhaustive. Cette section sera complétée après audit complet du site.",
        accessExemptionTitle: "Dérogation",
        accessExemptionText: "Aucune dérogation pour charge disproportionnée n'est invoquée à ce jour.",
        accessStatementTitle: "Établissement de cette déclaration d'accessibilité",
        accessStatementText: "Cette déclaration a été réalisée le 05/06/2026 par l'étudiant-stagiaire Boris ROCCHIETTI pour le compte de l'Association pour le Développement des Études Archéologiques, Historiques, Linguistiques et Naturalistes du Centre-Est de la Corse, association fondée en 1970 à Cervioni.",
        accessTechTitle: "Technologies utilisées pour la réalisation du site web",
        accessTechText: `HTML, CSS, JavaScript (React, Vite et la bibliothèque PrimeReact). 
        Le menu déroulant de changement de langue est inspiré d'un <a href="https://hohkfuyuhi.github.io/JS-language-changer/" target="_blank" rel="noopener noreferrer">modèle original</a> de Max Ho. 
        Extensions VS Code : indent-rainbow, Image Viewer, HTML CSS Support, Auto Close Tag, Markdown Preview Enhanced. `,
        accessToolsTitle: "Agents utilisateurs, technologies d'assistance et outils utilisés pour vérifier l'accessibilité",
        accessToolsText: `Les vérifications ont été réalisées avec les agents utilisateurs suivants : Google Chrome et Mozilla Firefox. 
        Les essais ont été effectués principalement au clavier. 
        Les outils utilisés lors de l'évaluation sont : Lighthouse (extension Google Chrome), WebAIM Color Contrast Checker, W3C Markup Validation Service, W3C CSS Validation Service, W3C Link Checker et W3C Internationalization Checker.`,
        accessPagesTitle: "Pages du site ayant fait l'objet de la vérification de conformité",
        accessPagesText: "Accueil ; À propos ; Archéologie ; Infos pratiques ; Les salles ; Plan du site ; Accessibilité.",
        accessFeedbackTitle: "Retour d'information et contact",
        accessFeedbackText: `Si vous n\'arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le responsable du site internet pour être orienté vers une alternative accessible ou obtenir le contenu sous une autre forme. 
        Pour nous contacter, vous pouvez écrire directement à <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a> ou nous appeler au (+33) 04 95 38 12 83.`,
        accessRemedyTitle: "Voies de recours",
        accessRemedyIntro: "Cette procédure est à utiliser dans le cas suivant : vous avez signalé au responsable du site internet un défaut d\'accessibilité qui vous empêche d\'accéder à un contenu ou à un service du portail et vous n\'avez pas obtenu de réponse satisfaisante.",
        accessRemedyListIntro: "Vous pouvez :",
        accessRemedyItem1: `Écrire un message au <a href="https://formulaire.defenseurdesdroits.fr/formulaire_saisine/" target="_blank" rel="noopener noreferrer">Défenseur des droits</a>.`,
        accessRemedyItem2: `Contacter le <a href="https://www.defenseurdesdroits.fr/carte-des-delegues" target="_blank" rel="noopener noreferrer">délégué du Défenseur des droits</a> dans votre région.`,
        accessRemedyItem3: "Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) : Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07.",
        /*easter egg */
        eeTitle: 'Vous m\'avez trouvé ?',
        eeDesc: 'Bien le bonjour ! ... <br /> ...',
        eeHintsTitle: 'Indices :',
        eeGuess1: "Rien n'est aléatoire.",
        eeGuess2: 'Avez-vous bien lu ?',
        eeGuess3: 'Quel jour sommes-nous ? (6 chances sur 7 de vous tromper)',
        eeTermTitle: 'Le Terminal',
        eeTermDesc: `Tapez "<strong>date</strong>" pour afficher la date actuelle, 
        "<strong>greet {0}</strong>" pour un message, 
        "<strong>random</strong>" pour obtenir un nombre aléatoire et "<strong>clear</strong>" pour tout réinitialiser.`,
    },
    en: {
        navHome: 'Home',
        navRooms: 'Rooms tour',
        navArchaeology: 'Archaeology',
        navInfos: 'Practical informations',
        navAbout: 'About us',

        homeTitle: 'Welcome to the museum\'s website',
        homeIntro: `Founded in the 70\'s during the golden age of the Riacquistu, the ADECEC cultural organization works to promote Corsican culture and language through diverses projets,
        one of which is its ethnographic museum, housed in the former seminary in Cervione. 
        It presents the everyday life of Corsicans starting back in the 19th century and up to the first half of the 20th century through objects that come mostly from donations and loans.`,

        card1Title: 'Discover the floors',
        card1Text: 'A first entry point to explore the museum spaces, notably through a virtual tour.',
        card2Title: 'Discover the archaeological section',
        card2Text: 'Explore the collections and content related to archaeology.',
        card3Title: 'Prepare your visit!',
        card3Text: 'Opening hours, access and useful information before coming.',
        card4Title: 'Discover the place',
        card4Text: 'Learn more about the museum, its history and its missions.',
        open: 'Open',

        footerBrand: ' Ethnographic Museum Anton Dumenicu Monti - ADECEC',
        footerAddress: '8 rue Philippe Pescetti, 20221 Cervione',
        footerHours: 'Monday to Saturday, 9am–12pm, 2pm–6pm',
        footerPhone: 'Phone: 04 95 38 12 83',
        footerContact: 'Contact us',
        footerPlan: 'Sitemap',
        footerAccess: 'Accessibility',
        footerLegal: 'Legal notice',
        footerCredits: 'Credits : Boris Rocchietti / ADECEC',

        pfTitle: 'Prepare your visit !',
        pfHours: 'Monday to Saturday, 9am–12pm and 2pm–6pm.',
        pfInfo: 'Practical information',
        pfText: `<h4>Prices</h4>Self-guided visit: €5 for adults, €3 for visitors aged 12 to 16, and free for children under 12.<br /><br />
        Guided visit (1h30, minimum 10 people): €7 per adult, €5 for visitors aged 12 to 16, and free for children under 12.<br /><br />
        <h4>Accessibility</h4>The building is listed as a historic monument, so it cannot be adapted for wheelchair users or people with reduced mobility.<br /><br />
        However, the museum remains accessible to visually impaired and hearing-impaired visitors, as well as to anyone living with a disability, whether visible or invisible.<br /><br />
        <h4>Getting here</h4>The museum is located at 8 Carrughju Filipu Pescetti, in the village of Cervione.<br />
        It is 45 minutes from Bastia-Poretta airport, 30 minutes from Aleria, and one hour from Bastia.<br />
        Apart from coach trips, it can only be reached by car or bicycle.`,

        archTitle: 'Archaeology',
        archDesc: `Among the founding members of ADECEC, one was passionate about archaeology.
        This page exists as a legacy and pays tribute to the people who helped create the small archaeology and mineralogy section available in our museum. <br /> 
        On this page, you will find a list of archaeological and ethnographic missions and works written by members of our association. Enjoy your visit!`,
        archHeroImgAlt: 'Filitosa Rockies :333',
        archMiss: 'Missions',
        archMissTxt: '- Survey of the region covered by the association. <br />- Inventory of the archaeological sites and monuments of the Campulori “pieve” and the nearby “pievi”. <br />- Protection of sites and monuments through permanent monitoring of public and private works that could threaten their destruction. <br />- Friendly agreements, whenever possible, with the Regional Directorate of Classical Antiquities and Prehistory, the Monuments of France, etc. <br />- Test trench at Monte Castellu d\'Osari to find the foundations of a medieval defensive tower (responsible: J. LEONI) <br />- Description and study of the “Petra incrucichjata” of Erbarellu (responsible: J. LEONI, see publication and reprint) <br />- Excavation of the pre-Romanesque “piévane” church of Santa Maria di Moriani (responsible: A MONTI) <br />- Identification of the Sant\'Ippolitu chapel in relation to the Santa Cristina chapel. <br />- Clearing around the Santa Lucia chapel between U Suvertu and A Falcunaghja. <br />- Participation in the excavation of the Roman site of Taverna.',
        archMissImgAlt: 'Very big hole',
        archHist: 'History',
        archHistTxt: 'Discreet monitoring, copying and study, whenever possible, of private archives when owners do not wish to submit them to the Departmental Archives Service. <br /><br />- Learning to read, transcribe and study archival documents (notarial registers, civil records, etc.). <br /><br />- Geographical, historical, economic and social monographs: <br />- Ivan VARMOT-GAUCHY: La pieve d\'Alesani <br />- Lucie SANTINI: Perelli mon village <br />- Antoine MONTI: Cervioni and Campulori through the years <br />- A.-D. MONTI: Cronache 1, 2 and 3. <br /><br />- Chronologies: <br />- The great revolt of the Corsicans against Genoa, 1729-1769 <br />- Corsica and the French Revolution, 1789-1794. <br /><br />- Measures used in Corsica before the adoption of the metric system. <br />- Prices.',
        archHistImgAlt: "a mighty old antic jar ",

        roomsBreadcrumb: 'Museum / The rooms',
        roomsPageTitle: 'The rooms',
        roomsCardTitle: 'The rooms',
        roomsCardDesc: `On the ground floor, the visit begins in the Pascal Paoli room, devoted to archaeology and mineralogy, then moves on to the Grossu Minutu room, dedicated to vines and wine. 
        Finally, as you step into the Sampiero Corso room, you are met with the blazing heat of a forge straight out of the heart of Boziu. <br /><br />
        On the first floor, the F.M. Casella room asks you to watch your hands around the sickles, traps and other blades on display.
        Then come the Ercule Macone room, devoted to cooking and the utensils used every day, the room dedicated to harnesses, named after his son, Rinaldu Corsu, and the Philippe Pescetti room, where chestnuts, shoemaking and pastoral life meet.
        If you are still following along, the Saint Erasme room lays out shovels, locks, building materials and wheat-harvesting methods, before the Sambucucciu d\'Alandu room closes the floor with the weaving and spinning techniques used by our ancestors. <br /><br />
        Up on the top floor, printing leads the way in the Domenico Ascione room, followed by woodworking in the A.G. Astima room, then farming tools in the Lisandru Grassi room.
        The Saint Alexander room invites you to pause and take in religious art, before the clickety-clack of the Théodore de Neuhoff room shakes the silence of the museum, where the first stirrings of the Corsican railway are told. 
        Hush now: you are entering a reconstructed bedroom in the museum\'s final room, Anton Fillipu Casalta. <br /><br />
        And if the visit ends here, the story does not: take a look at the guide to learn more about the rooms, the names they bear, the objects they hold and the little stories that surround them.`,
        roomsImageAlt: 'Cervione\'s astonishingly and taller than clouds cathedral',
        roomsCardBtn: 'Have a glimpse of the guide (5 euros)',
        figcapSalles: 'VR tour',

        nfTitle: '404 Error - Page not found',
        nfBtn: 'Back to home',

        aboutBreadcrumb: 'Museum / About',
        aboutTitle: 'About',
        aboutFoundation: 'Early days',
        aboutFoundationText: `Founded in 1506, this Franciscan convent in Cervioni was dedicated to Saint Francis and later enlarged when the town became the bishopric of Aleria. 
        In the eighteenth century, it was one of the most important monasteries in Corsica and housed around fifteen religious members. 
        Seized during the French Revolution, it was then assigned to the military engineering corps until 1939. 
        Recently repurchased by the municipality, its former seminary was loaned to ADECEC to house its ethnographic museum.`,
        aboutMuseum: 'The museum today',
        aboutMuseumText: `The ADECEC ethnographic museum is located in the former seminary and, for more than fifty years, its main purpose has been to preserve the memory of everyday life in Corsica during the nineteenth century and the first half of the twentieth century. 
        Through objects, tools, furniture and collections largely coming from donations and loans, it highlights the skills, practices and customs of Corsican society. 
        More than a place of preservation, the museum also aims to be a space for transmission, memory, discovery and the promotion of the island\'s cultural heritage, for past as well as future generations.`,
        aboutChurchImgAlt: 'Church',
        aboutMuseumInsideImgAlt: 'Inside the museum',
        aboutMuseumOutsideImgAlt: 'Outside the museum',

        infosBreadcrumbParent: 'Museum',
        infosBreadcrumbCurrent: 'Practical information',
        infosHorairesTitle: 'Opening hours',
        infosPeriod1Title: 'Morning',
        infosPeriod1Text: '9 a.m. to noon',
        infosPeriod2Title: 'Afternoon',
        infosPeriod2Text: '2 p.m. to 6 p.m.',
        infosGroupsTitle: 'Groups and schools',
        infosGroupsIntro: `The ADECEC association in Cervione offers immersion days dedicated to Corsican heritage and culture, available in either Corsican or French. 
        Whether for a full day, half a day, or just a one-hour visit, discover local arts and traditions through a visit to the ADECEC ethnographic museum, learn traditional games, 
        walk through the village streets to explore its history, or get introduced to radio broadcasting with Voce Nustrale ! <br /><br /> 
        Available in three formats: full day (€100, maximum 25 students), half day (€50, maximum 25 students, two workshops to choose from), and museum visit (1 hour, maximum 20 students, €2 per student). <br /><br /> 
        If you\'re interested, book your immersive day at 04 95 38 12 83 or at <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a>! <br /><br /><br />`,
        infosTarifsTitle: 'Admission fees',
        infosTarif1Title: 'Self-guided visit',
        infosTarif1Content: 'Adults (17 and over): €5 (€3 for adult groups with more than 10 adult people) <br /><br />Children (12 to 16): €3 <br /><br />Children under 12: free',
        infosTarif2Title: 'Guided visit (1h30), at least 10 people',
        infosTarif2Content: 'Adults (17 and over): €7 per person <br /><br />Children (12 to 16): €5 per person <br /><br />Children under 12: free',
        infosFaqTitle: 'Q&A',
        infosFaq1Title: 'How can we contact you?',
        infosFaq1Content: 'By phone at 04 95 38 12 83, by email at <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a>, and by postal mail at 8 Carrughju Filippu Pescetti, 20221 CERVIONE.',
        infosFaq2Title: 'What are your donation guidelines?',
        infosFaq2Content: `We accept only ethnographic objects from Corsica, mainly dating from the 19th century to the first half of the 20th century.
        We therefore do not accept objects outside this scope, such as Roman amphorae or other items with little connection to the mission of our museum. 
        Our museum focuses on the ethnographic and historical study of the Corsican people.
         If you would like to donate or entrust objects to us, we\'d be glad if you contacted us at +33 04 95 38 12 83 or at <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a>.`,
        infosFaq3Title: 'Is the museum accessible to PRM?',
        infosFaq3Content: `As the building is registered as a national heritage site under the <em>Monument Historique</em> designation, we cannot carry out the necessary adaptations for wheelchair users or people with mobility difficulties. 
        However, our museum is accessible to people with visual or hearing impairments, as well as to any other person living with a disability, whether visible or invisible.`,

        accessTitle: "Accessibility statement",
        accessIdentityTitle: "Publisher identity",
        accessIdentityText: `This website is published by ETUDE DEVELOP CENTRE EST DE LA CORSE (ADECEC),<br/>8 Carrughju Filipu Pescetti, 20221 CERVIONE,<br/>Phone: 04 95 38 12 83<br/><a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a><br/>SIREN: 325 192 383<br/>Head office SIRET: 325 192 383 00017<br/>NAF/APE code: 94.99Z.`,
        accessResultsTitle: "Test results",
        accessResultsText1: `Highly accessible (score above 90 in every category on <a href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fmuseu-adecec.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=fr&utm_source=lh-chrome-ext" target="_blank" rel="noopener noreferrer">Lighthouse</a>).`,
        accessResultsText2: `Contrast checked with <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">WebAIM Color Contrast Checker</a>: 
        9.89:1 for the card background (#263E6A) against the site background (#F8F7F3),
        8.03:1 for the button hover colour (#fedc97) against the card background (#263E6A), 
        9.18:1 for that same hover colour against the header/footer background (#133951), 
        13.87:1 for the button text colour (#1C2B24) against the button background (#FFF7E7), 
        and 7.16:1 for the back-to-top button background (#FFBB33) against the footer background (#133951).`,
        accessComplianceTitle: "Compliance status",
        accessComplianceText: `No full audit of the website based on the criteria of <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/" target="_blank" rel="noopener noreferrer">RGAA 4.1.2</a> has yet been carried out. 
        The website is therefore declared partially compliant. 
        This section will be updated as soon as a full audit has been completed. 
        In the meantime, several technical checks have been carried out using <a href="https://www.w3.org/developers/tools/" target="_blank" rel="noopener noreferrer">W3C</a> tools.`,
        accessNonAccessibleTitle: "Non-accessible content",
        accessNonAccessibleText: "On the date this statement was written, non-accessible content had not yet been listed exhaustively. This section will be completed after a full audit of the website.",
        accessExemptionTitle: "Exemptions",
        accessExemptionText: "No exemption for disproportionate burden is claimed at this stage.",
        accessStatementTitle: "Preparation of this accessibility statement",
        accessStatementText: "This statement was prepared on 05/06/2026 by student intern Boris ROCCHIETTI on behalf of the Association pour le Développement des Études Archéologiques, Historiques, Linguistiques et Naturalistes du Centre-Est de la Corse, an association founded in 1970 in Cervioni.",
        accessTechTitle: "Technologies used to build the website",
        accessTechText: `HTML, CSS, JavaScript (React, Vite and the PrimeReact library). 
        The language-switching dropdown menu is inspired by an <a href="https://hohkfuyuhi.github.io/JS-language-changer/" target="_blank" rel="noopener noreferrer">original model</a> by Max Ho. 
        VS Code extensions : indent-rainbow, Image Viewer, HTML CSS Support, Auto Close Tag, Markdown Preview Enhanced. `,
        accessToolsTitle: "User agents, assistive technologies and tools used to verify accessibility",
        accessToolsText: `The checks were carried out using the following user agents: Google Chrome and Mozilla Firefox. 
        Testing was performed mainly with keyboard navigation. 
        The tools used during the evaluation were: Lighthouse (Google Chrome extension), WebAIM Color Contrast Checker, W3C Markup Validation Service, W3C CSS Validation Service, W3C Link Checker and W3C Internationalization Checker.`,
        accessPagesTitle: "Pages of the website checked for compliance",
        accessPagesText: "Home; About; Archaeology; Practical information; The rooms; Sitemap; Accessibility.",
        accessFeedbackTitle: "Feedback and contact",
        accessFeedbackText: `If you are unable to access any content or service, you may contact the website manager in order to be directed to an accessible alternative or to obtain the content in another form. 
        To contact us, you can write directly to <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a> or call us at (+33) 04 95 38 12 83.`,
        accessRemedyTitle: "Remedies",
        accessRemedyIntro: "This procedure should be used in the following case: you have reported an accessibility issue to the website manager that prevents you from accessing content or a service on the portal, and you have not received a satisfactory response.",
        accessRemedyListIntro: "You may:",
        accessRemedyItem1: `Write a message to the <a href="https://formulaire.defenseurdesdroits.fr/formulaire_saisine/" target="_blank" rel="noopener noreferrer">Defender of Rights</a>.`,
        accessRemedyItem2: `Contact the <a href="https://www.defenseurdesdroits.fr/carte-des-delegues" target="_blank" rel="noopener noreferrer">local representative of the Defender of Rights</a> in your area.`,
        accessRemedyItem3: "Send a letter by post (free of charge, no stamp required): Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07.",

    },
    co: {
        navHome: 'Accolta',
        navRooms: 'E sale',
        navArchaeology: 'Archeulugia',
        navInfos: 'Infurmazione pratiche',
        navAbout: 'Prisentazione',

        homeTitle: 'Benvenuti nant\'à u situ di u museu',
        homeIntro: `Creatu in u 1970 in u filu di u Riacquistu, l\'ADECEC travaglia à a messa in valore di a cultura è di a lingua corsa.
        U so museu etnograficu, stallatu ind\'u vechju seminariu di Cervioni, prisenta a vita d\'ogni ghjornu di i Corsi da u XIXu seculu à a prima metà di u XXu, cù ogetti chì venenu soprattuttu da doni è prestiti.`,

        card1Title: 'Scopre i piani',
        card1Text: "Una prima entrata per scopre i spazii di u museu, soprattuttu per via d'una visita virtuale.",
        card2Title: "Scopre a parte archeulogica",
        card2Text: "Esplurà e cullezzione è i cuntenuti ligati à l'archeulugia.",
        card3Title: 'Preparate a vostra visita !',
        card3Text: 'Urarii, accessu è infurmazione utile nanzu di vene.',
        card4Title: 'Scopre u locu',
        card4Text: 'Amparà ne di più nantu à u museu, a so storia è e so missione.',
        open: 'Apre',

        footerBrand: 'Museu etnugraficu Anton Dumenicu Monti - ADECEC',
        footerAddress: '8 rue Philippe Pescetti, 20221 Cervione',
        footerHours: 'Da luni à sabbatu, 9 ore–12 ore, 14 ore–18 ore',
        footerPhone: 'Tel. 04 95 38 12 83',
        footerContact: 'Cuntattà l\'ADECEC',
        footerPlan: 'Pianu di u situ',
        footerAccess: 'Accessibilità',
        footerLegal: 'Cunformità',
        footerCredits: 'Crediti : Boris Rocchietti / ADECEC',

        pfTitle: 'Preparate a vostra visita',
        pfHours: 'Da luni à sabbatu, 9 ore–12 ore è 14 ore–18 ore.',
        pfInfo: 'Infurmazione pratiche',
        pfText: `<h4>Tariffe</h4>A visita libera costa 5 € pè l\'adulti, 3 € pè i 12-16 anni è hè gratuita pè i zitelli di menu di 12 anni.<br /><br />
        A visita guidata (1h30, minimu 10 persone) costa 7 € per adultu, 5 € pè i 12-16 anni è hè gratuita pè i zitelli di menu di 12 anni.<br /><br />
        <h4>Accessibilità</h4>U bastimentu hè classificatu cum\'è munumentu storicu, dunque ùn pò accoglie l\'ammagliamenti necessarii pè e persone in futtugliu rutulante o chì anu difficultà à marchjassi.<br /><br />
        U museu resta quantunque accessibile à e persone cecci, cionci è à ogni altra persona in situazione di disabilità, visibile o invisibile.<br /><br />
        <h4>Venite à scopre u nostru museu</h4>U museu si trova à u 8, Carrughju Filipu Pescetti, in u paese di Cervioni.<br /> 
        Hè à 45 minuti da l\'aeroportu Bastia-Poretta, a 30 minuti d\'Aleria è à un\'ora di Bastia.<br />
        Ùn ci si pò ghjunghje, fora di i viaghji in gruppi in autocaru, o cu in vittura o in velucipede.`,

        archTitle: 'Archeulugia',
        archDesc: `Frà i membri fundatori di l\'ADECEC, unu era appassiunatu d\'archeulugia. 
        Sta pagina esiste cum\'è una eredità è pè rende onore à e persone chì anu cuncorsu à creà a piccula sezzione d\'archeulugia è di mineralugia dispunibule in u nostru museu. <br /> 
        Truverete nant\'à sta pagina una lista di missione è d\'opere archeulugiche o etnugrafiche scritte da membri di a nostra associu. Bona visita !`,
        archHeroImgAlt: 'Kayoux di Filitosa :333',
        archMiss: 'Missione',
        archMissTxt: '- Pruspizzione di a regione coperta da l\'associu. <br />- Catalogu di i siti archeulogichi è di i munumenti di a “pieve” di u Campulori è di e “pievi” vicine. <br />- Prutezzione di i siti è di i munumenti grazia à una surveglianza permanente di i travaglii publichi è privati chì ponu strughjeli. <br />- Cunciliazione à l\'amichevule, s\'ella hè pussibule, cù a Direzzione regiunale di l\'Antichità classiche è di a Preistoria, i Munumenti di Francia, ecc. <br />- Sundagiu à u Monte Castellu d\'Osari pè ritruvà e fundazione d\'una torra di difesa di u Medievu (rispunsevule : J. LEONI) <br />- Descrizzione è studiu di a “Petra incrucichjata” di l\'Erbarellu (rispunsevule : J. LEONI, vede paruzione è tiratura nova) <br />- Scavu di a chjesa “pievana” pre-rumanica di Santa Maria di Moriani (rispunsevule : A MONTI) <br />- Signalamentu di a cappella Sant\'Ippolitu in leia cù a cappella Santa Cristina. <br />- Diraschera ingiru à a cappella Santa Lucia trà U Suvertu è A Falcunaghja. <br />- Participazione à u scavu di u situ rumanu di Taverna.',
        archMissImgAlt: 'situ di scavu',
        archHist: 'Storia',
        archHistTxt: `Surveglianza discreta, copia è studiu, s\'ellu hè pussibule, di l\'archivii privati quandu i pruprietarii ùn volenu mandalli à u Serviziu di l\'Archivii dipartimentali. <br /><br />
        - Amparera di a lettura, di a trascrizzione è di u studiu di i ducumenti d\'archiviu (registri di nutari, statu civile, ecc.). <br /><br />
        - Monografie geografiche, storiche, economiche è suciale : <br />
        - Ivan VARMOT-GAUCHY : La pieve d\'Alesani <br />
        - Lucie SANTINI : Perelli mon village <br />
        - Antoine MONTI : Cervioni et le Campulori au fil des ans <br />
        - A.-D. MONTI : Cronache 1, 2 è 3. <br /><br />
        - Cronolugie : <br />
        - La grande révolte des corses contre Gênes, 1729-1769 <br />
        - La Corse et la Révolution française, 1789-1794. <br /><br />
        - E misure aduprate in Corsica nanz\'à l\'aduttazione di u sistemu metricu. <br />
        - I prezzi.`,
        archHistImgAlt: "a giaretta ",

        roomsBreadcrumb: 'Museu / E sale',
        roomsPageTitle: 'E sale',
        roomsCardTitle: 'E sale',
        roomsCardDesc: `Pian di terra, a visita principia in a sala Pasquale Paoli, didicheghjata à l\'archeulugia è à a mineralugia, poi si ne và versu a sala Grossu Minutu, didicheghjata à a vigna è à u vinu. 
        Infine, in entrendu in a sala Sampieru Corsu, vi ritruverete in l\'atmusfera sbrusgiulente d\'una a stazzona venuta da u core di u Boziu. <br /><br />
        In u primu pianu, a sala F.M. Casella vi dumanda di fà attenzione à i pinnati, e trappule è l\'altri arnesi chì ci sò disposti. 
        Poi venenu a sala Ercule Macone, didicheghjata à a cucina è à l\'arnesi di u cutidianu, a sala didicheghjata à a bardatura, chì porta u nome di u so figliolu, Rinaldu Corsu, è a sala Filipu Pescetti, induve si ritrovanu a castagna, u scarparu è u pasturalismu.
        Si seguite sempre, a sala San Teramu vi prisenta pale, serrature, materiali di custruzzione è metudi di raccolta di u granu, nanzu chì a sala Sambucucciu d\'Alandu chjuda u pianu cù e tecniche di tissitura è di filatura aduprate da i nostri anziani. <br /><br />
        À l\'ultimu pianu, a stamperia apre a strada in a sala Dumenicu Ascione, seguitata da l\'attellu di bancalaru in a sala A.G. Astima, poi da l\'arnesi agriculi in a sala Lisandru Grassi. 
        A sala Santu Lisandru ci invita à si smiraculà davanti l\'arte religiosu, nanzu chì u ciù ciù di a sala Rè Teodoru faci suttrennà u silenziu di u museu, induve sò cuntati i i primi passi di a via ferrata corsa. 
        Zittu : entrite avà in una stanza ricustituita, in l\'ultima sala di u museu, Anton Fillipu Casaltà. <br /><br />
        È purchè s\'ella finisce quì a visita, a storia, ella, cuntinua : cunsultate a guida per amparà di più nantu à e sale, i nomi ch\'elle portanu, i oghjetti ch\'elle cuntenenu è e piccule storie à l\'ingiru.`,
        roomsCardBtn: 'Scope un pezzu di a guida (5 euro)',
        roomsImageAlt: 'Cattedrale',
        figcapSalles: 'Visita virtuale',

        nfTitle: 'Errore 404 - Pagina micca truvata',
        nfBtn: 'Ritorna à l\'accolta',

        aboutBreadcrumb: 'Museu / À propositu',
        aboutTitle: 'À propositu',
        aboutFoundation: 'A fundazione',
        aboutFoundationText: `Fundatu in u 1506, stu cunventu franciscanu di Cervioni fù cunsacratu à San Francescu è dopu ingrandatu quand\'ellu diventò vescuvatu d\'Aleria. 
        À u XVIIIu seculu, cuntava trà i munasteri i più impurtanti di Corsica è allughjava una quindecina di religiosi. 
        Cunfiscatu à a Rivuluzione francese, fù dopu assignatu à l\'ingegnu militare sin\'à u 1939. 
        Ricuppatu pocu fà da a cumuna, u so seminariu fù prestu à l\'ADECEC pè accoglie u so museu etnograficu.`,
        aboutMuseum: 'U museu oghje',
        aboutMuseumText: `U museu etnograficu di l\'ADECEC piglia piazza in u seminariu è, dapoi più di cinquant\'anni, u so scopu maiò hè di cunsirvà a memoria di a vita cutidiana in Corsica à u XIXu è à a prima metà di u XXu seculu. 
        À traversu ogetti, arnesi, mobuli è cullezzione venute in grande parte da doni è da prestiti, mette in valore i saperi fà, e pratiche è l\'usi di a sucetà corsa. 
        Più cà un locu di cunsirvazione, u museu si vole ancu cum\'è un spaziu di trasmissione, di memoria, di scuperta è di valorizazione di u patrimoniu culturale isulanu, pè e generazione passate cum\'è future.`,
        aboutChurchImgAlt: 'Chjesa',
        aboutMuseumInsideImgAlt: 'Internu di u museu',
        aboutMuseumOutsideImgAlt: 'Esternu di u museu',

        infosBreadcrumbParent: 'Museu',
        infosBreadcrumbCurrent: 'Infurmazione pratiche',
        infosHorairesTitle: 'Urarii',
        infosPeriod1Title: 'Mattina',
        infosPeriod1Text: 'Da 9 ore à meziornu',
        infosPeriod2Title: 'Dopu meziornu',
        infosPeriod2Text: 'Da 14 ore à 18 ore',
        infosGroupsTitle: 'Gruppi è sculare',
        infosGroupsIntro: `L\'associu ADECEC à Cervioni vi prupone ghjurnate di scuperta di u patrimoniu è di a cultura corsa, dispunibule in lingua corsa o in lingua francesa. 
        Ch\'ella sia una ghjurnata sana, una meza ghjurnata o una visita d\'un\'ora, scopre l\'arte è e tradizione pupulare à traversu a visita di u museu etnograficu di l\'ADECEC, 
        amparate à ghjucà à i ghjochi tradiziunali, giratevi per i stradelli di u paese à a scuperta di a so storia, o fate un primu passu in a radiu cù Voce Nustrale ! <br /><br />
        Dispunibule sott\'à trè forme : ghjurnata sana (100 €, 25 sculari à u massimu), meza ghjurnata (50 €, 25 sculari à u massimu, dui attelli à sceglie) è visita di u museu (1 ora, 20 sculari à u massimu, 2 € per scularu). <br /><br />
        Riservate a vostra ghjurnata d\'immersione à u 04 95 38 12 83 o à <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a> ! <br /><br /><br />`,
        infosTarifsTitle: 'Tariffe',
        infosTarif1Title: 'Visita libera',
        infosTarif1Content: `Adulti (più di 17 anni) : 5 € (3 € s\'ellu si tratta di gruppi d\'adulti di più di 10 persone) <br /><br />
        Zitelli da 12 à 16 anni : 3 € <br /><br />
        Zitelli di menu di 12 anni : gratuitu`,
        infosTarif2Title: 'Visita guidata (1h30), 10 persone minimu',
        infosTarif2Content: `Adulti (più di 17 anni) : 7 € per persona <br /><br />
        Zitelli da 12 à 16 anni : 5 € per persona <br /><br />
        Zitelli di menu di 12 anni : gratuitu`,
        infosFaqTitle: 'FAQ',
        infosFaq1Title: 'Cume cuntattà ci ?',
        infosFaq1Content: 'Per telefunu à u 04 95 38 12 83, per mail à <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a> è per posta à 8 Carrughju Filippu Pescetti, 20221 Cervione.',
        infosFaq2Title: 'Chì cundizione avete per i doni ?',
        infosFaq2Content: `Accettemu solu l\'ogetti etnugrafichi venuti da a nostra isula, principalmente di u XIXu seculu sin\'à a prima metà di u XXu seculu.
        Ùn accettemu dunque micca l\'ogetti chì stanu fora di stu quadru, cum\'è l\'anfore rumane o altre pezze chì ùn anu tantu raportu cù e missione di u nostru museu. 
        U nostru museu hè focalizatu nant\'à u studiu etnugraficu è storicu di u populu corsu. 
        Sè vo vulete dà ci o cunfidà ci qualchì ogettu, ringraziemu di cuntattà ci à u 04 95 38 12 83 o à <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a>.`,
        infosFaq3Title: 'Hè accessibile à e PMR ?',
        infosFaq3Content: `Siccome l\'edifiziu hè classificatu munumentu storicu, ùn pudemu fà l\'aghjustamenti necessarii per e persone in carrughjinu o cù difficultà à move si. 
        Invece, u nostru museu hè accessibile à e persone cun difficultà visuale o auditiva, è à ogni altra persona in situazione di disabilità, visibile o micca.`,

        accessTitle: "Dichjarazione d'accessibilità",
        accessIdentityTitle: "Identità di u dichjarente",
        accessIdentityText: `Stu situ hè editatu da ETUDE DEVELOP CENTRE EST DE LA CORSE (ADECEC),<br/>8 Carrughju Filipu Pescetti, 20221 CERVIONI,<br/>Tel. 04 95 38 12 83<br/><a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a><br/>SIREN : 325 192 383<br/>SIRET di a sede suciale : 325 192 383 00017<br/>Codice NAF/APE : 94.99Z.`,
        accessResultsTitle: "Risultati di e prove",
        accessResultsText1: `Assai accessibile (puntuazione sopra à 90 in ogni categuria nant'à <a href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fmuseu-adecec.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=fr&utm_source=lh-chrome-ext" target="_blank" rel="noopener noreferrer">Lighthouse</a>).`,
        accessResultsText2: `U cuntrastu hè statu verificatu cù <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">WebAIM Color Contrast Checker</a> : 
        9.89:1 per u sfondulu di e carte (#263E6A) è di u situ (#F8F7F3), 
        8.03:1 per a culore di soprabolu di i buttoni (#fedc97) è u sfondulu di e carte(#263E6A), 
        9.18:1 per sta stessa culore di soprabolu è u sfondulu di l'intestatura/ u pede di pagina (#133951), 
        13.87:1 per a culore di u testu di i buttoni (#1C2B24) è u fondu di i buttoni (#FFF7E7), 
        è 7.16:1 per u fondu di u buttone di ritornu in cima (#FFBB33) è u sfondulu di u pede di pagina (#133951).`,
        accessComplianceTitle: "Statu di cunfurmità",
        accessComplianceText: `Nessunu auditu cumpletu di u situ, fundatu nant'à i criterii di u <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/" target="_blank" rel="noopener noreferrer">RGAA 4.1.2</a>, ùn hè statu ancu realizatu. 
        U situ hè dunque dichjaratu in parte cunforme. Sta sezzione serà messa à ghjornu appena un auditu cumpletu serà statu fattu. 
        Intantu, parechje verifiche tecniche sò state fatte cù l'arnesi di u <a href="https://www.w3.org/developers/tools/" target="_blank" rel="noopener noreferrer">W3C</a>.`,
        accessNonAccessibleTitle: "Cuntenuti micca accessibili",
        accessNonAccessibleText: "À a data di scrittura di sta dichjarazione, i cuntenuti micca accessibili ùn sò ancu stati elencati in modu cumpletu. Sta sezzione serà compia dopu à un auditu cumpletu di u situ.",
        accessExemptionTitle: "Derugazione",
        accessExemptionText: "Nessuna derugazione per carica sproporziunata ùn hè invucata à stu stadiu.",
        accessStatementTitle: "Stabbilimentu di sta dichjarazione d'accessibilità",
        accessStatementText: "Sta dichjarazione hè stata realizata u 08/06/2026 da u studiente-staziante Boris ROCCHIETTI per u contu di l'Association pour le Développement des Études Archéologiques, Historiques, Linguistiques et Naturalistes du Centre-Est de la Corse, assuciazione fundata in u 1970 in Cervioni.",
        accessTechTitle: "Tecnulugie aduprate per a realizazione di u situ web",
        accessTechText: `HTML, CSS, JavaScript (React, Vite è a bibliuteca PrimeReact). 
        U menu à tendina di cambiamentu di lingua hè ispiratu da un <a href="https://hohkfuyuhi.github.io/JS-language-changer/" target="_blank" rel="noopener noreferrer">mudellu uriginale</a> di Max Ho. 
        Stinzione VS Code : indent-rainbow, Image Viewer, HTML CSS Support, Auto Close Tag, Markdown Preview Enhanced. `,
        accessToolsTitle: "Agenti utilizatori, tecnulugie d'assistenza è arnesi aduprati per verificà l'accessibilità",
        accessToolsText: `E verifiche sò state fatte cù l'agenti utilizatori seguenti : Google Chrome è Mozilla Firefox. 
        E prove sò state realizate principalmente cù a navigazione à a tastiera. 
        L'arnesi aduprati durante a valutazione sò : Lighthouse (estensione Google Chrome), WebAIM Color Contrast Checker, W3C Markup Validation Service, W3C CSS Validation Service, W3C Link Checker è W3C Internationalization Checker.`,
        accessPagesTitle: "Pagine di u situ chì anu fattu l'ogettu di a verificazione di cunfurmità",
        accessPagesText: "Accolta ; À propositu ; Archeulugia ; Infurmazione pratiche ; E sale ; Pianu di u situ ; Accessibilità.",
        accessFeedbackTitle: "Ritornu d'infurmazione è cuntattu",
        accessFeedbackText: `Sè vo ùn riescite micca à accede à un cuntenutu o à un serviziu, pudete cuntattà u rispunsevule di u situ internet per esse indirizzatu versu una alternativa accessibile o per ottene u cuntenutu sottu un'altra forma. Per cuntattacci, pudete scrive direttamente à <a href="mailto:secretariat@adecec.net">secretariat@adecec.net</a> o chjamà à u (+33) 04 95 38 12 83.`,
        accessRemedyTitle: "Vie di ricorsu",
        accessRemedyIntro: "Sta prucedura hè da aduprà in u casu seguente : avete signalatu à u rispunsevule di u situ internet un difettu d'accessibilità chì vi impedisce d'accede à un cuntenutu o à un serviziu di u purtale è ùn avete micca ottenutu una risposta soddisfacente.",
        accessRemedyListIntro: "Pudete :",
        accessRemedyItem1: `Scrive un messagiu à u <a href="https://formulaire.defenseurdesdroits.fr/formulaire_saisine/" target="_blank" rel="noopener noreferrer">Difensore di i diritti </a>.`,
        accessRemedyItem2: `Cuntattà u <a href="https://www.defenseurdesdroits.fr/carte-des-delegues" target="_blank" rel="noopener noreferrer">delegatu di u Difensore di i diritti </a> in a vostra regione.`,
        accessRemedyItem3: "Mandà una lettera per posta (di rigalu, senza mette timbru) : Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07.",

        eeTitle: "Mi avete truvatu ? Avà ! ",
        eeDesc: 'Bonghjornu, zitelli ! Sè vo site quì, hè o perchè avete avutu una furtuna incredibile, o perchè avete riflettutu bè. Complimenti ! <br /> ... <br /> Chì aspettate ancora ? C\'hè nunda altru da vede quì. Ah, hè ciò chì vedite quì sottu chì vi incuriosisce ? Hè vera chì ci hè un picculu, picculu sicretu. Ma per scoprelu, ci vole à truvà una parolla.',
        eeGuess: 'Indizii :',
        eeGuess1: 'Nunda hè à casu.',
        eeGuess2: 'Avete lettu bè ?',
        eeGuess3: 'Chì ghjornu simu ? (6 chances nantu à 7 di sbagliassi)',
        eeTermTitle: 'U Terminale',
        eeTermDesc: 'Scrivite "<strong>date</strong>" per vede a data attuale, "<strong>greet {0}</strong>" per un missaghju, "<strong>random</strong>" per ottene un numeru aleatoriu è "<strong>clear</strong>" per azzerà tuttu.',
    }
};

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = value;
    }
}

function setAlt(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.alt = value;
    }
}

function injectTexts(lang) {
    document.documentElement.lang = lang;
    const t = texts[lang];

    setText('nav-home', t.navHome);
    setText('nav-rooms', t.navRooms);
    setText('nav-archaeology', t.navArchaeology);
    setText('nav-infos', t.navInfos);
    setText('nav-about', t.navAbout);

    setText('home-title', t.homeTitle);
    setText('home-intro', t.homeIntro);
    setText('card-1-title', t.card1Title);
    setText('card-1-text', t.card1Text);
    setText('card-2-title', t.card2Title);
    setText('card-2-text', t.card2Text);
    setText('card-3-title', t.card3Title);
    setText('card-3-text', t.card3Text);
    setText('card-4-title', t.card4Title);
    setText('card-4-text', t.card4Text);

    document.querySelectorAll('.open-label').forEach((element) => {
        element.innerHTML = t.open;
    });
    setText('footer-brand', t.footerBrand);
    setText('footer-address', t.footerAddress);
    setText('footer-hours', t.footerHours);
    setText('footer-phone', t.footerPhone);
    setText('footer-contact', t.footerContact);
    setText('footer-plan', t.footerPlan);
    setText('footer-access', t.footerAccess);
    setText('footer-legal', t.footerLegal);
    setText('footer-credits', t.footerCredits);

    setText('pf-title', t.pfTitle);
    setText('pf-hours', t.pfHours);
    setText('pf-info', t.pfInfo);
    setText('pf-text', t.pfText);

    setText('arch-title', t.archTitle);
    setText('arch-desc', t.archDesc);
    setText('arch-miss', t.archMiss);
    setText('arch-miss-txt', t.archMissTxt);
    setText('arch-hist', t.archHist);
    setText('arch-hist-txt', t.archHistTxt);
    setAlt('arch-hero-img', t.archHeroImgAlt);
    setAlt('arch-miss-img', t.archMissImgAlt);
    setAlt('arch-hist-img', t.archHistImgAlt);

    setText('breadc-rooms', t.roomsBreadcrumb);
    setText('rooms', t.roomsPageTitle);
    setText('rooms-title', t.roomsCardTitle);
    setText('rooms-desc', t.roomsCardDesc);
    setText('rooms-btn', t.roomsCardBtn);
    setAlt('cath-image', t.roomsImageAlt);
    setText('figcap-salles', t.figcapSalles)

    setText('nf-t', t.nfTitle);
    setText('nf-btn', t.nfBtn);

    setText('breadc-about', t.aboutBreadcrumb);
    setText('about-title', t.aboutTitle);
    setText('about-foundation', t.aboutFoundation);
    setText('about-foundation-text', t.aboutFoundationText);
    setText('about-museum', t.aboutMuseum);
    setText('about-museum-text', t.aboutMuseumText);
    setAlt('about-church-img', t.aboutChurchImgAlt);
    setAlt('about-museum-inside-img', t.aboutMuseumInsideImgAlt);
    setAlt('about-museum-outside-img', t.aboutMuseumOutsideImgAlt);

    setText('infos-breadcrumb-parent', t.infosBreadcrumbParent);
    setText('infos-breadcrumb-current', t.infosBreadcrumbCurrent);
    setText('infos-horaires-title', t.infosHorairesTitle);
    setText('infos-period1-title', t.infosPeriod1Title);
    setText('infos-period1-text', t.infosPeriod1Text);
    setText('infos-period2-title', t.infosPeriod2Title);
    setText('infos-period2-text', t.infosPeriod2Text);
    setText('infos-groups-title', t.infosGroupsTitle);
    setText('infos-groups-intro', t.infosGroupsIntro);
    setText('infos-tarifs-title', t.infosTarifsTitle);
    setText('infos-tarif-1-title', t.infosTarif1Title);
    setText('infos-tarif-1-content', t.infosTarif1Content);
    setText('infos-tarif-2-title', t.infosTarif2Title);
    setText('infos-tarif-2-content', t.infosTarif2Content);
    setText('infos-faq-title', t.infosFaqTitle);
    setText('infos-faq-1-title', t.infosFaq1Title);
    setText('infos-faq-1-content', t.infosFaq1Content);
    setText('infos-faq-2-title', t.infosFaq2Title);
    setText('infos-faq-2-content', t.infosFaq2Content);
    setText('infos-faq-3-title', t.infosFaq3Title);
    setText('infos-faq-3-content', t.infosFaq3Content);

    setText('access-title', t.accessTitle);
    setText('access-identity-title', t.accessIdentityTitle);
    setText('access-identity-text', t.accessIdentityText);

    setText('access-results-title', t.accessResultsTitle);
    setText('access-results-text-1', t.accessResultsText1);
    setText('access-results-text-2', t.accessResultsText2);

    setText('access-compliance-title', t.accessComplianceTitle);
    setText('access-compliance-text', t.accessComplianceText);

    setText('access-nonaccessible-title', t.accessNonAccessibleTitle);
    setText('access-nonaccessible-text', t.accessNonAccessibleText);

    setText('access-exemption-title', t.accessExemptionTitle);
    setText('access-exemption-text', t.accessExemptionText);

    setText('access-statement-title', t.accessStatementTitle);
    setText('access-statement-text', t.accessStatementText);

    setText('access-tech-title', t.accessTechTitle);
    setText('access-tech-text', t.accessTechText);

    setText('access-tools-title', t.accessToolsTitle);
    setText('access-tools-text', t.accessToolsText);

    setText('access-pages-title', t.accessPagesTitle);
    setText('access-pages-text', t.accessPagesText);

    setText('access-feedback-title', t.accessFeedbackTitle);
    setText('access-feedback-text', t.accessFeedbackText);

    setText('access-remedy-title', t.accessRemedyTitle);
    setText('access-remedy-text-intro', t.accessRemedyIntro);
    setText('access-remedy-list-intro', t.accessRemedyListIntro);
    setText('access-remedy-item-1', t.accessRemedyItem1);
    setText('access-remedy-item-2', t.accessRemedyItem2);
    setText('access-remedy-item-3', t.accessRemedyItem3);

    setText('ee-title', t.eeTitle);
    setText('ee-desc', t.eeDesc);
    setText('ee-guess', t.eeGuess);
    setText('ee-guess-1', t.eeGuess1);
    setText('ee-guess-2', t.eeGuess2);
    setText('ee-guess-3', t.eeGuess3);
    setText('ee-term-title', t.eeTermTitle);
    setText('ee-term-desc', t.eeTermDesc);
}
function initLanguageSwitch() {
    const select = document.getElementById('language-select');
    if (!select) return;

    const savedLang = localStorage.getItem('museum-lang') || 'fr';
    select.value = savedLang;

    select.addEventListener('change', function () {
        localStorage.setItem('museum-lang', select.value);
        injectTexts(select.value);
    });

    injectTexts(savedLang);
}

export { injectTexts };
export default initLanguageSwitch;