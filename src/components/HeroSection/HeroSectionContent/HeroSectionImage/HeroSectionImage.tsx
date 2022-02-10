import React from 'react';

import './HeroSectionImage.scss'

import Image from "@UI/Image";

function HeroSectionImage() {
    return(
        <div className="hero-section__image">
            <Image src={require('@img/mobile-image.png')} alt="mobile"/>
        </div>
    )
}

export default HeroSectionImage;