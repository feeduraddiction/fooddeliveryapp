import React from 'react';
import DownloadSectionActions from "./DownloadSectionActions/DownloadSectionActions";
import DownloadSectionText from "./DownloadSectionText/DownloadSectionText";

import './DownloadSectionContent.scss'

function DownloadSectionContent() {
    return <div className="download-section__content">
        <DownloadSectionText/>
        <DownloadSectionActions/>
    </div>
}

export default DownloadSectionContent;