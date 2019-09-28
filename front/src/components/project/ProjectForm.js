import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {category} from '../../constants';
import Select from 'react-select';

export default function Project() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Creación del proyecto
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Nombre"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Problemática"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="solution"
            name="solution"
            label="Solución"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12}>
            <TextField
                id="outlined-multiline-flexible"
                label="Como llevar acabo la solución"
                multiline
                rowsMax="12"
                margin="normal"
                variant="outlined"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Select 
                id="category"
                name="category" 
                options={category}                     
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Select 
                id="city"
                name="city" 
                options={category}                     
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            id="deadLine"
            name="deadLine"
            label="Fin de convocatoria"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
            shrink: true,
            }}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="estimatedTime"
            name="estimatedTime"
            label="Estimación"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}