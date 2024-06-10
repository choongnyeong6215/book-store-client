import styled from "styled-components";
import { IBookReviewItem, IBookReviewItemWrite } from "@/models/book.model";
import BookReviewItem from "./BookReviewItem";
import BookReviewAdd from "./BookReviewAdd";

interface IBookReviewProps {
  reviews: IBookReviewItem[];
  onAdd: (data: IBookReviewItemWrite) => void;
}

const BookReview = ({ reviews, onAdd }: IBookReviewProps) => {
  return (
    <BookReviewStyle>
      <BookReviewAdd onAdd={onAdd} />
      {reviews.map((review) => (
        <BookReviewItem review={review} />
      ))}
    </BookReviewStyle>
  );
};

const BookReviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default BookReview;
