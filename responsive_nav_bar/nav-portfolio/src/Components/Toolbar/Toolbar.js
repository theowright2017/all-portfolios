import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton';

const toolbar = props => (

  <header className="toolbar">
    <nav className="toolbar-nav">
      <div className='toolbar-toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>

      <div className="toolbar-logo">
      <a href="/">The Logo </a>
      </div>
      <div className="spacer" />
      <div className="toolbar-nav-list">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>

    </nav>
  </header>
);

export default toolbar;
