import { AxiosResponse } from "axios";
import { Comment } from "../models/comment";
import api from "../utils/api";

export const getPostComments = (
  postId: string
): Promise<AxiosResponse<Comment[]>> =>
  api.get(`/comments`, { params: { postId } });

const commentApi = {
  getPostComments,
};

export default commentApi;
