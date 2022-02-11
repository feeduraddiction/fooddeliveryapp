import React from 'react';

import Header from '@components/Header';
import HeroSection from '@components/HeroSection';
import HowWorks from '@components/HowWorks';
import DownloadSection from '@components/DownloadSection';
import Footer from '@components/Footer';

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
