import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
