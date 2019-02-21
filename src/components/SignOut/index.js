import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signOut } from '../../actions';
import { Button } from '@material-ui/core';

class SignOut extends Component {

  handleClick = () => {
    const { signOut, history } = this.props;

    signOut();
    history.push("/");
  }

  render(){
    return(
      <Button 
        onClick={this.handleClick}
        color="secondary"
        variant="contained"
      >
        Sign Out
      </Button>
    );
  }
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

SignOut = connect(
  null, 
  mapDispatchToProps
)(SignOut);

export default withRouter(SignOut);