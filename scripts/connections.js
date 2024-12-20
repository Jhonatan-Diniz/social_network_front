import { GetFetch } from "./fetch.js"

export const getPosts = async () => {
  let endpoint = 'posts/get_posts'
  let list_of_post = await GetFetch(endpoint)
  return list_of_post
}

export const getUserPost = async () => {
  let endpoint = 'posts/get_user_posts'
  let list_of_posts = await GetFetch(endpoint)
  return list_of_posts
}

export const getUserById= async (id) => {
  let endpoint = `users/${id}`
  return await GetFetch(endpoint)
}

