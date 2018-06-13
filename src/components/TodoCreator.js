import React, { Component } from 'react';
import './TodoCreator.css';

class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: Object.assign({}, this.cleanTodo(), props.todo)
    }

    this.isReturnKey = this.isReturnKey.bind(this);
  }

  onChange = e => {
    this.setState({
      todo: Object.assign({},
        this.state.todo,
        {title: e.target.value.trimStart()})
      })
  }

  onAdd = () => {
    this.props.onAdd(this.state.todo);
    this.setState({todo: this.cleanTodo()});
  }

  cleanTodo = (todo) => {
    return {completed: false, title: ''};
  }

  isReturnKey(e) { if (e.key === 'Enter') this.onAdd() }

  render() {
    return (
      <div className="TodoCreator">
        <div onClick={() => { this.props.onAdd(this.state.todo) }} className="TodoCreator-add"></div>
        <input className="TodoCreator-title-input" onKeyDown={this.isReturnKey} onChange={this.onChange} value={this.state.todo.title} type="text"/>
      </div>
    )
  }
}

export default TodoCreator;

// import React from 'react';

// function TodoCreator(props) {
//   return <input type="text" value={props.todo.title} onChange={props.onChange}/>
// }

// export default TodoCreator;