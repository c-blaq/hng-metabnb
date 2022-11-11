import React from "react";
import nft1 from "../../assets/images/nft-1.png";
import nft2 from "../../assets/images/nft-2.png";
import nft3 from "../../assets/images/nft-3.png";
import nft4 from "../../assets/images/nft-4.png";

const Intro = () => {
  return (
    <section>
      <div>
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div>
          <input type="text" placeholder="Search for location" />
          <button>Search</button>
        </div>
      </div>

      <div>
        <div>
          <img src={nft1} alt="NFT" />
          <img src={nft2} alt="NFT" />
        </div>
        <div>
          <img src={nft3} alt="NFT" />
          <img src={nft4} alt="NFT" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
