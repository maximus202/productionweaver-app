import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import AddProductionForm from '../../components/AddProductionForm/AddProductionForm';

function AddProduction(props) {
  const { history } = props;
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

AddProduction.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AddProduction;
