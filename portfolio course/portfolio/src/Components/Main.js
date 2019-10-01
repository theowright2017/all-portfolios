import React from 'react';
import {Switch, Route} from 'react-router-dom';


import About from './AboutMe';
import LandingPage from './LandingPage';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';




const Main = () => {
  return(
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)
}


export default Main;
