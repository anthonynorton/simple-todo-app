import React, { Component } from 'react';
import ListItem from './ListItem';
import './List.css';

class List extends Component {
  getListItems() {
    return this.props.list.map(li => {
      return <ListItem toggle={this.props.toggleTodo} remove={this.props.removeTodo} key={li.id} info={li} />
    });
  }

  render() {
    return (
      <ul className="List-ul">
        {this.getListItems()}
      </ul>
    );
  }
}

export default List;