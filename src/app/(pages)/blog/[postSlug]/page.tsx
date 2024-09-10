import { redirect, notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/notion";

import BlogPostPageWrapper from "@/sections/blog/blogPost/BlogPostPageWrapper";
import BlogPostPageHeading from "@/sections/blog/blogPost/BlogPostPageHeading";
import NotionBlocksRenderer from "@/components/Blog/BlogPost/NotionBlocksRenderer";
import BlogPostPageFooter from "@/sections/blog/blogPost/BlogPostPageFooter";

// export const revalidate = 259200; // 3 days
// export const revalidate = 3600; // 1 hour
export const dynamic = "force-static";

// export async function generateStaticParams() {
//   const slugs = getPostSlugs();

//   return slugs;
// }

const BlogPostPage = async ({ params }: { params: { postSlug: string } }) => {
  const { postSlug } = params;

  const post = await getPostBySlug(postSlug);

  if (post === null) {
    notFound();
  }

  const { blocks, ...postInfo } = post;

  return (
    <BlogPostPageWrapper>
      <BlogPostPageHeading {...postInfo} />
      <NotionBlocksRenderer blocks={blocks} />
      <BlogPostPageFooter />
    </BlogPostPageWrapper>
  );
};

export default BlogPostPage;
