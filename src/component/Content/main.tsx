import React from "react";
import { IMAGES } from "../../assets";

const MainContent: React.FC = () => {
  return (
    <main className="p-4 flex relative">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          src={IMAGES.main}
          alt="Peta Indonesia"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
    </main>
  );
};

export default MainContent;
