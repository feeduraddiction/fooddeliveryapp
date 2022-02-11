import React from 'react';
import Button from '@UI/Button';

import './DownloadSectionActions.scss'


const DownloadSectionActions = () => {
    return <div className="download-section__actions">
        <Button id="playstore-button">Playstore</Button>
        <Button id="appstore-button">App store</Button>
    </div>
}

export default DownloadSectionActions;