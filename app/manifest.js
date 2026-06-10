export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Noob Incremental Wiki",
    short_name: "Noob Wiki",
    description:
      "Codes, upgrades, runes, prestige and progression guides for Noob Incremental.",
    start_url: "/",
    display: "standalone",
    background_color: "#05090c",
    theme_color: "#00c7e8",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
