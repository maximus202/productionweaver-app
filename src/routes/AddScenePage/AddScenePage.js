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
      <header>
        <section>
          <h1>Add a new scene</h1>
        </section>
      </header>
      <main>
        <section>
          <AddSceneForm history={history} productionId={match.params.productionId} />
        </section>
      </main>
    </>
  );
}

AddScenePage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default AddScenePage;
