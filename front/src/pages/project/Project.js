import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PrometerForm from '../../components/project/PromoterForm';
import ProjectForm from '../../components/project/ProjectForm';
import SummaryForm from '../../components/project/SummaryForm';
import firebase from '../../api/Firebase';
import './Project.css';

const steps = ['Promotor', 'Proyecto', 'Resumen'];

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorType: false, errorSize: false, button: true,projectFile:'',uploadValue:0,
      activeStep: 0,
      idCollection: 0,
        name:'',
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
        promoterEmail:'',
        promoterPhone:'',
        urlFile:''
    }
    this.handleOnChange = this.handleOnChange.bind(this);

  }

  classes = () =>  useStyles();


  handleNext = () => {
    this.setActiveStep(this.state.activeStep + 1);
  };

  handleBack = () => {
    this.setActiveStep(this.state.activeStep - 1);
  };

  setActiveStep = (val) =>{
    if(this.state.activeStep === steps.length - 1){
      this.handledFinish();
    }
    this.setState({activeStep: val})
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <PrometerForm onChange={this.onChange} />;
      case 1:
        return <ProjectForm onChange={this.onChange} handleSelectCategory={this.handleSelectCategory} handleOnChange={this.handleOnChange}/>;
      case 2:
        return <SummaryForm data={this.state} />;
      default:
        throw new Error('Unknown step');
    }
  }


  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSelectCategory = (e) =>{
    this.setState({category: e.value});
  }

  handleOnChange (e) {
    e.preventDefault();
    this.setState({ errorType: false, errorSize: false, button: true });
    const types = ['image/png', 'image/jpeg', 'application/pdf']
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref(`${file.name}`) 
    console.log(file.size)    
    console.log(file)    
    var errType = 0;
    var errSize = 0;
    if (types.every(type => file.type !== type)){ 
      this.setState({ errorType: true });
      errType = 1;
    }  
    if (file.size >= 1048576) {
      this.setState({ errorSize: true });
      errSize = 1;
    }
    if(errType === 0 && errSize ===0){
      const task = storageRef.put(file)
      this.setState({ projectFile: file.name })  
  
      task.on('state_changed', (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("percentage")
        console.log(percentage)
        this.setState({
          uploadValue: percentage
        })
      }, (errorSize) => {
        console.error("errorSize.message")
        console.error(errorSize.message)
      }, () => {
        task.snapshot.ref.getDownloadURL().then((urlFile) => {           
          this.setState({ urlFile, button: false });
        });
      })
    }  
  }


  handledFinish(){
    firebase.firestore().collection('project').add({
      name:this.state.name,
      problematic:this.state.problematic,
      solution:this.state.solution,
      method:this.state.method,
      city:'',
      category:this.state.category,
      deadline:this.state.deadline,
      estimatedTime:this.state.estimatedTime,
      promoterAddress:this.state.promoterAddress,
      promoterFirstName:this.state.promoterFirstName,
      promoterLastName:this.state.promoterLastName,
      promoterEmail:this.state.promoterEmail,
      promoterPhone:this.state.promoterPhone,
      urlFile:this.state.urlFile
    }).then(ref => {
      //this.setState({ healthQuote: ref.id, totalValueToPay:  premiumAnnual, idQuote});
      //this.totalValue(this.state.productSelected.premiumAnnual);
    });
  }

  render(){
    return (
    <React.Fragment>
      <CssBaseline />

      <main className="prueba">
        <Paper className="prueba2">
          <Typography component="h1" variant="h4" align="center">
            Iniciativa social
          </Typography>
          <Stepper activeStep={this.state.activeStep} className={this.classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {this.state.activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias.
                </Typography>
                <Typography variant="subtitle1">
                  El proyecto fue creado!.
                </Typography>
              </React.Fragment>
            ) : (
              
              <React.Fragment>
                {this.getStepContent(this.state.activeStep)}
                <div className={this.classes.button}>
                  {this.state.activeStep !== 0 && (
                    <Button onClick={this.handleBack} className={this.classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={this.classes.button}
                  >
                    {this.state.activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
  }
}

export default Project;