import React from "react";
import NFTS from "../../nfts";
import NftCard from "../../component/NftCard";

const Adventure = () => {
  return (
    <div className="my-8 sm:my-10 lg:mt-14 lg:mb-[53px] px-10 lg:px-20 xl:px-[100px]">
      <h2 className="font-bold text-center mb-4 text-2xl sm:mb-6 sm:text-3xl md:text-4xl md:mb-7 lg:mb-11 lg:text-5xl">
        Inspiration for your next adventure
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {NFTS.slice(0, 8)
          .reverse()
          .map(({ image, title, price, distance, availability }) => (
            <NftCard
              image={image}
              title={title}
              price={price}
              distance={distance}
              availability={availability}
            />
          ))}
      </div>
    </div>
  );
};

export default Adventure;
