import { IBook } from "../models/book.model";
import { httpClient } from "./http";
import { IPagination } from "../models/pagination.model";

interface IfetchBooksParams {
  category_id?: number;
  recent_books?: boolean;
  current_page?: number;
  limit: number;
}

interface IFetchBooksResponse {
  books: IBook[];
  pagination: IPagination;
}

export const fetchBooks = async (params: IfetchBooksParams) => {
  try {
    const response = await httpClient.get<IFetchBooksResponse>("/books", {
      params,
    });

    return response.data;
  } catch (err) {
    return {
      books: [],
      pagination: {
        total_count: 0,
        current_page: 1,
      },
    };
  }
};
