import homeImage from "../assets/Dassault-1680x600.png";
import homeNetworkImage from "../assets/home-image-icons-v6.png";
import { useState } from "react";
import { ShowFullPageNavPanel } from "./FullPageNavPanel";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [isSubIndustryMenuShow, setIsSubIndustryMenuShow] = useState(false);
  const [isShowFullPageNavPanel, setShowFullPageNavPanel] = useState(false);

  return (
    <>
      <NavBar
        isSubIndustryMenuShow={isSubIndustryMenuShow}
        setIsSubIndustryMenuShow={setIsSubIndustryMenuShow}
        setShowFullPageNavPanel={setShowFullPageNavPanel}
      />
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
      {
        <ShowFullPageNavPanel
          isShowFullPageNavPanel={isShowFullPageNavPanel}
          setShowFullPageNavPanel={setShowFullPageNavPanel}
        />
      }
      <img className="bg-cover h-screen" src={homeImage} alt=""></img>
    </>
  );
};
