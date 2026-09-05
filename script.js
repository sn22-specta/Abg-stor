"use strict";

/* =========================================================
   ABG STORE
   Catalogue 2 000 produits
   Sans catégorisation
   ========================================================= */

const WHATSAPP_NUMBER = "221775673182"; // À REMPLACER
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "ABG2026";

const PRODUCTS_PER_PAGE = 100;

let products = [];
let cart = [];
let currentPage = 1;
let searchTerm = "";

/* =========================================================
   LISTE DES 2 000 PRODUITS
   ========================================================= */

const productNames = `
Vis à bois
Vis aggloméré
Vis autoforeuse
Vis tôle
Vis placo
Vis métrique
Vis CHC
Vis fraisée
Vis tête hexagonale
Vis sans tête
Boulon hexagonal
Écrou hexagonal
Écrou frein
Écrou papillon
Rondelle plate
Rondelle Grower
Tige filetée
Goujon
Rivet pop
Cheville nylon
Tube PVC évacuation
Tube PVC pression
Tube PPR
Tube PE
Coude PVC
Té PVC
Manchon PVC
Réduction PVC
Bouchon PVC
Raccord union
Raccord laiton
Mamelon
Nipple
Ruban téflon/PTFE
Filasse
Pâte d'étanchéité
Vanne à bille
Robinet de puisage
Flexible sanitaire
Siphon
Câble électrique
Fil électrique
Gaine ICTA
Gaine annelée
Goulotte
Disjoncteur
Interrupteur simple
Interrupteur double
Va-et-vient
Prise 2P+T
Boîte d'encastrement
Boîte de dérivation
Tableau électrique
Peigne électrique
Domino électrique
Connecteur rapide
Ruban isolant
Cosse électrique
Rallonge électrique
Multiprise
Ampoule LED
Tube LED
Projecteur LED
Réglette LED
Plafonnier LED
Applique murale
Douille E27
Douille E14
Spot LED
Hublot LED
Marteau
Massette
Tournevis plat
Tournevis cruciforme
Jeu de tournevis
Clé plate
Clé mixte
Clé à molette
Clé Allen
Pince universelle
Pince coupante
Pince multiprise
Tenaille
Cutter
Scie à métaux
Scie à bois
Lime
Râpe
Burin
Niveau à bulle
Peinture acrylique
Sous-couche
Enduit
Mastic
Silicone
Colle PVC
Colle à bois
Rouleau de peinture
Pinceau
Papier abrasif
Ciment prompt
Chaux hydraulique
Plâtre en poudre
Mortier prêt à l'emploi
Sable de construction
Gravier
Treillis soudé
Fil recuit
Fer à béton
Armature pour poteau
Fibre pour béton
Produit de cure béton
Adjuvant plastifiant
Hydrofuge béton
Joint de dilatation
Cale d'armature
Règle de maçon
Auge de maçon
Seau gradué
Truelle langue de chat
Clé à pipe débouchée
Clé à œil
Clé à griffe
Clé à tube
Clé dynamométrique
Clé à filtre
Pince à circlips
Pince à dénuder
Pince à sertir
Pince à riveter
Pince à bec coudé
Coupe-tube
Coupe-boulon
Coupe-câble
Extracteur de roulement
Arrache-moyeu
Étau d'établi
Pied-de-biche
Burin plat
Burin pointe
Cheville bois
Tourillon bois
Lamello
Charnière invisible
Charnière à ressort
Aimant de meuble
Fermoir de meuble
Coulisse de tiroir
Roulette de meuble
Pied de meuble
Poignée de meuble
Serrure de meuble
Taquet d'étagère
Support d'étagère
Bande de chant
Plaque de mélaminé
Panneau MDF
Contreplaqué
Panneau OSB
Mèche à bois Forstner
Tôle ondulée
Tôle bac acier
Faîtière
Rive de toiture
Vis de toiture
Cavalier de toiture
Rondelle EPDM
Bande d'étanchéité
Membrane bitume
Enduit d'étanchéité
Silicone toiture
Mastic bitume
Gouttière PVC
Descente gouttière
Crochet gouttière
Naissance gouttière
Coude gouttière
Bouchon gouttière
Collier descente
Grille de ventilation
WC à poser
WC suspendu
Réservoir WC
Abattant WC
Lavabo
Vasque
Colonne de douche
Receveur douche
Bonde douche
Siphon lavabo
Meuble lavabo
Miroir salle de bain
Flexible douche
Pommeau douche
Barre de douche
Porte-savon
Porte-serviette
Patère
Brosse WC
Vidage baignoire
Robinet jardin
Tuyau arrosage
Raccord rapide
Nez de robinet
Lance d'arrosage
Pistolet arrosage
Programmateur arrosage
Arroseur
Asperseur
Collier de prise en charge
Pompe de surface
Pompe immergée
Clapet anti-retour
Filtre à eau
Réservoir pression
Pulvérisateur
Sécateur
Taille-haie manuel
Pelle jardin
Râteau jardin
Casque chantier
Lunettes protection
Gants manutention
Gants nitrile
Masque poussière
Protection auditive
Chaussures sécurité
Gilet haute visibilité
Genouillères
Harnais antichute
Visière protection
Masque soudage
Bouchons auditifs
Combinaison travail
Imperméable chantier
Cône signalisation
Ruban signalisation
Panneau danger
Lampe frontale
Trousse premiers secours
Poste à souder MMA
Pince porte-électrode
Pince de masse
Électrode soudure
Baguette inox
Fil MIG
Buse MIG
Diffuseur MIG
Brosse soudure
Marteau à piquer
Gants soudure
Tablier soudure
Détendeur gaz
Tuyau gaz
Collier tuyau
Meuleuse atelier
Étau
Enclume
Aimant de soudage
Boîte à outils
Caisse plastique
Bac rangement
Armoire métallique
Étagère métallique
Crochet rangement
Panneau perforé
Porte-outils
Sac à outils
Chariot manutention
Diable
Sangle arrimage
Corde nylon
Chaîne acier
Mousqueton
Poulie
Crochet levage
Manille
Roue pivotante
Rouleau transport
Mastic vitrier
Cale de vitrage
Ventouse à verre
Coupe-verre
Roulette de coupe-verre
Pince à verre
Profilé de vitrage
Parclose aluminium
Joint de vitrage
Silicone spécial verre
Film de protection vitrage
Film occultant
Film solaire pour vitre
Miroir adhésif
Ruban mousse double-face
Butoir mural
Butoir au sol
Chaînette de porte
Entretoise de porte
Cale-porte
Béquille de fenêtre

Poignée cuvette
Poignée coquille
Poignée de tirage
Barre de tirage
Plaque de propreté
Plaque de poussée
Passe-câble de porte
Joint brosse
Mousse isolante adhésive
Roulette à frein pour meuble
Roulette pivotante pour meuble
Pied réglable
Pied métallique de table
Vérin de meuble
Support de tringle
Tringle de penderie
Embout de tringle
Panier coulissant
Porte-pantalons coulissant
Porte-chaussures de meuble
Ferrure d'assemblage de meuble
Excentrique de meuble
Vis d'assemblage meuble
Écrou à frapper pour bois
Grille d'aération meuble
Passe-câble de plan de travail
Profilé de finition plan de travail
Joint de plan de travail
Charnière de meuble cuisine
Vérin de porte de meuble
Compas de meuble
Rail de tiroir
Panier métallique de cuisine
Porte-épices coulissant
Support de bouteille
Organiseur de tiroir
Patin de meuble
Butée de tiroir
Loqueteau magnétique
Étiquette d'emballage
Film étirable
Film à bulles
Feuillard plastique
Feuillard métallique
Boucle de feuillard
Tendeur de feuillard
Agrafeuse carton
Agrafes carton
Cutter de sécurité
Cornière de protection carton
Ficelle d'emballage
Étiquette adhésive
Marqueur industriel
Sac à gravats renforcé
Balai-brosse
Balai coco
Balai cantonnier
Raclette de sol
Raclette vitres
Pelle à poussière
Brosse à récurer
Brosse WC
Seau de ménage
Bassine plastique
Serpillière
Frange de lavage
Éponge abrasive professionnelle
Grattoir de sol
Manche télescopique
Dégraissant industriel
Nettoyant multi-usage
Nettoyant vitres
Nettoyant inox
Décapant peinture
Détergent alcalin
Absorbant hydrocarbures
Absorbant industriel
Produit antirouille
Protecteur anticorrosion
Extracteur de vis cassée
Taraud manuel
Filière manuelle
Porte-taraud
Porte-filière
Coffret de taraudage
Fraise à chanfreiner
Alésoir manuel
Pointe à tracer
Burin de mécanicien
Grattoir triangulaire
Pied à coulisse numérique
Micromètre extérieur
Comparateur à cadran
Support magnétique de comparateur
Jauge de profondeur
Miroir d'inspection télescopique
Aimant télescopique
Lampe d'inspection rechargeable
Pistolet à air
Élingue textile

Élingue câble acier
Élingue chaîne
Crochet à émerillon
Crochet raccourcisseur
Crochet de levage à chape
Anneau de levage
Anneau à visser
Anneau articulé
Manille lyre
Manille droite
Tendeur à lanterne
Tendeur à crochets
Tendeur à œil
Sangle à cliquet
Sangle de levage
Filet de levage
Treuil manuel
Tire-fort manuel
Palan à chaîne
Transformateur électrique
Alimentation stabilisée
Onduleur
Régulateur de tension
Batterie stationnaire
Boîtier porte-batterie
Cosse de batterie
Coupe-batterie
Chargeur de batterie
Mainteneur de charge
Testeur de batterie
Câble batterie positif
Câble batterie négatif
Porte-fusible batterie
Fusible MIDI
Fusible ANL
Fusible automobile mini
Fusible automobile standard
Fusible automobile maxi
Bornier de batterie
Isolateur de batterie
Tuyau pneumatique
Raccord pneumatique droit
Raccord pneumatique coudé
Raccord pneumatique en T
Coupleur rapide pneumatique
Embout pneumatique
Vérin pneumatique
Électrovanne pneumatique
Régulateur pneumatique
Filtre pneumatique
Lubrificateur pneumatique
Manomètre pneumatique
Pistolet pneumatique
Soufflette pneumatique
Pédale pneumatique
Flexible hydraulique
Raccord hydraulique
Coupleur hydraulique
Vérin hydraulique
Pompe hydraulique
Distributeur hydraulique
Valve hydraulique
Manomètre hydraulique
Filtre hydraulique
Joint hydraulique
Frein-filet
Pâte d'étanchéité hydraulique
Pâte de montage
Pâte anti-grippante
Produit de nettoyage industriel
Aérosol galvanisant
Apprêt antirouille en aérosol
Lubrifiant chaîne
Lubrifiant serrure
Mousse polyuréthane expansive
Résine époxy
Durcisseur époxy
Colle anaérobie
Colle cyanoacrylate
Ruban d'étanchéité auto-amalgamant
Polystyrène expansé
Polystyrène extrudé
Laine de verre
Laine de roche
Mousse isolante en rouleau
Bande résiliente
Bande d'étanchéité à l'air
Pare-vapeur
Membrane d'étanchéité
Géotextile
Film sous-dalle
Bande périphérique
Profilé d'arrêt d'enduit
Cornière d'angle PVC
Cornière d'angle métallique
Profilé de dilatation
Profilé de jonction
Treillis de façade
Trame en fibre de verre
Bande à joint pour plaque de plâtre

Plaque de plâtre standard
Plaque de plâtre hydrofuge
Plaque de plâtre ignifuge
Plaque ciment
Plaque PVC rigide
Plaque polycarbonate
Plaque plexiglas
Plaque ondulée bitumée
Plaque translucide toiture
Profilé métallique pour cloison
Montant métallique
Rail métallique pour cloison
Suspente de plafond
Fourrure métallique
Cavalier de plafond
Trappe de visite
Cornière de plafond
Bande armée pour angle
Bande papier pour joint
Enduit à joint prêt à l'emploi
Poteau de clôture
Poteau métallique galvanisé
Poteau béton
Piquet de clôture
Piquet de jardin
Tendeur de grillage
Fil de tension
Fil barbelé
Fil d'attache galvanisé
Agrafe de clôture
Attache de grillage
Plaque de soubassement
Portillon métallique
Panneau de clôture
Grillage à poules
Grillage soudé plastifié
Filet de clôture
Porte-clôture
Isolateur de clôture électrique
Poignée de clôture électrique
Crochet de faîtière
Bande de rive
Bande de solin
Solin aluminium
Solin plomb
Bavette d'étanchéité
Closoir de toiture
Ventilation de faîtage
Tuile de rive
Tuile faîtière
Tuile mécanique
Tuile canal
Plaque de sous-toiture
Écran de sous-toiture
Peigne de toiture
Crapaudine de gouttière
Boîte à eau
Trop-plein
Naissance de gouttière métallique
Descente d'eau pluviale métallique
Collecteur d'eau
Compteur d'eau
Joint de compteur
Robinet d'arrêt compteur
Clapet antipollution
Purgeur automatique
Soupape de sécurité
Groupe de sécurité chauffe-eau
Vase d'expansion
Résistance chauffe-eau
Anode de chauffe-eau
Thermostat chauffe-eau
Flexible chauffe-eau
Tuyau d'évacuation condensats
Pompe de relevage
Bac de récupération
Regard compteur
Couvercle de regard
Grille avaloir
Siphon de sol
Cylindre à bouton
Cylindre double entrée
Demi-cylindre
Cylindre à molette
Serrure à code mécanique
Serrure à code électronique
Serrure à crochet
Serrure à larder
Serrure de boîte aux lettres
Serrure de portail coulissant
Serrure de portail battant
Serrure de grille métallique
Serrure de rideau métallique
Serrure de meuble métallique
Verrou à combinaison
Verrou de fenêtre
Loquet à ressort
Loquet à bille
Targette à ressort
Gâche électrique

Rail porte-étiquette
Porte-étiquette adhésif
Porte-étiquette magnétique
Crochet pour panneau perforé
Crochet double pour panneau
Crochet gondole
Porte-brochure mural
Porte-affiche mural
Cadre porte-affiche
Présentoir métallique
Présentoir de comptoir
Corbeille métallique
Séparateur de rayonnage
Butée de rayonnage
Étiquette de prix
Porte-étiquette rayon
Miroir de surveillance
Barrière de file d'attente
Poteau de guidage
Chaînette de balisage
Corde polypropylène
Corde polyester
Corde polyamide
Corde sisal
Corde coton
Ficelle polypropylène
Ficelle sisal
Sandow élastique
Tendeur élastique
Crochet élastique
Mousqueton à vis
Mousqueton automatique
Anneau en D
Anneau triangulaire
Boucle métallique
Boucle à rouleau
Boucle rapide
Serre-corde
Cosse-cœur
Émerillon
Taquet d'amarrage
Anneau d'amarrage
Pontet inox
Charnière inox marine
Mousqueton inox
Manille inox
Câble inox
Cosse-cœur inox
Poulie marine
Cadène inox
Ridoir inox
Crochet inox
Œillet inox
Fermoir inox
Loquet inox
Réchaud de camping
Lampe de camping
Matelas isolant
Sac étanche
Tente de chantier
Bâton de marche
Gourde inox
Glacière
Chaise pliante
Table pliante
Filet de rangement
Mousqueton de randonnée
Cordelette camping
Piquet de tente
Maillet de tente
Escabeau aluminium
Échelle télescopique
Échelle pliante
Marchepied professionnel
Tabouret d'atelier
Lampe baladeuse
Enrouleur de câble
Coffret de rangement métallique
Mallette de maintenance
Organiseur de petites pièces
Pelle à fumier
Fourche à fumier
Fourche à ensilage
Racloir d'étable
Brouette à fumier
Mangeoire métallique
Abreuvoir automatique
Abreuvoir à niveau constant
Seau d'alimentation
Seau à traire
Tétine d'allaitement
Biberon d'élevage
Brosse pour animaux
Étrille métallique
Licol
Longe agricole
Mousqueton agricole
Chaîne d'attache animale
Anneau d'attache
Piquet d'attache

Filet anti-insectes
Filet de protection des cultures
Toile de paillage
Agrafe de toile de paillage
Clip de serre
Attache de serre
Film de serre
Ficelle de palissage
Clip de palissage
Tuteur plastique
Tuteur bambou
Tuteur fibre de verre
Étiquette de plantation
Plaque de semis
Godet horticole
Bac de culture
Sac de culture
Terreau horticole
Perlite horticole
Vermiculite horticole
Tuyau goutte-à-goutte
Ruban goutte-à-goutte
Goutteur réglable
Goutteur autorégulant
Micro-asperseur
Brumisateur agricole
Bouchon de ligne d'irrigation
Départ de ligne goutte-à-goutte
Raccord cannelé
Raccord compression irrigation
Té d'irrigation
Croix d'irrigation
Vanne d'irrigation
Filtre à disque
Filtre à tamis irrigation
Injecteur Venturi
Régulateur de débit
Débitmètre d'eau
Programmateur d'irrigation
Électrovanne d'irrigation
Torche de soudage MIG
Torche TIG
Torche de coupage
Bouteille de gaz technique
Détendeur oxygène
Détendeur argon
Détendeur CO₂
Tuyau oxygène
Tuyau acétylène
Buse de chalumeau
Électrode tungstène
Métal d'apport TIG
Bobine de fil MIG
Spray anti-adhérent soudage
Pierre réfractaire
Écran de soudage
Rideau de soudage
Pince à souder
Positionneur magnétique
Équerre magnétique de soudage
Fraise cylindrique
Fraise en bout
Fraise conique
Fraise boule
Fraise à rainurer
Foret à béton SDS Max
Foret à béton SDS Plus
Scie cloche bi-métal
Scie cloche diamant
Trépan béton
Trépan carrelage
Disque abrasif pour pierre
Disque abrasif pour aluminium
Disque à tronçonner béton
Disque à tronçonner carrelage
Lame diamantée
Lame carbure
Lame de scie sabre bois
Lame de scie sabre métal
Lame de scie à ruban
Roue industrielle fixe
Roue industrielle pivotante
Roulette haute température
Patin antivibratoire
Pied antivibratoire
Butée mécanique
Amortisseur industriel
Ressort à gaz
Vérin à gaz
Charnière industrielle
Fermoir à levier
Loquet industriel
Poignée en T
Poignée rabattable
Volant de manœuvre
Manivelle industrielle
Bouton de commande
Plaque signalétique machine
Passe-fil caoutchouc
Profilé caoutchouc de protection

Porte-verre mural
Porte-brosse à dents
Distributeur de savon mural
Porte-rouleau WC
Barre d'appui
Rideau de douche
Anneau de rideau de douche
Tringle de douche
Joint magnétique de porte de douche
Profilé de finition douche
Raclette de douche
Bonde clic-clac
Bouchon de lavabo
Chaînette de bouchon
Trop-plein lavabo
Grille de trop-plein
Cache-siphon
Flexible de vidange
Joint de chasse WC
Robinet temporisé
Grille de ventilation réglable
Grille de façade
Grille de reprise d'air
Bouche d'extraction
Bouche d'insufflation
Extracteur d'air
Ventilateur mural
Ventilateur de plafond
Ventilateur sur pied
Ventilateur de table
Gaine souple de ventilation
Collier de gaine
Ruban aluminium HVAC
Mousse isolante pour tuyauterie
Support mural climatiseur
Silentbloc climatiseur
Évacuation condensats climatisation
Pompe à condensats
Filtre à air climatiseur
Skimmer de piscine
Buse de refoulement
Bonde de fond piscine
Prise balai piscine
Tuyau piscine souple
Tuyau flottant piscine
Brosse de paroi piscine
Épuisette piscine
Manche télescopique piscine
Aspirateur manuel piscine
Thermomètre piscine
Testeur de pH
Doseur flottant
Couverture piscine
Enrouleur de couverture piscine
Projecteur piscine
Coffret électrique piscine
Pompe à chaleur piscine
Filtre à sable piscine
Vanne multivoies
Patère murale
Porte-manteau mural
Porte-serviettes mural
Étagère d'angle
Console murale
Support de tringle à rideau
Tringle à rideau
Embout de tringle à rideau
Anneau de rideau
Crochet adhésif
Crochet ventouse
Crochet mural double
Miroir mural
Support mural TV
Support mural enceinte
Support mural téléphone
Support mural tablette
Porte-clés mural
Boîte à clés murale
Coffre à clés à combinaison
Égouttoir mural
Porte-couverts mural
Barre de crédence
Crochet de crédence
Porte-ustensiles mural
Étagère murale cuisine
Support papier essuie-tout
Support rouleau aluminium
Porte-éponge évier
Panier égouttoir évier
Bonde d'évier
Trop-plein d'évier
Siphon d'évier double
Siphon d'évier extra-plat
Flexible de vidange lave-vaisselle
Raccord lave-vaisselle
Robinet machine à laver
Tuyau arrivée d'eau machine
Tuyau évacuation machine
Anti-bélier plomberie
Pelle à grain

Fourche à foin
Râteau à feuilles
Houe maraîchère
Sarcloir manuel
Transplantoir
Griffe de jardin
Plantoir à bulbes
Coupe-branches
Ébrancheur télescopique
Scie d'élagage
Scie arboricole
Pierre d'affûtage agricole
Lime pour chaîne
Tendeur de chaîne de tronçonneuse
Bidon de mélange 2 temps
Pulvérisateur à dos
Lance télescopique agricole
Buse de pulvérisation
Filtre de pulvérisateur
Filtre à huile
Filtre à air moteur
Filtre à carburant
Filtre habitacle
Bougie d'allumage
Bougie de préchauffage
Courroie accessoire
Galet tendeur
Galet enrouleur
Pompe à eau automobile
Thermostat automobile
Joint de culasse
Joint de cache-culbuteurs
Joint de carter
Durite de radiateur
Durite carburant
Collier de durite
Liquide de refroidissement
Liquide de frein
Liquide lave-glace
Pompe doseuse
Pompe centrifuge
Pompe auto-amorçante
Pompe de transfert
Pompe à membrane
Pompe péristaltique
Pompe manuelle à levier
Pompe à main pour fût
Pompe vide-fût
Moteur électrique monophasé
Moteur électrique triphasé
Condensateur moteur
Ventilateur industriel
Hélice industrielle
Grille de protection moteur
Accouplement à mâchoires
Joint d'accouplement
Filtre à huile hydraulique
Filtre à carburant industriel
Filtre à air industriel
Cric hydraulique
Chandelle automobile
Clé démonte-roue
Clé à bougie
Entonnoir automobile
Pompe manuelle
Jerrican homologué
Grattoir à vitre
Brosse de lavage automobile
Raclette de nettoyage
Compresseur d'air portable
Manomètre de pression pneus
Kit réparation pneu
Valve de pneu
Collier de serrage métallique
Ruban adhésif automobile
Mastic carrosserie
Roulement à billes
Roulement à rouleaux
Palier fonte
Bague d'arrêt
Circlip intérieur
Circlip extérieur
Joint torique
Joint SPI
Courroie trapézoïdale
Courroie crantée
Poulie moteur
Chaîne à rouleaux
Pignon chaîne
Graisseur mécanique
Ressort de compression
Ressort de traction
Ressort de torsion
Silentbloc
Accouplement élastique
Moyeu mécanique
Cornière acier
Profilé carré acier
Profilé rectangulaire acier
Tube carré acier

Grignoteuse à tôle
Pince à sertir hydraulique
Pince à expansion
Pince à circlips
Coupe-joint
Outil de pose de joint
Extracteur à inertie
Extracteur à griffes
Séparateur de roulement
Presse à roulement manuelle
Levier démonte-pneu
Démonte-obus de valve
Tire-valve
Testeur de pression
Testeur de continuité
Testeur de tension sans contact
Multimètre numérique
Pince ampèremétrique
Testeur de prise
Détecteur de fuite d’eau
Mandrin auto-serrant
Mandrin à clé
Clé de mandrin
Adaptateur SDS
Adaptateur porte-douille
Rallonge de douille
Cardan universel de douille
Douille longue
Douille à choc
Douille à bougie
Coffret de douilles
Coffret d’embouts
Porte-outils magnétique
Aimant de récupération
Organiseur mural
Porte-clés d’atelier
Tapis d’établi antidérapant
Tapis de découpe
Plaque de protection d’établi
Support de perceuse
Pince à décoffrer
Arrache-clou
Lève-plaque
Lève-panneau
Griffe de coffrage
Serre-banche
Tendeur de coffrage
Écarteur de coffrage
Cône de coffrage
Obturateur de coffrage
Tige de coffrage
Écrou de coffrage
Rondelle de coffrage
Huile de décoffrage
Brosse de coffrage
Piquet métallique de chantier
Jalonneur de chantier
Plaque de protection de sol
Rampe passe-câbles
Barrière de chantier
Croisillon de carrelage
Cale de carrelage
Système de nivellement
Pince de nivellement
Taloche caoutchouc
Taloche éponge
Taloche à joints
Peigne à colle
Coupe-carreau manuel
Coupe-carreau électrique
Molette de coupe-carreau
Ventouse de carreleur
Pince perroquet
Griffe de carreleur
Mallette de pose
Profilé nez de marche
Profilé de séparation
Profilé de finition
Joint silicone coloré
Nettoyant voile de ciment
Radiateur électrique
Convecteur électrique
Thermostat d’ambiance
Programmateur de chauffage
Robinet thermostatique
Tête thermostatique
Purgeur manuel
Clé de purge
Collecteur chauffage
Tube multicouche isolé
Isolation tube cuivre
Support de radiateur
Console de radiateur
Kit fixation radiateur
Détecteur CO
Détecteur de fumée
Extincteur à poudre
Extincteur CO₂
Support d’extincteur
Housse d’extincteur

Coupe-tube PVC
Coupe-tube multicouche
Coupe-tube cuivre
Ébavureur de tube
Calibreur multicouche
Ressort cintreur intérieur
Ressort cintreur extérieur
Pince à sertir multicouche
Mâchoire TH
Mâchoire U
Mâchoire H
Mâchoire RF
Clé lavabo
Clé à bonde
Clé de radiateur
Clé de robinet
Clé de purge universelle
Pince pour siphon
Pince pour raccord PVC
Déboucheur à pompe
Furet manuel
Furet tambour
Tige de débouchage
Ventouse professionnelle
Nettoyeur de canalisation manuel
Grille de sol inox
Grille de sol PVC
Siphon de sol
Siphon de machine à laver
Siphon double évier
Siphon gain de place
Bonde clic-clac
Bonde à grille
Bonde panier
Trop-plein d'évier
Trop-plein lavabo
Flexible de vidange
Tube de vidange
Manchon de réparation PVC
Manchon coulissant PVC
Bouchon de visite PVC
Tampon de visite
Clapet anti-odeur
Clapet de retenue
Clapet à battant
Clapet à ressort
Clapet de pied
Crépine d'aspiration
Filtre à tamis
Filtre Y
Filtre lavable
Filtre à eau domestique
Porte-filtre transparent
Cartouche sédiments
Cartouche charbon actif
Cartouche polyphosphate
Cartouche bobinée
Cartouche plissée
Clé porte-filtre
Régulateur de pression
Manomètre hydraulique
Pressostat eau
Contrôleur de débit
Débitmètre à eau
Compteur d'eau
Raccord diélectrique
Raccord union laiton
Raccord union inox
Raccord démontable
Raccord compression
Raccord à olive
Raccord instantané
Raccord push-fit
Raccord cannelé
Raccord multicouche
Raccord PER
Raccord PEX
Raccord cuivre à sertir
Raccord cuivre à braser
Té de réparation
Té égal
Té réduit
Croix hydraulique
Coude orientable
Coude mural
Coude à écrou libre
Réduction concentrique
Réduction excentrique
Bouchon fileté
Bouchon mâle
Bouchon femelle
Capuchon de tube
Raccord traversée de cloison
Raccord de réservoir
Passe-paroi
Bride pleine
Bride taraudée
Bride à collerette
Joint de bride
Kit de raccordement hydraulique

Panneau solaire photovoltaïque
Micro-onduleur solaire
Onduleur solaire hybride
Régulateur solaire PWM
Régulateur solaire MPPT
Coffret DC solaire
Coffret AC solaire
Parafoudre photovoltaïque
Connecteur MC4 mâle
Connecteur MC4 femelle
Clé de montage MC4
Câble solaire rouge
Câble solaire noir
Passe-câble solaire
Presse-étoupe solaire
Rail de fixation solaire
Crochet de toiture solaire
Bride intermédiaire solaire
Bride finale solaire
Vis de fixation solaire
Écrou coulissant solaire
Mise à la terre panneau solaire
Batterie solaire AGM
Batterie solaire gel
Batterie lithium solaire
Boîtier batterie
Moniteur de batterie
Shunt batterie
Coupe-batterie
Fusible solaire
Porte-fusible solaire
Sectionneur DC
Interrupteur DC
Connecteur batterie
Cosse batterie cuivre
Câble batterie
Chargeur de batterie
Convertisseur 12/24 V
Convertisseur 24/230 V
Transformateur d’isolement
Stabilisateur de tension
Parasurtenseur domestique
Bloc parafoudre multiprise
Prise RJ11
Prise RJ45 Cat5e
Prise RJ45 Cat6
Prise RJ45 Cat6A
Keystone RJ45
Panneau de brassage
Baie réseau murale
Coffret réseau
Guide-câble réseau
Passe-câble bureau
Cordon réseau Cat6
Cordon réseau Cat6A
Testeur RJ45
Pince à sertir RJ45
Fiche RJ45
Capuchon RJ45
Coupleur RJ45
Boîtier fibre optique
Rosace fibre optique
Raccord fibre optique
Jarretière fibre
Convertisseur fibre Ethernet
Répartiteur coaxial
Connecteur coaxial F
Connecteur coaxial BNC
Prise antenne TV
Amplificateur d’antenne
Répartiteur TV
Câble coaxial
Gaine annelée télécom
Collier de câble réseau
Attache câble adhésive
Boîte de dérivation réseau
Mini-rack réseau
Étagère de rack
Panneau obturateur rack
Bandeau électrique rack
Ventilateur de baie réseau
Serrure de baie réseau
Kit mise à la terre rack
Goulotte réseau
Gaine textile câble
Spirale range-câble
Passe-fil caoutchouc
Passe-câble métallique
Étiquette de câble
Imprimante d’étiquettes câbles
Repère de fil
Numéro de fil
Manchon thermorétractable
Gaine thermorétractable
Gaine tressée
Gaine spiralée
Ruban auto-amalgamant
Ruban isolant haute tension
Ruban aluminium adhésif
Ruban cuivre adhésif

Charnière invisible meuble
Charnière piano inox
Charnière à ressort
Charnière à double action
Charnière de portail
Charnière réglable portail
Paumelle à visser
Paumelle à souder
Paumelle dégondable
Gond à sceller
Gond à visser
Gond réglable
Arrêt de portail
Arrêt de porte au sol
Arrêt mural de porte
Butoir magnétique
Ferme-porte à compas
Ferme-porte encastrable
Ferme-portail hydraulique
Sélecteur de fermeture
Serrure à crochet
Serrure à larder
Serrure à appliquer
Serrure à rouleau
Serrure multipoint
Serrure électrique
Serrure magnétique
Gâche électrique
Gâche mécanique
Cylindre demi
Cylindre bouton
Cylindre double entrée
Cylindre à bouton moleté
Cylindre européen
Cylindre rond
Cylindre haute sécurité
Rosace de sécurité
Plaque de propreté
Plaque de poussée
Poignée cuvette
Poignée coquille
Poignée bouton
Poignée béquille
Poignée palière
Poignée de tirage
Poignée de fenêtre
Crémone de fenêtre
Espagnolette
Verrou de fenêtre
Compas de fenêtre
Loqueteau à bille
Loqueteau magnétique
Loquet à ressort
Targette à plat
Targette verticale
Verrou à bouton
Verrou à levier
Verrou de portail
Verrou de baie vitrée
Verrou de garage
Pêne dormant
Pêne demi-tour
Barre de sécurité
Barre anti-panique
Judas optique
Judas numérique
Chaînette de porte
Entretoise de poignée
Carré de poignée
Rosace ronde
Rosace carrée
Cache-vis de poignée
Plaque de serrure
Plaque de gâche
Entrée de clé
Garniture de porte
Kit serrure portail
Kit poignée porte
Kit cylindre serrure
Kit réparation serrure
Lubrifiant serrure
Nettoyant serrure
Clé vierge profil européen
Clé vierge à gorge
Clé vierge automobile
Boîte à clés murale
Coffret à clés
Armoire à clés
Porte-clés numéroté
Étiquette porte-clés
Crochet mural double
Crochet mural triple
Patère simple
Patère double
Patère rabattable
Console d’étagère lourde
Équerre renforcée
Équerre décorative
Support de tablette invisible
Crémaillère d’étagère

Rail d’étagère
Console réglable
Taquet d’étagère
Taquet métallique
Taquet plastique
Insert fileté bois
Écrou à frapper
Écrou à griffes
Douille filetée bois
Vis confirmat
Vis d’assemblage meuble
Boulon de meuble
Tourillon bois
Tourillon cannelé
Lamelle d’assemblage
Connecteur excentrique
Excentrique de meuble
Goujon d’assemblage
Patin feutre rond
Patin feutre carré
Patin glisseur
Roulette pivotante
Roulette fixe
Roulette freinée
Roulette double
Roulette à platine
Roulette à tige
Rouleau de meuble
Pied réglable
Pied métallique meuble
Pied plastique meuble
Pied inclinable
Vérin de meuble
Vérin à gaz
Compas de meuble
Compas à friction
Charnière de meuble 90°
Charnière de meuble 110°
Charnière de meuble 165°
Charnière à fermeture automatique
Charnière verre-verre
Charnière verre-bois
Support tablette verre
Pince à verre
Profilé porte-verre
Joint de vitrage
Joint EPDM vitrage
Cale de vitrage
Ventouse double
Ventouse triple
Coupe-verre diamant
Coupe-verre à molette
Pince à gruger verre
Pince à verre
Pierre à affûter verre
Mastic vitrier
Couteau à mastic
Spatule vitrier
Ruban de vitrage
Profilé aluminium vitrage
Profilé PVC vitrage
Parclose aluminium
Parclose PVC
Joint parclose
Mousse de vitrage
Ruban double face vitrage
Film de protection verre
Film solaire fenêtre
Film dépoli fenêtre
Film anti-regard
Moustiquaire enroulable
Moustiquaire fixe
Moustiquaire plissée
Toile moustiquaire
Profilé moustiquaire
Roulette moustiquaire
Poignée moustiquaire
Ressort moustiquaire
Kit moustiquaire fenêtre
Kit moustiquaire porte
Rail rideau
Tringle à rideau
Support de tringle
Embout de tringle
Anneau de rideau
Crochet de rideau
Roulette de rideau
Cordon de store
Chaînette de store
Mécanisme de store
Support de store
Embout de store
Tube d’enroulement store
Treuil de volet
Manivelle de volet
Attache tablier volet
Verrou automatique volet
Butée de volet
Sangle de volet
Enrouleur de sangle

Échelle télescopique
Échelle articulée
Escabeau professionnel
Marchepied pliant
Plateforme roulante
Plateforme individuelle
Échafaudage roulant
Échafaudage pliant
Roue d’échafaudage
Stabilisateur d’échafaudage
Vérin d’échafaudage
Collier d’échafaudage
Rosette d’échafaudage
Plancher d’échafaudage
Garde-corps d’échafaudage
Échelle de toit
Crochet d’échelle
Pied d’échelle antidérapant
Sangle d’échelle
Porte-échelle mural
Diable pliant
Diable à bavette
Diable monte-escalier
Chariot plateforme
Chariot à dossier
Chariot de manutention
Chariot porte-panneaux
Chariot porte-bouteilles
Transpalette manuel
Gerbeur manuel
Roue de manutention
Roue caoutchouc
Roue pleine
Roue pneumatique
Roue increvable
Galet de manutention
Rouleau transporteur
Sangle d’arrimage
Tendeur à cliquet
Crochet d’arrimage
Anneau d’arrimage
Filet d’arrimage
Corde d’arrimage
Tendeur élastique
Sandow à crochet
Sandow plat
Sangle à boucle
Sangle porte-outils
Porte-matériaux
Sac de manutention
Bac de rangement industriel
Bac gerbable
Bac à bec
Caisse plastique empilable
Caisse métallique
Coffre de chantier
Coffre métallique
Armoire métallique
Vestiaire métallique
Étagère métallique
Étagère galvanisée
Étagère modulable
Étagère à pneus
Étagère lourde
Étagère à bacs
Panneau perforé atelier
Crochet panneau perforé
Support tournevis mural
Support clés plates
Support pinces
Support marteaux
Support perceuse
Support meuleuse
Support rouleaux
Support tuyaux
Support bobines
Support bouteilles
Support aérosols
Bac à outils
Plateau magnétique
Plateau de rangement
Servante d’atelier
Établi pliant
Établi métallique
Établi bois
Étau d’établi
Étau de machine
Étau à mors doux
Mors de rechange étau
Enclume d’atelier
Bloc d’étau
Plateau tournant d’établi
Lampe d’établi
Loupe d’établi
Tapis magnétique
Bac de récupération huile
Entonnoir industriel
Pompe manuelle de transfert
Jerrican homologué
Bidon de stockage

Marteau de couvreur
Marteau de charpentier
Maillet nylon
Maillet caoutchouc
Maillet cuivre
Massette sans rebond
Massette à manche fibre
Burin large
Burin pointu
Burin plat
Pointeau automatique
Pointeau de précision
Chasse-goupille
Chasse-goupille jeu
Jeu de limes aiguilles
Lime plate bâtarde
Lime ronde bâtarde
Lime demi-ronde
Lime carrée
Lime triangulaire
Râpe à bois plate
Râpe à bois ronde
Râpe demi-ronde
Râpe de précision
Grattoir triangulaire
Grattoir carbure
Grattoir peinture
Racloir de sol
Raclette de chantier
Spatule rigide
Spatule flexible
Spatule crantée
Couteau à enduire
Couteau à mastic large
Couteau à joint
Cutter à lame trapèze
Cutter rotatif
Couteau de chantier
Lame de rechange cutter
Lame grattoir
Scie à métaux mini
Scie à métaux professionnelle
Lame bimétal
Lame carbure métal
Scie à chantourner
Scie japonaise
Scie à dos
Scie à onglet manuelle
Boîte à onglet
Lame scie bois fine
Lame scie bois grossière
Lame scie PVC
Lame scie aluminium
Lame scie cuivre
Scie trépan métal
Scie trépan bois
Scie trépan PVC
Mandrin porte-scie cloche
Arbre de scie cloche
Foret pilote
Foret béton long
Foret béton court
Foret carrelage
Foret verre
Foret diamanté
Foret bois plat
Foret bois hélicoïdal
Foret étagé
Foret conique
Foret métal cobalt
Foret métal titane
Foret HSS court
Foret HSS long
Foret SDS court
Foret SDS long
Burin SDS plat
Burin SDS pointu
Burin SDS large
Fraise à chanfreiner
Fraise à lamer
Fraise à rainurer
Fraise cylindrique
Fraise conique
Fraise boule
Fraise rotative carbure
Meule sur tige
Roue à lamelles
Brosse sur tige
Disque à tronçonner inox
Disque à tronçonner acier
Disque à ébarber inox
Disque à ébarber acier
Disque à lamelles zirconium
Disque fibre abrasif
Disque diamant béton
Disque diamant carrelage
Disque diamant marbre
Disque diamant granit
Disque diamant coupe à sec
Disque diamant coupe à eau

Brosse métallique ronde
Brosse métallique boisseau
Brosse métallique pinceau
Brosse inox
Brosse laiton
Brosse nylon abrasive
Roue abrasive
Pierre abrasive
Pierre de rodage
Pierre à huile
Papier abrasif gros grain
Papier abrasif moyen grain
Papier abrasif fin grain
Papier abrasif très fin
Toile émeri
Rouleau abrasif
Éponge abrasive
Disque abrasif velcro
Disque mousse polissage
Disque feutre polissage
Pâte à polir métal
Pâte à polir inox
Pâte à polir aluminium
Pâte à roder
Brosse de nettoyage moteur
Brosse de nettoyage tuyau
Brosse bouteille métallique
Brosse radiateur
Brosse cheminée
Brosse barbecue
Balayette industrielle
Balai cantonnier
Balai coco
Balai nylon dur
Balai à pousser
Raclette de sol mousse
Raclette sol caoutchouc
Pelle à poussière métallique
Pelle à poussière plastique
Pelle chantier
Pelle ronde
Pelle carrée
Pelle à neige
Pioche de terrassement
Pioche de jardin
Houe de chantier
Houe agricole
Serfouette
Binette
Griffe de jardin
Fourche à fumier
Fourche à foin
Fourche à bêcher
Râteau métallique
Râteau plastique
Rateau à feuilles
Croc de jardin
Sécateur à enclume
Sécateur à lame franche
Ébrancheur
Scie d’élagage
Scie arboricole
Taille-haie manuel
Cisaille à haies
Cisaille à gazon
Coupe-branches
Coupe-tuyau d’arrosage
Dévidoir de tuyau
Enrouleur de tuyau
Pistolet d’arrosage
Lance d’arrosage
Tuyau microporeux
Tuyau d’arrosage renforcé
Tuyau spiralé d’arrosage
Raccord rapide femelle
Raccord rapide mâle
Nez de robinet
Répartiteur d’arrosage
Programmateur d’arrosage
Minuteur d’arrosage
Asperseur rotatif
Asperseur oscillant
Asperseur escamotable
Micro-asperseur
Brumisateur de jardin
Goutteur réglable
Goutteur autorégulant
Ligne goutte-à-goutte
Filtre d’irrigation à disque
Filtre d’irrigation à tamis
Injecteur d’engrais
Venturi d’irrigation
Vanne d’irrigation
Électrovanne d’arrosage
Coffret irrigation
Tuyau PE irrigation
Raccord PE à compression
Bouchon fin de ligne
Purgeur d’irrigation
Manomètre irrigation

Électrode rutile 2,0 mm
Électrode rutile 2,5 mm
Électrode rutile 3,2 mm
Électrode basique 2,5 mm
Électrode basique 3,2 mm
Électrode inox
Électrode fonte
Électrode rechargement dur
Fil MIG acier
Fil MIG inox
Fil MIG aluminium
Fil fourré soudage
Bobine fil soudage
Buse MIG
Diffuseur MIG
Tube contact MIG
Galet entraîneur MIG
Gaine torche MIG
Torche MIG
Torche TIG
Électrode tungstène
Pince porte-électrode
Pince de masse soudage
Câble de soudage
Connecteur DINSE
Détendeur argon
Débitmètre argon
Tuyau gaz soudage
Anti-retour gaz
Pare-flamme
Baguette brasure cuivre
Baguette brasure argent
Baguette aluminium
Flux de brasage
Décapant cuivre
Pâte décapante soudage
Brosse inox soudage
Marteau à piquer
Brosse à souder
Écran de soudage
Masque automatique soudage
Verre de soudage
Porte-verre masque
Gants cuir soudage
Manchettes soudage
Tablier cuir soudage
Guêtres soudage
Couverture anti-projection
Rideau de soudage
Aimant de soudage
Équerre magnétique soudage
Pince de positionnement soudage
Serre-joint de soudage
Étau de soudage
Table de soudage
Support de torche
Brosse de décapage inox
Disque à lamelles soudage
Disque décapage soudure
Meule d’affûtage
Meule verte carbure
Meule blanche affûtage
Meule boisseau
Meule droite
Meule sur tige cylindrique
Meule sur tige conique
Fraise carbure cylindre
Fraise carbure boule
Fraise carbure ogive
Fraise carbure flamme
Huile de coupe
Fluide de coupe
Spray de coupe
Pâte de coupe
Lubrifiant taraudage
Taraud machine
Taraud manuel
Filière ronde
Porte-filière
Porte-taraud
Tourne-à-gauche
Extracteur de goujon
Extracteur de vis cassée
Jeu d’extracteurs
Pointeau de centrage
Centreur de perçage
Guide de perçage
Gabarit de perçage
Gabarit d’assemblage
Rapporteur d’angle
Jauge d’épaisseur
Jauge de filetage
Jauge de rayon
Pied à coulisse digital
Pied à coulisse inox
Micromètre extérieur
Micromètre intérieur
Comparateur mécanique
Base magnétique comparateur
Trusquin de mécanicien

Niveau laser rotatif
Niveau laser lignes
Récepteur laser
Mire télescopique
Trépied laser
Canne télescopique laser
Télémètre laser professionnel
Détecteur mural
Détecteur de montants
Détecteur de métaux mural
Humidimètre matériaux
Thermomètre infrarouge
Thermomètre à sonde
Hygromètre
Anémomètre
Luxmètre
Sonomètre
Tachymètre laser
Endoscope caméra
Caméra d’inspection
Pompe à vide manuelle
Pompe à vide électrique
Vacuomètre
Manifold frigorifique
Flexible frigorifique bleu
Flexible frigorifique rouge
Flexible frigorifique jaune
Dudgeonnière
Coupe-tube frigorifique
Ébavureur frigorifique
Cintreuse cuivre
Expandeur cuivre
Pompe de récupération frigorifique
Balance frigorifique
Détecteur électronique de fuite
Azote technique détendeur
Tuyau condensats
Pompe de relevage condensats
Bac condensats
Ruban isolant frigorifique
Mousse isolante climatisation
Support mural climatiseur
Silentbloc climatiseur
Pied support groupe extérieur
Cache-goulotte climatisation
Goulotte climatisation
Angle intérieur goulotte
Angle extérieur goulotte
Jonction goulotte
Embout goulotte
Grille de ventilation ronde
Grille de ventilation carrée
Grille réglable
Bouche d'extraction
Bouche d'insufflation
Clapet coupe-feu
Clapet anti-retour ventilation
Registre de ventilation
Manchette souple ventilation
Gaine flexible aluminium
Gaine flexible PVC
Gaine isolée ventilation
Collier de gaine
Bande perforée ventilation
Silentbloc ventilateur
Extracteur mural
Extracteur de salle de bain
Extracteur industriel
Ventilateur axial
Ventilateur centrifuge
Ventilateur de gaine
Ventilateur de plafond
Hélice ventilateur
Grille de protection ventilateur
Moteur ventilateur
Condensateur moteur ventilateur
Régulateur de vitesse ventilateur
Thermostat ventilation
Pressostat ventilation
Filtre à air panneau
Filtre à air plissé
Filtre à charbon ventilation
Porte-filtre ventilation
Préfiltre mousse
Filtre métallique lavable
Cadre filtre ventilation
Joint filtre
Ruban aluminium HVAC
Mastic d’étanchéité ventilation
Colle isolant thermique
Bande isolante thermique
Plaque isolante thermique
Manchon isolant
Collier isolant
Support antivibratoire
Ressort antivibratoire
Plot antivibratoire
Joint antivibratoire
Kit fixation ventilation
Kit installation climatisation
`.trim();

/* =========================================================
   CRÉATION DES PRODUITS
   ========================================================= */

function createProducts() {

    const names = productNames
        .split("\n")
        .map(name => name.trim())
        .filter(name => name.length > 0);

    products = names.map((name, index) => ({
        id: index + 1,
        name: name,
        price: generatePrice(index, name)
    }));

    console.log(
        "ABG STORE :",
        products.length,
        "produits chargés"
    );

    localStorage.setItem(
        "abg_products_v5",
        JSON.stringify(products)
    );
}


/* =========================================================
   PRIX AUTOMATIQUES
   ========================================================= */

function generatePrice(index, name) {

    const n = name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (
        n.includes("vis") ||
        n.includes("rondelle") ||
        n.includes("ecrou") ||
        n.includes("cheville") ||
        n.includes("rivet")
    ) {
        return 100 + ((index * 37) % 1900);
    }

    if (
        n.includes("marteau") ||
        n.includes("pince") ||
        n.includes("tournevis") ||
        n.includes("cle ") ||
        n.includes("scie")
    ) {
        return 1500 + ((index * 113) % 13500);
    }

    if (
        n.includes("pompe") ||
        n.includes("moteur") ||
        n.includes("poste") ||
        n.includes("compresseur") ||
        n.includes("echelle")
    ) {
        return 15000 + ((index * 733) % 185000);
    }

    if (
        n.includes("perceuse") ||
        n.includes("meuleuse") ||
        n.includes("ponceuse") ||
        n.includes("souffleur")
    ) {
        return 15000 + ((index * 521) % 150000);
    }

    if (
        n.includes("serrure") ||
        n.includes("cadenas") ||
        n.includes("poignee")
    ) {
        return 2500 + ((index * 83) % 30000);
    }

    if (
        n.includes("robinet") ||
        n.includes("raccord") ||
        n.includes("vanne") ||
        n.includes("tuyau")
    ) {
        return 1000 + ((index * 71) % 30000);
    }

    if (
        n.includes("cable") ||
        n.includes("interrupteur") ||
        n.includes("prise") ||
        n.includes("disjoncteur") ||
        n.includes("electrique")
    ) {
        return 1000 + ((index * 97) % 50000);
    }

    if (
        n.includes("peinture") ||
        n.includes("silicone") ||
        n.includes("colle") ||
        n.includes("mastic") ||
        n.includes("enduit")
    ) {
        return 1500 + ((index * 107) % 35000);
    }

    return 1000 + ((index * 97) % 29000);
}


/* =========================================================
   PHOTOS PRODUITS
   ========================================================= */

function getRealProductImage(name, id) {

    const n = name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let tags = "hardware,tools";

    if (
        n.includes("vis") ||
        n.includes("boulon") ||
        n.includes("ecrou") ||
        n.includes("rondelle") ||
        n.includes("rivet")
    ) {
        tags = "screws,bolts,hardware";
    }

    else if (
        n.includes("marteau") ||
        n.includes("massette") ||
        n.includes("burin")
    ) {
        tags = "hammer,handtools";
    }

    else if (
        n.includes("tournevis") ||
        n.includes("pince") ||
        n.includes("cle ") ||
        n.includes("cutter")
    ) {
        tags = "handtools,workshop";
    }

    else if (
        n.includes("tube") ||
        n.includes("raccord") ||
        n.includes("coude") ||
        n.includes("vanne") ||
        n.includes("robinet") ||
        n.includes("siphon")
    ) {
        tags = "plumbing,pipes";
    }

    else if (
        n.includes("cable") ||
        n.includes("fil electrique") ||
        n.includes("disjoncteur") ||
        n.includes("interrupteur") ||
        n.includes("prise") ||
        n.includes("ampoule") ||
        n.includes("led")
    ) {
        tags = "electrical,electrician";
    }

    else if (
        n.includes("peinture") ||
        n.includes("enduit") ||
        n.includes("mastic") ||
        n.includes("silicone") ||
        n.includes("colle")
    ) {
        tags = "paint,construction";
    }

    else if (
        n.includes("soudage") ||
        n.includes("soudure") ||
        n.includes("electrode") ||
        n.includes("torche mig") ||
        n.includes("torche tig")
    ) {
        tags = "welding,weldingmachine";
    }

    else if (
        n.includes("jardin") ||
        n.includes("arrosage") ||
        n.includes("irrigation") ||
        n.includes("secateur") ||
        n.includes("rateau") ||
        n.includes("pelle")
    ) {
        tags = "gardening,gardentools";
    }

    else if (
        n.includes("agricole") ||
        n.includes("agriculture") ||
        n.includes("serre") ||
        n.includes("culture")
    ) {
        tags = "agriculture,farming";
    }

    else if (
        n.includes("automobile") ||
        n.includes("moteur") ||
        n.includes("pneu") ||
        n.includes("frein") ||
        n.includes("radiateur")
    ) {
        tags = "automotive,mechanic";
    }

    else if (
        n.includes("solaire") ||
        n.includes("photovoltaique") ||
        n.includes("panneau solaire")
    ) {
        tags = "solar,panel";
    }

    else if (
        n.includes("climatisation") ||
        n.includes("climatiseur") ||
        n.includes("ventilation") ||
        n.includes("ventilateur")
    ) {
        tags = "hvac,ventilation";
    }

    else if (
        n.includes("meuble") ||
        n.includes("charniere") ||
        n.includes("poignee") ||
        n.includes("tiroir")
    ) {
        tags = "furniture,hardware";
    }

    else if (
        n.includes("toiture") ||
        n.includes("tuile") ||
        n.includes("gouttiere")
    ) {
        tags = "roofing,construction";
    }

    else if (
        n.includes("echelle") ||
        n.includes("echafaudage") ||
        n.includes("chantier")
    ) {
        tags = "construction,worksite";
    }

    else if (
        n.includes("transformateur") ||
        n.includes("batterie")
    ) {
        tags = "electrical,equipment";
    }

    const encodedTags =
        encodeURIComponent(tags);

    return `https://loremflickr.com/700/500/${encodedTags}?lock=${id}`;
}


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createProducts();

        loadCart();

        hideCategoryFilter();

        setupButtons();

        updateCart();

        renderProducts();

        updateWhatsApp();

    }
);


/* =========================================================
   CACHER CATÉGORIE
   ========================================================= */

function hideCategoryFilter() {

    const filter =
        document.getElementById(
            "categoryFilter"
        );

    if (filter) {

        filter.style.display = "none";

        filter.value = "";

    }
}


/* =========================================================
   BOUTONS
   ========================================================= */

function setupButtons() {

    const catalogButton =
        document.getElementById("catalogButton");

    const cartButton =
        document.getElementById("cartButton");

    const closeCart =
        document.getElementById("closeCart");

    const cartOverlay =
        document.getElementById("cartOverlay");

    const adminButton =
        document.getElementById("adminButton");

    const closeAdmin =
        document.getElementById("closeAdmin");

    const loginButton =
        document.getElementById("loginButton");

    const orderButton =
        document.getElementById("orderButton");

    const whatsappButton =
        document.getElementById("whatsappButton");

    const searchInput =
        document.getElementById("searchInput");


    /* =========================
       CATALOGUE
    ========================== */

    if (catalogButton) {

        catalogButton.addEventListener(
            "click",
            () => {

                const catalog =
                    document.getElementById("catalog");

                if (catalog) {

                    catalog.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =========================
       PANIER
    ========================== */

    if (cartButton) {

        cartButton.addEventListener(
            "click",
            openCart
        );

    }

    if (closeCart) {

        closeCart.addEventListener(
            "click",
            closeCartPanel
        );

    }

    if (cartOverlay) {

        cartOverlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === cartOverlay
                ) {

                    closeCartPanel();

                }

            }
        );

    }


    /* =========================
       ADMIN
    ========================== */

    if (adminButton) {

        adminButton.addEventListener(
            "click",
            openAdmin
        );

    }

    if (closeAdmin) {

        closeAdmin.addEventListener(
            "click",
            closeAdminModal
        );

    }

    if (loginButton) {

        loginButton.addEventListener(
            "click",
            loginAdmin
        );

    }


    /* =========================
       COMMANDE
    ========================== */

    if (orderButton) {

        orderButton.addEventListener(
            "click",
            confirmOrder
        );

    }


    /* =========================
       WHATSAPP PRINCIPAL
    ========================== */

    if (whatsappButton) {

        const whatsappMessage =
            "Bonjour ABG Store 👋 Je souhaite avoir des informations sur vos produits.";

        whatsappButton.href =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${
                encodeURIComponent(whatsappMessage)
            }`;

        whatsappButton.target =
            "_blank";

        whatsappButton.rel =
            "noopener noreferrer";

    }


    /* =========================
       RECHERCHE
    ========================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            event => {

                searchTerm =
                    event.target.value
                        .trim()
                        .toLowerCase();

                currentPage = 1;

                renderProducts();

            }
        );

    }


    /* =========================
       TOUCHE ÉCHAP
    ========================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCartPanel();

                closeAdminModal();

            }

        }
    );

}

/* =========================================================
   RECHERCHE
   ========================================================= */

function getFilteredProducts() {

    if (!searchTerm) {

        return products;

    }

    return products.filter(
        function (product) {

            return product.name
                .toLowerCase()
                .includes(searchTerm);

        }
    );

}


/* =========================================================
   AFFICHAGE PRODUITS
   ========================================================= */

function renderProducts() {

    const grid =
        document.getElementById(
            "productsGrid"
        );

    const noProducts =
        document.getElementById(
            "noProducts"
        );

    const productCount =
        document.getElementById(
            "productCount"
        );

    if (!grid) return;


    const oldPagination =
        document.querySelector(
            ".products-pagination"
        );

    if (oldPagination) {

        oldPagination.remove();

    }


    const filtered =
        getFilteredProducts();


    if (productCount) {

        productCount.textContent =
            `${filtered.length} produit${
                filtered.length > 1
                    ? "s"
                    : ""
            }`;

    }


    if (!filtered.length) {

        grid.innerHTML = "";

        if (noProducts) {

            noProducts.classList.remove(
                "hidden"
            );

            noProducts.style.display =
                "block";

        }

        return;

    }


    if (noProducts) {

        noProducts.classList.add(
            "hidden"
        );

        noProducts.style.display =
            "none";

    }


    const totalPages =
        Math.max(
            1,
            Math.ceil(
                filtered.length /
                PRODUCTS_PER_PAGE
            )
        );


    if (currentPage > totalPages) {

        currentPage =
            totalPages;

    }


    const start =
        (currentPage - 1) *
        PRODUCTS_PER_PAGE;


    const visible =
        filtered.slice(
            start,
            start + PRODUCTS_PER_PAGE
        );


    grid.innerHTML =
        visible
            .map(createProductCard)
            .join("");


    createPagination(
        totalPages
    );

}


/* =========================================================
   CARTE PRODUIT
   ========================================================= */

function createProductCard(product) {

    const safeName =
        escapeHtml(
            product.name
        );

    const safeImage =
        escapeHtml(
            product.image
        );

    return `

        <article class="product-card">

            <div class="product-image-wrapper">

                <div class="product-image-placeholder">
                    ${safeName}
                </div>

            </div>


            <div class="product-info">

                <h3>
                    ${safeName}
                </h3>


                <div class="product-bottom">

                    <strong>
                        ${formatPrice(
                            product.price
                        )} FCFA
                    </strong>


                    <button
                        class="add-to-cart-btn"
                        type="button"
                        onclick="addToCart(${product.id})"
                    >
                        🛒 Ajouter au panier
                    </button>

                </div>

            </div>

        </article>

    `;
}

/* =========================================================
   ERREUR IMAGE
   ========================================================= */

function productImageError(img) {

    if (!img) return;

    if (
        img.dataset.fallback === "1"
    ) {
        return;
    }

    img.dataset.fallback = "1";

    img.src =
        "https://placehold.co/700x500?text=ABG+STORE";

}


/* =========================================================
   PAGINATION
   ========================================================= */

function createPagination(totalPages) {

    const grid =
        document.getElementById(
            "productsGrid"
        );

    if (
        !grid ||
        totalPages <= 1
    ) {
        return;
    }


    const pagination =
        document.createElement(
            "div"
        );

    pagination.className =
        "products-pagination";


    let html = "";


    if (currentPage > 1) {

        html += `

            <button
                type="button"
                onclick="changePage(${
                    currentPage - 1
                })"
            >
                ← Précédent
            </button>

        `;

    }


    html += `

        <span>
            Page ${currentPage} / ${totalPages}
        </span>

    `;


    if (
        currentPage <
        totalPages
    ) {

        html += `

            <button
                type="button"
                onclick="changePage(${
                    currentPage + 1
                })"
            >
                Suivant →
            </button>

        `;

    }


    pagination.innerHTML =
        html;


    if (grid.parentNode) {

        grid.parentNode.appendChild(
            pagination
        );

    }

}


/* =========================================================
   CHANGER DE PAGE
   ========================================================= */

function changePage(page) {

    const filtered =
        getFilteredProducts();

    const totalPages =
        Math.max(
            1,
            Math.ceil(
                filtered.length /
                PRODUCTS_PER_PAGE
            )
        );


    currentPage =
        Math.max(
            1,
            Math.min(
                Number(page),
                totalPages
            )
        );


    renderProducts();


    const catalog =
        document.getElementById(
            "catalog"
        );

    if (catalog) {

        catalog.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   AJOUT PANIER
   ========================================================= */

function addToCart(productId) {

    const id =
        Number(productId);


    const product =
        products.find(
            function (item) {

                return item.id === id;

            }
        );


    if (!product) {

        console.error(
            "Produit introuvable :",
            id
        );

        return;

    }


    const existing =
        cart.find(
            function (item) {

                return item.id === id;

            }
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    openCart();

}


/* =========================================================
   SUPPRIMER DU PANIER
   ========================================================= */

function removeFromCart(productId) {

    const id =
        Number(productId);


    cart =
        cart.filter(
            function (item) {

                return item.id !== id;

            }
        );


    saveCart();

    updateCart();

}


/* =========================================================
   MODIFIER QUANTITÉ
   ========================================================= */

function changeQuantity(
    productId,
    amount
) {

    const id =
        Number(productId);


    const item =
        cart.find(
            function (product) {

                return product.id === id;

            }
        );


    if (!item) return;


    item.quantity +=
        Number(amount);


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveCart();

    updateCart();

}


/* =========================================================
   AFFICHAGE PANIER
   ========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    const emptyCart =
        document.getElementById(
            "emptyCart"
        );

    const checkout =
        document.getElementById(
            "checkout"
        );

    const cartCount =
        document.getElementById(
            "cartCount"
        );

    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    const totalQuantity =
        cart.reduce(
            function (sum, item) {

                return sum +
                    Number(
                        item.quantity
                    );

            },
            0
        );


    const total =
        cart.reduce(
            function (sum, item) {

                return sum +
                    (
                        Number(item.price) *
                        Number(item.quantity)
                    );

            },
            0
        );


    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

        cartCount.style.display =
            totalQuantity > 0
                ? "flex"
                : "none";

    }


    if (cartTotal) {

        cartTotal.textContent =
            `${formatPrice(total)} FCFA`;

    }


    if (!cart.length) {

        if (cartItems) {

            cartItems.innerHTML =
                "";

        }


        if (emptyCart) {

            emptyCart.classList.remove(
                "hidden"
            );

            emptyCart.style.display =
                "block";

        }


        if (checkout) {

            checkout.classList.add(
                "hidden"
            );

        }

        return;

    }


    if (emptyCart) {

        emptyCart.classList.add(
            "hidden"
        );

        emptyCart.style.display =
            "none";

    }


    if (checkout) {

        checkout.classList.remove(
            "hidden"
        );

    }


    if (!cartItems) return;


    cartItems.innerHTML =
        cart.map(
            function (item) {

                return `

                    <div class="cart-item">

                        <img
                            src="${escapeHtml(
                                item.image
                            )}"
                            alt="${escapeHtml(
                                item.name
                            )}"
                            onerror="productImageError(this)"
                        >


                        <div class="cart-item-info">

                            <h4>
                                ${escapeHtml(
                                    item.name
                                )}
                            </h4>


                            <strong>
                                ${formatPrice(
                                    item.price
                                )} FCFA
                            </strong>


                            <div
                                class="quantity-controls"
                            >

                                <button
                                    type="button"
                                    onclick="changeQuantity(
                                        ${item.id},
                                        -1
                                    )"
                                >
                                    −
                                </button>


                                <span>
                                    ${item.quantity}
                                </span>


                                <button
                                    type="button"
                                    onclick="changeQuantity(
                                        ${item.id},
                                        1
                                    )"
                                >
                                    +
                                </button>

                            </div>


                            <button
                                type="button"
                                class="remove-cart-button"
                                onclick="removeFromCart(
                                    ${item.id}
                                )"
                            >
                                Supprimer
                            </button>

                        </div>

                    </div>

                `;

            }
        ).join("");

}


/* =========================================================
   OUVRIR PANIER
   ========================================================= */

function openCart() {

    const panel =
        document.getElementById(
            "cartPanel"
        );

    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    if (overlay) {

        overlay.classList.add(
            "open"
        );

        overlay.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    if (panel) {

        panel.classList.add(
            "open"
        );

        panel.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    document.body.classList.add(
        "cart-open"
    );

}


/* =========================================================
   FERMER PANIER
   ========================================================= */

function closeCartPanel() {

    const panel =
        document.getElementById("cartPanel");

    const overlay =
        document.getElementById("cartOverlay");

    if (panel) {

        panel.classList.remove("active");

        panel.setAttribute(
            "aria-hidden",
            "true"
        );

    }

    if (overlay) {
        overlay.classList.remove("active");
    }
}

/* =========================================================
   ADMIN
   ========================================================= */

function openAdmin() {

    const modal =
        document.getElementById(
            "adminModal"
        );

    const username =
        document.getElementById(
            "adminUsername"
        );


    if (!modal) return;


    modal.classList.add(
        "open"
    );

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    if (username) {

        setTimeout(
            function () {

                username.focus();

            },
            100
        );

    }

}


/* =========================================================
   FERMER ADMIN
   ========================================================= */

function closeAdminModal() {

    const modal =
        document.getElementById(
            "adminModal"
        );


    if (!modal) return;


    modal.classList.remove(
        "open"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   CONNEXION ADMIN
   ========================================================= */

function loginAdmin() {

    const username =
        document.getElementById(
            "adminUsername"
        );

    const password =
        document.getElementById(
            "adminPassword"
        );

    const error =
        document.getElementById(
            "adminError"
        );


    if (
        !username ||
        !password
    ) {
        return;
    }


    if (
        username.value.trim() ===
            ADMIN_USERNAME &&
        password.value ===
            ADMIN_PASSWORD
    ) {

        localStorage.setItem(
            "abg_admin_logged",
            "true"
        );


        if (error) {

            error.textContent =
                "";

        }


        closeAdminModal();


        alert(
            "Connexion administrateur réussie."
        );


    } else {

        if (error) {

            error.textContent =
                "Identifiant ou mot de passe incorrect.";

        }

    }

}


/* =========================================================
   COMMANDE WHATSAPP
   ========================================================= */

function confirmOrder() {

    /* =========================
       VÉRIFIER LE PANIER
    ========================== */

    if (!cart.length) {

        alert(
            "Votre panier est vide."
        );

        return;
    }


    /* =========================
       RÉCUPÉRER LES INFORMATIONS
    ========================== */

    const nameInput =
        document.getElementById(
            "customerName"
        );

    const phoneInput =
        document.getElementById(
            "customerPhone"
        );

    const addressInput =
        document.getElementById(
            "customerAddress"
        );

    const paymentInput =
        document.getElementById(
            "paymentMethod"
        );


    const name =
        nameInput
            ? nameInput.value.trim()
            : "";

    const phone =
        phoneInput
            ? phoneInput.value.trim()
            : "";

    const address =
        addressInput
            ? addressInput.value.trim()
            : "";

    const payment =
        paymentInput
            ? paymentInput.value
            : "Non précisé";


    /* =========================
       VÉRIFICATIONS
    ========================== */

    if (!name) {

        alert(
            "Veuillez entrer votre nom complet."
        );

        if (nameInput) {
            nameInput.focus();
        }

        return;
    }


    if (!phone) {

        alert(
            "Veuillez entrer votre numéro de téléphone."
        );

        if (phoneInput) {
            phoneInput.focus();
        }

        return;
    }


    if (!address) {

        alert(
            "Veuillez entrer votre adresse de livraison."
        );

        if (addressInput) {
            addressInput.focus();
        }

        return;
    }


    /* =========================
       CALCULS
    ========================== */

    const total =
        cart.reduce(
            function (sum, item) {

                return sum +
                    Number(item.price) *
                    Number(item.quantity);

            },
            0
        );


    const totalQuantity =
        cart.reduce(
            function (sum, item) {

                return sum +
                    Number(item.quantity);

            },
            0
        );


    /* =========================
       PRODUITS
    ========================== */

    const productsMessage =
        cart.map(
            function (item, index) {

                const subtotal =
                    Number(item.price) *
                    Number(item.quantity);

                return (
                    `${index + 1}. ${item.name}\n` +
                    `   Quantité : ${item.quantity}\n` +
                    `   Prix : ${formatPrice(item.price)} FCFA\n` +
                    `   Sous-total : ${formatPrice(subtotal)} FCFA`
                );

            }
        ).join("\n\n");


    /* =========================
       MESSAGE WHATSAPP
    ========================== */

    const message =
`🛒 NOUVELLE COMMANDE — ABG STORE

━━━━━━━━━━━━━━━━━━

👤 INFORMATIONS CLIENT

Nom : ${name}
Téléphone : ${phone}
Adresse : ${address}

━━━━━━━━━━━━━━━━━━

📦 DÉTAIL DE LA COMMANDE

${productsMessage}

━━━━━━━━━━━━━━━━━━

📊 RÉSUMÉ

Articles : ${totalQuantity}

💰 TOTAL : ${formatPrice(total)} FCFA

💳 Paiement : ${payment}

━━━━━━━━━━━━━━━━━━

Bonjour ABG Store 👋

Je souhaite confirmer ma commande.

Merci.`;


    /* =========================
       LIEN WHATSAPP
    ========================== */

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${
            encodeURIComponent(message)
        }`;


    /* =========================
       OUVRIR WHATSAPP
    ========================== */

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}

/* =========================================================
   WHATSAPP
   ========================================================= */

function updateWhatsApp() {

    const button =
        document.getElementById(
            "whatsappButton"
        );


    if (!button) return;


    button.href =
        `https://wa.me/${WHATSAPP_NUMBER}`;


    button.target =
        "_blank";


    button.rel =
        "noopener noreferrer";

}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "abg_cart",
        JSON.stringify(cart)
    );

}


function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                "abg_cart"
            );


        if (!saved) {

            cart = [];

            return;

        }


        const parsed =
            JSON.parse(saved);


        if (!Array.isArray(parsed)) {

            cart = [];

            return;

        }


        cart =
            parsed
                .filter(
                    function (item) {

                        return (
                            item &&
                            Number.isFinite(
                                Number(item.id)
                            ) &&
                            Number(item.quantity) > 0
                        );

                    }
                )
                .map(
                    function (item) {

                        return {

                            id:
                                Number(
                                    item.id
                                ),

                            name:
                                String(
                                    item.name || ""
                                ),

                            price:
                                Number(
                                    item.price || 0
                                ),

                            image:
                                String(
                                    item.image || ""
                                ),

                            quantity:
                                Math.max(
                                    1,
                                    Math.floor(
                                        Number(
                                            item.quantity
                                        )
                                    )
                                )

                        };

                    }
                );


    } catch (error) {

        console.error(
            "Erreur chargement panier :",
            error
        );

        cart = [];

    }

}


/* =========================================================
   FORMAT PRIX
   ========================================================= */

function formatPrice(number) {

    return Number(
        number || 0
    ).toLocaleString(
        "fr-FR"
    );

}


/* =========================================================
   SÉCURISATION HTML
   ========================================================= */

function escapeHtml(text) {

    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   FONCTIONS ACCESSIBLES DEPUIS HTML
   ========================================================= */

window.addToCart =
    addToCart;

window.removeFromCart =
    removeFromCart;

window.changeQuantity =
    changeQuantity;

window.changePage =
    changePage;

window.openCart =
    openCart;

window.closeCartPanel =
    closeCartPanel;

window.openAdmin =
    openAdmin;

window.closeAdminModal =
    closeAdminModal;

window.loginAdmin =
    loginAdmin;

window.confirmOrder =
    confirmOrder;

window.productImageError =
    productImageError;
    
/* =========================================================
   PRIX AUTOMATIQUE
   ========================================================= */

function generatePrice(index, name) {

    const lower = name.toLowerCase();

    if (
        lower.includes("vis") ||
        lower.includes("rondelle") ||
        lower.includes("écrou") ||
        lower.includes("cheville") ||
        lower.includes("rivet")
    ) {
        return 100 + ((index * 37) % 1900);
    }

    if (
        lower.includes("marteau") ||
        lower.includes("pince") ||
        lower.includes("tournevis") ||
        lower.includes("clé") ||
        lower.includes("scie")
    ) {
        return 1500 + ((index * 113) % 13500);
    }

    if (
        lower.includes("pompe") ||
        lower.includes("moteur") ||
        lower.includes("poste") ||
        lower.includes("compresseur") ||
        lower.includes("échelle")
    ) {
        return 15000 + ((index * 733) % 185000);
    }

    return 1000 + ((index * 97) % 29000);
}

/* =========================================================
   PHOTOS RÉELLES
   ========================================================= */

function getRealProductImage(name, id) {

    let tags = "hardware,tools";

    const n = name.toLowerCase();

    if (
        n.includes("vis") ||
        n.includes("écrou") ||
        n.includes("boulon") ||
        n.includes("rondelle") ||
        n.includes("tige filetée") ||
        n.includes("rivet")
    ) {
        tags = "screws,bolts,hardware";
    }

    else if (
        n.includes("marteau") ||
        n.includes("massette") ||
        n.includes("burin")
    ) {
        tags = "hammer,handtools";
    }

    else if (
        n.includes("tournevis") ||
        n.includes("pince") ||
        n.includes("clé") ||
        n.includes("cutter")
    ) {
        tags = "handtools,workshop";
    }

    else if (
        n.includes("tube") ||
        n.includes("raccord") ||
        n.includes("coude") ||
        n.includes("vanne") ||
        n.includes("robinet") ||
        n.includes("siphon")
    ) {
        tags = "plumbing,pipes";
    }

    else if (
        n.includes("câble") ||
        n.includes("fil électrique") ||
        n.includes("disjoncteur") ||
        n.includes("interrupteur") ||
        n.includes("prise") ||
        n.includes("ampoule") ||
        n.includes("led")
    ) {
        tags = "electrical,electrician";
    }

    else if (
        n.includes("peinture") ||
        n.includes("enduit") ||
        n.includes("mastic") ||
        n.includes("silicone") ||
        n.includes("colle")
    ) {
        tags = "paint,construction";
    }

    else if (
        n.includes("soudage") ||
        n.includes("soudure") ||
        n.includes("électrode") ||
        n.includes("torche mig") ||
        n.includes("torche tig")
    ) {
        tags = "welding,weldingmachine";
    }

    else if (
        n.includes("jardin") ||
        n.includes("arrosage") ||
        n.includes("irrigation") ||
        n.includes("sécateur") ||
        n.includes("râteau") ||
        n.includes("pelle")
    ) {
        tags = "gardening,gardentools";
    }

    else if (
        n.includes("agricole") ||
        n.includes("agriculture") ||
        n.includes("serre") ||
        n.includes("culture")
    ) {
        tags = "agriculture,farming";
    }

    else if (
        n.includes("automobile") ||
        n.includes("moteur") ||
        n.includes("pneu") ||
        n.includes("frein") ||
        n.includes("radiateur")
    ) {
        tags = "automotive,mechanic";
    }

    else if (
        n.includes("solaire") ||
        n.includes("photovoltaïque") ||
        n.includes("panneau solaire")
    ) {
        tags = "solar,panel";
    }

    else if (
        n.includes("climatisation") ||
        n.includes("climatiseur") ||
        n.includes("ventilation") ||
        n.includes("ventilateur")
    ) {
        tags = "hvac,ventilation";
    }

    else if (
        n.includes("meuble") ||
        n.includes("charnière") ||
        n.includes("poignée") ||
        n.includes("tiroir")
    ) {
        tags = "furniture,hardware";
    }

    else if (
        n.includes("toiture") ||
        n.includes("tuile") ||
        n.includes("gouttière")
    ) {
        tags = "roofing,construction";
    }

    else if (
        n.includes("échelle") ||
        n.includes("échafaudage") ||
        n.includes("chantier")
    ) {
        tags = "construction,worksite";
    }

    else if (
        n.includes("électrique") ||
        n.includes("transformateur") ||
        n.includes("batterie")
    ) {
        tags = "electrical,equipment";
    }

    const encodedTags = encodeURIComponent(tags);

    return `https://loremflickr.com/700/500/${encodedTags}?lock=${id}`;
}

/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    createProducts();

    loadCart();

    hideCategoryFilter();

    setupButtons();

    updateCart();

    renderProducts();

    updateWhatsApp();

});

/* =========================================================
   CACHER LA CATÉGORISATION
   ========================================================= */

function hideCategoryFilter() {

    const filter = document.getElementById("categoryFilter");

    if (filter) {
        filter.style.display = "none";
    }
}

/* =========================================================
   BOUTONS
   ========================================================= */

function setupButtons() {

    const catalogButton =
        document.getElementById("catalogButton");

    const cartButton =
        document.getElementById("cartButton");

    const closeCart =
        document.getElementById("closeCart");

    const cartOverlay =
        document.getElementById("cartOverlay");

    const adminButton =
        document.getElementById("adminButton");

    const closeAdmin =
        document.getElementById("closeAdmin");

    const loginButton =
        document.getElementById("loginButton");

    const orderButton =
        document.getElementById("orderButton");

    const whatsappButton =
        document.getElementById("whatsappButton");

    const searchInput =
        document.getElementById("searchInput");


    /* =========================
       CATALOGUE
    ========================== */

    if (catalogButton) {

        catalogButton.addEventListener(
            "click",
            () => {

                const catalog =
                    document.getElementById("catalog");

                if (catalog) {

                    catalog.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =========================
       PANIER
    ========================== */

    if (cartButton) {

        cartButton.addEventListener(
            "click",
            openCart
        );

    }


    if (closeCart) {

        closeCart.addEventListener(
            "click",
            closeCartPanel
        );

    }


    if (cartOverlay) {

        cartOverlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === cartOverlay
                ) {

                    closeCartPanel();

                }

            }
        );

    }


    /* =========================
       ADMIN
    ========================== */

    if (adminButton) {

        adminButton.addEventListener(
            "click",
            openAdmin
        );

    }


    if (closeAdmin) {

        closeAdmin.addEventListener(
            "click",
            closeAdminModal
        );

    }


    if (loginButton) {

        loginButton.addEventListener(
            "click",
            loginAdmin
        );

    }


    /* =========================
       COMMANDE WHATSAPP
    ========================== */

    if (orderButton) {

        orderButton.addEventListener(
            "click",
            confirmOrder
        );

    }


    /* =========================
       WHATSAPP PRINCIPAL
    ========================== */

    if (whatsappButton) {

        whatsappButton.href =
            `https://wa.me/${WHATSAPP_NUMBER}`;

        whatsappButton.target =
            "_blank";

        whatsappButton.rel =
            "noopener noreferrer";

    }


    /* =========================
       RECHERCHE
    ========================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            event => {

                searchTerm =
                    event.target.value
                        .trim()
                        .toLowerCase();

                currentPage = 1;

                renderProducts();

            }
        );

    }


    /* =========================
       TOUCHE ÉCHAP
    ========================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCartPanel();

                closeAdminModal();

            }

        }
    );

}
/* =========================================================
   RECHERCHE
   ========================================================= */

function getFilteredProducts() {

    if (!searchTerm) {
        return products;
    }

    return products.filter(product =>
        product.name
            .toLowerCase()
            .includes(searchTerm)
    );
}

/* =========================================================
   AFFICHAGE PRODUITS
   ========================================================= */

function renderProducts() {

    const grid =
        document.getElementById("productsGrid");

    const noProducts =
        document.getElementById("noProducts");

    const productCount =
        document.getElementById("productCount");

    if (!grid) return;

    // Récupération des produits filtrés
    const filtered =
        getFilteredProducts();

    // Affichage du nombre de produits
    if (productCount) {
        productCount.textContent =
            `${filtered.length} produit${filtered.length > 1 ? "s" : ""}`;
    }

    // Aucun produit trouvé
    if (!filtered.length) {

        grid.innerHTML = "";

        if (noProducts) {
            noProducts.classList.remove("hidden");
        }

        return;
    }

    // Produits trouvés
    if (noProducts) {
        noProducts.classList.add("hidden");
    }

    // Calcul du nombre de pages
    const totalPages =
        Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

    // Vérification de la page actuelle
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    if (currentPage < 1) {
        currentPage = 1;
    }

    // Position de départ
    const start =
        (currentPage - 1) *
        PRODUCTS_PER_PAGE;

    // Produits visibles sur la page
    const visible =
        filtered.slice(
            start,
            start + PRODUCTS_PER_PAGE
        );

    // Affichage des cartes
    grid.innerHTML =
        visible.map(createProductCard).join("");

    // Pagination
    createPagination(totalPages);
}

/* =========================================================
   CARTE PRODUIT
   ========================================================= */

function createProductCard(product) {

    const safeName =
        escapeHtml(product.name);

    return `
        <article class="product-card">

            <button
                type="button"
                class="product-name-button"
                onclick="addToCart(${product.id})"
            >

                <span class="product-name">
                    ${safeName}
                </span>

                <span class="product-action">
                    🛒 Ajouter au panier
                </span>

            </button>

        </article>
    `;
}
/* =========================================================
   PAGINATION
   ========================================================= */

function createPagination(totalPages) {

    const grid =
        document.getElementById("productsGrid");

    if (!grid || totalPages <= 1) {
        return;
    }

    let html =
        `<div class="products-pagination">`;

    if (currentPage > 1) {

        html += `
            <button
                type="button"
                onclick="changePage(${currentPage - 1})"
            >
                ← Précédent
            </button>
        `;
    }

    html += `
        <span>
            Page ${currentPage} / ${totalPages}
        </span>
    `;

    if (currentPage < totalPages) {

        html += `
            <button
                type="button"
                onclick="changePage(${currentPage + 1})"
            >
                Suivant →
            </button>
        `;
    }

    html += `</div>`;

    grid.insertAdjacentHTML(
        "beforeend",
        html
    );
}

function changePage(page) {

    currentPage = page;

    renderProducts();

    const catalog =
        document.getElementById("catalog");

    if (catalog) {

        catalog.scrollIntoView({
            behavior: "smooth"
        });

    }
}

/* =========================================================
   PANIER
   ========================================================= */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) return;

    const existing =
        cart.find(
            item => item.id === productId
        );

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });

    }

    saveCart();

    updateCart();

    openCart();
}

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

    updateCart();
}

function changeQuantity(productId, amount) {

    const item =
        cart.find(
            product => product.id === productId
        );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;
    }

    saveCart();

    updateCart();
}

/* =========================================================
   AFFICHAGE PANIER
   ========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const checkout =
        document.getElementById("checkout");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    // Quantité totale
    const totalQuantity =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );

    // Prix total
    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );

    // Nombre d'articles
    if (cartCount) {
        cartCount.textContent =
            totalQuantity;
    }

    // Total du panier
    if (cartTotal) {
        cartTotal.textContent =
            formatPrice(total);
    }

    // Panier vide
    if (!cart.length) {

        if (cartItems) {
            cartItems.innerHTML = "";
        }

        if (emptyCart) {
            emptyCart.classList.remove("hidden");
        }

        if (checkout) {
            checkout.classList.add("hidden");
        }

        return;
    }

    // Panier rempli
    if (emptyCart) {
        emptyCart.classList.add("hidden");
    }

    if (checkout) {
        checkout.classList.remove("hidden");
    }

    // Affichage des produits
    if (cartItems) {

        cartItems.innerHTML =
            cart.map(item => `

                <div class="cart-item">

                    <div class="cart-item-info">

                        <h4 class="cart-item-name">
                            ${escapeHtml(item.name)}
                        </h4>

                        <strong class="cart-item-price">
                            ${formatPrice(item.price)}
                            FCFA
                        </strong>

                        <div class="quantity-controls">

                            <button
                                type="button"
                                onclick="changeQuantity(${item.id}, -1)"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                type="button"
                                onclick="changeQuantity(${item.id}, 1)"
                            >
                                +
                            </button>

                        </div>

                        <button
                            type="button"
                            class="remove-button"
                            onclick="removeFromCart(${item.id})"
                        >
                            🗑️ Supprimer
                        </button>

                    </div>

                </div>

            `).join("");
    }
}

/* =========================================================
   OUVRIR / FERMER PANIER
   ========================================================= */

function openCart() {

    const panel =
        document.getElementById("cartPanel");

    const overlay =
        document.getElementById("cartOverlay");

    if (panel) {

        panel.classList.add("active");

        panel.setAttribute(
            "aria-hidden",
            "false"
        );

    }

    if (overlay) {
        overlay.classList.add("active");
    }

    updateCart();
}

/* =========================================================
   ADMINISTRATION
   ========================================================= */

function openAdmin() {

    const modal =
        document.getElementById("adminModal");

    if (modal) {
        modal.classList.add("open");
    }
}

function closeAdminModal() {

    const modal =
        document.getElementById("adminModal");

    if (modal) {
        modal.classList.remove("open");
    }
}

function loginAdmin() {

    const username =
        document.getElementById("adminUsername");

    const password =
        document.getElementById("adminPassword");

    const error =
        document.getElementById("adminError");

    if (!username || !password) {
        return;
    }

    if (
        username.value.trim() ===
        ADMIN_USERNAME &&
        password.value ===
        ADMIN_PASSWORD
    ) {

        if (error) {
            error.textContent = "";
        }

        localStorage.setItem(
            "abg_admin_logged",
            "true"
        );

        closeAdminModal();

        alert(
            "Connexion administrateur réussie."
        );

    } else {

        if (error) {

            error.textContent =
                "Identifiant ou mot de passe incorrect.";

        }

    }
}

/* =========================================================
   COMMANDE
   ========================================================= */

function confirmOrder() {

    if (!cart.length) {
        alert("Votre panier est vide.");
        return;
    }

    /* =========================
       INFORMATIONS CLIENT
    ========================== */

    const name =
        document.getElementById("customerName")?.value.trim() || "";

    const phone =
        document.getElementById("customerPhone")?.value.trim() || "";

    const address =
        document.getElementById("customerAddress")?.value.trim() || "";

    const payment =
        document.getElementById("paymentMethod")?.value ||
        "Non précisé";


    /* =========================
       VÉRIFICATION
    ========================== */

    if (!name || !phone || !address) {

        alert(
            "Veuillez remplir votre nom, téléphone et adresse."
        );

        return;
    }


    /* =========================
       CALCUL DU TOTAL
    ========================== */

    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                Number(item.price) *
                Number(item.quantity),
            0
        );


    /* =========================
       PRODUITS
    ========================== */

    let productsMessage = "";

    cart.forEach((item, index) => {

        const price =
            Number(item.price);

        const quantity =
            Number(item.quantity);

        const subtotal =
            price * quantity;

        productsMessage +=
            `${index + 1}. ${item.name} x ${quantity} = ${formatPrice(subtotal)} FCFA\n`;

    });


    /* =========================
       MESSAGE DE COMMANDE
    ========================== */

    const message =
`NOUVELLE COMMANDE ABG STORE

Nom : ${name}
Téléphone : ${phone}
Adresse : ${address}
Paiement : ${payment}

Produits :

${productsMessage}
TOTAL : ${formatPrice(total)} FCFA

Bonjour ABG Store.
Je souhaite confirmer ma commande.`;


    /* =========================
       COPIER LA COMMANDE
    ========================== */

    try {

        const textarea =
            document.createElement("textarea");

        textarea.value = message;

        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.top = "0";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        document.execCommand("copy");

        document.body.removeChild(textarea);

    } catch (error) {

        console.log(
            "Copie automatique impossible",
            error
        );

    }


    /* =========================
       OUVRIR WHATSAPP
    ========================== */

    const encodedMessage =
        encodeURIComponent(message);

    const whatsappUrl =
        `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

    window.open(
        whatsappUrl,
        "_blank"
    );

}
/* =========================================================
   OUTILS
   ========================================================= */

function formatPrice(number) {

    return Number(number)
        .toLocaleString("fr-FR");
}

function escapeHtml(text) {

    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* =========================================================
   EXPOSER LES FONCTIONS AUX BOUTONS HTML
   ========================================================= */

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;
window.changePage = changePage;
