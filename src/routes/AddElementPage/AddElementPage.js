import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';
import NewElementForm from '../../components/NewElementForm/NewElementForm';

class AddElementPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <header>
          <section>
            <h1>Add new Element</h1>
          </section>
        </header>
        <main>
          <section>
            <NewElementForm sceneId={this.props.match.params.sceneId} history={this.props.history} />
          </section>
        </main>
      </>
    );
  }
}

export default AddElementPage;
