import React from 'react';
import PropTypes from 'prop-types'; 
import { EmailLock } from 'mdi-material-ui';
import { 
  Button, 
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
    flexDirection: 'column'
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '75px'
  },
  btn: {
    marginTop: theme.spacing.unit
  }
});

const ResetForm = ({ classes, email, handleInput, handleSubmit }) => (
  <Paper className={classes.root}>
    <EmailLock className={classes.icon} />
    <Typography variant="display1">Reset Password</Typography>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="email"
        margin="normal"
        name="email"
        onChange={handleInput}
        required={true}
        type="email"  
        value={email} 
        variant="outlined"
      />
      <Button
        className={classes.btn}
        color="secondary" 
        size="large"
        type="submit"
        variant="contained"
      >
        Reset
      </Button>
    </form>
  </Paper>
);
 
ResetForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
};

export default withStyles(styles)(ResetForm);