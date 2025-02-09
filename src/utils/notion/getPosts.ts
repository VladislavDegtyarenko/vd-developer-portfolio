import { BlogPost, BlogPostResponse } from "@/types/notion";
import { cache } from "react";
import { headers } from "./constants";
import { fetchNotion } from "./fetchNotion";
import { transformPostSummary } from "./transformPostSummary";

export const getPosts = cache(
  async (postSlug?: string): Promise<BlogPost[] | null> => {
    try {
      const body = JSON.stringify({
        filter: {
          and: [
            {
              property: "Published",
              checkbox: { equals: true },
            },
            {
              property: "Slug",
              rich_text: {
                // is_not_empty: true,
                ...(postSlug ? { equals: postSlug } : { is_not_empty: true }),
              },
            },
          ],
        },
        sorts: [
          {
            property: "Date",
            direction: "descending",
          },
        ],
      });

      const url = `${process.env.NOTION_API_ENDPOINT}/v1/databases/${process.env.NOTION_DATABASE_ID}/query`;
      const options = {
        method: "POST",
        headers,
        body,
      };

      const data = await fetchNotion(url, options);

      const results = data.results as BlogPostResponse[];

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
