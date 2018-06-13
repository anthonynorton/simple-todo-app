import React from 'react';
import './ToggleSlider.css';

function ToggleSlider(props) {
  return (
    <span className="ToggleSlider">
      <input onClick={ props.toggle } type="checkbox" className="ToggleSlider-cb" id={ props.id } checked={ props.isChecked } />
      <label htmlFor={props.id}></label>
      <span className="ToggleSlider-text">{props.isChecked ? props.onText : props.offText}</span>
    </span>
  );
}

export default ToggleSlider;