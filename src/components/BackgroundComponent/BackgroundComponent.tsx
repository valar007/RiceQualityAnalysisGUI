import React from "react";
import "./BackgroundComponent.css";

const BackgroundComponent = () => {
  return (
    <div className="background-animation">
      <div id="background"></div>
      <div id="midground"></div>
      <div id="foreground"></div>
    </div>
  );
};

export default BackgroundComponent;
