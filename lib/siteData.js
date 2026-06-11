export const reviewDates = {
  officialGame: "2026-06-11",
  gameStats: "2026-06-11",
  codes: "2026-06-11",
  beginnerGuide: "2026-06-11",
  upgrades: "2026-06-11",
  stats: "2026-06-11",
  runes: "2026-06-11",
  enchantTokens: "2026-06-11",
  prestige: "2026-06-11",
  layers: "2026-06-11",
  prism: "2026-06-11",
  noobs: "2026-06-11",
  oof: "2026-06-11",
  communityBonuses: "2026-06-11",
};

const today = "June 11, 2026";
const isoToday = "2026-06-11";

export const site = {
  name: "Noob Incremental Wiki",
  url: "https://noobincremental.site",
  description:
    "An independent English wiki for Noob Incremental with codes, beginner routes, systems explainers, verification notes, and safe Roblox guidance.",
  tagline: "Verified-first guides for Roblox Noob Incremental.",
  image: "/images/noob-incremental-hero.png",
  checkedAt: today,
  lastChecked: today,
  lastUpdated: isoToday,
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
  { key: "latest-public-source", label: "Latest public source", tone: "info" },
  { key: "community-code-reported", label: "Community code reported", tone: "warn" },
  { key: "latest-source-vs-older-source-conflict", label: "Latest source vs older source conflict", tone: "danger" },
];

export const sources = {
  officialGame: {
    id: "official-game",
    label: "Official Roblox game page",
    url: "https://www.roblox.com/games/76911729991355/Noob-Incremental",
    type: "official",
    accessedAt: "2026-06-11",
  },
  officialGroup: {
    id: "official-group",
    label: "Ghoulax Games Roblox community",
    url: "https://www.roblox.com/communities/356937272/Ghoulax-Games",
    type: "official",
    accessedAt: "2026-06-11",
  },
  officialDiscord: {
    id: "official-discord",
    label: "Ghoulax Studio Discord",
    url: "https://discord.gg/2aVTjPJWQ8",
    type: "official-link-reported",
    accessedAt: "2026-06-11",
    note: "Verify that the invitation still resolves before deployment.",
  },
  rolimonsGame: {
    id: "rolimons-game",
    label: "Rolimon's public game statistics",
    url: "https://www.rolimons.com/game/76911729991355",
    type: "public-database",
    accessedAt: "2026-06-11",
  },
  pcGamesNCodes: {
    id: "pcgamesn-codes",
    label: "PCGamesN Noob Incremental codes",
    url: "https://www.pcgamesn.com/noob-incremental/codes",
    type: "public-guide",
    accessedAt: "2026-06-11",
  },
  tryHardCodes: {
    id: "tryhard-codes",
    label: "Try Hard Guides Noob Incremental codes",
    url: "https://tryhardguides.com/noob-incremental-codes/",
    type: "historical-public-guide",
    accessedAt: "2026-06-11",
  },
  destructoidCodes: {
    id: "destructoid-codes",
    label: "Destructoid Noob Incremental codes",
    url: "https://www.destructoid.com/noob-incremental-codes/",
    type: "historical-public-guide",
    accessedAt: "2026-06-11",
  },
};

export const officialLinks = [
  {
    label: "Play Noob Incremental on Roblox",
    href: "https://www.roblox.com/games/76911729991355/Noob-Incremental",
    note: "Official Roblox experience by Ghoulax Games.",
  },
  {
    label: "Ghoulax Games Roblox Community",
    href: "https://www.roblox.com/communities/356937272/Ghoulax-Games",
    note: "Official publisher community.",
  },
  {
    label: "Ghoulax Studio Discord",
    href: "https://discord.gg/2aVTjPJWQ8",
    note: "Verify the invitation before publishing.",
  },
];

export const gameStats = [
  { label: "Core Loop", value: "Buy Noobs -> Oof -> Upgrades", note: "Official game-description systems." },
  { label: "Upgrade Scale", value: "Hundreds", note: "Exact list remains community verified." },
  { label: "Stats", value: "Dozens", note: "Use the stats page as a tracking glossary." },
  { label: "Prestige", value: "Multiple layers", note: "Thresholds are intentionally unlisted until verified." },
];

export const publicGameSnapshot = {
  players: 8025,
  visits: 1848854,
  rating: 95.594,
  favorites: 11875,
  averagePlaytimeMinutes: 36.41,
  maxPlayers: 6,
  allTimePeakPlayers: 9196,
  checkedAt: "2026-06-11",
};

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
  {
    id: "officialGame",
    supports: "Supports official game-description facts used by this page.",
  },
  {
    id: "pcGamesNCodes",
    supports: "Supports public report comparison for code and reward wording.",
  },
];

export const codeRows = [
  {
    code: "9KCCU!!",
    reward: "Reported as 200 enchant tickets and 25 tokens",
    status: "reported-active",
    verification: "latest-public-source",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes"],
    notes:
      "The source wording may use inconsistent Tickets and Enchant Tokens terminology. Keep the wording attributed and request an in-game check.",
  },
  {
    code: "8KCCU!!",
    reward: "Reported as 200 enchant tickets and 25 tokens",
    status: "reported-active",
    verification: "latest-public-source",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes"],
    notes: "Reward terminology requires in-game verification.",
  },
  {
    code: "7KCCU!!",
    reward: "100 Enchant Tokens + 25 Tickets",
    status: "reported-active",
    verification: "multiple-public-sources",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes", "tryHardCodes", "destructoidCodes"],
  },
  {
    code: "LABUPDATE",
    reward: "10 Enchant Tokens + 1 Rune Bulk Potion",
    status: "reported-active",
    verification: "multiple-public-sources",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes", "tryHardCodes", "destructoidCodes"],
    notes:
      "The LABUPDATE code is publicly documented, but a complete official Lab changelog has not been located. Exact Lab mechanics should remain marked as unverified.",
  },
  {
    code: "6KCCU!!",
    reward: "85 Enchant Tokens + 50 Tickets",
    status: "reported-active",
    verification: "multiple-public-sources",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes", "tryHardCodes", "destructoidCodes"],
  },
  {
    code: "5KCCU!!",
    reward: "50 Tickets",
    status: "reported-active",
    verification: "multiple-public-sources",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes", "tryHardCodes", "destructoidCodes"],
  },
  {
    code: "THANKS4JOINING",
    reward: "Special community reward / Rune Luck bonus",
    status: "reported-active",
    verification: "community-code-reported",
    regularOrCommunity: "Community",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes"],
    notes:
      "Use the special Discord/community code field. Verify whether the code itself applies the permanent bonus.",
  },
  {
    code: "3KCCU!!",
    reward: "Tickets and Potions",
    status: "reported-active",
    verification: "latest-public-source",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes"],
    notes:
      "Older sources provide more specific reward combinations, but they are not fully consistent.",
  },
  {
    code: "2KCCU!!",
    reward: "Rune Potions",
    status: "reported-active",
    verification: "multiple-public-sources",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes", "tryHardCodes", "destructoidCodes"],
  },
  {
    code: "4KCCU!!",
    reward: "Tickets and Enchant Tokens",
    status: "reported-active",
    verification: "multiple-public-sources",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes", "tryHardCodes", "destructoidCodes"],
    notes: "Some public sources report 75 Enchant Tokens + 25 Tickets.",
  },
  {
    code: "RELEASE",
    reward: "10 Tickets and Rune Potions",
    status: "reported-active",
    verification: "multiple-public-sources",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes", "tryHardCodes", "destructoidCodes"],
  },
  ...[
    "BUGFIXANDBALANCEFIX",
    "1.5KCCU!!",
    "BUGFIX3",
    "BUGFIX2",
    "BUGFIX1",
    "WWWRELEASE",
    "250KVISITS",
    "MINIUPDATE",
    "UPDATE1!",
    "SORRYDELAY1!",
    "SORRYITSLASTSHUTDOWN!",
  ].map((code) => ({
    code,
    reward: "Reward not reliably documented",
    status: "reported-expired",
    verification: "latest-source-vs-older-source-conflict",
    regularOrCommunity: "Regular",
    firstSeen: "June 2026",
    lastChecked: "2026-06-11",
    sourceIds: ["pcGamesNCodes", "tryHardCodes", "destructoidCodes"],
    notes:
      "The latest checked source lists this code as expired. Older June 7-era sources previously listed it as working.",
  })),
];

export const codeGroups = [
  {
    title: "Reported Active Codes ? Latest Public Sources",
    description:
      "These codes are reported active by public guides checked on June 11, 2026. They still need direct in-game checks before being treated as official.",
    rows: codeRows.filter((row) => row.status === "reported-active" && row.regularOrCommunity !== "Community"),
  },
  {
    title: "Community Rewards",
    description:
      "Community rewards may use a separate Discord/community field and should not be typed into the normal code box unless the game says so.",
    rows: codeRows.filter((row) => row.regularOrCommunity === "Community"),
  },
  {
    title: "Reported Expired ? Latest Public Source",
    description:
      "The newest checked public source lists these as expired, even when older June sources previously described them as working.",
    rows: codeRows.filter((row) => row.status === "reported-expired"),
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
          "Codes were reviewed on June 11, 2026. Live code status can change without warning, so entries are separated by verification confidence instead of a single green list.",
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
    featuredSummary: "Official-description facts about the game鈥檚 core systems at release.",
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

const sourceRef = (id, supports) => ({ id, supports });

const relatedPages = {
  "/codes": ["/beginner-guide", "/runes", "/enchant-tokens", "/wiki/community-bonuses"],
  "/beginner-guide": ["/codes", "/wiki/noobs", "/wiki/oof", "/upgrades", "/prestige"],
  "/upgrades": ["/wiki/oof", "/stats", "/runes", "/prestige"],
  "/stats": ["/upgrades", "/runes", "/prism", "/prestige"],
  "/runes": ["/stats", "/enchant-tokens", "/codes", "/prestige"],
  "/enchant-tokens": ["/codes", "/runes", "/stats", "/beginner-guide"],
  "/prestige": ["/upgrades", "/stats", "/runes", "/layers"],
  "/layers": ["/prestige", "/prism", "/stats", "/beginner-guide"],
  "/prism": ["/layers", "/stats", "/wiki/community-bonuses", "/prestige"],
  "/wiki/noobs": ["/wiki/oof", "/upgrades", "/beginner-guide", "/stats"],
  "/wiki/oof": ["/wiki/noobs", "/upgrades", "/stats", "/wiki/community-bonuses"],
  "/wiki/community-bonuses": ["/codes", "/runes", "/prism", "/wiki/oof"],
};

const sourceSets = {
  official: [
    sourceRef("officialGame", "Supports the core loop, hundreds of upgrades, dozens of stats, multiple Prestige layers, and Roblox Plus bonuses."),
    sourceRef("officialGroup", "Supports the Ghoulax Games publisher community destination."),
  ],
  codes: [
    sourceRef("pcGamesNCodes", "Latest public code status and reward wording checked for June 11, 2026."),
    sourceRef("tryHardCodes", "Historical public code claims used to compare older working reports."),
    sourceRef("destructoidCodes", "Historical public code claims used to compare older working reports."),
  ],
  stats: [
    sourceRef("officialGame", "Supports named systems and official bonus wording."),
    sourceRef("rolimonsGame", "Supports public game statistics snapshot context."),
  ],
};

const checklistTable = (title, rows) => ({
  title,
  columns: ["Check", "Why it matters", "Verification note"],
  rows,
});

const table = (title, columns, rows) => ({ title, columns, rows });

const pageUpdates = {
  "/codes": {
    title: "Noob Incremental Codes (June 2026) - Rewards and Status",
    featuredSummary:
      "Check current public code reports, rewards, expired entries, confidence labels, and exact redemption steps.",
    lastReviewed: reviewDates.codes,
    lastChecked: reviewDates.codes,
    sections: [
      {
        heading: "Last checked",
        body:
          "Code data was reviewed on June 11, 2026 against the latest available public guide sources. These entries are public reports, not official developer confirmations, so rewards and status labels remain attributed and cautious.",
      },
      {
        heading: "Verification model",
        body:
          "Reported-active means a current public source lists the code as working. Multiple-public-sources means more than one public guide agrees. Latest-source-vs-older-source-conflict means a newer checked source lists the code as expired while older June sources previously described it as working.",
      },
      {
        heading: "How to redeem Noob Incremental codes",
        list: [
          "Launch Noob Incremental on Roblox.",
          "Open the red Shop button at the bottom.",
          "Scroll to the bottom of the Shop.",
          "Enter normal codes in the ABX / Enter Code field.",
          "Enter community rewards in the separate Discord/community field.",
          "Select Redeem or Activate.",
          "Copy exact capitalization and punctuation.",
          "If a new code fails, rejoin a newer server before assuming it expired.",
        ],
      },
      {
        heading: "Why rewards may differ between sources",
        body:
          "Some code guides use inconsistent wording around Tickets, Enchant Tickets, Tokens, Enchant Tokens, and Rune Potions. This wiki keeps the public wording visible, then marks terminology that still needs a direct in-game redemption check.",
      },
    ],
    confirmed: ["Codes are a real reward channel in Noob Incremental.", "THANKS4JOINING is treated as a Community reward rather than a Regular code."],
    unconfirmed: ["Exact current redemption state and final reward wording need fresh in-game testing.", "Low-confidence community reports without reliable URLs are excluded from the public table."],
    sources: sourceSets.codes,
    related: relatedPages["/codes"],
  },
  "/beginner-guide": {
    title: "Noob Incremental Beginner Guide - First Progression Route",
    featuredSummary:
      "Follow a safe route from your first Noob purchase to a planned first Prestige.",
    lastReviewed: reviewDates.beginnerGuide,
    sections: [
      {
        heading: "What Is Noob Incremental?",
        body:
          "Noob Incremental is a Roblox incremental simulator built around a readable loop: buy Noobs, make Oof, spend Oof on upgrades, watch stats, roll and level Runes, then Prestige into deeper progression. A beginner route should help you understand that loop rather than push exact formulas or fake thresholds.",
      },
      {
        heading: "Before the First Run",
        body:
          "The official description lists optional bonuses: Roblox Plus gives +10% Oof and +10% Prism, joining the Ghoulax Games Roblox group and liking the game gives +10% Rune Speed, and joining the community server gives +10% Rune Luck. These are helpful bonuses, not mandatory conditions for playing.",
      },
      {
        heading: "First-Run Route",
        list: [
          "Redeem current reported codes after checking their confidence labels.",
          "Buy Noobs until Oof income becomes steady.",
          "Buy broad production and Oof upgrades before narrow bonuses.",
          "Compare Stats before and after important purchases.",
          "Avoid spending Tickets without a Rune goal.",
          "Use Rune Potions during a focused session.",
          "Level a Rune only after identifying a useful effect.",
          "Prestige only when recovery or new content justifies the reset.",
        ],
      },
      {
        heading: "Common Mistakes",
        list: [
          "Spending every Ticket immediately.",
          "Using timed Potions while idle.",
          "Assuming rarity is always more important than effect.",
          "Prestiging because the button appeared.",
          "Trusting exact formulas from unsourced pages.",
          "Ignoring community bonuses.",
          "Buying narrow upgrades before fixing base income.",
        ],
      },
    ],
    tables: [
      checklistTable("First Prestige Checklist", [
        ["Base Oof loop is stable", "You can rebuild after a reset", "Record recovery time instead of guessing"],
        ["Next Prestige benefit is visible", "Resets should unlock value", "Do not publish hidden thresholds"],
        ["Codes and Potions are planned", "Timed rewards should not be wasted", "Use current code status labels"],
        ["Rune goal is clear", "Tickets and Enchant Tokens are scarce", "Keep exact odds unverified"],
      ]),
    ],
    confirmed: ["Official loop: Buy Noobs, generate Oof, buy Upgrades, improve Stats, roll and level Runes, Prestige into deeper progression."],
    unconfirmed: ["Exact first Prestige threshold and optimal timing are not published without in-game evidence."],
    sources: sourceSets.official,
    related: relatedPages["/beginner-guide"],
  },
  "/upgrades": {
    title: "Noob Incremental Upgrades Guide - Decision Framework",
    featuredSummary:
      "Choose upgrades by visible impact, Oof growth, automation value, and current bottlenecks.",
    lastReviewed: reviewDates.upgrades,
    sections: [
      {
        heading: "What Upgrades Do",
        body:
          "Upgrades sit between Oof production and deeper progression. The official description confirms hundreds of upgrades, but this wiki does not invent a full button list. Instead, it explains how to evaluate visible impact and avoid waiting forever for a purchase that might not be a true breakpoint.",
      },
      {
        heading: "Safe Upgrade Categories",
        body:
          "These are editorial categories, not exact in-game button names: Noob production, flat Oof production, Oof multipliers, cost efficiency, automation, Rune support, Prestige preparation, and layer unlock requirements. Use them as a decision lens, not a claim about the internal upgrade tree.",
      },
      {
        heading: "Early-Game Decision Rules",
        list: [
          "Prefer affordable upgrades with visible impact.",
          "Keep the Oof loop moving.",
          "Avoid waiting too long for one expensive upgrade without evidence that it is a major breakpoint.",
        ],
      },
      {
        heading: "Mid-Game Decision Rules",
        list: [
          "Compare multipliers against flat gains.",
          "Prioritize automation when manual input becomes the bottleneck.",
          "Prepare Rune and Prestige support only when those systems are active.",
        ],
      },
      {
        heading: "Gamepass Snapshot",
        body:
          "Public listings show Noobs Master at 499 Robux, Rune Master at 699 Robux, Prism Master at 599 Robux, Luck Master at 499 Robux, and Miner Master as offsale. Prices and availability may change. Snapshot checked June 11, 2026. Exact pass effects are not described unless visible in-game or in an official description.",
      },
    ],
    tables: [
      table("Upgrade Bottleneck Table", ["Symptom", "Likely bottleneck", "What to inspect", "What not to assume"], [
        ["Oof rises slowly", "Base production", "Noob production and broad Oof upgrades", "That a rare Rune is required"],
        ["Manual actions dominate", "Automation", "Automation-style upgrade value", "That every automation claim is official"],
        ["Reset recovery is slow", "Permanent value", "Prestige support and recovery time", "That a hidden threshold is known"],
        ["Rune progress stalls", "Rune support", "Tickets, Potions, and Enchant Tokens", "Exact odds or best-in-slot rankings"],
      ]),
    ],
    confirmed: ["The game has hundreds of Upgrades."],
    unconfirmed: ["Exact upgrade names, complete order, costs, and formulas remain unverified."],
    sources: sourceSets.official,
    related: relatedPages["/upgrades"],
  },
  "/stats": {
    title: "Noob Incremental Stats Guide - Oof, Runes and Prism",
    featuredSummary:
      "Measure Oof, Rune, Prism, and recovery changes without relying on invented formulas.",
    lastReviewed: reviewDates.stats,
    sections: [
      {
        heading: "What Stats Are For",
        body:
          "Stats help players measure whether a purchase, code reward, Potion, Rune level, or reset actually changed the run. The official description confirms dozens of Stats, but not a complete public stat sheet. This page focuses on measurement habits rather than invented formulas.",
      },
      {
        heading: "Confirmed or referenced concepts",
        body:
          "Oof, Prism, Rune Speed, Rune Luck, Prestige, and multiple Prestige layers are confirmed or explicitly referenced in official/public descriptions. Rune Bulk is publicly referenced through Rune Bulk Potion rewards. Its exact relationship to the Stats interface remains to be verified.",
      },
      {
        heading: "How to Measure a Purchase",
        list: [
          "Record Oof before buying.",
          "Buy one meaningful upgrade or activate one planned reward.",
          "Record Oof after the change.",
          "Track whether a Rune, Potion, or Prestige state was active.",
          "Repeat before writing exact values into public pages.",
        ],
      },
      {
        heading: "Unknown formulas and hidden caps",
        body:
          "This wiki does not publish hidden caps, offline income claims, exact stat curves, or multiplier stacking rules without screenshots, official text, or repeatable testing.",
      },
    ],
    tables: [
      table("Before-and-after Testing Worksheet", ["Timestamp", "Layer", "Oof before", "Oof after", "Upgrade purchased", "Rune/Potion active", "Recovery time", "Notes"], [
        ["2026-06-11 20:00", "Current layer", "Record value", "Record value", "Name if visible", "Yes/No", "mm:ss", "Screenshot if possible"],
      ]),
    ],
    confirmed: ["The game has dozens of Stats.", "Prism, Rune Speed, Rune Luck, Oof, and Prestige are named concepts."],
    unconfirmed: ["Rune Bulk as a Stats-panel stat is not confirmed by this page.", "Exact formulas and hidden caps remain unknown."],
    sources: sourceSets.stats,
    related: relatedPages["/stats"],
  },
  "/runes": {
    title: "Noob Incremental Runes Guide - Tickets, Potions and Strategy",
    featuredSummary:
      "Plan focused Rune sessions using Tickets, Potions, Enchant Tokens, and verification notes.",
    lastReviewed: reviewDates.runes,
    sections: [
      {
        heading: "What Is Officially Confirmed?",
        body:
          "Players can roll Runes and level Runes. The official description also documents +10% Rune Speed for joining the Ghoulax Games group and liking the game, plus +10% Rune Luck for joining the community server.",
      },
      {
        heading: "Preparing a Rune Session",
        list: [
          "Identify the current bottleneck.",
          "Check current codes.",
          "Save Tickets.",
          "Select a Potion only for a planned session.",
          "Record results.",
        ],
      },
      {
        heading: "Rune Session Workflow",
        list: [
          "Identify the goal.",
          "Check resources.",
          "Activate a relevant Potion.",
          "Roll in a focused period.",
          "Compare useful effects.",
          "Choose a Rune to level.",
          "Use Enchant Tokens cautiously.",
          "Reassess before Prestige.",
        ],
      },
      {
        heading: "Rarity Policy",
        body:
          "This wiki does not publish Legendary, Epic, or Rare odds, exact rarity percentages, or exact best-in-slot rankings unless screenshots or repeatable testing support them.",
      },
      {
        heading: "Public Gamepass Snapshot",
        body:
          "Public listings show Rune Master at 699 Robux and Luck Master at 499 Robux. This does not prove exact pass effects; verify effects in-game before publishing claims.",
      },
    ],
    tables: [
      table("Rune Verification Worksheet", ["Rune name", "Rarity", "Effect text", "Level", "Before value", "After value", "Potion active", "Screenshot/source"], [
        ["Visible name", "Visible rarity", "Copy exact text", "Current level", "Measured value", "Measured value", "Yes/No", "URL or screenshot note"],
      ]),
    ],
    confirmed: ["Players can roll and level Runes.", "Group + Like gives +10% Rune Speed.", "Community Server gives +10% Rune Luck."],
    unconfirmed: ["Rune odds, exact rarity percentages, and best-in-slot rankings remain unpublished."],
    sources: [...sourceSets.official, ...sourceSets.codes],
    related: relatedPages["/runes"],
  },
  "/enchant-tokens": {
    title: "Noob Incremental Enchant Tokens - Rewards and Verification",
    badge: "Multiple public sources",
    featuredSummary:
      "Track publicly reported token rewards while exact enchant costs and scaling remain under review.",
    lastReviewed: reviewDates.enchantTokens,
    sections: [
      {
        heading: "What Enchant Tokens Are Reported To Be",
        body:
          "Enchant Tokens are repeatedly referenced as public code rewards. That supports their existence as a reported reward type, but it does not prove exact enchant costs, success chances, level curves, reset behavior, or the best Rune target.",
      },
      {
        heading: "Where Public Reports Show Them",
        list: [
          "LABUPDATE is reported as rewarding 10 Enchant Tokens.",
          "7KCCU!! is reported as rewarding 100 Enchant Tokens.",
          "6KCCU!! is reported as rewarding 85 Enchant Tokens.",
          "Some public reports describe 4KCCU!! as Tickets and Enchant Tokens.",
        ],
      },
      {
        heading: "Safe Spending Method",
        body:
          "Spend tokens only when you can observe the before-and-after effect. Avoid spending rare resources immediately after redeeming codes unless you know what system you are testing.",
      },
      {
        heading: "Unknown Mechanics",
        list: ["Exact enchant costs", "Level curve", "Maximum level", "Success chance", "Reset behavior", "Best Rune target", "Whether all token uses are permanent"],
      },
    ],
    tables: [
      checklistTable("How to Test One Enchant", [
        ["Record current Rune and resource state", "Creates a clean baseline", "Screenshot or written note"],
        ["Spend the smallest useful amount", "Reduces risk while testing", "Do not infer full scaling"],
        ["Record the after value", "Shows visible impact", "Repeat before publishing formulas"],
      ]),
    ],
    confirmed: ["Multiple publicly reported codes reward Enchant Tokens."],
    unconfirmed: ["Exact enchant functionality and scaling are not official on this wiki."],
    sources: sourceSets.codes,
    related: relatedPages["/enchant-tokens"],
  },
  "/prestige": {
    title: "Noob Incremental Prestige Guide - Reset and Recovery Timing",
    featuredSummary:
      "Compare permanent value and recovery time before committing to a reset.",
    lastReviewed: reviewDates.prestige,
    sections: [
      {
        heading: "What Prestige Means",
        body:
          "Prestige is a reset decision that should trade temporary progress for permanent value, new content, or a faster rebuild. The official description confirms multiple Prestige layers, but this wiki does not publish exact thresholds.",
      },
      {
        heading: "What Is Officially Confirmed",
        body:
          "Prestige unlocks new content, and Noob Incremental has multiple Prestige layers. The exact unlock requirements, rewards, and timing windows require in-game evidence.",
      },
      {
        heading: "Signs a Reset May Be Valuable",
        list: [
          "Purchases have slowed sharply.",
          "The next useful upgrade is too distant.",
          "The reset reward is visible and understood.",
          "A new mechanic or layer will unlock.",
          "A rebuild route is ready.",
          "Current code and Potion rewards have been claimed or planned.",
        ],
      },
      {
        heading: "Signs to Wait",
        list: [
          "The reward is unclear.",
          "The reset is being triggered only because the button appeared.",
          "A short push may reach a better threshold.",
          "The player has no rebuild plan.",
          "Timed resources would be wasted.",
        ],
      },
    ],
    tables: [
      table("Recovery-Time Test", ["Time before reset", "Time to recover previous production", "Permanent benefit gained", "New system unlocked", "Was the reset worthwhile?"], [
        ["Record time", "Record mm:ss", "Describe visible benefit", "Yes/No", "Yes/No with notes"],
      ]),
    ],
    confirmed: ["Prestige unlocks new content.", "The game has multiple Prestige layers."],
    unconfirmed: ["Exact Prestige thresholds and hidden formulas are not published."],
    sources: sourceSets.official,
    related: relatedPages["/prestige"],
  },
  "/layers": {
    title: "Noob Incremental Layers Guide - Multi-Prestige Progression",
    featuredSummary:
      "Understand verified multi-layer progression without inventing names or unlock thresholds.",
    lastReviewed: reviewDates.layers,
    sections: [
      {
        heading: "What a Prestige Layer Is",
        body:
          "A Prestige layer is a deeper reset tier that can change planning, recovery speed, and permanent progression. The official game description states that Noob Incremental has multiple Prestige layers.",
      },
      {
        heading: "How Layered Resets Usually Affect Planning",
        body:
          "Layered resets often make players compare permanent versus temporary progress. In Noob Incremental, document recovery speed, visible unlocks, and rebuild route changes instead of inventing layer names or a fixed order.",
      },
      {
        heading: "How to document a newly discovered layer",
        list: [
          "Capture the exact in-game name.",
          "Record the unlock condition shown on screen.",
          "Record what resets and what stays permanent.",
          "Measure recovery speed before and after.",
          "Do not publish the layer until evidence can be repeated.",
        ],
      },
      {
        heading: "Unknown layer order",
        body:
          "This wiki does not invent names such as Base Layer, Rune Layer, Fire Layer, or Prism Layer unless they are captured in-game.",
      },
    ],
    tables: [
      table("Community Contribution Template", ["Field", "What to record", "Evidence needed"], [
        ["Layer name", "Exact on-screen text", "Screenshot"],
        ["Unlock requirement", "Visible requirement", "Screenshot or repeat test"],
        ["Reset effect", "What resets and what remains", "Before/after notes"],
        ["Recovery speed", "Time to previous production", "Timer notes"],
      ]),
    ],
    confirmed: ["The official game description states that Noob Incremental has multiple Prestige layers."],
    unconfirmed: ["Layer order, layer names, and unlock requirements remain unknown."],
    sources: sourceSets.official,
    related: relatedPages["/layers"],
  },
  "/prism": {
    title: "Noob Incremental Prism Guide - Confirmed Bonus and Unknown Mechanics",
    badge: "Official game description",
    featuredSummary:
      "Review the confirmed Roblox Plus Prism bonus and clearly separated unknown mechanics.",
    lastReviewed: reviewDates.prism,
    sections: [
      {
        heading: "What Is Officially Confirmed",
        body:
          "Roblox Plus players receive +10% Prism. That confirms Prism is a real named game value or resource in Noob Incremental, but it does not reveal generation formulas, spending sinks, unlock points, or reset behavior.",
      },
      {
        heading: "Roblox Plus Prism Bonus",
        body:
          "The same official description also lists +10% Oof for Roblox Plus. Treat the bonus as a confirmed named bonus, not as a full Prism mechanics guide.",
      },
      {
        heading: "Prism Master public listing",
        body:
          "A public listing shows Prism Master at 599 Robux. The name suggests a Prism-related paid item, but this wiki does not infer exact effects without visible in-game or official text.",
      },
      {
        heading: "How to collect reliable Prism evidence",
        list: [
          "Record where Prism first appears.",
          "Capture any visible Prism gain or spend text.",
          "Compare values with and without Roblox Plus if possible.",
          "Record what happens after Prestige.",
        ],
      },
    ],
    confirmed: ["Roblox Plus players receive +10% Prism."],
    unconfirmed: ["Prism generation, spending sinks, unlock point, formulas, and reset behavior remain unknown."],
    sources: sourceSets.official,
    related: relatedPages["/prism"],
  },
  "/wiki/noobs": {
    title: "Noobs in Noob Incremental - Production Wiki",
    h1: "Noobs in Noob Incremental",
    featuredSummary:
      "Learn how Noobs start the official Oof production loop.",
    lastReviewed: reviewDates.noobs,
    sections: [
      {
        heading: "What Noobs Are in the Core Loop",
        body:
          "The official fact is simple: buy Noobs and make Oof. Noobs are the first production concept players should understand because the rest of the early loop depends on building enough Oof to buy upgrades.",
      },
      {
        heading: "Relationship between Noobs and Oof",
        body:
          "Noobs are the production side of the early game, while Oof is the spendable resource that moves upgrades and progression forward. A weak Noob base makes every later purchase feel slower.",
      },
      {
        heading: "When to inspect more Noob production",
        body:
          "Inspect Noob production when Oof growth feels flat, when upgrades seem affordable but slow, or when reset recovery takes too long. Sometimes broad upgrades provide more value than buying only more production.",
      },
      {
        heading: "Noobs Master public gamepass listing",
        body:
          "Public listings show Noobs Master at 499 Robux. This wiki does not infer the exact pass effect without a visible official description or in-game proof.",
      },
    ],
    tables: [
      checklistTable("Noob Production Check", [
        ["Oof income feels steady", "Base loop is working", "Record before/after values"],
        ["Upgrade impact is visible", "Progress is not only from raw Noobs", "Avoid fake formulas"],
        ["Recovery after reset is acceptable", "Prestige planning becomes safer", "Use timer notes"],
      ]),
    ],
    confirmed: ["Buy Noobs and make Oof."],
    unconfirmed: ["Noob purchase formula, scaling, caps, and gamepass effects remain unknown."],
    sources: sourceSets.official,
    related: relatedPages["/wiki/noobs"],
  },
  "/wiki/oof": {
    title: "Oof in Noob Incremental - Resource Wiki",
    h1: "Oof in Noob Incremental",
    featuredSummary:
      "Understand the core resource produced by Noobs and improved through progression.",
    lastReviewed: reviewDates.oof,
    sections: [
      {
        heading: "What Oof Is",
        body:
          "Oof is the core early resource produced by Noobs. It connects production to upgrades and gives players a visible way to judge whether the current route is improving.",
      },
      {
        heading: "How Oof fits into the core loop",
        body:
          "The loop begins with Noobs making Oof, then spending that Oof on upgrades. Strategy advice can discuss flat growth versus multiplier growth as editorial concepts, but exact formulas stay unverified.",
      },
      {
        heading: "Roblox Plus +10% Oof bonus",
        body:
          "The official description states that Roblox Plus provides +10% Oof. That is a confirmed bonus, but not a complete stacking formula.",
      },
      {
        heading: "How to measure Oof gains",
        list: [
          "Record Oof before a purchase.",
          "Buy one upgrade or claim one planned reward.",
          "Record Oof after the change.",
          "Note active Runes, Potions, or Prestige state.",
          "Do not claim offline income unless verified.",
        ],
      },
    ],
    confirmed: ["Noobs make Oof.", "Roblox Plus provides +10% Oof."],
    unconfirmed: ["Oof formula, caps, multiplier stacking, and offline production remain unknown."],
    sources: sourceSets.official,
    related: relatedPages["/wiki/oof"],
  },
  "/wiki/community-bonuses": {
    title: "Noob Incremental Community Bonuses - Roblox Group and Discord",
    h1: "Noob Incremental Community Bonuses",
    featuredSummary:
      "Use official Roblox Plus, group, like, and community-server bonuses safely.",
    lastReviewed: reviewDates.communityBonuses,
    sections: [
      {
        heading: "Officially documented bonuses",
        body:
          "Roblox Plus gives +10% Oof and +10% Prism. Joining the Ghoulax Games Roblox Group and liking the game gives +10% Rune Speed. Joining the Community Server gives +10% Rune Luck.",
      },
      {
        heading: "Group and Like wording",
        body:
          "The official description appears to require both joining the group and liking the game for the Rune Speed reward. If the bonus does not appear immediately, rejoin the experience before assuming it failed.",
      },
      {
        heading: "Official destinations",
        list: [
          "Game: https://www.roblox.com/games/76911729991355/Noob-Incremental",
          "Publisher community: https://www.roblox.com/communities/356937272/Ghoulax-Games",
          "Reported official Discord: https://discord.gg/2aVTjPJWQ8",
        ],
      },
      {
        heading: "Safe checklist",
        list: [
          "Open the official game page.",
          "Join the official publisher community.",
          "Like the game while logged into Roblox.",
          "Rejoin the experience if the bonus does not appear.",
          "Use only the Discord invitation linked by trusted game channels.",
          "Never provide login credentials to third-party sites.",
        ],
      },
    ],
    confirmed: ["Roblox Plus: +10% Oof and +10% Prism.", "Group and Like: +10% Rune Speed.", "Community Server: +10% Rune Luck."],
    unconfirmed: ["Discord invite persistence and exact bonus activation timing should be manually checked before each major update."],
    sources: [
      sourceRef("officialGame", "Supports the official bonus descriptions."),
      sourceRef("officialGroup", "Supports the publisher community destination."),
      sourceRef("officialDiscord", "Reported official community-server invite; verify before publishing major changes."),
    ],
    related: relatedPages["/wiki/community-bonuses"],
  },
};

for (const collection of [guidePages, wikiPages]) {
  for (const page of collection) {
    if (pageUpdates[page.path]) {
      Object.assign(page, pageUpdates[page.path]);
    }
  }
}

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

