import React from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


const projectOne = (props) => {





  return (
    <div className="projects-grid">
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '30vh',
                            background: 'url(https://cms-assets.tutsplus.com/uploads/users/1199/posts/29683/preview_image/react.jpg) center / cover', padding: 0}}>
        </CardTitle>
        <CardText style={{overflow: 'scroll', height: '15vh'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
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

export default projectOne;
