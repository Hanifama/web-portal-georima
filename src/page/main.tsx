import React, { useEffect, useState } from "react";
import Header from "../component/Navbar";
import Footer from "../component/Footer";
import MainContent from "../component/Content/main";
import ActivityCard from "../component/Content/activity";
import ServiceCard from "../component/Content/service";
import NewsCard from "../component/Content/news";
import Profile from "../component/Content/profile";
import service from "../service";

const MainPage: React.FC = () => {
  const [news, setNews] = useState<[]>([]);
  const [activity, setActivity] = useState<[]>([]);
  const [pageNews, setPageNews] = useState<number>(1);
  const [limitNews, setLimitNews] = useState<number>(10);
  const [pageActivity, setPageActivity] = useState<number>(1);
  const [limitActivity, setLimitActivity] = useState<number>(10);

  const getDataNews = async () => {
    try {
      const response = await service.getNewsData(pageNews, limitNews);
      const dataNews = response.data;
      setNews(dataNews);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getDataActivity = async () => {
    try {
      const response = await service.getActivityData(pageActivity, limitActivity);
      const activity = response.data;
      console.log(activity);
      setActivity(activity);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataNews();
    getDataActivity();
  }, []);

  const detailNews = async (guid: string) => {
    console.log(guid)
  };

  const detailActivity = async (guid: string) => {
    console.log(guid)
  };


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
            <span className="font-bold text-3xl">Berita</span>{" "}
            <span className="text-3xl">Terkini</span>
            <p>
              Semua berita terkait satker Pusat Sumber Daya Mineral, Batubara
              dan Panas Bumi akan ditampilkan di sini :
            </p>
          </div>
          <div className="border-2 px-6 py-2 w-40 h-12 rounded-md border-[#242E3A] text-[#242E3A] cursor-pointer">
            Berita Lainnya
          </div>
        </div>
        {/* <NewsCard /> */}
        <div className="flex flex-wrap justify-between">
          {Array.isArray(news) && news.length > 0 ? (
            news.map((newsItem) => (
              <NewsCard onDetailNews={detailNews} data={newsItem} />
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
            <span className="font-bold text-3xl">Kegiatan</span>{" "}
            <span className="text-3xl">Kami</span>
            <p>
              Dokumentasi foto dari kegiatan kami dalam melaksanakan pelayanan
              kepada masyarakat.
            </p>
          </div>
          <div className="border-2 px-3 text-center py-2 w-52 h-12 border-[#242E3A] text-[#242E3A] cursor-pointer rounded-md">
            Dokumentasi Lainnya
          </div>
        </div>
        {Array.isArray(activity) && news.length > 0 ? (
            activity.map((item) => (
              <ActivityCard onDetailActivity={detailActivity} data={item} />
            ))
          ) : (
            <p>Tidak ada data.</p>
          )}
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
            <input
              type="text"
              id="nama1"
              className="border-2 px-2 py-2 rounded-md"
              placeholder="Nama Lengkap Kamu"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nama2">Nama Perusahaan</label>
            <input
              type="text"
              id="nama1"
              className="border-2 px-2 py-2 rounded-md"
              placeholder="Input Nama Perusahaan"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nama3">Email</label>
            <input
              type="text"
              id="nama1"
              className="border-2 px-2 py-2 rounded-md"
              placeholder="Email@kamu.com"
            />
          </div>
        </form>
        <div className="w-28 px-1 py-2 text-center mt-3 mb-8 ml-auto rounded-md bg-[#242E3A] text-[#F9AE0C]">
          Kirim
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
