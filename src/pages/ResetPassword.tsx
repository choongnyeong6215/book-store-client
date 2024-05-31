import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ISignUpProps, SignUpStyle } from "./SignUp";
import { useState } from "react";
import { resetPassword, resetRequest } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";

export interface IResetPasswordProps {
  email: string;
  password: string;
}

const ResetPassword = () => {
  const showAlert = useAlert();
  const navigate = useNavigate();
  const [resetRequested, setResetRequested] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpProps>();

  const onSubmit = (data: ISignUpProps) => {
    if (resetRequested) {
      // 초기화
      resetPassword(data).then(() => {
        showAlert("비밀번호가 초기화 되었습니다.");
        navigate("/login");
      });
    } else {
      // 초기화 요청
      resetRequest(data).then(() => {
        setResetRequested(true);
      });
    }
  };

  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
      <SignUpStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              inputType="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          {resetRequested && (
            <fieldset>
              <InputText
                placeholder="비밀번호"
                inputType="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="error-text">비밀번호를 입력해주세요.</p>
              )}
            </fieldset>
          )}
          <fieldset>
            <Button type="submit" size="medium" schema="primary">
              {resetRequested ? "비밀번호 초기화" : "초기화 요청"}
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignUpStyle>
    </>
  );
};

export default ResetPassword;
