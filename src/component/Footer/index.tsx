import React from 'react';
import Logo2 from "../../assets/images/logo2.png";
import Phone from "../../assets/icon/phone.svg";
import Mail from "../../assets/icon/mail.svg";
import Maps from "../../assets/icon/maps.svg";
import Poligon from "../../assets/icon/poligon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className='flex px-24 pt-10'>
        <div className='w-1/2'>
          <div className='flex items-center'>
            <img src={Logo2} alt="" className='w-28' />
            <div className='ml-11'>
              <span className='text-xs'>KEMENTRIAN ENERGI DAN SUMBER DAYA MINERAL</span> <br />
              <span className='text-xl font-bold'>BADAN GEOLOGI</span> <br />
              <span className='text-sm'>PUSAT SUMBER DAYA MINERAL, BATUBARA DAN PANAS BUMI</span>
            </div>
          </div>
          <p className='mt-3 text-justify'>GeoRima Next Generation merupakan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper. Fusce dignissim nisl et bibendum sodales. Ut nunc purus, scelerisque eu efficitur vitae, suscipit quis massa. Cras eget felis consectetur, rhoncus tellus eleifend, vehicula sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ligula vel vestibulum sagittis.</p>
          <div className="font-semibold">
            <div className="flex-grow flex items-center">
              <img src={Phone} alt="" className='w-8' />
              <p className="text-base ml-6"> (022)5202698</p>
            </div>
            <div className="flex-grow flex items-center">
              <img src={Mail} alt="" className='w-8' />
              <p className="text-base ml-6"> psdmbp2@esdm.go.id</p>
            </div>
            <div className="flex-grow flex items-center">
              <img src={Maps} alt="" className='w-8' />
              <p className="text-base ml-6"> Gedung A.F Lasut X Jl. Soekarno Hatta No.444, Pasirluyu, Kec. Regol, Kota Bandung, Jawa Barat 40254</p>
            </div>
          </div>
        </div>
        <div className='w-1/3 ml-10'>
          <span className='text-xl font-bold'>PELAYANAN PUBLIK</span>
          <div className='flex items-center'>
            <img src={Poligon} alt="" className='w-2 pt-4' />
            <span className="ml-4">Pelayanan Kegeologian</span>
          </div>
          <div className='flex items-center'>
            <img src={Poligon} alt="" className='w-2 pt-4' />
            <span className="ml-4">Eksplorasi Geologi</span>
          </div>
          <div className='flex items-center'>
            <img src={Poligon} alt="" className='w-2 pt-4' />
            <span className="ml-4">Rekomendasi Teknis</span>
          </div>
          <div className='flex items-center'>
            <img src={Poligon} alt="" className='w-2 pt-4' />
            <span className="ml-4">Mitigasi Bencana Geologi</span>
          </div>
          <div className='flex items-center'>
            <img src={Poligon} alt="" className='w-2 pt-4' />
            <span className="ml-4">Konservasi Lingkungan</span>
          </div>
          <div className='flex items-center'>
            <img src={Poligon} alt="" className='w-2 pt-4' />
            <span className="ml-4">Permintaan Data (PPID)</span>
          </div>
        </div>
        <div className='w-1/3 ml-4'>
          <span className='text-xl font-readux font-bold'>JAM KERJA</span>
          <div className='mt-4'>
            <span>Kami Siap Melayani Anda.</span> <br />
            <p className='mt-4'>Senin - Kamis : 08.00 - 16.00 WIB <br /> Jum’at  : 08.00 - 16.30 WIB <br /> Sabtu dan Minggu : Tutup <br /> Tanggal Merah Lainnya : Tutup</p>
          </div>
        </div>
      </div>
      <hr className='border-t border-[#F9AE0C] my-2' />
      <div>
        <p className='text-center text-sm text-[#F9AE0C]'>Copyright &copy; PT.LSKK. All Right Reserved <br /> Designed by PT.LSKK</p>
      </div>
    </footer>
  );
};

export default Footer;