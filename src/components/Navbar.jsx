import { useState} from "react";
import { Link, useLocation } from "react-router-dom";

import { LuPhone } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../assets/logo.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (path) => {
    return currentPath === path;
  };

  // Active link class
  const activeClass = "text-purple-400 font-semibold";

  return (
    <nav className="bg-[#151718] text-white py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="z-20">
          <img className="w-24 md:w-32" src={logo} alt="brand logo" />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden z-20 text-white"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? 
            <RiCloseLine size={24} /> : 
            <RiMenu3Line size={24} />
          }
        </button>

        {/* Desktop navigation - Right-aligned */}
        <div className="hidden md:flex items-center gap-6 lg:gap-56 ml-auto">
          <ul className="flex gap-3 lg:gap-6 whitespace-nowrap overflow-hidden text-ellipsis">
            <li>
              <Link 
                to="/about" 
                className={`transition-colors duration-200 hover:text-purple-400 px-2 py-1 rounded ${isActive('/about') ? activeClass : ''}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className={`transition-colors duration-200 hover:text-purple-400 px-2 py-1 rounded ${isActive('/team') ? activeClass : ''}`}
              >
                Team
              </Link>
            </li>
            <li>
              <Link 
                to="/catalog" 
                className={`transition-colors duration-200 hover:text-purple-400 px-2 py-1 rounded ${isActive('/catalog') ? activeClass : ''}`}
              >
                Catalog
              </Link>
            </li>
            <li>
              <Link 
                to="/special-condition" 
                className={`transition-colors duration-200 hover:text-purple-400 px-2 py-1 rounded ${isActive('/special-condition') ? activeClass : ''}`}
              >
                Special Condition
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`transition-colors duration-200 hover:text-purple-400 px-2 py-1 rounded ${isActive('/contact') ? activeClass : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4 lg:gap-6">
            <Link 
              to="/contact" 
              className={`hover:text-purple-400 transition-colors duration-200 ${isActive('/contact') ? activeClass : ''}`}
            >
              <LuPhone size={20} strokeWidth={3} />
            </Link>
            <button className="hover:text-purple-400 transition-colors duration-200">
              <FaMagnifyingGlass size={20} strokeWidth={3} />
            </button>
            <Link 
              to="/cart" 
              className={`flex items-center gap-1 hover:text-purple-400 transition-colors duration-200 ${isActive('/cart') ? activeClass : ''}`}
            >
              <BsCart3 size={22} strokeWidth={0.8} />
              <span className="bg-[#700576] text-white text-sm lg:text-base font-bold w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full hover:bg-purple-700 transition-colors duration-200">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 w-full h-full bg-[#151718] z-10 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-6 mb-8">
              <li>
                <Link 
                  to="/about" 
                  className={`text-xl transition-colors duration-200 hover:text-purple-400 ${isActive('/about') ? activeClass : ''}`}
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/team" 
                  className={`text-xl transition-colors duration-200 hover:text-purple-400 ${isActive('/team') ? activeClass : ''}`}
                  onClick={toggleMobileMenu}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/catalog" 
                  className={`text-xl transition-colors duration-200 hover:text-purple-400 ${isActive('/catalog') ? activeClass : ''}`}
                  onClick={toggleMobileMenu}
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link 
                  to="/special-condition" 
                  className={`text-xl transition-colors duration-200 hover:text-purple-400 ${isActive('/special-condition') ? activeClass : ''}`}
                  onClick={toggleMobileMenu}
                >
                  Special Condition
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`text-xl transition-colors duration-200 hover:text-purple-400 ${isActive('/contact') ? activeClass : ''}`}
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-8">
              <Link 
                to="/contact" 
                className={`hover:text-purple-400 transition-colors duration-200 ${isActive('/contact') ? activeClass : ''}`}
                onClick={toggleMobileMenu}
              >
                <LuPhone size={24} strokeWidth={3} />
              </Link>
              <button className="hover:text-purple-400 transition-colors duration-200">
                <FaMagnifyingGlass size={24} strokeWidth={3} />
              </button>
              <Link 
                to="/cart" 
                className={`flex items-center gap-1 hover:text-purple-400 transition-colors duration-200 ${isActive('/cart') ? activeClass : ''}`}
                onClick={toggleMobileMenu}
              >
                <BsCart3 size={26} strokeWidth={0.8} />
                <span className="bg-[#700576] text-white text-base font-bold w-6 h-6 flex items-center justify-center rounded-full hover:bg-purple-700 transition-colors duration-200">
                  2
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;