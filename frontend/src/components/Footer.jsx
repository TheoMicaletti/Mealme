import React from "react";
import Image from "@assets/logo.png";

function Footer() {
  return (
    <div>
      <footer className="absolute inset-x-0 bottom-0 p-3 bg-cyan-900 dark:bg-zinc-800 w-100% flex items-center justify-between border-solid border-t-4 border-green-500 dark:border-yellow-500">
        <span className="flex items-center text-white">
          {" "}
          <img className="w-8 mr-3" src={Image} alt="logo" /> ©2022 Mealme™
        </span>
        <ul className="text-sm text-white text-right">
          <li>
            <a
              href="https://www.facebook.com"
              className="mr-4 underline hover:font-bold"
            >
              Legal
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              className="mr-4 underline hover:font-bold"
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
