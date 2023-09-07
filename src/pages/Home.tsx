import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardRight } from "../components/CardRight";

import image1 from "../assets/image_1.jpg";
import image2 from "../assets/image_2.jpg";
import image3 from "../assets/image_3.jpg";
import image4 from "../assets/image_4.jpg";
import { CardLeft } from "../components/CardLeft";

export const Home = () => {
  return (
    <>
      <Header />
      <CardRight
        title="Mine-To-Mill-To-Mine Optimization"
        description="NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."
        buttonDescription="Read More"
        image={image1}
      />
      <CardLeft
        title="Sustainability"
        description="Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers."
        subDescription="With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics."
        buttonDescription="Read More"
        image={image2}
      />
      <CardRight
        title="Mineral Processing"
        description="NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption."
        buttonDescription="Read More"
        image={image3}
      />
      <CardLeft
        title="Oil & Gas"
        description="Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. "
        subDescription="NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety."
        buttonDescription="Read More"
        image={image4}
      />
      <Footer />
    </>
  );
};
