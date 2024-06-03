import styled from "styled-components";
import { IBookDetail } from "../../models/book.model";
import InputText from "../common/InputText";
import Button from "../common/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useBook } from "../../hooks/useBook";

interface IAddToCartProps {
  book: IBookDetail;
}

interface IAddToCartStyleProps {
  $cartAdded: boolean;
}

const AddToCart = ({ book }: IAddToCartProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { cartAdded, addToCart } = useBook(book.id.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  return (
    <AddToCartStyle $cartAdded={cartAdded}>
      <div>
        <InputText type="number" value={quantity} onChange={handleChange} />
        <Button size="medium" schema="normal" onClick={handleIncrease}>
          +
        </Button>
        <Button size="medium" schema="normal" onClick={handleDecrease}>
          -
        </Button>
      </div>
      <Button
        size="medium"
        schema="primary"
        onClick={() => addToCart(quantity)}
      >
        장바구니 담기
      </Button>
      <div className="added">
        <p>장바구니에 추가되었습니다.</p>
        <Link to="/carts">장바구니로 이동</Link>
      </div>
    </AddToCartStyle>
  );
};

const AddToCartStyle = styled.div<IAddToCartStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .added {
    position: absolute;
    right: 0;
    bottom: -90px;
    background: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 8px 12px;
    opacity: ${({ $cartAdded }) => ($cartAdded ? "1" : "0")};
    transition: all 0.5s ease;

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;

export default AddToCart;
