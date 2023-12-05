import React from "react";
interface ServiceCardProps {
  title: string;
  description: string;
  onDetailClick: () => void;
  index: number; // Add an index prop
  image: string; // Add an image prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, onDetailClick, index, image }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col mb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ${isEven ? 'items-end' : 'items-start'}`}>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={image} alt={title} className="mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button onClick={onDetailClick} className={`mt-2 ${isEven ? 'bg-blue-500' : 'bg-white'} text-white py-2 px-4 rounded-full`}>
          Lihat Layanan
        </button>
        {isEven && (
          <button className="bg-blue-500 text-white mt-2 py-2 px-4 rounded-full ml-2">
            Unduh Aplikasi
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
