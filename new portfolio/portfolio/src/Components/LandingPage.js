import React from 'react';
import { Grid, Cell } from 'react-mdl';
import face from '../images/face.png';
import component from './component.css';


const LandingPage = (props) => {
  return(
    <div className="header-colour" style={{width: '100vw', display: 'flex'}}>

      <Grid className="landing-grid">

        <Cell col={8} style={{width: '100vw'}}>


          <div className="banner-text">

            <h1>Hi, I'm Theo</h1>

            <p>I recently graduated from Codeclan, where I dove into the world of Full Stack Web Development, and came out with some cool new skills</p>

            <p>I love learning, and have now decided to focus on a specific area to master, before I move onto anything else....</p>

            <p></p>

            <hr/>

            <p> Javascript | React | Firebase | NodeJS | MongoDb </p>



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
