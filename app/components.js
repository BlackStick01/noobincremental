import Link from "next/link";
import {
  codes,
  corePages,
  faq,
  legalLinks,
  mainNav,
  progressionRoute,
  site,
} from "../lib/siteData";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Noob Incremental Wiki home">
        <span className="brand-mark">NI</span>
        <span>
          <strong>{site.name}</strong>
          <small>Unofficial progression database</small>
        </span>
      </Link>
      <nav className="nav" aria-label="Main navigation">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{site.name}</strong>
        <p>{site.disclaimer}</p>
      </div>
      <div className="footer-links">
        {legalLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export function PageShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Noob Incremental Wiki, Codes, and Progression Routes</h1>
        <p className="lede">
          A clean fan-made guide hub for Roblox Noob Incremental players:
          code status, early routes, upgrades, runes, prestige timing, tickets,
          potions, and safe community checks.
        </p>
        <div className="actions">
          <Link className="button primary" href="/codes">
            Check Codes
          </Link>
          <Link className="button" href="/beginner-guide">
            Start Guide
          </Link>
        </div>
        <GuideFinder />
      </div>
      <aside className="hero-console" aria-label="Noob Incremental status">
        <ProgressConsole />
      </aside>
    </section>
  );
}

export function ProgressConsole() {
  return (
    <div className="console-card">
      <div className="console-screen">
        <img
          className="hero-art"
          src="/images/noob-incremental-hero.png"
          alt="Original fan art showing a blocky incremental game character with rune, potion, ticket, and prestige objects."
        />
        <div className="noob-scene" aria-hidden="true">
          <span className="resource-node node-one" />
          <span className="resource-node node-two" />
          <span className="resource-node node-three" />
          <span className="prestige-ring" />
        </div>
      </div>
      <div className="status-panel">
        <span>Last updated</span>
        <strong>{site.lastUpdated}</strong>
        <span>Codes checked</span>
        <strong>{codes.lastChecked}</strong>
        <span>Site status</span>
        <strong>MVP guide live</strong>
      </div>
    </div>
  );
}

export function GuideFinder() {
  return (
    <div className="guide-finder" aria-label="Guide finder">
      <span>Guide finder</span>
      <Link href="/upgrades">Upgrades</Link>
      <Link href="/runes">Runes</Link>
      <Link href="/prestige">Prestige</Link>
      <Link href="/potions">Potions</Link>
    </div>
  );
}

export function Section({ title, description, children, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <div className="section-heading">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function GuideGrid({ pages = corePages }) {
  return (
    <div className="guide-grid">
      {pages.map((page) => (
        <Link className="guide-card" key={page.href} href={page.href}>
          <span className="guide-icon">{page.icon}</span>
          <span className="guide-title">{page.title}</span>
          <p>{page.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export function ProgressionTimeline() {
  return (
    <div className="timeline">
      {progressionRoute.map((item) => (
        <article className="timeline-item" key={item.step}>
          <span>{item.step}</span>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}

export function CodeStatus() {
  return (
    <div className="code-status">
      <div className="notice">
        <strong>{codes.status}</strong>
        <p>{codes.notes}</p>
        <Link href="/codes">Open the codes page</Link>
      </div>
      <CodeTable />
    </div>
  );
}

export function CodeTable() {
  const rows = codes.active.length ? codes.active : [];

  return (
    <table className="code-table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Reward</th>
          <th>Status</th>
          <th>Checked</th>
        </tr>
      </thead>
      <tbody>
        {rows.length ? (
          rows.map((code) => (
            <tr key={code.value}>
              <td>{code.value}</td>
              <td>{code.reward}</td>
              <td>{code.status}</td>
              <td>{code.checked}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="empty-row" colSpan="4">
              No active codes have been verified for publication yet.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export function FaqPreview({ limit = 4 }) {
  return (
    <div className="faq-list">
      {faq.slice(0, limit).map((item) => (
        <article className="faq-item" key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  );
}

export function InfoList({ items }) {
  return (
    <ul className="info-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ArticlePage({ page, slug }) {
  return (
    <PageShell>
      <section className="article-hero">
        <div>
          <Link className="back-link" href="/">
            Home / Guides
          </Link>
          <h1>{page.title}</h1>
          <p className="lede">{page.intro}</p>
        </div>
        <aside className="article-status">
          <span>Page updated</span>
          <strong>{site.lastUpdated}</strong>
          <span>Route</span>
          <strong>/{slug}</strong>
        </aside>
      </section>

      <div className="content-layout">
        <article>
          {page.codeTable ? (
            <section className="content-panel">
              <h2>Verified code table</h2>
              <CodeTable />
            </section>
          ) : null}

          {page.faqPage ? (
            <section className="content-panel">
              <FaqPreview limit={faq.length} />
            </section>
          ) : null}

          {page.sections.map((section) => (
            <section className="content-panel" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.list ? <InfoList items={section.list} /> : null}
            </section>
          ))}
        </article>

        <aside className="sidebar">
          <AdSlot label="Ad placement reserved" />
          <RelatedGuides current={`/${slug}`} />
        </aside>
      </div>
    </PageShell>
  );
}

export function AdSlot({ label = "Ad placement reserved" }) {
  return (
    <aside className="ad-slot" aria-label={label}>
      <span>{label}</span>
      <p>Reserved for future AdSense testing after the site has enough content and traffic.</p>
    </aside>
  );
}

export function RelatedGuides({ current }) {
  const related = corePages.filter((page) => page.href !== current).slice(0, 4);

  return (
    <section className="related-panel" aria-label="Related guides">
      <h2>Related Guides</h2>
      <div className="related-list">
        {related.map((page) => (
          <Link key={page.href} href={page.href}>
            {page.title}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
