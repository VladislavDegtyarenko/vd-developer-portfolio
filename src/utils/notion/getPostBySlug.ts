import { getPosts } from "./getPosts";

export const getPostBySlug = async (slug: string) => {
  const posts = await getPosts(slug);

  const postBySlug = posts?.[0];

  return postBySlug;
};
