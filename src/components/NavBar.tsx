import { BiSolidDownArrow } from "react-icons/bi";
import { RiMenu2Fill } from "react-icons/ri";
import logo from "../assets/ntwistlight.png";
import { navBarType } from "../App";

export const NavBar = ({
  setIsSubIndustryMenuShow,
  isSubIndustryMenuShow,
  setShowFullPageNavPanel,
}: navBarType) => {
  return (
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
          className="md:hidden block"
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
