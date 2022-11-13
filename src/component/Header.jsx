import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";

const Header = () => {
  const NAV_ITEMS = [
    { title: "Home", path: "/" },
    { title: "Place to stay", path: "/place-to-stay" },
    { title: "NFTS", path: "/" },
    { title: "Community", path: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <header className="flex justify-between relative md:overflow-hidden gap-2 lg:gap-0 items-center pt-5 sm:pt-8 lg:pt-11 px-4 sm:px-6 lg:px-20 xl:px-[100px]">
      <div className="flex items-end gap-[2px]">
        <img
          src={"/assets/images/metabnb-logo.png"}
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
        <nav className="flex flex-col md:flex-row lg:text-xl text-black items-center gap-6 xl:gap-12 ">
          {NAV_ITEMS.map(({ title, path }, index) => (
            <Link to={path} key={index}>
              {title}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="w-1/2 mx-auto text-sm mt-6 md:m-0 md:text-base md:w-auto md:px-4 lg:px-[26.5px] rounded-[10px] py-[14px] bg-linear-gradient"
        >
          Connect wallet
        </button>

        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </header>
  );
};

export default Header;
