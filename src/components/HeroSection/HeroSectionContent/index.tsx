import HeroSectionText from "./HeroSectionText";
import HeroSectionActions from "./HeroSectionActions";

import './index.scss'

const HeroSection = () => {
    return(
            <div className="hero-section__content">
                <HeroSectionText/>
                <HeroSectionActions/>
            </div>
    )
}

export default HeroSection;