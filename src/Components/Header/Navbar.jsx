import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Sun, Moon } from "lucide-react";

function Navbar() {
  const [click, setClick] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => setClick(!click);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleCloseMenu = () => {
      if (click) setClick(false);
    };

    window.addEventListener('scroll', handleCloseMenu);
    
    return () => {
      window.removeEventListener('scroll', handleCloseMenu);
    };
  }, [click]);

  const navItems = ["Home", "About", "Services", "Client Works", "Contact"];

  const content = (
    <div className="lg:hidden fixed top-16 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl transition-all duration-300 z-[9999] max-h-[calc(100vh-4rem)] overflow-y-auto">
      <ul className="text-center text-xl py-8">
        {navItems.map((item, index) => (
          <Link 
            key={index} 
            to={item} 
            spy={true} 
            smooth={true}
            onClick={() => setClick(false)}
            className="block"
          >
            <li className="my-3 px-6 py-2 text-gray-700 dark:text-gray-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors duration-300 cursor-pointer">
              {item}
            </li>
          </Link>
        ))}

        {/* Mobile Theme Toggle */}
        <div className="flex justify-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 transition-all duration-300 hover:scale-110"
          >
            {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-fuchsia-500" />}
          </button>
        </div>
      </ul>
    </div>
  );

  return (
    <nav className="sticky top-0 bg-white text-black dark:bg-slate-900 dark:text-white z-50">
      <div className="h-10vh flex justify-between items-center lg:py-5 pl-20 pr-14 py-4 border-b border-gray-200 dark:border-slate-800 relative z-50 bg-white dark:bg-slate-900">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">
            <Link to="Home" spy={true} smooth={true} className="cursor-pointer hover:text-fuchsia-600 transition-colors">
              Spark Creatives
            </Link>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="lg:flex md:flex flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 text-[18px] items-center">
            {navItems.map((item, index) => (
              <Link key={index} to={item} spy={true} smooth={true}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
                  {item}
                </li>
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 transition-all duration-500 hover:rotate-180 hover:scale-110"
            >
              {darkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-fuchsia-500" />}
            </button>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden transition text-2xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 z-50 relative"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>

        {/* Mobile Menu */}
        {click && content}
      </div>
    </nav>
  );
}

export default Navbar;