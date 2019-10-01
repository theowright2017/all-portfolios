import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education.js';
import Experience from './Experience.js';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid className="resume-body">
          <Cell col={6} className='resume-left-col'>
            <div style={{textAlign: 'center'}}>
              <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              height='100px' />
            </div>

            <h3 style={{paddingTop: '1em', textAlign: 'center'}}>Theo Wright</h3>
            <h4 style={{color: "grey", textAlign: 'center'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p>d scrambled it to make a type specimen book. It has survived not only five centuries, but also the </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />



          </Cell>
          <Cell className="resume-right-col" col={6}>
            <h2>Tech Interests</h2>

            <h2>Tech Education</h2>
            <Education
              startYear={2004}
              endYear={2006}
              schoolName="My School"
              schoolDescription="some more ipsum"
              />

              <Education
                startYear={2008}
                endYear={2010}
                schoolName="My other School"
                schoolDescription="some more ipsumsome more ipsumsome more ipsumsome more ipsumsome more ipsumsome more ipsumsome more ipsum"
                />

              <hr style={{borderTop: '2px solid blue'}} />

            <h2>Work History</h2>

            <Experience
              startYear={2013}
              endYear={2015}
              jobName="another job?"
              jobDescription="e ipsumsome more ipsumsome more ipsumsome more ipsumsome more ipe ipsumsome more ipsumsome more ipsumsome more ipsumsome more ipe ipsumsome more ipsumsome more ipsumsome more ipsumsome more ip"
              />

          <hr style={{borderTop: '2px solid blue'}} />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
