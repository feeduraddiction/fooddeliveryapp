import React from 'react';
import Image from "../../UI/Image/Image";
import { SocialIcon} from 'react-social-icons'

import './Social.scss'

function Social() {
    return <div className="social">
        <Image src={require('../../img/twitter.png')}/>
        <Image src={require('../../img/facebook.png')}/>
        <Image src={require('../../img/instagram.png')}/>
    </div>
}

export default Social;