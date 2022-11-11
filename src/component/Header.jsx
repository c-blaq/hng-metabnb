import React from "react";
import homeIcon from "../assets/images/icon-home.png";
import metabnbLogo from "../assets/images/metabnb.png";

const Header = () => {
  const NAV_ITEMS = [
    { title: "Home", path: "/" },
    { title: "Place to stay", path: "/place-to-stay" },
    { title: "NFTS", path: "/" },
    { title: "Community", path: "/" },
  ];
  return (
    <header className="flex justify-between items-center lg:pt-11">
      <div className="flex items-end gap-[2px]">
        <img src={homeIcon} alt="home icon" className="w-10 h-9" />
        <img src={metabnbLogo} alt="metabnb Logo" className="h-8" />
      </div>

      <nav className="flex gap-12">
        {NAV_ITEMS.map(({ title, path }) => (
          <a href={path} className="text-xl">
            {title}
          </a>
        ))}
      </nav>

      <div>
        <button className="lg:px-[26.5px] rounded-[10px] lg:py-[14px] bg-linear-gradient">
          Connect wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
