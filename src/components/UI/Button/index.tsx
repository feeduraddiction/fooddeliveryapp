import React from "react";
import './Button.scss';

export interface ButtonProps {
    id?: string
    children?: React.ReactNode
    onClick?: (e: React.MouseEvent) => void
}

const Button = ({
                    id,
                    children,
                    onClick,
                }: ButtonProps) => {

    return (
        <button id={id} className="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;