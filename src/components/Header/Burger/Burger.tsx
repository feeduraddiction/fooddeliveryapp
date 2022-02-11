import React, {useState} from 'react';
import Image from "@UI/Image";
import Button from "@UI/Button";
import BurgerNavigation from "./BurgerNavigation/BurgerNavigation";

import './Burger.scss'

const Burger = () => {
    const [isOpened, setIsOpened] = useState(false);

    const showMenuHandler = () => {
        setIsOpened(!isOpened);
    }

    return <div className="burger-menu">
        <BurgerNavigation isOpened={isOpened}/>
        <Button onClick={showMenuHandler} id="burger-button">
            <Image id="burger-icon" src={require('@img/burger.png')} alt="burger"/>
        </Button>
    </div>


}

export default Burger;