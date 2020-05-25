import React, {useState} from 'react'
import Viewer from 'react-viewer'
import './ImageViewComponent.css'

const ImageViewComponent = (props:any) => {


    var img = '';

    const [imgShow, setImgShow] = useState(false)
    const [visible, setVisible] = useState(false)

    setTimeout(() => {
        setImgShow(true)
    },5000)

    return (
        <div className='image-container'>
            {props.fileUploaded === true && imgShow === false && (
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
            {imgShow === true && props.fileUploaded === true && props.computed === true && (
                <div>
                    <div><div style={{fontSize: '30px', textTransform: 'uppercase'}}>Result Image</div>(click to enlarge)</div>
                    <img className="result-image" src={require('../../../assets/processed_'+props.fileName)} alt="Processed" onClick={() => setVisible(true)}/>
                    <Viewer
                        images={[{src: require('../../../assets/processed_'+props.fileName) }]}
                        visible={visible}
                        onClose={() => setVisible(false)}
                    />
                    <div className="legend">
                        Legend:
                            <div><div className="proper-kernel"></div> = Proper Rice Kernel</div>
                            <div><div className="improper-kernel"></div> = Improper / Broken Rice Kernel</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImageViewComponent;