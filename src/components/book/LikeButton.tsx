import styled from "styled-components";
import { IBookDetail } from "../../models/book.model";
import Button from "../common/Button";
import { FaHeart } from "react-icons/fa";

interface ILikeButtonProps {
  book: IBookDetail;
  onClick: () => void;
}

const LikeButton = ({ book, onClick }: ILikeButtonProps) => {
  return (
    <LikedButtonStyle
      size="medium"
      schema={book.liked ? "like" : "normal"}
      onClick={onClick}
    >
      <FaHeart />
      {book.likes}
    </LikedButtonStyle>
  );
};

const LikedButtonStyle = styled(Button)`
  display: flex;
  gap: 6px;

  svg {
    color: inherit;
    * {
      color: inherit;
    }
  }
`;

export default LikeButton;
