import Image from "@UI/Image";

import './index.scss'

const HeroSectionImage = () => {
    return(
        <div className="hero-section__image">
            <Image src={require('@img/mobile-image.png')} alt="mobile"/>
        </div>
    )
}

export default HeroSectionImage;