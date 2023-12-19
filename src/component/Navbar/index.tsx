import React from "react";
// import { IMAGES } from "../../assets";
import Logo from "../../assets/icon/logo.png"
import Poligon from "../../assets/icon/Polygon 3.png"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-black px-2 py-2 flex flex-col sm:flex-row justify-between items-center w-full">
      <div className="flex items-center flex-col ml-7">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-52 pl-4 mt-1 flex-shrink-0"
          />
          {/* <span className="text-lg font-semibold mb-2">
            Geo<span className="text-yellow-500">Rima</span>
          </span> */}
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-4 sm:mt-0 font-readux mr-7 text-sm">
        <a href="#" className="flex items-center text-[#242E3A] hover:text-gray-400 mr-2">
          Profile
          <img src={Poligon} alt="" className="ml-1 mt-5 w-2"/>
        </a>
        {/* <a href="#" className="flex items-center text-[#242E3A] hover:text-gray-400 mr-2">
          Satker
          <img src={Poligon} alt="" className="ml-1 mt-5 w-2"/>
        </a> */}
        <a href="#" className="flex items-center text-[#242E3A] hover:text-gray-400 mr-2">
          Pelayanan Publik
          <img src={Poligon} alt="" className="ml-1 mt-5 w-2"/>
        </a>
        <a href="#" className="flex items-center text-[#242E3A] hover:text-gray-400 mr-2">
          Berita
          <img src={Poligon} alt="" className="ml-1 mt-5 w-2"/>
        </a>
        <a href="#" className="flex items-center text-[#242E3A] hover:text-gray-400 mr-2">
          Kegiatan
          <img src={Poligon} alt="" className="ml-1 mt-5 w-2"/>
        </a>
        {/* <a href="#" className="flex items-center text-[#242E3A] hover:text-gray-400 mr-2">
          RB
          <img src={Poligon} alt="" className="ml-1 mt-5 w-2"/>
        </a> */}
        <div className="bg-[#242E3A] text-[#F9AE0C] px-7 py-2 rounded-md cursor-pointer">
          Login
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
