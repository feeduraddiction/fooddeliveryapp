import Button from '@UI/Button';

import './index.scss'


const DownloadSectionActions = () => {
    return <div className="download-section__actions">
        <Button id="playstore-button">Playstore</Button>
        <Button id="appstore-button">App store</Button>
    </div>
}

export default DownloadSectionActions;