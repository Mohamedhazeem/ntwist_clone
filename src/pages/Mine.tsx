import { CardLeft } from "../components/CardLeft";
import { CardRight } from "../components/CardRight";

import mine_1 from "../assets/mine_1.jpg";
import mine_2 from "../assets/mine_2.jpg";
import mine_3 from "../assets/mine_3.jpg";

export const Mine = () => {
  return (
    <div>
      <div className="bg-[#949494] w-screen h-[50%] ">
        <div className="flex flex-col gap-10 w-full sm:w-[50%] px-14 py-40">
          <p className="lg:text-5xl md:text-3xl text-xl font-extrabold">
            Mine-To-Mill-To-Mine Optimization
          </p>
          <p className="lg:leading-7 md:leading-5 text-justify">
            NTWIST offers a new product that unlocks up to $250/oz in previously
            inaccessible value in open pit gold mines by connecting siloed data
            sources like block models, fleet management systems, stockpile
            surveys, and plant instruments.{" "}
          </p>
        </div>
      </div>
      <CardRight
        description="The mining side of a gold operation is often isolated from downstream ore processing. Although there is plenty of geological information available on the mining side, seldom does a mill receive information about its feed beyond expected averages. The siloed nature of operation also prevents mine planners from learning from downstream indicators (such as plant throughput and gold recovery) and ultimately correcting resource estimation biases. NTWIST’s solution is designed to address these issues in open-pit gold mines. "
        showButton={false}
        image={mine_1}
      />
      <CardLeft
        description="One of the key features of NTWIST’s mine-to-mill-to-mine optimization solution is the ability to track material flow from the mine to the stockpile. By connecting block models, fleet management systems, and stockpile photogrammetry, our software is able to create a granular dynamic block model of the stockpile and provide the downstream plant with real-time information on ore freed properties such as grade and hardness. This level of material tracking enables mills, and leach plants, to make more informed decisions and ultimately improve the overall efficiency of the operation. It is expected that costs can be reduced by up to $30/oz through better blending decisions and revenue can be boosted by up to $90/oz thanks to improved recoveries. "
        showButton={false}
        image={mine_2}
      />
      <CardRight
        description="In addition to material tracking, NTWIST’s software also includes reconciliation and discrepancy analysis features that are designed to reduce losses and dilution and improve production planning. By tracking ore properties throughout the value chain, it is possible to calculate discrepancies that can be attributed to specific block characteristics. This information can then be used to correct resource estimation biases and improve the overall accuracy of the block model. The result is a more accurate and detailed understanding of the ore body, which can lead to increased production and improved profitability for the mine. "
        showButton={false}
        image={mine_3}
      />
    </div>
  );
};
