import { BlogPostResponse } from "@/types/notion";
import { generateBlurDataUrl } from "../generateBlurDataUrl";
import { resolveNotionImage } from "../resolveNotionImage";

export const transformPostSummary = async (post: BlogPostResponse) => {
  const id = post.id;
  const title = post.properties.Title.title[0].plain_text;
  const description = post.properties.Description.rich_text[0]?.plain_text;
  const slug = post.properties.Slug?.rich_text[0].plain_text;
  const date = post.properties.Date.date?.start;
  const tags = post.properties.Tags.multi_select.map(({ name }) => name);

  const resolvedCoverUrl = await resolveNotionImage(post.cover, { width: 640 });
  const blurDataUrl = resolvedCoverUrl
    ? await generateBlurDataUrl(resolvedCoverUrl)
    : null;

  return {
    id,
    title,
    description,
    slug,
    date,
    tags,
    coverUrl: resolvedCoverUrl,
    blurDataUrl,
  };
};
