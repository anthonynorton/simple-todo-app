import React, { Component } from 'react';
import Clock from './Clock';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header-main">
        <div className="Header-brandname">{ this.props.brandname }</div>
        <Clock/>
      </div>
    );
  }
}

export default Header;