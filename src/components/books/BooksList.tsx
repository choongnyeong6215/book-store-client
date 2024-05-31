import styled from "styled-components";
import BookItem from "./BookItem";
import { IBook } from "../../models/book.model";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { QUERYSTRING } from "../../constants/querystring";
import { TViewMode } from "./BooksViewSwitcher";

interface IBookListProps {
  books: IBook[];
}

const BooksList = ({ books }: IBookListProps) => {
  const [view, setView] = useState<TViewMode>("grid");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as TViewMode);
    }
  }, [location.search]);

  return (
    <BooksListStyle view={view}>
      {books.map((item) => (
        <BookItem book={item} key={item.id} view={view} />
      ))}
    </BooksListStyle>
  );
};

interface IBookListStyleProps {
  view: TViewMode;
}

const BooksListStyle = styled.div<IBookListStyleProps>`
  display: grid;
  grid-template-columns: ${({ view }) =>
    view === "grid" ? "repeat(4, 1fr)" : "repeat(1, 1fr)"}; // error
  gap: 24px;
`;

export default BooksList;
