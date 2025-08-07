import { Metadata } from "next";
import { getSiteUrl } from "@/utils/getSiteUrl";
import { isProd } from "./isProd";
import { isPreview } from "./isPreview";

type GenerateMetadataProps = {
  title?: string;
  description?: string;
  path?: string; // like "/", "/blog", "/blog/my-post"
  image?: string; // custom OG image path
  keywords?: string[];
  authorUrl?: string;
};

export function generateMetadata({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
  keywords = [
    "Frontend Developer",
    "Frontend Engineer",
    "Vladyslav Dihtiarenko",
    "Vladyslav Dihtiarenko YouTube",
    "Vladislav Degtyarenko",
    "Web Development",
    "Web Developer",
    "JavaScript",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
  ],
  authorUrl = getSiteUrl(),
}: GenerateMetadataProps): Metadata {
  const siteUrl = getSiteUrl();
  const fullUrl = `${siteUrl}${path}`;
  const fullImageUrl = `${siteUrl}${image}`;

  const is404 = !title;

  const fullTitle = is404
    ? "404"
    : title.includes("Vladyslav Dihtiarenko")
    ? title
    : `${title} | Vladyslav Dihtiarenko`;

  const robots = isPreview() || is404 ? "noindex" : "index, follow";

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: "Vladyslav Dihtiarenko", url: authorUrl }],
    creator: "Vladyslav Dihtiarenko",
    publisher: "Vladyslav Dihtiarenko",
    metadataBase: new URL(getSiteUrl()),
    alternates: is404 ? undefined : { canonical: `${siteUrl}${path}` },
    robots,
    openGraph: {
      title: fullTitle,
      description,
      url: is404 ? undefined : fullUrl,
      siteName: "Vladyslav Dihtiarenko",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImageUrl],
      // creator: "@vd-developer", // Optional: Add your Twitter username
    },
    themeColor: "#1b9aaa",
    colorScheme: "light dark",
    // icons: {
    //   icon: "/favicon.ico",
    //   // shortcut: "/favicon-32x32.png",
    //   // apple: "/apple-touch-icon.png",
    // },
    // manifest: "/site.webmanifest", // Optional: If using PWA
  };
}
