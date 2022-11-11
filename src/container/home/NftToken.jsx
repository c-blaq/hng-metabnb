import React from "react";
import mbtokeLogo from "../../assets/images/mbtoken-logo.png";
import metamaskLogo from "../../assets/images/metamask-logo.png";
import openseaLogo from "../../assets/images/opensea-logo.png";

const NftToken = () => {
  return (
    <div className="bg-linear-gradient flex justify-between pl-36 pr-32 mt-24 py-2">
      <div className="flex items-center font-poppins">
        <img src={mbtokeLogo} alt="metamask logo" />
        <h2 className="tracking-wide text-4xl">MBToken</h2>
      </div>

      <div className="flex items-center gap-3">
        <img src={metamaskLogo} alt="metamask logo" className=" w-9 h-9" />
        <h2 className="text-2xl tracking-[8px] scale-y-[1.8]">METAMASK</h2>
      </div>

      <div className="flex items-center gap-3 font-poppins">
        <img src={openseaLogo} alt="metamask logo" />
        <h2 className="text-3xl">OpenSea</h2>
      </div>
    </div>
  );
};

export default NftToken;
