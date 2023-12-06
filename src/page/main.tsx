import React from "react";
import Header from "../component/Navbar";
import Footer from "../component/Footer";
import MainContent from "../component/Content/main";
import ActivityCard from "../component/Content/activity";
import NewsCard from "../component/Content/news";
import ServiceCard from "../component/Content/service";
import WorkAchievementChart from '../component/Content/chart';
import Poligon from "../assets/icon/Polygon 3.png"


const MainPage: React.FC = () => {
  const activityData = [
    {
      id: 1,
      title: "Penanaman Pohon Serentak untuk Lingkungan Hijau",
      image: "https://example.com/image1.jpg",
      description:
        "Dalam rangka menjaga keberlanjutan lingkungan, Dinas Sumber Daya Alam melakukan penanaman pohon serentak di berbagai wilayah.",
      date: "3 Januari 2023",
    },
    {
      id: 2,
      title: "Pelatihan Pengelolaan Sampah Organik",
      image: "https://example.com/image2.jpg",
      description:
        "Dinas Sumber Daya Alam mengadakan pelatihan untuk pengelolaan sampah organik guna mendukung program daur ulang dan pengurangan limbah.",
      date: "10 Februari 2023",
    },
    {
      id: 3,
      title: "Edukasi Konservasi Hutan bagi Anak-anak Sekolah",
      image: "https://example.com/image3.jpg",
      description:
        "Dinas Sumber Daya Alam bekerja sama dengan sekolah-sekolah setempat untuk memberikan edukasi konservasi hutan kepada anak-anak.",
      date: "18 Maret 2023",
    },
    {
      id: 4,
      title: "Kegiatan Penanggulangan Bencana Alam",
      image: "https://example.com/image4.jpg",
      description:
        "Dinas Sumber Daya Alam terlibat dalam kegiatan penanggulangan bencana alam dan pemulihan ekosistem pasca-bencana.",
      date: "5 April 2023",
    },
    {
      id: 5,
      title: "Rapat Koordinasi Pemantauan Kualitas Udara",
      image: "https://example.com/image5.jpg",
      description:
        "Dinas Sumber Daya Alam menggelar rapat koordinasi untuk pemantauan kualitas udara dan upaya menjaga lingkungan yang bersih.",
      date: "12 Mei 2023",
    },
    {
      id: 6,
      title: "Pengembangan Taman Kota",
      image: "https://example.com/image6.jpg",
      description:
        "Dinas Sumber Daya Alam terlibat dalam pengembangan taman kota sebagai ruang terbuka hijau untuk masyarakat.",
      date: "20 Juni 2023",
    },
    {
      id: 7,
      title: "Kampanye Penanaman Pohon di Sekolah-sekolah",
      image: "https://example.com/image7.jpg",
      description:
        "Dinas Sumber Daya Alam mengadakan kampanye penanaman pohon di sekolah-sekolah untuk mengajarkan pentingnya pelestarian lingkungan.",
      date: "3 Juli 2023",
    },
    {
      id: 8,
      title: "Monitoring Keseimbangan Ekosistem Sungai",
      image: "https://example.com/image8.jpg",
      description:
        "Dinas Sumber Daya Alam melakukan monitoring untuk menjaga keseimbangan ekosistem sungai dan keberlanjutan sumber daya air.",
      date: "15 Agustus 2023",
    },
    {
      id: 9,
      title: "Kunjungan Edukasi ke Hutan Lindung",
      image: "https://example.com/image9.jpg",
      description:
        "Dinas Sumber Daya Alam mengorganisir kunjungan edukasi ke hutan lindung untuk memahamkan masyarakat tentang keberagaman hayati.",
      date: "2 September 2023",
    },
    {
      id: 10,
      title: "Pendampingan Petani dalam Pengelolaan Lahan",
      image: "https://example.com/image10.jpg",
      description:
        "Dinas Sumber Daya Alam memberikan pendampingan kepada petani untuk pengelolaan lahan yang berkelanjutan.",
      date: "18 Oktober 2023",
    },
    {
      id: 11,
      title: "Peluncuran Program Perhutanan Sosial",
      image: "https://example.com/image11.jpg",
      description:
        "Dinas Sumber Daya Alam meresmikan program perhutanan sosial untuk memberdayakan masyarakat lokal dalam pengelolaan hutan.",
      date: "5 November 2023",
    },
    {
      id: 12,
      title: "Kegiatan Rehabilitasi Hutan Mangrove",
      image: "https://example.com/image12.jpg",
      description:
        "Dinas Sumber Daya Alam terlibat dalam kegiatan rehabilitasi hutan mangrove untuk melindungi pantai dari erosi.",
      date: "22 Desember 2023",
    },
  ];

  const newsData = [
    {
      id: 1,
      title: "Peluncuran Program Penanaman 10 Juta Pohon",
      image: "https://example.com/news1.jpg",
      description:
        "Dalam upaya menjaga keberlanjutan lingkungan, dilakukan peluncuran program penanaman 10 juta pohon di berbagai wilayah.",
      date: "5 Februari 2023",
    },
    {
      id: 2,
      title: "Rapat Koordinasi Pemulihan Ekosistem Sungai",
      image: "https://example.com/news2.jpg",
      description:
        "Dinas Sumber Daya Alam mengadakan rapat koordinasi untuk pemulihan ekosistem sungai dan menjaga keberlanjutan sumber daya air.",
      date: "12 Maret 2023",
    },
    {
      id: 3,
      title: "Penghargaan Konservasi Alam Tingkat Nasional",
      image: "https://example.com/news3.jpg",
      description:
        "Dinas Sumber Daya Alam meraih penghargaan konservasi alam tingkat nasional sebagai bentuk pengakuan atas upaya pelestarian alam.",
      date: "25 April 2023",
    },
  ];

  const serviceData = [
    {
      id: 1,
      title: "Portal Georima",
      description:
        "Layanan portal Georima untuk informasi geospasial dan pemetaan.",
      "image": "activity"
    },
    {
      id: 2,
      title: "Layanan Cetak Peta",
      description: "Layanan cetak peta dengan berbagai skala dan detail.",
    },
    {
      id: 3,
      title: "Dokumen Teknis",
      description:
        "Penyediaan dokumen teknis dalam bidang lingkungan dan kehutanan.",
    },
    {
      id: 4,
      title: "Pengaduan Sarana Prasarana Kantor",
      description:
        "Layanan pengaduan terkait sarana dan prasarana kantor Dinas Sumber Daya Alam.",
    },
    {
      id: 5,
      title: "Monitoring Sumur Panas Bumi",
      description:
        "Layanan pemantauan dan analisis data dari sumur panas bumi.",
    },
    {
      id: 6,
      title: "Georima Map",
      description:
        "Aplikasi pemetaan Georima dengan beragam fitur dan informasi geospasial.",
    },
  ];
  const workAchievementData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    values: [50, 60, 75, 80, 90, 85, 70, 65, 75, 80, 90, 95],
  };
  function handleDetailClick(id: number): void {
    console.log(id)
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <MainContent />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
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
      </div>
      <div className="bg-gray-200 flex h-screen p-6 font-readux">
        <div className="bg-white rounded-xl shadow-lg w-full">
          <div className="flex mb-4 w-full p-3">
            <div className="w-1/2 h-12">
              <div className="m-12 border-2 w-96 h-48 rounded-lg"></div>
              <div className="flex items-center">
                <span className="ml-12 font-bold text-3xl">Tugas</span>
                <span className="text-3xl ml-1">Georima</span>
                <img src={Poligon} alt="" className="ml-32 w-3.5" />
              </div>
            </div>
            <div className="w-2/3 h-12 border-2">B</div>
          </div>
        </div>
      </div>
      <div className="p-4">
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
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
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
      </div>
      <div>
        <h1>Your Main Page</h1>
        <WorkAchievementChart data={workAchievementData} />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
