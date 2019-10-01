import React from 'react';
import Main from './Components/Main';
import { Button, Card, CardText, Layout, Header,
          Navigation, Drawer, Content} from 'react-mdl';

import './App.css';

import { Link } from 'react-router-dom';



function App() {
  return (
    <div style={{height: '100vh', position: 'relative'}}>
    <Layout >
        <Header className="header-colour" title="Title" style={{color: 'white'}}
          >
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" >
             <Main />
          </div>
        </Content>
    </Layout>
</div>



  );
}

export default App;
