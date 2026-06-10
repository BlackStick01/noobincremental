import { HomePage, JsonLd } from "./components";
import { site } from "../lib/siteData";
import { pageMetadata, videoGameJsonLd } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Noob Incremental Wiki - Codes, Runes, Upgrades and Prestige",
  description:
    "Verified-first Noob Incremental Wiki with codes, runes, upgrades, prestige, stats, update watches, beginner routes, and safe Roblox guidance.",
});

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameJsonLd()} />
      <HomePage site={site} />
    </>
  );
}
