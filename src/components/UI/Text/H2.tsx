import React from 'react';

import './H2.scss'

export interface H2Props {
    children: string
}

function H2({children}: H2Props) {
    return <h2>{children}</h2>
}

export default H2;