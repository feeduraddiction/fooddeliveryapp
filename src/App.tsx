import 'module-alias/register';

import React from 'react';

import HeroSection from './components/HeroSection';
import Header from './components/Header';
import HowWorks from './components/HowWorks';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

import './App.css';



function App() {
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
