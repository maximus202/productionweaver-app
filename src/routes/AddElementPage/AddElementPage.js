import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NewElementForm from '../../components/NewElementForm/NewElementForm';

function AddElementPage() {
  const { match } = this.props;
  const { history } = this.props;
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
          <NewElementForm sceneId={match.params.sceneId} history={history} />
        </section>
      </main>
    </>
  );
}

export default AddElementPage;
