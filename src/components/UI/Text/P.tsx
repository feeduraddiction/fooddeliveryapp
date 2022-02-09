import React from 'react';


function P(props:any) {
    return <p id={props.id}>
        {props.children}
    </p>
}

export default P;