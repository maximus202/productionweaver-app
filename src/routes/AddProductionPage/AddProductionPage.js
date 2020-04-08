import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AddProductionForm from '../../components/AddProductionForm/AddProductionForm';

function AddProduction() {
  const { history } = this.props;
  return (
    <>
      <NavBar />
      <header>
        <section>
          <h1>Add a new production</h1>
        </section>
      </header>
      <main>
        <section>
          <AddProductionForm history={history} />
        </section>
      </main>
    </>
  );
}

export default AddProduction;
