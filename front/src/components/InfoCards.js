import React from 'react';
import './InfoCards.css';
import Grid from '@material-ui/core/Grid';

function InfoCards() {
  return (
      <div className="info_cards_container">
            <Grid container 
                spacing={5}
                direction = "row"
                justify = "stretch"
                alignItems = "stretch"
                wrap = "nowrap" >
                <Grid item xs={4}>
                    <div class="card-container"> 
                        <div class="card"><a href="hottub">
                            <div class="card--display">
        
                                <h2>Ayuda</h2>
                            </div>
                            <div class="card--hover">
                                <h2>Ayuda</h2>
                                <p>Texto descriptivo</p>
                                <p class="link">Ver mas</p>
                            </div></a>
                            <div class="card--border"></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div class="card-container"> 
                        <div class="card"><a href="hottub">
                            <div class="card--display">
        
                                <h2>Propone</h2>
                            </div>
                            <div class="card--hover">
                                <h2>Propone</h2>
                                <p>Texto descriptivo</p>
                                <p class="link">Ver mas</p>
                            </div></a>
                            <div class="card--border"></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div class="card-container"> 
                        <div class="card"><a href="hottub">
                            <div class="card--display">
        
                                <h2>Explora</h2>
                            </div>
                            <div class="card--hover">
                                <h2>Explora</h2>
                                <p>Texto descriptivo</p>
                                <p class="link">Ver mas</p>
                            </div></a>
                            <div class="card--border"></div>
                        </div>
                    </div>
                </Grid>
            </Grid>
      </div>
  );
}

export default InfoCards;
