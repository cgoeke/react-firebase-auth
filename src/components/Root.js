import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';

const Root = ({ isLoading }) => (
  <App isLoading={isLoading} />
);

const mapStateToProps = ({ user }) => ({
  isLoading: user.isLoading
});

Root.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default withRouter(connect(mapStateToProps)(Root));