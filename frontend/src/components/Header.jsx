import { useState } from "react";
import { Link } from "react-router-dom";

import Image from "@assets/logoName.png";
import DarkImage from "@assets/darkLogoName.png";

const THEME_LIGHT = "light";
const THEME_DARK = "dark";

function Header() {
  const [colorTheme, setColorTheme] = useState(THEME_LIGHT);

  const onToggleDark = () => {
    document.documentElement.classList.toggle(THEME_DARK);
    document.documentElement.classList.toggle(THEME_LIGHT);
    setColorTheme(colorTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 w-100% z-50">
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

        <button
          id="theme-toggle"
          type="button"
          className="fixed transition-all duration-300 border-solid border-2 border-gray-700  dark:border-gray-200  top-4 right-4 text-gray-800 dark:text-yellow-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-900 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2.5"
          onClick={onToggleDark}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {colorTheme === THEME_DARK ? (
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            ) : (
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
