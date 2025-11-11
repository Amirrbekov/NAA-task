import { mockPosts, Post } from "./mock";

export const fetchPosts = async () => {
  await new Promise((r) => setTimeout(r, 500));
  return mockPosts;
};

export const addPost = async (newPost: Post): Promise<Post> => {
  await new Promise((r) => setTimeout(r, 350));
  mockPosts.unshift(newPost);
  return newPost;
};

export const updatePost = async (updatedPost: Post): Promise<Post> => {
  await new Promise((r) => setTimeout(r, 350));

  const index = mockPosts.findIndex((post) => post.id === updatedPost.id);

  if (index === -1) {
    throw new Error(`Post with id ${updatedPost.id} not found`);
  }

  mockPosts[index] = { ...mockPosts[index], ...updatedPost };

  return mockPosts[index];
};

export const deletePost = async (postId: string): Promise<void> => {
  await new Promise((r) => setTimeout(r, 350));

  const index = mockPosts.findIndex((post) => post.id === postId);

  if (index === -1) {
    throw new Error(`Post with id ${postId} not found`);
  }

  mockPosts.splice(index, 1);
};
