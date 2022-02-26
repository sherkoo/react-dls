import React, { useState } from 'react';
import { CheckBoxContainer, CheckBoxButton } from './checkbox.style';

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
      {props.label}
    </CheckBoxContainer>
  );
}

CheckBox.defaultProps = {
  label: "Default label",
}

export default CheckBox;