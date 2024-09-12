// Notion
import { Client } from "@notionhq/client";

import { cache } from "react";

// TS
import { BlogPost, BlogPostResponse, BlogPostWithBlocks } from "@/types/notion";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlock } from "@9gustin/react-notion-render";
import calcReadingTime from "@/utils/calcReadingTime";
import { calcBlocksReadingTime } from "@/utils/calcBlocksReadingTime";
import { generateBlurDataUrl } from "@/utils/generateBlurDataUrl";
import { downloadImage, notionImageResolver } from "@/utils/imageHandler";

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || "";
const NOTION_TOKEN = process.env.NOTION_TOKEN || "";

const notion = new Client({ auth: NOTION_TOKEN });

export const getPosts = cache(async () => {
  if (!NOTION_DATABASE_ID) {
    throw new Error("NOTION_DATABASE_ID is not set in .env file");
  }

  const res = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
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

  const results = res.results as BlogPostResponse[];

  const posts = await Promise.all(
    results.map(async (post) => {
      const id = post.id;
      const title = post.properties.Title.title[0].plain_text;
      const description = post.properties.Description.rich_text[0]?.plain_text;
      const slug = post.properties.Slug?.rich_text[0].plain_text;
      const date = post.properties.Date.date?.start;
      const tags = post.properties.Tags.multi_select.map(({ name }) => name);

      // Handles both external and file images
      const notionCoverUrl =
        post.cover?.type === "file"
          ? post.cover.file.url
          : post.cover?.type === "external"
          ? post.cover.external.url
          : null;

      const resolvedCoverUrl = await notionImageResolver(post.cover);

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
});

export const getPostSlugs = async () => {
  const posts = await getPosts();

  const slugs = posts.map(async ({ slug }) => slug);

  return slugs;
};

export const getPostBySlug = async (slug: string) => {
  const posts = await getPosts();

  const postBySlug = posts.find((post) => post.slug === slug);

  if (!postBySlug) {
    return null;
  }

  const postId = postBySlug.id;

  const res = await notion.blocks.children.list({
    block_id: postId,
  });

  const blocks = res.results as NotionBlock[];

  // const { coverUrl } = postBySlug;
  // const blurDataUrl = coverUrl ? await generateBlurDataUrl(coverUrl) : null;

  const post = {
    ...postBySlug,
    // blurDataUrl,
    readingTime: calcBlocksReadingTime(res.results as BlockObjectResponse[]),
    blocks,
  } as BlogPostWithBlocks;

  // console.log(
  //   "image blocks: ",
  //   post.blocks.filter(({ type }) => type === "image")[0]
  // );
  return post;
};
