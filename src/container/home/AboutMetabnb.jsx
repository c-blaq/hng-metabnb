import React from "react";

const AboutMetabnb = () => {
  return (
    <div className="bg-linear-gradient gap-4 pb-1 flex lg:px-[100px] items-center justify-between">
      <div className="lg:max-w-md">
        <h2 className="font-bold lg:text-5xl">Metabnb NFTs</h2>
        <p className="text-lg mt-9 mb-14">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <a href="/" className="py-[14px] px-8 rounded-lg bg-white text-primary">
          Learn more
        </a>
      </div>

      <div className="relative w-2/3 ">
        <img
          src="/assets/images/meta-1.png"
          alt="metabnb nft"
          className="relative ml-auto rounded-[10px] rotate-[17.6deg] top-48 right-12"
        />
        <img
          src="/assets/images/meta-2.png"
          alt="metabnb nft"
          className="relative ml-auto  rounded-[10px] -rotate-[26deg] top-32 right-72"
        />
        <img
          src="/assets/images/meta-3.png"
          alt="metabnb nft"
          className="relative ml-auto  rounded-[10px] -rotate-[8.76deg] right-3 bottom-20"
        />
      </div>
    </div>
  );
};

export default AboutMetabnb;
