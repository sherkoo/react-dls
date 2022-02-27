import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationLeftContainer,
  NavigationLinkContainer,
  NavFooterContainer
} from "./navigation.style";
import icon from "../Checkbox/images/icons/check.svg";

function NavigationLink(props) {
  return (
    <NavigationLinkContainer>
      <img src={props.icon} alt={props.label} />
      {props.label}
    </NavigationLinkContainer>
  );
}

function NavigationLeft(props) {
  return (
    <NavigationLeftContainer>
      <div>
        <div>
          Logo
        </div>
        <div>
          <NavigationLink icon={icon} label="Link 1" />
          <NavigationLink icon={icon} label="Link 2" />
          <NavigationLink icon={icon} label="Link 3" />
        </div>
      </div>
      <NavFooterContainer>
        footer
      </NavFooterContainer>
    </NavigationLeftContainer>
  );
}

export { NavigationLeft };
