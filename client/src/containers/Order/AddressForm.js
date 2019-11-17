import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { connect, useSelector } from 'react-redux';

class AddressForm extends Component {
    render(){
        const { user } = this.props
        return (
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Shipping address
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="fname"
                    value={user.name}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="lname"
                    value={user.surname}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address line"
                    fullWidth
                    autoComplete="billing address-line"
                    value={user.address}
                  />
                </Grid>
              </Grid>
            </React.Fragment>
        );
    }
}


const mapStateToProps = ({auth}) => ({ user: auth.user })

export default connect(
    mapStateToProps,
    null
)(AddressForm);
