import React from "react";
import AboutMetabnb from "../container/home/AboutMetabnb";
import Adventure from "../container/home/Adventure";
import HeroSection from "../container/home/HeroSection";
import NftToken from "../container/home/NftToken";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <NftToken />
      <Adventure />
      <AboutMetabnb />
    </PageLayout>
  );
};

export default Home;
