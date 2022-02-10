import React from "react";
import Navigation from "../../Navigation/Navigation";

import './BurgerNavigation.scss'

export interface burgerNavigationProps {
    isOpened: boolean
}

function BurgerNavigation({isOpened}:burgerNavigationProps) {

    return <div className={isOpened ? "burger-nav" : "burger-nav hidden" }>
        <Navigation />
    </div>

}

export default BurgerNavigation;