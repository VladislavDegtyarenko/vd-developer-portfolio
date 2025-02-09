import { cache } from "react";

import BlogPostServer from "./components/BlogPostServer";
import { getSlugs } from "@/utils/notion/getSlugs";

export const dynamic = "force-static";
// export const revalidate = 3600; // 1 hour
export const revalidate = 10800; // 3 hours
// export const revalidate = 60; // 1 min
// export const revalidate = 259200; // 3 days

export const generateStaticParams = cache(async () => {
  const slugs = await getSlugs();

  return slugs;
});

const BlogPostPage = async ({ params }: { params: { postSlug: string } }) => {
  const { postSlug } = params;

  return <BlogPostServer postSlug={postSlug} />;
};

export default BlogPostPage;
