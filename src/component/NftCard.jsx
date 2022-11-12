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
    <div>
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <strong>{price}</strong>
      </div>

      <div>
        <span>{distance}</span>
        <span>{availability}</span>
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
