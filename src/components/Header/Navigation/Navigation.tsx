import React from 'react';

import HeaderText from '../../UI/Text/HeaderText'

import './Navigation.scss'

function Navigation(props: any) {
    return <ul className="navigation" id={props.id}>
        <HeaderText>
            Home
        </HeaderText>
        <HeaderText>
            Product
        </HeaderText>
        <HeaderText>
            Faq
        </HeaderText>
        <HeaderText>
            Contact
        </HeaderText>
    </ul>
}

export default Navigation;