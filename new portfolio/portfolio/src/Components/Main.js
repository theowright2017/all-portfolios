import React from 'react';
import {Switch, Route} from 'react-router-dom';


import About from './AboutMe';
import LandingPage from './LandingPage';
import Contact from './Contact';

import Projects from './Projects';




const Main = () => {
  return(
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)
}


export default Main;
