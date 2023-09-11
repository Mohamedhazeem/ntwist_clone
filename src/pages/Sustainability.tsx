import { CardLeft } from "../components/CardLeft";
import { CardRight } from "../components/CardRight";

import sustain_1 from "../assets/sustain_1.jpg";
import sustain_2 from "../assets/sustain_2.jpg";
import sustain_3 from "../assets/sustain_3.jpg";
import sustain_4 from "../assets/sustain_4.jpg";

export const Sustainability = () => {
  return (
    <div>
      <div className="bg-[#949494] w-screen h-[50%] ">
        <div className="flex flex-col gap-10 w-full sm:w-[50%] px-14 py-40">
          <p className="lg:text-5xl md:text-3xl text-xl font-extrabold">
            Sustainability
          </p>
          <p className="lg:leading-7 md:leading-5 text-justify">
            Environmental stewardship is a priority for NTWIST. We help our
            customers to minimize their Carbon impact on the planet.
          </p>
        </div>
      </div>
      <CardRight
        description="With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics."
        showButton={false}
        image={sustain_1}
      />
      <CardLeft
        description="Implementation of online greenhouse gas (GHG) emissions tracking is the first step towards GHG reduction. NTWIST’s software automatically counts Scope 1 and 2 GHG emissions."
        showButton={false}
        image={sustain_2}
      />
      <CardRight
        description="NTWIST’s optimization solutions for mills, concentrators and leach plants take into account how process control decisions impact energy usage and GHG emissions. They can help you operate the process better while minimizing or at least capping the environmental impact. "
        showButton={false}
        image={sustain_3}
      />
      <CardLeft
        description="Whether you need a regulatory report or an online public-facing dashboard, NTWIST’s software will make it happen for you. With automated reporting, our software can free up your time for what truly matters — finding ways to reduce GHG emissions."
        showButton={false}
        image={sustain_4}
      />
    </div>
  );
};
