import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import AddProductionForm from '../../components/AddProductionForm/AddProductionForm';

function AddProduction(props) {
  const { history } = props;
  return (
    <>
      <NavBar />
      <header className="header-100vh">
        <section className="container">
          <h1>Add a new production</h1>
          <main>
            <AddProductionForm history={history} />
          </main>
        </section>
      </header>
    </>
  );
}

AddProduction.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AddProduction;
