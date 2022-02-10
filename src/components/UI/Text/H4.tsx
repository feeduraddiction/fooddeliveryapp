import React from 'react';

import './H4.scss'

export interface H4Props {
    children: string
}

function H4({children}:H4Props) {
    return <h4>{children}</h4>
}

export default H4;