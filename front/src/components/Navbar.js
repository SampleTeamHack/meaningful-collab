import React from 'react';
import './Navbar.css';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const  StyledButton = withStyles({
    root: {
      backgroundImage: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
      margin: '1vh 0vw 1vh 0vh',
      fontSize: '1.05rem',
      transitionProperty: 'opacity',
      transitionDuration: '0.1s',
      '&:hover': {
        opacity: 0.9,
      },
      '&:active': {
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
      },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


function Navbar() {
  return (
      <div className="nav_bar">
          <div className="nav_bar_container">
            <Grid container 
                    spacing={5}
                    direction = "row"
                    justify = "center"
                    alignItems = "center" >

                    <Grid item xs={2}>
                        <h1>App logo</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <form className="search-container">
                            <input type="text" id="search-bar" placeholder="What can I help you with today?">
                            </input>
                            <a href="#"><img className="search-icon" 
                                src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png">
                                </img>    
                            </a>
                        </form>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledButton>
                            Proponer proyecto
                        </StyledButton>
                    </Grid>
                </Grid>
            </div>
      </div>
  );
}

export default Navbar;