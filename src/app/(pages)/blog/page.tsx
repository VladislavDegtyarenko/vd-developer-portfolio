import BlogHero from "@/sections/blog/BlogHero";
import BlogPostsListServer from "@/sections/blog/BlogPostsListServer";
import BlogPostsListSkeleton from "@/sections/blog/BlogPostsListSkeleton";
import { Suspense } from "react";

export const dynamic = "force-static";

const BlogPage = () => {
  return (
    <>
      <BlogHero />
      <Suspense fallback={<BlogPostsListSkeleton />}>
        <BlogPostsListServer />
      </Suspense>
    </>
  );
};

export default BlogPage;
