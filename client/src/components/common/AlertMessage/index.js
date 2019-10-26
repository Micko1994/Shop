import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AlertDialog extends PureComponent {
  state = {
    setOpen: true
  }

  render(){
    console.log('this.props.handleCloseAlert::', this.props)
    return (
      <div>
        <Dialog
          open={this.props.setOpen}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Please sign up"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              to be able to make purchases.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.linkToSignIn} color="primary">
              Go To Sign Up
            </Button>
            <Button onClick={this.props.handleCloseAlert} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )}
}