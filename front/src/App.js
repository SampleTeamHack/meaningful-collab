import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import InfoCards from './components/InfoCards'
import ProjectsCard from './components/ProjectsCard'
import Carousel from './components/Carousel.js'

class App extends Component{

    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return(
            <div className="App">
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
                            <ProjectsCard/>
                        </Grid>
                        <Grid item xs={6}>
                            <ProjectsCard/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default App;
