import React, { Component } from 'react';
import Clock from './Clock';
import './Header.css';
import Greeting from './Greeting';

class Header extends Component {
  render() {
    return (
      <div className="Header-main">
        <div className="Header-brandname">{ this.props.brandname }</div>
        <Clock/>
        <Greeting onClick={ this.props.toggleAuthDUMMY } loggedIn={this.props.authenticated} />
      </div>
    );
  }
}

export default Header;