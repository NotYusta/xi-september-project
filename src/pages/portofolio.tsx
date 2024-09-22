import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

import CastleIsland from "@/assets/castle_island.webp";
import FarmerVillage from "@/assets/farmer_village.webp";
import SmallJapanese from "@/assets/small_japanese.webp";
import CastleTwo from "@/assets/castle_two.jpg";
import CastleThree from "@/assets/castle_three.jpg";
import Coding from "@/assets/coding.jpg";
import Frozchick from "@/assets/frozchick.jpg";
import Raznar from "@/assets/raznar.png";
import FoxyNetwork from "@/assets/foxy_network.png";
import PathNet from "@/assets/path.png";
import { DefaultLayout } from "@/layouts/DefaultLayout";

const PortofolioImages = [
  CastleIsland,
  FarmerVillage,
  SmallJapanese,
  CastleTwo,
  CastleThree,
  Coding,
  Frozchick,
  Raznar,
  FoxyNetwork,
  PathNet,
];

const Portofolio = () => {
  return (
    <>
      <DefaultLayout>
        <main className="bg-slate-900 min-h-screen min-w-full py-5 text-rose-500 bg-opacity-50">
          <section
            id="portofolio"
            className="flex flex-col tracking-wider py-20 overflow-hidden"
          >
            <div className="flex flex-col text-xl px-5 md:text-4xl md:px-0 font-bold text-center mx-auto animate-fadeup-1.5s">
              <h1 className="text-blue-500">Our Works</h1>
              <h2 className="text-white">Where quality meets creativity!</h2>
            </div>
            <div className="max-w-[75%] mx-auto py-12">
              <div className="flex flex-wrap justify-center gap-10 animate-fadeup-1.5s overflow-hidden">
                {PortofolioImages.map((p, k) => (
                  <img
                    src={p}
                    alt=""
                    key={k}
                    className="object-cover transition-all duration-300 h-64 border border-sky-500 border-4 scale-95 hover:scale-100"
                  />
                ))}
              </div>
              <div id="about-description" className="py-6 animate-fadeup-1.5s">
                <h2 className="text-center text-white font-semibold text-lg md:text-2xl">
                  Our portfolio showcases a wide range of meticulously crafted
                  projects that push the boundaries of design, technology, and
                  functionality. From stunning visual experiences to seamless
                  user interfaces, each project reflects our commitment to
                  delivering exceptional results. Explore our work and see how
                  we bring ideas to life with creativity and precision.
                </h2>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default Portofolio;
