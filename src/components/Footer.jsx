import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#061A2A] text-white w-full h-[700px]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex justify-center items-center mb-6 lg:mb-0 text-center">
          <img src={logo} alt="Logo" className="h-14 w-14 mr-2" />
            <span className="text-3xl font-bold">Profit+</span>
            
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-12">
            <nav>
              <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
                <li>Feature</li>
                <li>Service</li>
                <li>Pricing</li>
                <li>Review</li>
                <li>FAQ</li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              {/* Add actual links to your social media profiles */}
              <a href="#" aria-label="Instagram" className="text-[#F4CE24] hover:text-gray-400"><FaInstagram /></a>
              <a href="#" aria-label="Facebook" className="text-[#F4CE24] hover:text-gray-400"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="text-[#F4CE24] hover:text-gray-400"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn" className="text-[#F4CE24] hover:text-gray-400"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-8 border-t border-gray-700 pt-4">
          <p>© 2023 Profit, Inc. All rights reserved</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-white hover:text-gray-400">Terms and Privacy</a>
            <a href="#" className="text-white hover:text-gray-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
