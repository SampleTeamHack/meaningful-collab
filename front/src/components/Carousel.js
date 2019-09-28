import React, { Component } from "react";
import Slider from 'react-animated-slider';
import HorizontalCss from  'react-animated-slider/build/horizontal.css';
import Grid from '@material-ui/core/Grid';
import firebase from '../api/Firebase.js';


import './Carousel.css'

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: []
        }
    }
    componentDidMount() {
        firebase.firestore().collection('project')
            .onSnapshot(querySnapshot => {
                const projects = [];
                querySnapshot.forEach(doc => {
                    projects.push({
                        title: doc.data().name,
                        description: doc.data().description,
                        image: doc.data().urlFile
                    });
                });
                this.setState({ content: projects });

            })
    }

    render(){
        return(
            <div>
                <Slider>
                    
            {this.state.content.map((item, index) => (
                <div>
                   
                      <div
                className="sliderContent"
                    key={index}
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className ="TextCarousel">
                    <Grid 
                    container spacing={3}
                    direction = "row"
                    className ="TextCarousel"
                    alignItems = "flex-end"
                    wrap = "nowrap" >
                        <Grid item xs={8}
                        >
                            <div className= "TextCarouselContent">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                        {/* <button>{item.button}</button> */}

                        {/* boton */}
                        </Grid>

                    </Grid>

                        
                    </div>
                    </div>
                   
                </div>
         

            ))}
            </Slider>
            </div>
           
            



        )
    }
}

export default Carousel;