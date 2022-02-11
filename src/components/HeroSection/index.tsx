import React from 'react';

import './HeroSection.scss';
import HeroSectionImage from "./HeroSectionContent/HeroSectionImage/HeroSectionImage";
import HeroSectionContent from "./HeroSectionContent/HeroSectionContent";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <HeroSectionContent/>
            <HeroSectionImage/>
        </div>
    )
}

export default HeroSection;