// import React from "react";
// interface ServiceCardProps {
//   title: string;
//   description: string;
//   onDetailClick: () => void;
//   index: number; 
//   image: string; 
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, onDetailClick, index, image }) => {
//   const isEven = index % 2 === 0;

//   return (
//     <div className={`flex flex-col mb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ${isEven ? 'items-end' : 'items-start'}`}>
//       <div className="bg-white shadow-md rounded-lg p-4">
//         <img src={image} alt={title} className="mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
//         <h3 className="text-lg font-bold mb-2">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//         <button onClick={onDetailClick} className={`mt-2 ${isEven ? 'bg-blue-500' : 'bg-white'} text-white py-2 px-4 rounded-full`}>
//           Lihat Layanan
//         </button>
//         {isEven && (
//           <button className="bg-blue-500 text-white mt-2 py-2 px-4 rounded-full ml-2">
//             Unduh Aplikasi
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
import Georima from "../../assets/images/georima.png";
import Sirima from "../../assets/images/sirima.png";
import Simbakun from "../../assets/images/simbakun.png";
import Andini from "../../assets/images/andini.png";
import Simanis from "../../assets/images/simanis.png";
import Lastri from "../../assets/images/lstri.png";
import Sigina from "../../assets/images/sigina.png";

export default function service() {
  return (
    <div className="mx-24 mt-14 font-readex">
      <div>
        <span className="font-bold text-3xl">Pelayanan</span> <span className="text-2xl">Publik</span>
        <p className="mt-2">Pusat Sumber Daya Mineral, Batubara dan Panas Bumi mempunyai tugas penelitian, penyelidikan, pelayanan, dan survei di bidang pemetaan, geosains, serta sumber daya minyak dan gas bumi. Pelayanan Pusat Sumber Daya Mineral, Batubara dan Panas Bumi adalah sebagai berikut:</p>
      </div>
      <div className="flex items-center">
        <img src={Georima} alt="" className="w-80" />
        <div className="ml-4">
          <span className="text-xl font-bold">GeoRima</span>
          <p>GeoRIMA (Geological Resources of Indonesia Multiplatform Application) adalah aplikasi yang digunakan untuk memberikan informasi kepada masyarakat umum mengenai keterdapatan potensi mineral, batubara, panas bumi di seluruh Indonesia.</p>
          <div className="flex">
            <div className="w-32 px-2 py-1 text-center border-2 rounded-md cursor-pointer">Lihat Layanan</div>
            <div className="w-32 px-2 py-1 text-center bg-black text-[#F9AE0C] rounded-md ml-6 cursor-pointer">Unduh Aplikasi</div>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="text-right mr-5">
          <span className="text-xl font-bold">SiRima</span>
          <p>GeoRIMA (Geological Resources of Indonesia Multiplatform Application) adalah aplikasi yang digunakan untuk memberikan informasi kepada masyarakat umum mengenai keterdapatan potensi mineral, batubara, panas bumi di seluruh Indonesia.</p>
          <div className="flex justify-end">
            <div className="w-32 px-2 py-1 text-center bg-black text-[#F9AE0C] rounded-md mr-6 cursor-pointer">Unduh Aplikasi</div>
            <div className="w-32 px-2 py-1 text-center border-2 rounded-md cursor-pointer">Lihat Layanan</div>
          </div>
        </div>
        <img src={Sirima} alt="" className="w-80 ml-4" />
      </div>
      <div className="flex items-center mt-4">
        <img src={Simbakun} alt="" className="w-60" />
        <div className="ml-4">
          <span className="text-xl font-bold">SiMbakun</span>
          <p>GeoRIMA (Geological Resources of Indonesia Multiplatform Application) adalah aplikasi yang digunakan untuk memberikan informasi kepada masyarakat umum mengenai keterdapatan potensi mineral, batubara, panas bumi di seluruh Indonesia.</p>
          <div className="flex">
            <div className="w-32 px-2 py-1 text-center border-2 rounded-md cursor-pointer">Lihat Layanan</div>
            <div className="w-32 px-2 py-1 text-center bg-black text-[#F9AE0C] rounded-md ml-6 cursor-pointer">Unduh Aplikasi</div>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="text-right mr-5">
          <span className="text-xl font-bold">Andini</span>
          <p>GeoRIMA (Geological Resources of Indonesia Multiplatform Application) adalah aplikasi yang digunakan untuk memberikan informasi kepada masyarakat umum mengenai keterdapatan potensi mineral, batubara, panas bumi di seluruh Indonesia.</p>
          <div className="flex justify-end">
            <div className="w-32 px-2 py-1 text-center bg-black text-[#F9AE0C] rounded-md mr-6 cursor-pointer">Unduh Aplikasi</div>
            <div className="w-32 px-2 py-1 text-center border-2 rounded-md cursor-pointer">Lihat Layanan</div>
          </div>
        </div>
        <img src={Andini} alt="" className="w-80 ml-4" />
      </div>
      <div className="flex items-center mt-4">
        <img src={Simanis} alt="" className="w-60" />
        <div className="ml-4">
          <span className="text-xl font-bold">SiManis</span>
          <p>GeoRIMA (Geological Resources of Indonesia Multiplatform Application) adalah aplikasi yang digunakan untuk memberikan informasi kepada masyarakat umum mengenai keterdapatan potensi mineral, batubara, panas bumi di seluruh Indonesia.</p>
          <div className="flex">
            <div className="w-32 px-2 py-1 text-center border-2 rounded-md cursor-pointer">Lihat Layanan</div>
            <div className="w-32 px-2 py-1 text-center bg-black text-[#F9AE0C] rounded-md ml-6 cursor-pointer">Unduh Aplikasi</div>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="text-right mr-5">
          <span className="text-xl font-bold">Lastri</span>
          <p>GeoRIMA (Geological Resources of Indonesia Multiplatform Application) adalah aplikasi yang digunakan untuk memberikan informasi kepada masyarakat umum mengenai keterdapatan potensi mineral, batubara, panas bumi di seluruh Indonesia.</p>
          <div className="flex justify-end">
            <div className="w-32 px-2 py-1 text-center bg-[#242E3A] text-[#F9AE0C] rounded-md mr-6 cursor-pointer">Unduh Aplikasi</div>
            <div className="w-32 px-2 py-1 text-center border-2 rounded-md cursor-pointer">Lihat Layanan</div>
          </div>
        </div>
        <img src={Lastri} alt="" className="w-80 ml-4" />
      </div>
      <div className="flex items-center mt-4">
        <img src={Sigina} alt="" className="w-60" />
        <div className="ml-4">
          <span className="text-xl font-bold">SiGina</span>
          <p>GeoRIMA (Geological Resources of Indonesia Multiplatform Application) adalah aplikasi yang digunakan untuk memberikan informasi kepada masyarakat umum mengenai keterdapatan potensi mineral, batubara, panas bumi di seluruh Indonesia.</p>
          <div className="flex">
            <div className="w-32 px-2 py-1 text-center border-2 rounded-md cursor-pointer">Lihat Layanan</div>
            <div className="w-32 px-2 py-1 text-center bg-[#242E3A] text-[#F9AE0C] rounded-md ml-6 cursor-pointer">Unduh Aplikasi</div>
          </div>
        </div>
      </div>
    </div>
  )
}
