import React from 'react';

import './Text.scss'

import {textProps} from "./textProps";

function H2({children}: textProps) {
    return <h2>{children}</h2>
}

export default H2;