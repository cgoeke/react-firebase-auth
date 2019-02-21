import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import ResetForm from './ResetForm';
import ResetDialog from './ResetDialog';

class PasswordReset extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      error: null,
      isOpen: false
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    const { email } = this.state;
    
    event.preventDefault();
    auth.sendPasswordResetEmail(email)
      .then(() => {
        this.setState({ isOpen: true })
      })
      .catch(error => {
        this.setState({ 
          error: error.message,
          isOpen: true,
        });
      });
  }

  handleClose = () => {
    const { error } = this.state;
    const { history } = this.props;

    if(error) this.setState({ isOpen: false });
    else {
      history.push("/");
      this.setState({
        email: '',
        error: null,
        isOpen: false
      });
    };
  }

  render(){
    const { email, error, isOpen } = this.state;

    return (
      <React.Fragment>
        <ResetForm 
          email={email}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />

        <ResetDialog 
          isOpen={isOpen}
          email={email}
          error={error}
          handleClose={this.handleClose}
        />
      </React.Fragment>
    );
  }
}

PasswordReset.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(PasswordReset);