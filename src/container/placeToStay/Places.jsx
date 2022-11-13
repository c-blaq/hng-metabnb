import React from "react";
import NftCard from "../../component/NftCard";
import NFTS from "../../nfts";
import Locations from "./Locations";

const Places = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 xl:px-[100px]">
      <Locations />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-7 md:mb-10 lg:mb-14 xl:mb-24">
        {NFTS.map(({ image, title, price, distance, availability, id }) => (
          <NftCard
            key={id}
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

export default Places;
