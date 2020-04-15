import React from "react";
import "./MainContent.sass";
import ButtonComponent from "../../components/common/ButtonComponent/ButtonComponent";

const UploadModal = React.createContext(false);

const MainContent = () => {
  return (
    <div className="container">
      <div className="header">Rice Quality Ananlysis</div>
      <UploadModal.Provider value={false}>
        <ButtonComponent buttonText="Upload image for training the model" />
        <ButtonComponent buttonText="Upload image to find out the quality of rice" />
      </UploadModal.Provider>
    </div>
  );
};

export default MainContent;
