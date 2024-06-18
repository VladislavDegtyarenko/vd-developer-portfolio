import { getPosts } from "@/lib/notion";
import BlogPostsListClient from "./BlogPostsListClient";

async function Posts() {
  const posts = await getPosts();

  return posts;
}

const BlogPostsListServer = async () => {
  const posts = await Posts();

  return <BlogPostsListClient posts={posts} />;
};

export default BlogPostsListServer;
