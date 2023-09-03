import "./App.css";

import { Header } from "./components/Header";

export type navBarType = {
  isSubIndustryMenuShow: boolean;
  setIsSubIndustryMenuShow: (isShow: boolean) => void;
  setShowFullPageNavPanel: (isShow: boolean) => void;
};
export type navFullPagePanelType = {
  isShowFullPageNavPanel: boolean;
  setShowFullPageNavPanel: (isShow: boolean) => void;
};
function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
