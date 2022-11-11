import React from "react";
import Header from "../component/Header";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
