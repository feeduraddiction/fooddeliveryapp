import React from 'react';

import Step from './Step/Step';
import Title from './Title/Title';

import './HowWorks.scss'

const HowWorks = () => {
    return <div className="howworks-section">
        <Title />
        <Step
            id="create-an-account"
            h3="Create an account"
            h2="Create/login to an existing account to get started"
            h4="An account is created with your email and a desired password"
            src={require('@img/createanaccount-image_withoutshadow.png')}
            alt="create an account"
        />
        <Step
            id="explore-varieties"
            h3="Explore varieties"
            h2="Shop for your favorites meal as e dey hot."
            h4="Shop for your favorite meals or drinks and enjoy while doing it."
            src={require('@img/explorevarieties-image_withoutshadow.png')}
            alt="explore varieties"
        />
        <Step
            id="checkout"
            h3="Checkout"
            h2="When you done check out and get it delivered."
            h4="When you done check out and get it delivered with ease."
            src={require('@img/checkout-image_withoutshadow.png')}
            alt="checkout"
        />
    </div>
}

export default HowWorks;