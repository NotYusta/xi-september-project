import CastleIsland from "@/assets/castle_island.webp";
import FarmerVillage from "@/assets/farmer_village.webp";
import SmallJapanese from "@/assets/small_japanese.webp";
import CastleTwo from "@/assets/castle_two.jpg";

import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Link } from "react-router-dom";
import { URLPrefix } from "@/Constants";

const About = () => {
  return (
    <>
      <DefaultLayout>
        <main className="bg-slate-900 min-h-screen min-w-full py-5 text-rose-500 bg-opacity-50">
          <section
            id="about"
            className="flex flex-col py-20 px-5 lg:px-20 max-w-[75%] mx-auto"
          >
            <div className="text-center pb-10">
              <h1 className="text-5xl font-bold text-blue-500 animate-fadeup-1.5s">
                Welcome to Raznar Lab!
              </h1>
            </div>

            <div id="works-desktop" className="hidden lg:flex flex-col">
              {/* First section - Image on left, description on right */}
              <div className="flex flex-col lg:flex-row items-center py-10 animate-faderight-1.5s">
                <img
                  src={CastleIsland}
                  alt="Castle Island"
                  className="object-cover transition-all duration-300 h-72 border border-sky-500 border-4 scale-95 hover:scale-100 mb-5 lg:mb-0 lg:mr-10"
                />
                <p className="text-white text-lg lg:text-2xl font-semibold p-4">
                  At Raznar Lab, we have spent years in the Minecraft industry,
                  building a reputation as one of the most respected Minecraft
                  build teams. Our expertise allows us to create breathtaking
                  and detailed environments that push the creative limits of the
                  game. We thrive on turning ideas into stunning Minecraft
                  worlds that captivate and inspire.
                </p>
              </div>

              {/* Second section - Image on right, description on left */}
              <div className="flex flex-col lg:flex-row items-center py-10 animate-fadeleft-1.5s">
                <p className="text-white text-lg lg:text-2xl font-semibold p-4 lg:mr-10">
                  We are proud to have delivered some of the most unique and
                  engaging Minecraft builds in the industry. From massive
                  landscapes to intricate structures, our team ensures that each
                  project is crafted with care, precision, and a deep
                  understanding of what makes Minecraft both fun and visually
                  striking.
                </p>

                <img
                  src={FarmerVillage}
                  alt="Farmer Village"
                  className="object-cover transition-all duration-300 h-72 border border-sky-500 border-4 scale-95 hover:scale-100 mb-5 lg:mb-0 lg:ml-10"
                />
              </div>

              {/* Third section - Image on left, description on right */}
              <div className="flex flex-col lg:flex-row items-center py-10  animate-faderight-1.5s">
                <img
                  src={SmallJapanese}
                  alt="Small Japanese"
                  className="object-cover transition-all duration-300 h-72 border border-sky-500 border-4 scale-95 hover:scale-100 mb-5 lg:mb-0 lg:mr-10"
                />
                <p className="text-white text-lg lg:text-2xl font-semibold p-4">
                  Our commitment to innovation drives us to create projects that
                  are more than just builds—they are immersive experiences. We
                  believe in pushing boundaries, blending traditional Minecraft
                  aesthetics with cutting-edge design to craft something truly
                  special for our clients.
                </p>
              </div>

              {/* Fourth section - Image on right, description on left */}
              <div className="flex flex-col lg:flex-row items-center py-10 animate-fadeleft-1.5s">
                <p className="text-white text-lg lg:text-2xl font-semibold p-4 lg:mr-10">
                  At Raznar Lab, every project is a collaboration. We work
                  closely with our clients to understand their vision and bring
                  it to life with exceptional attention to detail. Our team
                  ensures that every build not only meets but exceeds
                  expectations, providing a final product that is both creative
                  and functional.
                </p>

                <img
                  src={CastleTwo}
                  alt="Castle Two"
                  className="object-cover transition-all duration-300 h-72 border border-sky-500 border-4 scale-95 hover:scale-100 mb-5 lg:mb-0 lg:ml-10"
                />
              </div>
            </div>

            <div id="works-mobile" className="flex lg:hidden flex-col">
              <div className="flex flex-col lg:flex-row items-center py-10 animate-fadeup">
                <img
                  src={CastleIsland}
                  alt="Castle Island"
                  className="object-cover transition-all duration-300 h-72 border border-sky-500 border-4 scale-95 hover:scale-100 mb-5 lg:mb-0 lg:mr-10"
                />
                <p className="text-white text-lg lg:text-2xl font-semibold p-4 text-center">
                  At Raznar Lab, we have spent years in the Minecraft industry,
                  building a reputation as one of the most respected Minecraft
                  build teams. Our expertise allows us to create breathtaking
                  and detailed environments that push the creative limits of the
                  game. We thrive on turning ideas into stunning Minecraft
                  worlds that captivate and inspire.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center py-10 animate-fadeup">
                <img
                  src={FarmerVillage}
                  alt="Farmer Village"
                  className="object-cover transition-all duration-300 h-72 border border-sky-500 border-4 scale-95 hover:scale-100 mb-5 lg:mb-0 lg:ml-10"
                />

                <p className="text-white text-lg lg:text-2xl font-semibold p-4 lg:mr-10 text-center">
                  We are proud to have delivered some of the most unique and
                  engaging Minecraft builds in the industry. From massive
                  landscapes to intricate structures, our team ensures that each
                  project is crafted with care, precision, and a deep
                  understanding of what makes Minecraft both fun and visually
                  striking.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center py-10  animate-fadeup">
                <img
                  src={SmallJapanese}
                  alt="Small Japanese"
                  className="object-cover transition-all duration-300 h-72 border border-sky-500 border-4 scale-95 hover:scale-100 mb-5 lg:mb-0 lg:mr-10"
                />
                <p className="text-white text-lg lg:text-2xl font-semibold p-4">
                  Our commitment to innovation drives us to create projects that
                  are more than just builds—they are immersive experiences. We
                  believe in pushing boundaries, blending traditional Minecraft
                  aesthetics with cutting-edge design to craft something truly
                  special for our clients.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center py-10 animate-fadeup">
                <img
                  src={CastleTwo}
                  alt="Castle Two"
                  className="object-cover transition-all duration-300 h-72 border border-sky-500 border-4 scale-95 hover:scale-100 mb-5 lg:mb-0 lg:ml-10"
                />

                <p className="text-white text-lg lg:text-2xl font-semibold p-4 lg:mr-10 text-center">
                  At Raznar Lab, every project is a collaboration. We work
                  closely with our clients to understand their vision and bring
                  it to life with exceptional attention to detail. Our team
                  ensures that every build not only meets but exceeds
                  expectations, providing a final product that is both creative
                  and functional.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-3 gap-5 animate-fadeup-1.5s">
              <h1 className="text-3xl font-bold text-white text-center">
                View our Portofolio
              </h1>
              <Link to={`${URLPrefix}/portofolio`}>
                <button className="transition-all duration-300 text-white font-semibold py-1.5 px-8 lg:py-2.5 lg:px-12 bg-blue-500 rounded-3xl hover:text-blue-500 hover:bg-white">
                  Portofolio
                </button>
              </Link>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default About;
