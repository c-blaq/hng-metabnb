import React from "react";
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
    </PageLayout>
  );
};

export default Home;
