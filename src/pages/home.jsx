import Navbar from "../components/navbar";
import chara from "../assets/chara.png";
import chara2 from "../assets/chara2.png";
import dongeng from "../assets/dongeng.png";
import pembelajaran from "../assets/pembelajaran.png";
import tembang_macapat from "../assets/tempbang_macapat.png";
import aksara from "../assets/aksara.png";
import tembang_macapat2 from "../assets/tembang_macapat2.png";
import tarian from "../assets/tarian.png";
import ayoSinau from "../assets/ayo_sinau.png";
import HomePageCard from "../components/homePageCard";
import KuisCard from "../components/kuisCard";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <section
        className="w-full h-s h-[calc(100vh-12rem)] overflow-hidden "
        id="hero"
      >
        <div className="container flex flex-row mx-auto">
          <div className="basis-1/2">
            <div className="gap-5 px-10 mx-auto mt-5 w-fit">
              <div className="px-4 py-2 text-xl font-semibold rounded-lg bg-[#fee799] w-fit">
                <h3>🖐 Halo Semuanya</h3>
              </div>
              <div className="flex flex-col w-full h-full gap-2 pt-5 pb-20 text-5xl font-semibold text-justify ">
                <p>Aku Bawika</p>
                <p>Belajar Bahasa Jawa,</p>
                <p>Menghidupkan Budaya</p>
              </div>
            </div>
          </div>
          <div className="basis-1/2 ">
            <img className="w-full px-12 my-1 h-fit " src={chara} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#fee799]">
        <div className="container px-10 mx-auto my-16">
          <h3 className="text-4xl font-semibold">Lihat keseruannya dibawah!</h3>
          <div className="flex flex-col gap-16 mt-8">
            <HomePageCard
              name={"Dongeng Anak"}
              description={
                "Dongeng anak dengan berbagai kisah yang menarik, penuh pelajaran budaya Jawa yang asyik dan seru!"
              }
              src={dongeng}
              to={"/dongeng"}
            />
            <HomePageCard
              name={"Materi Pembelajaran"}
              description={
                "Belajar budaya dan bahasa Jawa, seru, penuh makna, dan melestarikan warisan leluhur."
              }
              src={pembelajaran}
              to={"/materipembelajaran"}
            />
            <HomePageCard
              name={"Tembang Jawa"}
              description={
                "Belajar budaya dan bahasa Jawa, seru, penuh makna, dan melestarikan warisan leluhur."
              }
              src={tembang_macapat}
              to={"/tembangjawa"}
            />
          </div>
        </div>
      </section>
      <section className="container px-10 py-10 mx-auto">
        <div className="flex flex-row">
          <div className="flex flex-col gap-4 basis-1/2 mt-36">
            <h3 className="text-5xl font-semibold">Event Terbaru</h3>
            <div className="flex flex-col gap-3 text-2xl font-semibold text-neutral-500">
              <p>
                Join berbagai event seru dan lomba budaya serta bahasa Jawa!
                Jangan lewatkan kesempatan untuk mendalami kearifan lokal
                melalui rangkaian acara menarik, dari pentas seni, lomba aksara,
                hingga kompetisi cerita rakyat. Bersama-sama kita lestarikan
                budaya dan bahasa Jawa dengan semangat dan cinta. Yuk, ajak
                keluarga dan teman-teman untuk ikut serta dan bangkitkan jiwa
                Jawa dalam setiap langkah kita!
              </p>
            </div>
            <Link
              className="px-8 py-4 mt-8 text-2xl font-semibold border-4 border-gray-600 rounded-lg text-neutral-600 w-fit"
              to={"/event"}
            >
              Lihat Selengkapnya
            </Link>
          </div>
          <div className="basis-1/2">
            <img className="w-full h-fit" src={chara2} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#fee799]">
        <div className="container px-10 mx-auto my-16">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="text-5xl font-semibold">Berbagai Kuis Menarik</h3>
            <p className="text-2xl font-semibold text-neutral-600">
              Untuk meningkatkan pengetahuanmu terhadap budaya serta bahasa jawa
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-8">
            <KuisCard
              name={"Kuis Aksara Jawa"}
              src={aksara}
              to={"#"}
              lock={true}
            />
            <KuisCard
              name={"Kuis Tarian Daerah"}
              src={tarian}
              to={"#"}
              lock={true}
            />
            <KuisCard
              name={"Kuis Tembang Macapat"}
              src={tembang_macapat2}
              to={"#"}
              lock={true}
            />
            <KuisCard
              name={"Kuis Bahasa Jawa"}
              src={ayoSinau}
              to={"#"}
              lock={true}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
