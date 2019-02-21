import React from 'react';
import PropTypes from 'prop-types';
import { 
  Button, 
  Dialog, 
  DialogContent, 
  DialogContentText,
  DialogActions,
  withStyles 
} from '@material-ui/core';

const styles = (theme) => ({
  actions: {
    justifyContent: 'center'
  }
});

const ResetDialog = ({ classes, isOpen, email, error, handleClose }) => (
  <Dialog open={isOpen}>
    <DialogContent>   
      { 
        error 
        ? <DialogContentText color="error">
            {error}
          </DialogContentText>
        : <DialogContentText>
            An email was successfully sent to {email}. Please follow the instructions
            in the email to reset your password.
          </DialogContentText>
      }       
    </DialogContent>
    <DialogActions className={classes.actions}>
      <Button onClick={handleClose} color="primary" size="large" variant="contained">
          Ok
      </Button>
    </DialogActions>

  </Dialog>
);

ResetDialog.prototype = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  email: PropTypes.string,
  error: PropTypes.string
};

export default withStyles(styles)(ResetDialog);