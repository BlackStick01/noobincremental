import { HomePage, JsonLd } from "./components";
import { site } from "../lib/siteData";
import { pageMetadata, videoGameJsonLd } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Noob Incremental Wiki - Codes, Upgrades, Runes, Prestige Guide",
  description:
    "Complete Noob Incremental Wiki with codes, upgrades, runes, prestige strategies, tickets, potions, stats, layers, and beginner progression guides.",
});

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameJsonLd()} />
      <HomePage site={site} />
    </>
  );
}
