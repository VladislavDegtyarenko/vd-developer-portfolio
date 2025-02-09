import { cache } from "react";
import { getPosts } from "./getPosts";

export const getSlugs = cache(async () => {
  const posts = await getPosts();

  if (posts === null) return [];

  const slugs = posts.map(({ slug }) => ({
    postSlug: slug,
  }));

  return slugs;
});
