import React from "react";
import Intro from "../container/home/Intro";
import NftToken from "../container/home/NftToken";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <Intro />
      <NftToken />
    </PageLayout>
  );
};

export default Home;
