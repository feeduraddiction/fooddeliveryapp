import React from 'react';

import './HeaderText.scss'

export interface HeaderTextProps {
    children: string
}

function HeaderText({children}:HeaderTextProps) {
    return <li className="header-text">{children}</li>
}

export default HeaderText;