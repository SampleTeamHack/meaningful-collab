import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from '../../api/Firebase';
import { cities } from '../../constants';


import './Detail.css';



class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: '',
      city: 0,
      deadline: '',
      description: '',
      estimatedTime: '',
      method: '',
      name: '',
      problematic: '',
      promoterFirstName: '',
      promoterLastName: '',
      promoterAddress: '',
      solution: '',
      urlFile: ''
    };
}

componentDidMount() {
    console.log('componentDidMount');
    firebase.firestore().collection('project').doc('u6xaly8UoPHBf4EwuOyr')
    .get()
    .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          //console.log('Document data:', doc.data());
          this.setState({
            id: doc.id,
            category: doc.data().category,   
            city: doc.data().city, 
            deadline: doc.data().deadline,  
            description: doc.data().description,
            estimatedTime: doc.data().estimatedTime,
            method: doc.data().method,
            name: doc.data().name, 
            problematic: doc.data().problematic,
            promoterFirstName: doc.data().promoterFirstName,
            promoterLastName: doc.data().promoterLastName,
            promoterAddress: doc.data().promoterAddress,   
            solution: doc.data().solution,         
            urlFile: doc.data().urlFile
        });         
        }
        console.log(this.state.estimatedTime);
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
      
    }

  render() {
    return (
        <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={this.state.urlFile}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {this.state.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Problematica
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {this.state.problematic}
            </Typography>   
            <Typography variant="h6" gutterBottom>
              Solución
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {this.state.solution}
            </Typography>  
            <Typography variant="h6" gutterBottom>
              ¿Como se lleva a cabo?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {this.state.method}
            </Typography>     
            <Typography variant="h6" gutterBottom>
              Tiempo estimado
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {this.state.estimatedTime}
            </Typography>   
            <Typography variant="h6" gutterBottom>
              Promotor
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {this.state.promoterFirstName} {this.state.promoterLastName} 
            </Typography>  
            <Typography variant="h6" gutterBottom>
              Ciudad
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {this.state.city} 
             {cities.find(option => option.value === this.state.city)}
            </Typography>        
            <Typography variant="h6" gutterBottom>
              Fin de convocatoria
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {this.state.deadline} 
             
            </Typography>                                                                        
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Detail;