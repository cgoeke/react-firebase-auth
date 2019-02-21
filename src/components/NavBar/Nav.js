import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import { Button, IconButton } from '@material-ui/core';

const Nav = () => (
  <React.Fragment>
    <IconButton 
      color="inherit" 
      component={Link} 
      to="/"
    >
      <Home fontSize="large"/>
    </IconButton> 

    <Button 
      color="secondary"
      component={Link} 
      to="/signin" 
      variant="contained"
    >
      Sign In
    </Button>
  </React.Fragment>
);

export default Nav;