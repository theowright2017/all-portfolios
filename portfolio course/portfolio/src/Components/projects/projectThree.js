import React from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


const projectThree = (props) => {





  return (
    <div className="projects-grid">
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '30vh',
                            background: 'url(https://yt3.ggpht.com/a/AGF-l7-RlcgPdBHqGq83bWinLKtcUXQkX8UV_em3Tw=s900-c-k-c0xffffffff-no-rj-mo) center / cover', padding: 0}}>
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

export default projectThree;
