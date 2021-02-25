import { AxiosResponse } from "axios";
import { Post } from "../models/post";
import api from "../utils/api";

export const getPosts = (): Promise<AxiosResponse<Post[]>> => api.get(`/posts`);

export const getUserPosts = (userId: number): Promise<AxiosResponse<Post[]>> =>
  api.get(`/posts`, { params: { userId } });

export const getPost = (postId: string): Promise<AxiosResponse<Post>> =>
  api.get(`/posts/${postId}`);

const postApi = {
  getPosts,
  getUserPosts,
  getPost,
};

export default postApi;
