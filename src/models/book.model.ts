export interface IBook {
  id: number;
  title: string;
  img: number;
  categoryId: number;
  form: string;
  isbn: number;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  pubDate: string;
  likes: number;
}

export interface IBookDetail extends IBook {
  liked: boolean;
  category_name: string;
}

// mock review data type
export interface IBookReviewItem {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}

export type IBookReviewItemWrite = Pick<IBookReviewItem, "content" | "score">;
