import React from 'react';

import H2 from "../../../UI/Text/H2";
import H3 from "../../../UI/Text/H3";
import H4 from "../../../UI/Text/H4";

import './StepText.scss';

function StepText(props:any) {
    return <div className="howworks-section__text">
        <H3>{props.h3}</H3>
        <H2>{props.h2}</H2>
        <H4>{props.h4}</H4>
    </div>
}

export default StepText;