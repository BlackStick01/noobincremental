const today = "June 10, 2026";

export const site = {
  name: "Noob Incremental Wiki",
  url: "https://noobincremental.site",
  description:
    "An independent English wiki for Noob Incremental with codes, beginner routes, systems explainers, verification notes, and safe Roblox guidance.",
  tagline: "Verified-first guides for Roblox Noob Incremental.",
  image: "/images/noob-incremental-hero.png",
  checkedAt: today,
  lastChecked: today,
  lastUpdated: "2026-06-10",
  copyright: "2026 Noob Incremental Wiki",
};

export const verificationNotice = {
  label: "Community verification policy",
  text:
    "This wiki separates official game-description facts from public reports and unverified community findings. Hidden formulas, odds, and thresholds stay marked as unverified until tested or published by official sources.",
};

export const verificationBadges = [
  { key: "official", label: "Official", tone: "good" },
  { key: "official-game-description", label: "Official game description", tone: "good" },
  { key: "multiple-public-sources", label: "Multiple public sources", tone: "info" },
  { key: "single-public-source", label: "Single public source", tone: "warn" },
  { key: "community-tested", label: "Community tested", tone: "info" },
  { key: "needs-in-game-verification", label: "Needs in-game verification", tone: "warn" },
  { key: "conflicting-reports", label: "Conflicting reports", tone: "danger" },
  { key: "expired", label: "Expired", tone: "muted" },
  { key: "archived", label: "Archived", tone: "muted" },
];

export const officialLinks = [
  {
    label: "Roblox game page",
    href: "https://www.roblox.com/",
    note: "Search Roblox for Noob Incremental by Ghoulax Games; exact URL needs verification.",
  },
  {
    label: "Ghoulax Games",
    href: "https://www.roblox.com/",
    note: "Publisher is listed as Ghoulax Games; direct group URL needs verification.",
  },
  {
    label: "Community server",
    href: "/discord",
    note: "Join bonus is documented publicly; invitation URL should be verified before linking.",
  },
];

export const gameStats = [
  { label: "Core Loop", value: "Buy Noobs → Oof → Upgrades", note: "Official game-description systems." },
  { label: "Upgrade Scale", value: "Hundreds", note: "Exact list remains community verified." },
  { label: "Stats", value: "Dozens", note: "Use the stats page as a tracking glossary." },
  { label: "Prestige", value: "Multiple layers", note: "Thresholds are intentionally unlisted until verified." },
];

export const mainNav = [
  { label: "Codes", href: "/codes" },
  { label: "Beginner Guide", href: "/beginner-guide" },
  { label: "Upgrades", href: "/upgrades" },
  { label: "Runes", href: "/runes" },
  { label: "Prestige", href: "/prestige" },
  { label: "Wiki", href: "/wiki" },
  { label: "Updates", href: "/updates" },
  { label: "Search", href: "/search" },
];

export const legalLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Verification Policy", href: "/verification-policy" },
];

export const routeSteps = [
  "Buy early Noobs until Oof income feels stable.",
  "Spend Oof on broad Upgrades before chasing narrow bonuses.",
  "Watch Stat changes to understand which upgrade family is carrying progress.",
  "Roll and level Runes after your base loop is not stalling every few seconds.",
  "Prestige only when the next layer accelerates recovery more than waiting would.",
];

const baseSources = [
  "Official game description",
  "Public Roblox community reports",
  "Community testing notes",
];

export const codeRows = [
  ["9KCCU!!", "Reported free rewards", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported active; test before spending boosts around it."],
  ["8KCCU!!", "Reported free rewards", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported active concurrent-player milestone code."],
  ["7KCCU!!", "Reported free rewards", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported active concurrent-player milestone code."],
  ["LABUPDATE", "Reported lab update reward", "verify", "multiple-public-sources", "Regular", "June 2026", today, "The LABUPDATE code is publicly documented, but a complete official Lab changelog has not been located. Exact Lab mechanics should remain marked as unverified."],
  ["6KCCU!!", "Reported free rewards", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported active concurrent-player milestone code."],
  ["5KCCU!!", "Reported free rewards", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported active concurrent-player milestone code."],
  ["4KCCU!!", "Reported free rewards", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported active concurrent-player milestone code."],
  ["3KCCU!!", "Reported free rewards", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported active concurrent-player milestone code."],
  ["2KCCU!!", "Reported free rewards", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported active concurrent-player milestone code."],
  ["1KLIKES!!", "Reported free rewards", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported like milestone code."],
  ["THANKS4JOINING", "Reported starter reward", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported launch-era welcome code."],
  ["RELEASE", "Reported launch reward", "verify", "multiple-public-sources", "Regular", "June 2026", today, "Publicly reported launch code."],
  ["SORRYSHUTDOWN", "Reported shutdown compensation", "verify", "single-public-source", "Regular", "June 2026", today, "Single-source report only; do not treat as confirmed active."],
  ["BUGFIXANDBALANCEFIX", "Reward not reliably documented", "verify", "conflicting-reports", "Regular", "June 2026", today, "Public reports conflict on status and reward."],
  ["BUGFIX1", "Reward not reliably documented", "verify", "conflicting-reports", "Regular", "June 2026", today, "Public reports conflict on status and reward."],
  ["BUGFIX2", "Reward not reliably documented", "verify", "conflicting-reports", "Regular", "June 2026", today, "Public reports conflict on status and reward."],
  ["BUGFIX3", "Reward not reliably documented", "verify", "conflicting-reports", "Regular", "June 2026", today, "Public reports conflict on status and reward."],
  ["1.5KCCU!!", "Reward not reliably documented", "verify", "conflicting-reports", "Regular", "June 2026", today, "Public reports conflict on status and reward."],
  ["WWWRELEASE", "Reward not reliably documented", "verify", "conflicting-reports", "Regular", "June 2026", today, "Public reports conflict on status and reward."],
  ["250KVISITS", "Reward not reliably documented", "expired", "expired", "Regular", "June 2026", today, "Archived as expired or no longer reliably redeemable."],
  ["MINIUPDATE", "Reward not reliably documented", "expired", "expired", "Regular", "June 2026", today, "Archived as expired or no longer reliably redeemable."],
  ["UPDATE1!", "Reward not reliably documented", "expired", "expired", "Regular", "June 2026", today, "Archived as expired or no longer reliably redeemable."],
  ["SORRYDELAY1!", "Reward not reliably documented", "expired", "expired", "Regular", "June 2026", today, "Archived as expired or no longer reliably redeemable."],
  ["SORRYITSLASTSHUTDOWN!", "Reward not reliably documented", "expired", "expired", "Regular", "June 2026", today, "Archived as expired or no longer reliably redeemable."],
].map(([code, reward, status, verification, regularOrCommunity, firstSeen, lastChecked, notes]) => ({
  code,
  reward,
  status,
  verification,
  regularOrCommunity,
  firstSeen,
  lastChecked,
  notes,
}));

export const codeGroups = [
  {
    title: "Publicly Reported Active Codes",
    description:
      "These codes appear across multiple public sources, but this wiki still labels them as reported until a fresh in-game check is completed.",
    rows: codeRows.filter((row) => row.verification === "multiple-public-sources"),
  },
  {
    title: "Needs In-Game Verification",
    description: "Single-source reports belong here until more players confirm the code and reward.",
    rows: codeRows.filter((row) => row.verification === "single-public-source"),
  },
  {
    title: "Conflicting Reports",
    description: "These entries have inconsistent public claims, so they should be tested cautiously.",
    rows: codeRows.filter((row) => row.verification === "conflicting-reports"),
  },
  {
    title: "Expired and Archived Codes",
    description: "These are kept for history and search clarity, not as recommended active codes.",
    rows: codeRows.filter((row) => row.verification === "expired"),
  },
];

export const codeFaq = [
  {
    question: "Why does a Noob Incremental code fail?",
    answer:
      "It may be expired, typed with the wrong punctuation, already redeemed, community-only, or simply reported incorrectly by public sources.",
  },
  {
    question: "Are all active codes officially confirmed?",
    answer:
      "No. This page uses verification labels so readers can distinguish multiple public reports from confirmed in-game testing.",
  },
  {
    question: "When should I use code rewards?",
    answer:
      "Use timed boosts when you can actively play and combine them with upgrade, rune, or prestige progress instead of redeeming everything while idle.",
  },
];

const runeFaq = [
  {
    question: "Do rune odds appear on this wiki?",
    answer:
      "Only verified odds should be published. Until official or tested values exist, this wiki discusses rune strategy without inventing exact probabilities.",
  },
  {
    question: "Should beginners chase rare runes first?",
    answer:
      "Usually no. A stable Oof and upgrade base makes rune progress easier to evaluate, even when rare results are exciting.",
  },
];

const prestigeFaq = [
  {
    question: "What is the exact prestige threshold?",
    answer:
      "Exact thresholds are not published here unless verified. Use the in-game prompt and compare recovery speed before resetting.",
  },
  {
    question: "Should I prestige immediately?",
    answer:
      "Prestige when the next layer helps you rebuild faster than continuing the current run. Avoid resetting only because the button appears.",
  },
];

const upgradeFaq = [
  {
    question: "How many upgrades are in Noob Incremental?",
    answer:
      "The official description supports hundreds of upgrades. This wiki avoids fake full lists until names and effects are verified.",
  },
  {
    question: "What upgrade should I buy first?",
    answer:
      "Prioritize upgrades that improve your broad Oof loop, then add specialized bonuses once a bottleneck is obvious.",
  },
];

export const fullFaqGroups = [
  {
    title: "Codes",
    items: codeFaq,
  },
  {
    title: "Runes",
    items: runeFaq,
  },
  {
    title: "Prestige",
    items: prestigeFaq,
  },
  {
    title: "Verification",
    items: [
      {
        question: "Why are some values marked unverified?",
        answer:
          "Noob Incremental changes quickly, and public sources often disagree. Unverified labels prevent guesses from becoming fake facts.",
      },
      {
        question: "Does this wiki promote scripts or Robux generators?",
        answer:
          "No. This wiki does not promote Robux generators, executors, automation scripts, account services, or cheating tools.",
      },
    ],
  },
];

const wikiBody = {
  noobs:
    "Noobs are the foundation of the loop. New players buy them to build Oof income, then use that income to unlock upgrades and deeper systems. Treat Noob growth as the base engine rather than the final goal.",
  oof:
    "Oof is the main early progression resource. A healthy Oof flow lets you test upgrade value, recover after resets, and decide when boosts or runes are actually helping.",
  "roblox-plus":
    "Roblox Plus is publicly documented as a bonus path that grants +10% Oof and +10% Prism. The wiki tracks the bonus without implying unofficial purchase shortcuts.",
  "community-bonuses":
    "Public descriptions report +10% Rune Speed for joining the Roblox group and liking the game, plus +10% Rune Luck for joining the community server. Direct official links still need verification.",
  formulas:
    "Formula details are intentionally conservative. If a multiplier, drop rate, or scaling curve has not been officially posted or repeatedly tested, it stays out of the exact-number tables.",
  glossary:
    "This glossary explains Noob Incremental terms in plain English so players can read guides without needing every system unlocked first.",
};

const makeWiki = (slug, title, description, body, extra = {}) => ({
  path: `/wiki/${slug}`,
  category: "Wiki",
  title,
  h1: title,
  description,
  featuredSummary: description,
  lastReviewed: today,
  badge: extra.badge || "Needs in-game verification",
  sections: [
    {
      heading: "What it means",
      body,
    },
    {
      heading: "How to use this page",
      body:
        "Use this page as a safe reference point. Exact values are added only when they are sourced, tested, or clearly visible in-game.",
    },
  ],
  confirmed: extra.confirmed || ["Part of the Noob Incremental progression ecosystem."],
  unconfirmed: extra.unconfirmed || ["Exact hidden scaling and internal formulas remain unverified."],
  sources: baseSources,
});

export const wikiPages = [
  {
    path: "/wiki",
    category: "Wiki",
    title: "Noob Incremental Wiki Hub",
    h1: "Noob Incremental Wiki",
    description:
      "Browse verified-first Noob Incremental pages for Noobs, Oof, bonuses, formulas, glossary entries, and progression systems.",
    featuredSummary: "A central index for system explainers and verification-first wiki pages.",
    lastReviewed: today,
    sections: [
      {
        heading: "How this wiki is organized",
        body:
          "Pages are grouped around systems players repeatedly search for: resources, upgrades, runes, prestige, layers, codes, and update verification. Each page states what is known and what still needs testing.",
      },
    ],
    confirmed: ["Published by Ghoulax Games.", "Core loop uses Noobs, Oof, Upgrades, Stats, Runes, Prestige, and deeper progression."],
    unconfirmed: ["Exact hidden formulas and complete official page URLs need ongoing verification."],
    sources: baseSources,
  },
  makeWiki("noobs", "Noobs", "Understand how Noobs support the early Noob Incremental economy.", wikiBody.noobs, {
    badge: "Official game description",
    confirmed: ["Buying Noobs is part of the official core loop."],
  }),
  makeWiki("oof", "Oof", "Track the main early resource used to buy upgrades and move forward.", wikiBody.oof, {
    badge: "Official game description",
    confirmed: ["Noobs generate Oof in the core progression loop."],
  }),
  makeWiki("roblox-plus", "Roblox Plus", "Review the publicly documented Roblox Plus Oof and Prism bonuses.", wikiBody["roblox-plus"], {
    badge: "Multiple public sources",
    confirmed: ["Roblox Plus gives +10% Oof and +10% Prism according to public descriptions."],
  }),
  makeWiki("community-bonuses", "Community Bonuses", "See community participation bonuses and what still needs URL verification.", wikiBody["community-bonuses"], {
    badge: "Multiple public sources",
    confirmed: ["Join Roblox Group and like: +10% Rune Speed.", "Join Community Server: +10% Rune Luck."],
  }),
  makeWiki("formulas", "Formulas and Scaling", "A conservative policy page for Noob Incremental formulas, odds, and thresholds.", wikiBody.formulas, {
    badge: "Needs in-game verification",
  }),
  makeWiki("glossary", "Glossary", "Plain-English definitions for common Noob Incremental terms.", wikiBody.glossary, {
    badge: "Community tested",
  }),
];

export const guidePages = [
  {
    path: "/codes",
    category: "Codes",
    title: "Noob Incremental Codes - Verified Status List",
    h1: "Noob Incremental Codes",
    description:
      "A verification-first Noob Incremental codes list with active public reports, conflict labels, expired archive, redemption tips, and methodology.",
    featuredSummary: "Copy reported codes, understand confidence labels, and avoid fake confirmed claims.",
    lastReviewed: today,
    badge: "Multiple public sources",
    sections: [
      {
        heading: "Last checked",
        body:
          "Codes were reviewed on June 10, 2026. Live code status can change without warning, so entries are separated by verification confidence instead of a single green list.",
      },
      {
        heading: "Redeem regular codes",
        body:
          "Open the in-game codes menu, paste the code exactly as shown, and watch punctuation such as exclamation marks. If the code fails, check whether it is community-only, expired, or already redeemed.",
      },
      {
        heading: "Redeem community rewards",
        body:
          "Community rewards may require joining the Roblox group, liking the game, or joining the community server. This wiki does not bypass Roblox or Discord requirements.",
      },
      {
        heading: "Methodology",
        body:
          "Codes are grouped by public-source agreement. Multiple reports are stronger than one report, but only direct testing or official posts should be treated as confirmed.",
      },
    ],
    faq: codeFaq,
    confirmed: ["Codes are a real reward channel in Noob Incremental."],
    unconfirmed: ["Most current code rewards are public reports and should be tested in-game."],
    sources: ["Public code lists", "Community reports", "In-game redemption checks"],
  },
  {
    path: "/beginner-guide",
    category: "Guide",
    title: "Noob Incremental Beginner Guide - First Route",
    h1: "Beginner Guide",
    description:
      "A safe early-game route for Noob Incremental covering Noobs, Oof income, upgrades, stats, runes, and first prestige timing without fake formulas.",
    featuredSummary: "A practical first-run checklist for players who want momentum without spoilers.",
    lastReviewed: today,
    badge: "Official game description",
    sections: [
      {
        heading: "First objective",
        body:
          "Build a dependable Noob and Oof loop before chasing every new system. Early progress is easier when you can clearly see which purchase changes your income.",
      },
      {
        heading: "Recommended route",
        list: routeSteps,
      },
      {
        heading: "Avoid early traps",
        body:
          "Do not reset only because a prestige prompt appears, and do not assume every public code list is current. Save timed rewards for active sessions.",
      },
    ],
    confirmed: ["The core loop is Buy Noobs, generate Oof, buy Upgrades, improve Stats, roll and level Runes, then Prestige into deeper progression."],
    unconfirmed: ["Exact breakpoints and best-in-slot timings need live testing."],
    sources: baseSources,
  },
  {
    path: "/upgrades",
    category: "Guide",
    title: "Noob Incremental Upgrades Guide",
    h1: "Upgrades",
    description:
      "Learn how to think about Noob Incremental upgrades, upgrade density, broad bonuses, bottlenecks, and verification limits.",
    featuredSummary: "Decision rules for hundreds of upgrades without inventing fake upgrade names.",
    lastReviewed: today,
    badge: "Official game description",
    sections: [
      {
        heading: "What is confirmed",
        body:
          "Public descriptions support hundreds of upgrades. This wiki does not fabricate a complete upgrade list until names and effects are verified.",
      },
      {
        heading: "Upgrade priorities",
        list: [
          "Buy broad Oof and production upgrades before narrow one-system bonuses.",
          "Compare recovery speed after each meaningful purchase.",
          "Use stat changes to identify your current bottleneck.",
          "Delay specialized purchases if they do not affect your current layer.",
        ],
      },
    ],
    faq: upgradeFaq,
    confirmed: ["Noob Incremental has hundreds of upgrades."],
    unconfirmed: ["Exact upgrade names, formulas, and complete order are still being verified."],
    sources: baseSources,
  },
  {
    path: "/stats",
    category: "Guide",
    title: "Noob Incremental Stats Guide",
    h1: "Stats",
    description:
      "A readable guide to Noob Incremental stats, what dozens of stats imply, and how to track progress without relying on fake formulas.",
    featuredSummary: "Use stats as a dashboard for bottlenecks, not just a wall of numbers.",
    lastReviewed: today,
    badge: "Official game description",
    sections: [
      {
        heading: "How stats help",
        body:
          "Stats show whether your latest purchases changed income, speed, rune progress, prestige recovery, or deeper systems. Record trends rather than guessing exact hidden math.",
      },
      {
        heading: "Tracking method",
        list: [
          "Check stats before and after a major purchase.",
          "Notice which resource recovers slowly after reset.",
          "Use repeated observations before writing exact values into guides.",
        ],
      },
    ],
    confirmed: ["Noob Incremental includes dozens of stats."],
    unconfirmed: ["Exact stat formulas and hidden caps are not confirmed."],
    sources: baseSources,
  },
  {
    path: "/runes",
    category: "Guide",
    title: "Noob Incremental Runes Guide",
    h1: "Runes",
    description:
      "A Noob Incremental runes guide covering rune speed, rune luck, leveling mindset, and unverified odds warnings.",
    featuredSummary: "Plan rune progress with confidence labels instead of guessed drop-rate tables.",
    lastReviewed: today,
    badge: "Multiple public sources",
    sections: [
      {
        heading: "Rune role",
        body:
          "Runes are part of the core loop after upgrades and stats begin shaping the run. They reward long-term improvement, but hidden odds should not be guessed.",
      },
      {
        heading: "Confirmed public bonuses",
        list: ["Join Roblox Group and like: +10% Rune Speed.", "Join Community Server: +10% Rune Luck."],
      },
    ],
    faq: runeFaq,
    confirmed: ["Runes are part of the documented progression loop.", "Rune Speed and Rune Luck community bonuses are publicly documented."],
    unconfirmed: ["Rune odds, exact rarity tables, and internal leveling formulas need in-game verification."],
    sources: baseSources,
  },
  {
    path: "/tickets",
    category: "Guide",
    title: "Noob Incremental Tickets Guide",
    h1: "Tickets",
    description:
      "A cautious guide to Tickets in Noob Incremental, focused on tracking usage and avoiding unsupported reward claims.",
    featuredSummary: "Understand Tickets as a tracked system while exact values remain under review.",
    lastReviewed: today,
    badge: "Needs in-game verification",
    sections: [
      {
        heading: "Verification status",
        body:
          "Tickets appear in public community discussion, but exact sources, sinks, and best usage patterns need more direct testing before this wiki publishes hard numbers.",
      },
    ],
    confirmed: ["Tickets are discussed by players as part of progression."],
    unconfirmed: ["Exact ticket rewards, rates, and optimal spending order remain unverified."],
    sources: ["Community testing notes"],
  },
  {
    path: "/potions",
    category: "Guide",
    title: "Noob Incremental Potions Guide",
    h1: "Potions",
    description:
      "Use Noob Incremental potions safely by timing boosts around active play and avoiding unsupported duration claims.",
    featuredSummary: "Boost timing advice without fabricated potion tables.",
    lastReviewed: today,
    badge: "Needs in-game verification",
    sections: [
      {
        heading: "Best-use mindset",
        body:
          "Treat potions as active-session accelerators. Redeem or use them when you can combine upgrades, rune progress, and reset decisions instead of wasting duration while idle.",
      },
    ],
    confirmed: ["Boost-style rewards are publicly discussed by players."],
    unconfirmed: ["Exact potion names, durations, and stacking rules need testing."],
    sources: ["Community testing notes", "Public code reports"],
  },
  {
    path: "/enchant-tokens",
    category: "Guide",
    title: "Noob Incremental Enchant Tokens Guide",
    h1: "Enchant Tokens",
    description:
      "A verification-first Enchant Tokens guide for Noob Incremental with cautious advice on saving, testing, and documenting token value.",
    featuredSummary: "Track token value carefully before committing rare resources.",
    lastReviewed: today,
    badge: "Needs in-game verification",
    sections: [
      {
        heading: "How to approach tokens",
        body:
          "Enchant Tokens should be documented through repeatable tests. Until exact mechanics are confirmed, save scarce tokens for decisions you can observe and record.",
      },
    ],
    confirmed: ["Enchant Tokens are a named community-tracked system."],
    unconfirmed: ["Exact token income, costs, and best targets remain unverified."],
    sources: ["Community testing notes"],
  },
  {
    path: "/prestige",
    category: "Guide",
    title: "Noob Incremental Prestige Guide",
    h1: "Prestige",
    description:
      "A Noob Incremental prestige guide explaining reset timing, multiple layers, recovery checks, and unverified threshold policy.",
    featuredSummary: "Prestige smarter by comparing recovery speed instead of chasing fake thresholds.",
    lastReviewed: today,
    badge: "Official game description",
    sections: [
      {
        heading: "What prestige does",
        body:
          "Prestige resets part of your run to unlock deeper acceleration. The right moment depends on how quickly you can rebuild after the reset.",
      },
      {
        heading: "Decision checklist",
        list: [
          "Confirm the next prestige layer is available in-game.",
          "Estimate whether recovery will be faster after the reset.",
          "Use active boosts only if you can play through the rebuild.",
          "Record your recovery time to improve future advice.",
        ],
      },
    ],
    faq: prestigeFaq,
    confirmed: ["Noob Incremental includes multiple Prestige layers."],
    unconfirmed: ["Exact thresholds and layer formulas are not published here unless verified."],
    sources: baseSources,
  },
  {
    path: "/layers",
    category: "Guide",
    title: "Noob Incremental Layers Guide",
    h1: "Layers",
    description:
      "Understand Noob Incremental progression layers, how resets stack, and why deeper systems need conservative verification.",
    featuredSummary: "A map of progression depth without pretending every hidden breakpoint is known.",
    lastReviewed: today,
    badge: "Official game description",
    sections: [
      {
        heading: "Layer mindset",
        body:
          "Layers are the reason Noob Incremental keeps expanding after the first loop. Each layer should make earlier recovery easier or open a new decision space.",
      },
    ],
    confirmed: ["The game has deeper progression after prestige."],
    unconfirmed: ["Complete layer order and exact unlock requirements need verification."],
    sources: baseSources,
  },
  {
    path: "/prism",
    category: "Guide",
    title: "Noob Incremental Prism Guide",
    h1: "Prism",
    description:
      "A Noob Incremental Prism guide covering the publicly documented Roblox Plus Prism bonus and verification limits.",
    featuredSummary: "Track Prism claims carefully, including the confirmed +10% Roblox Plus bonus.",
    lastReviewed: today,
    badge: "Multiple public sources",
    sections: [
      {
        heading: "Verified public note",
        body:
          "Roblox Plus is publicly documented as giving +10% Prism alongside +10% Oof. Broader Prism mechanics should stay marked until more reliable information is available.",
      },
    ],
    confirmed: ["Roblox Plus gives +10% Prism according to public descriptions."],
    unconfirmed: ["Exact Prism generation, sinks, and formulas need direct testing."],
    sources: baseSources,
  },
];

export const updates = [
  {
    path: "/updates",
    category: "Updates",
    title: "Noob Incremental Updates - Verification Center",
    h1: "Updates",
    description:
      "A Noob Incremental update center that separates official launch facts, public code refreshes, source watches, and conflicting community reports.",
    featuredSummary: "Track what changed, what is sourced, and what still needs in-game testing.",
    date: "2026-06-10",
    lastReviewed: today,
    badge: "Community tested",
    sections: [
      {
        heading: "How updates are handled",
        body:
          "This page is not a fake patch-note archive. It tracks official release facts, public source watches, and uncertain reports without inventing version numbers or changelog sections.",
      },
    ],
    confirmed: ["Release and core systems can be described from official game-description facts."],
    unconfirmed: ["Complete Lab, bugfix, balance, and shutdown notes need direct official posts or in-game testing."],
    sources: baseSources,
  },
  {
    path: "/updates/release-launch",
    category: "Updates",
    title: "Noob Incremental Release: Core Systems and Progression Loop",
    h1: "Release: Core Systems and Progression Loop",
    description:
      "The verified launch-era overview for Noob Incremental covering Noobs, Oof, upgrades, stats, runes, prestige, and deeper progression.",
    featuredSummary: "Official-description facts about the game’s core systems at release.",
    date: "2026-06-10",
    lastReviewed: today,
    badge: "Official",
    sections: [
      {
        heading: "Confirmed release systems",
        body:
          "The documented loop is Buy Noobs, generate Oof, buy Upgrades, improve Stats, roll and level Runes, Prestige, and continue into deeper progression.",
      },
    ],
    confirmed: ["Hundreds of Upgrades.", "Dozens of Stats.", "Multiple Prestige layers.", "Published by Ghoulax Games."],
    unconfirmed: ["Exact hidden formulas and unlock thresholds are not published here."],
    sources: ["Official game description"],
  },
  {
    path: "/updates/june-2026-ccu-code-refresh",
    category: "Updates",
    title: "June 2026 CCU Code Refresh",
    h1: "June 2026 CCU Code Refresh",
    description:
      "A public-source watch for June 2026 Noob Incremental CCU codes including 2KCCU through 9KCCU public reports.",
    featuredSummary: "A source-watch entry for recent CCU milestone code reports.",
    date: "2026-06-10",
    lastReviewed: today,
    badge: "Multiple public sources",
    sections: [
      {
        heading: "What changed publicly",
        body:
          "Multiple public code lists report a sequence of CCU milestone codes. They are listed on the codes page with copy buttons and verification labels rather than marked as official changelog items.",
      },
    ],
    confirmed: ["Public reports list 2KCCU!! through 9KCCU!! style codes."],
    unconfirmed: ["Exact rewards and current active state should be tested in-game."],
    sources: ["Public code lists", "Community reports"],
  },
  {
    path: "/updates/lab-update-source-watch",
    category: "Updates",
    title: "Lab Update Source Watch",
    h1: "Lab Update Source Watch",
    description:
      "A verification watch for LABUPDATE and public Lab-related claims in Noob Incremental.",
    featuredSummary: "Keeps Lab claims separated from confirmed mechanics.",
    date: "2026-06-10",
    lastReviewed: today,
    badge: "Needs in-game verification",
    sections: [
      {
        heading: "Required verification note",
        body:
          "The LABUPDATE code is publicly documented, but a complete official Lab changelog has not been located. Exact Lab mechanics should remain marked as unverified.",
      },
    ],
    confirmed: ["LABUPDATE appears in public code reports."],
    unconfirmed: ["A complete official Lab changelog has not been located."],
    sources: ["Public code lists", "Community reports"],
  },
  {
    path: "/updates/bugfix-balance-source-watch",
    category: "Updates",
    title: "Bugfix and Balance Source Watch",
    h1: "Bugfix and Balance Source Watch",
    description:
      "Tracks conflicting public reports for Noob Incremental bugfix and balance codes without presenting them as official patch notes.",
    featuredSummary: "Conflict-labeled tracking for bugfix and balance claims.",
    date: "2026-06-10",
    lastReviewed: today,
    badge: "Conflicting reports",
    sections: [
      {
        heading: "Why this is not a patch note",
        body:
          "Codes such as BUGFIXANDBALANCEFIX and BUGFIX1/2/3 have conflicting public reports. This wiki keeps them in the conflict section until stronger evidence appears.",
      },
    ],
    confirmed: ["Public reports mention bugfix and balance-themed codes."],
    unconfirmed: ["Official bugfix details, balance changes, and rewards are not confirmed."],
    sources: ["Public code lists", "Community reports"],
  },
  {
    path: "/updates/shutdown-compensation-watch",
    category: "Updates",
    title: "Shutdown Compensation Source Watch",
    h1: "Shutdown Compensation Source Watch",
    description:
      "Tracks SORRYSHUTDOWN as a single-source Noob Incremental compensation report pending in-game verification.",
    featuredSummary: "A cautious entry for one shutdown compensation code report.",
    date: "2026-06-10",
    lastReviewed: today,
    badge: "Single public source",
    sections: [
      {
        heading: "Single-source report",
        body:
          "SORRYSHUTDOWN is listed as a single-source report. It should not receive a green working badge until more public sources or in-game tests confirm it.",
      },
    ],
    confirmed: ["A public source reports SORRYSHUTDOWN."],
    unconfirmed: ["Current status, reward, and official compensation context need verification."],
    sources: ["Single public code report"],
  },
  {
    path: "/patch-notes",
    category: "Updates",
    title: "Noob Incremental Patch Notes Policy",
    h1: "Patch Notes",
    description:
      "Patch notes are published only when real Noob Incremental patch notes can be verified; use the update center for current source watches.",
    featuredSummary: "A policy page explaining why fake versioned patch notes were removed.",
    date: "2026-06-10",
    lastReviewed: today,
    badge: "Verification policy",
    sections: [
      {
        heading: "No fake patch archive",
        body:
          "This site does not publish invented version numbers, empty summaries, fake new-code sections, or unsourced balance-change tables. Real patch notes will be added when official notes are located.",
      },
    ],
    confirmed: ["The update center tracks source status without inventing version numbers."],
    unconfirmed: ["Complete official patch-note URLs still need verification."],
    sources: ["Verification policy"],
  },
];

export const blogPosts = [
  {
    path: "/blog",
    category: "Blog",
    title: "Noob Incremental Strategy Blog",
    h1: "Strategy Blog",
    description:
      "Long-form Noob Incremental strategy articles covering runes, upgrades, prestige, codes, stats, layers, and safe progression decisions.",
    featuredSummary: "Original strategy articles with verification notes and related wiki links.",
    lastReviewed: today,
    badge: "Community tested",
    sections: [
      {
        heading: "Editorial standard",
        body:
          "Blog posts explain strategy without pretending unverified formulas are official. Each article links back to wiki pages where source status is clearer.",
      },
    ],
    confirmed: ["Blog articles are original editorial content."],
    unconfirmed: ["Exact meta rankings need ongoing in-game testing."],
    sources: ["Community testing notes"],
  },
  ...[
    ["noob-incremental-rune-guide", "Rune Guide", "Plan rune progress after your Oof loop becomes stable."],
    ["best-upgrades-for-beginners", "Best Upgrades for Beginners", "A beginner-friendly upgrade philosophy for broad income first."],
    ["prestige-timing-guide", "Prestige Timing Guide", "How to judge reset timing without fake thresholds."],
    ["codes-and-boosts-strategy", "Codes and Boosts Strategy", "When to redeem rewards and how to avoid wasting boosts."],
    ["stats-tracking-method", "Stats Tracking Method", "A repeatable way to observe bottlenecks through stats."],
    ["layers-progression-map", "Layers Progression Map", "How to think about depth and rebuild speed."],
    ["prism-bonus-watch", "Prism Bonus Watch", "What is known about Prism and Roblox Plus bonuses."],
    ["community-bonus-checklist", "Community Bonus Checklist", "Safe steps for Rune Speed and Rune Luck bonuses."],
    ["enchant-token-planning", "Enchant Token Planning", "How to save and test scarce token value."],
    ["safe-wiki-verification", "Safe Wiki Verification", "Why this wiki avoids fake formulas and fake patch notes."],
  ].map(([slug, title, summary]) => ({
    path: `/blog/${slug}`,
    category: "Blog",
    title: `Noob Incremental ${title}`,
    h1: title,
    description: `${summary} This original Noob Incremental article uses cautious, verification-first advice.`,
    featuredSummary: summary,
    lastReviewed: today,
    badge: "Community tested",
    sections: [
      {
        heading: "Strategy overview",
        body:
          `${summary} The goal is to make better choices while avoiding exact claims that have not been confirmed by official notes or repeated in-game checks.`,
      },
      {
        heading: "Practical checklist",
        list: [
          "Start from the current bottleneck instead of copying a static build.",
          "Record before-and-after results when a purchase, boost, or reset changes your run.",
          "Prefer verified system pages when a guide conflicts with public code lists.",
          "Treat hidden odds, exact formulas, and thresholds as unverified unless the wiki marks them otherwise.",
        ],
      },
      {
        heading: "Related reading",
        body:
          "Use the guides linked below to compare this strategy article with system-level wiki pages and code verification notes.",
      },
    ],
    confirmed: ["This article is editorial strategy, not an official changelog."],
    unconfirmed: ["Exact formulas and best-in-slot rankings require live testing."],
    sources: ["Community testing notes", "Wiki verification policy"],
  })),
];

export const legalPages = [
  {
    path: "/about",
    category: "Legal",
    title: "About Noob Incremental Wiki",
    h1: "About",
    description:
      "Learn how this independent Noob Incremental Wiki organizes Roblox game guides, codes, updates, and verification labels.",
    sections: [
      {
        heading: "Independent wiki",
        body:
          "Noob Incremental Wiki is an independent fan-made reference site. It is not operated by Roblox, Ghoulax Games, or the Noob Incremental developers.",
      },
    ],
  },
  {
    path: "/contact",
    category: "Legal",
    title: "Contact Noob Incremental Wiki",
    h1: "Contact",
    description:
      "Send corrections, verification evidence, code status changes, and content suggestions for Noob Incremental Wiki.",
    sections: [
      {
        heading: "Corrections",
        body:
          "Use GitHub issues or site contact channels to submit evidence. Screenshots, timestamps, and repeatable test steps help the wiki update faster.",
      },
    ],
  },
  {
    path: "/privacy-policy",
    category: "Legal",
    title: "Privacy Policy",
    h1: "Privacy Policy",
    description: "Privacy policy for Noob Incremental Wiki.",
    sections: [
      {
        heading: "Privacy",
        body:
          "This static wiki does not require account login. Hosting, analytics, or security providers may process standard web request data such as IP address, user agent, and page URL.",
      },
    ],
  },
  {
    path: "/terms-of-use",
    category: "Legal",
    title: "Terms of Use",
    h1: "Terms of Use",
    description: "Terms of use for Noob Incremental Wiki.",
    sections: [
      {
        heading: "Use responsibly",
        body:
          "Content is provided for informational purposes. Do not use this wiki to promote cheating, Robux generators, script executors, account sales, or unsafe services.",
      },
    ],
  },
  {
    path: "/disclaimer",
    category: "Legal",
    title: "Disclaimer",
    h1: "Disclaimer",
    description: "Disclaimer and Roblox affiliation notice for Noob Incremental Wiki.",
    sections: [
      {
        heading: "Affiliation",
        body:
          "This site is an independent fan resource and is not affiliated with Roblox Corporation or Ghoulax Games. Trademarks belong to their respective owners.",
      },
    ],
  },
  {
    path: "/verification-policy",
    category: "Legal",
    title: "Verification Policy",
    h1: "Verification Policy",
    description:
      "How Noob Incremental Wiki labels official facts, public reports, single-source claims, conflicting reports, expired codes, and unverified mechanics.",
    sections: [
      {
        heading: "Verification labels",
        body:
          "Official facts come from the game description or official posts. Multiple public sources are useful but not identical to official confirmation. Single-source and conflicting claims stay visibly labeled.",
      },
      {
        heading: "Unsafe content policy",
        body:
          "The wiki does not promote Robux generators, script executors, automation cheats, account services, or suspicious downloads. Reports about those topics are removed or rewritten as safety warnings.",
      },
    ],
    faqGroups: fullFaqGroups,
  },
  {
    path: "/faq",
    category: "FAQ",
    title: "Noob Incremental FAQ",
    h1: "FAQ",
    description:
      "Categorized Noob Incremental FAQ for codes, runes, prestige, verification labels, and safe Roblox wiki use.",
    sections: [
      {
        heading: "Quick answers",
        body:
          "This page contains general FAQ entries. System pages only show page-specific FAQs when they are useful and visible.",
      },
    ],
    faqGroups: fullFaqGroups,
  },
  {
    path: "/discord",
    category: "Community",
    title: "Noob Incremental Discord and Community Server",
    h1: "Community Server",
    description:
      "A cautious community server page for Noob Incremental, including Rune Luck bonus notes and link verification warnings.",
    sections: [
      {
        heading: "Community bonus",
        body:
          "Public descriptions report +10% Rune Luck for joining the community server. The exact invite URL should be verified through official Roblox game channels before this wiki links directly.",
      },
    ],
  },
];

export const searchPage = {
  path: "/search",
  category: "Search",
  title: "Search Noob Incremental Wiki",
  h1: "Search",
  description:
    "Search Noob Incremental Wiki pages, guides, codes, blog posts, update watches, and verification policies.",
  sections: [
    {
      heading: "Search tips",
      body:
        "Try terms such as codes, runes, prestige, Oof, Roblox Plus, Prism, LABUPDATE, or verification.",
    },
  ],
};

export const featuredCategories = [
  ...guidePages.filter((page) =>
    ["/codes", "/beginner-guide", "/upgrades", "/stats", "/runes", "/prestige", "/layers", "/prism", "/enchant-tokens"].includes(page.path),
  ),
  ...wikiPages.filter((page) => ["/wiki/noobs", "/wiki/oof", "/wiki/community-bonuses"].includes(page.path)),
];

export const contentPages = [
  ...guidePages,
  ...wikiPages,
  ...blogPosts,
  ...updates,
  ...legalPages,
  searchPage,
];

export const contentByPath = Object.fromEntries(contentPages.map((page) => [page.path, page]));

export const allRoutes = ["/", ...contentPages.map((page) => page.path)];

export const searchIndex = contentPages
  .filter((page) => !["Legal"].includes(page.category) || page.path === "/verification-policy")
  .map((page) => ({
    title: page.h1 || page.title,
    description: page.featuredSummary || page.description,
    category: page.category,
    url: page.path,
    keywords: [
      page.title,
      page.h1,
      page.description,
      page.category,
      ...(page.confirmed || []),
      ...(page.unconfirmed || []),
      ...(page.sections || []).flatMap((section) => [section.heading, section.body, ...(section.list || [])]),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
  }));
