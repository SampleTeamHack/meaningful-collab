import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import firebase from '../../api/Firebase';

class PromoterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos del promotor
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="promoterFirstName"
            name="promoterFirstName"
            label="Nombres"
            fullWidth
            autoComplete="fname"
            onChange={this.props.onChange} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="promoterLastName"
            name="promoterLastName"
            label="Apellidos"
            fullWidth
            autoComplete="lname"
            onChange={this.props.onChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="promoterAddress"
            name="promoterAddress"
            label="Dirección"
            fullWidth
            autoComplete="billing address-line1"
            onChange={this.props.onChange} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="promoterEmail"
            name="promoterEmail"
            label="Email"
            fullWidth
            autoComplete="billing address-level2"
            onChange={this.props.onChange} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="promoterPhone"
            name="promoterPhone"
            label="Teléfono"
            fullWidth
            autoComplete="billing address-level2"
            onChange={this.props.onChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="He leído y acepto los términos y condiciones"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
  }
}

export default PromoterForm;