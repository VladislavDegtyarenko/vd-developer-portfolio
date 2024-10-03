import { getPosts } from "@/lib/notion";
import BlogPostsListClient from "./BlogPostsListClient";
import { cache } from "react";

const Posts = async () => {
  const posts = await getPosts();

  return posts;
};

const BlogPostsListServer = async () => {
  const posts = await Posts();

  if (!posts) {
    return null;
  }

  return <BlogPostsListClient posts={posts} />;
};

export default BlogPostsListServer;
