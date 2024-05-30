import { ICategory } from "../models/caetgory.model";
import { httpClient } from "./http";

export const fetchCategory = async () => {
  const response = await httpClient.get<ICategory[]>("/category");
  return response.data;
};
