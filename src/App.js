import React from "react";
import "./App.css";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import BackgroundComponent from "./components/BackgroundComponent/BackgroundComponent";
import MainContent from "./container/MainContent/MainContent";
function App() {
  return (
    <React.Fragment>
      <BackgroundComponent />
      <MainContent />
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
