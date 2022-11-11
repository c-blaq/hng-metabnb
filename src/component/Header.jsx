import React, { useState } from "react";
import homeIcon from "../assets/images/icon-home.png";
import metabnbLogo from "../assets/images/metabnb.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const NAV_ITEMS = [
    { title: "Home", path: "/" },
    { title: "Place to stay", path: "/place-to-stay" },
    { title: "NFTS", path: "/" },
    { title: "Community", path: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between relative gap-2 lg:gap-0 items-center pt-5 sm:pt-8 lg:pt-11 px-4 sm:px-6 lg:px-20 xl:px-[100px]">
      <div className="flex items-end gap-[2px]">
        <img
          src={homeIcon}
          alt="home icon"
          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-9"
        />
        <img
          src={metabnbLogo}
          alt="metabnb Logo"
          className="h-4 sm:h-6 lg:h-8"
        />
      </div>

      <button
        className="block md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <div
        className={`${
          isOpen
            ? "flex flex-col absolute pt-4 bg-white z-50  w-full h-screen right-0 top-full "
            : "hidden"
        } md:flex md:items-center md:justify-evenly  md:flex-1 md:-mr-20 xl:-mr-44`}
      >
        <nav className="flex flex-col md:flex-row items-center gap-6 xl:gap-12 ">
          {NAV_ITEMS.map(({ title, path }) => (
            <a href={path} className="md:text-xl">
              {title}
            </a>
          ))}
        </nav>
        <button className="w-1/2 mx-auto  text-sm mt-6 md:m-0 md:text-base md:w-auto md:px-4 lg:px-[26.5px] rounded-[10px] py-[14px] bg-linear-gradient">
          Connect wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
