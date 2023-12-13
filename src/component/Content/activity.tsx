// import React from "react";
// import { IMAGES } from "../../assets";

// const ActivityCard: React.FC<{
//   title: string;
//   image: string;
//   description: string;
//   date: string;
//   onDetailClick: () => void;
// }> = ({ title, description, date, onDetailClick }) => {
//   return (
//     <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-xs rounded overflow-hidden shadow-lg m-2 sm:m-4">
//       <img className="w-full border-b-2 border-gray-300" src={IMAGES.activity} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <div className="px-6 py-4 flex justify-between items-center">
//         <p className="text-gray-600 text-sm">{date}</p>
//         <button
//           onClick={onDetailClick}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Detail
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ActivityCard;


export default function activity() {
  return (
    <div className="grid grid-cols-3 gap-x-7 gap-y-5 rounded-md">
      <div className="h-15 border-2 aspect-video rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-15 border-2 aspect-video rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-15 border-2 aspect-[5/6] rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500 row-span-2">
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-15 border-2 aspect-video rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-15 border-2 aspect-video rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-15 border-2 aspect-square rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500 row-span-2">
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-15 border-2 aspect-square rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500 row-span-2">
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-15 border-2 aspect-1/1 rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
      <div className="h-15 border-2 aspect-1/1 rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
      </div>
    </div>
  )
}
