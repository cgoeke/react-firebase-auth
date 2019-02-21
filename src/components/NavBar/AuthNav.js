import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut';
import { Home } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const AuthNav = () => (
  <React.Fragment>
    <IconButton 
    color="inherit" 
    component={Link} 
    to="/home"
    >
      <Home fontSize="large"/>
    </IconButton>

    <SignOut />
  </React.Fragment>
);

export default AuthNav;