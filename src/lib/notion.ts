"server-only";

// Notion
import { Client } from "@notionhq/client";

import { cache } from "react";

// TS
import { BlogPost, BlogPostResponse, BlogPostWithBlocks } from "@/types/notion";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlock } from "@9gustin/react-notion-render";
// import calcReadingTime from "@/utils/calcReadingTime";
import { calcBlocksReadingTime } from "@/utils/calcBlocksReadingTime";
// import { generateBlurDataUrl } from "@/utils/generateBlurDataUrl";
import { resolveCoverUrl } from "@/utils/imageHandler";

export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || "";
export const NOTION_TOKEN = process.env.NOTION_TOKEN || "";

export const notion = new Client({ auth: NOTION_TOKEN });

export const getPosts = cache(async (): Promise<BlogPost[] | null> => {
  console.log("getPosts");

  const headers = new Headers({
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
  });

  const body = JSON.stringify({
    filter: {
      and: [
        {
          property: "Published",
          checkbox: { equals: true },
        },
        {
          property: "Slug",
          rich_text: { is_not_empty: true },
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

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorObjectFromNotion = await res.json();

      if (errorObjectFromNotion?.object === "error") {
        console.error(
          `Error status: ${errorObjectFromNotion?.status}.\nCode: ${errorObjectFromNotion?.code}.\.Message: ${errorObjectFromNotion?.message} `
        );
      }

      return null;
    }

    const data = await res.json();

    const results = data.results as BlogPostResponse[];

    const posts = await Promise.all(
      results.map(async (post) => {
        const id = post.id;
        const title = post.properties.Title.title[0].plain_text;
        const description =
          post.properties.Description.rich_text[0]?.plain_text;
        const slug = post.properties.Slug?.rich_text[0].plain_text;
        const date = post.properties.Date.date?.start;
        const tags = post.properties.Tags.multi_select.map(({ name }) => name);

        // Handles both external and file images
        // const notionCoverUrl =
        //   post.cover?.type === "file"
        //     ? post.cover.file.url
        //     : post.cover?.type === "external"
        //     ? post.cover.external.url
        //     : null;

        const resolvedCoverUrl = await resolveCoverUrl(post.id, post.cover);

        // const blurDataUrl = coverUrl ? await generateBlurDataUrl(coverUrl) : null;

        return {
          id,
          title,
          description,
          slug,
          date,
          tags,
          coverUrl: resolvedCoverUrl,
          // blurDataUrl,
        };
      })
    );

    return posts;
  } catch (error) {
    new Error(
      `Error while querying Notion database in getPosts function ${getPosts.name}: ${error}`
    );

    return null;
  }
});

export const getPostSlugs = cache(async () => {
  const posts = await getPosts();

  if (posts === null) return [];

  const slugs = posts.map(({ slug }) => ({
    postSlug: slug,
  }));
  console.log("Slugs: ", slugs);

  return slugs;
});

export const getPostBySlug = cache(async (slug: string) => {
  const posts = await getPosts();

  if (posts === null) return null;

  const postBySlug = posts.find((post) => post.slug === slug);

  if (!postBySlug) {
    return null;
  }

  const blockId = postBySlug.id;

  try {
    const url = `${process.env.NOTION_API_ENDPOINT}/v1/blocks/${blockId}/children?page_size=100`;
    const options = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
      }),
    };

    const res = await fetch(url, options);

    if (!res.ok) {
      const errorObjectFromNotion = await res.json();
      console.error(errorObjectFromNotion);

      return null;
    }

    const data = await res.json();
    const blocks = data.results as NotionBlock[];

    // const { coverUrl } = postBySlug;
    // const blurDataUrl = coverUrl ? await generateBlurDataUrl(coverUrl) : null;

    const post = {
      ...postBySlug,
      // blurDataUrl,
      readingTime: calcBlocksReadingTime(blocks as BlockObjectResponse[]),
      blocks,
    } as BlogPostWithBlocks;

    return post;
  } catch (error) {
    console.error(
      `Error while fetching data from Notion, ${getPostBySlug.name}: ${error}`
    );

    return null;
  }
});
