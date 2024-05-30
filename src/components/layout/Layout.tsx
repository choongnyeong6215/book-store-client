import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
