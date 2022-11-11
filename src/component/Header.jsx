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
    <header>
      <div>
        <img src={homeIcon} alt="home icon" />
        <img src={metabnbLogo} alt="metabnb Logo" />
      </div>

      <nav>
        {NAV_ITEMS.map(({ title, path }) => (
          <a href={path}>{title}</a>
        ))}
      </nav>

      <div>
        <button>Connect wallet</button>
      </div>
    </header>
  );
};

export default Header;
