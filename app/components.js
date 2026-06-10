import Link from "next/link";
import {
  codeGroups,
  featuredCategories,
  gameStats,
  legalLinks,
  mainNav,
  officialLinks,
  routeSteps,
  searchIndex,
  site,
  updates,
  verificationBadges,
  verificationNotice,
} from "../lib/siteData";
import SearchBox from "./search-box";

const toneMap = {
  active: "ok",
  verify: "warn",
  expired: "muted",
  official: "ok",
  "official-game-description": "ok",
  "multiple-public-sources": "verify",
  "single-public-source": "warn",
  "community-tested": "verify",
  "needs-in-game-verification": "warn",
  "conflicting-reports": "danger",
  archived: "muted",
};

const labelize = (value = "") =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Badge({ children, tone = "default" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Noob Incremental Wiki home">
        <span className="brand-mark">NI</span>
        <span>
          <strong>{site.name}</strong>
          <small>Verified Roblox guide</small>
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

export function WikiFooter() {
  return (
    <footer className="site-footer">
      <section>
        <h2>Noob Incremental Wiki</h2>
        <p>
          Independent English wiki for codes, systems, route planning, and
          verification-first Noob Incremental guides.
        </p>
      </section>
      <section>
        <h2>Guides</h2>
        <ul>
          {mainNav.slice(0, 6).map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Official Sources</h2>
        <ul>
          {officialLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
              <small>{link.note}</small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Verification</h2>
        <p>
          We do not promote Robux generators, executors, automation scripts,
          account services, or cheating tools. Hidden formulas and odds stay
          unverified until reliable evidence exists.
        </p>
      </section>
      <section>
        <h2>Legal</h2>
        <div className="footer-links">
          {legalLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </section>
      <p className="copyright">
        © {site.copyright} — Independent fan resource for informational use.
      </p>
    </footer>
  );
}

export function PageShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <WikiFooter />
    </>
  );
}

export function VerificationNotice() {
  return (
    <aside className="verification-notice">
      <Badge tone="verify">{verificationNotice.label}</Badge>
      <p>{verificationNotice.text}</p>
    </aside>
  );
}

export function DataTable({ columns, rows }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.join("-")}-${index}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CodeTable() {
  return (
    <div className="code-groups">
      <VerificationLegend />
      {codeGroups.map((group) => (
        <section className="content-panel code-group" key={group.title}>
          <h2>{group.title}</h2>
          <p>{group.description}</p>
          <div className="table-wrap desktop-codes-table">
            <table className="data-table code-table">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Code</th>
                  <th>Reward</th>
                  <th>Verification</th>
                  <th>Type</th>
                  <th>Last checked</th>
                  <th>Copy</th>
                </tr>
              </thead>
              <tbody>
                {group.rows.map((row) => (
                  <tr key={row.code}>
                    <td>
                      <Badge tone={toneMap[row.status] || "default"}>{labelize(row.status)}</Badge>
                    </td>
                    <td>
                      <code>{row.code}</code>
                    </td>
                    <td>{row.reward}</td>
                    <td>
                      <Badge tone={toneMap[row.verification] || "verify"}>
                        {labelize(row.verification)}
                      </Badge>
                      <p className="table-note">{row.notes}</p>
                    </td>
                    <td>{row.regularOrCommunity}</td>
                    <td>{row.lastChecked}</td>
                    <td>
                      <CopyCodeButton value={row.code} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mobile-codes-list">
            {group.rows.map((row) => (
              <CodeCard key={row.code} row={row} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function CodeCard({ row }) {
  const isCommunity = row.regularOrCommunity?.toLowerCase() === "community";

  return (
    <article className="code-card">
      <div className="code-card-header">
        <code>{row.code}</code>
        <Badge tone={toneMap[row.status] || "default"}>{labelize(row.status)}</Badge>
      </div>
      <div className="code-card-row">
        <span>Reward</span>
        <strong>{row.reward}</strong>
      </div>
      <div className="code-card-row">
        <span>Verification</span>
        <Badge tone={toneMap[row.verification] || "verify"}>
          {labelize(row.verification)}
        </Badge>
      </div>
      {isCommunity ? (
        <div className="code-card-row">
          <span>Type</span>
          <strong>{row.regularOrCommunity}</strong>
        </div>
      ) : null}
      <div className="code-card-row">
        <span>Last checked</span>
        <span>{row.lastChecked}</span>
      </div>
      {row.notes ? (
        <details className="code-card-details">
          <summary>Verification details</summary>
          <p>{row.notes}</p>
        </details>
      ) : null}
      <CopyCodeButton value={row.code} />
    </article>
  );
}

function VerificationLegend() {
  return (
    <section className="content-panel verification-legend">
      <h2>Verification Legend</h2>
      <div className="badge-cloud">
        {verificationBadges.map((badge) => (
          <Badge key={badge.key} tone={toneMap[badge.key] || badge.tone}>
            {badge.label}
          </Badge>
        ))}
      </div>
    </section>
  );
}

function CopyCodeButton({ value }) {
  return (
    <button
      className="copy-button"
      type="button"
      data-code={value}
      aria-label={`Copy code ${value}`}
    >
      Copy
    </button>
  );
}

export function FaqBlock({ items = [], groups = [] }) {
  if (!items.length && !groups.length) {
    return null;
  }

  return (
    <section className="content-panel">
      <h2>FAQ</h2>
      <div className="faq-list">
        {groups.map((group) => (
          <div className="faq-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.items.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        ))}
        {items.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function RelatedPages({ links = [] }) {
  if (!links.length) {
    return null;
  }

  return (
    <section className="related-panel">
      <h2>Related Pages</h2>
      <div className="related-list">
        {links.map((href) => (
          <Link key={href} href={href}>
            {href.replace("/", "").replaceAll("-", " ") || "Home"}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Breadcrumbs({ page }) {
  const segments = page.path.split("/").filter(Boolean);
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        return isLast ? (
          <span key={href}>{page.h1 || page.title}</span>
        ) : (
          <Link key={href} href={href}>
            {segment.replaceAll("-", " ")}
          </Link>
        );
      })}
    </nav>
  );
}

export function HomePage() {
  const latestUpdates = updates.filter((page) => page.path !== "/updates").slice(0, 3);
  const faqPreview = [
    {
      question: "What should beginners do first?",
      answer: "Build Noobs, stabilize Oof income, buy broad upgrades, and watch stats before chasing deeper systems.",
    },
    {
      question: "Are all codes officially confirmed?",
      answer: "No. Codes are split into multiple-source, single-source, conflicting, and expired groups.",
    },
    {
      question: "Are exact Rune odds known?",
      answer: "Exact hidden odds stay unverified unless official sources or repeatable in-game tests support them.",
    },
  ];

  return (
    <PageShell>
      <section className="hero">
        <div className="hero-copy">
          <Badge>Roblox Guide Badge</Badge>
          <h1>Noob Incremental Wiki</h1>
          <p className="lede">
            A dark, verification-first English wiki for Noob Incremental:
            codes, beginner routes, upgrades, stats, runes, prestige, layers,
            Prism notes, update watches, and safe Roblox guidance.
          </p>
          <div className="actions">
            <Link className="button primary" href="/codes">
              Latest Codes
            </Link>
            <Link className="button" href="/beginner-guide">
              Beginner Route
            </Link>
            <Link className="button" href="/wiki">
              Wiki Hub
            </Link>
            <Link className="button" href="/updates">
              Update Center
            </Link>
          </div>
        </div>
        <aside className="hero-art-card">
          <img
            src="/images/noob-incremental-hero.png"
            alt="Original neon wiki artwork for Noob Incremental"
          />
        </aside>
      </section>

      <StatCards />
      <VerificationNotice />

      <Section title="Featured Wiki Categories" description="Natural starting points for the systems players search most.">
        <CardGrid pages={featuredCategories} />
      </Section>

      <Section title="Latest Codes" description="Reported codes are grouped by evidence, not hype.">
        <CodeTable />
      </Section>

      <Section title="Beginner Route" description="A compact path through the confirmed core loop.">
        <div className="route-grid">
          {routeSteps.map((step, index) => (
            <article className="route-card" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Upgrade, Rune, Prestige Previews" description="Choose a system guide based on your current bottleneck.">
        <div className="preview-grid">
          <Preview href="/upgrades" title="Upgrades" text="Hundreds of upgrades are confirmed; exact names and formulas require verification." />
          <Preview href="/runes" title="Runes" text="Rune Speed and Rune Luck bonuses are tracked, while hidden odds stay unverified." />
          <Preview href="/prestige" title="Prestige" text="Multiple layers exist; use recovery speed instead of fake threshold tables." />
        </div>
      </Section>

      <Section title="Updates" description="Real source watches only; fake versioned patch notes stay removed.">
        <CardGrid pages={latestUpdates} />
      </Section>

      <Section title="FAQ Preview" description="Three quick answers, with full categorized FAQ on its own page.">
        <FaqBlock items={faqPreview} />
        <Link className="button" href="/faq">
          View all FAQs
        </Link>
      </Section>

      <Section title="Official Sources" description="Official destinations first; uncertain URLs stay marked for verification.">
        <div className="source-grid">
          {officialLinks.map((link) => (
            <article className="source-card" key={link.label}>
              <Badge tone="warn">Needs verification</Badge>
              <h3>{link.label}</h3>
              <p>{link.note}</p>
              <Link href={link.href}>Open source</Link>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}

export function StatCards() {
  return (
    <section className="stat-section">
      <div className="stat-grid">
        {gameStats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.note}</p>
          </article>
        ))}
      </div>
      <p className="snapshot-note">
        Stats snapshot checked: {site.lastChecked}. Live values may change.
      </p>
    </section>
  );
}

export function Section({ title, description, children }) {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function CardGrid({ pages = [] }) {
  return (
    <div className="card-grid">
      {pages.map((page) => (
        <Link className="wiki-card" key={page.path} href={page.path}>
          <Badge tone={toneMap[page.badge?.toLowerCase?.().replaceAll(" ", "-")] || "default"}>
            {page.category}
          </Badge>
          <h3>{page.h1 || page.title}</h3>
          <p>{page.featuredSummary || page.description}</p>
        </Link>
      ))}
    </div>
  );
}

function Preview({ href, title, text }) {
  return (
    <Link className="preview-card" href={href}>
      <h3>{title}</h3>
      <p>{text}</p>
    </Link>
  );
}

export function SourceVerification({ page }) {
  if (!page.confirmed?.length && !page.unconfirmed?.length && !page.sources?.length && !page.lastReviewed) {
    return null;
  }

  return (
    <section className="content-panel source-verification">
      <h2>Source and Verification</h2>
      {page.lastReviewed ? <p className="table-note">Last reviewed: {page.lastReviewed}</p> : null}
      <div className="verification-grid">
        {page.confirmed?.length ? (
          <div>
            <h3>Confirmed</h3>
            <ul className="info-list">
              {page.confirmed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {page.unconfirmed?.length ? (
          <div>
            <h3>Unverified</h3>
            <ul className="info-list">
              {page.unconfirmed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {page.sources?.length ? (
          <div>
            <h3>Sources</h3>
            <ul className="info-list">
              {page.sources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ContentPageView({ page }) {
  const isCodes = page.path === "/codes";
  const isSearch = page.path === "/search";
  const isIndexPage =
    page.path === "/blog" || page.path === "/patch-notes" || page.path === "/wiki" || page.path === "/updates";

  return (
    <PageShell>
      <article className="article">
        <Breadcrumbs page={page} />
        <header className="article-hero">
          <Badge tone="default">{page.category}</Badge>
          <h1>{page.h1 || page.title}</h1>
          <p className="lede">{page.description}</p>
        </header>

        <VerificationNotice />

        {isSearch ? <SearchBox items={searchIndex} /> : null}
        {isCodes ? <CodeTable /> : null}
        {isIndexPage ? <IndexPanel page={page} /> : null}

        {page.tables?.map((item) => (
          <section className="content-panel" key={item.title}>
            <h2>{item.title}</h2>
            <DataTable columns={item.columns} rows={item.rows} />
          </section>
        ))}

        {page.sections?.map((section) => (
          <section className="content-panel" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body ? <p>{section.body}</p> : null}
            {section.list?.length ? (
              <ul className="info-list">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <SourceVerification page={page} />
        <FaqBlock items={page.faq} groups={page.faqGroups} />
        <RelatedPages links={page.related} />
      </article>
    </PageShell>
  );
}

function IndexPanel({ page }) {
  const items = searchIndex
    .filter((item) => {
      if (page.path === "/wiki") return item.url.startsWith("/wiki/");
      if (page.path === "/blog") return item.url.startsWith("/blog/");
      if (page.path === "/updates") return item.url.startsWith("/updates/");
      if (page.path === "/patch-notes") return item.url.startsWith("/updates/");
      return false;
    })
    .filter((item) => item.url !== page.path);

  return (
    <section className="content-panel">
      <h2>{page.category} Pages</h2>
      <div className="card-grid compact">
        {items.map((item) => (
          <Link className="wiki-card" key={item.url} href={item.url}>
            <Badge>{item.category}</Badge>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
