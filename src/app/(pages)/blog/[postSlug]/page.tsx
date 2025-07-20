import { cache } from "react";

import BlogPostServer from "./components/BlogPostServer";
import { getSlugs } from "@/utils/notion/getSlugs";
import { generateMetadata as generateMetadataFunc } from "@/utils/generateMetadata";
import { getPostBySlug } from "@/utils/notion/getPostBySlug";

type BlogPostPageParams = { params: { postSlug: string } };

export async function generateMetadata({ params }: BlogPostPageParams) {
  const { postSlug } = params;

  const post = await getPostBySlug(postSlug);

  return generateMetadataFunc({
    title: post?.title || "",
    description: post?.description || "",
    path: `/blog/${postSlug}`,
    image: post?.coverUrl || undefined,
    keywords: post?.tags ?? [],
  });
}

export const dynamic = "force-static";

export const generateStaticParams = cache(async () => {
  const slugs = await getSlugs();

  return slugs;
});

const BlogPostPage = async ({ params }: BlogPostPageParams) => {
  const { postSlug } = params;

  return <BlogPostServer postSlug={postSlug} />;
};

export default BlogPostPage;
