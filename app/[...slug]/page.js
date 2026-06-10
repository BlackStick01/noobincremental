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
    title: page.description,
    description: page.intro,
    path,
    type: page.category === "Blog" ? "article" : "website",
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
    page.category === "Patch Notes"
      ? "TechArticle"
      : page.category === "Blog" || page.category === "Wiki" || page.category === "Guide" || page.category === "Codes"
        ? "Article"
        : "WebPage";

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(page)} />
      <JsonLd data={articleJsonLd(page, schemaType)} />
      {page.faq?.length ? <JsonLd data={faqJsonLd(page.faq)} /> : null}
      <ContentPageView page={page} />
    </>
  );
}
