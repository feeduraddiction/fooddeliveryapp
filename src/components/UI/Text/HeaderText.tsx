import React from 'react';

import './Text.scss'

import {textProps} from "./textProps";

function HeaderText({children}: textProps) {
    return <li className="header-text">{children}</li>
}

export default HeaderText;