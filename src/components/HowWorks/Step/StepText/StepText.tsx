import React from 'react';

import H2 from "@UI/Text/H2";
import H3 from "@UI/Text/H3";
import H4 from "@UI/Text/H4";

import './StepText.scss';

export interface stepTextProps {
    h2: string
    h3: string
    h4: string
}

const StepText = ({h2, h3, h4}: stepTextProps) => {
    return <div className="howworks-section__text">
        <H3>{h3}</H3>
        <H2>{h2}</H2>
        <H4>{h4}</H4>
    </div>
}

export default StepText;