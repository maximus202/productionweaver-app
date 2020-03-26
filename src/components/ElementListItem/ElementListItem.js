import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ElementListItem extends Component {
    render() {
        const { element } = this.props
        if (element.category === )
            return (
                <>
                    <section className="module-header">
                        <h2>Animal handler</h2>
                    </section>
                    <section className="element-list">
                        {element.animalHandler}
                        <button>Add Animal Handler</button>
                    </section>

                    <section className="module-header">
                        <h2>Cast</h2>
                    </section>
                    <section className="element-list">
                        {elementsList.cast}
                        <button>Add cast member</button>
                    </section>

                    <section className="module-header">
                        <h2>Extras</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.extras}
                        <button>Add extras</button>
                    </section>

                    <section className="module-header">
                        <h2>Greenery</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.greenery}
                        <button>Add greenery</button>
                    </section>

                    <section className="module-header">
                        <h2>Livestock</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.livestock}
                        <button>Add livestock</button>
                    </section>

                    <section className="module-header">
                        <h2>Makeup/Hair</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.makeupHair}
                        <button>Add Makeup/Hair</button>
                    </section>

                    <section className="module-header">
                        <h2>Mechanical FX</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.mechanicalFx}
                        <button>Add Mechanical FX</button>
                    </section>

                    <section className="module-header">
                        <h2>Miscellanous</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.miscellanous}
                        <button>Add Miscellanous</button>
                    </section>

                    <section className="module-header">
                        <h2>Music</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.music}
                        <button>Add Music</button>
                    </section>

                    <section className="module-header">
                        <h2>Optical FX</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.opticalFx}
                        <button>Add Optical FX</button>
                    </section>

                    <section className="module-header">
                        <h2>Props</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.props}
                        <button>Add Props</button>
                    </section>

                    <section className="module-header">
                        <h2>Security</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.security}
                        <button>Add security</button>
                    </section>

                    <section className="module-header">
                        <h2>Set Dressing</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.setDressing}
                        <button>Add Set Dressing</button>
                    </section>

                    <section className="module-header">
                        <h2>Sound</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.sound}
                        <button>Add Sound</button>
                    </section>

                    <section className="module-header">
                        <h2>Special Equipment</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.specialEquipment}
                        <button>Add Special Equipment</button>
                    </section>

                    <section className="module-header">
                        <h2>Special FX</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.specialFx}
                        <button>Add Special FX</button>
                    </section>

                    <section className="module-header">
                        <h2>Stunts</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.stunts}
                        <button>Add Stunts</button>
                    </section>

                    <section className="module-header">
                        <h2>Vehicles</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.vehicles}
                        <button>Add Vehicles</button>
                    </section>

                    <section className="module-header">
                        <h2>Visual FX</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.visualFx}
                        <button>Add Visual FX</button>
                    </section>

                    <section className="module-header">
                        <h2>Wardrobe</h2>

                    </section>
                    <section className="element-list">
                        {elementsList.wardrobe}
                        <button>Add Wardrobe</button>
                    </section>
                </>
            )
    }

}

export default ElementListItem;