import React from 'react';

import './H3.scss'

export interface H3Props {
    children: string
}

function H3({children}:H3Props) {
    return <h3>{children}</h3>
}

export default H3;