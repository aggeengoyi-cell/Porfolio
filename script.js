// ===== Configuration — Modifiez votre nom ici =====
const USER_NAME = 'Aggee Ngoyi Ngyala';

document.getElementById('userName').textContent = USER_NAME;
document.getElementById('navName').textContent = USER_NAME.split(' ')[0];
document.getElementById('footerName').textContent = USER_NAME;

// ===== i18n FR / EN =====
const translations = {
    fr: {
        nav_home: 'Accueil', nav_about: 'À propos', nav_skills: 'Compétences',
        nav_projects: 'Projets', nav_contact: 'Contact',
        hero_available: 'Disponible pour projets',
        hero_greeting: 'Bonjour, je suis',
        hero_desc: 'Licencié en Réseaux et Systèmes, passionné par les infrastructures informatiques, la sécurité réseau et le développement de solutions numériques. Basé à Kinshasa, RDC.',
        hero_cta_projects: 'Voir mes projets', hero_cta_contact: 'Me contacter',
        bento_degree_label: 'Diplôme', bento_degree_value: 'Licencié en Réseaux et Systèmes',
        bento_lang_label: 'Langues', bento_projects: 'Projets', bento_domains: 'Domaines',
        tag_about: 'à propos', title_about: 'Profil professionnel',
        degree_chip: 'Licencié · Réseaux & Systèmes',
        about_p1: 'Diplômé en <strong>Réseaux et Systèmes</strong>, je conçois, déploie et sécurise des infrastructures informatiques. Mon expertise couvre le routing, le switching, les VPN et l\'administration système.',
        about_p2: 'En parallèle, je développe des applications web comme <strong>FreshStock</strong>, un ERP de gestion d\'entrepôt (HTML, CSS, JavaScript, Supabase). Bilingue français-anglais, je m\'adapte facilement aux environnements internationaux.',
        info_formation: 'Formation', info_formation_val: 'Licencié en Réseaux et Systèmes',
        info_lang: 'Langues', info_lang_val: 'Français · Anglais · Lingala',
        info_avail: 'Disponibilité', info_avail_val: 'Projets · Stages · Missions',
        download_cv: 'Télécharger mon CV',
        tag_skills: 'compétences', title_skills: 'Expertise technique',
        skill_net_title: 'Réseaux & Infrastructure',
        skill_sys_title: 'Systèmes & Administration',
        skill_web_title: 'Développement Web',
        skill_sec_title: 'Sécurité & Outils',
        tag_projects: 'projets', title_projects: 'Réalisations',
        proj_fresh_desc: 'ERP complet de gestion d\'entrepôt : inventaire, commandes, tableaux de bord, export PDF/Excel et authentification Supabase.',
        proj_vpn_desc: 'Architecture réseau VPN simulée avec Cisco Packet Tracer : routage, sécurité et interconnexion de sites distants.',
        proj_stp_desc: 'Configuration avancée : Rapid-PVST, priorités root par VLAN, portfast sur les ports utilisateurs.',
        proj_vivre_desc: 'Gestion et distribution de produits frais avec interface utilisateur intuitive et logistique intégrée.',
        view_project: 'Voir le projet',
        tag_contact: 'contact', title_contact: 'Travaillons ensemble',
        contact_desc: 'Un projet réseau, une opportunité de stage ou une collaboration ? Contactez-moi — je parle français et anglais.',
        phone: 'Téléphone', location: 'Localisation',
        form_name: 'Nom complet', form_subject: 'Sujet', form_message: 'Message', form_send: 'Envoyer le message',
        typed: ['Ingénieur Réseaux & Systèmes', 'Spécialiste Infrastructure', 'Administrateur Système', 'Développeur Web']
    },
    en: {
        nav_home: 'Home', nav_about: 'About', nav_skills: 'Skills',
        nav_projects: 'Projects', nav_contact: 'Contact',
        hero_available: 'Available for projects',
        hero_greeting: 'Hello, I am',
       hero_desc: 'Master in Networks & Systems, passionate about IT infrastructure, network security and building digital solutions. Based in Kinshasa, DRC.',
        hero_cta_projects: 'View my projects', hero_cta_contact: 'Contact me',
        bento_degree_label: 'Degree', bento_degree_value: 'Master in Networks & Systems', 
        bento_lang_label: 'Languages', bento_projects: 'Projects', bento_domains: 'Domains',
        tag_about: 'about', title_about: 'Professional profile',
        degree_chip: 'Master · Networks & Systems',  
        about_p1: 'Graduate in <strong>Networks & Systems</strong>, I design, deploy and secure IT infrastructure. My expertise covers routing, switching, VPN and system administration.',
        about_p2: 'I also build web applications like <strong>FreshStock</strong>, a warehouse management ERP (HTML, CSS, JavaScript, Supabase). Fluent in French and English, I adapt easily to international environments.',
        info_formation: 'Education', info_formation_val: 'Master in Networks & Systems', 
        info_lang: 'Languages', info_lang_val: 'French · English · Lingala',
        info_avail: 'Availability', info_avail_val: 'Projects · Internships · Missions',
        download_cv: 'Download my CV',
        tag_skills: 'skills', title_skills: 'Technical expertise',
        skill_net_title: 'Networks & Infrastructure',
        skill_sys_title: 'Systems & Administration',
        skill_web_title: 'Web Development',
        skill_sec_title: 'Security & Tools',
        tag_projects: 'projects', title_projects: 'Work',
        proj_fresh_desc: 'Full warehouse management ERP: inventory, orders, dashboards, PDF/Excel export and Supabase authentication.',
        proj_vpn_desc: 'VPN network architecture simulated with Cisco Packet Tracer: routing, security and remote site interconnection.',
        proj_stp_desc: 'Advanced configuration: Rapid-PVST, root priorities per VLAN, portfast on user ports.',
        proj_vivre_desc: 'Fresh product management and distribution with intuitive UI and integrated logistics.',
        view_project: 'View project',
        tag_contact: 'contact', title_contact: 'Let\'s work together',
        contact_desc: 'A network project, internship opportunity or collaboration? Reach out — I speak French and English.',
        phone: 'Phone', location: 'Location',
        form_name: 'Full name', form_subject: 'Subject', form_message: 'Message', form_send: 'Send message',
        typed: ['Networks & Systems Engineer', 'Infrastructure Specialist', 'System Administrator', 'Web Developer']
    }
};

let currentLang = 'fr';
let titles = translations.fr.typed;

function setLanguage(lang) {
    currentLang = lang;
    titles = translations[lang].typed;
    titleIndex = 0; charIndex = 0; isDeleting = false;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = translations[lang][key];
        if (val) {
            if (val.includes('<strong>')) el.innerHTML = val;
            else el.textContent = val;
        }
    });

    document.querySelector('.lang-active').textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'fr' ? 'en' : 'fr');
});

// ===== Typed text =====
let titleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typedText');

function typeEffect() {
    const current = titles[titleIndex];
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
    let speed = isDeleting ? 35 : 70;
    if (!isDeleting && charIndex === current.length) { speed = 2200; isDeleting = true; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; titleIndex = (titleIndex + 1) % titles.length; speed = 350; }
    setTimeout(typeEffect, speed);
}
typeEffect();

// ===== Navbar =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navLinkEls.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => navObserver.observe(s));

// ===== Scroll reveal =====
document.querySelectorAll('.section-header, .skill-card, .project-card, .about-grid, .contact-grid, .info-item, .bento-card')
    .forEach(el => el.classList.add('reveal'));
const revealObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 60); revealObs.unobserve(e.target); }
    });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ===== Contact form =====
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> ' + (currentLang === 'fr' ? 'Message envoyé !' : 'Message sent!');
    btn.style.background = 'linear-gradient(135deg, #00d4aa, #6366f1)';
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; e.target.reset(); }, 3000);
});