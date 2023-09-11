import { CardLeft } from "../components/CardLeft";
import { CardRight } from "../components/CardRight";

import mineral_1 from "../assets/mineral_1.jpg";
import mineral_2 from "../assets/mineral_2.jpg";
import mineral_3 from "../assets/mineral_3.jpg";
import mineral_4 from "../assets/mineral_4.jpg";

export const Mineral = () => {
  return (
    <div>
      <div className="bg-[#949494] w-screen h-[50%] ">
        <div className="flex flex-col gap-10 w-full sm:w-[50%] px-14 py-40">
          <p className="lg:text-5xl md:text-3xl text-xl font-extrabold">
            Mineral Processing
          </p>
          <p className="lg:leading-7 md:leading-5 text-justify">
            NTWIST offers a number of solutions for mills, concentrators, and
            leach plants.
          </p>
          <p className="lg:leading-7 md:leading-5 text-justify">
            Our solutions help operations to reduce the effect of feed
            variability, avoid downtime and increase peak throughput while
            decreasing energy and reagent consumption
          </p>
        </div>
      </div>
      <CardRight
        title="Mill Feed Identification And Tracking"
        description="Variability in hardness and mineralogy of run-of-mine ore is a serious problem that reduces throughput and causes recovery issues downstream. NTWIST addresses this issue by offering a solution that identifies feed origin and provides grade and lithology tracking throughout feed stockpiles. With the help of our mill feed identification and tracking solutions, a gold operation processing 2 mil tons of ore from multiple sources can increase throughput and improve recovery to generate additional US $3 mil/year"
        showButton={false}
        image={mineral_1}
      />
      <CardLeft
        title="Crushing & Grinding Optimization"
        description="The need to maintain throughput and grind size targets while keeping costs down is what makes comminution so challenging. NTWIST offers a number of solutions to assist mill operators with this task. With the help of computer vision, we can help you detect oversized ore that can cause jams in crusher circuits so the problem can be addressed immediately. Using secondary circuit instrumentation, our solution can generate a continuous estimate of grind size and unbiased pulp density readings. NTWIST’s optimization solution can also provide setpoint recommendations to keep operation on target. With the help of NTWIST’s P80 virtual instrument, a nickel concentrator identified a 20% improvement in grind size target conformance unlocking more than a quarter million dollars a year."
        showButton={false}
        image={mineral_2}
      />
      <CardRight
        title="Flotation Circuit Optimization"
        description="Flotation circuits often bottleneck concentrator operation both in terms of throughput and recovery. NTWIST offers a computer vision solution that can monitor froth quality and alert operators about emerging issues. Coupled with a density virtual instrument, our flotation solution can help stabilize and optimize your flotation circuit "
        showButton={false}
        image={mineral_3}
      />
      <CardLeft
        title="Leaching Optimization"
        description="Pressure leaching processes (HPAL and POX) require significant steam/acid or oxygen addition to promote metal dissolution (or liberation in the case of gold) which drives up operating costs. Temperature, acidity and oxygen addition also affect the output chemistry and, in turn, the cost of downstream refining and the environmental impact of the residue produced. The complexity of the process makes it difficult to model it using chemistry-based models alone. NTWIST tackles the problem by building models based on actual historical data and offering optimal operating setpoints to the operator. An assessment of NTWIST’s optimization solution for Ambatovy carried out by Sherritt Technologies uncovered potential annual savings of US $1.7 mil. "
        showButton={false}
        image={mineral_4}
      />
    </div>
  );
};
