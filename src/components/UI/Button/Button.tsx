import React from "react";
import  './Button.scss';

function Button (props: any) {
    return (
        <button id={props.id} type={props.type} className="button" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;