import React from 'react';
import StepText from "./StepText/StepText";
import Image from "@UI/Image";
import './Step.scss';

export interface stepProps{
    id: string
    src: string
    alt: string
    h2: string
    h3: string
    h4: string
}

const Step = ({id, src, alt, h2, h3, h4}: stepProps) => {
    return <div id={id}className="howworks-section__content">
        <Image src={src} alt={alt} />
        <StepText
            h3={h3}
            h2={h2}
            h4={h4}
        />
    </div>
}

export default Step;