import React from 'react';

import HeroSection from './components/HeroSection/HeroSection';
import Header from './components/Header/Header';
import HowWorks from "./components/HowWorks/HowWorks";
import DownloadSection from './components/DownloadSection/DownloadSection'
import Footer from "./components/Footer/Footer";

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
