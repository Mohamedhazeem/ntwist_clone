import { MdClose } from "react-icons/md";
import logoDark from "../assets/ntwist-logo-dark.png";
import { navFullPagePanelType } from "../App";

export const ShowFullPageNavPanel = (props: navFullPagePanelType) => {
  if (props.isShowFullPageNavPanel) {
    return (
      <section className="absolute bg-white w-screen h-screen">
        <div className="grid grid-flow-row">
          <div className="flex flex-row justify-between m-10">
            <img className=" w-36 h-auto" src={logoDark} alt="NTWIST" />
            <button onClick={() => props.setShowFullPageNavPanel(false)}>
              {<MdClose size={40} />}
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
};
