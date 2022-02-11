import Image from "@UI/Image";
import Social from "./Social";

import './index.scss';

const Footer = () => {
    return <div className="footer">
        <Image src={require('@img/Logo1.png')} id="logo" alt="logo"/>
        <Social/>
        <p id="onmind">Just type what's on your mind and we'll </p>
        <p id="copyright">Copyright 2020 Bella Onojie.com</p>
    </div>
}

export default Footer;