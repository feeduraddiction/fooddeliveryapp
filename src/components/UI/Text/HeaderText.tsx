import './Text.scss'

interface headerTextProps {
    children: string
    id? : string
}

const HeaderText = ({children}: headerTextProps) => {
    return <li className="header-text">{children}</li>
}

export default HeaderText;