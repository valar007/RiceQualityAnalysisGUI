import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import request from 'superagent'
import "./UploadModalComponent.css";
const UploadModalComponent = (props: any) => {
  let returnedData:any = {}
  const onDrop = useCallback((acceptedFiles) => {
    props.setFileUploaded(true)
    const req = request.post("http://localhost:8000/upload")
    req.attach(acceptedFiles[0].name, acceptedFiles[0])
    .then(res => {
      const prom = new Promise((res1,rej) => {
        res1(res.body)
      })
      .then((val:any) => {
        props.setFileUploaded(true)
        props.setComputed(val.computed)
        props.setFileName(val.fileName)
        props.setPbk(val.pbk)
        props.setQuality(val.quality)
      })
    })
  }, [props]);
  const { getRootProps, getInputProps, acceptedFiles} = useDropzone({ 
    onDrop,
    noDrag: true, 
    accept: 'image/jpeg',
    disabled: props.calculatingResult,
  });

  return (
    <div {...getRootProps()} className="upload-modal">
      <input {...getInputProps()} />
      {acceptedFiles.length === 0 && <p>Click here to upload the image</p>}
      {acceptedFiles.length > 0 && <p>The file selected: {acceptedFiles[0].name}</p>}
    </div>
  );
};

export default UploadModalComponent;
