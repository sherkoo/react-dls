import React, { useState, useEffect, useRef } from "react";

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
  const refDropdown = useRef(null);

  // handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!refDropdown.current.contains(event.target)) {
        setExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

  }, [expanded])

  const handleExpand = (event) => {
    if (expanded === true) {
      setExpanded(false)
    } else {
      setExpanded(true)
    }
  }

  return (
    <DrodpdownContainer ref={refDropdown} >
      <DropdownButton onClick={handleExpand}>
        <span>{props.label}</span>
        <DropdownIcon>Icon</DropdownIcon>
      </DropdownButton>
      {expanded && (
        <DropdownContents>
          {props.data.map((d, index) => {
            return <DrodpdownContentsItem key={index}>{d}</DrodpdownContentsItem>;
          })}
        </DropdownContents>
      )}
    </DrodpdownContainer>
  );
}

export default Dropdown;
