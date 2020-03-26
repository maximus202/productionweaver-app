import React, { Component } from 'react';
import BreakdownCategories from '../../BreakdownCategories/BreakdownCategories.js';

class SceneBreakdown extends Component {
    render() {
        return (
            <>
                <BreakdownCategories history={this.props.history} />
            </>
        )
    }
}

export default SceneBreakdown;