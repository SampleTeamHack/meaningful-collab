import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import InfoCards from './components/InfoCards'
import ProjectsCard from './components/ProjectsCard'

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
                    <InfoCards/>
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
