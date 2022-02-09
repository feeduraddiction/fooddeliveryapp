import React from 'react';

import './HeaderText.scss'

function HeaderText(props: any) {
    return <li className="header-text">{props.children}</li>
}

export default HeaderText;