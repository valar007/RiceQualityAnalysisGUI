import React, { useState } from "react";
import "./MainContent.sass";
import UploadModalComponent from "../../components/common/UploadModalComponent/UploadModalComponent";
import ResultComponent from "../../components/common/ResultComponent/ResultComponent";
import ImageViewComponent from "../../components/common/ImageViewComponent/ImageViewComponent";

const UploadModal = React.createContext(false);


const MainContent = () => {
  
  const [fileUploaded, setFileUploaded] = useState(false)
  const [computed, setComputed] = useState(undefined)
  const [pbk, setPbk] = useState(undefined)
  const [quality, setQuality] = useState(undefined)
  const [fileName, setFileName] = useState(undefined)

  const setFileUploadedFn = (val:any) => {
    setFileUploaded(val)
  }
  const setComputedFn = (val:any) => {
    setComputed(val)
  }
  const setPbkFn = (val:any) => {
    setPbk(val)
  }
  const setFileNameFn = (val:any) => {
    setFileName(val)
  }
  const setQualityFn = (val:any) => {
    setQuality(val)
  }

  return (
    <div className="container">
      <div className="header">Rice Quality Ananlysis</div>
      <UploadModal.Provider value={false}>
        <UploadModalComponent setFileUploaded={setFileUploadedFn} setComputed={setComputedFn} setPbk={setPbkFn} setQuality={setQualityFn} setFileName={setFileNameFn}/>
        <ResultComponent fileUploaded={fileUploaded} computed={computed} fileName={fileName} pbk={pbk} quality={quality}/>
      </UploadModal.Provider>
      <ImageViewComponent />
    </div>
  );
};

export default MainContent;
