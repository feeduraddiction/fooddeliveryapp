import HeaderText from '@UI/Text/HeaderText'

import './index.scss'

interface navigationProps {
    id?: string
}

const Navigation = ({id}:navigationProps) => {
    return <ul className="navigation" id={id}>
        <HeaderText>
            Home
        </HeaderText>
        <HeaderText>
            Product
        </HeaderText>
        <HeaderText>
            Faq
        </HeaderText>
        <HeaderText>
            Contact
        </HeaderText>
    </ul>
}

export default Navigation;