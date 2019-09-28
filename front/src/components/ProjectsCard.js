import React, { Component } from 'react';
import './ProjectsCard.css';

class ProjectsCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="project_card">
                <div class="card_image"> 
                        <img src="http://www.illuminationworksllc.com/wp-content/uploads/2017/04/ProjectManagement-1.jpg"/> 
                    </div>
                    <div class="card_title title-white">
                        <p>Card Title</p>
                    </div>
            </div>
        );
    }
}

export default ProjectsCard;