import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body"
            style={{margin: '0', padding: '0'}}>

        <Grid className="contact-grid"
              style={{margin: '0', padding: '0'}}>
          <Cell col={6} className="left-side"
                style={{margin: '0', padding: '0'}}>
            <h2>Theo Wright</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '30vh'}}
               />
             <p style={{width: '75%', margin: 'auto', paddingTop: '4em'}}>
                ble content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
             </p>
          </Cell>

          <Cell col={6} className="right-side"
                style={{margin: '0', padding: '0'}}>
            <h2>Contact Me</h2>
            <hr/>

          <div className="contact-list">

            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '1.5em', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  07776234532
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '1.5em', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  theowright2015@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '1.5em', fontFamily: 'Anton'}}>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                  https://www.linkedin.com/in/theo-wright/
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '1.5em', fontFamily: 'Anton'}}>
                  <i className="fa fa-github" aria-hidden="true" />
                  https://github.com/theowright2017
                </ListItemContent>
              </ListItem>
            </List>

          </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
