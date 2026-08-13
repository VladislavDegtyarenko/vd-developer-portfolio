import { BlogPost } from "@/types/notion";
import { cache } from "react";
import { transformPostSummary } from "./transformPostSummary";
import { queryBlogPosts } from "./queryBlogPosts";

export const getPosts = cache(
  async (postSlug?: string): Promise<BlogPost[] | null> => {
    try {
      const results = await queryBlogPosts(postSlug);

      const posts = await Promise.all(
        results.map(async (post) => await transformPostSummary(post))
      );

      return posts;
    } catch (error) {
      console.error(
        `Error fetching Notion data in getPosts function: ${error}`
      );

      return null;
    }
  }
);
