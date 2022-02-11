import './index.scss';

import HeroSectionImage from "./HeroSectionContent/HeroSectionImage";
import HeroSectionContent from "./HeroSectionContent";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <HeroSectionContent/>
            <HeroSectionImage/>
        </div>
    )
}

export default HeroSection;