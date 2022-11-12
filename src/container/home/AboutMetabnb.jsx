import React from "react";

const AboutMetabnb = () => {
  return (
    <div className="bg-linear-gradient overflow-hidden gap-4 pb-1 flex flex-row px-4 sm:px-6 lg:px-20 xl:px-[100px] items-center justify-between">
      <div className="absolute sm:relative z-30 lg:max-w-md">
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
          className="py-2 px-4 rounded-md text-sm sm:text-base sm:py-[14px] sm:px-8 sm:rounded-lg bg-white text-primary"
        >
          Learn more
        </a>
      </div>

      <div className="w-5/6 shrink-0 top-0 mx-auto sm:w-1/2 xl:w-2/3 ">
        <img
          src="/assets/images/meta-1.png"
          alt="metabnb nft"
          className="relative ml-auto w-60 sm:w-auto rounded-[10px] rotate-[17.6deg] top-16 left-8 md:-left-8 md:top-52 "
        />
        <img
          src="/assets/images/meta-2.png"
          alt="metabnb nft"
          className="relative ml-auto w-60 sm:w-auto  rounded-[10px]  -rotate-[26deg] top-0 md:top-32 md:right-72"
        />
        <img
          src="/assets/images/meta-3.png"
          alt="metabnb nft"
          className="relative ml-auto w-60 sm:w-auto rounded-[10px] -rotate-[8.76deg] -right-10 bottom-24 md:right-3 md:bottom-20"
        />
      </div>
    </div>
  );
};

export default AboutMetabnb;
