import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../actions';
import SignInForm from './SignInForm';

class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    const { signIn } = this.props;
    const { email, password } = this.state;
    
    event.preventDefault();
    signIn(email, password);
  }

  render(){
    const user = this.state;
    const { isAuthenticated, error } = this.props;

    if(isAuthenticated) return <Redirect to="/home" />
    else return ( 
      <SignInForm 
        user={user}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
}

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.string
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
  error: user.error
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signIn(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);