import { resolveNotionImageLocallyWithMetadata } from "./resolveNotionImageLocally";
import { getPostBlocks, resolveNotionImagesInBlocks } from "./getPostBlocks";
import { queryBlogPosts } from "./queryBlogPosts";

export type BlogAssetSyncOptions = {
  slug?: string;
  force?: boolean;
};

export type BlogAssetSyncItem = {
  postId: string;
  slug: string;
  kind: "cover" | "block";
  blockId?: string;
  sourceType: "file" | "external" | "none";
  status:
    | "downloaded"
    | "refreshed"
    | "existing"
    | "external"
    | "missing"
    | "failed";
  resolvedUrl: string | null;
  localPath: string | null;
};

export const syncBlogAssets = async ({
  slug,
  force = false,
}: BlogAssetSyncOptions = {}): Promise<BlogAssetSyncItem[]> => {
  const posts = await queryBlogPosts(slug);

  if (slug && posts.length === 0) {
    throw new Error(`No published blog post found for slug "${slug}"`);
  }

  const syncedAssets: BlogAssetSyncItem[] = [];

  for (const post of posts) {
    const postSlug = post.properties.Slug.rich_text[0]?.plain_text;

    if (!postSlug) {
      throw new Error(`Post ${post.id} has no slug`);
    }

    const cover = await resolveNotionImageLocallyWithMetadata(post.cover, {
      resizeOptions: { width: 640 },
      forceDownload: force,
    });

    syncedAssets.push({
      postId: post.id,
      slug: postSlug,
      kind: "cover",
      sourceType: cover.sourceType,
      status: cover.status,
      resolvedUrl: cover.url,
      localPath: cover.localPath,
    });

    if (cover.status === "failed") {
      throw new Error(`Failed to synchronize cover for ${postSlug}`);
    }

    const blocks = await getPostBlocks(post.id);
    const resolvedBlocks = await resolveNotionImagesInBlocks(blocks, {
      forceDownload: force,
    });

    for (const image of resolvedBlocks.images) {
      syncedAssets.push({
        postId: post.id,
        slug: postSlug,
        kind: "block",
        blockId: image.blockId,
        sourceType: image.sourceType,
        status: image.status,
        resolvedUrl: image.url,
        localPath: image.localPath,
      });

      if (image.status === "failed") {
        throw new Error(
          `Failed to synchronize image block ${image.blockId} for ${postSlug}`
        );
      }
    }
  }

  return syncedAssets;
};
