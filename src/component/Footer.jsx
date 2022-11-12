import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footerBg pt-16 pb-6 text-white  justify-between flex px-4 sm:px-6 lg:px-20 xl:pl-[100px] xl:pr-52">
      <div className="flex flex-col gap-24 justify-between">
        <div>
          <img src="/assets/images/metabnb-footer-logo.png" alt="" />
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex gap-9 ">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
          <span>2022 Metabnb</span>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold">Community</h2>
        <nav className="flex flex-col gap-3 text-sm text-[#F1F3F9]">
          <a href="/">NFt</a>
          <a href="/">Tokens</a>
          <a href="/">Landlords</a>
          <a href="/">Discord</a>
        </nav>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold">Prices</h2>
        <nav className="flex flex-col gap-3 text-sm text-[#F1F3F9]">
          <a href="/">Castle</a>
          <a href="/">Farms</a>
          <a href="/">Beach</a>
          <a href="/">Learn More</a>
        </nav>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold">About us</h2>
        <nav className="flex flex-col gap-3 text-sm text-[#F1F3F9]">
          <a href="/">Road map</a>
          <a href="/">Creators</a>
          <a href="/">Career</a>
          <a href="/">Contact us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
