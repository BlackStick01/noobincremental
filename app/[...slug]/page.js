import { notFound } from "next/navigation";
import { ContentPageView, JsonLd } from "../components";
import { contentByPath, contentPages } from "../../lib/siteData";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
} from "../../lib/seo";

export function generateStaticParams() {
  return contentPages
    .filter((page) => page.path !== "/")
    .map((page) => ({ slug: page.path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const page = contentByPath[path];

  if (!page) {
    return {};
  }

  return pageMetadata({
    title: page.title,
    description: page.description,
    path,
    type: page.category === "Blog" || page.category === "Updates" ? "article" : "website",
  });
}

export default async function CatchAllPage({ params }) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const page = contentByPath[path];

  if (!page) {
    notFound();
  }

  const schemaType =
    page.category === "Updates"
      ? "TechArticle"
      : page.category === "Blog" || page.category === "Wiki" || page.category === "Guide" || page.category === "Codes"
        ? "Article"
        : "WebPage";
  const faqItems = page.faqGroups?.length
    ? page.faqGroups.flatMap((group) => group.items)
    : page.faq || [];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(page)} />
      <JsonLd data={articleJsonLd(page, schemaType)} />
      {faqItems.length ? <JsonLd data={faqJsonLd(faqItems)} /> : null}
      <ContentPageView page={page} />
    </>
  );
}
