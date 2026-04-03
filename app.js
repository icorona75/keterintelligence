/* ============================================================
   KETER GLOBAL — App Logic
   Theme toggle, language toggle, mobile nav, scroll header, form
   ============================================================ */

// ---- TRANSLATIONS ----
const translations = {
  en: {
    "nav.subtitle": "Intelligence & Security",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.insights": "Insights",
    "nav.regions": "Global Reach",
    "nav.contact": "Contact",
    "hero.eyebrow": "Strategic Intelligence \u2022 Security \u2022 Geopolitical & Economic Advisory",
    "hero.title": "Trusted Counsel for a Complex World",
    "hero.subtitle": "Keter Global delivers intelligence, security, geopolitical strategy, and economic advisory to governments, multinational corporations, and sovereign entities operating in high-risk environments across the Americas, the Middle East, and Europe.",
    "hero.cta": "Request a Consultation",
    "about.eyebrow": "About the Firm",
    "about.title": "Three Decades of Strategic Expertise",
    "about.p1": "Keter Global Intelligence & Security is a boutique strategic advisory firm founded by Isaac Corona, a highly regarded international intelligence and security expert with over 30 years of experience advising governments, multinational corporations, and foreign sovereigns on complex security, intelligence, geopolitical, and economic matters.",
    "about.p2": "Based in Washington, D.C. and Mexico City, Keter Global maintains a strong operational presence across Latin America, the Middle East, and Europe. The firm delivers strategic solutions tailored to high\u2011risk environments and sensitive operations, bridging traditional field\u2011based intelligence with modern technology\u2011driven analysis.",
    "about.p3": "Our principal has held senior\u2011level and special operations roles with the Office of the Prime Minister of Israel and the Secretar\u00eda de Gobernaci\u00f3n of Mexico, and has negotiated on behalf of clients with national and local governments, business leaders, guerrilla groups, and organized\u2011crime cartels in crisis and security\u2011related contexts.",
    "about.stat1": "Years of Experience",
    "about.stat2": "Languages Spoken",
    "about.stat3": "Continents of Operations",
    "about.stat4": "Global Response",
    "services.eyebrow": "Capabilities",
    "services.title": "Intelligence, Security & Strategic Advisory",
    "services.desc": "We provide end\u2011to\u2011end advisory across intelligence operations, physical and digital security, geopolitical risk analysis, and economic strategy for clients operating in complex and contested environments.",
    "svc.intel.title": "Intelligence & Special Operations Advisory",
    "svc.intel.desc": "Strategic intelligence collection, threat assessment, counter\u2011terrorism, and special operations advisory leveraging advanced methodologies and technology platforms.",
    "svc.security.title": "Protective Security & Crisis Management",
    "svc.security.desc": "Executive protection, crisis response planning, anti\u2011terrorism frameworks, and security operations for high\u2011risk environments and sensitive personnel.",
    "svc.geo.title": "Geopolitical Strategy & Risk Analysis",
    "svc.geo.desc": "Geopolitical risk assessments, country\u2011specific threat forecasting, and strategic advisory for organizations navigating complex political landscapes and cross\u2011border challenges.",
    "svc.econ.title": "Economic Strategy & Investment Advisory",
    "svc.econ.desc": "Economic due diligence, market entry strategy, infrastructure investment advisory, and financial intelligence for private equity, sovereign funds, and multinational investors.",
    "svc.investigations.title": "Investigations & Financial Intelligence",
    "svc.investigations.desc": "Corruption investigations, asset tracing, forensic accounting, illicit finance analysis, and due diligence for corporate and government clients.",
    "svc.cyber.title": "Cybersecurity & Technology Intelligence",
    "svc.cyber.desc": "Cyber threat intelligence, digital risk assessment, and technology\u2011driven intelligence solutions integrating advanced analytics and real\u2011time monitoring.",
    "insights.eyebrow": "Insights",
    "insights.title": "Research & Analysis",
    "insights.desc": "Explore our latest publications, policy papers, and podcast episodes on geopolitical strategy, security, and economic intelligence.",
    "insights.tab.papers": "Papers",
    "insights.tab.podcasts": "Podcasts",
    "insights.label.paper": "Paper",
    "insights.label.podcast": "Podcast",
    "insights.coming": "Coming Soon",
    "regions.eyebrow": "Global Reach",
    "regions.title": "Operating Across Strategic Geographies",
    "regions.desc": "Keter Global maintains deep operational expertise and trusted networks across the world\u2019s most strategically significant regions.",
    "contact.eyebrow": "Get in Touch",
    "contact.title": "Request a Confidential Consultation",
    "contact.intro": "Whether you are a government institution, multinational enterprise, or private investor, Keter Global provides the strategic intelligence and security counsel you need to operate confidently in complex environments.",
    "contact.location": "Washington, D.C. & Mexico City",
    "contact.languages": "English \u2022 Spanish \u2022 Hebrew \u2022 Portuguese",
    "form.name": "Name",
    "form.email": "Email",
    "form.org": "Organization",
    "form.message": "Message",
    "form.submit": "Send Message",
    "footer.rights": "All rights reserved."
  },
  es: {
    "nav.subtitle": "Inteligencia y Seguridad",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.insights": "Perspectivas",
    "nav.regions": "Alcance Global",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Inteligencia Estrat\u00e9gica \u2022 Seguridad \u2022 Asesor\u00eda Geopol\u00edtica y Econ\u00f3mica",
    "hero.title": "Asesor\u00eda de Confianza para un Mundo Complejo",
    "hero.subtitle": "Keter Global ofrece servicios de inteligencia, seguridad, estrategia geopol\u00edtica y asesor\u00eda econ\u00f3mica a gobiernos, corporaciones multinacionales y entidades soberanas que operan en entornos de alto riesgo en las Am\u00e9ricas, Medio Oriente y Europa.",
    "hero.cta": "Solicitar una Consulta",
    "about.eyebrow": "Sobre la Firma",
    "about.title": "Tres D\u00e9cadas de Experiencia Estrat\u00e9gica",
    "about.p1": "Keter Global Intelligence & Security es una firma boutique de asesor\u00eda estrat\u00e9gica fundada por Isaac Corona, un reconocido experto internacional en inteligencia y seguridad con m\u00e1s de 30 a\u00f1os de experiencia asesorando a gobiernos, corporaciones multinacionales y estados soberanos en asuntos complejos de seguridad, inteligencia, geopol\u00edtica y econom\u00eda.",
    "about.p2": "Con sede en Washington, D.C. y Ciudad de M\u00e9xico, Keter Global mantiene una fuerte presencia operativa en Am\u00e9rica Latina, Medio Oriente y Europa. La firma ofrece soluciones estrat\u00e9gicas adaptadas a entornos de alto riesgo y operaciones sensibles, integrando inteligencia tradicional de campo con an\u00e1lisis impulsado por tecnolog\u00eda moderna.",
    "about.p3": "Nuestro fundador ha ocupado roles de alto nivel y de operaciones especiales en la Oficina del Primer Ministro de Israel y en la Secretar\u00eda de Gobernaci\u00f3n de M\u00e9xico, y ha negociado en nombre de clientes con gobiernos nacionales y locales, l\u00edderes empresariales, grupos guerrilleros y c\u00e1rteles del crimen organizado en contextos de crisis y seguridad.",
    "about.stat1": "A\u00f1os de Experiencia",
    "about.stat2": "Idiomas",
    "about.stat3": "Continentes de Operaci\u00f3n",
    "about.stat4": "Respuesta Global",
    "services.eyebrow": "Capacidades",
    "services.title": "Inteligencia, Seguridad y Asesor\u00eda Estrat\u00e9gica",
    "services.desc": "Brindamos asesor\u00eda integral en operaciones de inteligencia, seguridad f\u00edsica y digital, an\u00e1lisis de riesgo geopol\u00edtico y estrategia econ\u00f3mica para clientes que operan en entornos complejos y de alta tensi\u00f3n.",
    "svc.intel.title": "Inteligencia y Asesor\u00eda en Operaciones Especiales",
    "svc.intel.desc": "Recolecci\u00f3n de inteligencia estrat\u00e9gica, evaluaci\u00f3n de amenazas, contraterrorismo y asesor\u00eda en operaciones especiales utilizando metodolog\u00edas avanzadas y plataformas tecnol\u00f3gicas.",
    "svc.security.title": "Seguridad Protectiva y Gesti\u00f3n de Crisis",
    "svc.security.desc": "Protecci\u00f3n ejecutiva, planificaci\u00f3n de respuesta a crisis, marcos antiterroristas y operaciones de seguridad para entornos de alto riesgo y personal sensible.",
    "svc.geo.title": "Estrategia Geopol\u00edtica y An\u00e1lisis de Riesgo",
    "svc.geo.desc": "Evaluaciones de riesgo geopol\u00edtico, pron\u00f3stico de amenazas por pa\u00eds y asesor\u00eda estrat\u00e9gica para organizaciones que navegan paisajes pol\u00edticos complejos y desaf\u00edos transfronterizos.",
    "svc.econ.title": "Estrategia Econ\u00f3mica y Asesor\u00eda de Inversi\u00f3n",
    "svc.econ.desc": "Debida diligencia econ\u00f3mica, estrategia de entrada al mercado, asesor\u00eda en inversiones de infraestructura e inteligencia financiera para capital privado, fondos soberanos e inversores multinacionales.",
    "svc.investigations.title": "Investigaciones e Inteligencia Financiera",
    "svc.investigations.desc": "Investigaciones de corrupci\u00f3n, rastreo de activos, contabilidad forense, an\u00e1lisis de finanzas il\u00edcitas y debida diligencia para clientes corporativos y gubernamentales.",
    "svc.cyber.title": "Ciberseguridad e Inteligencia Tecnol\u00f3gica",
    "svc.cyber.desc": "Inteligencia de amenazas cibern\u00e9ticas, evaluaci\u00f3n de riesgo digital y soluciones de inteligencia impulsadas por tecnolog\u00eda que integran anal\u00edtica avanzada y monitoreo en tiempo real.",
    "insights.eyebrow": "Perspectivas",
    "insights.title": "Investigaci\u00f3n y An\u00e1lisis",
    "insights.desc": "Explore nuestras publicaciones m\u00e1s recientes, documentos de pol\u00edtica y episodios de podcast sobre estrategia geopol\u00edtica, seguridad e inteligencia econ\u00f3mica.",
    "insights.tab.papers": "Documentos",
    "insights.tab.podcasts": "Podcasts",
    "insights.label.paper": "Documento",
    "insights.label.podcast": "Podcast",
    "insights.coming": "Pr\u00f3ximamente",
    "regions.eyebrow": "Alcance Global",
    "regions.title": "Operando en Geograf\u00edas Estrat\u00e9gicas",
    "regions.desc": "Keter Global mantiene profunda experiencia operativa y redes de confianza en las regiones m\u00e1s estrat\u00e9gicamente significativas del mundo.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Solicite una Consulta Confidencial",
    "contact.intro": "Ya sea una instituci\u00f3n gubernamental, empresa multinacional o inversionista privado, Keter Global proporciona la inteligencia estrat\u00e9gica y el asesoramiento en seguridad que necesita para operar con confianza en entornos complejos.",
    "contact.location": "Washington, D.C. y Ciudad de M\u00e9xico",
    "contact.languages": "Ingl\u00e9s \u2022 Espa\u00f1ol \u2022 Hebreo \u2022 Portugu\u00e9s",
    "form.name": "Nombre",
    "form.email": "Correo Electr\u00f3nico",
    "form.org": "Organizaci\u00f3n",
    "form.message": "Mensaje",
    "form.submit": "Enviar Mensaje",
    "footer.rights": "Todos los derechos reservados."
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const strings = translations[lang];
  if (!strings) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) {
      el.innerHTML = strings[key];
    }
  });

  // Update the toggle label
  const label = document.querySelector('[data-lang-label]');
  if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';
}

// ---- THEME TOGGLE ----
(function () {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = 'light'; // Default to light — executive consulting aesthetic
  root.setAttribute('data-theme', theme);

  if (toggle) {
    updateThemeIcon(theme);
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      updateThemeIcon(theme);
    });
  }

  function updateThemeIcon(t) {
    if (!toggle) return;
    toggle.innerHTML = t === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

// ---- LANGUAGE TOGGLE ----
document.querySelector('[data-lang-toggle]')?.addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
});

// ---- MOBILE NAV ----
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    mobileToggle.setAttribute('aria-expanded', isOpen);
  });
  // Close on link click
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---- HEADER SCROLL ----
const header = document.getElementById('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 60) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
  lastScroll = scrollY;
}, { passive: true });

// ---- FORM HANDLER ----
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  const original = btn.textContent;
  btn.textContent = currentLang === 'en' ? 'Message Sent' : 'Mensaje Enviado';
  btn.style.background = '#2d6a4f';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ---- INSIGHTS TABS ----
document.querySelectorAll('.insights__tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Deactivate all tabs and panels
    document.querySelectorAll('.insights__tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.insights__panel').forEach(p => p.classList.remove('active'));

    // Activate clicked tab and corresponding panel
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const panelId = 'panel-' + tab.getAttribute('data-tab');
    document.getElementById(panelId)?.classList.add('active');
  });
});

// ---- INIT LUCIDE ICONS ----
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
});
