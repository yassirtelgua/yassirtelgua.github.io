const canvas = document.getElementById('animCanvas');
const context = canvas.getContext('2d');

// Frame sequence configuration
const frameCount = 33; 

const currentFrame = index => (
    `./frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const images = [];

// Preload sequence frames
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

function renderFrame(index) {
    if (images[index] && images[index].complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
    }
}

// Initial canvas draw
images[0].onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderFrame(0);
};

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
    );
    renderFrame(frameIndex);
});

// Update animation state on scroll
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
    
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
    );
    
    requestAnimationFrame(() => renderFrame(frameIndex));
});


/* =========================
   English / Deutsch
   ========================= */

const translations = {
    en: {
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Get in touch →",
        heroGreeting: "Hey, I'm an",
        heroTitle: "IT Support<br>Specialist",
        heroHeading: "Technical support should feel effortless.",
        heroText: "From enterprise B2B incident management to Python and web engineering, I resolve system issues and build responsive interfaces.",
        pillar1: "B2B Support & Dynamics 365",
        pillar2: "Python & Web Engineering",
        pillar3: "Hardware & Micro-Soldering",
        pillar4: "Azure & Active Directory",
        brandTitle: "Ecosystems & Technologies",
        aboutTag: "About Me",
        aboutHeading: "Behind the Tech: Solving Issues & Building Solutions",
        aboutText: "I am an IT Support Specialist and Developer based in Salé, Morocco. Experienced in B2B ticket management, remote troubleshooting, network diagnostics, and front-end development.",
        aboutContact: "Get in touch →",
        notepadTag: "Active Web Project",
        notepadTitle: "Notepad App",
        notepadText: "A fast, browser-based notepad application engineered with clean JavaScript and hosted on GitHub Pages.",
        viewProject: "View Live Project →",
        telmailTag: "Web Project",
        telmailTitle: "Telmail – Temporary Email",
        telmailText: "A temporary email project focused on simple access, privacy, and a convenient temporary inbox experience.",
        telmailLink: "View Telmail →",
        supportTag: "Foundever / Lexmark",
        supportTitle: "Technical Support Agent",
        supportText: "1st-Level B2B incident resolution using Dynamics 365, Azure permissions, VPN authentication, and network diagnostics.",
        repairTag: "Technical Service",
        repairTitle: "Hardware & OS Repair",
        repairText: "Board-level micro-soldering, OS flashing, bootloop recovery, and mobile data recovery across Android and iOS.",
        repairDate: "Hardware Certified",
        contactTag: "Get In Touch",
        contactHeading: "Let's Connect & Build Something Great",
        copyright: "© 2026 TELGUA YASSIR. All rights reserved."
    },
    de: {
        navAbout: "Über mich",
        navProjects: "Projekte",
        navContact: "Kontakt aufnehmen →",
        heroGreeting: "Hey, ich bin",
        heroTitle: "IT Support<br>Spezialist",
        heroHeading: "Technischer Support sollte sich mühelos anfühlen.",
        heroText: "Von B2B-Incident-Management im Unternehmensumfeld bis hin zu Python und Webentwicklung löse ich Systemprobleme und entwickle responsive Benutzeroberflächen.",
        pillar1: "B2B Support & Dynamics 365",
        pillar2: "Python & Webentwicklung",
        pillar3: "Hardware & Micro-Soldering",
        pillar4: "Azure & Active Directory",
        brandTitle: "Technologien & Ökosysteme",
        aboutTag: "Über mich",
        aboutHeading: "Hinter der Technik: Probleme lösen & Lösungen entwickeln",
        aboutText: "Ich bin IT Support Specialist und Entwickler aus Salé, Marokko. Ich verfüge über Erfahrung im B2B-Ticketmanagement, Remote-Troubleshooting, in der Netzwerkdiagnose und Frontend-Entwicklung.",
        aboutContact: "Kontakt aufnehmen →",
        notepadTag: "Aktives Webprojekt",
        notepadTitle: "Notepad App",
        notepadText: "Eine schnelle, browserbasierte Notiz-Anwendung mit sauberem JavaScript, gehostet auf GitHub Pages.",
        viewProject: "Live-Projekt ansehen →",
        telmailTag: "Webprojekt",
        telmailTitle: "Telmail – Temporäre E-Mail",
        telmailText: "Ein Projekt für temporäre E-Mail-Adressen mit Fokus auf einfache Nutzung, Privatsphäre und einen praktischen temporären Posteingang.",
        telmailLink: "Telmail öffnen →",
        supportTag: "Foundever / Lexmark",
        supportTitle: "Technical Support Agent",
        supportText: "1st-Level-B2B-Incident-Management mit Dynamics 365, Azure-Berechtigungen, VPN-Authentifizierung und Netzwerkdiagnose.",
        repairTag: "Technischer Service",
        repairTitle: "Hardware- & OS-Reparatur",
        repairText: "Micro-Soldering auf Board-Ebene, Betriebssystem-Flashen, Bootloop-Wiederherstellung und mobile Datenrettung für Android und iOS.",
        repairDate: "Hardware-zertifiziert",
        contactTag: "Kontakt",
        contactHeading: "Lassen Sie uns verbinden & etwas Großartiges entwickeln",
        copyright: "© 2026 TELGUA YASSIR. Alle Rechte vorbehalten."
    }
};

const languageButtons = document.querySelectorAll(".language-btn");

function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.en;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (dictionary[key] !== undefined) {
            element.innerHTML = dictionary[key];
        }
    });

    languageButtons.forEach((button) => {
        const active = button.dataset.lang === lang;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    localStorage.setItem("portfolioLanguage", lang);
}

const savedLanguage = localStorage.getItem("portfolioLanguage") || "en";
applyLanguage(savedLanguage);

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        applyLanguage(button.dataset.lang);
    });
});
