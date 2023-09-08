import { useState } from "react";
import { ShowFullPageNavPanel } from "./FullPageNavPanel";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [isSubIndustryMenuShow, setIsSubIndustryMenuShow] = useState(false);
  const [isShowFullPageNavPanel, setShowFullPageNavPanel] = useState(false);

  return (
    <div>
      <NavBar
        isSubIndustryMenuShow={isSubIndustryMenuShow}
        setIsSubIndustryMenuShow={setIsSubIndustryMenuShow}
        setShowFullPageNavPanel={setShowFullPageNavPanel}
      />

      {
        <ShowFullPageNavPanel
          isShowFullPageNavPanel={isShowFullPageNavPanel}
          setShowFullPageNavPanel={setShowFullPageNavPanel}
        />
      }
    </div>
  );
};
