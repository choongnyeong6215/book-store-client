import { ISignUpProps } from "../pages/SignUp";
import { httpClient } from "./http";

export const signUp = async (userData: ISignUpProps) => {
  const response = await httpClient.post("/users/join", userData);
  return response.data;
};

export const resetRequest = async (data: ISignUpProps) => {
  const response = await httpClient.post("/users/reset", data);
  return response.data;
};

export const resetPassword = async (data: ISignUpProps) => {
  const response = await httpClient.put("/users/reset", data);
  return response.data;
};
