import React from 'react';

import Navigation from './Navigation/Navigation';
import Image from "../UI/Image/Image";
import Burger from './Burger/Burger';

import './Header.scss'

function Header(props: any) {

    return <header className="header">
        <Image id="logo" alt="logo" src={require('../img/Logo1.png')}/>
        <Navigation id="main"/>
        <Burger />
    </header>
}

export default Header;