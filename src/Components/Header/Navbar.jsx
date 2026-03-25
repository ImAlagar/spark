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
    <div className="lg:hidden fixed top-16 left-0 right-0 bg-white dark:bg-slate-900 shadow-2xl transition-all duration-300 z-[9999] max-h-[calc(100vh-4rem)] overflow-y-auto">
      <ul className="text-center text-xl py-8">
        {navItems.map((item, index) => (
          <Link 
            key={index} 
            to={item} 
            spy={true} 
            smooth={true}
            onClick={() => setClick(false)}
          >
            <li className="my-4 py-3 hover:bg-fuchsia-600 hover:text-white transition rounded-lg mx-4">
              {item}
            </li>
          </Link>
        ))}

        {/* Mobile Theme Toggle */}
        <div className="flex justify-center mt-6 pb-8">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 transition hover:scale-110"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </ul>
    </div>
  );

  return (
    <nav className="sticky top-0 bg-white text-black dark:bg-slate-900 dark:text-white z-50">
      <div className="h-10vh flex justify-between items-center lg:py-5 pl-20 pr-14 py-4 border-b border-slate-800 relative z-50 bg-white dark:bg-slate-900">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">
            <Link to="Home" spy={true} smooth={true} className="cursor-pointer">
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
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 transition-transform duration-500 hover:rotate-180"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden transition text-2xl p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 z-50 relative"
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