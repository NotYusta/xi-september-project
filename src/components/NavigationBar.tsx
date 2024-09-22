import { Link } from "react-router-dom";
import Banner from "@/assets/banner.webp";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => {
    if (window.screen.width > 768) {
      return;
    }


    setMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {!isMobileOpen && (
        <button
          className="absolute right-0 md:hidden"
          onClick={() => {
            setMobileOpen(true);
          }}
        >
          <div className="flex flex-col gap-3 p-4 group">
            <div className="w-10 h-1 p-0 m-0 bg-white group-hover:bg-blue-400" />
            <div className="w-10 h-1 p-0 m-0 bg-white group-hover:bg-blue-400" />
            <div className="w-10 h-1 p-0 m-0 bg-white group-hover:bg-blue-400" />
          </div>
        </button>
      )}
      <nav
        className={`w-full bg-gray-900 text-lg md:px-4  ${
          isMobileOpen ? "fixed min-h-screen z-[1]" : "hidden"
        } md:block`}
      >
        <div className="py-5 flex flex-col justify-between mx-auto items-center lg:w-[80%] md:flex-row ">
          <div className="flex items-center justify-between w-full px-4 md:w-auto">
            <img src={Banner} className="h-16 md:h-12" />
            {isMobileOpen && (
              <button className="md:hidden" onClick={toggleMobile}>
                <div className="flex flex-col gap-3 p-1 group">
                  <FontAwesomeIcon icon={faClose} className="text-white h-10" />
                </div>
              </button>
            )}
          </div>

          <ul className="flex flex-col py-20 gap-3 md:gap-0 md:py-0 md:flex-row justify-between items-center text-white font-bold capitalize  lg:w-[30%]">
            <li>
              <Link
                className="transition-all duration-300 hover:text-blue-400"
                to="/"
                onClick={toggleMobile}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-blue-400"
                to="/portofolio"
                onClick={toggleMobile}
              >
                Portofolio
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-blue-400"
                to="/about"
                onClick={toggleMobile}
              >
                About
              </Link>
            </li>
          </ul>

          <div className="flex">
            <Link to={`https://chat.whatsapp.com/`}>
              <button className="transition-all duration-300 text-white font-semibold py-1 px-8 md:py-2 md:px-12 bg-blue-500 rounded-3xl hover:text-blue-500 hover:bg-white">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
