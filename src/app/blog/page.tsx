import { getPosts } from "@/lib/notion";
import BlogHero from "@/sections/blog/BlogHero";
import BlogPostsList from "@/sections/blog/BlogPostsList";
import Image from "next/image";

// export const revalidate = 259200; // 3 days
// export const revalidate = 3600; // 1 hour
export const dynamic = "force-dynamic";

async function Posts() {
  const posts = await getPosts();

  return posts;
}

const BlogPage = async () => {
  const posts = await Posts();

  return (
    <>
      <BlogHero />
      <BlogPostsList posts={posts} />
    </>
  );
};

export default BlogPage;
