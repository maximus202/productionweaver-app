import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductionApiService from '../../services/production-api-service';
import './AccountSignUpForm.css';

class AccountSignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      handleFirstNameInputChange: this.handleFirstNameInputChange,
      handleLastNameInputChange: this.handleLastNameInputChange,
      handleEmailInputChange: this.handleEmailInputChange,
      handlePasswordInputChange: this.handlePasswordInputChange,
      handleSubmitNewUser: this.handleSubmitNewUser,
    };
  }

    handleFirstNameInputChange = (event) => {
      this.setState({
        firstName: event.target.value,
      });
    }

    handleLastNameInputChange = (event) => {
      this.setState({
        lastName: event.target.value,
      });
    }

    handleEmailInputChange = (event) => {
      this.setState({
        email: event.target.value,
      });
    }

    handlePasswordInputChange = (event) => {
      this.setState({
        password: event.target.value,
      });
    }

  handleSubmitNewUser = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const {
      handleError,
      firstName,
      lastName,
      email,
      password,
    } = this.state;
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    ProductionApiService.submitNewUser(data, history)
      .then(() => history.push('/registrationsuccess'))
      .catch((error) => handleError(error));
  }

  render() {
    const { handleSubmitNewUser } = this.state;
    const { handleFirstNameInputChange } = this.state;
    const { handleLastNameInputChange } = this.state;
    const { handleEmailInputChange } = this.state;
    const { handlePasswordInputChange } = this.state;
    return (
      <form className="AccountSignUpForm__form" onSubmit={(e) => handleSubmitNewUser(e)}>
        <label htmlFor="first-name">First name</label>
        <input className="AccountSignUpForm__input" type="text" placeholder="First name" id="first-name" name="first-name" onChange={handleFirstNameInputChange} required />
        <label htmlFor="last-name">Last name</label>
        <input className="AccountSignUpForm__input" type="text" placeholder="Last name" id="last-name" name="last-name" onChange={handleLastNameInputChange} required />
        <label htmlFor="email">Email</label>
        <input className="AccountSignUpForm__input" type="email" placeholder="Email" id="email" name="email" onChange={handleEmailInputChange} required />
        <label htmlFor="password">Password</label>
        <input className="AccountSignUpForm__input" type="password" placeholder="Password" id="password" name="password" onChange={handlePasswordInputChange} required />
        <input type="submit" id="submit" name="submit" placeholder="Submit" />
      </form>
    );
  }
}

AccountSignUpForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AccountSignUpForm;
