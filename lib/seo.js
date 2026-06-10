import { site } from "./siteData";

const ogImage = "/images/noob-incremental-hero.png";

export function pageMetadata({ title, description, path = "/", type = "website" }) {
  const url = new URL(path, site.url).toString();
  const fullTitle = title === site.name ? title : title;
  const imageUrl = new URL(ogImage, site.url).toString();

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type,
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 1000,
          alt: "Noob Incremental Wiki hero artwork",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(page, type = "Article") {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: page.title,
    description: page.description,
    dateModified: site.lastUpdated,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: new URL(page.path, site.url).toString(),
  };
}

export function breadcrumbJsonLd(page) {
  const segments = page.path.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: site.url,
    },
  ];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: index === segments.length - 1 ? page.title : segment.replaceAll("-", " "),
      item: new URL(currentPath, site.url).toString(),
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function videoGameJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Noob Incremental",
    gamePlatform: "Roblox",
    genre: "Incremental simulator",
    applicationCategory: "Game",
    url: site.url,
    description: site.description,
  };
}
