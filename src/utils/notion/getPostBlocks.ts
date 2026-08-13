import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionCoverImage } from "@/types/notion";
import { headers } from "./constants";
import { fetchNotion } from "./fetchNotion";
import {
  NotionImageResolution,
  ResolveNotionImageLocallyOptions,
  resolveNotionImageLocallyWithMetadata,
} from "./resolveNotionImageLocally";

type BlocksResponse = {
  results: BlockObjectResponse[];
  has_more: boolean;
  next_cursor: string | null;
};

export const getPostBlocks = async (
  blockId: string
): Promise<BlockObjectResponse[]> => {
  const blocks: BlockObjectResponse[] = [];
  let startCursor: string | null = null;

  do {
    const params = new URLSearchParams({ page_size: "100" });

    if (startCursor) {
      params.set("start_cursor", startCursor);
    }

    const url = `${process.env.NOTION_API_ENDPOINT}/v1/blocks/${blockId}/children?${params}`;
    const data = (await fetchNotion(url, {
      method: "GET",
      headers,
    })) as BlocksResponse | null;

    if (!data || !Array.isArray(data.results)) {
      throw new Error(`Notion returned no blocks for post ${blockId}`);
    }

    blocks.push(...data.results);
    startCursor = data.has_more ? data.next_cursor : null;
  } while (startCursor);

  return blocks;
};

type ResolvedBlocks = {
  blocks: BlockObjectResponse[];
  images: Array<NotionImageResolution & { blockId: string }>;
};

export const resolveNotionImagesInBlocks = async (
  blocks: BlockObjectResponse[],
  options: ResolveNotionImageLocallyOptions = {}
): Promise<ResolvedBlocks> => {
  const resolvedBlocks = await Promise.all(
    blocks.map(async (block) => {
      if (block.type !== "image") {
        return { block };
      }

      const notionImage = block.image as NotionCoverImage;
      const resolution = await resolveNotionImageLocallyWithMetadata(
        notionImage,
        options
      );

      if (!resolution.url) {
        return {
          block,
          image: { ...resolution, blockId: block.id },
        };
      }

      const image =
        block.image.type === "file"
          ? {
              ...block.image,
              file: {
                ...block.image.file,
                url: resolution.url,
              },
            }
          : {
              ...block.image,
              external: {
                ...block.image.external,
                url: resolution.url,
              },
            };

      return {
        block: { ...block, image } as BlockObjectResponse,
        image: { ...resolution, blockId: block.id },
      };
    })
  );

  return {
    blocks: resolvedBlocks.map(({ block }) => block),
    images: resolvedBlocks.flatMap(({ image }) => (image ? [image] : [])),
  };
};
