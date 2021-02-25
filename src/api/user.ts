import { AxiosResponse } from "axios";
import { User } from "../models/user";
import api from "../utils/api";

export const getUsers = (): Promise<AxiosResponse<User[]>> => api.get(`/users`);

export const getUser = (userId: string): Promise<AxiosResponse<User>> =>
  api.get(`/users/${userId}`);

const userApi = {
  getUsers,
  getUser,
};

export default userApi;
