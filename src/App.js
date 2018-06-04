import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ToggleSlider from './ToggleSlider';
import List from './List';
import ListItem from './ListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filteredTodosState: [],
      filterCompleted: false,
      authenticated: false,
    }

    this.removeTodo = this.removeTodo.bind(this);
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({todos: data})
      });
  }

  toggleTodo = (id) => {
    // Maybe use a reducde function so as only to loop over this once.
    console.log(id);
    const todos = this.state.todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      } else {
        return {...todo, ...{ completed: !todo.completed }};
      }
    });
    this.setState({
      todos
    });
  }

  getTodos = (filterCompleted) => {
    return this.state.todos.filter(todo => {
      if (filterCompleted) {
        return !todo.completed;
      } else {
        return true;
      }
    })
  }

  removeTodo = (todoId) => {
    if (!!this.state.todos.filter) {
      this.setState((prevState) => {
        return {
          todos: prevState.todos.filter(todo => todo.id !== todoId)
        };
      })
    }
  }

  toggleFilterCompleted = () => {
    this.setState({ filterCompleted: !this.state.filterCompleted })

    this.state.todos.filter(todo => {
      if (this.state.filterCompleted) {
        return !todo.completed;
      } else {
        return true;
      }
    })
  }

  getListItems(list) {
    return list.map(li => {
      return <ListItem toggle={this.toggleTodo} remove={this.removeTodo} key={li.id} info={li} />
    });
  }

  toggleSignInDUMMYAUTH = () => {
    this.setState({ authenticated: !this.state.authenticated });
    console.log('Clicked toggleSignInDUMMYAUTH');
  }

  getAuthState = (authState) => {
    return authState;
  }

  render() {
    return (
      <div className="App">
        <Header toggleAuthDUMMY={ this.toggleSignInDUMMYAUTH } authenticated={ this.getAuthState(this.getAuthState(this.state.authenticated)) } brandname="Todo App"/>
        <section className="App-todos">
          <div className="App-list-header">
            <h1>List Items</h1>
            <ToggleSlider id="hideCompleted" toggle={this.toggleFilterCompleted} isChecked={ this.state.filterCompleted } onText={"Hiding Completed"} offText={"Showing All"}/>
          </div>
          <List children={ this.getListItems(this.state.todos) } />
        </section>
      </div>
    )
  }
}

export default App;