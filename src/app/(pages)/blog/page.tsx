import BlogHero from "@/sections/blog/BlogHero";
import BlogPostsListServer from "@/sections/blog/BlogPostsListServer";
import BlogPostsListSkeleton from "@/sections/blog/BlogPostsListSkeleton";
import { Suspense } from "react";

// export const revalidate = 259200; // 3 days
// export const revalidate = 3600; // 1 hour
// export const dynamic = "force-dynamic";
export const dynamic = "force-static";

const BlogPage = async () => {
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
