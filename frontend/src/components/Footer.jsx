import React from "react";
import Image from "@assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="text-mada inset-x-0 bottom-0 p-1 bg-gradient-to-r from-[#8ddc93] to-[#ffdb20] w-100%" />
      <footer className="text-mada inset-x-0 bottom-0 p-3 bg-gray-800 dark:bg-zinc-800 w-100% flex items-center justify-between">
        <span className="flex items-center text-white">
          {" "}
          <img className="w-8 mr-3" src={Image} alt="logo" /> ©2022 Mealme™
        </span>
        <ul className="text-sm text-white text-right">
          <li>
            <Link to="/legal">
              <div className="mr-4 underline hover:font-bold decoration-[#8ddc93] dark:decoration-[#ffdb20] decoration-2">
                Legal
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <div className="mr-4 underline hover:font-bold decoration-[#8ddc93] dark:decoration-[#ffdb20] decoration-2">
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
