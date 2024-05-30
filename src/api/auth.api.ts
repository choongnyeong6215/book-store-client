import { ISignUpProps } from "../pages/SignUp";
import { httpClient } from "./http";

export const signUp = async (userData: ISignUpProps) => {
  const response = await httpClient.post("/users/join", userData);

  return response.data;
};
