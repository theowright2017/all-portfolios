import React, {Component} from 'react';

import './App.css';

import Toolbar from './Components/Toolbar/Toolbar';

import SideDrawer from './Components/Sidedrawer/SideDrawer.js';

import Backdrop from  './Components/Backdrop/BackDrop.js';

// if main div height is 100%, also body and html in index.css needs to be 100%

class App extends Component {
  state = {
    sideDrawerOpen: false
  };



  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false});
  };


  render() {

    let backdrop;

    if (this.state.sideDrawerOpen){

      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

  return (
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}

      <main style={{marginTop: '3rem'}}>
        <p>this is page content</p>
      </main>


    </div>
  );
}
}

export default App;
