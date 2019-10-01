import React from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


const projectFour = (props) => {





  return (
    <div className="projects-grid">
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '30vh',
                            background: 'url(https://i.udemycdn.com/course/240x135/1879018_95b6.jpg) center / cover', padding: 0}}>
        </CardTitle>
        <CardText style={{overflow: 'scroll', height: '15vh'}}>
        This is obviously different text This is obviously different text This is obviously different text This is obviously different text This is obviously different text  This is obviously different text
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    </div>

  )
}

export default projectFour;
