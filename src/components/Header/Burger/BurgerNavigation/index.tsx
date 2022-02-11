import Navigation from "../../Navigation";

import './index.scss'

interface burgerNavigationProps {
    isOpened: boolean
}

const BurgerNavigation = ({isOpened}:burgerNavigationProps) => {

    return <div className={isOpened ? "burger-nav" : "burger-nav hidden" }>
        <Navigation />
    </div>

}

export default BurgerNavigation;