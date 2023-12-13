// import React from "react";
// import { IMAGES } from "../../assets";
import UserIcon from "../../assets/icon/user-icon.svg";
import Calendar from "../../assets/icon/calendar-icon.svg";
import Aktiviti from "../../assets/images/activity.jpeg";

const NewsCard: React.FC<{
  title: string;
  image: string;
  description: string;
  date: string;
  // onDetailClick: () => void;

  
}> = ({ title, description, date, }) => {
  return (
    // <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-xs rounded overflow-hidden shadow-lg m-2 sm:m-4">
    //   <img className="w-full border-b-2 border-gray-300" src={IMAGES.news} alt={title} />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <p className="text-gray-700 text-base">{description}</p>
    //   </div>
    //   <div className="px-6 py-4 flex justify-between items-center">
    //     <p className="text-gray-600 text-sm">{date}</p>
    //     <button
    //       onClick={onDetailClick}
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //     >
    //       Detail
    //     </button>
    //   </div>
    // </div>
    
    <div className="flex justify-between">
      <div className="w-[350px] border-2 rounded-lg shadow-md p-4">
        <div className="flex justify-center">
          <img src={Aktiviti} alt="" className="w-[350px] rounded-md" />
        </div>
        <div className="">
          <h3 className="text-black">{title}</h3>
          <div className="flex items-center">
            <img src={Calendar} alt="" className="mr-2" />
            <p className="ml-8">{date}</p>
          </div>
          <div className="flex items-center">
            <img src={UserIcon} alt="" className="mr-2" />
            <p className="ml-8">Pusat Sumber Daya Mineral, Batubara, dan Panas Bumi</p>
          </div>
          <p>{description}</p>
        </div>
        <div className="w-32 bg-black text-[#F9AE0C] px-2 py-2 text-center rounded-md cursor-pointer">Lanjutkan</div>
      </div>
    </div>
  );
};

export default NewsCard;


// export default function news() {
//   return (
    
//   )
// }

