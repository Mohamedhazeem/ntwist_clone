import { BiSolidDownArrow } from "react-icons/bi";
import { RiMenu2Fill } from "react-icons/ri";
import logo from "../assets/ntwistlight.png";
import darkLogo from "../assets/ntwist-logo-dark.png";
import { navBarType } from "../App";
import { useEffect, useState } from "react";

export const NavBar = ({
  setIsSubIndustryMenuShow,
  isSubIndustryMenuShow,
  setShowFullPageNavPanel,
}: navBarType) => {
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 5
        ? setStickyClass("fixed z-50")
        : setStickyClass("absolute");
    }
  };
  return (
    <nav className={`${stickyClass} w-screen h-screen`}>
      <div
        className={`       
        ${
          stickyClass == "absolute" ? "bg-transparent" : "bg-white"
        } flex flex-row justify-between items-center px-10 py-2`}
      >
        <img
          className=" w-36 h-auto"
          src={stickyClass == "absolute" ? logo : darkLogo}
          alt="NTWIST"
        />
        <div className="lg:block hidden">
          <div
            className={` transition duration-700 ease-in-out 
          ${
            stickyClass == "absolute" ? "text-white" : "text-blue-800"
          } flex flex-row gap-6 text-lg font-medium`}
          >
            <a href="#"> Home</a>
            <div
              className="flex items-center"
              onMouseEnter={() => setIsSubIndustryMenuShow(true)}
              onMouseLeave={() => setIsSubIndustryMenuShow(false)}
            >
              <a href="#">Industries</a>
              <div className="mt-1 ml-1">
                <BiSolidDownArrow size={10} />
              </div>
              <div
                className={` absolute bg-white rounded-md mt-5 p-4 translate-y-[60%] z-[1] transition duration-1000 ${
                  isSubIndustryMenuShow ? "opacity-100" : "opacity-0"
                }`}
              >
                <ul className="leading-10">
                  <li>
                    <a href="#">Sustainability</a>
                  </li>
                  <li>
                    <a href="#">Mineral Processing</a>
                  </li>
                  <li>
                    <a href="#">Mine-To-Mile-To-Mine Operation</a>
                  </li>
                  <li>
                    <a href="#">Oil and Gas</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#"> AI Software</a>
            <a href="#"> Blog</a>
            <a href="#"> Contact Us</a>
          </div>
        </div>
        <a
          className="lg:hidden block"
          href=""
          onClick={(e) => {
            e.preventDefault();
            setShowFullPageNavPanel(true);
          }}
        >
          {<RiMenu2Fill size={30} />}
        </a>
      </div>
    </nav>
  );
};
