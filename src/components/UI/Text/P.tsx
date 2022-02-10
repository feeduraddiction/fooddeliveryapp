import React from 'react';

import './P.scss'

export interface pProps {
    children: string
    id?: string
}

function P({children, id}:pProps) {
    return <p id={id}>
        {children}
    </p>
}

export default P;