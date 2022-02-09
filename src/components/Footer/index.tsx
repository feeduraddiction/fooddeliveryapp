import React from 'react';
import Image from "../UI/Image";
import P from "../UI/Text/P";
import Social from "./Social/Social";

import './Footer.scss';

function Footer() {
    return <div className="footer">
        <Image src={require('../img/Logo1.png')} id="logo"/>
        <Social/>
        <P id="onmind">Just type what's on your mind and we'll </P>
        <P id="copyright">Copyright 2020 Bella Onojie.com</P>
    </div>
}

export default Footer;