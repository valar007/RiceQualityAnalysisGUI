import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = (props: any) => {
  return (
    <div>
      <button className="button">{props.buttonText}</button>
    </div>
  );
};

export default ButtonComponent;
