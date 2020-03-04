import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import Scenes from '../Scenes/Scenes.js';

class ScriptBreakdown extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Scenes />
                <Footer />
            </>
        )
    }
}

export default ScriptBreakdown;