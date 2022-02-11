import React from 'react';

export interface imageProps {
    src: string
    alt: string
    id?: string
}

const Image = ({
                   src,
                   alt,
                   id
               } : imageProps) => {
    return <img src={src} alt={alt} id={id}/>
}

export default Image;