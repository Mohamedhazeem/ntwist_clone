import { MdClose } from "react-icons/md";
import logoDark from "../assets/ntwist-logo-dark.png";
import { navFullPagePanelType } from "../pages/Home";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export const ShowFullPageNavPanel = (props: navFullPagePanelType) => {
  const [showSubIndustry, setShowSubIndustry] = useState(false);
  return (
    <section
      className={`absolute -translate-y-[100%] md:hidden block bg-white w-screen h-screen transition duration-1000 ${
        props.isShowFullPageNavPanel ? " translate-y-0" : "-translate-y-[100%]"
      }`}
    >
      <div className="grid grid-flow-row">
        <div className="flex flex-row justify-between m-10">
          <img className=" w-36 h-auto" src={logoDark} alt="NTWIST" />
          <button
            onClick={() => {
              props.setShowFullPageNavPanel(false);
              setShowSubIndustry(false);
            }}
          >
            {<MdClose size={40} />}
          </button>
        </div>
        <div className="flex flex-col text-2xl font-medium leading-10">
          <a href="#"> Home</a>
          <div
            className="flex items-center"
            onClick={() => setShowSubIndustry(!showSubIndustry)}
          >
            <a href="#">Industries</a>
            <div className="mt-2">
              <MdKeyboardArrowRight size={30} />
            </div>
          </div>
          <div
            className={`relative left-10 text-lg cursor-pointer transition duration-1000 ${
              showSubIndustry ? "block opacity-100" : "opacity-0 hidden"
            }`}
          >
            <ul>
              <li className="transition ease-linear delay-500  text-slate-500 hover:text-slate-700">
                Sustainability
              </li>
              <li className="transition ease-linear delay-500  text-slate-500 hover:text-slate-700">
                Mineral Processing
              </li>
              <li className="transition ease-linear delay-500  text-slate-500 hover:text-slate-700">
                Mine-To-Mile-To-Mine Operation
              </li>
              <li className="transition ease-linear delay-500  text-slate-500 hover:text-slate-700">
                Oil and Gas
              </li>
            </ul>
          </div>
          <a href="#"> AI Software</a>
          <a href="#"> Blog</a>
          <a href="#"> Contact Us</a>
        </div>
      </div>
    </section>
  );
};
