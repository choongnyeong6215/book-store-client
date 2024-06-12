import useTimeout from "@/hooks/useTimeout";
import useToastStore, { IToast } from "@/store/toastStore";
import { useState } from "react";
import { FaBan, FaInfoCircle, FaPlus } from "react-icons/fa";
import styled from "styled-components";

export const TOAST_REMOVE_DELAY = 3000;

const Toast = ({ id, message, type }: IToast) => {
  const removeToast = useToastStore((state) => state.removeToast);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleRemoveToast = () => {
    setIsFadingOut(true);
  };

  useTimeout(handleRemoveToast, TOAST_REMOVE_DELAY);

  const handleAnimataionEnd = () => {
    if (isFadingOut) {
      removeToast(id);
    }
  };

  return (
    <ToastStyle
      className={isFadingOut ? "fade-out" : "fade-in"}
      onAnimationEnd={handleAnimataionEnd}
    >
      <p>
        {type === "info" && <FaInfoCircle />}
        {type === "error" && <FaBan />}
      </p>
      <button onClick={handleRemoveToast}>
        <FaPlus />
      </button>
      <p>{message}</p>
    </ToastStyle>
  );
};

const ToastStyle = styled.div`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.fade-in {
    animation: fade-in 0.3s ease-in-out forwards;
  }

  &.fade-out {
    animation: fade-out 0.3s ease-in-out forwards;
  }

  background-color: ${({ theme }) => theme.color.backgrounbd};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  display: flex;
  justify-content: space-around;
  align-items: start;
  gap: 24px;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  p {
    color: ${({ theme }) => theme.color.text};
    line-height: 1;
    margin: 0;
    flex: 1;
    display: flex;
    align-items: end;
    gap: 4px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;

    svg {
      transform: translate(45deg);
    }
  }
`;

export default Toast;
