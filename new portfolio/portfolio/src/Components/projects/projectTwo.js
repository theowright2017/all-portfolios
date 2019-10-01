import React from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


const projectTwo = (props) => {





  return (
    <div className="projects-grid">
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '30vh',
                            background: 'url(https://miro.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg) center / cover', padding: 0}}>
        </CardTitle>
        <CardText style={{overflow: 'scroll', height: '15vh'}}>
        This is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different textThis is obviously different text
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

export default projectTwo;
