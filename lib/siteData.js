export const site = {
  name: "Noob Incremental Wiki",
  shortName: "Noob Incremental",
  domain: "noobincremental.site",
  url: "https://noobincremental.site",
  description:
    "Complete Noob Incremental Wiki with codes, upgrades, runes, prestige strategies, tickets, potions, stats, layers, and beginner progression guides.",
  lastChecked: "June 10, 2026",
  lastUpdated: "June 10, 2026",
  copyright: "2026 Noob Incremental Wiki",
  disclaimer:
    "Unofficial fan guide. Not affiliated with Roblox Corporation or the Noob Incremental developers.",
};

export const verificationNotice =
  "Some Noob Incremental values are based on public sources or community testing. Hidden formulas, exact rune odds, and late-game scaling should be treated as unverified until confirmed in-game or by official sources.";

export const verificationBadges = {
  official: "Official",
  public: "Public source",
  community: "Community tested",
  needs: "Needs verification",
  conflict: "Conflicting reports",
  expired: "Expired / Unverified",
};

export const officialLinks = [
  {
    label: "Roblox Game Page",
    href: "https://www.roblox.com/",
    note: "Use the Roblox search page if the direct experience URL changes.",
    badge: "Needs verification",
  },
  {
    label: "Roblox Group",
    href: "/discord",
    note: "Group link should be confirmed from the Roblox experience page.",
    badge: "Needs verification",
  },
  {
    label: "Discord",
    href: "/discord",
    note: "Discord invites expire and should be checked before publishing.",
    badge: "Needs verification",
  },
  {
    label: "Verification Policy",
    href: "/wiki",
    note: "How this site separates public claims from tested values.",
    badge: "Public source",
  },
];

export const gameStats = [
  { label: "Players Online", value: "Snapshot pending", note: "Future live Roblox data" },
  { label: "Total Visits", value: "Snapshot pending", note: "Future live Roblox data" },
  { label: "Like Ratio", value: "Snapshot pending", note: "Future live Roblox data" },
  { label: "Max Players Per Server", value: "Snapshot pending", note: "Future live Roblox data" },
];

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/codes", label: "Codes" },
  { href: "/beginner-guide", label: "Beginner Guide" },
  { href: "/wiki", label: "Wiki" },
  { href: "/runes", label: "Runes" },
  { href: "/prestige", label: "Prestige" },
  { href: "/search", label: "Search" },
];

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
  { href: "/dmca", label: "DMCA" },
];

export const codeRows = [
  ["9KCCU!!", "Reward reported by public code trackers; verify in-game before route planning.", "Public source listed"],
  ["8KCCU!!", "Reward reported by public code trackers; verify in-game before route planning.", "Public source listed"],
  ["7KCCU!!", "Enchant Tokens and Tickets are publicly reported rewards.", "Public source listed"],
  ["LABUPDATE", "Enchant Tokens and Rune Bulk Potion are publicly reported rewards.", "Public source listed"],
  ["BUGFIXANDBALANCEFIX", "Tickets and general compensation rewards are publicly reported.", "Public source listed"],
  ["6KCCU!!", "Enchant Tokens and Tickets are publicly reported rewards.", "Public source listed"],
  ["5KCCU!!", "Ticket reward is publicly reported.", "Public source listed"],
  ["4KCCU!!", "Enchant Tokens and Tickets are publicly reported rewards.", "Public source listed"],
  ["3KCCU!!", "Enchant Tokens, Tickets, and Rune Potions are publicly reported.", "Public source listed"],
  ["2KCCU!!", "Rune Luck, Rune Speed, and Rune Bulk Potion rewards are publicly reported.", "Public source listed"],
  ["1.5KCCU!!", "Public trackers list this code with conflicting reward notes.", "Conflicting reports"],
  ["BUGFIX3", "Older bugfix reward listing; needs an in-game retest.", "Needs in-game test"],
  ["BUGFIX2", "Older bugfix reward listing; needs an in-game retest.", "Needs in-game test"],
  ["BUGFIX1", "Older bugfix reward listing; needs an in-game retest.", "Needs in-game test"],
  ["WWWRELEASE", "Release-era listing; verify before calling it active.", "Needs in-game test"],
  ["RELEASE", "Release-era listing; verify before calling it active.", "Needs in-game test"],
  ["YouFoundMe", "Enchant Tokens and Rune Luck Potion are reported by community trackers.", "Needs in-game test"],
  ["GetBetterSon", "Enchant Tokens and Rune Speed Potion are reported by community trackers.", "Needs in-game test"],
  ["BAZALRIGHT", "Enchant Tokens and Rune Bulk Potion are reported by community trackers.", "Needs in-game test"],
  ["1KLIKES!!", "Rune potion bundle is reported by community trackers.", "Needs in-game test"],
  ["THANKS4JOINING", "Join reward listing; verify in-game before using in route advice.", "Needs in-game test"],
  ["SORRY4DELAY", "Delay compensation listing; verify in-game before using in route advice.", "Needs in-game test"],
].map(([code, reward, verification], index) => ({
  id: `code-${index + 1}`,
  status: verification === "Conflicting reports" ? "Conflicting reports" : "Verify regularly",
  code,
  reward,
  source: verification.includes("Public") ? "Public code lists" : "Community reports",
  verification,
  lastChecked: site.lastChecked,
}));

export const codeFaq = [
  {
    question: "What do Noob Incremental codes usually give?",
    answer:
      "Public code lists commonly report Tickets, Enchant Tokens, Rune Luck Potions, Rune Speed Potions, Rune Bulk Potions, and other progression boosts.",
  },
  {
    question: "How do I redeem Noob Incremental codes?",
    answer:
      "Launch Noob Incremental on Roblox, open Shop, scroll to the ABX or code area, paste one code exactly, and press Redeem or Activate.",
  },
  {
    question: "Why are codes marked verify regularly?",
    answer:
      "Public sources can disagree and codes can expire. This wiki keeps source listings separate from in-game verification.",
  },
];

const commonFaq = [
  {
    question: "Is this an official Noob Incremental site?",
    answer:
      "No. It is an unofficial fan-made wiki for informational and guide purposes only.",
  },
  {
    question: "Why are formulas marked unverified?",
    answer:
      "Hidden rates, rune odds, Prism formulas, and late-game scaling can change or may not be publicly documented.",
  },
  {
    question: "Does this site provide scripts or Robux generators?",
    answer:
      "No. This site does not provide Robux generators, scripts, executors, account services, trading, or paywalled cheats.",
  },
];

export const routeSteps = [
  { title: "Claim rewards first", text: "Check codes before spending Tickets because early rewards can change the first Rune window." },
  { title: "Buy Noobs for base flow", text: "Noobs create the Oof economy. Buy enough that early upgrades do not stall constantly." },
  { title: "Shift into multipliers", text: "Flat gains start the account, but Oof multipliers and automation usually carry after scaling begins." },
  { title: "Roll Runes with a goal", text: "Decide whether the wall is income, cost, speed, bulk, luck, or reset value before rolling." },
  { title: "Prestige only when faster", text: "Reset when the next run catches up faster than staying at the current wall." },
];

const upgradeTiers = [
  ["S", "Oof Multipliers", "Usually strongest once the first scaling wall appears."],
  ["S", "Automation", "Reduces repeated manual work and improves rebuild comfort."],
  ["A", "Noob Production", "Important early because it starts the Oof flow."],
  ["A", "Rune Synergy", "Strong before serious Rune sessions with Tickets and Potions ready."],
  ["B", "Layer Gates", "Buy when the next layer is the blocker, not as a constant default."],
  ["C", "Luxury / low-impact upgrades", "Delay until the route is stable or value is verified."],
];

const runeTiers = [
  ["S", "Legendary or best-in-slot Rune", "Keep long term and level first if it solves the current wall."],
  ["A", "Epic Rune", "Often strong through mid and late stages."],
  ["A", "Rare Rune", "Good bridge when useful for Oof, cost, speed, or reset timing."],
  ["B", "Useful Uncommon Rune", "Acceptable early if it has bottleneck value."],
  ["C", "Common Rune", "Early filler. Replace or move on once stronger targeted Runes appear."],
  ["Verify", "Exact hidden-rate claims", "Treat as unverified until tested in-game or posted officially."],
];

const potionTiers = [
  ["S", "Rune Luck Potion", "Best before a serious batch of Rune rolls."],
  ["A", "Rune Speed Potion", "Useful when active session time is the limit."],
  ["A", "Rune Bulk Potion", "Best after saving Tickets for a larger push."],
  ["B", "Generic reward potion", "Use only after confirming what the bonus affects."],
];

const prestigeTiers = [
  ["S", "Prestige when next run is clearly faster", "Best reset timing."],
  ["A", "Prestige to unlock a new layer or mechanic", "Strong if the next objective is understood."],
  ["B", "Prestige after a potion or rune push", "Useful for crossing a threshold."],
  ["C", "Prestige immediately when the button appears", "Risky because the rebuild may be slower."],
  ["D", "Prestige without understanding the reward", "Common new-player mistake."],
];

const statsRows = [
  ["Oof income stats", "Early income and basic upgrade pacing."],
  ["Multiplier stats", "Mid-game efficiency when flat gains slow down."],
  ["Rune Luck", "Better value during committed Rune roll sessions."],
  ["Rune Speed", "Faster active Rune sessions and less waiting."],
  ["Rune Bulk", "Better volume when Tickets are saved for a bigger push."],
  ["Prestige / Layer stats", "Long-term reset value."],
  ["Prism", "Late-game related value; exact formula remains unverified."],
];

function section(heading, body, list = []) {
  return { heading, body, list };
}

function table(title, columns, rows) {
  return { title, columns, rows };
}

function makePage({
  path,
  category,
  title,
  description,
  intro,
  sections = [],
  tables = [],
  faq = commonFaq,
  related = [],
}) {
  return { path, category, title, description, intro, sections, tables, faq, related };
}

export const guidePages = [
  makePage({
    path: "/codes",
    category: "Codes",
    title: "Noob Incremental Codes",
    description: "Noob Incremental Codes - Active Rewards and Redeem Guide",
    intro:
      "Codes are route tools because they can feed Tickets, Enchant Tokens, Rune Potions, and other progression boosts. This page separates public listings from in-game verification so players do not mistake every repost for a confirmed active reward.",
    sections: [
      section("How to Redeem Codes", "Use the in-game code box and paste each code exactly. Capitalization, punctuation, and server age can affect whether a public listing still works.", [
        "Launch Noob Incremental on Roblox.",
        "Open Shop.",
        "Scroll to the ABX / code area.",
        "Paste one code exactly.",
        "Press Redeem / Activate.",
        "Repeat for each active code.",
      ]),
      section("When to Redeem Codes", "Redeem codes when the reward directly supports a route goal instead of spending every boost at random.", [
        "Before rune sessions.",
        "Before potion windows.",
        "Before prestige pushes.",
        "Early account boost.",
      ]),
    ],
    faq: codeFaq,
    related: ["/beginner-guide", "/runes", "/tickets", "/potions", "/prestige"],
  }),
  makePage({
    path: "/beginner-guide",
    category: "Guide",
    title: "Noob Incremental Beginner Guide",
    description: "Noob Incremental Beginner Guide - Fast Progression Route",
    intro:
      "The beginner route is about building stable Oof income before chasing deeper systems. Buy Noobs, generate Oof, buy upgrades, improve stats, roll Runes with a purpose, use Tickets and Potions carefully, then Prestige only when the next run is meaningfully faster.",
    sections: [
      section("What is Noob Incremental?", "Noob Incremental is a Roblox incremental simulator where production, upgrades, Runes, and reset timing matter more than a single fixed build."),
      section("Core gameplay loop", "Buy Noobs -> Generate Oof -> Buy Upgrades -> Improve Stats -> Roll Runes -> Use Tickets / Potions -> Prestige -> Unlock deeper layers."),
      section("First 10 minutes", "Claim public rewards, buy early Noobs, and watch which upgrade moves your Oof income the most. Do not spend rare resources until the first wall is clear."),
      section("First hour", "Move from flat production into Oof multipliers, unlock the first route systems, and start recording what blocks your account."),
      section("Beginner checklist", "Use this as a first-session route before opening the deeper wiki pages.", [
        "Redeem active codes.",
        "Build stable Oof income.",
        "Buy early upgrades.",
        "Avoid random ticket spending.",
        "Roll runes only when they solve a bottleneck.",
        "Prestige only when reset value clearly improves the next run.",
      ]),
    ],
    related: ["/codes", "/upgrades", "/stats", "/runes", "/prestige"],
  }),
  makePage({
    path: "/upgrades",
    category: "Guide",
    title: "Noob Incremental Upgrades Guide",
    description: "Noob Incremental Upgrades Guide - Best Upgrade Priority",
    intro:
      "Upgrades are the practical skill tree of Noob Incremental. The strongest upgrade is the one that solves the current bottleneck without wasting rare currency.",
    sections: [
      section("How upgrades work", "Think in categories: flat production, multipliers, automation, Rune synergy, and layer gates."),
      section("Early game upgrade route", "Use Noob Production and flat Oof gains until basic purchases stop feeling starved."),
      section("Mid game upgrade route", "Shift priority toward Oof Multipliers, Automation, and Rune Synergy because they affect more of the account."),
      section("Upgrade bottleneck diagnosis", "If income is low, buy production. If prices scale too fast, seek multipliers. If rebuilding is slow, prioritize automation or reset value."),
    ],
    tables: [table("Upgrade Priority Tier Table", ["Tier", "Upgrade Type", "Why it matters"], upgradeTiers)],
    related: ["/stats", "/runes", "/prestige", "/beginner-guide"],
  }),
  makePage({
    path: "/stats",
    category: "Guide",
    title: "Noob Incremental Stats Guide",
    description: "Noob Incremental Stats Guide - Oof, Rune, Prestige and Prism Priorities",
    intro:
      "Stats explain what your account is actually good at. Read stats by bottleneck instead of blindly following one fixed priority list.",
    sections: [
      section("How to Read Stats", "Prioritize stats based on the current wall. Early accounts need Oof flow, Rune sessions need luck, speed, and bulk, while late accounts care more about reset and layer value."),
      section("Avoid fake formulas", "Public sources do not provide every hidden formula. Keep exact scaling marked as unverified until it is tested or posted officially."),
    ],
    tables: [table("Stat Categories", ["Stat Category", "Player Focus"], statsRows)],
    related: ["/upgrades", "/runes", "/prestige", "/layers", "/prism"],
  }),
  makePage({
    path: "/runes",
    category: "Guide",
    title: "Noob Incremental Runes Guide",
    description: "Noob Incremental Runes Guide - Tier List and Roll Strategy",
    intro:
      "Runes are valuable because they can solve different walls: Oof income, upgrade cost, Rune Luck, Rune Speed, Rune Bulk, or Prestige push timing.",
    sections: [
      section("What are Runes?", "Runes are rollable route modifiers. Rarity matters, but the Rune that fixes your wall matters more."),
      section("When to start rolling Runes", "Start rolling when Tickets and Potions can meaningfully change your route, not when you are still stuck on basic income."),
      section("Rune session planning", "Pick one session goal, prepare Tickets, use the correct potion window, and stop when the target is reached."),
      section("Rune focus cards", "Common useful focus types include Oof Income Rune, Upgrade Cost Rune, Rune Luck Rune, Rune Speed Rune, Rune Bulk Rune, and Prestige Push Rune."),
    ],
    tables: [table("Rune Tier List", ["Tier", "Rune Type", "Advice"], runeTiers)],
    related: ["/tickets", "/potions", "/enchant-tokens", "/prestige", "/upgrades"],
  }),
  makePage({
    path: "/tickets",
    category: "Guide",
    title: "Noob Incremental Tickets Guide",
    description: "Noob Incremental Tickets Guide - Best Uses and Rune Session Planning",
    intro:
      "Tickets should not be spent randomly. They are strongest when saved for a planned Rune session or a wall-breaking push.",
    sections: [
      section("Best ticket use", "Save Tickets until Runes are useful enough to justify rolling in volume."),
      section("When tickets solve a wall", "Spend Tickets when the wall is Rune-solvable, not when the account still lacks basic Oof income."),
      section("Update timing", "Save before major updates or code drops when new rewards may change the best route."),
    ],
    related: ["/runes", "/potions", "/enchant-tokens", "/codes", "/prestige"],
  }),
  makePage({
    path: "/potions",
    category: "Guide",
    title: "Noob Incremental Potions Guide",
    description: "Noob Incremental Potions Guide - Rune Luck, Speed and Bulk Timing",
    intro:
      "Potions are timing tools. A potion is strongest when the account is prepared to convert the boost into Runes, upgrades, or a faster Prestige push.",
    sections: [
      section("When to use potions", "Use potions when you can actively play through the full window and have a specific route target."),
      section("Potion mistakes", "Do not use rare potions right before a reset unless the potion directly helps reach the reset target."),
    ],
    tables: [table("Potion Tier List", ["Tier", "Potion", "Best use"], potionTiers)],
    related: ["/runes", "/tickets", "/enchant-tokens", "/prestige", "/codes"],
  }),
  makePage({
    path: "/enchant-tokens",
    category: "Guide",
    title: "Noob Incremental Enchant Tokens Guide",
    description: "Noob Incremental Enchant Tokens Guide - Best Rune Upgrade Priority",
    intro:
      "Enchant Tokens often appear as code rewards and should be focused on the Rune that solves your current wall first.",
    sections: [
      section("Best token priority", "Focus tokens on a bottleneck-solving Rune before spreading across weak filler Runes."),
      section("Do not spread randomly", "Random token spending can make every Rune slightly better without making the account meaningfully faster."),
      section("Verification note", "Exact token scaling should stay marked as unverified until in-game data is stable."),
    ],
    related: ["/codes", "/runes", "/tickets", "/potions", "/prestige"],
  }),
  makePage({
    path: "/prestige",
    category: "Guide",
    title: "Noob Incremental Prestige Guide",
    description: "Noob Incremental Prestige Guide - Best Reset Timing",
    intro:
      "Prestige should make the next run faster, cleaner, or able to reach new content. If the rebuild is slower than the bonus helps, wait.",
    sections: [
      section("What is Prestige?", "Prestige is the reset layer that should trade current progress for stronger future runs."),
      section("When to prestige", "Prestige when the permanent reset bonus makes the next run catch up faster than staying in the current wall."),
      section("When not to prestige", "Do not reset immediately when the button appears if you do not understand the reward."),
      section("Prestige readiness checklist", "Use this checklist before resetting.", [
        "Upgrade wall reached.",
        "Normal buys feel slow.",
        "Main runes are leveled enough.",
        "Potion timing is ready.",
        "Reset bonus beats time lost.",
        "Next layer or target is understood.",
        "No important code reward left unclaimed.",
      ]),
    ],
    tables: [table("Prestige Timing Tier Table", ["Tier", "Action", "Recommendation"], prestigeTiers)],
    related: ["/runes", "/upgrades", "/stats", "/layers", "/beginner-guide"],
  }),
  makePage({
    path: "/layers",
    category: "Guide",
    title: "Noob Incremental Layers Guide",
    description: "Noob Incremental Layers Guide - Base, Rune, Prestige and Later Layer Planning",
    intro:
      "Layers describe the route from base Noob production into Rune planning, Prestige resets, and later systems. Exact thresholds should remain verify-first until stable data exists.",
    sections: [
      section("Base Layer", "Build Oof income, Noob production, and broad upgrade value."),
      section("Rune Layer", "Use Tickets and Potions to roll Runes that fix the current bottleneck."),
      section("Prestige Layer", "Reset only when permanent value improves the next run."),
      section("Later Layers", "Treat thresholds and formulas as unverified until community testing is stable."),
    ],
    related: ["/prestige", "/runes", "/stats", "/prism", "/upgrades"],
  }),
  makePage({
    path: "/prism",
    category: "Guide",
    title: "Noob Incremental Prism Guide",
    description: "Noob Incremental Prism Guide - Late Game Value and Verification Notes",
    intro:
      "Prism appears in public bonus wording, but full scaling and conversion details should not be invented. This page keeps Prism advice conservative until values are verified.",
    sections: [
      section("What is confirmed", "Public wording references Prism as a late-game related value in some bonus descriptions."),
      section("What is not confirmed", "The full unlock path, scaling formula, and conversion rates are not safely public enough to publish as exact data."),
      section("How to write about Prism", "Use route logic and verification labels instead of precise formula claims."),
    ],
    related: ["/stats", "/layers", "/prestige", "/upgrades", "/wiki/prism"],
  }),
  makePage({
    path: "/discord",
    category: "Sources",
    title: "Noob Incremental Discord and Official Sources",
    description: "Noob Incremental Discord, Roblox Links and Verification Policy",
    intro:
      "Use official destinations first, then compare public code trackers and community notes. This keeps the guide useful without inventing hidden data.",
    sections: [
      section("Safe link policy", "Only publish official or widely trusted destinations. Mark unverified community links clearly."),
      section("What to avoid", "Avoid invites or sites that ask for passwords, browser extensions, token verification, executors, or account access."),
    ],
    related: ["/codes", "/wiki", "/patch-notes", "/faq"],
  }),
  makePage({
    path: "/faq",
    category: "FAQ",
    title: "Noob Incremental FAQ",
    description: "Noob Incremental FAQ - Common Questions and Answers",
    intro:
      "Short answers for players who want route guidance without digging through scattered videos, chats, or public code lists.",
    faq: [
      ...codeFaq,
      {
        question: "When should I Prestige?",
        answer:
          "Prestige when the permanent reset bonus makes the next run meaningfully faster than staying in the current wall.",
      },
      {
        question: "What does Rune Luck do?",
        answer:
          "Rune Luck should improve a Rune rolling session, but exact hidden probabilities remain unverified until tested or posted officially.",
      },
      ...commonFaq,
    ],
    related: ["/codes", "/beginner-guide", "/runes", "/prestige"],
  }),
];

export const wikiPages = [
  makePage({
    path: "/wiki",
    category: "Wiki",
    title: "Noob Incremental Wiki Index",
    description: "Noob Incremental Wiki Index - Noobs, Oof, Upgrades, Stats, Runes, Tickets, Potions, Prestige, Layers and Prism",
    intro:
      "This index organizes the main Noob Incremental systems into focused wiki pages. Use it when you need a compact system explanation before opening a full strategy guide.",
    sections: [
      section("Verification policy", verificationNotice),
      section("Main systems", "Noobs and Oof form the base economy. Upgrades and Stats shape efficiency. Runes, Tickets, Potions, Enchant Tokens, Prestige, Layers, and Prism create route planning depth."),
    ],
    related: ["/wiki/noobs", "/wiki/oof", "/wiki/runes", "/wiki/prestige", "/codes"],
  }),
  makePage({ path: "/wiki/noobs", category: "Wiki", title: "Noobs", description: "Noobs in Noob Incremental - Base Production Unit", intro: "Noobs are best described as the base production layer. Buy enough Noobs that Oof income keeps moving instead of stalling between upgrades.", sections: [section("When to buy Noobs", "Buy more when the next upgrade takes too long and multipliers are not yet strong enough to carry."), section("Noobs vs Oof multipliers", "Noobs build the floor. Multipliers raise the ceiling. Early progress needs both.")], related: ["/wiki/oof", "/upgrades", "/beginner-guide"] }),
  makePage({ path: "/wiki/oof", category: "Wiki", title: "Oof", description: "Oof in Noob Incremental - Main Early Resource", intro: "Oof is the core resource loop: buy Noobs, earn Oof, spend Oof on upgrades, then use upgrades and Runes to push deeper.", sections: [section("Oof health check", "Treat Oof income as the first health check for the account."), section("Farming mistake", "Do not dump everything into flat gains forever. Compare multiplier and automation value when scaling starts.")], related: ["/wiki/noobs", "/stats", "/upgrades"] }),
  makePage({ path: "/wiki/upgrades", category: "Wiki", title: "Upgrades", description: "Noob Incremental Upgrades Wiki - Route Priority and Skill Tree Replacement", intro: "Upgrades are the closest thing to a skill tree. Rank them by route-wide value and bottleneck relief.", sections: [section("Upgrade categories", "Production, multipliers, automation, Rune synergy, and layer gates should be evaluated differently."), section("Avoid equal buying", "Buying every shiny upgrade equally is weaker than asking which wall the upgrade solves.")], tables: [table("Upgrade Tiers", ["Tier", "Type", "Advice"], upgradeTiers)], related: ["/upgrades", "/wiki/stats", "/wiki/runes"] }),
  makePage({ path: "/wiki/stats", category: "Wiki", title: "Stats", description: "Noob Incremental Stats Wiki - Oof, Rune, Prestige and Prism Categories", intro: "Stats are hidden value drivers. Use categories until exact formulas are tested.", sections: [section("Stat reading rule", "Prioritize based on current bottleneck, not a universal ranking.")], tables: [table("Stat Categories", ["Stat Category", "Player Focus"], statsRows)], related: ["/stats", "/upgrades", "/prism"] }),
  makePage({ path: "/wiki/runes", category: "Wiki", title: "Runes", description: "Noob Incremental Runes Wiki - Rarity, Bottlenecks and Roll Planning", intro: "Runes are rollable stat boosters. The strongest Rune is the one that solves the current wall.", sections: [section("Rune bottlenecks", "Judge Rune value by Oof income, upgrade cost, Rune Luck, Rune Speed, Rune Bulk, or Prestige timing.")], tables: [table("Rune Tiers", ["Tier", "Rune Type", "Advice"], runeTiers)], related: ["/runes", "/tickets", "/enchant-tokens"] }),
  makePage({ path: "/wiki/tickets-potions", category: "Wiki", title: "Tickets and Potions", description: "Noob Incremental Tickets and Potions Wiki - Reward Timing Tools", intro: "Tickets and Potions are timing tools for Rune sessions, wall breaks, and reset preparation.", sections: [section("Ticket rule", "Do not spend Tickets randomly. Save before planned Rune sessions."), section("Potion rule", "Use potions during active windows where the boost changes a real route target.")], tables: [table("Potion Tiers", ["Tier", "Potion", "Best use"], potionTiers)], related: ["/tickets", "/potions", "/runes"] }),
  makePage({ path: "/wiki/enchant-tokens", category: "Wiki", title: "Enchant Tokens", description: "Noob Incremental Enchant Tokens Wiki - Rune Leveling Priority", intro: "Enchant Tokens are strongest when focused on the Rune that solves the current wall.", sections: [section("Focus first", "Do not spread tokens randomly before identifying the main bottleneck."), section("Code rewards", "Many public code lists mention Enchant Tokens, but each reward should be retested.")], related: ["/enchant-tokens", "/codes", "/runes"] }),
  makePage({ path: "/wiki/prestige", category: "Wiki", title: "Prestige", description: "Noob Incremental Prestige Wiki - Reset Value and Rebuild Speed", intro: "Prestige is the reset route. Use it when future speed beats current progress.", sections: [section("Reset value", "The reset should make the next run faster or unlock a new layer."), section("Bad timing", "Prestiging without understanding the reward is a common beginner mistake.")], tables: [table("Prestige Tiers", ["Tier", "Action", "Recommendation"], prestigeTiers)], related: ["/prestige", "/layers", "/stats"] }),
  makePage({ path: "/wiki/layers", category: "Wiki", title: "Layers", description: "Noob Incremental Layers Wiki - Base, Rune, Prestige and Later Layers", intro: "Layers describe progression depth. Exact thresholds stay unverified until tested.", sections: [section("Base Layer", "Noobs, Oof, and upgrades."), section("Rune Layer", "Tickets, Potions, Runes, and Enchant Tokens."), section("Prestige Layer", "Reset value and route planning.")], related: ["/layers", "/prestige", "/wiki/prism"] }),
  makePage({ path: "/wiki/prism", category: "Wiki", title: "Prism", description: "Noob Incremental Prism Wiki - Late Game Value and Unverified Formula Notes", intro: "Prism should be treated as a late-game value until exact scaling is verified.", sections: [section("Confirmed vs unconfirmed", "Public wording mentions Prism, but full formulas and unlock routes should not be invented."), section("Writing standard", "Explain Prism as a late-game related value and keep formulas marked needs verification.")], related: ["/prism", "/stats", "/layers"] }),
];

const blogSlugs = [
  ["noob-incremental-beginner-guide", "Noob Incremental Beginner Guide", "A full early route for new players learning Noobs, Oof, upgrades, Runes, Tickets, Potions, and Prestige timing."],
  ["noob-incremental-upgrade-order", "Noob Incremental Upgrade Order", "How to choose upgrade priority by bottleneck instead of buying every upgrade equally."],
  ["noob-incremental-rune-guide", "Noob Incremental Rune Guide", "Rune rolling, Rune Luck windows, Ticket planning, and Enchant Token priority."],
  ["noob-incremental-prestige-guide", "Noob Incremental Prestige Guide", "Reset timing, rebuild speed, layer planning, and Prestige readiness checklist."],
  ["noob-incremental-codes-guide", "Noob Incremental Codes Guide", "How to use codes safely and route Tickets, Potions, and Enchant Tokens into progression."],
  ["noob-incremental-farming-guide", "Noob Incremental Farming Guide", "Oof farming, Noob production, multipliers, and session planning for steady progress."],
  ["noob-incremental-f2p-guide", "Noob Incremental F2P Guide", "Free-to-play route planning without relying on gamepasses or unsupported shortcuts."],
  ["noob-incremental-gamepasses-value", "Noob Incremental Gamepasses Value", "How to judge gamepass value without inventing exact prices or hidden returns."],
  ["noob-incremental-afk-guide", "Noob Incremental AFK Guide", "Safe AFK-style planning focused on in-game systems, not scripts or executors."],
  ["noob-incremental-late-game-guide", "Noob Incremental Late Game Guide", "Layer planning, Prism notes, Prestige pacing, and verification-first late-game writing."],
];

export const blogPosts = [
  makePage({
    path: "/blog",
    category: "Blog",
    title: "Noob Incremental Blog",
    description: "Noob Incremental Blog - Strategy Articles, Farming Routes, Codes and Progression Guides",
    intro:
      "Long-form strategy articles for players who want route explanations beyond the compact wiki pages.",
    sections: [section("Article library", "Start with beginner, upgrade, Rune, Prestige, codes, farming, F2P, gamepass, AFK, and late-game topics.")],
    related: ["/beginner-guide", "/codes", "/patch-notes", "/wiki"],
  }),
  ...blogSlugs.map(([slug, title, intro]) =>
    makePage({
      path: `/blog/${slug}`,
      category: "Blog",
      title,
      description: `${title} - Noob Incremental strategy article`,
      intro,
      sections: [
        section("Route overview", "Start by identifying the current bottleneck. Good Noob Incremental routing is not a fixed checklist forever; it changes as Oof income, upgrade cost, Runes, Tickets, Potions, and Prestige value change."),
        section("Strategy", "Build a plan around one target at a time. Claim public rewards, prepare resources, push the system that solves the wall, then stop spending when the target is reached."),
        section("Table or checklist", "Use the checklist below as a reusable route structure.", ["Confirm current wall.", "Check code rewards.", "Prepare Tickets or Potions if relevant.", "Buy upgrades that solve the wall.", "Record what changed for future wiki updates."]),
        section("FAQ", "This article uses verification-first advice. Exact formulas, hidden odds, and late-game scaling should remain unverified until reliable data exists."),
      ],
      faq: commonFaq,
      related: ["/codes", "/runes", "/prestige", "/wiki"],
    })
  ),
];

export const patchNotes = [
  makePage({
    path: "/patch-notes",
    category: "Patch Notes",
    title: "Noob Incremental Patch Notes",
    description: "Noob Incremental Patch Notes - Updates, New Codes, Balance Changes and Wiki Impact",
    intro:
      "Patch notes track release summaries, code drops, system changes, strategy impact, and wiki pages that need verification.",
    sections: [section("Update tracking", "Use this hub to compare public update claims with in-game checks.")],
    related: ["/codes", "/blog", "/wiki", "/discord"],
  }),
  ...["update-1-0", "update-1-1", "update-1-2"].map((slug, index) =>
    makePage({
      path: `/patch-notes/${slug}`,
      category: "Patch Notes",
      title: `Noob Incremental Update ${index + 1}.${index}`,
      description: `Noob Incremental ${slug.replaceAll("-", " ")} patch notes, code changes, systems and strategy impact`,
      intro:
        "This placeholder patch note is structured for future verified updates. Replace public claims only after checking the game, official posts, or trusted community logs.",
      sections: [
        section("Summary", "A concise summary belongs here after the update is verified."),
        section("New codes", "List new codes only after source comparison and in-game checks."),
        section("New systems", "Record new Runes, upgrades, layers, or Prism changes when confirmed."),
        section("Balance changes", "Explain how Oof, Tickets, Potions, Enchant Tokens, or Prestige strategy changed."),
        section("Changed wiki pages", "Link pages that need edits after this update."),
      ],
      related: ["/codes", "/runes", "/prestige", "/wiki"],
    })
  ),
];

export const legalPages = [
  makePage({ path: "/privacy-policy", category: "Legal", title: "Privacy Policy", description: "Privacy policy for noobincremental.site", intro: "This privacy policy explains what information this fan wiki may collect and how it is used.", sections: [section("Information we collect", "The site may collect standard server or analytics information such as page visits, browser type, approximate region, and referral pages."), section("Advertising and analytics", "Future advertising or analytics partners may use cookies or similar technologies to measure traffic and show relevant ads."), section("Contact", "For privacy questions, contact admin@noobincremental.site.")], related: ["/terms", "/contact", "/dmca"] }),
  makePage({ path: "/terms", category: "Legal", title: "Terms of Use", description: "Terms of use for noobincremental.site", intro: "By using this site, you agree to use it as a fan-made informational resource.", sections: [section("Unofficial content", "Noob Incremental Wiki is not affiliated with Roblox Corporation or the Noob Incremental developers."), section("No guarantees", "Game mechanics, codes, rewards, and links may change without notice."), section("Acceptable use", "Do not use the site to distribute malware, phishing links, cheats, account-selling offers, or misleading code claims.")], related: ["/privacy-policy", "/contact", "/dmca"] }),
  makePage({ path: "/contact", category: "Legal", title: "Contact", description: "Contact noobincremental.site for corrections, code verification and wiki suggestions", intro: "Use this page to report corrections, outdated information, suspicious links, or useful guide additions.", sections: [section("Email", "Send corrections and requests to admin@noobincremental.site."), section("Useful reports", "Include the page URL, screenshot, source link, date checked, and a short explanation.")], related: ["/privacy-policy", "/terms", "/dmca"] }),
  makePage({ path: "/dmca", category: "Legal", title: "DMCA Policy", description: "DMCA and copyright contact information for noobincremental.site", intro: "This site is intended to use original fan-written guide text and original or properly licensed assets.", sections: [section("Copyright notices", "Send notices to admin@noobincremental.site with the copyrighted work, allegedly infringing URL, contact information, and good-faith statement."), section("Review process", "Reported material will be reviewed and removed or corrected when appropriate.")], related: ["/privacy-policy", "/terms", "/contact"] }),
];

export const searchPage = makePage({
  path: "/search",
  category: "Search",
  title: "Search Noob Incremental Wiki",
  description: "Search Noob Incremental Wiki pages, guides, blog posts, patch notes and codes",
  intro: "Search guide pages, wiki entries, blog posts, patch notes, and code listings from one static index.",
  related: ["/wiki", "/codes", "/blog", "/patch-notes"],
});

export const contentPages = [...guidePages, ...wikiPages, ...blogPosts, ...patchNotes, ...legalPages, searchPage];

export const contentByPath = Object.fromEntries(contentPages.map((page) => [page.path, page]));

export const featuredCategories = [
  ...guidePages.filter((page) => ["/codes", "/beginner-guide", "/upgrades", "/stats", "/runes", "/prestige"].includes(page.path)),
  ...wikiPages.filter((page) => ["/wiki/noobs", "/wiki/oof", "/wiki/enchant-tokens", "/wiki/layers", "/wiki/prism"].includes(page.path)),
];

export const allRoutes = ["/", ...contentPages.map((page) => page.path)];

export const searchIndex = [
  ...contentPages.map((page) => ({
    title: page.title,
    description: page.description,
    category: page.category,
    url: page.path,
  })),
  ...codeRows.map((code) => ({
    title: code.code,
    description: `${code.reward} ${code.verification}`,
    category: "Code",
    url: "/codes",
  })),
];
