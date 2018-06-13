import React from 'react';
import './ListItem.css';

function ListItem(props) {
  return (
    <li className="ListItem-li">
      <div className="ListItem-main">
        <input onChange={() => props.toggle(props.info.id) } className="ListItem-cb" type="checkbox" checked={props.info.completed} />
        <div>{props.info.title}</div>
      </div>
      <div className="buttons">
        <button onClick={() => props.remove(props.info.id)} className="ListItem-btn ListItem-btn-delete">Delete</button>
        <button onClick={() => props.edit(props.info.id)} className="ListItem-btn ListItem-btn-edit">Edit</button>
      </div>
    </li>
  );
}

export default ListItem;