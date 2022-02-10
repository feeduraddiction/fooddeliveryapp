import React from 'react';

import './H1.scss'

export interface H1Props {
    children: string
}

function H1({children}:H1Props) {
    return <h1>{children}</h1>
}

export default H1;