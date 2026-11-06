/* =========================================
   VANGUARD ESPORTS — MAIN JAVASCRIPT
   Language / Navigation / UI
   ========================================= */

"use strict";

/* =========================================
   TRANSLATIONS
   ========================================= */

const translations = {
    ru: {
        "nav.home": "Главная",
        "nav.teams": "Составы",
        "nav.matches": "Матчи",
        "nav.news": "Новости",
        "nav.about": "О нас",
        "nav.contacts": "Контакты",

        "hero.label": "КИБЕРСПОРТИВНАЯ ОРГАНИЗАЦИЯ",
        "hero.title": "VANGUARD ESPORTS",
        "hero.description": "Киберспортивная организация по Counter-Strike 2. Развиваем игроков, строим команды и стремимся к новым вершинам.",
        "hero.cta": "Наши составы",
        "hero.secondary": "О нашей организации",

        "hero.teams": "СОСТАВА",
        "hero.players": "ИГРОКОВ",
        "hero.since": "ГОД ОСНОВАНИЯ",

        "home.teams.label": "НАШИ КОМАНДЫ",
        "home.teams.title": "Составы Vanguard",
        "home.teams.description": "Три направления развития игроков и соревновательной деятельности.",
        "teams.main": "Основной состав",
        "teams.academy": "Академия",
        "teams.junior": "Молодёжный состав",
        "teams.more": "Подробнее",
        "teams.openSlot": "ОТКРЫТЫЙ СЛОТ",

        "home.news.label": "ПОСЛЕДНИЕ ОБНОВЛЕНИЯ",
        "home.news.title": "Новости организации",
        "home.news.description": "Следите за жизнью Vanguard Esports.",
        "news.empty.title": "Пока нет опубликованных новостей",
        "news.empty.text": "Следите за нашими социальными сетями, чтобы не пропустить обновления.",

        "page.teams.title": "Наши составы",
        "page.teams.description": "Игроки, представляющие Vanguard Esports на соревновательной сцене.",

        "page.matches.title": "Матчи",
        "page.matches.description": "Расписание предстоящих встреч и результаты выступлений Vanguard Esports.",
        "matches.upcoming": "Предстоящие матчи",
        "matches.results": "Последние результаты",
        "matches.empty.title": "Матчи пока не добавлены",
        "matches.empty.text": "Информация о предстоящих встречах появится здесь.",

        "page.news.title": "Новости",
        "page.news.description": "Последние события и объявления Vanguard Esports.",

        "page.about.title": "О Vanguard",
        "page.about.description": "Наша история, принципы и цели.",
        "about.history": "Наша история",
        "about.values": "Наши ценности",
        "about.structure": "Структура организации",

        "page.contacts.title": "Контакты",
        "page.contacts.description": "Свяжитесь с Vanguard Esports и следите за нашими обновлениями.",

        "contact.email": "Электронная почта",
        "contact.telegram": "Telegram",
        "contact.youtube": "YouTube",
        "contact.instagram": "Instagram",
        "contact.tiktok": "TikTok",
        "contact.twitch": "Twitch",

        "footer.description": "Киберспортивная организация по Counter-Strike 2.",
        "footer.navigation": "НАВИГАЦИЯ",
        "footer.social": "СОЦИАЛЬНЫЕ СЕТИ",
        "footer.rights": "Все права защищены.",

        "error.title": "Страница не найдена",
        "error.description": "Возможно, страница была перемещена или больше не существует.",
        "error.home": "На главную",
        "error.teams": "Наши составы",

        "common.captain": "Капитан",
        "common.player": "Игрок",
        "common.substitute": "Запасной",
        "common.main": "Основной состав",
        "common.academy": "Академия",
        "common.junior": "Молодёжный состав"
    },

    en: {
        "nav.home": "Home",
        "nav.teams": "Teams",
        "nav.matches": "Matches",
        "nav.news": "News",
        "nav.about": "About",
        "nav.contacts": "Contacts",

        "hero.label": "ESPORTS ORGANIZATION",
        "hero.title": "VANGUARD ESPORTS",
        "hero.description": "A Counter-Strike 2 esports organization. We develop players, build teams and strive for new heights.",
        "hero.cta": "Our teams",
        "hero.secondary": "About our organization",

        "hero.teams": "TEAMS",
        "hero.players": "PLAYERS",
        "hero.since": "YEAR FOUNDED",

        "home.teams.label": "OUR TEAMS",
        "home.teams.title": "Vanguard Rosters",
        "home.teams.description": "Three development paths for players and competitive teams.",
        "teams.main": "Main Team",
        "teams.academy": "Academy",
        "teams.junior": "Junior Team",
        "teams.more": "Learn more",
        "teams.openSlot": "OPEN SLOT",

        "home.news.label": "LATEST UPDATES",
        "home.news.title": "Organization News",
        "home.news.description": "Follow the latest from Vanguard Esports.",
        "news.empty.title": "No news published yet",
        "news.empty.text": "Follow our social media to stay up to date.",

        "page.teams.title": "Our Teams",
        "page.teams.description": "The players representing Vanguard Esports on the competitive stage.",

        "page.matches.title": "Matches",
        "page.matches.description": "Upcoming fixtures and Vanguard Esports match results.",
        "matches.upcoming": "Upcoming Matches",
        "matches.results": "Latest Results",
        "matches.empty.title": "No matches added yet",
        "matches.empty.text": "Information about upcoming matches will appear here.",

        "page.news.title": "News",
        "page.news.description": "Latest events and announcements from Vanguard Esports.",

        "page.about.title": "About Vanguard",
        "page.about.description": "Our history, principles and goals.",
        "about.history": "Our History",
        "about.values": "Our Values",
        "about.structure": "Organization Structure",

        "page.contacts.title": "Contacts",
        "page.contacts.description": "Get in touch with Vanguard Esports and follow our updates.",

        "contact.email": "Email",
        "contact.telegram": "Telegram",
        "contact.youtube": "YouTube",
        "contact.instagram": "Instagram",
        "contact.tiktok": "TikTok",
        "contact.twitch": "Twitch",

        "footer.description": "A Counter-Strike 2 esports organization.",
        "footer.navigation": "NAVIGATION",
        "footer.social": "SOCIAL MEDIA",
        "footer.rights": "All rights reserved.",

        "error.title": "Page Not Found",
        "error.description": "The page may have been moved or no longer exists.",
        "error.home": "Go Home",
        "error.teams": "Our Teams",

        "common.captain": "Captain",
        "common.player": "Player",
        "common.substitute": "Substitute",
        "common.main": "Main Team",
        "common.academy": "Academy",
        "common.junior": "Junior Team"
    }
};


/* =========================================
   LANGUAGE MANAGEMENT
   ========================================= */

const DEFAULT_LANGUAGE = "ru";
const LANGUAGE_KEY = "vanguard-language";

function getSavedLanguage() {
    try {
        const saved = localStorage.getItem(LANGUAGE_KEY);

        return saved === "en" || saved === "ru"
            ? saved
            : DEFAULT_LANGUAGE;
    } catch (error) {
        return DEFAULT_LANGUAGE;
    }
}

let currentLanguage = getSavedLanguage();

function translateElement(element, language) {
    const key = element.getAttribute("data-i18n");
    const translation = translations[language]?.[key];

    if (!translation) return;

    /*
       Change only the direct text node.
       This preserves nested elements and icons.
    */

    const textNode = Array.from(element.childNodes).find(
        node => node.nodeType === Node.TEXT_NODE &&
            node.textContent.trim() !== ""
    );

    if (textNode) {
        textNode.textContent = translation;
    } else if (!element.children.length) {
        element.textContent = translation;
    }
}

function applyTranslations(language) {
    if (!translations[language]) return;

    currentLanguage = language;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        translateElement(element, language);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        const translation = translations[language]?.[key];

        if (translation) {
            element.setAttribute("placeholder", translation);
        }
    });

    document.querySelectorAll("[data-i18n-title]").forEach(element => {
        const key = element.getAttribute("data-i18n-title");
        const translation = translations[language]?.[key];

        if (translation) {
            element.setAttribute("title", translation);
        }
    });

    const languageButton = document.getElementById("langSwitch");

    if (languageButton) {
        languageButton.textContent = language === "ru" ? "EN" : "RU";
        languageButton.setAttribute(
            "aria-label",
            language === "ru"
                ? "Switch to English"
                : "Переключить на русский"
        );
    }

    try {
        localStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
        // The website continues to work without localStorage.
    }
}

function toggleLanguage() {
    const nextLanguage = currentLanguage === "ru" ? "en" : "ru";
    applyTranslations(nextLanguage);
}


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

function initMobileMenu() {
    const toggle = document.getElementById("mobileMenuToggle");
    const menu = document.getElementById("mobileMenu");

    if (!toggle || !menu) return;

    function closeMenu() {
        menu.classList.remove("open", "active");
        toggle.classList.remove("active");

        toggle.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");

        document.body.classList.remove("menu-open");
    }

    function openMenu() {
        menu.classList.add("open");
        toggle.classList.add("active");

        toggle.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-hidden", "false");

        document.body.classList.add("menu-open");
    }

    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.contains("open") ||
            menu.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    document.addEventListener("click", event => {
        if (
            menu.classList.contains("open") &&
            !menu.contains(event.target) &&
            !toggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeMenu();
        }
    });
}


/* =========================================
   HEADER SCROLL EFFECT
   ========================================= */

function initHeader() {
    const header = document.querySelector(".header");

    if (!header) return;

    function updateHeader() {
        header.classList.toggle("scrolled", window.scrollY > 30);
    }

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });
}


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

function initActiveNavigation() {
    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    document.querySelectorAll(".nav a, .mobile-menu a").forEach(link => {
        const href = link.getAttribute("href");

        if (!href) return;

        const targetPage = href.split("#")[0];

        if (targetPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}


/* =========================================
   SMOOTH ANCHOR SCROLLING
   ========================================= */

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });
        });
    });
}


/* =========================================
   SCROLL REVEAL
   ========================================= */

function initScrollReveal() {
    const elements = document.querySelectorAll(
        ".team-card, .stat-card, .player-card, .contact-card, .value-card, .structure-card"
    );

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    elements.forEach(element => {
        observer.observe(element);
    });
}


/* =========================================
   CURRENT YEAR
   ========================================= */

function initCurrentYear() {
    const yearElements = document.querySelectorAll("[data-current-year]");

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });
}


/* =========================================
   INITIALIZATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    applyTranslations(currentLanguage);

    const languageButton = document.getElementById("langSwitch");

    if (languageButton) {
        languageButton.addEventListener("click", toggleLanguage);
    }

    initMobileMenu();
    initHeader();
    initActiveNavigation();
    initSmoothScrolling();
    initScrollReveal();
    initCurrentYear();
});
