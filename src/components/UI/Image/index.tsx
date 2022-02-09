import React from 'react';

function Image (props: any) {
    return <img src={props.src} alt={props.alt} id={props.id}/>
}

export default Image;