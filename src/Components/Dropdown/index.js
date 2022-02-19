import React, { useState } from "react";

import {
  DropdownButton,
  DropdownIcon,
  DropdownContents,
  DrodpdownContentsItem,
  DrodpdownContainer,
} from "./dropdown.style";

/**
 *
 * @param {label}
 * @returns dropdown label
 */

function Dropdown(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    if(expanded === true){
      setExpanded(false)
    } else {
      setExpanded(true)
    }
  }

  return (
    <DrodpdownContainer>
      <DropdownButton onClick={handleExpand}>
        <span>{props.label}</span>
        <DropdownIcon>Icon</DropdownIcon>
      </DropdownButton>
      {expanded && (
        <DropdownContents>
          {props.data.map((d, index) => {
            return <DrodpdownContentsItem>{d}</DrodpdownContentsItem>;
          })}
        </DropdownContents>
      )}
    </DrodpdownContainer>
  );
}

export default Dropdown;
