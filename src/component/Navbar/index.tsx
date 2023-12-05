import React from "react";
import { IMAGES } from "../../assets";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-black p-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center flex-col">
        <div className="flex items-center">
          <img
            src={IMAGES.logo}
            alt="Logo"
            className="h-8 w-8 mr-2 mt-2 flex-shrink-0"
          />
          <span className="text-lg font-semibold mb-2">
            Geo<span className="text-yellow-500">Rima</span>
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {/* Tambahkan menu atau ikon responsif di sini */}
        {/* <a href="#" className="hover:text-gray-300">
          Menu 1
        </a>
        <a href="#" className="hover:text-gray-300">
          Menu 2
        </a>
        <a href="#" className="hover:text-gray-300">
          Menu 3
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
