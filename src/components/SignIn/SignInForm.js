import React from 'react';
import PropTypes from 'prop-types'; 
import { Link as RouterLink } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';
import { 
  Button, 
  Link,
  Paper, 
  TextField, 
  Typography, 
  withStyles 
} from '@material-ui/core';

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

const SignInForm = ({ classes, user, handleInput, handleSubmit, error }) => (
  <Paper className={classes.root}>
    <AccountCircle className={classes.icon} />
    <Typography variant="display1">Sign In</Typography>
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
      <Button
        className={classes.btn}
        color="secondary" 
        size="large"
        type="submit"
        variant="contained"
      >
        Sign In
      </Button>
    </form>
    <Link component={RouterLink} to="/password-reset" variant="subtitle1">
      Forgot password?
    </Link>
  </Paper>
);

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  error: PropTypes.string
};

export default withStyles(styles)(SignInForm);