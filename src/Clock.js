import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() };
  }

  componentWillMount() {
    this.timerID = setInterval( () => this.tick(), 1000 );
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json() )
      .then(data => {
        this.setState({})
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })

    // this.setState((prevState, props) => ({
    //   counter: prevState.counter + props.increment
    // }));
  }

  render() {
    return (
      <div className="Clock">
        <div>{ this.state.date.toLocaleTimeString() }</div>
      </div>
    );
  }
}

export default Clock;