import React from 'react'
import Viewer from 'react-viewer'
import logo from 'D:/Project Images/White/W3.jpg';

const ImageViewComponent = () => {

    // const img = import('D:/Project Images/White/W3.jpg')

    return (
        <div>
            <Viewer
                images={[{src: logo}]}
            />
        </div>
    )
}

export default ImageViewComponent;