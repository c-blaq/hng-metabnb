import React from "react";
import star from "../assets/images/star.png";

const NftCard = () => {
  const ratingStars = ["star", "star", "star", "star", "star"];

  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>{title}</h3>
        <strong>{price}</strong>
      </div>

      <div>
        <span>{distance}</span>
        <span>{availabilty}</span>
      </div>

      <div>
        {ratingStars.map((star) => (
          <img src={star} alt="ratings" />
        ))}
      </div>
    </div>
  );
};

export default NftCard;
