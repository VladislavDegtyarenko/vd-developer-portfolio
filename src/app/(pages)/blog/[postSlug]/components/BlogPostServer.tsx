import BlogPostPageHeading from "@/sections/blog/blogPost/BlogPostPageHeading";
import NotionBlocksRenderer from "@/components/Blog/BlogPost/NotionBlocksRenderer";
import BlogPostPageFooter from "@/sections/blog/blogPost/BlogPostPageFooter";

import { notFound } from "next/navigation";
import { getPostContent } from "@/utils/notion/getPostContent";

const BlogPostServer = async ({ postSlug }: { postSlug: string }) => {
  const post = await getPostContent(postSlug);

  if (!post) {
    notFound();
  }

  const { blocks, ...postInfo } = post;

  return (
    <>
      <BlogPostPageHeading {...postInfo} />
      <NotionBlocksRenderer blocks={blocks} />
      <BlogPostPageFooter />
    </>
  );
};

export default BlogPostServer;
