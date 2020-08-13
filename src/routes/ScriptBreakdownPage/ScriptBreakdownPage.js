/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import ProductionApiService from '../../services/production-api-service';
import NavBar from '../../components/NavBar/NavBar';
import './ScriptBreakdownPage.css';
import Loading from '../../components/Loading/Loading';

class ScriptBreakdownPage extends Component {
    static contextType = Context

    componentDidMount() {
      const { match } = this.props;
      const {
        setProduction,
        setError,
        setScenesList,
        clearError,
      } = this.context;
      clearError();
      ProductionApiService.getProduction(match.params.productionId)
        .then(setProduction)
        .catch(setError);
      ProductionApiService.getScenes(match.params.productionId)
        .then(setScenesList)
        .catch(setError);
    }

    renderScenes() {
      const { scenesList = [] } = this.context;
      return scenesList.map((scene) => (
        <tr key={scene.id}>
          <td>
            <Link key={scene.id} to={`/scene-breakdown/${scene.id}`}>
              [
              {scene.scene_script_number}
              ]
              {' '}
              {scene.setting.toUpperCase()}
              {' '}
              {scene.location.toUpperCase()}
              {' '}
              -
              {' '}
              {scene.time_of_day.toUpperCase()}
            </Link>
          </td>
        </tr>
      ));
    }

    render() {
      const { error, production } = this.context;
      let content;
      if (error) {
        content = (error.error === 'production does not exist')
          ? <p>Production not found</p>
          : <p>No scenes.</p>;
      } else if (!production.id) {
        content = <Loading />;
      } else {
        content = this.renderScenes();
      }
      return (
        <>
          <NavBar />
          <header className="grey-background">
            <section className="container">
              <p className="bold">Script Breakdown</p>
              <h1>
                {production.production_title}
                {' '}
                (2020)
              </h1>
            </section>
          </header>
          <main>
            <section className="container">
              <h2>Scenes</h2>
              <table>
                <thead>
                  <tr>
                    <th>Scene Header</th>
                  </tr>
                </thead>
                <tbody>
                  {content}
                </tbody>
              </table>
              <Link to={`/add-scene/${production.id}`}><button type="button" className="button">Add scene</button></Link>
            </section>
          </main>

        </>
      );
    }
}

ScriptBreakdownPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ScriptBreakdownPage;
