import React from "react";

const AboutMetabnb = () => {
  return (
    <div className="bg-linear-gradient relative overflow-hidden gap-4 pb-1 flex flex-row px-4 sm:px-6 lg:px-20 xl:px-[100px] items-center justify-between">
      <div className="absolute px-4 flex flex-col justify-center bg-modalBg top-0 left-0 right-0 bottom-0 sm:bg-inherit sm:block sm:w-1/2 sm:relative z-30 lg:max-w-md">
        <h2 className="font-bold  text-2xl sm:text-3xl lg:text-5xl">
          Metabnb NFTs
        </h2>
        <p className="font-bold sm:font-normal sm:text-lg mt-4 mb-8 sm:mt-6 sm:mb-10 lg:mt-9 lg:mb-14">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <a
          href="/"
          className="py-2 px-4 rounded-md w-1/2 text-center sm:w-auto text-sm sm:text-base sm:py-[14px] sm:px-8 sm:rounded-lg bg-white text-primary"
        >
          Learn more
        </a>
      </div>

      <div className="w-full sm:w-1/2 xl:w-auto py-[100px]">
        <img src="/assets/images/rotated.png" alt="" />
      </div>
    </div>
  );
};

export default AboutMetabnb;
