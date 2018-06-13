import React from 'react';
import './List.css';

function List(props){
  return (
    <ul className="List-ul">
    {props.children}
    </ul>
  );
}

export default List;