import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import ProductionApiService from '../../services/production-api-service';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './SceneBreakdownPage.css';

class SceneBreakdown extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = Context


    componentDidMount() {
        const { sceneId } = this.props.match.params
        this.context.clearError()
        ProductionApiService.getScene(sceneId)
            .then(this.context.setScene)
            .catch(this.context.setError)
        ProductionApiService.getElements(sceneId)
            .then(this.context.setElementsList)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        //this.context.clearScene()
        //this.context.clearElementsList()
    }

    renderElements() {
        const { elementsList = [] } = this.context
        const { scene } = this.context

        const animalHandler = []
        elementsList.forEach(element => {
            if (element.category === 'Animal Handler') {
                animalHandler.push(element)
            }
        })

        const cast = []
        elementsList.forEach(element => {
            if (element.category === 'Cast') {
                cast.push(element)
            }
        })

        const extras = []
        elementsList.forEach(element => {
            if (element.category === 'Extras') {
                extras.push(element)
            }
        })

        const greenery = []
        elementsList.forEach(element => {
            if (element.category === 'Greenery') {
                greenery.push(element)
            }
        })

        const livestock = []
        elementsList.forEach(element => {
            if (element.category === 'Livestock') {
                livestock.push(element)
            }
        })

        const makeupHair = []
        elementsList.forEach(element => {
            if (element.category === 'Makeup/Hair') {
                makeupHair.push(element)
            }
        })

        const mechanicalFx = []
        elementsList.forEach(element => {
            if (element.category === 'Mechanical FX') {
                mechanicalFx.push(element)
            }
        })

        const miscellaneous = []
        elementsList.forEach(element => {
            if (element.category === 'Miscellaneous') {
                miscellaneous.push(element)
            }
        })

        const music = []
        elementsList.forEach(element => {
            if (element.category === 'Music') {
                music.push(element)
            }
        })

        const opticalFx = []
        elementsList.forEach(element => {
            if (element.category === 'Optical FX') {
                opticalFx.push(element)
            }
        })

        const props = []
        elementsList.forEach(element => {
            if (element.category === 'Prop') {
                props.push(element)
            }
        })

        const security = []
        elementsList.forEach(element => {
            if (element.category === 'Security') {
                security.push(element)
            }
        })

        const setDressing = []
        elementsList.forEach(element => {
            if (element.category === 'Set Dressing') {
                setDressing.push(element)
            }
        })

        const sound = []
        elementsList.forEach(element => {
            if (element.category === 'Sound') {
                sound.push(element)
            }
        })

        const specialEquipment = []
        elementsList.forEach(element => {
            if (element.category === 'Special Equipment') {
                specialEquipment.push(element)
            }
        })

        const specialFx = []
        elementsList.forEach(element => {
            if (element.category === 'Special FX') {
                specialFx.push(element)
            }
        })

        const stunts = []
        elementsList.forEach(element => {
            if (element.category === 'Stunts') {
                stunts.push(element)
            }
        })

        const vehicles = []
        elementsList.forEach(element => {
            if (element.category === 'Vehicles') {
                vehicles.push(element)
            }
        })

        const visualFx = []
        elementsList.forEach(element => {
            if (element.category === 'Visual FX') {
                visualFx.push(element)
            }
        })

        const wardrobe = []
        elementsList.forEach(element => {
            if (element.category === 'Wardrobe') {
                wardrobe.push(element)
            }
        })

        return <>
            <header>
                <section>
                    <h1>Scene {scene[0].scene_script_number}: {scene[0].setting} {scene[0].location} - {scene[0].time_of_day}</h1>
                    <p>Scene breakdown</p>
                </section>
            </header>
            <main>
                <section>
                    <h2>
                        Summary:
                    </h2>
                    <p>
                        {scene[0].short_summary}
                    </p>
                </section>
                <section className="element-section">
                    <h2>Elements:</h2>
                    <h3>Animal Handler</h3>
                    {animalHandler.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Cast</h3>
                    {cast.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Extras</h3>
                    {extras.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Greenery</h3>
                    {greenery.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Livestock</h3>
                    {livestock.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Makeup/Hair</h3>
                    {makeupHair.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Mechanical FX</h3>
                    {mechanicalFx.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Miscellaneous</h3>
                    {miscellaneous.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Music</h3>
                    {music.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Optical FX</h3>
                    {opticalFx.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Props</h3>
                    {props.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Security</h3>
                    {security.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Set Dressing</h3>
                    {setDressing.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Sound</h3>
                    {sound.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Special Equipment</h3>
                    {specialEquipment.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Special FX</h3>
                    {specialFx.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Stunts</h3>
                    {stunts.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Vehicles</h3>
                    {vehicles.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Visual FX</h3>
                    {visualFx.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}

                    <h3>Wardrobe</h3>
                    {wardrobe.map(element =>
                        <div className="element-tag" key={element.id}>{element.description}</div>
                    )}
                </section>
                <div className="bottom-bar">
                    <Link to={`/add-element/${scene[0].id}`}><img className="add-element-button" src="https://github.com/maximus202/productionweaver-app/blob/styling/public/plusicon.png?raw=true" alt="Add" /></Link>
                </div>
            </main>
        </>
    }

    render() {
        const { error, scene } = this.context
        let content
        if (error) {
            content = (error.error === 'scene does not exist')
                ? <p>Scene not found</p>
                : <p>There was an error</p>
        } else if (!scene[0]) {
            content = <section><p>Loading...</p></section>
        } else {
            content = this.renderElements()
        }
        return (
            <>
                <NavBar />
                {content}
            </>
        )
    }
}

export default SceneBreakdown;