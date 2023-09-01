import logo from "../assets/ntwistlight.png";
import homeImage from "../assets/Dassault-1680x600.png";
import homeNetworkImage from "../assets/home-image-icons-v6.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";

export const Header = () => {
  const [isSubIndustryMenuShow, setIsSubIndustryMenuShow] = useState(false);

  const showFullPageNavPanel = () => {
    <div></div>;
  };
  return (
    <>
      <nav className=" absolute w-screen h-screen">
        <div className="flex flex-row justify-between items-center px-10 pt-2">
          <img className=" w-36 h-auto" src={logo} alt="NTWIST" />
          <div className="md:block hidden">
            <div className="flex flex-row gap-6 text-lg font-medium">
              <a href="#"> Home</a>
              <div
                className="flex items-center"
                onMouseEnter={() => setIsSubIndustryMenuShow(true)}
                onMouseLeave={() => setIsSubIndustryMenuShow(false)}
              >
                <a href="#">Industries</a>
                <BiSolidDownArrow />
                <div
                  className={` absolute bg-white rounded-md mt-5 p-4 translate-y-[60%] z-[1] transition duration-1000 ${
                    isSubIndustryMenuShow
                      ? "opacity-100 text-blue-700"
                      : "opacity-0 text-red-700"
                  }`}
                >
                  <ul className="leading-10">
                    <li> Sustainability</li>
                    <li> Mineral Processing</li>
                    <li> Mine-To-Mile-To-Mine Operation</li>
                    <li> Oil and Gas</li>
                  </ul>
                </div>
              </div>

              <a href="#"> AI Software</a>
              <a href="#"> Blog</a>
              <a href="#"> Contact Us</a>
            </div>
          </div>
          <a
            className="md:hidden block"
            href=""
            onClick={() => showFullPageNavPanel}
          >
            {<RiMenu2Fill size={30} />}
          </a>
        </div>
      </nav>
      <div className="absolute top-1/2 -translate-y-1/2 px-10 w-[45%]">
        <p className="font-bold sm:text-5xl text-xl text-white">
          Data powered solutions
        </p>
        <p className="font-bold sm:text-5xl text-xl text-white">
          for Industrial Excellence
        </p>
      </div>
      <img
        className="absolute left-3/4 top-1/2 -translate-x-[65%] -translate-y-1/2 w-[50%] h-auto"
        src={homeNetworkImage}
        alt=""
      ></img>
      <img className="bg-cover h-screen" src={homeImage} alt=""></img>
    </>
  );
};
