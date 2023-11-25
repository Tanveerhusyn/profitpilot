import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import both FaBars and FaTimes icons
import SignUpModal from "../components/SignUpModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  const handleCloseModal = () => {
    setShowSignUpModal(false);
  };

  return (
    <nav className="bg-[#F7F7F2] text-white p-4 px-20 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-14 mr-2" />
          <span className="text-[#061A2A] font-roboto text-3xl font-semibold leading-normal">
            Profit +
          </span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes size={30} color="black" />
            ) : (
              <FaBars size={30} color="black" />
            )}
          </button>
        </div>

        {/* Links and Buttons */}
        <div
          className={`absolute bg-[#F7F7F2] z-10 top-full left-0 w-full md:static md:w-[70%] md:justify-between md:bg-transparent transition-all duration-300 ease-in ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              href="#"
              className="block text-[#061A2A] font-roboto text-base font-normal leading-normal px-4 py-2 md:inline md:px-6"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-[#061A2A] font-roboto text-base font-normal leading-normal px-4 py-2 md:inline md:px-6"
            >
              About
            </a>
            <a
              href="#"
              className="block text-[#061A2A] font-roboto text-base font-normal leading-normal px-4 py-2 md:inline md:px-6"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-[#061A2A] font-roboto text-base font-normal leading-normal px-4 py-2 md:inline md:px-6"
            >
              Contact
            </a>
          </div>
          {/* Buttons */}
          {/* Buttons */}
          <div
            className={`flex   md:flex-row gap-2 my-4 md:my-0 ${
              isMenuOpen ? "block" : "hidden"
            } md:flex`}
          >
            <button class="flex w-100 items-center py-2 px-6 rounded-md border border-[#061A2A] bg-white text-black">
              Sign In
            </button>
            <button
              onClick={handleSignUpClick}
              className="flex items-center justify-center py-2 px-6 rounded-md bg-[#061A2A] text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <SignUpModal show={showSignUpModal} handleClose={handleCloseModal} />
    </nav>
  );
};

export default Navbar;
