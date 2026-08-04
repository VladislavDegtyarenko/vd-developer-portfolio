import type { MetadataRoute } from "next";
import { PRODUCTION_DOMAIN } from "@/constants";
import { getPosts } from "@/utils/notion/getPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: PRODUCTION_DOMAIN,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${PRODUCTION_DOMAIN}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
    url: `${PRODUCTION_DOMAIN}/blog/${post.slug}`,
    ...(post.date && { lastModified: new Date(post.date) }),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
