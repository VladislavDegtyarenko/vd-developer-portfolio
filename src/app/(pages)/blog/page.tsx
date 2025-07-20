import BlogHero from "@/sections/blog/BlogHero";
import BlogPostsListServer from "@/sections/blog/BlogPostsListServer";
import BlogPostsListSkeleton from "@/sections/blog/BlogPostsListSkeleton";
import { Suspense } from "react";
import { generateMetadata } from "@/utils/generateMetadata";

export const dynamic = "force-static";

export const metadata = generateMetadata({
  title: "Blog",
  description:
    "Discover Vladyslav's latest posts about frontend development, sharing best practices, tips, and insights.",
  path: "/blog",
});

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
