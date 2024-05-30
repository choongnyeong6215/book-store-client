import { useRouteError } from "react-router-dom";

interface IRouteError {
  statusText?: string;
  message?: string;
}

const Error = () => {
  const error = useRouteError() as IRouteError;
  return (
    <div>
      <h1>오류가 발생했습니다.</h1>
      <p>다음과 같은 오류가 발생했습니다.</p>
      <p>{error.statusText}</p>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
