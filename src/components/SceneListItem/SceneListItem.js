import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import ProductionApiService from '../../services/production-api-service'

class SceneListItem extends Component {
    static contextType = Context

    componentDidMount() {
        ProductionApiService.getElements(this.props.scene.id)
            .then(this.context.setElementsList)
    }

    componentWillUnmount() {
        this.context.clearElementsList()
    }

    renderElements() {
        const sceneElementsList = []
        const { elementsList = [] } = this.context
        elementsList.map(element => {
            if (element.scene_id == this.props.scene.id) {
                sceneElementsList.push(element)
            }
        })
    }

    render() {
        const { elementsList } = this.context
        let content
        if (!elementsList) {
            content = <div>Loading...</div>
        } else {
            content = this.renderElements()
        }

        return (
            <section>
                {content}
            </section>
        )
    }

}

export default SceneListItem;