import React, {Component} from 'react';


const NavBar = () => {
  return (
    <div className="container">
      <header>
        <div className="menu-icons open">
          <i className="fa fa-bars"></i>
        </div>

        <ul className="nav-list">
            <li className="nav-item">
              <a href="/home" className="nav-link current">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
      </ul>

      </header>


    </div>
  )
}
