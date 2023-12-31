import { CardRight } from "../components/CardRight";
import { CardLeft } from "../components/CardLeft";

import image1 from "../assets/image_1.jpg";
import image2 from "../assets/image_2.jpg";
import image3 from "../assets/image_3.jpg";
import image4 from "../assets/image_4.jpg";
import homeImage from "../assets/Dassault-1680x600.png";
import homeNetworkImage from "../assets/home-image-icons-v6.png";

export type navBarType = {
  isSubIndustryMenuShow: boolean;
  setIsSubIndustryMenuShow: (isShow: boolean) => void;
  setShowFullPageNavPanel: (isShow: boolean) => void;
};
export type navFullPagePanelType = {
  isShowFullPageNavPanel: boolean;
  setShowFullPageNavPanel: (isShow: boolean) => void;
};

export type CardContent = {
  title?: string;
  description: string;
  subDescription?: string;
  showButton?: boolean;
  linkTo?: string;
  buttonDescription?: string;
  image: string;
};

export const Home = () => {
  return (
    <>
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
      <CardRight
        title="Mine-To-Mill-To-Mine Optimization"
        description="NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."
        showButton={true}
        buttonDescription="Read More"
        linkTo="/mine"
        image={image1}
      />
      <CardLeft
        title="Sustainability"
        description="Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers."
        subDescription="With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics."
        showButton={true}
        buttonDescription="Read More"
        linkTo="/sustainability"
        image={image2}
      />
      <CardRight
        title="Mineral Processing"
        description="NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption."
        showButton={true}
        buttonDescription="Read More"
        linkTo="/mineral"
        image={image3}
      />
      <CardLeft
        title="Oil & Gas"
        description="Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. "
        subDescription="NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety."
        showButton={true}
        buttonDescription="Read More"
        linkTo="/oil"
        image={image4}
      />
    </>
  );
};
