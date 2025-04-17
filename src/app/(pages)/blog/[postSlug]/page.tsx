import { cache } from "react";

import BlogPostServer from "./components/BlogPostServer";
import { getSlugs } from "@/utils/notion/getSlugs";

export const dynamic = "force-static";

export const generateStaticParams = cache(async () => {
  const slugs = await getSlugs();

  return slugs;
});

const BlogPostPage = async ({ params }: { params: { postSlug: string } }) => {
  const { postSlug } = params;

  return <BlogPostServer postSlug={postSlug} />;
};

export default BlogPostPage;
