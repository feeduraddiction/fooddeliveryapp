import React, { useState } from 'react';
import Image from "../../UI/Image";
import Button from "../../UI/Button/Button";
import BurgerNavigation from "./BurgerNavigation/BurgerNavigation";

import './Burger.scss'


function Burger(props: any) {
    const[isOpened, setIsOpened] = useState(false);

    const showMenuHandler = () => {
        setIsOpened(!isOpened);
    }

    return <div className="burger-menu" >
        <BurgerNavigation className="hidden" isOpened={isOpened} />
        <Button onClick={showMenuHandler} id="burger-button" >
            <Image id="burger-icon" src={require('../../img/burger.png')}/>
        </Button>

    </div>


}

export default Burger;