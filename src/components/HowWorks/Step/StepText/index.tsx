
import './index.scss';

interface stepTextProps {
    h2: string
    h3: string
    h4: string
}

const StepText = ({h2, h3, h4}: stepTextProps) => {
    return <div className="howworks-section__text">
        <h3>{h3}</h3>
        <h2>{h2}</h2>
        <h4>{h4}</h4>
    </div>
}

export default StepText;