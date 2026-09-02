import { getCollection, type CollectionEntry } from "astro:content";

export function comparePostsByDateDesc(
  left: CollectionEntry<"blog">,
  right: CollectionEntry<"blog">,
) {
  return right.data.publishDate.getTime() - left.data.publishDate.getTime();
}

export function isPublishedPost(post: CollectionEntry<"blog">) {
  return post.data.draft !== true;
}

export async function getPublishedPosts() {
  const posts = await getCollection("blog");
  return posts.filter(isPublishedPost).sort(comparePostsByDateDesc);
}

export async function getLatestPost() {
  const posts = await getPublishedPosts();
  return posts[0];
}
