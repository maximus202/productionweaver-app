import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import LandingPageContent from '../LandingPageContent/LandingPageContent.js';
import Footer from '../Footer/Footer.js';

class LandingPage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <LandingPageContent />
                <Footer />
            </>
        )
    }
}

export default LandingPage;