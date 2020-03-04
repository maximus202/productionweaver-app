import React, { Component } from 'react';
import ScenesList from '../ScenesList/ScenesList';

class Scenes extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Night of the Living Dead</h1>
                    <p className="header-subtitle">Script breakdown</p>
                </header>
                <section className="module-header">
                    <h2>Scenes</h2>
                    <button>Add scene</button>
                </section>
                <section>
                    <ScenesList />
                </section>
            </main>
        )
    }
}

export default Scenes;