import { CardLeft } from "../components/CardLeft";
import { CardRight } from "../components/CardRight";

import oil_1 from "../assets/oil_1.jpg";
import oil_2 from "../assets/oil_2.jpg";

export const Oil = () => {
  return (
    <div>
      <div className="bg-[#949494] w-screen h-[50%] ">
        <div className="flex flex-col gap-10 w-full sm:w-[50%] px-14 py-40">
          <p className="lg:text-5xl md:text-3xl text-xl font-extrabold">
            Oil & Gas
          </p>
          <p className="lg:leading-7 md:leading-5 text-justify">
            Oil and Gas plants require a high level of control and robustness in
            their operation due to the high risks to people and environment.
            NTWIST helps O&G customers analyze historical data, identify
            opportunities for process control improvements, and reduce
            variability in any part of the process, thus providing enhanced
            reliability and safety.
          </p>
        </div>
      </div>
      <CardRight
        title="Bitumen Flotation Level Detection"
        description="Oil sands are a challenging source of bitumen. Operating a primary separation cell efficiently requires careful balancing of multiple parameters — a difficult task considering the poor visibility inside the apparatus. NTWIST offers a computer vision solution that monitors the level of middlings continuously and autonomously."
        showButton={false}
        image={oil_1}
      />
      <CardLeft
        title="Pipeline Pumping Optimization"
        description="NTWIST’s Clairvoyance solution is designed to help pipeline operators consistently achieve flow rate targets, minimize input costs, reduce the carbon footprint — all while optimizing pipeline life. Its machine learning engine analyzes millions of possible permutations of pipeline parameters (e.g. pump regime, injection of drag reducing agents, pipeline length/ elevations/ pressure, etc.) to generate the best flow rate at any given time."
        showButton={false}
        image={oil_2}
      />
    </div>
  );
};
