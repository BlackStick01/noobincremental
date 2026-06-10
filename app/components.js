import Link from "next/link";
import {
  codeRows,
  featuredCategories,
  gameStats,
  legalLinks,
  mainNav,
  officialLinks,
  patchNotes,
  routeSteps,
  searchIndex,
  site,
  verificationNotice,
} from "../lib/siteData";
import SearchBox from "./search-box";

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
          <small>Roblox Incremental Simulator Guide</small>
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
          Codes, rune routes, beginner guides, prestige planning, Roblox links,
          updates, and safe notes for Noob Incremental players.
        </p>
      </section>
      <section>
        <h2>Official Sources</h2>
        <ul>
          {officialLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Verification</h2>
        <p>
          Public code rows separate source listings from in-game verification.
          Hidden formulas, rune odds, and scaling values stay marked as
          unverified until reliable data exists.
        </p>
      </section>
      <section>
        <h2>Legal</h2>
        <p>
          Unofficial fan guide. Not affiliated with Roblox Corporation or the
          Noob Incremental developers. This site does not provide Robux
          generators, scripts, executors, account services, trading, or
          paywalled cheats.
        </p>
        <div className="footer-links">
          {legalLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </section>
      <p className="copyright">
        © {site.copyright} - Fan site for informational and guide purposes only.
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
      <Badge tone="verify">Verification policy</Badge>
      <p>{verificationNotice}</p>
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
    <div className="table-wrap">
      <table className="data-table code-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Code</th>
            <th>Reward</th>
            <th>Source / Verification</th>
            <th>Last checked</th>
            <th>Copy</th>
          </tr>
        </thead>
        <tbody>
          {codeRows.map((row) => (
            <tr key={row.code}>
              <td>
                <Badge tone={row.verification.includes("Needs") ? "warn" : "ok"}>
                  {row.status}
                </Badge>
              </td>
              <td>
                <code>{row.code}</code>
              </td>
              <td>{row.reward}</td>
              <td>
                <span>{row.source}</span>
                <br />
                <Badge tone={row.verification.includes("Conflicting") ? "warn" : "verify"}>
                  {row.verification}
                </Badge>
              </td>
              <td>{row.lastChecked}</td>
              <td>
                <CopyCodeButton value={row.code} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CopyCodeButton({ value }) {
  return (
    <button className="copy-button" type="button" data-code={value}>
      Copy
    </button>
  );
}

export function FaqBlock({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="content-panel">
      <h2>FAQ</h2>
      <div className="faq-list">
        {items.map((item) => (
          <article className="faq-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
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
          <span key={href}>{page.title}</span>
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
  const latestPatches = patchNotes.filter((page) => page.path !== "/patch-notes").slice(0, 3);

  return (
    <PageShell>
      <section className="hero">
        <div className="hero-copy">
          <Badge>Roblox Incremental Simulator Guide</Badge>
          <h1>Noob Incremental Wiki</h1>
          <p className="lede">
            A complete fan-made wiki for Noob Incremental covering codes,
            upgrades, runes, tickets, potions, prestige, stats, layers,
            beginner routes, and progression strategy.
          </p>
          <div className="actions">
            <Link className="button primary" href="https://www.roblox.com/">
              Play on Roblox
            </Link>
            <Link className="button" href="/codes">
              Active Codes
            </Link>
            <Link className="button" href="/beginner-guide">
              Beginner Guide
            </Link>
            <Link className="button" href="/discord">
              Join Discord
            </Link>
          </div>
        </div>
        <aside className="hero-art-card">
          <img
            src="/images/noob-incremental-hero.png"
            alt="Original fan art for Noob Incremental Wiki"
          />
        </aside>
      </section>

      <StatCards />
      <VerificationNotice />

      <Section title="Featured Wiki Categories" description="Start with the systems players search for most.">
        <CardGrid pages={featuredCategories} />
      </Section>

      <Section title="Latest Codes" description="Public listings are separated from in-game verification.">
        <CodeTable />
      </Section>

      <Section title="Beginner Progression Route" description="A compact route from rewards to Prestige.">
        <div className="route-grid">
          {routeSteps.map((step, index) => (
            <article className="route-card" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Strategy Previews" description="Use these previews to choose the next detailed guide.">
        <div className="preview-grid">
          <Preview href="/upgrades" title="Upgrade Priority Preview" text="Oof multipliers and automation become stronger after flat gains stop carrying." />
          <Preview href="/runes" title="Rune Strategy Preview" text="Roll Runes with a wall in mind: Oof, cost, luck, speed, bulk, or reset value." />
          <Preview href="/prestige" title="Prestige Timing Preview" text="Prestige only when the next run is clearly faster or unlocks a new layer." />
        </div>
      </Section>

      <Section title="Latest Updates" description="Patch pages are ready for verified update notes.">
        <CardGrid pages={latestPatches} />
      </Section>

      <Section title="FAQ Preview" description="Quick answers before opening deeper pages.">
        <FaqBlock
          items={[
            {
              question: "What should beginners do first?",
              answer: "Redeem public rewards, build stable Oof income, buy early upgrades, and avoid random Ticket spending.",
            },
            {
              question: "Are exact Rune odds known?",
              answer: "Exact hidden rates should stay unverified until tested in-game or posted by official sources.",
            },
          ]}
        />
      </Section>

      <Section title="Official Sources" description="Use official destinations first, then compare public trackers.">
        <div className="source-grid">
          {officialLinks.map((link) => (
            <article className="source-card" key={link.label}>
              <Badge tone="verify">{link.badge}</Badge>
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
          <Badge tone="default">{page.category}</Badge>
          <h3>{page.title}</h3>
          <p>{page.description}</p>
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

export function ContentPageView({ page }) {
  const isCodes = page.path === "/codes";
  const isSearch = page.path === "/search";
  const isIndexPage = page.path === "/blog" || page.path === "/patch-notes" || page.path === "/wiki";

  return (
    <PageShell>
      <article className="article">
        <Breadcrumbs page={page} />
        <header className="article-hero">
          <Badge tone="default">{page.category}</Badge>
          <h1>{page.title}</h1>
          <p className="lede">{page.intro}</p>
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
            <p>{section.body}</p>
            {section.list?.length ? (
              <ul className="info-list">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <FaqBlock items={page.faq} />
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
      if (page.path === "/patch-notes") return item.url.startsWith("/patch-notes/");
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
