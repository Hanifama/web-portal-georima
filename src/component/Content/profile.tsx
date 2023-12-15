import Poligon from "../../assets/icon/Polygon 3.png";
import Phone from "../../assets/icon/phone-icon.svg";
import Mail from "../../assets/icon/mail-icon.svg";
import Maps from "../../assets/icon/maps-icon.svg";
import Clock from "../../assets/icon/clock-icon.svg";
import { useState } from "react";
import Satu from "../../assets/images/image 1.png";
import Dua from "../../assets/images/image 2.png";
import Tiga from "../../assets/images/image 3.png";
import Empat from "../../assets/images/image 4.png";
import Lima from "../../assets/images/image 5.png";
import Enam from "../../assets/images/image 7.png";
import Tujuh from "../../assets/images/image 6.png";
import Delapan from "../../assets/images/image 8.png";
import Sembilan from "../../assets/images/image 9.png";
import Sepuluh from "../../assets/images/image 10.png";
import Sebelas from "../../assets/images/image 11.png";
import DuaBelas from "../../assets/images/image 12.png";

export default function Profile() {
    const [isTugas, setIsTugas] = useState(false);
    const [isFungsi, setIsFungsi] = useState(false);
    const [isInformasi, setIsInformasi] = useState(false);

    return (
        <div className="flex mb-4 p-5">
            <div className="flex-grow p-2">
                <div className="w-96 h-48 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-[url('./assets/images/lokasi.png')] bg-cover bg-center"></div>
                </div>
                <div className="flex items-center justify-between mt-4 cursor-pointer" onClick={() => setIsTugas(!isTugas)}>
                    <div>
                        <span className="font-bold text-2xl">Tugas</span>
                        <span className="text-2xl ml-1">Georima</span>
                    </div>
                    <div className="mr-6">
                        <img src={Poligon} alt="" className="w-3 pt-3" />
                    </div>
                </div>
                {isTugas && (
                    <div className="border-2 w-96 rounded-lg px-5 py-3.5 mt-1 mb-1">
                        Menyelenggarakan penelitian, penyelidikan, dan pelayanan di bidang sumber daya mineral, batubara, dan panas bumi.
                    </div>
                )}
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsFungsi(!isFungsi)}>
                    <div>
                        <span className="font-bold text-2xl">Fungsi</span>
                        <span className="text-2xl ml-1">Georima</span>
                    </div>
                    <div className="mr-6">
                        <img src={Poligon} alt="" className="w-3 pt-3" />
                    </div>
                </div>
                {isFungsi && (
                    <div className="border-2 w-96 rounded-lg px-5 py-3.5 mt-1 mb-1">
                        Menyelenggarakan penelitian, penyelidikan, dan pelayanan di bidang sumber daya mineral, batubara, dan panas bumi.
                    </div>
                )}
                <div className="flex items-center justify-between mt-2 cursor-pointer" onClick={() => setIsInformasi(!isInformasi)}>
                    <div>
                        <span className="font-bold text-2xl">Informasi</span>
                        <span className="text-2xl ml-1">Georima</span>
                    </div>
                    <div className="mr-6 transition-opacity duration-900 ease-in-out ${isPoligonVisible ? 'opacity-100' : 'opacity-0'}`">
                        <img src={Poligon} alt="" className="w-3 pt-3 " />
                    </div>
                </div>
                {isInformasi && (
                    <div className="w-96 border-2 p-7 rounded-lg">
                        <div className="flex-grow flex items-center">
                            <img src={Phone} alt="" />
                            <p className="text-base ml-6"> (022)5202698</p>
                        </div>
                        <div className="flex-grow flex items-center">
                            <img src={Mail} alt="" />
                            <p className="text-base ml-6"> psdmbp2@esdm.go.id</p>
                        </div>
                        <div className="flex-grow flex items-center">
                            <img src={Maps} alt="" />
                            <p className="text-base ml-6"> Gedung A.F Lasut X Jl. Soekarno Hatta No.444, Pasirluyu, Kec. Regol, Kota Bandung, Jawa Barat 40254</p>
                        </div>
                        <div className="flex-grow flex items-center">
                            <img src={Clock} alt="" />
                            <p className="text-base ml-6">Senin - Kamis : 08.00 - 16.00 WIB <br />Jum’at  : 08.00 - 16.30 WIB <br /> Sabtu dan Minggu : Tutup <br /> Tanggal Merah Lainnya : Tutup</p>
                        </div>
                        <div className="py-2 px-4 bg-[#242E3A] text-[#F9AE0C] w-32 rounded-md cursor-pointer">Kontak Kami</div>
                    </div>
                )}
            </div>
            <div className="flex-grow ml-14 mt-2 font-readux">
                <div>
                    <span className="text-3xl font-bold">Tentang</span> <span className="text-3xl">GeoRima</span>
                </div>
                <p className="mt-6">GeoRima Next Generation merupakan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper. Fusce dignissim nisl et bibendum sodales. Ut nunc purus, scelerisque eu efficitur vitae, suscipit quis massa. Cras eget felis consectetur, rhoncus tellus eleifend, vehicula sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ligula vel vestibulum sagittis. Duis rutrum ac ex vel consectetur. Duis in tortor id magna bibendum tempor. Sed in elementum sapien. Ut sed condimentum purus, in interdum purus. Phasellus imperdiet dictum malesuada. Sed a orci leo. Duis lorem ipsum, consectetur quis nunc eu, laoreet facilisis elit. Donec blandit augue eu maximus varius. Donec vitae leo ultrices, pretium massa sit amet, pellentesque est.</p>
                <div>
                    <span className="text-2xl font-bold">Badan</span> <span className="text-2xl">Keanggotaan</span>
                    <div className="w-full border-2 rounded-lg mt-3 flex">
                        <div className="grid grid-cols-5 gap-2 py-6 px-2">
                            <div className="col-span-1">
                                <img src={Satu} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Kepala Pusat</span> <br />
                                    <span className="text-sm font-bold">Dr. Ary Setijadi primatmanto</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Dua} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Kepala Bagian Umum</span> <br />
                                    <span className="text-sm font-bold">Bayu Setyo Nugroho</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Tiga} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Sekertaris</span> <br />
                                    <span className="text-sm font-bold">Faiza Kailani Kuswanto</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Empat} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Bendahara </span> <br />
                                    <span className="text-sm font-bold">Afanin Ryandana</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Lima} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Kepala Staff</span> <br />
                                    <span className="text-sm font-bold">Yogi Andy</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Enam} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Kepala Urusan Keuangan</span> <br />
                                    <span className="text-sm font-bold">Diko Prasojo</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Tujuh} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Tim I.T</span> <br />
                                    <span className="text-sm font-bold">Asep Trisna Setiawan</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Delapan} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Tim I.T</span> <br />
                                    <span className="text-sm font-bold">Asep Trisna Setiawan</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Sembilan} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Tim Multimedia</span> <br />
                                    <span className="text-sm font-bold">Muhammad Daffa Prasetyo</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Sepuluh} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Tim I.T</span> <br />
                                    <span className="text-sm font-bold">Agung Yusuf Wibowo</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={Sebelas} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Tim I.T</span> <br />
                                    <span className="text-sm font-bold">Muhammad Rizky Fahreza</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src={DuaBelas} alt="" className="w-28 mx-auto mb-2" />
                                <div className="text-center leading-none">
                                    <span className="text-xs">Security</span> <br />
                                    <span className="text-sm font-bold">Nawa Soemantri</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
