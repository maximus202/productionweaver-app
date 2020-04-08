import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AddSceneForm from '../../components/AddSceneForm/AddSceneForm';

function AddScenePage() {
  const {
    history,
    match,
  } = this.props;
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

export default AddScenePage;
