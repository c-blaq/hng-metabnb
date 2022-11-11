import React from "react";
import Header from "../component/Header";

const PageLayout = ({ children }) => {
  return (
    <div className=" max-w-[1440px]">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
