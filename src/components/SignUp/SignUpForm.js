import React from 'react';
import PropTypes from 'prop-types'; 
import { Button, Paper, TextField, Typography, withStyles } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const styles = (theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 4
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '75px'
  },
  btn: {
    marginTop: theme.spacing.unit
  }
});

const SignUpForm = ({ classes, user, handleInput, handleSubmit, error }) => (
  <Paper className={classes.root}>
    <AccountCircle className={classes.icon}/>
    <Typography variant="display1">Sign Up</Typography>
    <form className={classes.form} onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <TextField
        label="email"
        margin="dense"
        name="email"
        onChange={handleInput}
        required={true}
        type="email"  
        value={user.email} 
        variant="outlined"
      />
      <TextField
        label="password"
        margin="dense"
        name="password"
        onChange={handleInput}
        required={true}
        type="password"  
        value={user.password} 
        variant="outlined"
      />
      <TextField
        label="confirmPassword"
        margin="dense"
        name="confirmPassword"
        onChange={handleInput}
        required={true}
        type="password"  
        value={user.confirmPassword} 
        variant="outlined"
      />
      <Button
        className={classes.btn}
        color="secondary" 
        size="large"
        type="submit"
        variant="contained"
      >
        Sign Up
      </Button>
    </form>
  </Paper>
);  

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  error: PropTypes.string
};

export default withStyles(styles)(SignUpForm);