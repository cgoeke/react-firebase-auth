import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const HomePage = ({ user }) => (
  <Typography variant="display2">Welcome {user.email}</Typography>
);

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(
  mapStateToProps
)(HomePage);