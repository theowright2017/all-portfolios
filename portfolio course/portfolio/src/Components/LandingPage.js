import React from 'react';
import { Grid, Cell } from 'react-mdl';
import face from '../images/face.png';
import component from './component.css';


const LandingPage = (props) => {
  return(
    <div className="header-colour" style={{width: '100vw', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>


          <div className="banner-text">

            <h1>Theo Wright</h1>

            <h1>Junior Software Developer</h1>

            <hr/>

            <p> Javascript | React | Firebase | NodeJS | MongoDb </p>


              {/* social media links */}
            <div className="social-links">

              {/* linkedin */}
              <a href="https://www.linkedin.com/in/theo-wright/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="false" />
              </a>

              {/* github */}
              <a href="https://github.com/theowright2017"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="false" />
              </a>
            </div>

          </div>
        </Cell>

      </Grid>


    </div>
  )


}


export default LandingPage;


// <img
//   src={face}
//   alt="avatar"
//   className="avatar-img"
//   />
