import React, { useState } from 'react';
import { CheckBoxContainer, CheckBoxButton } from './checkbox.style';
import { Label } from '../Typography/index';

function CheckBox(props) {
  const [checked, setChecked] = useState(true);

  const handleClick = () => {
    if (checked === true) {
      setChecked(false)
    } else {
      setChecked(true)
    }
    // allow outside methods
    if (props.click) {
      props.click()
    }
  }

  return (
    <CheckBoxContainer onClick={() => handleClick()}>
      <CheckBoxButton checked={checked} />
      <Label label={props.label} />
    </CheckBoxContainer>
  );
}

CheckBox.defaultProps = {
  label: "Default label",
}

export default CheckBox;