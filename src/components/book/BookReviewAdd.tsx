import { IBookReviewItemWrite } from "@/models/book.model";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button";

interface IBookReviewAddProps {
  onAdd: (data: IBookReviewItemWrite) => void;
}

const BookReviewAdd = ({ onAdd }: IBookReviewAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBookReviewItemWrite>();

  return (
    <BookReviewAddStyle>
      <form onSubmit={handleSubmit(onAdd)}>
        <fieldset>
          <textarea
            {...register("content", { required: true, valueAsNumber: true })}
          ></textarea>
          {errors.content && (
            <p className="error-text">리뷰 내용을 입력해 주세요.</p>
          )}
        </fieldset>
        <div className="submit">
          <fieldset>
            <select {...register("score", { required: true })}>
              <option value="1">1점</option>
              <option value="2">2점</option>
              <option value="3">3점</option>
              <option value="4">4점</option>
              <option value="5">5점</option>
            </select>
          </fieldset>
          <Button size="medium" schema="primary">
            작성하기
          </Button>
        </div>
      </form>
    </BookReviewAddStyle>
  );
};

const BookReviewAddStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 6px;

    fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: end;
      gap: 12px;

      .error-text {
        color: red;
        margin: 0;
        padding: 0;
      }

      textarea {
        width: 100%;
        height: 100px;
        resize: none;
        border-radius: ${({ theme }) => theme.borederRadius.default};
        border: 1px solid ${({ theme }) => theme.color.border};
        padding: 12px;
      }
    }
  }

  .submit {
    display: flex;
    justify-content: end;
  }
`;

export default BookReviewAdd;
