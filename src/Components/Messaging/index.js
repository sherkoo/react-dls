import React from "react";
import { MessagingContainer } from "./messaging.style";

function Messaging(props) {
  return (
    <MessagingContainer type={props.type} role={props.type}>
      {props.icon && (
        <img src={props.icon} alt={props.label} />
      )}
      {props.label}
    </MessagingContainer>
  );
}

export default Messaging;
