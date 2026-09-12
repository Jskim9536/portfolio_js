"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SlidersHorizontal } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import ApproachScene from "./ApproachScene";
import ProjectVisual from "./ProjectVisual";
import ScrollProgress from "./ScrollProgress";
import { copy, type Locale } from "../content";

const companies = [
  { name: "EVAR", logo: "/img/evar-logo.png", width: 165, height: 42 },
  { name: "Hyundai Motor Company", logo: "/img/hyundai_logo.png", width: 210, height: 28 },
  { name: "MYCLE", logo: "/img/macarong_factory_logo.png", width: 156, height: 35 },
  { name: "SOOJIB", logo: "/img/soojib_logo.png", width: 180, height: 34 },
  { name: "L’Oréal", logo: "/img/loreal_logo.png", width: 168, height: 30 },
];

type ThemePreference = "light" | "dark" | "system";

export default function PortfolioPage({ locale }: { locale: Locale }) {
  const [languageSelection, setLanguageSelection] = useState<Locale>(locale);
  const t = copy[locale];
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [theme, setTheme] = useState<ThemePreference>("system");
  const preferencesRef = useRef<HTMLDivElement>(null);
  const languageTimerRef = useRef<number | null>(null);
  const themeInitializedRef = useRef(false);
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    document.documentElement.lang = locale;
    const reopenPreferences = window.sessionStorage.getItem("portfolio-preferences-open") === "true";
    window.sessionStorage.removeItem("portfolio-preferences-open");
    const frame = window.requestAnimationFrame(() => {
      setLanguageSelection(locale);
      if (reopenPreferences) setPreferencesOpen(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [locale]);

  useEffect(() => {
    return () => {
      if (languageTimerRef.current !== null) window.clearTimeout(languageTimerRef.current);
    };
  }, []);

  const selectLanguage = (nextLocale: Locale) => {
    setLanguageSelection(nextLocale);
    if (languageTimerRef.current !== null) window.clearTimeout(languageTimerRef.current);
    if (nextLocale === locale) {
      window.sessionStorage.removeItem("portfolio-preferences-open");
      return;
    }

    window.sessionStorage.setItem("portfolio-preferences-open", "true");
    languageTimerRef.current = window.setTimeout(() => {
      router.push(nextLocale === "ko" ? "/" : "/en");
      languageTimerRef.current = null;
    }, reduced ? 0 : 440);
  };

  useEffect(() => {
    if (!themeInitializedRef.current) {
      themeInitializedRef.current = true;
      const savedTheme = document.documentElement.dataset.theme;
      if ((savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") && savedTheme !== theme) {
        const frame = window.requestAnimationFrame(() => setTheme(savedTheme));
        return () => window.cancelAnimationFrame(frame);
      }
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const resolved = theme === "system" ? (media.matches ? "dark" : "light") : theme;
      document.documentElement.dataset.theme = theme;
      document.documentElement.dataset.resolvedTheme = resolved;
      window.localStorage.setItem("portfolio-theme", theme);
    };

    applyTheme();
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [theme]);

  useEffect(() => {
    const closePreferences = (event: PointerEvent) => {
      if (!preferencesRef.current?.contains(event.target as Node)) setPreferencesOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreferencesOpen(false);
    };
    document.addEventListener("pointerdown", closePreferences);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closePreferences);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <header className="site-header">
        <nav className="site-nav" aria-label={locale === "ko" ? "주요 메뉴" : "Main navigation"}>
          <a href="#top" className="wordmark">JUNSEOK KIM</a>
          <div className="desktop-nav">
            <a href="#work">{t.nav.work}</a>
            <a href="#approach">{t.nav.approach}</a>
            <a href="#career">{t.nav.career}</a>
            <a href="#recognition">{t.nav.recognition}</a>
          </div>
          <div className="nav-actions">
            <div
              className="preferences"
              ref={preferencesRef}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setPreferencesOpen(true);
              }}
              onFocusCapture={() => setPreferencesOpen(true)}
            >
              <button
                className="preferences-trigger"
                type="button"
                aria-label={locale === "ko" ? "언어 및 화면 설정" : "Language and appearance"}
                aria-haspopup="dialog"
                aria-expanded={preferencesOpen}
                aria-controls="preferences-panel"
                onClick={() => setPreferencesOpen(true)}
              >
                <SlidersHorizontal size={20} weight="regular" aria-hidden="true" />
              </button>
              <AnimatePresence>
                {preferencesOpen && (
                  <motion.div
                    id="preferences-panel"
                    className="preferences-panel"
                    role="dialog"
                    aria-label={locale === "ko" ? "언어 및 화면 설정" : "Language and appearance"}
                    initial={{ opacity: 0, y: reduced ? 0 : -6, scale: reduced ? 1 : .98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: reduced ? 0 : -4 }}
                    transition={{ duration: .16 }}
                  >
                    <div className="preference-group">
                      <p>{locale === "ko" ? "언어" : "Language"}</p>
                      <div className="segmented-control" data-selected={languageSelection}>
                        <Link href="/" aria-current={languageSelection === "ko" ? "page" : undefined} onClick={(event) => { event.preventDefault(); selectLanguage("ko"); }}>한국어</Link>
                        <Link href="/en" aria-current={languageSelection === "en" ? "page" : undefined} onClick={(event) => { event.preventDefault(); selectLanguage("en"); }}>English</Link>
                      </div>
                    </div>
                    <div className="preference-group">
                      <p>{locale === "ko" ? "화면" : "Appearance"}</p>
                      <div className="segmented-control theme-control" data-selected={theme}>
                        {(["light", "dark", "system"] as const).map((value) => (
                          <button
                            key={value}
                            type="button"
                            aria-pressed={theme === value}
                            onClick={() => setTheme(value)}
                          >
                            {locale === "ko"
                              ? { light: "라이트", dark: "다크", system: "시스템" }[value]
                              : { light: "Light", dark: "Dark", system: "Auto" }[value]}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#contact" className="nav-contact">{t.nav.contact}</a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Menu">
              <span /><span />
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div id="mobile-navigation" className="mobile-nav" initial={{ opacity: 0, y: reduced ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <a href="#work" onClick={() => setMenuOpen(false)}>{t.nav.work}</a>
              <a href="#approach" onClick={() => setMenuOpen(false)}>{t.nav.approach}</a>
              <a href="#career" onClick={() => setMenuOpen(false)}>{t.nav.career}</a>
              <a href="#recognition" onClick={() => setMenuOpen(false)}>{t.nav.recognition}</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="hero-section section-shell">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: reduced ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <h1>{t.hero.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="hero-kicker">{t.hero.eyebrow}</p>
            <p className="hero-body">{t.hero.body}</p>
            <div className="hero-actions">
              <a href="#work" className="primary-button">{t.hero.primary}</a>
              <a href="https://www.linkedin.com/in/junseok-kim-2611351b6/" target="_blank" rel="noreferrer" className="text-link">{t.hero.secondary} ↗</a>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: reduced ? 1 : .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .08 }}>
            <div className="portrait-frame">
              <Image src="/img/portfolio/profile/junseok-kim-portrait.png" alt="Junseok Kim" fill priority sizes="(min-width: 900px) 35vw, 80vw" />
            </div>
          </motion.div>
        </section>

        <section className="impact-strip section-shell" aria-label="Selected impact">
          {t.impacts.map((impact, index) => (
            <AnimateIn key={impact.label} delay={index * .06}>
              <article className="impact-item"><strong>{impact.value}</strong><div><b>{impact.label}</b><span>{impact.note}</span></div></article>
            </AnimateIn>
          ))}
        </section>

        <ApproachScene copy={t.approach} />

        <section className="work-section section-shell" id="work">
          <AnimateIn className="work-heading">
            <p className="section-context">CASE STUDIES 2020-2026</p>
            <h2>{t.selected}</h2>
            <p>{t.projectIntro}</p>
          </AnimateIn>
          <div className="project-list">
            {t.projects.map((project, index) => (
              <AnimateIn key={project.id}>
                <article className={`project-card ${index === 0 ? "featured" : ""}`}>
                  <div className="project-copy">
                    <div className="project-meta"><div><p className="project-label">{project.label}</p><span className="project-company">{project.company}</span></div></div>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                    <div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                  </div>
                  <ProjectVisual id={project.id} image={project.image} imageAlt={project.imageAlt} />
                </article>
              </AnimateIn>
            ))}
          </div>
        </section>

        <section className="foundation-section">
          <div className="section-shell">
            <AnimateIn><h2>{t.moreTitle}</h2></AnimateIn>
            <div className="foundation-grid">
              {t.more.map((item, index) => (
                <AnimateIn key={item.company} delay={index * .08}>
                  <article className={`foundation-card ${index < 2 ? "current-product" : ""}`}>
                    <span>{item.period}</span><h3>{item.company}</h3><b>{item.role}</b><p>{item.desc}</p>
                    {"href" in item && item.href && <a className="foundation-link" href={item.href} target="_blank" rel="noreferrer">{item.link}<span>↗</span></a>}
                    <div className="foundation-image">
                      <Image src={item.image} alt={item.alt} fill sizes="(min-width: 900px) 42vw, 90vw" />
                    </div>
                  </article>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="career-section section-shell" id="career">
          <AnimateIn className="career-heading"><h2>{t.careerTitle}</h2><p>{t.careerIntro}</p></AnimateIn>
          <div className="career-list">
            {t.careers.map(([period, company, role], index) => (
              <AnimateIn key={company} delay={index * .05} direction="left">
                <article><span className="career-index">0{index + 1}</span><span className="career-period">{period}</span><h3>{company}</h3><p>{role}</p></article>
              </AnimateIn>
            ))}
          </div>
        </section>

        <section className="collaboration-section" aria-label={t.collaborations}>
          <AnimateIn><p>{t.collaborations}</p></AnimateIn>
          <div className="logo-marquee" aria-hidden="true">
            <div className="logo-track">
              {[...companies, ...companies].map((company, index) => (
                <div className="company-logo" key={`${company.name}-${index}`}>
                  <Image src={company.logo} alt="" width={company.width} height={company.height} />
                </div>
              ))}
            </div>
          </div>
          <div className="sr-only">
            {companies.map((company) => <span key={company.name}>{company.name}</span>)}
          </div>
        </section>

        <section className="recognition-section" id="recognition">
          <div className="section-shell">
            <AnimateIn className="recognition-heading">
              <p className="eyebrow">{t.recognition.eyebrow}</p>
              <h2>{t.recognition.title}</h2>
              <p>{t.recognition.intro}</p>
            </AnimateIn>
            <div className="recognition-grid">
              {t.recognition.items.map((item, index) => (
                <AnimateIn key={item.title} delay={index * .07}>
                  <a className="recognition-card-link" href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.title}: ${item.link}`}>
                    <article className="recognition-card">
                      <div className="recognition-image">
                        <Image src={item.image} alt={item.alt} fill sizes="(min-width: 900px) 30vw, 92vw" />
                      </div>
                      <div className="recognition-copy">
                        <div className="recognition-meta"><span>{item.type}</span><b>{item.year}</b></div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <span className="recognition-link-label">{item.link}<span>↗</span></span>
                      </div>
                    </article>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="capabilities-section section-shell">
          <AnimateIn className="capabilities-heading">
            <h2>{t.capabilities.title}</h2>
          </AnimateIn>
          <div className="capabilities-grid">
            <div className="tool-groups">
              {t.capabilities.groups.map((group, index) => (
                <AnimateIn key={group.label} delay={index * .06}>
                  <article className="tool-group"><p>{group.label}</p><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn delay={.12}>
              <article className="education-card">
                <p>{t.capabilities.educationLabel}</p>
                <div className="education-logo">
                  <Image
                    src="/img/portfolio/education/unist-logo.png"
                    alt={locale === "ko" ? "울산과학기술원 UNIST 로고" : "UNIST logo"}
                    width={500}
                    height={238}
                    sizes="(min-width: 900px) 28vw, 72vw"
                  />
                </div>
                <div className="education-copy">
                  <h3>{t.capabilities.educationTitle}</h3>
                  <span>{t.capabilities.educationDesc}</span>
                </div>
              </article>
            </AnimateIn>
          </div>
        </section>

        <section className="closing-section" id="contact">
          <div className="section-shell closing-grid">
            <AnimateIn><h2>{t.closing.title}</h2></AnimateIn>
            <AnimateIn delay={.1} className="closing-copy"><p>{t.closing.body}</p><a href="mailto:jskim9536@gmail.com" className="light-button">{t.closing.button}<span>↗</span></a></AnimateIn>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <div><b>JUNSEOK KIM</b></div>
        <div><a href="mailto:jskim9536@gmail.com">Email</a><a href="https://www.linkedin.com/in/junseok-kim-2611351b6/" target="_blank" rel="noreferrer">LinkedIn</a><a href={t.switchHref}>{t.localeName === "한국어" ? "English" : "한국어"}</a></div>
      </footer>
    </>
  );
}
