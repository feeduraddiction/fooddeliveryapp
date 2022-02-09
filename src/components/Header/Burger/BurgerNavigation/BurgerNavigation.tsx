import React from "react";
import Navigation from "../../Navigation/Navigation";

import './BurgerNavigation.scss'

function BurgerNavigation(props: any) {

  const isOpened = props.isOpened;

    return <div className={isOpened ? "burger-nav" : "burger-nav hidden" }>
        <Navigation />
    </div>

}

export default BurgerNavigation;