import type { MetadataRoute } from "next";
import { PRODUCTION_DOMAIN } from "@/constants";
import { queryBlogPosts } from "@/utils/notion/queryBlogPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await queryBlogPosts();

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

  const postRoutes: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const slug = post.properties.Slug.rich_text[0]?.plain_text;
    const date = post.properties.Date.date?.start;

    if (!slug) {
      return [];
    }

    return [
      {
        url: `${PRODUCTION_DOMAIN}/blog/${slug}`,
        ...(date && { lastModified: new Date(date) }),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
    ];
  });

  return [...staticRoutes, ...postRoutes];
}
