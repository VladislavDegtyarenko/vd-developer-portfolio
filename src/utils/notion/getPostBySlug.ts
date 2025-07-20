import { getPosts } from "./getPosts";

export const getPostBySlug = async (slug: string) => {
  const posts = await getPosts();

  const postBySlug = posts?.find((post) => post.slug === slug);

  return postBySlug;
};
