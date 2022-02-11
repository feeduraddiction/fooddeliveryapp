import React from 'react';

import './Text.scss'

import {textProps} from "./textProps";

const P = ({children, id}: textProps) => {
    return <p id={id}>
        {children}
    </p>
}

export default P;