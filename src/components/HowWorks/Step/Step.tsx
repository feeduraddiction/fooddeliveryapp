import React from 'react';
import StepText from "./StepText/StepText";
import Image from "../../UI/Image/Image";
import './Step.scss';

function Step(props: any) {
    return <div id={props.id}className="howworks-section__content">
        <Image src={props.src}/>
        <StepText
            h3={props.h3}
            h2={props.h2}
            h4={props.h4}
        />
    </div>
}

export default Step;