import { Link } from "react-router-dom";
import React from "react";
import Image from "@assets/logoName.png";
import DarkImage from "@assets/darkLogoName.png";
import LoginForm from "./LoginForm";

function Header({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 w-100% z-40">
        <nav className="backdrop-blur-xl bg-transparent h-18" />
        <Link to="/">
          <img
            className="hover:cursor-pointer fixed top-0 left-0 right-0 w-52 m-2 dark:hidden"
            src={Image}
            alt="LogoName"
          />
          <img
            className="hover:cursor-pointer fixed top-0 left-0 right-0 w-50 m-2 hidden dark:block"
            src={DarkImage}
            alt="LogoName"
          />
        </Link>
      </div>
      {!LoginForm ? (
        <div>
          <p>Salut</p>
        </div>
      ) : (
        <div className="flex flex-row z-40 fixed top-4 right-4">
          <button
            id="login"
            type="button"
            onClick={handleClick}
            className="py-2 rounded-3xl pl-4 pr-2 text-mada text-xl bg-[#8ddc93] dark:bg-[#ffdb20] font-bold drop-shadow-md"
          >
            Login
            <span className="ml-2 bg-gray-800 rounded-full px-2 py-1.5 inline dark:hidden">
              👩
            </span>
            <span className="ml-2 bg-zinc-800 rounded-full px-2 py-1.5 hidden dark:inline">
              👱‍♂️
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
