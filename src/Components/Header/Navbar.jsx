import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Sun, Moon } from "lucide-react";
import logo from "../../assets/logo.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => setClick(!click);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleCloseMenu = () => {
      if (click) setClick(false);
    };

    window.addEventListener("scroll", handleCloseMenu);
    return () => window.removeEventListener("scroll", handleCloseMenu);
  }, [click]);

  const navItems = ["Home", "About", "Services", "Brand", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 text-black dark:text-white overflow-x-hidden">
      
      {/* Navbar Container */}
      <div className="flex justify-between items-center py-3 px-4 md:px-10 lg:px-20 border-b border-gray-200 dark:border-slate-800">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            className="cursor-pointer hover:opacity-80 transition-opacity flex items-center"
          >
            <img
              src={logo}
              alt="AdBase Creatives Logo"
              className="h-12 md:h-14 lg:h-16 object-cover"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-8 text-[18px]">
          {navItems.map((item, index) => (
            <Link key={index} to={item} spy={true} smooth={true}>
              <span className="cursor-pointer hover:text-fuchsia-600 border-b-2 border-transparent hover:border-fuchsia-600 transition">
                {item}
              </span>
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 transition-all duration-500 hover:rotate-180 hover:scale-110"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-500" />
            ) : (
              <Moon size={18} className="text-fuchsia-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-2xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="xl:hidden fixed top-[73px] left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl z-[9999] max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden transition-all duration-300">
          
          <ul className="flex flex-col items-center text-xl py-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item}
                spy={true}
                smooth={true}
                onClick={() => setClick(false)}
                className="w-full text-center"
              >
                <li className="my-3 py-2 text-gray-700 dark:text-gray-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition cursor-pointer">
                  {item}
                </li>
              </Link>
            ))}

            {/* Theme Toggle */}
            <div className="flex justify-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 transition-all duration-300 hover:scale-110"
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-fuchsia-500" />
                )}
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;