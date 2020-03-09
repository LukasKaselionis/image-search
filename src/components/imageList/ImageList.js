import React from 'react';
import './ImageList.css';
import ImageCard from '../imageList/ImageCard'

const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        return <ImageCard key={img.id} image={img}/>
    });

    if(props.foundImages.length > 0 && props.query !== ''){
        return <div className="images">
            <div className="images__list">
                {imgs}
            </div>
        </div>
    } else if(props.query === '') {
         return <div className="images"></div>
    } else {
        return <div className="images"><p className="error_message">Couldn't find any images. Try searching for another image.</p></div>
    }
}


export default ImageList