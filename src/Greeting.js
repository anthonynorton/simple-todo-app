import React from 'react';
import './Greeting.css';

function Login(props) {
  return <div className="Greeting-button">Login</div>
}

function SignOut(props) {
  return <div className="Greeting-button">Sign Out</div>
}

function Greeting(props) {
  const Button = props.loggedIn ? SignOut : Login;

  return (
    <div>
      <Button />
    </div>
  );
}

export default Greeting;