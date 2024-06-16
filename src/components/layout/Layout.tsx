import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <LayoutStyle>{children}</LayoutStyle>
      <Footer></Footer>
    </>
  );
};

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  padding: 20px 0;

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 20px 12px;
  }
`;

export default Layout;
