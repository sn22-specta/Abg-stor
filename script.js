"use strict";

/* =========================================================
   ABG STORE
   SCRIPT.JS — VERSION PROFESSIONNELLE
   PRODUITS :
   - MAJUSCULES
   - SANS ACCENTS
   - SANS CÉDILLE
   - SANS PRIX
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const CONFIG = Object.freeze({

    whatsappNumber: "221775673182",

    /*
     * ATTENTION :
     * Ces identifiants sont visibles dans le navigateur.
     * Ils ne constituent PAS une vraie sécurité.
     * Pour une vraie administration, utiliser un backend.
     */

    adminUsername: "admin",
    adminPassword: "ABG2026",

    storageCart: "abg_cart",
    storageAdmin: "abg_admin_logged",

    productsPerPage: 100,

    whatsappDefaultMessage:
        "Bonjour ABG Store 👋 Je souhaite avoir des informations sur vos produits."

});


/* =========================================================
   ÉTAT DE L'APPLICATION
   ========================================================= */

let products = [];
let cart = [];

const state = {
    currentPage: 1,
    searchTerm: "",
    sortBy: "default"
};


/* =========================================================
   LISTE DES PRODUITS
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
`.trim();


/* =========================================================
   NORMALISATION DES TEXTES
   ========================================================= */

/*
 * Transforme :
 *
 * "Écrou à œil"
 *
 * en :
 *
 * "ECROU A ŒIL"
 *
 * puis remplace les caractères spéciaux restants
 * afin d'obtenir uniquement un nom propre au catalogue.
 */

function normalizeText(value) {

    return String(value ?? "")
        .normalize("NFD")

        // Suppression des accents
        .replace(/[\u0300-\u036f]/g, "")

        // Cédille
        .replace(/[çÇ]/g, "C")

        // Ligatures françaises
        .replace(/[œŒ]/g, "OE")
        .replace(/[æÆ]/g, "AE")

        // Apostrophes typographiques
        .replace(/[’‘`]/g, "'")

        // Majuscules
        .toUpperCase()

        // Espaces multiples
        .replace(/\s+/g, " ")

        .trim();
}


/* =========================================================
   PROTECTION HTML
   ========================================================= */

function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   LIMITATION DES VALEURS
   ========================================================= */

function clamp(value, min, max) {

    return Math.min(
        Math.max(value, min),
        max
    );
}


/* =========================================================
   CRÉATION DU CATALOGUE
   ========================================================= */

function createProducts() {

    if (typeof productNames !== "string") {

        console.error(
            "ABG STORE : productNames invalide."
        );

        products = [];

        return;
    }


    /*
     * Chaque nom est automatiquement transformé
     * en MAJUSCULES et SANS ACCENTS.
     */

    const names = productNames
        .split("\n")
        .map(name => normalizeText(name))
        .filter(Boolean);


    /*
     * Suppression des doublons.
     */

    const uniqueNames = [];
    const seen = new Set();


    names.forEach(name => {

        const normalized = normalizeText(name);

        if (!seen.has(normalized)) {

            seen.add(normalized);

            uniqueNames.push(name);
        }

    });


    /*
     * Création des produits.
     */

    products = uniqueNames.map((name, index) => ({

        id: index + 1,

        name: name,

        normalizedName: normalizeText(name),

        stock: 999,

        category: "",

        image: "",

        active: true

    }));


    console.log(
        `ABG STORE : ${products.length} PRODUITS CHARGES.`
    );

}


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    init
);


function init() {

    createProducts();

    loadCart();

    setupButtons();

    hideCategoryFilter();

    restoreAdminSession();

    updateCart();

    renderProducts();

    updateWhatsApp();

    console.log(
        "ABG STORE : APPLICATION INITIALISEE."
    );

}


/* =========================================================
   FILTRE CATÉGORIE
   ========================================================= */

function hideCategoryFilter() {

    const filter =
        document.getElementById("categoryFilter");

    if (!filter) return;

    filter.style.display = "none";

    filter.value = "";

}


/* =========================================================
   BOUTONS
   ========================================================= */

function setupButtons() {

    const catalogButton =
        document.getElementById("catalogButton");

    const cartButton =
        document.getElementById("cartButton");

    const closeCartButton =
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

    const searchInput =
        document.getElementById("searchInput");


    catalogButton?.addEventListener(
        "click",
        () => {

            document
                .getElementById("catalog")
                ?.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

        }
    );


    cartButton?.addEventListener(
        "click",
        openCart
    );


    closeCartButton?.addEventListener(
        "click",
        closeCartPanel
    );


    cartOverlay?.addEventListener(
        "click",
        event => {

            if (
                event.target === cartOverlay
            ) {

                closeCartPanel();

            }

        }
    );


    adminButton?.addEventListener(
        "click",
        openAdmin
    );


    closeAdmin?.addEventListener(
        "click",
        closeAdminModal
    );


    loginButton?.addEventListener(
        "click",
        loginAdmin
    );


    orderButton?.addEventListener(
        "click",
        confirmOrder
    );


    searchInput?.addEventListener(
        "input",
        event => {

            state.searchTerm =
                normalizeText(event.target.value);

            state.currentPage = 1;

            renderProducts();

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") return;

            closeCartPanel();

            closeAdminModal();

        }
    );


    document.addEventListener(
        "submit",
        event => {

            const form = event.target;

            if (
                form &&
                form.id === "adminForm"
            ) {

                event.preventDefault();

                loginAdmin();

            }

        }
    );

}


/* =========================================================
   RECHERCHE ET TRI
   ========================================================= */

function getFilteredProducts() {

    const result = products.filter(
        product => {

            if (!product.active) {
                return false;
            }

            if (!state.searchTerm) {
                return true;
            }

            return product.normalizedName.includes(
                state.searchTerm
            );

        }
    );


    switch (state.sortBy) {

        case "name-asc":

            result.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name,
                        "fr"
                    )
            );

            break;


        case "name-desc":

            result.sort(
                (a, b) =>
                    b.name.localeCompare(
                        a.name,
                        "fr"
                    )
            );

            break;


        default:

            break;

    }


    return result;

}


/* =========================================================
   AFFICHAGE DES PRODUITS
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


    document
        .querySelector(
            ".products-pagination"
        )
        ?.remove();


    const filtered =
        getFilteredProducts();


    if (productCount) {

        productCount.textContent =
            `${filtered.length} PRODUIT${filtered.length > 1 ? "S" : ""}`;

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
                CONFIG.productsPerPage
            )
        );


    state.currentPage =
        clamp(
            state.currentPage,
            1,
            totalPages
        );


    const start =
        (state.currentPage - 1) *
        CONFIG.productsPerPage;


    const visible =
        filtered.slice(
            start,
            start + CONFIG.productsPerPage
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

    const name =
        escapeHtml(product.name);


    return `

        <article
            class="product-card"
            data-product-id="${product.id}"
        >

            <div class="product-name-area">

                <h3 class="product-title">
                    ${name}
                </h3>

            </div>


            <div class="product-actions">

                <button
                    type="button"
                    class="preview-btn"
                    data-action="preview"
                    data-product-id="${product.id}"
                    aria-label="Aperçu de ${name}"
                >
                    👁️ APERCU
                </button>


                <button
                    type="button"
                    class="add-to-cart-btn"
                    data-action="add"
                    data-product-id="${product.id}"
                >
                    🛒 AJOUTER
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   ÉVÉNEMENTS PRODUITS
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-action]"
            );

        if (!button) return;


        const action =
            button.dataset.action;


        const productId =
            Number(
                button.dataset.productId
            );


        if (!Number.isFinite(productId)) {
            return;
        }


        if (action === "add") {

            addToCart(productId);

        }


        if (action === "preview") {

            previewProduct(productId);

        }

    }
);


/* =========================================================
   APERÇU PRODUIT
   ========================================================= */

function previewProduct(productId) {

    const product =
        products.find(
            item =>
                item.id ===
                Number(productId)
        );


    if (!product) return;


    const url =
        "https://www.google.com/search?tbm=isch&q=" +
        encodeURIComponent(
            product.name
        );


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


function searchProductImage(productName) {

    const name =
        String(productName ?? "");


    if (!name.trim()) return;


    const url =
        "https://www.google.com/search?tbm=isch&q=" +
        encodeURIComponent(
            normalizeText(name)
        );


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

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


    const previousDisabled =
        state.currentPage <= 1
            ? "disabled"
            : "";


    const nextDisabled =
        state.currentPage >= totalPages
            ? "disabled"
            : "";


    pagination.innerHTML = `

        <button
            type="button"
            data-page-action="previous"
            ${previousDisabled}
        >
            ← PRECEDENT
        </button>


        <span>
            PAGE ${state.currentPage} / ${totalPages}
        </span>


        <button
            type="button"
            data-page-action="next"
            ${nextDisabled}
        >
            SUIVANT →
        </button>

    `;


    grid.insertAdjacentElement(
        "afterend",
        pagination
    );

}


document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-page-action]"
            );


        if (!button) return;


        const action =
            button.dataset.pageAction;


        if (
            action === "previous"
        ) {

            changePage(
                state.currentPage - 1
            );

        }


        if (
            action === "next"
        ) {

            changePage(
                state.currentPage + 1
            );

        }

    }
);


function changePage(page) {

    const filtered =
        getFilteredProducts();


    const totalPages =
        Math.max(
            1,
            Math.ceil(
                filtered.length /
                CONFIG.productsPerPage
            )
        );


    state.currentPage =
        clamp(
            Number(page) || 1,
            1,
            totalPages
        );


    renderProducts();


    document
        .getElementById("catalog")
        ?.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


/* =========================================================
   PANIER
   ========================================================= */

function addToCart(productId) {

    const id =
        Number(productId);


    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {

        showNotification(
            "PRODUIT INTROUVABLE.",
            "error"
        );

        return;

    }


    if (product.stock <= 0) {

        showNotification(
            "PRODUIT ACTUELLEMENT INDISPONIBLE.",
            "error"
        );

        return;

    }


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            quantity: 1

        });

    }


    saveCart();

    updateCart();


    showNotification(
        `${product.name} AJOUTE AU PANIER.`,
        "success"
    );

}


function removeFromCart(productId) {

    const id =
        Number(productId);


    cart =
        cart.filter(
            item => item.id !== id
        );


    saveCart();

    updateCart();

}


function changeQuantity(
    productId,
    amount
) {

    const id =
        Number(productId);


    const item =
        cart.find(
            product => product.id === id
        );


    if (!item) return;


    const quantity =
        Math.floor(
            Number(item.quantity)
        ) +
        Number(amount);


    if (quantity <= 0) {

        removeFromCart(id);

        return;

    }


    item.quantity =
        Math.min(
            quantity,
            999
        );


    saveCart();

    updateCart();

}


/* =========================================================
   RÉSUMÉ PANIER
   ========================================================= */

function getCartSummary() {

    const totalQuantity =
        cart.reduce(
            (sum, item) =>
                sum +
                Number(item.quantity),
            0
        );


    return {
        totalQuantity
    };

}


/* =========================================================
   MISE À JOUR PANIER
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


    const summary =
        getCartSummary();


    if (cartCount) {

        cartCount.textContent =
            summary.totalQuantity;


        cartCount.style.display =
            summary.totalQuantity > 0
                ? "flex"
                : "none";

    }


    if (!cart.length) {

        if (cartItems) {

            cartItems.innerHTML = "";

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
        cart
            .map(createCartItem)
            .join("");

}


/* =========================================================
   ARTICLE PANIER
   ========================================================= */

function createCartItem(item) {

    const name =
        escapeHtml(item.name);


    return `

        <div
            class="cart-item"
            data-cart-id="${item.id}"
        >

            <div class="cart-item-info">

                <h4>
                    ${name}
                </h4>


                <div class="quantity-controls">

                    <button
                        type="button"
                        data-cart-action="decrease"
                        data-product-id="${item.id}"
                        aria-label="Diminuer la quantité"
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        type="button"
                        data-cart-action="increase"
                        data-product-id="${item.id}"
                        aria-label="Augmenter la quantité"
                    >
                        +
                    </button>

                </div>


                <button
                    type="button"
                    class="remove-cart-button"
                    data-cart-action="remove"
                    data-product-id="${item.id}"
                >
                    🗑️ SUPPRIMER
                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   ACTIONS PANIER
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-cart-action]"
            );


        if (!button) return;


        const action =
            button.dataset.cartAction;


        const productId =
            Number(
                button.dataset.productId
            );


        if (!Number.isFinite(productId)) {
            return;
        }


        switch (action) {

            case "increase":

                changeQuantity(
                    productId,
                    1
                );

                break;


            case "decrease":

                changeQuantity(
                    productId,
                    -1
                );

                break;


            case "remove":

                removeFromCart(
                    productId
                );

                break;

        }

    }
);


/* =========================================================
   OUVERTURE DU PANIER
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


    if (!panel) {

        console.error(
            "ABG STORE : #cartPanel INTROUVABLE."
        );

        return;

    }


    panel.classList.add(
        "open"
    );


    panel.setAttribute(
        "aria-hidden",
        "false"
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


    document.body.classList.add(
        "cart-open"
    );


    updateCart();

}


function closeCartPanel() {

    const panel =
        document.getElementById(
            "cartPanel"
        );


    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    panel?.classList.remove(
        "open"
    );


    overlay?.classList.remove(
        "open"
    );


    panel?.setAttribute(
        "aria-hidden",
        "true"
    );


    overlay?.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "cart-open"
    );

}


/* =========================================================
   ADMINISTRATION
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


    setTimeout(
        () => {
            username?.focus();
        },
        100
    );

}


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


    if (!username || !password) {
        return;
    }


    const enteredUsername =
        username.value.trim();


    const enteredPassword =
        password.value;


    if (

        enteredUsername ===
            CONFIG.adminUsername &&

        enteredPassword ===
            CONFIG.adminPassword

    ) {

        localStorage.setItem(
            CONFIG.storageAdmin,
            "true"
        );


        if (error) {

            error.textContent = "";

        }


        closeAdminModal();


        document.body.classList.add(
            "admin-authenticated"
        );


        password.value = "";


        showNotification(
            "CONNEXION ADMINISTRATEUR REUSSIE.",
            "success"
        );


        return;

    }


    if (error) {

        error.textContent =
            "IDENTIFIANT OU MOT DE PASSE INCORRECT.";

    }


    password.value = "";

    password.focus();

}


/* =========================================================
   SESSION ADMIN
   ========================================================= */

function restoreAdminSession() {

    const logged =
        localStorage.getItem(
            CONFIG.storageAdmin
        );


    if (logged === "true") {

        document.body.classList.add(
            "admin-authenticated"
        );

    }

}


function logoutAdmin() {

    localStorage.removeItem(
        CONFIG.storageAdmin
    );


    document.body.classList.remove(
        "admin-authenticated"
    );


    showNotification(
        "VOUS ETES DECONNECTE.",
        "success"
    );

}


/* =========================================================
   COMMANDE WHATSAPP
   ========================================================= */

function confirmOrder() {

    if (!cart.length) {

        showNotification(
            "VOTRE PANIER EST VIDE.",
            "error"
        );

        return;

    }


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
        nameInput?.value.trim() || "";


    const phone =
        phoneInput?.value.trim() || "";


    const address =
        addressInput?.value.trim() || "";


    const payment =
        paymentInput?.value ||
        "NON PRECISE";


    if (!name) {

        showNotification(
            "VEUILLEZ ENTRER VOTRE NOM COMPLET.",
            "error"
        );

        nameInput?.focus();

        return;

    }


    if (!phone) {

        showNotification(
            "VEUILLEZ ENTRER VOTRE NUMERO DE TELEPHONE.",
            "error"
        );

        phoneInput?.focus();

        return;

    }


    if (!address) {

        showNotification(
            "VEUILLEZ ENTRER VOTRE ADRESSE.",
            "error"
        );

        addressInput?.focus();

        return;

    }


    const summary =
        getCartSummary();


    const productsMessage =
        cart
            .map(
                (item, index) => {

                    return (
                        `${index + 1}. ` +
                        `${item.name} ` +
                        `x${item.quantity}`
                    );

                }
            )
            .join("\n");


    const message =
`🛒 NOUVELLE COMMANDE — ABG STORE

━━━━━━━━━━━━━━━━━━
👤 INFORMATIONS CLIENT

Nom : ${name}
Téléphone : ${phone}
Adresse : ${address}

━━━━━━━━━━━━━━━━━━
📦 COMMANDE

${productsMessage}

━━━━━━━━━━━━━━━━━━
📊 RESUME

Nombre total d'articles : ${summary.totalQuantity}
Paiement : ${payment}

━━━━━━━━━━━━━━━━━━

Bonjour ABG Store 👋

Je souhaite confirmer ma commande.

Merci.`;


    const url =
        `https://wa.me/${CONFIG.whatsappNumber}` +
        `?text=${encodeURIComponent(
            message
        )}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   BOUTON WHATSAPP
   ========================================================= */

function updateWhatsApp() {

    const button =
        document.getElementById(
            "whatsappButton"
        );


    if (!button) return;


    button.href =
        `https://wa.me/${CONFIG.whatsappNumber}` +
        `?text=${encodeURIComponent(
            CONFIG.whatsappDefaultMessage
        )}`;


    button.target = "_blank";

    button.rel =
        "noopener noreferrer";

}


/* =========================================================
   LOCAL STORAGE — PANIER
   ========================================================= */

function saveCart() {

    try {

        localStorage.setItem(
            CONFIG.storageCart,
            JSON.stringify(cart)
        );

    } catch (error) {

        console.error(
            "IMPOSSIBLE DE SAUVEGARDER LE PANIER :",
            error
        );

    }

}


function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                CONFIG.storageCart
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
                    item => {

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
                    item => {

                        const id =
                            Number(item.id);


                        const product =
                            products.find(
                                p =>
                                    p.id === id
                            );


                        if (!product) {
                            return null;
                        }


                        return {

                            id,

                            name:
                                product.name,

                            quantity:
                                clamp(

                                    Math.floor(
                                        Number(
                                            item.quantity
                                        )
                                    ),

                                    1,

                                    999

                                )

                        };

                    }
                )


                .filter(Boolean);


        saveCart();


    } catch (error) {

        console.error(
            "ERREUR CHARGEMENT PANIER :",
            error
        );


        cart = [];

        saveCart();

    }

}


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function showNotification(
    message,
    type = "success"
) {

    let container =
        document.getElementById(
            "abgNotifications"
        );


    if (!container) {

        container =
            document.createElement(
                "div"
            );


        container.id =
            "abgNotifications";


        container.setAttribute(
            "aria-live",
            "polite"
        );


        document.body.appendChild(
            container
        );

    }


    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        `abg-notification ${type}`;


    notification.textContent =
        message;


    container.appendChild(
        notification
    );


    setTimeout(
        () => {

            notification.classList.add(
                "hide"
            );


            setTimeout(
                () => {

                    notification.remove();

                },
                300
            );

        },
        3000
    );

}


/* =========================================================
   API PUBLIQUE
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

window.logoutAdmin =
    logoutAdmin;

window.confirmOrder =
    confirmOrder;

window.searchProductImage =
    searchProductImage;

window.previewProduct =
    previewProduct;


/* =========================================================
   DEBUG
   ========================================================= */

console.log(
    "ABG STORE — SCRIPT CHARGE AVEC SUCCES."
);
