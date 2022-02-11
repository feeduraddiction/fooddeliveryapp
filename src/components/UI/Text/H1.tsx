import React from 'react';

import './Text.scss'

import {textProps} from "./textProps";

const H1 = ({children}: textProps) => {
    return <h1>{children}</h1>
}

export default H1;