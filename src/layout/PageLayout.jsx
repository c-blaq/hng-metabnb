import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const PageLayout = ({ children }) => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
