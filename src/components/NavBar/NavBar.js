import React from 'react';
import PropTypes from 'prop-types'; 
import Nav from './Nav';
import AuthNav from './AuthNav';
import { 
  AppBar, 
  Toolbar,
  withStyles 
} from '@material-ui/core';

const styles = (theme) => ({
  appbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'static'
  },
  toolbar: {
    flex: '1 1 auto',
    justifyContent: 'space-between',
    maxWidth: theme.breakpoints.values.md
  }
});

const NavBar = ({ classes, isAuthenticated, isLoading }) => (
  <AppBar className={classes.appbar}>
    <Toolbar className={classes.toolbar}>
    { 
      isLoading
      ? null
      : isAuthenticated
        ? <AuthNav />
        : <Nav />
    }
    </Toolbar>
  </AppBar>
);

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default withStyles(styles)(NavBar);