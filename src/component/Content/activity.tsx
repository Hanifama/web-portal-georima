import { useState } from "react";

type activityProps = {
  data: any;
  onDetailActivity: (guid: any) => void;
};
const ActivityCard: React.FC<activityProps> = ({ data, onDetailActivity }) => {
  const [open, setOpen] = useState<any>(false);
  const [file, setFile] = useState<any>(false);

  const handleOpen = async (file: any) => {
    setOpen(true);
    setFile(file);
  };
  const handleClose = async () => {
    setOpen(false);
  };
  const handleDetail = async (guid: string) => {
    onDetailActivity(guid);
  };
  return (
    <div className="grid grid-cols-3 gap-x-7 gap-y-5 rounded-md">
      <div className="h-15 border-2 aspect-video rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500">
        <div
          className="w-full h-full bg-[url(`${https://georima.pptik.id/api/${data.image}}`)] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"
          onClick={() => handleDetail(data.guid)}
        >
          <img
            src={`https://georima.pptik.id/api/${data.image}`}
            alt={`News: ${data.title}`}
            className="w-full h-full bg-[url(`${https://georima.pptik.id/api/${data.image}}`)] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"
            onClick={() => handleOpen(data.image)}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

{
  /* <div className="h-15 border-2 aspect-video rounded-md overflow-hidden group relative hover:scale-95 transition-all duration-500">
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
      </div> */
}
