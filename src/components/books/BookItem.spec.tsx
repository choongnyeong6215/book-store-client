import { render } from "@testing-library/react";
import { IBook } from "../../models/book.model";
import { BookStoreThemeProvider } from "../../context/themeContext";
import BookItem from "./BookItem";

const dummyBook: IBook = {
  id: 1,
  title: "Dummny Book",
  img: 5,
  category_id: 1,
  summary: "Dummy Summary",
  author: "Dummy Author",
  price: 10000,
  likes: 1,
  form: "paperback",
  isbn: "Dummy ISBN",
  detail: "Dummy Detail",
  pages: 100,
  contents: "Dummy Contents",
  pubDate: "2021-01-01",
};

// describe("BookItem", () => {
//   it("렌더 여부", () => {
//     const { getByText } = render(
//       <BookStoreThemeProvider>
//         <BookItem book={dummyBook} />
//       </BookStoreThemeProvider>
//     );

//     expect(getByText(dummyBook.title)).toBeInTheDocument();
//     expect(getByText(dummyBook.summary)).toBeInTheDocument();
//     expect(getByText("10,000원")).toBeInTheDocument();
//     expect(getByText(dummyBook.likes)).toBeInTheDocument();
//   });
// });
