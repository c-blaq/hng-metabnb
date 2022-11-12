import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footerBg pt-16 pb-6 text-white text-center sm:text-left px-4 sm:px-6 lg:px-20 xl:pl-[100px] xl:pr-52">
      <div className="flex flex-col items-center gap-6 mb-4 sm:mb-7 lg:mb-9 sm:flex-row sm:items-stretch sm:justify-between">
        <div className="flex flex-col gap-6 md:gap-20 lg:gap-24 justify-between">
          <div>
            <img
              src="/assets/images/metabnb-footer-logo.png"
              alt="metabnb logo"
              className="h-4 sm:h-6 lg:h-8"
            />
          </div>

          <div className="flex gap-4 md:gap-9">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        <div>
          <h2 className="mb-4 md:mb-6 md:text-lg font-bold">Community</h2>
          <nav className="flex flex-col gap-2 sm:gap-3 text-sm text-[#F1F3F9]">
            <a href="/">NFt</a>
            <a href="/">Tokens</a>
            <a href="/">Landlords</a>
            <a href="/">Discord</a>
          </nav>
        </div>

        <div>
          <h2 className="mb-4 md:mb-6  md:text-lg font-bold">Prices</h2>
          <nav className="flex flex-col gap-2 sm:gap-3 text-sm text-[#F1F3F9]">
            <a href="/">Castle</a>
            <a href="/">Farms</a>
            <a href="/">Beach</a>
            <a href="/">Learn More</a>
          </nav>
        </div>

        <div>
          <h2 className="mb-4 md:mb-6  md:text-lg font-bold">About us</h2>
          <nav className="flex flex-col gap-2 sm:gap-3 text-sm text-[#F1F3F9]">
            <a href="/">Road map</a>
            <a href="/">Creators</a>
            <a href="/">Career</a>
            <a href="/">Contact us</a>
          </nav>
        </div>
      </div>

      <span>2022 Metabnb</span>
    </footer>
  );
};

export default Footer;
