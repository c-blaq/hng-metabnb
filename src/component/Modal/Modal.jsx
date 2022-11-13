import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineChevronRight } from "react-icons/hi";

const Modal = () => {
  const MODAL_WALLETS = [
    {
      walletName: "Metamask",
      logo: "/assets/images/metamask-wallet.png",
    },
    {
      walletName: "WalletConnect",
      logo: "/assets/images/wallet-connect.png",
    },
  ];
  return (
    <div className="fixed bg-modalBg  z-[100] top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="bg-white px-4 pb-6 md:px-8 sm:pb-8 rounded-2xl max-w-[600px] w-5/6 sm:w-7/12">
        <div className="flex justify-between items-center border-b border-[#CFD8DC] p-4 md:py-6 md:-mx-8 md:px-8">
          <h2 className="text-black font-bold md:text-2xl">Connect Wallet</h2>
          <MdOutlineClose />
        </div>
        <div className="mt-8">
          <h3>Choose your preferred wallet</h3>
          {MODAL_WALLETS.map(({ walletName, logo }, index) => (
            <div key={index} className="flex justify-between items-center mt-4">
              <div className="flex items-center font-semibold text-lg gap-2 lg:gap-4">
                <img
                  src={logo}
                  alt={walletName + "logo"}
                  className="w-6 h-6 sm:h-10 sm:w-10 lg:w-auto lg:h-auto"
                />
                <h3>{walletName}</h3>
              </div>
              <HiOutlineChevronRight />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
