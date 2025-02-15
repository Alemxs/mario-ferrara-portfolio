const galleryImages = document.querySelectorAll(".gallery-item img");
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        const imgClone = img.cloneNode();
        lightbox.appendChild(imgClone);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            document.body.removeChild(lightbox);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const collectionBtn = document.querySelector(".btn"); // Selettore del pulsante
    const collectionSection = document.querySelector("#collection"); // Sezione di destinazione

    if (collectionBtn && collectionSection) {
        collectionBtn.addEventListener("click", function (e) {
            e.preventDefault();
            collectionSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});



// Codice per visualizzare le immagini in una lightbox
const suMisuraImages = document.querySelectorAll("#su-misura .gallery-item img");
suMisuraImages.forEach(img => {
    img.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        const imgClone = img.cloneNode();
        lightbox.appendChild(imgClone);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            document.body.removeChild(lightbox);
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    // Pulsante per "Esplora la collezione"
    const collectionBtn = document.querySelector(".btn"); // Selettore del pulsante
    const collectionSection = document.querySelector("#collection"); // Sezione di destinazione

    if (collectionBtn && collectionSection) {
        collectionBtn.addEventListener("click", function (e) {
            e.preventDefault();
            collectionSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Pulsante per "Scopri il Processo"
    const processoBtn = document.querySelector(".su-misura-intro .btn"); // Selettore del pulsante
    const processoSection = document.querySelector("#processo"); // Sezione di destinazione

    if (processoBtn && processoSection) {
        processoBtn.addEventListener("click", function (e) {
            e.preventDefault();
            processoSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});







document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector("header");

    // Effetto scomparsa header quando si scrolla giù
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
        lastScrollTop = scrollTop;
    });

    // Traduzione Completa
    const langLinks = document.querySelectorAll(".language-switch a");

    const translations = {
        it: {
            heroTitle: "Eleganza senza tempo",
            heroText: "Scopri la nostra collezione esclusiva di camicie sartoriali",
            exploreBtn: "Esplora la collezione",
            customShirtsTitle: "Camicie Su Misura",
            customShirtsText: "Ogni camicia è realizzata per adattarsi perfettamente alla tua figura. Grazie a un'attenta selezione dei materiali e a una lavorazione artigianale, possiamo creare il tuo look ideale, pensato esclusivamente per te.",
            discoverProcess: "Scopri il Processo",
            processTitle: "Il Nostro Processo Sartoriale",
            step1Title: "1. Consultazione",
            step1Text: "Iniziamo con una consulenza personalizzata per definire il tuo stile e le tue preferenze.",
            step2Title: "2. Misurazione",
            step2Text: "Ogni camicia è cucita su misura, prendendo con precisione le tue misure per un fit perfetto.",
            step3Title: "3. Creazione",
            step3Text: "I migliori tessuti vengono scelti e cuciti con cura, dando vita a una camicia unica e di qualità.",
            collectionTitle1: "Collezione Estiva",
            collectionText1: "Scopri la nostra selezione di camicie leggere e raffinate, perfette per un'estate di stile e comfort.",
            collectionTitle2: "Contrasti Favolosi",
            collectionText2: "Nel cuore di ogni creazione sartoriale c'è l'incontro perfetto tra eleganza e audacia. La nostra collezione gioca con i contrasti, dove ogni dettaglio è pensato per esaltare il carattere e la raffinatezza. Scopri l'armonia tra forme audaci e tessuti pregiati, che trasformano ogni look in un'opera di stile senza tempo. Un mix perfetto di modernità e tradizione, per chi non teme di distinguersi con classe.",
            collectionTitle3: "Eleganza Sportiva",
            collectionText3: "Un equilibrio perfetto tra comfort e raffinatezza, dove l'eleganza incontra lo spirito sportivo. La nostra collezione unisce lo stile casual con il tocco sartoriale, offrendo look versatili e sofisticati per ogni occasione. Dalle giornate più dinamiche agli eventi informali, ogni capo è pensato per chi cerca libertà senza rinunciare alla classe. Scopri il connubio perfetto di funzionalità e design, dove ogni movimento è sinonimo di stile.",
            footerAbout: "Chi siamo",
            footerAboutText: "Mario Ferrara è sinonimo di eleganza e qualità nelle camicie sartoriali.",
            footerFollow: "Seguici",
            footerContact: "Contatti",
            email: "Email",
            phone: "Telefono",
            website: "Sito Web",
            address: "Indirizzo"
        },
        en: {
            heroTitle: "Timeless Elegance",
            heroText: "Discover our exclusive collection of tailored shirts",
            exploreBtn: "Explore the Collection",
            customShirtsTitle: "Tailored Shirts",
            customShirtsText: "Each shirt is crafted to fit your figure perfectly. Thanks to a meticulous selection of materials and artisanal craftsmanship, we can create your ideal look, designed exclusively for you.",
            discoverProcess: "Discover the Process",
            processTitle: "Our Tailoring Process",
            step1Title: "1. Consultation",
            step1Text: "We start with a personalized consultation to define your style and preferences.",
            step2Title: "2. Measurements",
            step2Text: "Each shirt is tailored to your exact measurements for the perfect fit.",
            step3Title: "3. Creation",
            step3Text: "The finest fabrics are selected and carefully sewn, creating a unique and high-quality shirt.",
            collectionTitle1: "Summer Collection",
            collectionText1: "Discover our selection of light and refined shirts, perfect for a summer of style and comfort.",
            collectionTitle2: "Fabulous Contrasts",
            collectionText2: "At the heart of every sartorial creation lies the perfect encounter between elegance and audacity. Our collection plays with contrasts, where every detail is designed to enhance character and sophistication. Discover the harmony between bold shapes and fine fabrics, transforming each look into a timeless style statement. A perfect blend of modernity and tradition for those who dare to stand out with class.",
            collectionTitle3: "Sporty Elegance",
            collectionText3: "A perfect balance of comfort and refinement, where elegance meets the spirit of sport. Our collection blends casual style with a sartorial touch, offering versatile and sophisticated looks for every occasion. From dynamic days to informal events, each piece is designed for those who seek freedom without compromising on class. Discover the perfect fusion of functionality and design, where every movement is a statement of style.",
            footerAbout: "About Us",
            footerAboutText: "Mario Ferrara stands for elegance and quality in tailored shirts.",
            footerFollow: "Follow Us",
            footerContact: "Contact",
            email: "Email",
            phone: "Phone",
            website: "Website",
            address: "Address"
        }
    };

    langLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            langLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            const lang = this.getAttribute("data-lang");

            // Traduzione dinamica
            document.querySelector("#hero h2").textContent = translations[lang].heroTitle;
            document.querySelector("#hero p").textContent = translations[lang].heroText;
            document.querySelector("#hero .btn").textContent = translations[lang].exploreBtn;
            document.querySelector("#su-misura h2").textContent = translations[lang].customShirtsTitle;
            document.querySelector("#su-misura p").textContent = translations[lang].customShirtsText;
            document.querySelector("#su-misura .btn").textContent = translations[lang].discoverProcess;
            document.querySelector("#processo h2").textContent = translations[lang].processTitle;
            document.querySelector("#processo .step:nth-child(1) h3").textContent = translations[lang].step1Title;
            document.querySelector("#processo .step:nth-child(1) p").textContent = translations[lang].step1Text;
            document.querySelector("#processo .step:nth-child(2) h3").textContent = translations[lang].step2Title;
            document.querySelector("#processo .step:nth-child(2) p").textContent = translations[lang].step2Text;
            document.querySelector("#processo .step:nth-child(3) h3").textContent = translations[lang].step3Title;
            document.querySelector("#processo .step:nth-child(3) p").textContent = translations[lang].step3Text;

            // Sezione Collezioni
            document.querySelector("#collezione-estiva h2").textContent = translations[lang].collectionTitle1;
            document.querySelector("#collezione-estiva p").textContent = translations[lang].collectionText1;
            document.querySelector("#contrasti h2").textContent = translations[lang].collectionTitle2;
            document.querySelector("#contrasti p").textContent = translations[lang].collectionText2;
            document.querySelector("#eleganza-sportiva h2").textContent = translations[lang].collectionTitle3;
            document.querySelector("#eleganza-sportiva p").textContent = translations[lang].collectionText3;

            // Footer
            document.querySelector(".footer-section h3:nth-child(1)").textContent = translations[lang].footerAbout;
            document.querySelector(".footer-section p:nth-child(2)").textContent = translations[lang].footerAboutText;
            document.querySelector(".footer-section h3:nth-child(3)").textContent = translations[lang].footerFollow;
            document.querySelector(".footer-section h3:nth-child(5)").textContent = translations[lang].footerContact;
            document.querySelector(".footer-section p:nth-child(6) a").textContent = translations[lang].email;
            document.querySelector(".footer-section p:nth-child(7) a").textContent = translations[lang].phone;
            document.querySelector(".footer-section p:nth-child(8) a").textContent = translations[lang].website;
            document.querySelector(".footer-section p:nth-child(9) a").textContent = translations[lang].address;
        });
    });
});
