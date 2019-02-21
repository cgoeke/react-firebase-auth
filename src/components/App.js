import React from 'react';
import PropTypes from 'prop-types'; 
import NavBar from './NavBar';
import Footer from './Footer';
import Routes from '../routes';
import { 
  CssBaseline, 
  Grid, 
  withStyles 
} from '@material-ui/core';

const styles = () => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  main: {
    alignItems: 'center',
    display: 'flex',
    flex: '1 1 auto',
    justifyContent: 'center',
    width: '100%'
  }
});

const App = ({ classes, isLoading }) => (
  <React.Fragment>
    <CssBaseline />
    <Grid className={classes.root}>
      <NavBar />
      <Grid className={classes.main} component="main">
      {
        isLoading 
        ? <div>Loading...</div> 
        : <Routes />  
      }
      </Grid>
      <Footer />
    </Grid> 
  </React.Fragment>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default withStyles(styles)(App);