import UserIcon from "../../assets/icon/user-icon.svg";
import Calendar from "../../assets/icon/calendar-icon.svg";
import { timeConvert } from "../../helper/convertTime";
import { truncateDescription } from "../../helper/truncateDescription";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

type newsProps = {
  data: any;
  onDetailNews: (guid: any) => void;
};

const NewsCard: React.FC<newsProps> = ({ data, onDetailNews }) => {
  const maxDescriptionLength = 100;
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
    onDetailNews(guid);
  };
  
  return (
    <div className="flex justify-between">
      <div className="w-[350px] border-2 rounded-lg shadow-md p-4">
        <div className="flex justify-center">
          <img
            src={`https://georima.pptik.id/api/${data.image}`}
            alt={`News: ${data.title}`}
            className="news-image rounded-md max-h-[200px]"
            onClick={() => handleOpen(data.image)}
          />
        </div>
        <div className="">
          <h3 className="text-black">{data.title}</h3>
          <div className="flex items-center">
            <img src={Calendar} alt="" className="mr-2" />
            <p className="ml-8"> {timeConvert(data.timestamp)}</p>
          </div>
          <div className="flex items-center">
            <img src={UserIcon} alt="" className="mr-2" />
            <p className="ml-8">
              Pusat Sumber Daya Mineral, Batubara, dan Panas Bumi
            </p>
          </div>
          <p>{truncateDescription(data.description, maxDescriptionLength)}</p>
        </div>
        <div
          className="w-32 bg-black text-[#F9AE0C] px-2 py-2 text-center rounded-md cursor-pointer"
          onClick={() => handleDetail(data.guid)}
        >
          Lanjutkan
        </div>
      </div>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="overflow-y-auto max-h-screen"
      >
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            {/* <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src={`https://georima.pptik.id/api/${file}`}
            /> */}
          </div>
        </DialogHeader>
        <DialogBody>
          <img
            alt="nature"
            className="h-[48rem] w-full rounded-lg object-cover object-center"
            src={`https://georima.pptik.id/api/${file}`}
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16"></div>
          <Button
            onClick={handleClose}
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="mr-5 flex items-center"
          >
            Tutup
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default NewsCard;
