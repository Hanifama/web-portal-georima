import React, { useEffect, useState } from "react";
import Header from "../component/Navbar";
import Footer from "../component/Footer";
import MainContent from "../component/Content/main";
<<<<<<< HEAD
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
import Georima from "../assets/images/georima.png";
import Sirima from "../assets/images/sirima.png";
import Simbakun from "../assets/images/simbakun.png";
import Andini from "../assets/images/andini.png";
import Simanis from "../assets/images/simanis.png";
import Lastri from "../assets/images/lstri.png";
import Sigina from "../assets/images/sigina.png";
=======
import ActivityCard from "../component/Content/activity";
// import NewsCard from "../component/Content/news";
import ServiceCard from "../component/Content/service";
// import WorkAchievementChart from '../component/Content/chart';
// import Poligon from "../assets/icon/Polygon 3.png";
// import Phone from "../assets/icon/phone-icon.svg";
// import Mail from "../assets/icon/mail-icon.svg";
// import Maps from "../assets/icon/maps-icon.svg";
// import Clock from "../assets/icon/clock-icon.svg";
import axios from 'axios';
import NewsCard from "../component/Content/news";
import Profile from "../component/Content/profile";
>>>>>>> 98c4dc76d81138a9608fa865e0798bdbe7a255d2


interface NewsItem {
  guid: string;
  title: string;
  image: string;
  description: string;
  createdAt: string;
}

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
<<<<<<< HEAD

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

=======

  // const [isTugas, setIsTugas] = useState(false);
  // const [isFungsi, setIsFungsi] = useState(false);
  // const [isInformasi, setIsInformasi] = useState(false);

  const url = "https://georima.pptik.id/api/v1/activities/public/get?page=1&limit=10";
  const [news, setNews] = useState<NewsItem[]>([]);

  const getDataNews = async () => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const dataNews: NewsItem[] = response.data.data;
      setNews(dataNews);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataNews();
  }, []);

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

>>>>>>> 98c4dc76d81138a9608fa865e0798bdbe7a255d2
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
      <div className="bg-gray-200 flex py-6 px-10 font-readex">
        <div className="bg-white rounded-xl shadow-lg w-full max-h-fit">
          <Profile />
        </div>
      </div>

      {/* Berita start */}
      <div className="mx-24 mt-6">
        <div className="flex justify-between">
          <div>
            <span className="font-bold text-3xl">Berita</span> <span className="text-3xl">Terkini</span>
            <p>Semua berita terkait satker Pusat Sumber Daya Mineral, Batubara dan Panas Bumi akan ditampilkan di sini :</p>
          </div>
          <div className="border-2 px-6 py-2 w-40 h-12 rounded-md border-[#242E3A] text-[#242E3A] cursor-pointer">Berita Lainnya</div>
        </div>
        {/* <NewsCard /> */}
        <div className="flex flex-wrap justify-between">
          {Array.isArray(news) && news.length > 0 ? (
            news.map((newsItem) => (
              // <div key={newsItem.guid}>
              //   <h2>{newsItem.title}</h2>
              //   <img src={`https://georima.pptik.id/api/${newsItem.image}`} alt={newsItem.title} />
              //   <p>{newsItem.description}</p>
              //   <p>Tanggal: {newsItem.createdAt}</p>
              // </div>
              <NewsCard
                key={newsItem.guid}
                title={newsItem.title}
                image={`https://georima.pptik.id/api/${newsItem.image}`}
                description={newsItem.description}
                date={newsItem.createdAt}
              // onDetailClick={newsItem.guid}
              />
            ))
          ) : (
            <p>Tidak ada data.</p>
          )}
        </div>
      </div>
      {/* Berita End */}

      {/* Kegiatan Start */}
      <div className="mx-24 mt-14">
        <div className="flex justify-between">
          <div>
            <span className="font-bold text-3xl">Kegiatan</span> <span className="text-3xl">Kami</span>
            <p>Dokumentasi foto dari kegiatan kami dalam melaksanakan pelayanan kepada masyarakat.</p>
          </div>
          <div className="border-2 px-3 text-center py-2 w-52 h-12 border-[#242E3A] text-[#242E3A] cursor-pointer rounded-md">Dokumentasi Lainnya</div>
        </div>
        <ActivityCard />
      </div>
      {/* Kegiatan End */}

      {/* Pelayanan Start */}
      <ServiceCard />
      {/* Pelayanan End */}


      {/* Contact start */}
      <div className="mx-24 mt-8 font-readux">
        <span className="text-4xl">Ikuti Terus</span> <br />
        <span className="text-4xl font-bold">Update Berita Dari Kami</span>
        <form action="" className="grid grid-cols-3 gap-4 mt-5">
          <div className="flex flex-col">
            <label htmlFor="nama1">Nama Lengkap</label>
            <input type="text" id="nama1" className="border-2 px-2 py-2 rounded-md" placeholder="Nama Lengkap Kamu" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nama2">Nama Perusahaan</label>
            <input type="text" id="nama1" className="border-2 px-2 py-2 rounded-md" placeholder="Input Nama Perusahaan" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nama3">Email</label>
            <input type="text" id="nama1" className="border-2 px-2 py-2 rounded-md" placeholder="Email@kamu.com" />
          </div>
        </form>
        <div className="w-28 px-1 py-2 text-center mt-3 mb-8 ml-auto rounded-md bg-[#242E3A] text-[#F9AE0C]">Kirim</div>
      </div>
      {/* contact end */}


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

      {/* <div>
        <h1>Your Main Page</h1>
        <WorkAchievementChart data={workAchievementData} />
      </div> */}
      <Footer />
    </div>
  );
};

export default MainPage;
