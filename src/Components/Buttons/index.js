import React from 'react';
import {ButtonStyle} from './button.style';

/**
 * Props
 * 
 * @param {props.label}
 * @returns button label
 * 
 * @param {props.size}
 * @returns large, medium, small
 * 
 * @param {props.type}
 * @returns primary, secondary, disabled, ghost, error, success
 */

function Button(props) {
  return (
    <ButtonStyle size={props.size} type={props.type}>
      {props.label}
    </ButtonStyle>
  );
}

export default Button;