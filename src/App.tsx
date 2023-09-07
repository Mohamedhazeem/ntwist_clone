import "./App.css";
import { Home } from "./pages/Home";

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
  title: string;
  description: string;
  subDescription?: string;
  buttonDescription: string;
  image: string;
};

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
