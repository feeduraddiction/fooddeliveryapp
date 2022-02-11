import DownloadSectionActions from "./DownloadSectionActions";
import DownloadSectionText from "./DownloadSectionText";

import './index.scss'

const DownloadSectionContent = () => {
    return <div className="download-section__content">
        <DownloadSectionText/>
        <DownloadSectionActions/>
    </div>
}

export default DownloadSectionContent;