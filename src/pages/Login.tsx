import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignUpStyle } from "./SignUp";
import { useAuthStore } from "../store/authStore";

export interface ISignUpProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const { isLoggedIn, storeLogin, storeLogout } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpProps>();

  const onSubmit = (data: ISignUpProps) => {
    login(data).then(
      (res) => {
        // 로그인 상태로 변경
        storeLogin(res.token);

        showAlert("로그인 완료되었습니다.");
        navigate("/");
      },
      // 로그인 실패 처리
      (error) => {
        showAlert("로그인에 실패했습니다.");
      }
    );
  };

  return (
    <>
      <Title size="large">로그인</Title>
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
          <fieldset>
            <Button type="submit" size="medium" schema="primary">
              로그인
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

export default Login;
