import React from 'react';
import '../css/header.css';
import logo from '../properApps.PNG'
class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {isMenuOpen: false};
  }

  render() {
    return(

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="loginMenu">LOGIN</button>
        <button 
        id="signUpBtn"
        className="signUpBtn"
        // onClick={  }
        >SIGN UP</button>
        <button 
        id="menuBtn"
        className="mobileMenu"
        // onClick={  }
        >☰</button>
        <ul id="desktopNavList">
          <li className="desktopNavItem">
            <a className="desktopNavLink">SERVICES</a>
          </li>
          <li className="desktopNavItem">
            <a className="desktopNavLink">ABOUT</a>
          </li>
          <li className="desktopNavItem">
            <a className="desktopNavLink">CLIENTS</a>
          </li>
          <li className="desktopNavItem">
            <a className="desktopNavLink">TECH</a>
          </li>
        </ul>
      </header>
    );
  };
}


export default Header;