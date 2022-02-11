import Navigation from './Navigation';
import Image from "@UI/Image";
import Burger from './Burger';

import './index.scss'

const Header = () => {

    return <header className="header">
        <Image id="logo" alt="logo" src={require('@img/Logo1.png')}/>
        <Navigation id="main"/>
        <Burger />
    </header>
}

export default Header;