import React from 'react';
import Button from "../../../UI/Button/Button";

import './DownloadSectionActions.scss'


function DownloadSectionActions() {
    return <div className="download-section__actions">
        <Button id="playstore-button">Playstore</Button>
        <Button id="appstore-button">App store</Button>
    </div>
}

export default DownloadSectionActions;