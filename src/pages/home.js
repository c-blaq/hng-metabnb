import React from "react";
import AboutMetabnb from "../container/home/AboutMetabnb";
import Adventure from "../container/home/Adventure";
import Intro from "../container/home/Intro";
import NftToken from "../container/home/NftToken";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <Intro />
      <NftToken />
      <Adventure />
      <AboutMetabnb />
    </PageLayout>
  );
};

export default Home;
