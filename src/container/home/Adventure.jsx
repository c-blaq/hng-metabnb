import React from "react";
import NFTS from "../../nfts";
import NftCard from "../../component/NftCard";

const Adventure = () => {
  return (
    <div>
      <h2>Inspiration for your next adventure</h2>
      <div>
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
