import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  toggle() {
    this.props.toggle(this.props.info.id);
  }

  render() {
    return (
      <li className="ListItem-li">
        <div className="ListItem-main">
          <input onClick={this.toggle.bind(this)} className="ListItem-cb" type="checkbox" checked={this.props.info.completed} />
          <div>{this.props.info.title}</div>
        </div>
        <div className="buttons">
          <button onClick={() => this.props.remove(this.props.info.id)} className="ListItem-btn ListItem-btn-delete">Delete</button>
          <button onClick={() => this.props.edit(this.props.info.id)} className="ListItem-btn ListItem-btn-edit">Edit</button>
        </div>
      </li>
    );
  }
}

export default ListItem;