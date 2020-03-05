import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import BreakdownCategories from '../BreakdownCategories/BreakdownCategories.js';

class SceneBreakdown extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <>
                <NavBar />
                <BreakdownCategories scene={this.props.match.params} />
                <Footer />
            </>
        )
    }
}

export default SceneBreakdown;