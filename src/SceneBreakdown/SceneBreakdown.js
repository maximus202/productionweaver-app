import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import BreakdownCategories from '../BreakdownCategories/BreakdownCategories.js';

class SceneBreakdown extends Component {
    render() {
        return (
            <>
                <NavBar />
                <BreakdownCategories />
                <Footer />
            </>
        )
    }
}

export default SceneBreakdown;