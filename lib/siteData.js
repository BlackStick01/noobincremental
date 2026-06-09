export const site = {
  name: "Noob Incremental Wiki",
  shortName: "Noob Incremental",
  domain: "noobincremental.site",
  url: "https://noobincremental.site",
  description:
    "Unofficial Noob Incremental wiki with codes, beginner routes, upgrades, runes, prestige planning, tickets, potions, and FAQ.",
  lastChecked: "June 10, 2026",
  lastUpdated: "June 10, 2026",
  disclaimer:
    "Noob Incremental Wiki is an unofficial fan-made guide and is not affiliated with Roblox, Roblox Corporation, or the game's developer.",
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/codes", label: "Codes" },
  { href: "/beginner-guide", label: "Beginner Guide" },
  { href: "/upgrades", label: "Upgrades" },
  { href: "/runes", label: "Runes" },
  { href: "/prestige", label: "Prestige" },
  { href: "/faq", label: "FAQ" },
];

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
  { href: "/dmca", label: "DMCA" },
];

export const codes = {
  lastChecked: site.lastChecked,
  status: "No verified working codes are listed here yet.",
  notes:
    "This page only lists codes after manual verification from the Roblox game page, official announcements, or trusted community channels. Unverified reposts are not published as active rewards.",
  active: [],
  expired: [],
};

export const progressionRoute = [
  {
    step: "Start",
    title: "Learn the earning loop",
    detail:
      "Watch which action creates your main currency, then buy the cheapest repeatable upgrades until the next unlock appears.",
  },
  {
    step: "Upgrade",
    title: "Prioritize multipliers",
    detail:
      "Favor upgrades that affect the resource you are actively farming. Avoid spending rare currency before you know whether the boost survives resets.",
  },
  {
    step: "Boost",
    title: "Use timed items deliberately",
    detail:
      "Save potions and short boosts for sessions where you can play through the full duration and push a clear unlock target.",
  },
  {
    step: "Reset",
    title: "Prestige with a target",
    detail:
      "Prestige when the reset gives a clear permanent gain or unlock, not simply because the button is available.",
  },
];

export const corePages = [
  {
    slug: "codes",
    href: "/codes",
    title: "Noob Incremental Codes",
    summary:
      "Check the current code status, redemption steps, and safe verification rules before you claim rewards.",
    icon: "⌁",
  },
  {
    slug: "beginner-guide",
    href: "/beginner-guide",
    title: "Beginner Guide",
    summary:
      "Learn the early route: earn, upgrade, unlock systems, and avoid wasting limited boosts.",
    icon: "01",
  },
  {
    slug: "upgrades",
    href: "/upgrades",
    title: "Upgrades Guide",
    summary:
      "Understand which upgrade types matter early and how to think about permanent progress.",
    icon: "UP",
  },
  {
    slug: "runes",
    href: "/runes",
    title: "Runes Guide",
    summary:
      "A practical overview of runes, when to test them, and how to record their best use cases.",
    icon: "RU",
  },
  {
    slug: "prestige",
    href: "/prestige",
    title: "Prestige Guide",
    summary:
      "Plan prestige timing around meaningful long-term gains instead of resetting too early.",
    icon: "PX",
  },
  {
    slug: "tickets",
    href: "/tickets",
    title: "Tickets Guide",
    summary:
      "Track ticket sources, common uses, and checks to make before spending rare currency.",
    icon: "TK",
  },
  {
    slug: "potions",
    href: "/potions",
    title: "Potions Guide",
    summary:
      "Use boosts during active sessions and pair them with upgrade or prestige milestones.",
    icon: "PT",
  },
  {
    slug: "discord",
    href: "/discord",
    title: "Discord, Trello, and Wiki",
    summary:
      "Find community resources safely and avoid fake code, support, or impersonation pages.",
    icon: "CM",
  },
  {
    slug: "faq",
    href: "/faq",
    title: "FAQ",
    summary:
      "Quick answers about codes, progress, prestige, updates, and troubleshooting.",
    icon: "??",
  },
];

export const guidePages = {
  codes: {
    title: "Noob Incremental Codes",
    description:
      "Current Noob Incremental code status, safe redemption steps, and update checks for Roblox players.",
    intro:
      "Codes can change without warning, so this page separates verified status from rumors. If a reward cannot be checked against an official or trusted source, it stays off the active list.",
    sections: [
      {
        heading: "Current code status",
        body:
          "There are no verified working codes published on this wiki yet. That does not prove codes do not exist; it means the site has not confirmed a current reward with enough confidence to recommend it.",
        list: [
          `Last checked: ${codes.lastChecked}`,
          "Active list: empty until manual verification is complete.",
          "Expired list: empty until a code history is confirmed.",
        ],
      },
      {
        heading: "How to redeem codes safely",
        body:
          "When the game has a code button or settings panel, enter codes exactly as published by the developer. If a code fails, check spelling, capitalization, server age, and whether the code has expired.",
        list: [
          "Use the in-game interface only; do not enter Roblox credentials on external code sites.",
          "Prefer official update posts, game descriptions, or verified community announcements.",
          "Avoid pages that promise unlimited Robux, private executors, or account access.",
        ],
      },
      {
        heading: "Update workflow",
        body:
          "The code table should be updated only after a manual test. Record the source, reward, date checked, and whether the result was active or expired.",
      },
    ],
    codeTable: true,
  },
  "beginner-guide": {
    title: "Noob Incremental Beginner Guide",
    description:
      "Beginner route for Noob Incremental players learning upgrades, boosts, unlocks, and early progression.",
    intro:
      "Noob Incremental follows the classic incremental rhythm: build income, buy upgrades, unlock stronger systems, then repeat with better multipliers. The best early route is simple, but it helps to make each reset or boost intentional.",
    sections: [
      {
        heading: "First session route",
        body:
          "Spend the opening minutes learning which action produces your main resource and which upgrade gives the biggest visible jump. Push cheap multipliers first, then save when the next unlock is close.",
        list: [
          "Buy low-cost upgrades until price growth starts to slow your income.",
          "Check new menus after every unlock; many Roblox incremental games hide progress behind tabs.",
          "Do not use rare boosts while still learning basic upgrade costs.",
        ],
      },
      {
        heading: "Avoid common early mistakes",
        body:
          "Early mistakes usually come from spending rare currency too quickly or resetting without a plan. If a reset does not clearly improve future runs, keep farming a little longer.",
        list: [
          "Write down unlock requirements when the game does not explain them clearly.",
          "Use timed boosts only when you can actively play.",
          "Compare income before and after upgrades so you learn what scales best.",
        ],
      },
      {
        heading: "What to track",
        body:
          "Track unlock names, currencies, boost durations, and reset rewards. A short note is enough to keep the wiki accurate after balance changes.",
      },
    ],
  },
  upgrades: {
    title: "Noob Incremental Upgrades Guide",
    description:
      "Upgrade planning guide for Noob Incremental, including early priorities and permanent progression checks.",
    intro:
      "Upgrades are the engine of the game. A good upgrade path focuses on the multiplier that moves your current bottleneck while protecting rare resources for permanent value.",
    sections: [
      {
        heading: "Upgrade priority logic",
        body:
          "Prioritize upgrades that improve the resource you are actively farming. If two upgrades seem similar, pick the one that shortens the time to your next unlock.",
        list: [
          "Income multipliers usually beat cosmetic or convenience choices early.",
          "Permanent upgrades deserve more attention than run-limited boosts.",
          "If an upgrade is expensive, check whether a cheaper multiplier creates faster progress first.",
        ],
      },
      {
        heading: "Permanent vs temporary value",
        body:
          "Before spending scarce currency, confirm whether the upgrade survives prestige or reset systems. Permanent progress usually has higher long-term value.",
      },
      {
        heading: "Patch awareness",
        body:
          "Roblox incremental games often rebalance early progression. Re-check upgrade names, prices, and effects after updates before changing the wiki.",
      },
    ],
  },
  runes: {
    title: "Noob Incremental Runes Guide",
    description:
      "Rune planning notes for Noob Incremental, with testing tips and build selection guidance.",
    intro:
      "Runes should be treated as build-shaping modifiers until their exact effects are confirmed in-game. The safest approach is to test one rune change at a time.",
    sections: [
      {
        heading: "How to test runes",
        body:
          "Use the same activity, upgrade state, and boost setup before comparing rune effects. Changing too many variables makes the result hard to trust.",
        list: [
          "Record rune name, unlock requirement, effect, and best use case.",
          "Check whether the effect applies before or after other multipliers.",
          "Retest after updates that mention balance, worlds, or progression.",
        ],
      },
      {
        heading: "Choosing a rune setup",
        body:
          "Pick runes that help your current objective. Farming, unlocking, and prestige pushing may prefer different effects.",
      },
      {
        heading: "Wiki note standard",
        body:
          "Do not publish exact rune numbers unless they were recently verified. Use practical descriptions when formulas are uncertain.",
      },
    ],
  },
  prestige: {
    title: "Noob Incremental Prestige Guide",
    description:
      "Prestige timing guide for Noob Incremental players planning reset value and long-term progress.",
    intro:
      "Prestige is powerful when the reset creates a faster next run. It is weak when used only because progress feels slow for a moment.",
    sections: [
      {
        heading: "When to prestige",
        body:
          "Prestige when the reward clearly improves future runs or unlocks a new layer. If the next upgrade is still close, it can be better to push first.",
        list: [
          "Check your current income rate and next unlock cost.",
          "Estimate how long it would take to regain your current position.",
          "Reset when the permanent gain outweighs the lost run progress.",
        ],
      },
      {
        heading: "Before reset checklist",
        body:
          "Use active boosts, spend run-limited currency, and note the reward before confirming. A short checklist prevents wasted resources.",
      },
      {
        heading: "After prestige",
        body:
          "Update your early route. A good prestige should make familiar milestones faster, so the old upgrade order may no longer be optimal.",
      },
    ],
  },
  tickets: {
    title: "Noob Incremental Tickets Guide",
    description:
      "Ticket usage guide for Noob Incremental, including spending checks and source tracking.",
    intro:
      "Tickets are valuable because they often connect to unlocks, boosts, or limited shop choices. Spend them only after you understand what the purchase changes.",
    sections: [
      {
        heading: "Before spending tickets",
        body:
          "Confirm the ticket source, purchase effect, and whether the benefit continues after resets. Rare currency is best used on progress that lasts.",
        list: [
          "Track every repeatable ticket source you discover.",
          "Prefer unlocks or multipliers over short convenience when possible.",
          "Check update notes before spending after a patch.",
        ],
      },
      {
        heading: "Ticket tracking format",
        body:
          "A useful ticket note includes source, frequency, reward amount, spending option, and verification date.",
      },
      {
        heading: "Common risk",
        body:
          "Do not trust external sites that trade code claims or tickets for account login details. Real Roblox rewards are claimed in-game.",
      },
    ],
  },
  potions: {
    title: "Noob Incremental Potions Guide",
    description:
      "Potion and boost timing guide for Noob Incremental players who want better active-session value.",
    intro:
      "Potions are strongest when paired with a clear objective. Treat every timed boost as a short push window, not a casual background buff.",
    sections: [
      {
        heading: "Best time to use potions",
        body:
          "Use potions when you can actively play through their full duration and convert the boost into upgrades, unlocks, or prestige progress.",
        list: [
          "Avoid using rare potions right before a reset unless the potion helps the reset target.",
          "Stack boosts only after confirming they interact.",
          "Prepare upgrade targets before activating the timer.",
        ],
      },
      {
        heading: "Potion notes to record",
        body:
          "Record potion name, duration, effect, source, and whether it stacks with other bonuses. That makes future guide updates easier.",
      },
      {
        heading: "Session planning",
        body:
          "A strong boost session has one goal: reach a price wall, unlock a menu, or prepare prestige. Wandering between goals wastes the timer.",
      },
    ],
  },
  discord: {
    title: "Noob Incremental Discord, Trello, and Community Links",
    description:
      "Safe community link guidance for Noob Incremental players looking for official updates and support.",
    intro:
      "Community links are useful for update notes, code announcements, and bug reports, but fake invite and code pages are common. This page explains how to verify links before using them.",
    sections: [
      {
        heading: "How to verify community links",
        body:
          "Start from the Roblox game page or developer profile whenever possible. Treat search-result invites as untrusted until they match an official source.",
        list: [
          "Avoid Discord invites that ask for passwords, browser extensions, or token verification.",
          "Check that Trello or wiki links are mentioned by the developer or consistent community moderators.",
          "Use this page as a safety checklist until official links are manually confirmed.",
        ],
      },
      {
        heading: "What this wiki will list",
        body:
          "Only confirmed official or widely trusted resources should be published. If a link is useful but unverified, mark it clearly as pending review.",
      },
      {
        heading: "Reporting bad links",
        body:
          "Use the contact page to report impersonation pages, expired invites, or suspicious code claims.",
      },
    ],
  },
  faq: {
    title: "Noob Incremental FAQ",
    description:
      "Frequently asked questions about Noob Incremental codes, progression, upgrades, prestige, and wiki updates.",
    intro:
      "These quick answers cover the questions players usually ask before opening a detailed guide.",
    faqPage: true,
    sections: [],
  },
};

export const faq = [
  {
    question: "What is Noob Incremental?",
    answer:
      "Noob Incremental is a Roblox incremental game where progress usually revolves around earning resources, buying upgrades, unlocking systems, and repeating stronger loops.",
  },
  {
    question: "Are there any working Noob Incremental codes?",
    answer:
      "This wiki has not verified any currently working codes yet. The codes page will be updated after manual checking.",
  },
  {
    question: "Is this the official Noob Incremental wiki?",
    answer:
      "No. This is an unofficial fan-made guide. It is not affiliated with Roblox, Roblox Corporation, or the game's developer.",
  },
  {
    question: "When should I prestige?",
    answer:
      "Prestige when the reset gives a clear long-term multiplier or unlock and your current run has slowed enough that pushing farther is less efficient.",
  },
  {
    question: "How often is this site updated?",
    answer:
      "The site is designed for manual updates after game patches, code checks, or verified player reports.",
  },
  {
    question: "Why does the wiki avoid exact numbers on some pages?",
    answer:
      "Exact values can change after balance updates. The first version favors reliable strategy notes unless a number has been recently verified in-game.",
  },
];

export const legalPages = {
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "Privacy policy for noobincremental.site, an unofficial Noob Incremental fan wiki.",
    intro:
      "This privacy policy explains what information this fan wiki may collect and how it is used. The site is built as an informational guide and does not sell user data.",
    sections: [
      {
        heading: "Information we collect",
        body:
          "The site may collect standard server or analytics information such as page visits, browser type, approximate region, and referral pages. Contact messages may include the email address and text you choose to send.",
      },
      {
        heading: "Advertising and analytics",
        body:
          "Future advertising or analytics partners may use cookies or similar technologies to measure traffic and show relevant ads. Any advertising setup should follow the partner's policies and applicable privacy rules.",
      },
      {
        heading: "Contact",
        body:
          "For privacy questions, contact the site owner at admin@noobincremental.site.",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    description:
      "Terms of use for noobincremental.site, an unofficial Noob Incremental guide site.",
    intro:
      "By using this site, you agree to use it as a fan-made informational resource. The guide may contain mistakes or become outdated after game updates.",
    sections: [
      {
        heading: "Unofficial content",
        body:
          "Noob Incremental Wiki is not affiliated with Roblox, Roblox Corporation, or the game's developer. Game names and related references belong to their respective owners.",
      },
      {
        heading: "No guarantees",
        body:
          "The site aims to publish helpful and accurate information, but game mechanics, codes, rewards, and links may change without notice.",
      },
      {
        heading: "Acceptable use",
        body:
          "Do not use the site to distribute malware, phishing links, cheats, account-selling offers, or misleading code claims.",
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Contact noobincremental.site for corrections, link reports, code verification, and wiki suggestions.",
    intro:
      "Use this page to report corrections, outdated information, suspicious links, or useful guide additions.",
    sections: [
      {
        heading: "Email",
        body:
          "Send corrections and requests to admin@noobincremental.site. Include the page URL, what should change, and any source that helps verify the update.",
      },
      {
        heading: "Useful reports",
        body:
          "The best reports include a screenshot, source link, date checked, and a short explanation of the issue.",
      },
    ],
  },
  dmca: {
    title: "DMCA Policy",
    description:
      "DMCA and copyright contact information for noobincremental.site.",
    intro:
      "This site is intended to use original fan-written guide text and original or properly licensed assets. Copyright concerns can be reported for review.",
    sections: [
      {
        heading: "Copyright notices",
        body:
          "Send notices to admin@noobincremental.site with the copyrighted work, the allegedly infringing URL, your contact information, and a good-faith statement that the use is unauthorized.",
      },
      {
        heading: "Review process",
        body:
          "Reported material will be reviewed and removed or corrected when appropriate. False or incomplete notices may delay review.",
      },
    ],
  },
};

export const allContentPages = { ...guidePages, ...legalPages };

export const allRoutes = [
  "/",
  ...Object.keys(allContentPages).map((slug) => `/${slug}`),
];
