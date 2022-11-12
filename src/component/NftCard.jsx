import React from "react";

const NftCard = ({ image, title, price, distance, availability }) => {
  const ratingStars = [
    "/assets/images/star.png",
    "/assets/images/star.png",
    "/assets/images/star.png",
    "/assets/images/star.png",
    "/assets/images/star.png",
  ];

  return (
    <div className="border border-[#D7D7D7] p-4 rounded-2xl text-xs">
      <div className="mb-4">
        <img
          src={image}
          alt={`${title} nft`}
          className="rounded-2xl object-cover w-full"
        />
      </div>

      <div className="flex justify-between gap-1 items-center">
        <h3>{title}</h3>
        <strong>{price}</strong>
      </div>

      <div className="flex justify-between gap-1 items-center my-2">
        <span>{distance}</span>
        <span>{availability}</span>
      </div>

      <div className="flex items-center gap-2">
        {ratingStars.map((star) => (
          <img src={star} alt="ratings" />
        ))}
      </div>
    </div>
  );
};

export default NftCard;
