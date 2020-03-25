import React, { Component } from 'react';
import './BreakdownCategories.css';
import PROJECTS from '../projects';
import { API_BASE_URL } from '../config';
import { Context } from '../Context/Context';
import TokenService from '../services/token-service';

class BreakdownCategories extends Component {
    static contextType = Context;

    render() {
        const project = PROJECTS.find(project =>
            project.id === this.props.scene.projectId
        )
        const scene = project.scenes.find(scene =>
            scene.sceneNumber == this.props.scene.sceneId
        )
        const elements = scene.elements
        return (
            < main >
                {console.log(elements)}
                <header>
                    <h1>{project.projectName}</h1>
                    <p className="header-subtitle">Script breakdown</p>
                    <p className="header-subtitle">SCENE {scene.sceneNumber}. {scene.setting} {scene.description} - {scene.timeOfDay}</p>
                </header>

                <section className="module-header">
                    <h2>Animal handler</h2>
                </section>
                <section className="element-list">
                    {elements.animalHandler}
                    <button>Add Animal Handler</button>
                </section>

                <section className="module-header">
                    <h2>Cast</h2>
                </section>
                <section className="element-list">
                    {elements.cast}
                    <button>Add cast member</button>
                </section>

                <section className="module-header">
                    <h2>Extras</h2>

                </section>
                <section className="element-list">
                    {elements.extras}
                    <button>Add extras</button>
                </section>

                <section className="module-header">
                    <h2>Greenery</h2>

                </section>
                <section className="element-list">
                    {elements.greenery}
                    <button>Add greenery</button>
                </section>

                <section className="module-header">
                    <h2>Livestock</h2>

                </section>
                <section className="element-list">
                    {elements.livestock}
                    <button>Add livestock</button>
                </section>

                <section className="module-header">
                    <h2>Makeup/Hair</h2>

                </section>
                <section className="element-list">
                    {elements.makeupHair}
                    <button>Add Makeup/Hair</button>
                </section>

                <section className="module-header">
                    <h2>Mechanical FX</h2>

                </section>
                <section className="element-list">
                    {elements.mechanicalFx}
                    <button>Add Mechanical FX</button>
                </section>

                <section className="module-header">
                    <h2>Miscellanous</h2>

                </section>
                <section className="element-list">
                    {elements.miscellanous}
                    <button>Add Miscellanous</button>
                </section>

                <section className="module-header">
                    <h2>Music</h2>

                </section>
                <section className="element-list">
                    {elements.music}
                    <button>Add Music</button>
                </section>

                <section className="module-header">
                    <h2>Optical FX</h2>

                </section>
                <section className="element-list">
                    {elements.opticalFx}
                    <button>Add Optical FX</button>
                </section>

                <section className="module-header">
                    <h2>Props</h2>

                </section>
                <section className="element-list">
                    {elements.props}
                    <button>Add Props</button>
                </section>

                <section className="module-header">
                    <h2>Security</h2>

                </section>
                <section className="element-list">
                    {elements.security}
                    <button>Add security</button>
                </section>

                <section className="module-header">
                    <h2>Set Dressing</h2>

                </section>
                <section className="element-list">
                    {elements.setDressing}
                    <button>Add Set Dressing</button>
                </section>

                <section className="module-header">
                    <h2>Sound</h2>

                </section>
                <section className="element-list">
                    {elements.sound}
                    <button>Add Sound</button>
                </section>

                <section className="module-header">
                    <h2>Special Equipment</h2>

                </section>
                <section className="element-list">
                    {elements.specialEquipment}
                    <button>Add Special Equipment</button>
                </section>

                <section className="module-header">
                    <h2>Special FX</h2>

                </section>
                <section className="element-list">
                    {elements.specialFx}
                    <button>Add Special FX</button>
                </section>

                <section className="module-header">
                    <h2>Stunts</h2>

                </section>
                <section className="element-list">
                    {elements.stunts}
                    <button>Add Stunts</button>
                </section>

                <section className="module-header">
                    <h2>Vehicles</h2>

                </section>
                <section className="element-list">
                    {elements.vehicles}
                    <button>Add Vehicles</button>
                </section>

                <section className="module-header">
                    <h2>Visual FX</h2>

                </section>
                <section className="element-list">
                    {elements.visualFx}
                    <button>Add Visual FX</button>
                </section>

                <section className="module-header">
                    <h2>Wardrobe</h2>

                </section>
                <section className="element-list">
                    {elements.wardrobe}
                    <button>Add Wardrobe</button>
                </section>
                <div className="bottom-bar">
                    <p>SCENE {scene.sceneNumber}. {scene.setting} {scene.description} - {scene.timeOfDay}</p>
                    <button>+</button>
                </div>
            </main >
        )
    }
}

export default BreakdownCategories;