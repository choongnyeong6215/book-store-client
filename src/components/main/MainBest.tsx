import { IBook } from "@/models/book.model";
import styled from "styled-components";
import BookBestItem from "../books/BookBestItem";

interface IMainBestProps {
  books: IBook[];
}

const MainBest = ({ books }: IMainBestProps) => {
  return (
    <MainBestStyle>
      {books.map((item, index) => (
        <BookBestItem key={item.id} book={item} itemIndex={index} />
      ))}
    </MainBestStyle>
  );
};

const MainBestStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
`;

export default MainBest;
