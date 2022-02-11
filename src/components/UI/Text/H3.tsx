import React from 'react';

import './Text.scss'

import {textProps} from './textProps';

const H3 = ({children}: textProps) => {
    return <h3>{children}</h3>
}

export default H3;