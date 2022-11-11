import React from "react";
import nft1 from "../../assets/images/nft-1.png";
import nft2 from "../../assets/images/nft-2.png";
import nft3 from "../../assets/images/nft-3.png";
import nft4 from "../../assets/images/nft-4.png";

const Intro = () => {
  return (
    <section className="flex justify-between items-center lg:mb-16 lg:pt-40 lg:px-[100px]">
      <div className="max-w-[646px]">
        <h1 className="lg:text-5xl 2xl:text-[56px] !leading-[65px]">
          Rent a <span className="font-bold">Place</span> away from{" "}
          <span className="font-bold .bg-linear-gradient">Home</span> in the{" "}
          <span className="font-bold .bg-linear-gradient">Metaverse</span>
        </h1>
        <p className="lg:text-2xl mt-6 mb-12 pr-[10px]">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="flex h-14">
          <input
            type="text"
            placeholder="Search for location"
            className="border border-[#A3A3A3] rounded-tl-lg rounded-bl-rounded pl-4 h-full w-3/5"
          />
          <button className="bg-linear-gradient h-full w-[35.5%]">
            Search
          </button>
        </div>
      </div>

      <div className="flex gap-2 shrink-0 relative">
        <div className="flex flex-col gap-2 relative top-12">
          <img src={nft1} alt="NFT" className="rounded-2xl" />
          <img src={nft2} alt="NFT" className="rounded-2xl" />
        </div>
        <div className="flex flex-col gap-2 relative -top-16">
          <img src={nft3} alt="NFT" className="rounded-2xl" />
          <img src={nft4} alt="NFT" className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
