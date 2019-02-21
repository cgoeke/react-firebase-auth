import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Grid, 
  Button, 
  Typography, 
  withStyles 
} from '@material-ui/core';

const styles = (theme) => ({
  title: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  btn: {
    margin: theme.spacing.unit
  }
});

const LandingPage = ({ classes }) => (
  <Grid container direction="column" item>
    <Typography align="center" variant="display3" >React Firebase Auth</Typography>
    <Typography className={classes.title} align="center" gutterBottom variant="title" >
      An authentication boilerplate featuring React, Redux, and Material-UI
    </Typography>
    <Grid container item justify="center">
      <Button className={classes.btn} component={Link} to="/signup" color="secondary" variant="contained">Sign Up</Button>
      <Button className={classes.btn} component={Link} to="/signin" color="secondary" variant="contained">Sign In</Button>
    </Grid>
  </Grid>
);

export default withStyles(styles)(LandingPage);