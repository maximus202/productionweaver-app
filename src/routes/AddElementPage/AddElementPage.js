import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import NewElementForm from '../../components/NewElementForm/NewElementForm';

function AddElementPage(props) {
  const {
    match,
    history,
  } = props;
  return (
    <>
      <NavBar />
      <header className="header-100vh">
        <section className="container">
          <h1>Add new Element</h1>
          <main>
            <NewElementForm sceneId={match.params.sceneId} history={history} />
          </main>
        </section>
      </header>
    </>
  );
}

AddElementPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default AddElementPage;
