import React from "react";
import mbtokeLogo from "../../assets/images/mbtoken-logo.png";
import metamaskLogo from "../../assets/images/metamask-logo.png";
import openseaLogo from "../../assets/images/opensea-logo.png";

const NftToken = () => {
  return (
    <div className="bg-linear-gradient flex justify-between px-2 sm;gap-6 md:gap-0 md:px-20 lg:pl-36 lg:pr-32 mt-24 py-2">
      <div className="flex items-center font-poppins">
        <img
          src={mbtokeLogo}
          alt="metamask logo"
          className="w-9 h-9 sm:w-auto sm:h-auto"
        />
        <h2 className="tracking-wide text-xs sm:text-2xl lg:text-4xl">
          MBToken
        </h2>
      </div>

      <div className="flex items-center gap-1 sm:gap-3">
        <img
          src={metamaskLogo}
          alt="metamask logo"
          className="w-5 h-5 sm:w-9 sm:h-9"
        />
        <h2 className="text-xs sm:text-2xl tracking-wide md:scale-y-110 my-auto lg:tracking-[8px] lg:scale-y-[1.8]">
          METAMASK
        </h2>
      </div>

      <div className="flex items-center gap-1 sm:gap-3 font-poppins">
        <img
          src={openseaLogo}
          alt="metamask logo"
          className="w-5 h-5 sm:w-auto sm:h-auto"
        />
        <h2 className="text-xs sm:text-2xl lg:text-3xl">OpenSea</h2>
      </div>
    </div>
  );
};

export default NftToken;
