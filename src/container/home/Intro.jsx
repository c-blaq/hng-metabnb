import React from "react";

const Intro = () => {
  return (
    <section className="flex flex-col text-black md:flex-row justify-between items-center mt-11 sm:mt-24 lg:mt-0 lg:pt-40 px-4 sm:px-6 lg:px-20 xl:px-[100px]">
      <div className="lg:w-[55%]">
        <h1 className="text-3xl lg:text-[45px] xl:text-[56px] lg:!leading-[65px]">
          Rent a <span className="text-primary font-bold">Place</span> away from{" "}
          <span className="text-primary font-bold .bg-linear-gradient">
            Home
          </span>{" "}
          in the{" "}
          <span className="text-primary font-bold .bg-linear-gradient">
            Metaverse
          </span>
        </h1>

        <p className="text-base sm:text-xl xl:text-2xl leading-9 mt-6 mb-8 md:mt-10 md:mb-12 pr-[10px]">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="flex h-10 md:h-14">
          <input
            type="text"
            placeholder="Search for location"
            className="border border-[#A3A3A3] rounded-tl-lg rounded-bl-lg pl-4 h-full w-3/5"
          />
          <button className="bg-linear-gradient h-full w-[35.5%]">
            Search
          </button>
        </div>
      </div>

      <div className="flex mt-12 md:mt-0 gap-2 md:w-1/2 lg:w-auto shrink-0 relative">
        <div className="flex flex-col gap-2 relative top-8 md:top-12">
          <img
            src={"/assets/images/nft-1.png"}
            alt="NFT"
            className="rounded-2xl"
          />
          <img
            src={"/assets/images/nft-2.png"}
            alt="NFT"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 relative md:-top-16">
          <img
            src={"/assets/images/nft-3.png"}
            alt="NFT"
            className="rounded-2xl"
          />
          <img
            src={"/assets/images/nft-4.png"}
            alt="NFT"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
