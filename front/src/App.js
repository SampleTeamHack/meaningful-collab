import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import InfoCards from './components/InfoCards'
import ProjectsCard from './components/ProjectsCard'
import Carousel from './components/Carousel.js'
import firebase from './api/Firebase';
import Project from './pages/project/Project'
import Navbar from './components/Navbar'


class App extends Component{

    constructor(props){
        super(props);

        this.state = {

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
                        title1: doc.data().name,
                        description1: doc.data().description,
                        urlFile1: doc.data().urlFile
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
        firebase.firestore().collection('project').doc('hI3yw10DfWCgax5RubgP')
            .get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    //console.log('Document data:', doc.data());
                    this.setState({
                        title2: doc.data().name,
                        description2: doc.data().description,
                        urlFile2: doc.data().urlFile
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });

    }


    render(){
        return(
            <div className="App">
            <Navbar/>
                    <div className="app_body">
                        <div className="carouselcontainer">
                            <Carousel />
                            
                        </div>
                     

                    
                    <InfoCards/>
                    <h1 class="heading-1">Proyectos</h1>
                    <div class="divider-1"> <span></span></div>
                    <Grid container 
                    spacing={5}
                    direction = "row"
                    justify = "stretch"
                    alignItems = "stretch"
                    wrap = "nowrap" >
                    <Grid item xs={6}>
                        <ProjectsCard title={this.state.title1} description={this.state.description1} urlFile={this.state.urlFile1} />
                    </Grid>
                    <Grid item xs={6}>
                        <ProjectsCard title={this.state.title2} description={this.state.description2} urlFile={this.state.urlFile2} />
                    </Grid>
                </Grid>
                <Project/>
                </div>
            </div>
        )
    }
}

export default App;
