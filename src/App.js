import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ToggleSlider from './components/ToggleSlider';
import List from './components/List';
import ListItem from './components/ListItem';
import TodoCreator from './components/TodoCreator';

import firebase from 'firebase';

// Firebase, Project name: simple-todo, Project ID: simple-todoff380
// https://simple-todo-ff3a0.firebaseio.com/

// firebase.initializeApp(config);



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filteredTodosState: [],
      filterCompleted: false,
      authenticated: false,
    }
    window.onbeforeunload = (e) => {
      const localStorage = window.localStorage;
      if (this.state.updated) {
        localStorage.setItem('todos', JSON.stringify(this.state.todos.filter(todo => todo)));
        localStorage.setItem('lastId', this.state.lastId);
      }
    }
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentWillMount() {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(data => this.setState({todos: data.map(todo => Object.assign({}, todo, {editing: false}) )}));

    // Save state to localStorage
    const todos = JSON.parse(localStorage.getItem('todos')).filter(todo => todo) || [];
    const latestSavedId = parseInt(localStorage.getItem('lastId'), 10) || 1;
    const lastId = todos.reduce((id, todo) => todo.id > id ? todo.id : id, latestSavedId)

    this.setState({
      todos,
      lastId,
    });
  }

  toggleEditing = (id) => {}
  
  getTodos = (filterCompleted) => this.state.todos.filter(todo => filterCompleted ? !todo.completed : true)
  
  removeTodo = (todoId) => this.setState({todos: this.state.todos.filter(todo => todo.id !== todoId), updated: true})
  
  toggleFilterCompleted = () => this.setState({ filterCompleted: !this.state.filterCompleted })
  
  getListItems = (list) => list.map(li => <ListItem toggle={this.toggleComplete} remove={this.removeTodo} key={li.id} info={li} />)
  
  saveNewTodo = (todo) => this.setState({ todos: [...this.state.todos, this.validateTodo(todo)] })
  
  createTodo = (todo) => this.setState({todos: [...this.state.todos, this.state.newTodo], newTodo: {title: ''}, updated: true})
  
  validateTodo = todo => Object.assign({}, {complete: false, title: '', id: this.getNewId()}, todo)
  
  toggleComplete = (id) => this.setState({ todos: this.state.todos.map(todo => todo.id !== id ? todo : { ...todo, ...{ completed: !todo.completed } })})

  getNewId = () => {
    const newId = this.state.lastId + 1;
    this.setState({lastId: newId, updated: true});
    return newId;
  }

  complete = () => this.state.todos.filter(todo => todo.completed).length

  incomplete = () => this.state.todos.filter(todo => !todo.completed).length

  render() {
    return (
      <div className="App">
        <Header brandname="Todo App"/>
        <section className="App-todos">
          <div>${Object.keys(process).map(key => <span>{key}</span>)}</div>
          <TodoCreator todo={{title: ''}} onAdd={this.saveNewTodo} onSubmit={this.createTodo}/>
          <div className="App-list-header">
            <h1>List Items</h1>
            <ToggleSlider id="hideCompleted" toggle={this.toggleFilterCompleted} isChecked={ this.state.filterCompleted } onText={"Hiding Completed"} offText={"Showing All"}/>
          </div>
          <List children={this.getListItems(this.getTodos(this.state.filterCompleted)) } />
        </section>
      </div>
    )
  }
}

export default App;