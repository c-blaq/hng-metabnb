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
    <div>
      <div>
        <div>
          <h2>Connect Wallet</h2>
          <MdOutlineClose />
        </div>
        <div>
          <h3>Choose your preferred wallet</h3>
          {MODAL_WALLETS.map(({ walletName, logo }, index) => (
            <div key={index}>
              <div>
                <img src={logo} alt="" />
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
