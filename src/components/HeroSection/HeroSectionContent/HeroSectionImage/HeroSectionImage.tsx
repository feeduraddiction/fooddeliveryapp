import React from 'react';

import './HeroSectionImage.scss'

import Image from "../../../UI/Image";

function HeroSectionImage(props: any) {
    return(
        <div className="hero-section__image">
            <Image src={require('../../../img/mobile-image.png')}/>
        </div>
    )
}

export default HeroSectionImage;