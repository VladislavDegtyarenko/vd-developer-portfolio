import { PRODUCTION_DOMAIN } from "@/constants";
import { BlogPost } from "@/types/notion";
import { serializeJsonLd } from "@/utils/serializeJsonLd";

type BlogPostJsonLdProps = Pick<
  BlogPost,
  "title" | "description" | "slug" | "date" | "coverUrl"
>;

const AUTHOR_NAME = "Vladyslav Dihtiarenko";

const getAbsoluteUrl = (pathOrUrl: string) =>
  new URL(pathOrUrl, `${PRODUCTION_DOMAIN}/`).toString();

const BlogPostJsonLd = ({
  title,
  description,
  slug,
  date,
  coverUrl,
}: BlogPostJsonLdProps) => {
  const canonicalUrl = getAbsoluteUrl(`/blog/${slug}`);
  const person = {
    "@type": "Person",
    name: AUTHOR_NAME,
    url: PRODUCTION_DOMAIN,
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: person,
    publisher: person,
    ...(description && { description }),
    ...(date && { datePublished: date }),
    ...(coverUrl && { image: [getAbsoluteUrl(coverUrl)] }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
    />
  );
};

export default BlogPostJsonLd;
