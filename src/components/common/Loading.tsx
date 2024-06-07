import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingStyle>
      <FaSpinner />
    </LoadingStyle>
  );
};

const LoadingStyle = styled.div`
  padding: 40px;
  text-align: center;

  svg {
    width: 70px;
    height: 70px;
    fill: #ccc;
  }
`;

export default Loading;
