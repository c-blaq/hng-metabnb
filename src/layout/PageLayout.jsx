import React from "react";
import Header from "../component/Header";

const PageLayout = ({ children }) => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
