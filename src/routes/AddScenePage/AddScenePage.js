import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import AddSceneForm from '../../components/AddSceneForm/AddSceneForm';

function AddScenePage(props) {
  const {
    history,
    match,
  } = props;
  return (
    <>
      <NavBar />
      <header className="header-100vh">
        <section className="container">
          <h1>Add a new scene</h1>
          <main>
            <AddSceneForm history={history} productionId={match.params.productionId} />
          </main>
        </section>
      </header>
    </>
  );
}

AddScenePage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default AddScenePage;
