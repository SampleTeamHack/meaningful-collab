import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import InfoCards from './components/InfoCards'

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
                </div>
            </div>
        )
    }
}

export default App;
