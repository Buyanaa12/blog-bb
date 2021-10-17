import client from "lib/sanity";

export const getAllPosts = async () => {
  const posts = await client.fetch(`*[_type == "post"]{}`);

  return posts;
};
