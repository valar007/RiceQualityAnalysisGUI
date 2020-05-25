import React from 'react'
import './ResultComponent.css'


const ResultComponent = (props:any) => {
    return(
        <div className="result-component">
            {props.fileUploaded === false && props.computed === undefined && (
                <div>
                    Click the <strong>&#8599;</strong> button to upload an image!
                </div>
            )}
            {props.fileUploaded === true && props.computed === undefined  && (
                <div>
                    <div className="spinner">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                    </div>
                </div>
            )}
            {props.computed && (
                <div>
                    <div className="result-header">Results</div>
                    <div className="result">
                        <div className="individual-result">Percentage of broken kernels&#40;PBK&#41;: {props.pbk}%</div>
                        <div className="individual-result">Quality: {props.quality}</div>
                        <div className="individual-result">Server file name: {props.fileName}</div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default ResultComponent