import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { calcBlocksReadingTime } from "../calcBlocksReadingTime";
import { BlogPostWithBlocks } from "@/types/notion";
import { NotionBlock } from "@9gustin/react-notion-render";
// import { resolveNotionImage } from "../vercelBlob/resolveNotionImage";
import { fetchNotion } from "./fetchNotion";
import { getPosts } from "./getPosts";
import { cache } from "react";
import { headers } from "./constants";
import { resolveNotionImageLocally } from "./resolveNotionImageLocally";

export const getPostContent = cache(async (slug: string) => {
  const posts = await getPosts(slug);

  const postBySlug = posts?.[0];

  if (!postBySlug) {
    return null;
  }

  const blockId = postBySlug.id;

  try {
    const url = `${process.env.NOTION_API_ENDPOINT}/v1/blocks/${blockId}/children?page_size=100`;
    const options = {
      method: "GET",
      headers,
    };

    const data = await fetchNotion(url, options);

    const blocks = await Promise.all(
      data.results.map(async (block: any) => {
        if (block.type === "image" && block.image) {
          const notionImage = block.image as any;
          // const imageUrl = await resolveNotionImage(notionImage);
          const imageUrl = await resolveNotionImageLocally(notionImage);

          if (imageUrl) {
            return {
              ...block,
              image: {
                ...block.image,
                file: {
                  ...block.image.file,
                  url: imageUrl,
                },
              },
            };
          }
        }

        // if (block.type === "video" && block.video) {
        //   console.log("block.video: ", block.video);
        // }

        return block;
      })
    );

    // Typical image block url
    // https://prod-files-secure.s3.us-west-2.amazonaws.com/ - domain
    // 337530cf-f9ed-4037-87c0-75bc5ee55ff3/ - smth like a post slug in AWS bucket
    // 6a528b98-7b03-4867-86cd-c5ff744f6a0b/ - smth like block slug in AWS bucket
    // 64x64.png? - exact filename of the uploaded image
    // X-Amz-Algorithm=AWS4-HMAC-SHA256&
    // X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&
    // X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241005%2Fus-west-2%2Fs3%2Faws4_request&
    // X-Amz-Date=20241005T160129Z&X-Amz-Expires=3600&
    // X-Amz-Signature=2c1deab67e8ea6646003326b8d64a3313e1484073a47ac9a9d463be790a3fc2f&
    // X-Amz-SignedHeaders=host&
    // x-id=GetObject

    // DONE:
    // 1. Rework uploading images in the same structure: /awsPostSlug/awsBlockSlug/filename_transformed.png
    // 2. Handle getting images in this way
    // 3. Handle resolving block image urls

    // const { coverUrl } = postBySlug;
    // const blurDataUrl = coverUrl ? await generateBlurDataUrl(coverUrl) : null;

    const post = {
      ...postBySlug,
      // blurDataUrl,
      readingTime: calcBlocksReadingTime(blocks as BlockObjectResponse[]),
      blocks: blocks as NotionBlock[],
    } as BlogPostWithBlocks;

    return post;
  } catch (error) {
    console.error(
      `Error while fetching data from Notion, ${getPostContent.name}: ${error}`
    );

    return null;
  }
});
