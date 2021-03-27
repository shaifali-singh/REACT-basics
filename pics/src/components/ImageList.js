import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    //description, urls, id are available in each element or images array
    // const images =props.images.map( ({ description , urls , id}) => {
    //     return <img alt={description} key={id} src ={urls.regular} />;
    // });

    const images =props.images.map( image => {
        return <ImageCard key={image.id} image={image} />;
    });

   return <div className="image-list">{images}</div>;
};

export default ImageList;