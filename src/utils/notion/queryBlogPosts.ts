import { BlogPostResponse } from "@/types/notion";
import { headers } from "./constants";
import { fetchNotion } from "./fetchNotion";

type QueryResponse = {
  results: BlogPostResponse[];
  has_more: boolean;
  next_cursor: string | null;
};

export const queryBlogPosts = async (
  postSlug?: string
): Promise<BlogPostResponse[]> => {
  const results: BlogPostResponse[] = [];
  let startCursor: string | null = null;

  do {
    const body = JSON.stringify({
      filter: {
        and: [
          {
            property: "Published",
            checkbox: { equals: true },
          },
          {
            property: "Slug",
            rich_text: postSlug
              ? { equals: postSlug }
              : { is_not_empty: true },
          },
        ],
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
      page_size: 100,
      ...(startCursor ? { start_cursor: startCursor } : {}),
    });

    const url = `${process.env.NOTION_API_ENDPOINT}/v1/databases/${process.env.NOTION_DATABASE_ID}/query`;
    const data = (await fetchNotion(url, {
      method: "POST",
      headers,
      body,
    })) as QueryResponse | null;

    if (!data || !Array.isArray(data.results)) {
      throw new Error("Notion returned no blog post results");
    }

    results.push(...data.results);
    startCursor = data.has_more ? data.next_cursor : null;
  } while (startCursor);

  return results;
};
