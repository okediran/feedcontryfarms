import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`nav fixed w-full z-[100] ${scrolled && "shadow-lg"}`}
      style={{ background: scrolled ? "white" : "" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-[orange] text-[25px] font-[700]">The Feed Country Farm</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-6">
              {["About", "Service", "Process", "Why", "Contact", "Partners"].map(
                (item, index) => (
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    to={item}
                    className="text-[black] px-3 py-2 font-[500] item-link"
                    key={index}
                  >
                    {item}
                    <div className="underlineAnimation bg-[orange] w-[0%] h-[2px]"></div>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md  bg-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[white]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-[orange]">
          {["About", "Service","Process", "Contact","Partners","Why"].map(
                (item, index) => (
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    to={item}
                    className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md"
                    key={index}
                  >
                    {item}
                    <div className="underlineAnimation bg-[orange] w-[0%] h-[2px]"></div>
                  </Link>
                )
              )}
            {/* Add more navigation links */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
