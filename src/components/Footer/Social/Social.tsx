import React from 'react';

import './Social.scss'
import Twitter from "./Icons/Twitter";
import Facebook from "./Icons/Facebook";
import Linkedin from "./Icons/Linkedin";

function Social() {
    return <div className="social">
        <Twitter/>
        <Facebook/>
        <Linkedin/>
    </div>
}

export default Social;