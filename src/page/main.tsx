import React from "react";
import Header from "../component/Navbar";
import Footer from "../component/Footer";
import MainContent from "../component/Content/main";
// import ActivityCard from "../component/Content/activity";
// import NewsCard from "../component/Content/news";
// import ServiceCard from "../component/Content/service";
// import WorkAchievementChart from '../component/Content/chart';
import Poligon from "../assets/icon/Polygon 3.png";
import Phone from "../assets/icon/phone-icon.svg";
import Mail from "../assets/icon/mail-icon.svg";
import Maps from "../assets/icon/maps-icon.svg";
import Clock from "../assets/icon/clock-icon.svg";
import UserIcon from "../assets/icon/user-icon.svg";
import Calendar from "../assets/icon/calendar-icon.svg";
import Aktiviti from "../assets/images/activity.jpeg"


const MainPage: React.FC = () => {
  // const activityData = [
  //   {
  //     id: 1,
  //     title: "Penanaman Pohon Serentak untuk Lingkungan Hijau",
  //     image: "https://example.com/image1.jpg",
  //     description:
  //       "Dalam rangka menjaga keberlanjutan lingkungan, Dinas Sumber Daya Alam melakukan penanaman pohon serentak di berbagai wilayah.",
  //     date: "3 Januari 2023",
  //   },
  //   {
  //     id: 2,
  //     title: "Pelatihan Pengelolaan Sampah Organik",
  //     image: "https://example.com/image2.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam mengadakan pelatihan untuk pengelolaan sampah organik guna mendukung program daur ulang dan pengurangan limbah.",
  //     date: "10 Februari 2023",
  //   },
  //   {
  //     id: 3,
  //     title: "Edukasi Konservasi Hutan bagi Anak-anak Sekolah",
  //     image: "https://example.com/image3.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam bekerja sama dengan sekolah-sekolah setempat untuk memberikan edukasi konservasi hutan kepada anak-anak.",
  //     date: "18 Maret 2023",
  //   },
  //   {
  //     id: 4,
  //     title: "Kegiatan Penanggulangan Bencana Alam",
  //     image: "https://example.com/image4.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam terlibat dalam kegiatan penanggulangan bencana alam dan pemulihan ekosistem pasca-bencana.",
  //     date: "5 April 2023",
  //   },
  //   {
  //     id: 5,
  //     title: "Rapat Koordinasi Pemantauan Kualitas Udara",
  //     image: "https://example.com/image5.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam menggelar rapat koordinasi untuk pemantauan kualitas udara dan upaya menjaga lingkungan yang bersih.",
  //     date: "12 Mei 2023",
  //   },
  //   {
  //     id: 6,
  //     title: "Pengembangan Taman Kota",
  //     image: "https://example.com/image6.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam terlibat dalam pengembangan taman kota sebagai ruang terbuka hijau untuk masyarakat.",
  //     date: "20 Juni 2023",
  //   },
  //   {
  //     id: 7,
  //     title: "Kampanye Penanaman Pohon di Sekolah-sekolah",
  //     image: "https://example.com/image7.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam mengadakan kampanye penanaman pohon di sekolah-sekolah untuk mengajarkan pentingnya pelestarian lingkungan.",
  //     date: "3 Juli 2023",
  //   },
  //   {
  //     id: 8,
  //     title: "Monitoring Keseimbangan Ekosistem Sungai",
  //     image: "https://example.com/image8.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam melakukan monitoring untuk menjaga keseimbangan ekosistem sungai dan keberlanjutan sumber daya air.",
  //     date: "15 Agustus 2023",
  //   },
  //   {
  //     id: 9,
  //     title: "Kunjungan Edukasi ke Hutan Lindung",
  //     image: "https://example.com/image9.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam mengorganisir kunjungan edukasi ke hutan lindung untuk memahamkan masyarakat tentang keberagaman hayati.",
  //     date: "2 September 2023",
  //   },
  //   {
  //     id: 10,
  //     title: "Pendampingan Petani dalam Pengelolaan Lahan",
  //     image: "https://example.com/image10.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam memberikan pendampingan kepada petani untuk pengelolaan lahan yang berkelanjutan.",
  //     date: "18 Oktober 2023",
  //   },
  //   {
  //     id: 11,
  //     title: "Peluncuran Program Perhutanan Sosial",
  //     image: "https://example.com/image11.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam meresmikan program perhutanan sosial untuk memberdayakan masyarakat lokal dalam pengelolaan hutan.",
  //     date: "5 November 2023",
  //   },
  //   {
  //     id: 12,
  //     title: "Kegiatan Rehabilitasi Hutan Mangrove",
  //     image: "https://example.com/image12.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam terlibat dalam kegiatan rehabilitasi hutan mangrove untuk melindungi pantai dari erosi.",
  //     date: "22 Desember 2023",
  //   },
  // ];

  // const newsData = [
  //   {
  //     id: 1,
  //     title: "Peluncuran Program Penanaman 10 Juta Pohon",
  //     image: "https://example.com/news1.jpg",
  //     description:
  //       "Dalam upaya menjaga keberlanjutan lingkungan, dilakukan peluncuran program penanaman 10 juta pohon di berbagai wilayah.",
  //     date: "5 Februari 2023",
  //   },
  //   {
  //     id: 2,
  //     title: "Rapat Koordinasi Pemulihan Ekosistem Sungai",
  //     image: "https://example.com/news2.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam mengadakan rapat koordinasi untuk pemulihan ekosistem sungai dan menjaga keberlanjutan sumber daya air.",
  //     date: "12 Maret 2023",
  //   },
  //   {
  //     id: 3,
  //     title: "Penghargaan Konservasi Alam Tingkat Nasional",
  //     image: "https://example.com/news3.jpg",
  //     description:
  //       "Dinas Sumber Daya Alam meraih penghargaan konservasi alam tingkat nasional sebagai bentuk pengakuan atas upaya pelestarian alam.",
  //     date: "25 April 2023",
  //   },
  // ];

  // const serviceData = [
  //   {
  //     id: 1,
  //     title: "Portal Georima",
  //     description:
  //       "Layanan portal Georima untuk informasi geospasial dan pemetaan.",
  //     "image": "activity"
  //   },
  //   {
  //     id: 2,
  //     title: "Layanan Cetak Peta",
  //     description: "Layanan cetak peta dengan berbagai skala dan detail.",
  //   },
  //   {
  //     id: 3,
  //     title: "Dokumen Teknis",
  //     description:
  //       "Penyediaan dokumen teknis dalam bidang lingkungan dan kehutanan.",
  //   },
  //   {
  //     id: 4,
  //     title: "Pengaduan Sarana Prasarana Kantor",
  //     description:
  //       "Layanan pengaduan terkait sarana dan prasarana kantor Dinas Sumber Daya Alam.",
  //   },
  //   {
  //     id: 5,
  //     title: "Monitoring Sumur Panas Bumi",
  //     description:
  //       "Layanan pemantauan dan analisis data dari sumur panas bumi.",
  //   },
  //   {
  //     id: 6,
  //     title: "Georima Map",
  //     description:
  //       "Aplikasi pemetaan Georima dengan beragam fitur dan informasi geospasial.",
  //   },
  // ];
  // const workAchievementData = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //   values: [50, 60, 75, 80, 90, 85, 70, 65, 75, 80, 90, 95],
  // };
  // function handleDetailClick(id: number): void {
  //   console.log(id)
  //   throw new Error("Function not implemented.");
  // }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <MainContent />
      {/* <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 border-
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>-2 border-blue-500 pb-2">
          Layanan Kami
        </h2>
        <div className="flex flex-wrap justify-between">
          {serviceData.map((service: any, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              onDetailClick={() => handleDetailClick(service.id)}
              index={index}
              image={service.image}
            />
          ))}
        </div>
      </div> */}
      {/* Card */}
      <div className="bg-gray-200 flex p-6 font-readux">
        <div className="bg-white rounded-xl shadow-lg w-full max-h-fit">
          <div className="flex mb-4 w-full p-3">
            <div className="flex mb-4 p-3">
              <div className="flex-grow p-2">
                <div className="border-2 w-96 h-48 rounded-lg"></div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="font-bold text-2xl">Fungsi</span>
                    <span className="text-2xl ml-1">Georima</span>
                  </div>
                  <div className="mr-6">
                    <img src={Poligon} alt="" className="w-3 pt-3" />
                  </div>
                </div>
                <div className="border-2 w-96 rounded-lg px-5 py-3.5 mt-3 mb-1">
                  Menyelenggarakan penelitian, penyelidikan, dan pelayanan di bidang sumber daya mineral, batubara, dan panas bumi.
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-2xl">Fungsi</span>
                    <span className="text-2xl ml-1">Georima</span>
                  </div>
                  <div className="mr-6">
                    <img src={Poligon} alt="" className="w-3 pt-3" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="font-bold text-2xl">Informasi</span>
                    <span className="text-2xl ml-1">Georima</span>
                  </div>
                  <div className="mr-6">
                    <img src={Poligon} alt="" className="w-3 pt-3" />
                  </div>
                </div>
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
              </div>
              <div className="flex-grow ml-20 mt-2 font-readux">
                <div>
                  <span className="text-3xl font-bold">Tentang</span> <span className="text-3xl">GeoRima</span>
                </div>
                <p className="mt-6">GeoRima Next Generation merupakan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat eget pulvinar ullamcorper. Fusce dignissim nisl et bibendum sodales. Ut nunc purus, scelerisque eu efficitur vitae, suscipit quis massa. Cras eget felis consectetur, rhoncus tellus eleifend, vehicula sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ligula vel vestibulum sagittis. Duis rutrum ac ex vel consectetur. Duis in tortor id magna bibendum tempor. Sed in elementum sapien. Ut sed condimentum purus, in interdum purus. Phasellus imperdiet dictum malesuada. Sed a orci leo. Duis lorem ipsum, consectetur quis nunc eu, laoreet facilisis elit. Donec blandit augue eu maximus varius. Donec vitae leo ultrices, pretium massa sit amet, pellentesque est.</p>
                <div>
                  <span className="text-2xl font-bold">Badan</span> <span className="text-2xl">Keanggotaan</span>
                  <div className="w-full h-[500px] border-2 rounded-lg mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
          Kegiatan Kami
        </h2>
        <div className="flex flex-wrap justify-between">
          {activityData.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              image={activity.image}
              description={activity.description}
              date={activity.date}
              onDetailClick={() => handleDetailClick(activity.id)}
            />
          ))}
        </div>
      </div> */}

      {/* Berita start */}
      <div className="ml-24 mt-6 mr-24">
        <div className="flex justify-between">
          <div>
            <span className="font-bold text-3xl">Berita</span> <span className="text-3xl">Terkini</span>
            <p>Semua berita terkait satker Pusat Sumber Daya Mineral, Batubara dan Panas Bumi akan ditampilkan di sini :</p>
          </div>
          <div className="border-2 px-6 py-2 w-40 h-12 rounded-md border-[#242E3A] text-[#242E3A] cursor-pointer">Berita Lainnya</div>
        </div>
        {/* Card */}
        <div className="flex justify-between">
          <div className="w-[350px] border-2 rounded-lg shadow-md p-4">
            <div className="flex justify-center">
              <img src={Aktiviti} alt="" className="w-[350px] rounded-md" />
            </div>
            <div className="">
              <h3 className="text-black">Sosialisasi Kegiatan Survei Landaian Suhu Daerah Gunung Endut, Kabupaten Lebak, Provinsi Banten</h3>
              <div className="flex items-center">
                <img src={Calendar} alt="" className="mr-2" />
                <p className="ml-8">Senin, 18 September 2023</p>
              </div>
              <div className="flex items-center">
                <img src={UserIcon} alt="" className="mr-2" />
                <p className="ml-8">Pusat Sumber Daya Mineral, Batubara, dan Panas Bumi</p>
              </div>
              <p>Badan Geologi melalui Pusat Sumber Daya Mineral Batubara dan Panas Bumi pada tanggal 17-18 Juli 2023 telah melaksanakan sosialisasi untuk kegiatan survei pengeboran landaian suhu daerah panas bumi Gun....</p>
            </div>
            <div className="w-32 bg-black text-[#F9AE0C] px-2 py-2 text-center rounded-md cursor-pointer">Lanjutkan</div>
          </div>
          <div className="w-[350px] border-2 rounded-lg shadow-md p-4">
            <div className="flex justify-center">
              <img src={Aktiviti} alt="" className="w-[350px] rounded-md" />
            </div>
            <div className="">
              <h3 className="text-black">Sosialisasi Kegiatan Survei Landaian Suhu Daerah Gunung Endut, Kabupaten Lebak, Provinsi Banten</h3>
              <div className="flex items-center">
                <img src={Calendar} alt="" className="mr-2" />
                <p className="ml-8">Senin, 18 September 2023</p>
              </div>
              <div className="flex items-center">
                <img src={UserIcon} alt="" className="mr-2" />
                <p className="ml-8">Pusat Sumber Daya Mineral, Batubara, dan Panas Bumi</p>
              </div>
              <p>Badan Geologi melalui Pusat Sumber Daya Mineral Batubara dan Panas Bumi pada tanggal 17-18 Juli 2023 telah melaksanakan sosialisasi untuk kegiatan survei pengeboran landaian suhu daerah panas bumi Gun....</p>
            </div>
            <div className="w-32 bg-black text-[#F9AE0C] px-2 py-2 text-center rounded-md cursor-pointer">Lanjutkan</div>
          </div>
          <div className="w-[350px] border-2 rounded-lg shadow-md p-4">
            <div className="flex justify-center">
              <img src={Aktiviti} alt="" className="w-[350px] rounded-md" />
            </div>
            <div className="">
              <h3 className="text-black">Sosialisasi Kegiatan Survei Landaian Suhu Daerah Gunung Endut, Kabupaten Lebak, Provinsi Banten</h3>
              <div className="flex items-center">
                <img src={Calendar} alt="" className="mr-2" />
                <p className="ml-8">Senin, 18 September 2023</p>
              </div>
              <div className="flex items-center">
                <img src={UserIcon} alt="" className="mr-2" />
                <p className="ml-8">Pusat Sumber Daya Mineral, Batubara, dan Panas Bumi</p>
              </div>
              <p>Badan Geologi melalui Pusat Sumber Daya Mineral Batubara dan Panas Bumi pada tanggal 17-18 Juli 2023 telah melaksanakan sosialisasi untuk kegiatan survei pengeboran landaian suhu daerah panas bumi Gun....</p>
            </div>
            <div className="w-32 bg-black text-[#F9AE0C] px-2 py-2 text-center rounded-md cursor-pointer">Lanjutkan</div>
          </div>
        </div>
      </div>
      {/* Berita End */}

      {/* Kegiatan Start */}
      <div className="ml-24 mt-14 mr-24">
        <div className="flex justify-between">
          <div>
            <span className="font-bold text-3xl">Kegiatan</span> <span className="text-3xl">Kami</span>
            <p>Dokumentasi foto dari kegiatan kami dalam melaksanakan pelayanan kepada masyarakat.</p>
          </div>
          <div className="border-2 px-3 text-center py-2 w-52 h-12 border-[#242E3A] text-[#242E3A] cursor-pointer rounded-md">Dokumentasi Lainnya</div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-3 gap-x-7 gap-y-5 rounded-md mb-20">
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
        
      </div>
      {/* Kegiatan End */}


      {/* <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 border-
        <div className="w-full h-full bg-[url('./assets/images/activity.jpeg')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>-2 border-blue-500 pb-2">
          Berita Terkini
        </h2>
        <div className="flex flex-wrap justify-between">
          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              image={news.image}
              description={news.description}
              date={news.date}
              onDetailClick={() => handleDetailClick(news.id)}
            />
          ))}
        </div>
      </div> */}
      {/* <div>
        <h1>Your Main Page</h1>
        <WorkAchievementChart data={workAchievementData} />
      </div> */}
      <Footer />
    </div>
  );
};

export default MainPage;
