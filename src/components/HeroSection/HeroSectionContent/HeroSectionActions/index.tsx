import Button from "@UI/Button";

import './index.scss';

const HeroSectionActions = () => {
    return <div className="hero-section__actions">
        <Button id="playstore-button">Playstore</Button>
        <Button id="appstore-button">App store</Button>
    </div>
}

export default HeroSectionActions;