import { notFound } from "next/navigation";
import { ArticlePage, JsonLd } from "../components";
import { allContentPages, faq, guidePages, site } from "../../lib/siteData";
import { faqJsonLd, pageMetadata } from "../../lib/seo";

export function generateStaticParams() {
  return Object.keys(allContentPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = allContentPages[slug];

  if (!page) {
    return {};
  }

  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
    type: "article",
  });
}

export default async function ContentPage({ params }) {
  const { slug } = await params;
  const page = allContentPages[slug];

  if (!page) {
    notFound();
  }

  const isFaq = slug === "faq";
  const isGuide = Boolean(guidePages[slug]);

  return (
    <>
      {isFaq ? <JsonLd data={faqJsonLd(faq)} /> : null}
      {isGuide ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: page.title,
            description: page.description,
            dateModified: site.lastUpdated,
            author: {
              "@type": "Organization",
              name: site.name,
            },
          }}
        />
      ) : null}
      <ArticlePage page={page} slug={slug} />
    </>
  );
}
