import React, { Component } from 'react';
import './ScenesList.css';

class ScenesList extends Component {
    render() {
        return (
            <>
                <section className="scene-item">
                    <p className="scene-number">1</p>
                    <div className="scene-and-short-summary">
                        <h3>EXT. FRENCH COUNTRYSIDE - DUSK</h3>
                        <p>Short summary...</p>
                    </div>
                </section>
                <section className="scene-item">
                    <p className="scene-number">13</p>
                    <div className="scene-and-short-summary">
                        <h3>EXT. FRENCH COUNTRYSIDE - DUSK</h3>
                        <p>Short summary...</p>
                    </div>
                </section>
            </>
        )
    }
}

export default ScenesList;