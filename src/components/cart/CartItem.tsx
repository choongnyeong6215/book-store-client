import styled from "styled-components";
import { ICart } from "../../models/cart.model";
import Button from "../common/Button";
import Title from "../common/Title";
import { formatNumber } from "../../utils/format";
import CheckIconButton from "./CheckIconButton";
import { useMemo } from "react";
import { useAlert } from "../../hooks/useAlert";

interface ICartItemProps {
  cart: ICart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

const CartItem = ({
  cart,
  checkedItems,
  onCheck,
  onDelete,
}: ICartItemProps) => {
  const { showConfirm } = useAlert();

  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  const hnadleCheck = () => {
    onCheck(cart.id);
  };

  const handleDelete = () => {
    showConfirm("정말 삭제하시겠습니까?", () => {
      onDelete(cart.id);
    });
  };

  return (
    <CartItemStyle>
      <div className="info">
        <div className="check">
          <CheckIconButton isChecked={isChecked} onCheck={hnadleCheck} />
        </div>
        <div>
          <h1>
            <Title size="medium" color="text">
              {cart.title}
            </Title>
            <p className="summary">{cart.summary}</p>
            <p className="prcice">{cart.summary}</p>
            <p className="price">{formatNumber(cart.price)} 원</p>
            <p className="quantity">{cart.quantity} 권</p>
          </h1>
        </div>
      </div>
      <Button size="medium" schema="normal" onClick={handleDelete}>
        장바구니 삭제
      </Button>
    </CartItemStyle>
  );
};

const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border: ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 12px;

  .info {
    display: flex;
    align-items: start;
    flex: 1;

    .check {
      width: 40px;
      flex-shrink: 0;
    }

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;

export default CartItem;
