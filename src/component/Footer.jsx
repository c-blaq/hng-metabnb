import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src="/assets/images/metabnb-footer-logo.png" alt="" />
        </div>
        <div>
          <div>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
          <span>2022 Metabnb</span>
        </div>
      </div>

      <div>
        <h2>Community</h2>
        <nav>
          <a href="/">NFt</a>
          <a href="/">Tokens</a>
          <a href="/">Landlords</a>
          <a href="/">Discord</a>
        </nav>
      </div>

      <div>
        <h2>Prices</h2>
        <nav>
          <a href="/">Castle</a>
          <a href="/">Farms</a>
          <a href="/">Beach</a>
          <a href="/">Learn More</a>
        </nav>
      </div>

      <div>
        <h2>About us</h2>
        <nav>
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
