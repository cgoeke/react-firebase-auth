import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../actions';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    const { signUp } = this.props;
    const { email, password } = this.state;
    
    event.preventDefault();
    signUp(email, password);
  }

  render(){
    const user = this.state;
    const { isAuthenticated, error } = this.props;

    if(isAuthenticated) return <Redirect to="/home" />
    else return ( 
      <SignUpForm 
        user={user}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
}

SignUp.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.string
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
  error: user.error
});

const mapDispatchToProps = dispatch => ({
  signUp: (email, password) => dispatch(signUp(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);