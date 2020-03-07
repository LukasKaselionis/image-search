import React from 'react';
import './ImageList.css';
import ImageCard from '../imageList/ImageCard'

const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        return <ImageCard key={img.id} image={img}/>
    });

    return (
        <div className="images">
            <div className="images__list">
                {imgs}
            </div>
        </div>
    )
}


export default ImageList