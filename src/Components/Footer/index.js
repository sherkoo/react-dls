import React from 'react';
import Button from '../Buttons/index';
import { FooterContainer } from "./footer.style";

function Footer(props) {
  return (
    <FooterContainer position={props.position}>
      {props.children}
    </FooterContainer>
  );
}

Footer.defaultProps = {
  primary: true,
  secondary: true,
  tertiary: true,
  position: "right",
}

export default Footer;