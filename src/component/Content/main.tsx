import React from "react";
// import { IMAGES } from "../../assets";
import Banner from "../../assets/images/banner.png"

const MainContent: React.FC = () => {
  return (
    <main className="flex relative">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          src={Banner}
          alt="Peta Indonesia"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
    </main>
  );
};

export default MainContent;
