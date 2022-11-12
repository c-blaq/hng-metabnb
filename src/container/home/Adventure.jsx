import React from "react";
import NFTS from "../../nfts";
import NftCard from "../../component/NftCard";

const Adventure = () => {
  return (
    <div className="lg:mt-14 lg:mb-[53px] xl:px-[100px]">
      <h2 className="font-bold text-center lg:mb-11 lg:text-5xl">
        Inspiration for your next adventure
      </h2>
      <div className="grid grid-cols-4 gap-6">
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
