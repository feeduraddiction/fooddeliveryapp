import {
    Header,
    HeroSection,
    HowWorks,
    DownloadSection,
    Footer,
} from './components';

import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <HeroSection/>
            <HowWorks/>
            <DownloadSection />
            <Footer/>
        </div>
    );
}

export default App;
