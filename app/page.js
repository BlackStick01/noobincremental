import Link from "next/link";
import {
  AdSlot,
  CodeStatus,
  FaqPreview,
  GuideGrid,
  Hero,
  PageShell,
  ProgressionTimeline,
  Section,
} from "./components";
import { corePages, site } from "../lib/siteData";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: site.name,
  description: site.description,
});

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <Section
        title="Latest Code Status"
        description="A careful code page is better than a noisy one. Rewards are listed only after manual verification."
      >
        <CodeStatus />
      </Section>

      <Section
        title="Core Guide Pages"
        description="Start with the systems players search for most: codes, early route, upgrades, runes, prestige, and boosts."
      >
        <GuideGrid pages={corePages} />
      </Section>

      <Section
        title="Progression Route"
        description="Use this route as a practical checklist while the detailed pages are expanded."
        className="route-section"
      >
        <ProgressionTimeline />
      </Section>

      <Section
        title="FAQ Preview"
        description="Short answers for players who need quick checks before opening a detailed guide."
      >
        <FaqPreview />
        <div className="section-action">
          <Link className="button" href="/faq">
            Read all FAQ
          </Link>
        </div>
      </Section>

      <AdSlot />
    </PageShell>
  );
}
