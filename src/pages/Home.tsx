import styled from "styled-components";

const Home = () => {
  return <HomeStyle>Home</HomeStyle>;
};

const HomeStyle = styled.div`
  color: ${({ theme }) => theme.$1};
`;

export default Home;
