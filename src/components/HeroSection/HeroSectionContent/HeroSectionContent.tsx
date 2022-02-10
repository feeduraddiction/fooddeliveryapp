import React from 'react';

import './HeroSectionContent.scss'
import HeroSectionText from "./HeroSectionText/HeroSectionText";
import HeroSectionActions from "./HeroSectionActions/HeroSectionActions";


function HeroSection() {
    return(
            <div className="hero-section__content">
                <HeroSectionText/>
                <HeroSectionActions/>
            </div>
    )
}

export default HeroSection;