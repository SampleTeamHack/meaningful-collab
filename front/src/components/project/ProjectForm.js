import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {category} from '../../constants';
import Select from 'react-select';
import firebase from '../../api/Firebase';


class ProjectForm extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handledFinish(){
    firebase.firestore().collection('project').add({
      name:'prueba',
      problematic:'',
      solution:'',
      method:'',
      city:'',
      category:'',
      deadline:'',
      estimatedTime:'',
      promoterAddress:'',
      promoterFirstName:'',
      promoterLastName:'',
      urlFile:''
    }).then(ref => {
      //this.setState({ healthQuote: ref.id, totalValueToPay:  premiumAnnual, idQuote});
      //this.totalValue(this.state.productSelected.premiumAnnual);
    });
  }

  render(){
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
            onChange={this.props.onChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="problematic"
            name="problematic"
            label="Problemática"
            fullWidth
            autoComplete="billing address-line1"
            onChange={this.props.onChange} 
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
            onChange={this.props.onChange} 
          />
        </Grid>
        <Grid item xs={12}>
            <TextField
                id="method"
                name="method"
                label="Como llevar acabo la solución"
                multiline
                rowsMax="12"
                margin="normal"
                variant="outlined"
                onChange={this.props.onChange} 
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Select 
                id="category"
                name="category" 
                options={category}     
                onChange={this.props.handleSelectCategory}                  
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Select 
                id="city"
                name="city" 
                options={category}    
                onChange={this.props.handleSelectCategory}                   
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            id="deadline"
            name="deadline"
            label="Fin de convocatoria"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
            shrink: true,
            }}
            onChange={this.props.onChange} 
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
            onChange={this.props.onChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <input type='file' onChange={this.props.handleOnChange} />
        </Grid>

      </Grid>
    </React.Fragment>
  );
  }
}

export default ProjectForm;