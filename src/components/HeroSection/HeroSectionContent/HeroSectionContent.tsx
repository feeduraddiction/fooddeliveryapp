import React from 'react';

import './HeroSectionContent.scss'
import HeroSectionText from "./HeroSectionText/HeroSectionText";
import HeroSectionActions from "./HeroSectionActions/HeroSectionActions";


function HeroSection(props: any) {
    return(
            <div className="hero-section__content">
                <HeroSectionText/>
                <HeroSectionActions/>
            </div>
    )
}

export default HeroSection;