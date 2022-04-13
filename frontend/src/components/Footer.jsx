import React from "react";
import Image from "@assets/logo.png";

function Footer() {
  return (
    <div>
      <div className="text-mada inset-x-0 bottom-0 p-0.5 bg-gradient-to-r from-green-500 to-yellow-500 w-100%" />
      <footer className="text-mada inset-x-0 bottom-0 p-3 bg-gray-800 dark:bg-zinc-800 w-100% flex items-center justify-between">
        <span className="flex items-center text-white">
          {" "}
          <img className="w-8 mr-3" src={Image} alt="logo" /> ©2022 Mealme™
        </span>
        <ul className="text-sm text-white text-right">
          <li>
            <a
              href="https://www.facebook.com"
              className="mr-4 underline hover:font-bold decoration-green-500 dark:decoration-yellow-500 decoration-2"
            >
              Legal
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              className="mr-4 underline hover:font-bold decoration-green-500 dark:decoration-yellow-500 decoration-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
