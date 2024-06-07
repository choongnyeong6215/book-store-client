import { login, resetPassword, resetRequest, signUp } from "@/api/auth.api";
import { ISignUpProps } from "@/pages/SignUp";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAuth = () => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  // 상태
  const { storeLogin, storeLogout, isLoggedIn } = useAuthStore();

  // 메서드
  const userLogin = (data: ISignUpProps) => {
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

  const userSignUp = (data: ISignUpProps) => {
    signUp(data).then((res) => {
      showAlert("회원가입이 완료되었습니다.");
      navigate("/login");
    });
  };

  const userResetPassword = (data: ISignUpProps) => {
    // 초기화
    resetPassword(data).then(() => {
      showAlert("비밀번호가 초기화 되었습니다.");
      navigate("/login");
    });
  };

  const [resetRequested, setResetRequested] = useState(false);

  const userResetRequest = (data: ISignUpProps) => {
    // 초기화 요청
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  // 리턴
  return {
    userLogin,
    userSignUp,
    userResetPassword,
    userResetRequest,
    resetRequested,
  };
};
