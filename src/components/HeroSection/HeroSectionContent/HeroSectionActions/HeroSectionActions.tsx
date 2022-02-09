import React from 'react';
import Button from "../../../UI/Button/Button";

import './HeroSectionActions.scss';

function HeroSectionActions() {
    return <div className="hero-section__actions">
        <Button id="playstore-button">Playstore</Button>
        <Button id="appstore-button">App store</Button>
    </div>
}

export default HeroSectionActions;